import PropTypes from "prop-types";

const Recipe = ({ recipe, addRecipeToQueue }) => {
  const {
    recipe_name,
    recipe_image,
    ingredients,
    preparing_time,
    calories,
    short_description,
  } = recipe;

  return (
    <div className="card bg-base-100 pt-6 border">
      <figure className="">
        <img
          className="h-[182px] lg:h-[220px] rounded-[16px]"
          src={recipe_image}
          alt="Recipe image"
        />
      </figure>
      <div className="card-body p-6">
        <h2 className="text-[20px] font-semibold">{recipe_name}</h2>
        <p className="text-base text-[#878787] font-normal mb-4">
          {short_description}
        </p>
        <hr />
        <div className="mt-5">
          <h3 className="text-[18px] font-medium">
            Ingredients: {ingredients.length}
          </h3>
          <ul className="mt-3 px-8 pb-4">
            {ingredients.map((item, idx) => (
              <li className="list-disc text-[18px] text-[#878787]" key={idx}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <hr />
        <div className="mt-6 flex gap-4">
          <div className="flex items-center gap-2">
            <i className="fa-regular fa-clock text-[20px]"></i>
            <p className="text-base text-[#282828CC] font-normal">
              {preparing_time} minutes
            </p>
          </div>
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-fire-flame-curved text-[20px]"></i>
            <p className="text-base text-[#282828CC] font-normal">
              {calories} calories
            </p>
          </div>
        </div>
        <div className="card-actions mt-6">
          <button
            onClick={() => addRecipeToQueue(recipe)}
            className="px-6 py-[13px] bg-[#0BE58A] text-[18px] font-semibold rounded-[50px]"
          >
            Want to Cook
          </button>
        </div>
      </div>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired,
  addRecipeToQueue: PropTypes.func.isRequired,
};

export default Recipe;
