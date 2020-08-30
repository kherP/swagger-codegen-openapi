import { extractResponses } from "./formatResponse";
import fs from "fs";
import path from "path";
import https from "https";
import { IncomingMessage } from "http";

/**
 * generate mock data
 * @param swaggerUrl swagger url
 * @param outputPath output path
 */
export function generateMock(swaggerUrl: string, outputPath: string) {
    if (!!swaggerUrl) {
        process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
        if (swaggerUrl.indexOf("http") > -1) {
            https
                .get(swaggerUrl, (resp: IncomingMessage) => {
                    let data: string = "";

                    resp.on("data", (chunk: string) => (data += chunk));
                    resp.on("end", () => formatJSON(JSON.parse(data), outputPath));
                })
                .on("error", (error: Error) => { throw error; });
        } else {
            try {
                const file = fs.readFileSync(swaggerUrl).toString();
                formatJSON(JSON.parse(file), outputPath, true);
            } catch (error) {
                throw new Error(error);
            }
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
function formatJSON(data: any, outputPath: string, isFile?: boolean) {
    console.log("################# generating mock ########################");
    const extractedBody: any = extractResponses(data);
    if (!fs.existsSync(outputPath)) {
        fs.mkdirSync(outputPath, { recursive: true });
    }
    writeFiles(extractedBody, outputPath);
    console.log(
        "\x1b[32m%s\x1b[0m",
        "################# Mock generated ########################"
    );
}

/**
 * write data to file
 * @param data data
 * @param outputPath output path
 */
export const writeFiles = (data: any, outputPath: string): void => {
    const fileName: string = `mock.json`;
    const to: string = path.join(outputPath || "./", fileName);
    const formatted: string = JSON.stringify(data, null, 2);
    fs.writeFileSync(to, formatted);
};
