export type OpenApiGenerator = ClientSideGenerator | ServerSideGenerator | DocumentationGenerator | SchemaGenerator | ConfigGenerator | SEBGenerator;

export type ClientSideGenerator = "ada" | "android" | "apex" | "bash" | "c" |
                                  "clojure" | "cpp-qt5-client" | "cpp-restsdk" | "cpp-tizen" | "csharp" |
                                  "csharp-netcore" | "dart" | "dart-dio" | "dart-jaguar" | "eiffel" |
                                  "elixir" | "elm" | "erlang-client" | "erlang-proper" | "flash" |
                                  "go" | "go-experimental" | "groovy" | "haskell-http-client" | "java" |
                                  "javascript" | "javascript-apollo" | "javascript-closure-angular" | "javascript-flowtyped" | "jaxrs-cxf-client" |
                                  "jmeter" | "k6" | "kotlin" | "lua" | "nim" |
                                  "objc" | "ocaml" | "perl" | "php" | "powershell" |
                                  "powershell-experimental" | "python" | "python-experimental" | "r" | "ruby" |
                                  "rust" | "scala-akka" | "scala-gatling" | "scala-sttp" | "scalaz" |
                                  "swift4" | "swift5" | "typescript-angular" | "typescript-angularjs" | "typescript-aurelia" |
                                  "typescript-axios" | "typescript-fetch" | "typescript-inversify" | "typescript-jquery" | "typescript-node" |
                                  "typescript-redux-query" | "typescript-rxjs";

export type ServerSideGenerator = "ada-server" | "aspnetcore" | "cpp-pistache-server" | "cpp-qt5-qhttpengine-server" | "cpp-restbed-server" |
                                  "csharp-nancyfx" | "erlang-server" | "fsharp-functions" | "fsharp-giraffe-server" | "go-gin-server" |
                                  "go-server" | "graphql-nodejs-express-server" | "haskell" | "java-inflector" | "java-msf4j" |
                                  "java-pkmst" | "java-play-framework" | "java-undertow-server" | "java-vertx" | "java-vertx-web" |
                                  "jaxrs-cxf" | "jaxrs-cxf-cdi" | "jaxrs-cxf-extended" | "jaxrs-jersey" | "jaxrs-resteasy" | "jaxrs-resteasy-eap" |
                                  "jaxrs-spec" | "kotlin-server" | "kotlin-spring" | "kotlin-vertx" | "nodejs-express-server" |
                                  "php-laravel" | "php-lumen" | "php-silex" | "php-slim4" | "php-symfony" | "php-ze-ph" |
                                  "python-aiohttp" | "python-blueplanet" | "python-flask" | "ruby-on-rails" | "ruby-sinatra" |
                                  "rust-server" | "scala-finch" | "scala-lagom-server" | "scala-play-server" | "scalatra" | "spring";

export type DocumentationGenerator = "asciidoc" | "cwiki" | "dynamic-html" | "html" | "html2" | "markdown" | "openapi" | "openapi-yaml";

export type SchemaGenerator = "avro-schema" | "mysql-schema";

export type ConfigGenerator = "apache2" | "graphql-schema" | "protobuf-schema";

export type SEBGenerator = "ts-angular";

/**
 * check if generator is custom seb generator
 * @param generator generator set
 */
export function isSEBGenerator(generator: OpenApiGenerator){
    switch (generator) {
        case "ts-angular":
            return true;
        default:
            return false;
    }
}
