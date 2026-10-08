import express from "express";
import path from "path";
import { fileURLToPath } from "node:url";

const app = express();

const filename = fileURLToPath(import.meta.url);

const rootFolder = path.dirname(filename);

app.use(express.static(path.join(rootFolder, "pages")));

app.listen(4444, () => console.log("prg3 server is running on port 4444"));