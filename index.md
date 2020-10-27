[![https://img.shields.io/npm/v/swagger-codegen-openapi](https://img.shields.io/npm/v/swagger-codegen-openapi)](https://www.npmjs.com/package/swagger-codegen-openapi)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=sebgroup/frontend-tools)](https://dependabot.com)
![https://img.shields.io/npm/l/swagger-codegen-openapi](https://img.shields.io/npm/l/swagger-codegen-openapi)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/swagger-codegen-openapi)


# OpenAPI Code generator

## Installation

### npm

```terminal
npm i swagger-codegen-openapi -D
```

### yarn

```terminal
yarn add swagger-codegen-openapi -D
```

<hr/>

## Usage
Add this to your scripts and execute `generate:api` whenever you need to generate APIs

```json
"generate:api" : "generate-api -i swaggerUrl -g typescript-axios"
```

<hr/>

## Options available
Generally, the options available are similar to existing [openapi-generator tools](https://openapi-generator.tech/docs/usage ). You can browse the [page](https://openapi-generator.tech/docs/generators#documentation-generators) for extra options for each generator.

Example of usage of extra options for typescript-axios generator:

```terminal
generate-api -i swagger/url -g typescript-axios -p withSeparateModelsAndApi=false,withInterfaces=true
```

## Customs options for `generate` command in our library

| Option                                                 | Description                                                                  | Example of usage                                                            |
| ------------------------------------------------------ | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| openapiTemplate                                        | generate code with openapi default templates<sup>[1](#optionFootnote1)</sup> | `generate-api -i swagger/url -g typescript-axios --openapiTemplate`         |
| disableDirClean                                        | disable removing of output folder when generating code                       | `generate-api -i swagger/url -g typescript-axios --disableDirClean`         |
| disableMock                                            | disable mock from generating when generating code                            | `generate-api -i swagger/url -g typescript-axios --disableMock`             |
| baseUrl<sup>[2](#optionFootnote2)</sup>                | base url of SEB default templates                                            | `generate-api -i swagger/url -g typescript-axios --baseUrl https://baseurl` |
| withCustomInterceptors<sup>[3](#optionFootnote3)</sup> | insert custom interceptor in code generated with `sebTemplate`               | `generate-api generate -i swagger/url --withCustomInterceptors`             |
| withCustomConfigs<sup>[4](#optionFootnote4)</sup>      | insert custom config in code generated with `sebTemplate`                    | `generate-api -i swagger/url -g typescript-axios --withCustomConfigs`       |

<hr/>

## Footnotes
<a name="optionFootnote1">Note 1</a>: If not specified, SEB template will be used by default. For SEB templates, currently only support for `typescript-axios` generator

<a name="optionFootnote2">Note 2</a>: if `baseUrl` is not passed, the default URL with being the base URL of swagger URL, if the URL is not valid, `http://localhost` will be the `baseUrl`.

<a name="optionFootnote3">Note 3</a>: user will need to map your api interceptor path to **@ApiInterceptors** in `tsconfig.json`

<a name="optionFootnote4">Note 4</a>: user will need to map your custom config path to **@configs** in `tsconfig.json`.

```json
 "paths": {
     "@configs": ["./src/configs.ts"],
 }
```

<hr/>

## Side notes
User can define their own templates as well, by specifying `templates directory` with option `-t`. The files' name of the templates directory must be corresponding to the default file name in [openapi generator](https://github.com/OpenAPITools/openapi-generator/tree/master/modules/openapi-generator/src/main/resources).

