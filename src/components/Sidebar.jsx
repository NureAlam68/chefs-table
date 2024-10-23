import PropTypes from "prop-types";

const Sidebar = ({ recipeQueue }) => {
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
                <td>{recipe.preparing_time}</td>
                <td>{recipe.calories}</td>
                <td>
                <button
            onClick={() => console.log('Preparing')}
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
    </div>
  );
};

Sidebar.propTypes = {
  recipeQueue: PropTypes.array.isRequired,
};

export default Sidebar;
