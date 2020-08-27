import { OpenAPI, OpenAPIV3, OpenAPIV2 } from "openapi-types";
import { generateData, generateModelsWithData } from "./generateData";

export const APPLICATION_JSON: string = "application/json";
export type ApplicationJson = "application/json";

export type ResponsesType<T extends string = ApplicationJson> = {
    [path: string]: {
        [k in T]: { schema: any };
    };
};

export const extractResponses = (obj: OpenAPI.Document): ResponsesType => {
    const extracted: any = {};
    const modelSchemas: any = generateModelsWithData(obj);
    Object.keys(obj.paths).forEach(path => {
        const methods: any = obj.paths[path];
        Object.keys(methods).forEach((method: string) => {
            const api: OpenAPI.Operation = methods[method];
            const { responses, operationId } = api;
            let methodName: string = operationId;
            if (methodName) {
                methodName = methodName.replace(/^\w/, (c: string) => c.toLowerCase());
            }
            const key: string = methodName ? methodName : formatPathToKey(path, method);
            extracted[key] = {};
            Object.keys(responses).forEach((statusCode: string) => {
                const response: OpenAPIV3.ParameterObject | OpenAPIV2.ParameterObject = responses[statusCode];
                const defaultReturn: string = response.description;
                let mock: any = response.schema || defaultReturn;
                let isExample: boolean = false;
                if (response.content && response.content[APPLICATION_JSON]?.example) {
                    mock = response.content[APPLICATION_JSON].example;
                    isExample = true;
                } else if (response.content && response.content[APPLICATION_JSON]?.schema) {
                    mock = response.content[APPLICATION_JSON].schema;
                }
                mock = typeof mock === "string" || isExample ? mock : generateData("", mock, modelSchemas);
                extracted[key][statusCode] = mock;
            });
        });
    });
    return extracted;
};

/**
 * format path to key
 * @param path api path
 * @param method method name
 * @returns formatted path
 */
function formatPathToKey(path: string, method: string): string {
    let newString: string = "";
    const pathArr: Array<string> = path.split("/").slice(1);
    pathArr.forEach((item: string, index: number) => {
        let newItem: string = item.replace(/[^\w\s]/gi, "");
        if (index > 0) {
            newItem = sentenceCase(newItem)
        }
        newString += newItem;
    })
    return newString + sentenceCase(method);
}

/**
 * format string to sentence case
 * @param newString string to format
 * @returns formatted string
 */
function sentenceCase(newString: string): string {
    return newString.charAt(0).toUpperCase() + newString.slice(1);
}