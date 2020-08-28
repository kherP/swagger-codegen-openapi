enum OptionName {
    baseUrl = "--baseUrl",
    baseUrlShort = "-u",
    openapiTemplate = "--openapiTemplate",
    disableDirClean = "--disableDirClean",
    disableMock = "--disableMock",
    withCustomInterceptors = "--withCustomInterceptors",
    withCustomConfigs = "--withCustomConfigs",
}

/**
 * custom options
 */

export const CustomOptions: Array<CustomOptionType> = [
    {
        option: [OptionName.baseUrlShort, OptionName.baseUrl],
        description: "baseUrl",
        mappingName: "baseUrl"
    },
    {
        option: [OptionName.openapiTemplate],
        description: "use openapi template",
        noValue: true
    },
    {
        option: [OptionName.disableDirClean],
        description: "disable direactory clean",
        noValue: true
    },
    {
        option: [OptionName.disableMock],
        description: "disable generation of mock.json",
        noValue: true
    },
    {
        option: [OptionName.withCustomInterceptors],
        description: "indicator of using custom interceptor",
        mappingName: "withCustomInterceptors"
    },
    {
        option: [OptionName.withCustomConfigs],
        description: "indicator of using custom config",
        mappingName: "withCustomConfigs"
    },
    {
        option: null,
        description: "separate models and apis",
        mappingName: "withSeparateModelsAndApi",
        defaultValue: "true",
        additionalProp: true,
        removeOnFalse: true
    },
    {
        option: null,
        description: "api package folder",
        mappingName: "apiPackage",
        defaultValue: "api",
        additionalProp: true
    },
    {
        option: null,
        description: "model package folder",
        mappingName: "modelPackage",
        defaultValue: "model",
        additionalProp: true
    }
];



export const customGeneratorMapper: Array<CustomGeneratorMapper> = [
    {
        generator: "ts-angular",
        relativeGenerator: "typescript-axios"
    }
];

export const CustomTemplates: Array<SEBTemplate> = [
    {
        generator: "typescript-axios",
        templatePath: "./node_modules/swagger-codegen-openapi/dist/openapiGenerator/templates/typescript-axios"
    },
    {
        generator: "typescript-angular",
        templatePath: "./node_modules/swagger-codegen-openapi/dist/openapiGenerator/templates/typescript-angular"
    },
    {
        generator: "ts-angular",
        templatePath: "./node_modules/swagger-codegen-openapi/dist/openapiGenerator/templates/ts-angular"
    }
]
