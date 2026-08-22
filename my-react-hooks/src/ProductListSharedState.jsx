import { useState } from "react";
import { INITIAL_PRODUCTS } from "./assets/data";
import { CATEGORIES } from "./assets/data";

function ProductListSharedState() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedcategory] = useState("");
  const [cartCount, setCartCount] = useState(0);

  function handleSearchTerm(value) {
    setSearchTerm(value);
  }
  function handleCategoryChange(value) {
    setSelectedcategory(value);
  }
  function handleCount() {
    setCartCount((previousCount) => previousCount + 1);
  }
  return (
    <>
      <SearchBar
        searchTerm={searchTerm}
        onChange={handleSearchTerm}
        category={selectedCategory}
        categoryChange={handleCategoryChange}
      />
      <ProductList
        searchTerm={searchTerm}
        selectedCategory={selectedCategory}
        handleCount={handleCount}
      />
      <CartSummary cartCount={cartCount} />
    </>
  );
}

function SearchBar({ searchTerm, onChange, category, categoryChange }) {
  return (
    <>
      <input
        type="text"
        name="searchTerm"
        id="searchTerm"
        placeholder="search for products"
        value={searchTerm}
        onChange={(e) => onChange(e.target.value)}
      />

      <input
        type="text"
        name="category"
        id="category"
        placeholder="specify your category"
        value={category}
        onChange={(e) => categoryChange(e.target.value)}
      />
    </>
  );
}

function ProductList({ searchTerm, selectedCategory, handleCount }) {
  const products = INITIAL_PRODUCTS.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchedCategory = product.category
      .toLowerCase()
      .includes(selectedCategory);
    return matchesSearch && matchedCategory;
  });

  console.log(products);
  return (
    <>
      {products.map((product) => {
        return (
          <>
            <p key={product.id}>
              {product.name},{product.category}
            </p>
            <button type="button" onClick={handleCount}>
              Add to cart
            </button>
          </>
        );
      })}
    </>
  );
}

function CartSummary({ cartCount }) {
  return <p>No of items in cart {cartCount}</p>;
}

export default ProductListSharedState;
