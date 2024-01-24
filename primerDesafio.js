const fs = require("fs/promises");

class ProductManager {
  constructor(path) {
    this.path = path;
  }
  
  getProducts = async () => {
    try {
      const json = await fs.readFile(this.path, "utf-8");
      const products = JSON.parse(json);
      return products;
    } catch (error) {
      await fs.writeFile(this.path, "[]");
      return []
      //
    }

  };
  
  async addProduct(productData) {
      // Product data should be an object with keys: title, description, price, thumbnail, code, stock
    const { title, description, price, thumbnail, code, stock } = productData;

      // Check if all required keys are present
    if (
      title !== undefined && 
      description !== undefined && 
      price !== undefined && 
      thumbnail !== undefined &&
      code !== undefined &&
      stock !== undefined
      ) {
          const newProduct = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock
          };

      let products = await this.getProducts();
      
      // it will execute all 
      if (products.length === 0) {
        newProduct.id = 1;
        } else {
          newProduct.id = products[products.length - 1].id + 1;
        }
        
        const codeVerify = products.find(product => product.code === code) 
        if(codeVerify){
          console.log("Code already exist");
          return;
        }
        
        products.push(newProduct);
        console.log('Product added successfully:', newProduct);
      } else {
        console.error('Error: Incomplete product data. Please provide all required keys.');
      }
      await this.writeFile(products);
      
        return id;


      }
      
    async getProductById (id) {
      let products = await this.getProducts(); 
      const findProduct = products.find(prod => prod.id === id);
      if(!findProduct){
        console.log("Not Found");
        return
      }
      return findProduct;
    }

    async updateProduct(id, prod) {
      let products = await this.getProducts();
      const indexProduct = products.findIndex(product => product.id === id)
      if(indexProduct < 0) {
        console.log("Not Found");
        return null;
      }
      products[indexProduct] = { ...product, ...prod};
      
      await this.writeFile(products);
      
      return products[indexProduct];
    }
    
    async deleteProduct(id) {
      let products = await this.getProducts();
      const startLength = products.length;
      products = products.filter(product = product.id !== id);
      if(startLength === products.length) {
        console.log("Not Found");
      return null
      }
      await this.writeFile(products);
      return true
    }
    async writeFile(products) {  
      try {
        const json = JSON.stringify(products, null, 2);
        await fs.writeFile(this.path, json);
        
      } catch (error) {
        console.log(`File errored while: ${error}`);
      }
    }
  }
  
module.exports = ProductManager;

    // Usage example:
const myProductManager = new ProductManager();
const newProductData = {
    title: 'Example Product',
    description: 'This is an example product.',
    price: 19.99,
    thumbnail: 'example-thumbnail.jpg',
    code: "ADH1",
    stock: 100
};
const newProductData2 = {
    title: 'Example Product 2',
    description: 'This is an example product.',
    price: 19.99,
    thumbnail: 'example-thumbnail.jpg',
    code: "ADH2",
    stock: 100
};
const newProductData3 = {
    title: 'Example Product 3',
    description: 'This is an example product.',
    price: 19.99,
    thumbnail: 'example-thumbnail.jpg',
    code: "ADH3",
    stock: 100
};

myProductManager.addProduct(newProductData);
myProductManager.addProduct(newProductData2);
myProductManager.addProduct(newProductData3);
//console.log(myProductManager.getProducts());
//console.log(myProductManager.getProductById(3));
