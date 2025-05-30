import { useState } from "react";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import "./App.css";


// Databae
import products from './db/data.js';
import Card from "./components/Card";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [query, setQuery] = useState('')

  const handleInputChange = event => {
    setQuery(event.target.value);
  }

  const filteredItems = products.filter((product) =>
    product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // Radio filter
  const handleChange = event => {
    setSelectedCategory(event.target.value);
  }

  // Button filter
  const handleClick = event => {
    setSelectedCategory(event.target.value);
  }

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // filtering input item
    if (query) {
      filteredProducts = filteredItems;
    }

    // selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(({ category, color, company, newPrice, title }) =>
        category === selected || color === selected || company === selected || newPrice === selected || title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) =>
        <Card key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return <>
    <Sidebar handleChange={handleChange} />
    <Navigation query={query} handleInputChange={handleInputChange} />
    <Recommended handleClick={handleClick} />
    <Products result={result} />
  </>
}

export default App;
