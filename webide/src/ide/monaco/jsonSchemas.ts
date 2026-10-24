import customGameSettingsSchemaUrl from "../../../../customGameSettingsSchema.json?url";
import { monaco } from "./setup";

/*
 * Like the extension's jsonValidation contribution: *.opy.json files are validated against the custom
 * game settings schema. The schema is large (2 MB), so it is only downloaded when such a file exists.
 */

const SCHEMA_URI = "https://overpy.local/customGameSettingsSchema.json";
let schemaLoading: Promise<void> | undefined;

function loadSchema(): Promise<void> {
    schemaLoading ??= (async () => {
        const response = await fetch(customGameSettingsSchemaUrl);
        if (!response.ok) {
            throw new Error(`Could not load the custom game settings schema: HTTP ${response.status}`);
        }
        const schema = (await response.json()) as unknown;
        monaco.json.jsonDefaults.setDiagnosticsOptions({
            validate: true,
            enableSchemaRequest: false,
            schemas: [{ uri: SCHEMA_URI, fileMatch: ["*.opy.json"], schema }],
        });
    })();
    return schemaLoading;
}

export function registerJsonSchemas(onError: (error: unknown) => void): void {
    const check = (model: monaco.editor.ITextModel) => {
        if (model.uri.path.endsWith(".opy.json")) {
            loadSchema().catch(onError);
        }
    };
    monaco.editor.getModels().forEach(check);
    monaco.editor.onDidCreateModel(check);
}
