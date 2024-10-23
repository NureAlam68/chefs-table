import Banner from "./components/Banner";
import Header from "./components/Header";
import OurRecipes from "./components/OurRecipes";
import Recipes from "./components/Recipes";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="max-w-[1600px] container mx-auto">
      {/* Header */}
      <Header></Header>
      {/* Banner */}
      <Banner></Banner>
      {/* Our Recipes */}
      <OurRecipes></OurRecipes>
      {/* Recipe card section */}
      <section className="flex flex-col md:flex-row gap-6 px-[140px]">
        {/* Card */}
        <Recipes></Recipes>
        {/* Sidebar */}
        <Sidebar></Sidebar>
      </section>
    </div>
  );
};

export default App;