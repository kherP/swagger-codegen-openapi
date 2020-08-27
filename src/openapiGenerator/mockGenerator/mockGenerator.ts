import { extractResponses } from "./formatResponse";
import { readFile, writeFileSync, existsSync, mkdirSync } from "fs";
import { join } from "path";
import request from "request";

/**
 * generate mock data
 * @param swaggerUrl swagger url
 * @param outputPath output path
 */
export function generateMock(swaggerUrl: string, outputPath: string) {
    if (!!swaggerUrl) {
        process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
        if (swaggerUrl.indexOf("http") > -1) {
            request.get(swaggerUrl, (error: any, response: any) => {
                formatJSON(error, response, outputPath);
            });
        } else {
            readFile(swaggerUrl, "utf-8", (error: any, response: any) => {
                formatJSON(error, response, outputPath, true);
            });
        }
    }
}

/**
 * format swagger into JSON
 * @param error error from request
 * @param response response from request
 * @param outputPath output directory
 * @param isFile is local file
 */
function formatJSON(error: any, response: any, outputPath: string, isFile?: boolean) {
    if (error) {
        throw new Error(error);
    } else {
        if (response?.statusCode !== 200 && !isFile) {
            throw new Error(response.statusMessage);
        }
        console.log("################# generating mock ########################");
        const body = JSON.parse(response.body || response);
        const extractedBody: any = extractResponses(body);
        if (!existsSync(outputPath)){
            mkdirSync(outputPath, { recursive: true });
        }
        writeFiles(extractedBody, outputPath);
        console.log("\x1b[32m%s\x1b[0m", "################# Mock generated ########################");
    }
}

/**
 * write data to file
 * @param data data
 * @param outputPath output path
 */
export const writeFiles = (data: any, outputPath: string): void => {
    const fileName: string = `mock.json`;
    const path: string = join(outputPath || "./", fileName);
    const formatted: string = JSON.stringify(data, null, 2);
    writeFileSync(path, formatted);
};
