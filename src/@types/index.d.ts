declare type ApplicationJson = "application/json";

declare type ResponsesType<T extends string = ApplicationJson> = {
    [path: string]: {
        [k in T]: { schema: any };
    };
};

declare type RelationType = "oneOf" | "anyOf" | "allOf" | "not";

declare interface BatchArgumentType {
    "fail-fast"?: boolean;
    "includes-base-dir"?: string;
    "root-dir"?: string;
    timeout?: string;
    threads?: string;
    r?: string;
    verbose?: boolean;
    v?: boolean;
}

interface ConfigHelpArgumentType {
    f?: string;
    format?: string;
    o?: string;
    output?: string;
    g?: string;
    "generator-name"?: string;
    "feature-set"?: boolean;
    "import-mappings"?: boolean;
    "instantiation-types"?: boolean;
    "language-specific-primitive"?: boolean;
    "markdown-header"?: boolean;
    "named-header"?: boolean;
    "reserved-words"?: boolean;
    "full-details"?: boolean;
}

declare interface CustomOptionType extends OptionType {
    mappingName?: string;
    dependedOption?: Array<string>;
    errorMessage?: string;
    noValue?: boolean;
    defaultValue?: string;
    additionalProp?: boolean;
    removeOnFalse?: boolean;
}

declare interface AdditionalProps {
    withSeparateModelsAndApi?: boolean;
}

declare interface SEBTemplate {
    generator: OpenApiGenerator;
    templatePath: string;
    disableMock?: boolean;
}

declare interface CustomOptionsArgumentType {
    baseUrl?: string;
    u?: string;
    openapiTemplate?: boolean;
    disableDirClean?: boolean;
    disableMock?: boolean;
    withCustomInterceptors?: boolean;
    withCustomConfigs?: boolean;
}

declare interface CustomGeneratorMapper {
    generator: SEBGenerator;
    relativeGenerator: OpenApiGenerator;
}

declare interface GenerateArgumentType {
    auth?: string;
    a?: string;
    config?: string;
    c?: string;
    D?: string;
    engine?: string;
    e?: string;
    g?: OpenApiGenerator;
    library?: string;
    i?: string;
    output?: string;
    o?: string;
    p?: string;
    t?: string;
    s?: boolean;
    v?: boolean;
    verbose?: boolean;
    "api-name-suffix"?: string;
    "api-package"?: string;
    "artifact-id"?: string;
    "artifact-version"?: string;
    "dry-run"?: boolean;
    "enable-post-process-file"?: boolean;
    "generator-name"?: OpenApiGenerator;
    "generate-alias-as-model"?: boolean;
    "git-host"?: string;
    "git-repo-id"?: string;
    "git-user-id"?: string;
    "group-id"?: string;
    "http-user-agent"?: string;
    "ignore-file-override"?: string;
    "import-mappings"?: string;
    "instantiation-types"?: string;
    "invoker-package"?: string;
    "language-specific-primitives"?: string;
    "log-to-stderr"?: boolean;
    "minimal-update"?: boolean;
    "model-name-prefix"?: string;
    "model-name-suffix"?: string;
    "model-package"?: string;
    "package-name"?: string;
    "release-note"?: string;
    "remove-operation-id-prefix"?: boolean;
    "reserved-words-mappings"?: string;
    "server-variables"?: string;
    "skip-validate-spec"?: boolean;
    "strict-spec"?: boolean;
    "type-mappings"?: string;
    "input-spec"?: string;
    "additional-properties"?: string;
    "skip-overwrite"?: boolean;
    "template-dir"?: string;
}

declare interface OptionType {
    option: Array<string>;
    description: string;
    defaultValue?: string;
}

declare interface DefaultOptionType {
    key: Array<string>;
    value: string;
}

declare interface ListArgumentType {
    include?: string;
    i?: string;
    short?: boolean;
    s?: boolean;
}

declare interface MetaArgumentType {
    language?: string;
    l?: string;
    name?: string;
    n?: string;
    output?: string;
    o?: string;
    package?: string;
    p?: string;
    type?: string;
    t?: string;
}

