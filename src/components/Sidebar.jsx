import PropTypes from "prop-types";

const Sidebar = ({recipeQueue}) => {
    return (
        <div className="md:w-2/5 mt-[48px]">
            <h2>Want to Cook: {recipeQueue.length}</h2>
        </div>
    );
};


Sidebar.propTypes = {
    recipeQueue: PropTypes.array.isRequired,
  };
  

export default Sidebar;