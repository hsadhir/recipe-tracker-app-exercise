function RecipeCreate({ formData, handleChange }) {
  return (
    <tr>
      <td>
        <input
          name="name"
          value={formData.name}
          type="text"
          onChange={handleChange}
          required
          placeholder="Recipe Name, e.g. Briyani, Guacamole, etc."
        />
      </td>
      <td>
        <input
          name="cuisine"
          value={formData.cuisine}
          type="text"
          onChange={handleChange}
          required
          placeholder="Cuisine, e.g. Chinese, Mexican, etc."
        />
      </td>
      <td>
        <input
          name="photo"
          value={formData.photo}
          type="url"
          onChange={handleChange}
          required
          placeholder="Source URL"
        />
      </td>
      <td>
        <textarea
          name="ingredients"
          value={formData.ingredients}
          onChange={handleChange}
          required
          placeholder="required ingredients"
        ></textarea>
      </td>
      <td>
        <textarea
          name="preparation"
          value={formData.preparation}
          onChange={handleChange}
          required
          placeholder="Method of preparation"
        ></textarea>
      </td>
      <td>
        <button name="create-btn" type="submit">
          Create
        </button>
      </td>
    </tr>
  );
}

export default RecipeCreate;
