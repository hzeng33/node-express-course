const express = require("express");
const app = express();
const { products } = require("./data");

//setup static and middleware.
app.use(express.static("./public"));

app.get("/api/v1/test", (req, res) => {
  res.json({ message: "It worked!" });
});

//get all products array
app.get("/api/v1/products", (req, res) => {
  res.json(products);
});

//get one particular product
app.get("/api/v1/products/:productID", (req, res) => {
  const idToFind = parseInt(req.params.productID);
  const product = products.find((p) => p.id === idToFind);
  //console.log(product);
  if (!product) {
    return res.status(404).json({ message: "That product was not found." });
  }
  return res.json(product);
});

//query
app.get("/api/v1/query", (req, res) => {
  const { search, limit, price } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.toLowerCase().includes(search.toLowerCase());
    });
  }
  if (price) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.price <= Number(price);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  if (sortedProducts.length < 1) {
    return res.status(200).json({ success: true, data: [] });
  }
  res.status(200).json(sortedProducts);
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>Page not found</h1>");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000 ...");
});
