import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce");

  function handleItemNameOrCategoryChange(event, useName)
  {
    //console.log("useName = " + useName);
    if (useName === undefined || useName === null)
    {
      throw new Error("useName must be a defined boolean variable!");
    }
    else
    {
      if (useName === true || useName === false);
      else throw new Error("useName must be a defined boolean variable!");
    }

    if (useName) setItemName(event.target.value);
    else setItemCategory(event.target.value);
  }
  function handleNameChange(event)
  {
    handleItemNameOrCategoryChange(event, true);
  }
  function handleCategoryChange(event)
  {
    handleItemNameOrCategoryChange(event, false);
  }

  function handleSubmit(event)
  {
    event.preventDefault();

    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: itemName,
      category: itemCategory,
    };

    onItemFormSubmit(newItem);
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={itemName} onChange={handleNameChange} />
      </label>

      <label>
        Category:
        <select name="category" value={"Produce"} onChange={handleCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
