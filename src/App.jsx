import { useState } from "react";
import { Category } from "./assets/components/Category";
import { Menu } from "./assets/components/Menu";
import menu from "./assets/components/data";
import { Footer } from "./assets/components/Footer";
const categories = [`all`, ...new Set(menu.map((item) => item.category))];

function App() {

  const [menuItems, setMenuItems] = useState(menu);

  const showCategory = (category) => {
    if(category == 'all') return setMenuItems(menu)
    setMenuItems(menu.filter((menuItem) => menuItem.category == category));
  };

  return (
    <main>
      <header className="flex flex-col items-center py-4 gap-1">
        <h1 className="text-4xl font-bold">Our Menu</h1>
        <div className="w-28 border-2 border-[#FBBC0D]"></div>
      </header>
      <Category categories={categories} showCategory={showCategory} />
      <section className="flex flex-wrap w-[90%] max-w-[70rem] justify-center gap-4 m-auto">
        {menuItems.map((menuItem) => {
          return <Menu key={menuItem.id} {...menuItem} />;
        })}
      </section>
      <Footer/>
    </main>
  );
}

export default App;
