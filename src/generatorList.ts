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
