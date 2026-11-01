import exprss from "express";
import products from "./data.js";

const app = express();

//returns name,image,price of products
app.get("/api/products", (req, res) => {

    //let sortedProducts = products.map(({name, image, price,id})=>({
       // name,
       // image,
        // price,
        //id,
    //}));
    let sortedProducts = products.map(
        ({ description, reviews, ...rest}) => rest,
    );


    res
    .status(200)
    .json({count:sortedProducts.length,data:sortedProducts});


});

app.get("/api/products/:pid",(req,res)=>{
    const {pid} = req.params;
    const items = products.find((p)=>p.id === Number(pid));
    if (!item) {
        res.status(200).json({ msg: `Product with id ${pid} not found`});
    }
    }

app.use((req, res) => {
    res.status(404).send("<h1>Page not found</h1>");
});

app.listen(4444, () => console.log("prg4 server is running on port 4444"));