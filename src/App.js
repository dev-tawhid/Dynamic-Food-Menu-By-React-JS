import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategory = items.map((item) => item.category.toLowerCase());
const newCategory = ['all',...new Set(allCategory)];
console.log(newCategory);

function App() {
  const [menuItems,setMenuItems] = useState(items);
  const [categories,setCategories] = useState([])

  

  

  const matchCategory = (category) =>{

      if(category === 'all'){
        setMenuItems(items);
        return;
      }
      const newItems = items.filter((item) => item.category === category);
      setMenuItems(newItems);
  }
 
  return <main>
    <section className="menu section">
      <div>
        <h2 className="title">Our Menu</h2>
        <div className="underline"></div>
        <Categories newCategory={newCategory} matchCategory={matchCategory} />
        <Menu items={menuItems} />
      </div>
    </section>
  </main>;
}

export default App;