declare interface ValidateArgumentType {
    "input-spec"?: string;
    i?: string;
    recommend?: boolean;
}

declare type OpenApiGenerator =
    | ClientSideGenerator
    | ServerSideGenerator
    | DocumentationGenerator
    | SchemaGenerator
    | ConfigGenerator
    | SEBGenerator;

declare type ClientSideGenerator =
    | "ada"
    | "android"
    | "apex"
    | "bash"
    | "c"
    | "clojure"
    | "cpp-qt5-client"
    | "cpp-restsdk"
    | "cpp-tizen"
    | "csharp"
    | "csharp-netcore"
    | "dart"
    | "dart-dio"
    | "dart-jaguar"
    | "eiffel"
    | "elixir"
    | "elm"
    | "erlang-client"
    | "erlang-proper"
    | "flash"
    | "go"
    | "go-experimental"
    | "groovy"
    | "haskell-http-client"
    | "java"
    | "javascript"
    | "javascript-apollo"
    | "javascript-closure-angular"
    | "javascript-flowtyped"
    | "jaxrs-cxf-client"
    | "jmeter"
    | "k6"
    | "kotlin"
    | "lua"
    | "nim"
    | "objc"
    | "ocaml"
    | "perl"
    | "php"
    | "powershell"
    | "powershell-experimental"
    | "python"
    | "python-experimental"
    | "r"
    | "ruby"
    | "rust"
    | "scala-akka"
    | "scala-gatling"
    | "scala-sttp"
    | "scalaz"
    | "swift4"
    | "swift5"
    | "typescript-angular"
    | "typescript-angularjs"
    | "typescript-aurelia"
    | "typescript-axios"
    | "typescript-fetch"
    | "typescript-inversify"
    | "typescript-jquery"
    | "typescript-node"
    | "typescript-redux-query"
    | "typescript-rxjs";

declare type ServerSideGenerator =
    | "ada-server"
    | "aspnetcore"
    | "cpp-pistache-server"
    | "cpp-qt5-qhttpengine-server"
    | "cpp-restbed-server"
    | "csharp-nancyfx"
    | "erlang-server"
    | "fsharp-functions"
    | "fsharp-giraffe-server"
    | "go-gin-server"
    | "go-server"
    | "graphql-nodejs-express-server"
    | "haskell"
    | "java-inflector"
    | "java-msf4j"
    | "java-pkmst"
    | "java-play-framework"
    | "java-undertow-server"
    | "java-vertx"
    | "java-vertx-web"
    | "jaxrs-cxf"
    | "jaxrs-cxf-cdi"
    | "jaxrs-cxf-extended"
    | "jaxrs-jersey"
    | "jaxrs-resteasy"
    | "jaxrs-resteasy-eap"
    | "jaxrs-spec"
    | "kotlin-server"
    | "kotlin-spring"
    | "kotlin-vertx"
    | "nodejs-express-server"
    | "php-laravel"
    | "php-lumen"
    | "php-silex"
    | "php-slim4"
    | "php-symfony"
    | "php-ze-ph"
    | "python-aiohttp"
    | "python-blueplanet"
    | "python-flask"
    | "ruby-on-rails"
    | "ruby-sinatra"
    | "rust-server"
    | "scala-finch"
    | "scala-lagom-server"
    | "scala-play-server"
    | "scalatra"
    | "spring";

declare type DocumentationGenerator =
    | "asciidoc"
    | "cwiki"
    | "dynamic-html"
    | "html"
    | "html2"
    | "markdown"
    | "openapi"
    | "openapi-yaml";

declare type SchemaGenerator = "avro-schema" | "mysql-schema";

declare type ConfigGenerator = "apache2" | "graphql-schema" | "protobuf-schema";

declare type SEBGenerator = "ts-angular";

declare type Subcommand =
    | "help"
    | "generate"
    | "batch"
    | "list"
    | "config-help"
    | "meta"
    | "validate"
    | "version";
