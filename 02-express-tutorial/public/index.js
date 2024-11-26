const fetchProduct = document.getElementById("fetchProduct");
const productList = document.getElementById("productList");

fetchProduct.addEventListener("click", async () => {
  try {
    const response = await fetch("/api/v1/products");
    const products = await response.json();
    //console.log(products);

    productList.innerHTML = "";

    if (products.length === 0) {
      productList.textContent = "No products found.";
      return;
    }

    products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.style.border = "1px solid gray";
      productCard.style.padding = "8px";
      productCard.style.margin = "10px";
      productCard.style.borderRadius = "5px";

      const productName = document.createElement("h3");
      productName.textContent = product.name;

      const productPrice = document.createElement("p");
      productPrice.textContent = `Price: $${product.price}`;

      const productDesc = document.createElement("p");
      productDesc.textContent = product.desc;

      productCard.appendChild(productName);

      productCard.appendChild(productPrice);
      productCard.appendChild(productDesc);

      productList.appendChild(productCard);
    });
  } catch (error) {
    console.log("An error happened: ", error);
    productList.textContent = "Failed to fetch products.";
  }
});
