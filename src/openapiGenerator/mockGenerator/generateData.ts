import { OpenAPI, OpenAPIV3, OpenAPIV2 } from "openapi-types";

type RelationType = "oneOf" | "anyOf" | "allOf" | "not";

export function generateModelsWithData(obj: OpenAPI.Document) {
    const models: any = {};
    const schemas: OpenAPIV3.ComponentsObject | OpenAPIV2.DefinitionsObject = ((obj as OpenAPIV3.Document)?.components)?.schemas || (obj as OpenAPIV2.Document).definitions;
    const unsortedSchemaKeys: Array<string> = Object.keys(schemas);
    const unsortedSchemaKeysWithRef: Array<string> = unsortedSchemaKeys.filter((key: string) => JSON.stringify(schemas[key]).indexOf("$ref") > -1);
    let sortedSchemaKeys: Array<string> = unsortedSchemaKeys.filter((key: string) => JSON.stringify(schemas[key]).indexOf("$ref") === -1);

    unsortedSchemaKeysWithRef.sort((a: string, b: string) => {
        const refCount: number = (JSON.stringify(schemas[a]).match(/ref/g) || []).length;
        const referredKeysCount: number = sortedSchemaKeys.map((current: string): number => {
            return (JSON.stringify(schemas[a]).match(new RegExp(current, "g")) || []).length;
        }).reduce((accumulate: number, current: number) => accumulate + current);
        return refCount === referredKeysCount ? -1 : 0;
    });
    sortedSchemaKeys = [...sortedSchemaKeys, ...unsortedSchemaKeysWithRef];
    sortedSchemaKeys.forEach((modelName: string) => {
        const schema: OpenAPIV2.SchemaObject | OpenAPIV3.SchemaObject = schemas[modelName];
        models[modelName] = generateData(modelName, schema, models);
    });
    return models;
}

export function generateData(modelName: string, schema: OpenAPIV2.SchemaObject | OpenAPIV3.SchemaObject, models?: any): any {
    let newModel: any = {};
    if ((schema as OpenAPIV3.ReferenceObject)?.$ref) {
        const reference: any = getReference((schema as OpenAPIV3.ReferenceObject).$ref, models);
        newModel = typeof reference === "string" ? reference : { ...newModel, ...reference };
    }
    if (schema?.allOf || schema?.anyOf || schema?.oneOf) {
        Object.keys(schema).filter((key: RelationType) => key === "allOf" || key === "anyOf" || key === "oneOf" || key === "not")
            .map((key: RelationType) => {
                switch (key) {
                    case "allOf":
                        (schema.allOf as Array<OpenAPIV3.ReferenceObject>).map((item: OpenAPIV3.ReferenceObject) => {
                            newModel = { ...newModel, ...item.$ref ? getReference(item.$ref, models) : generateData(modelName, item) };
                        });
                        break;
                    case "not": // TODO: fix not property
                        newModel = { ...newModel, ...generateData(modelName, { type: "string" }) };
                        break;
                    default:
                        const listOfReferences: Array<OpenAPIV3.ReferenceObject> = (schema.oneOf || schema.anyOf) as Array<OpenAPIV3.ReferenceObject>;
                        const selectedItem: OpenAPIV3.ReferenceObject = listOfReferences?.length ? listOfReferences[Math.floor(Math.random() * listOfReferences.length)] : null;
                        if (!!selectedItem) {
                            newModel = { ...newModel, ...selectedItem.$ref ? getReference(selectedItem.$ref, models) : generateData(modelName, selectedItem) };
                        }
                }
            });
    }
    if (schema && !(schema as OpenAPIV3.ReferenceObject)?.$ref) {
        switch (schema.type) {
            case "object":
                const object: any = {};
                const { properties } = schema;
                if (properties) {
                    Object.keys(properties).forEach((attribute: string) => {
                        object[attribute] = generateData(attribute, properties[attribute], models);
                    });
                }
                newModel = { ...newModel, ...object };
                break;
            case "array":
                newModel = [generateData(modelName, schema.items, models)];
                break;
            case "integer":
            case "number": newModel = schema.example || 0; break;
            case "boolean": newModel = schema.example || true; break;
            default:
                let example: string = schema.example ? schema.example : schema.enum ? schema.enum[0] : modelName;
                if (schema.format === "date-time") {
                    example = new Date("2020 01 01").toLocaleString();
                }
                newModel = example;
        }
    }
    return newModel;
}

/**
 * get model reference by path
 * @param path path of reference
 * @param references list of references
 */
function getReference(path: string, references: Array<OpenAPIV3.ReferenceObject>) {
    const referencePath: Array<string> = path.split("/");
    return references[referencePath[referencePath.length - 1]];
}
