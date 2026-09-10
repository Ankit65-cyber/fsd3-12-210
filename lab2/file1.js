
import {writeFile, appendFile , readFile} from 'fs/promises';

// await writeFile('hello.txt', "Hello, World! ");
//await :- asynchronus 
await appendFile('hello.txt', "\nFS is much easy than others 😂");

// await writeFile('hello.txt' , "Abu Bakar");

const content = await readFile('hello.txt' , "utf-8");
console.log(content) ;    