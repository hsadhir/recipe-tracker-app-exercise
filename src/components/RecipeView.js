function RecipeView({ item, index, removeHandler }) {
  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.cuisine}</td>
      <td>
        <img src={item.photo} alt={item.name} />
      </td>
      <td className="content_td">
        <p>{item.ingredients}</p>
      </td>
      <td className="content_td">
        <p>{item.preparation}</p>
      </td>
      <td>
        <button type="button" name="delete" id={index} onClick={removeHandler}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default RecipeView;
