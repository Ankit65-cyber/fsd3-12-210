import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello Express");
    res.send("<h1>Hello Express</h1>");
res.send(`
    <h1>Hello Server</h1>
    <h2>I am responding from express framework</h2> 
    <h3> The code is minimal and easy to understand</h3>
    `);
    
});
app.get("/about", (req, res) => {

res.send("<h2>"About page</h2>");
});

app.get("/products", (req, res) => {
    const products = {
        id: 1,
        name: "Mobile",
        price: 20000,
    };
    res.send(products);
});









app.listen(4444, () => console.log("Server is running on port 4444"));