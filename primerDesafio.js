class ProductManager {
    constructor() {
        this.products = [];
    }

    addProduct(productData) {
      // Product data should be an object with keys: title, description, price, thumbnail, code, stock
    const { title, description, price, thumbnail, code, stock } = productData;

      // Check if all required keys are present
    if (title && description && price && thumbnail && code && stock !== undefined) {
        const newProduct = {
        title,
        description,
        price,
        thumbnail,
        code,
        stock
        };

        this.products.push(newProduct);
        console.log('Product added successfully:', newProduct);
    } else {
        console.error('Error: Incomplete product data. Please provide all required keys.');
    }
    }
}

  // Usage example:
  const myProductManager = new ProductManager();
  const newProductData = {
    title: 'Example Product',
    description: 'This is an example product.',
    price: 19.99,
    thumbnail: 'example-thumbnail.jpg',
    code: 'ABC123',
    stock: 100
  };
  
  myProductManager.addProduct(newProductData);
  console.log(myProductManager.products);
  