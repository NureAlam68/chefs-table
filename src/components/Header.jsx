const Header = () => {
    return (
        <div className="py-[50px] px-[140px] flex justify-between items-center">
            <div>
                <h2 className="text-[32px] font-bold">Recipe Calories</h2>
            </div>
            <div className="flex gap-[48px] text-base font-normal text-[#150B2BB3]">
                <p><a href="#">Home</a></p>
                <p><a href="#">Recipes</a></p>
                <p><a href="#">About</a></p>
                <p><a href="#">Search</a></p>
            </div>
            <div className="relative">
                <i className="fa-solid fa-magnifying-glass text-[#150B2BB3] absolute ml-3 left-3 top-1/2 transform -translate-y-1/2"></i>
                <input className="px-6 pl-14 py-[12px] rounded-[50px] bg-[#150B2B0D]" type="text" placeholder="Search" />
                <button className="ml-4 p-2 bg-[#0BE58A] rounded-[25%]">
                    <i className="fa-regular fa-user-circle text-[20px]"></i>
                </button>
            </div>
        </div>
    );
};

export default Header;