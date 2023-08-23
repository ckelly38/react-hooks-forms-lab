import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [query, setSearch] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event)
  {
    setSearch(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  }).filter((item) => {
    let myindex = -1;
    if (query === undefined || query === null || query.length < 1) return true;
    else myindex = item.name.indexOf(query);
    if ((myindex > 0 || myindex == 0) && myindex < item.name.length) return true;//keep
    else return false;//exclude
  });

  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter onCategoryChange={handleCategoryChange} search={query} onSearchChange={handleSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
