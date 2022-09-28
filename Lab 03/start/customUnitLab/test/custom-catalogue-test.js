const Catalogue = require("../src/productCatalogue");
const Product = require("../src/product");
// Setup
let cat = new Catalogue("Test Catalogue");
const p123 = new Product("A123", "Product 1", 100, 10, 10.0);
const p124 = new Product("A124", "Widget 1", 100, 10, 10.0);
const p125 = new Product("A125", "A Product 2", 100, 10, 10.0);
const p126 = new Product("A126", "A Widget 2", 100, 10, 10.0);
const p127 = new Product("A127", "Bracket 1", 100, 10, 10.0)
const p128 = new Product("A128", "Another Product 3", 100, 10, 10.0);

const p13 = new Product("A123", "Product 1", 101, 10, 10.0);
const p14 = new Product("A124", "Widget 1", 10, 10, 10.0);
const p15 = new Product("A125", "A Product 2", 107, 10, 10.0);
const p16 = new Product("A126", "A Widget 2", 10, 10, 10.0);
const p17 = new Product("A127", "Bracket 1", 109, 10, 10.0)
const p18 = new Product("A128", "Another Product 3", 180, 10, 10.0);

let response

console.log('Test addProduct')
console.log("\tWhen we add a product, then it will return true")
response = cat.addProduct(p123);
// Expectation
if (response === true)
  console.log('\tPassed')
else
  console.log('\tfailed')

console.log("\tWhen we add a product whose id matches an existinf one, then it will return false")
response = cat.addProduct(new Product("A123", "Product X", 100, 10, 10.0));
// Expectation
if (response === false)
  console.log('\tPassed')
else
  console.log('failed')
//================================

cat = new Catalogue("Test Catalogue");
console.log('Test findProductByNameLike')

cat.addProduct(p123);
cat.addProduct(p124);
cat.addProduct(p125);
cat.addProduct(p126);
cat.addProduct(p127);
cat.addProduct(p128);

let substring = "Product";
console.log("\tGiven the catalogue has some products, when we provide a substring that has matches, then it returns the correct products")
let matches = cat.findProductsByNameLike(substring);
// Expectation
if (matches.length !== 3)
  console.log('\tFailed')
if (matches[0].name === p123.name && matches[1].name === p125.name && matches[2].name === p128.name)
  console.log('\tPassed')
else
  console.log('\tFailed')

substring = "No match";
console.log("\tGiven the catalogue has some products, when we provide a substring that has no matches, then it returns an empty array")
matches = cat.findProductsByNameLike(substring);
// Expectation
if (matches.length === 0)
  console.log('\tPassed')
else
  console.log('\tFailed')

cat = new Catalogue("Test Catalogue");
substring = "Product";
console.log("\tGiven the catalogue is empty, when we provide a substring, then it returns an empty array")
matches = cat.findProductsByNameLike(substring);
if (matches.length === 0)
  console.log('\tPassed')
else
  console.log('\tFailed')

  // Exercise 1 
console.log("\tGiven an id for a product, we remove the product from the catalogue.")
id = "A123";
matches = cat.removeProductById(id);
if(id === p123.id)
console.log('\tPassed')
else
  console.log('\tFailed')

// Exercise 2

cat2 = new Catalogue("Exercise 2");
cat2.addProduct(p13);
cat2.addProduct(p14);
cat2.addProduct(p15);
cat2.addProduct(p16);
cat2.addProduct(p17);
cat2.addProduct(p18);

const lessThanEqual = cat2.products.filter(function(p) {
  const figs = p.quantityInStock <= p.reorderLevel
  return figs
})

console.log(lessThanEqual)

console.log("\tCheck for products whose quantity in stock is less than or equal to their reorder level.")
if(cat2.checkReorders().productIds.length > 0){
  console.log('\tPassed')
  console.log(cat2.checkReorders())
}
else {
console.log('\tFailed')
}