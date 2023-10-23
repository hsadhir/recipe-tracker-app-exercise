import RecipeView from "./RecipeView";
import RecipeCreate from "./RecipeCreate";

function RecipeList({ recipe, removeHandler, formData, handleChange }) {
  return (
    <tbody>
      {recipe.length ? recipe.map((item, index) => (
        <RecipeView
          key={index}
          item={item}
          index={index}
          removeHandler={removeHandler}
        />
      )): <tr><td colspan="6">No Recipes to Show. Please add one below.</td></tr>}
      <RecipeCreate formData={formData} handleChange={handleChange} />
    </tbody>
  );
}

export default RecipeList;
