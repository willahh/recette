import React from "react";

const AdminForm = ({ id: key, majRecette, recettes }) => {
  const recette = recettes[key];

  const handleChange = (event, key) => {
    event.preventDefault();

    const { name, value } = event.target
    const recette = recettes[key]

    recette[name] = value

    majRecette(key, recette)
  }

  return (
    <div className="card">
      <form className="admin-form" onSubmit={e => e.preventDefault() }>
        <input
          value={recette.nom}
          onChange={e => handleChange(e, key)}
          name="nom"
          type="text"
          placeholder="Nom de la recette"
        />
        <input
          value={recette.image}
          onChange={e => handleChange(e, key)}
          name="image"
          type="text"
          placeholder="Nom de l'image"
        />
        <textarea
          value={recette.ingredients}
          onChange={e => handleChange(e, key)}
          name="ingredients"
          rows="3"
          placeholder="Liste des ingrédients"
        />
        <textarea
          value={recette.instructions}
          onChange={e => handleChange(e, key)}
          name="instructions"
          rows="15"
          placeholder="Liste des instructions"
        />
        <button type="submit">Mettre à jour une recette</button>
      </form>
    </div>
  );
};

export default AdminForm;
