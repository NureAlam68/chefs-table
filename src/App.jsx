import Banner from "./components/Banner";
import Header from "./components/Header";
import OurRecipes from "./components/OurRecipes";

const App = () => {
  return (
    <div className="max-w-[1600px] container mx-auto">
      {/* Header */}
      <Header></Header>
      {/* Banner */}
      <Banner></Banner>
      {/* Our Recipes */}
      <OurRecipes></OurRecipes>
    </div>
  );
};

export default App;