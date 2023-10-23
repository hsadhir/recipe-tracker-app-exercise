import "./App.css";
import React, { useState } from "react";
import RecipeData from "./components/RecipeData";
import RecipeList from "./components/RecipeList";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: ""
  });
  const [recipe, setRecipe] = useState(RecipeData);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name] : event.target.value
    })
  }

  const createHandler = (event) => {
    event.preventDefault();
    setRecipe([
      ...recipe,
      formData
    ]);
    setFormData({
      name: "",
      cuisine: "",
      photo: "",
      ingredients: "",
      preparation: ""
    });
  };

  const removeHandler = (event) => {
    const idx = Number(event.target.id);
    const newRecipe = [...recipe];
    newRecipe.splice(idx, 1);
    setRecipe(newRecipe);
  };

  return (
    <div className="App">
      <header>
        <h1>DELICIOUS FOOD RECIPES</h1>
      </header>
      <main>
        <form name="create" onSubmit={createHandler}>
          <table className="recipe">
            <thead>
              <tr>
                <th>Name</th>
                <th>Cuisine</th>
                <th>Photo</th>
                <th>Ingredients</th>
                <th>Preparation</th>
                <th>Actions</th>
              </tr>
            </thead>
            <RecipeList
              recipe={recipe}
              removeHandler={removeHandler}
              formData={formData}
              handleChange={handleChange}
            />
          </table>
        </form>
      </main>
    </div>
  );
}

export default App;
