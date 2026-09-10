import { log } from "console";
import { appendFile, readFile, writeFile } from "fs/promises";
// import {readFile} from "fs/promises";

const readData = async (filename) => {
  try {
    const content = await readFile(filename, "utf-8");
    return content;
  } catch (e) {
    console.log("file not found");
  } finally {
    console.log("Read data finished");
  }
};

const writeData = async (filename, content) => {
  try {
    await writeFile(filename, content);
  } catch (error) {
    console.log(error.message);
  }
};
const appendData = async (filename, content) => {
  try {
    await appendFile(filename, content);
  } catch (er) {
    console.log(er.message);
  }
};

const deleteFile = async (filename) => {
  try {
    await unlink(filename);
  } catch (error) {
    console.log("file not found");
  }
};

// if a function uses await keyword then the function must be async

await writeData("hello.txt", "hii i am abu");
await appendData("hello.txt", " i am 20 yrs old");
const result = await readData("hello.txt");
console.log(result);