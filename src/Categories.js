import React from 'react';

const Categories = ({matchCategory,newCategory}) => {
  return <div className="btn-container">
      {/* <button onClick={() => matchCategory('breakfast')} className="filter-btn">
          breakfast
      </button>
      <button onClick={() => matchCategory('all')} className="filter-btn">
          All

      </button> */}

    
      {
          newCategory.map((category) => {
              return <button onClick={() => matchCategory(category)} className="filter-btn">
                  {category}
              </button>;
          })
      }
     
    </div>;
};

export default Categories;
