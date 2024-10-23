import PropTypes from "prop-types";

const Sidebar = ({
  recipeQueue,
  handleRemove,
  preparedRecipe,
  calculateTimeAndCalories,
  totalTime,
  totalCalories,
}) => {
  return (
    <div className="md:w-2/5 mt-[48px] border rounded-[16px] text-[#878787] p-6">
      {/* Want to cook table */}
      <div className="overflow-x-auto">
        <h2 className="text-[24px] font-semibold text-center text-[#282828] mb-4">
          Want to cook: {recipeQueue.length}
        </h2>
        <hr />
        <table className="table mt-6">
          {/* head */}
          <thead>
            <tr className="text-base font-medium">
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {recipeQueue.map((recipe, idx) => (
              <tr key={idx} className="hover text-base font-normal">
                <th className="text-[#282828CC]">{idx + 1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time} min</td>
                <td>{recipe.calories} cal</td>
                <td>
                  <button
                    onClick={() => {
                      handleRemove(recipe.recipe_id);
                      calculateTimeAndCalories(
                        recipe.preparing_time,
                        recipe.calories
                      );
                    }}
                    className="px-[18px] py-[9px] bg-[#0BE58A] text-base font-medium text-[#150B2B] rounded-[50px]"
                  >
                    Preparing
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Currently Cooking Table */}
      <div className="overflow-x-auto mt-8">
        <h2 className="text-[24px] font-semibold text-center text-[#282828] mb-4">
          Currently Cooking: {preparedRecipe.length}
        </h2>
        <hr />
        <table className="table mt-6">
          {/* head */}
          <thead>
            <tr className="text-base font-medium">
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {preparedRecipe.map((recipe, idx) => (
              <tr key={idx} className="hover text-base font-normal">
                <th className="text-[#282828CC]">{idx + 1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time} min</td>
                <td>{recipe.calories} cal</td>
              </tr>
            ))}
            <tr className="text-base font-medium text-[#282828CC]">
              <td></td>
              <td></td>
              <td>Total Time = {totalTime}</td>
              <td>Total Calories = {totalCalories}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  recipeQueue: PropTypes.array.isRequired,
  handleRemove: PropTypes.func.isRequired,
  preparedRecipe: PropTypes.array.isRequired,
  calculateTimeAndCalories: PropTypes.func.isRequired,
  totalTime: PropTypes.number.isRequired,
  totalCalories: PropTypes.number.isRequired,
};

export default Sidebar;
