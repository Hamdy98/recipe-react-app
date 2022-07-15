import React from "react";
import style from "./recipe.module.css";

const Recipe = ({title, calories, image, ingredients}) => {
  return(
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ol>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p className={style.calories}>{calories.toFixed()} Calories</p>
      <img className={style.image} src={image} alt="Recipe" />
    </div>
  );
}

export default Recipe;