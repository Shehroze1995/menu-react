/* eslint-disable react/prop-types */
export const Category = ({ categories, showCategory }) => {
  return (
    <div className="flex justify-center gap-2 my-4 m-auto flex-wrap">
      {categories.map((category, index) => {
        return (
          <button
            onClick={() => showCategory(category)}
            className="bg-[#fbbc0d] capitalize py-[2px] px-4 rounded hover:text-white hover:bg-[#e6b632]"
            key={index}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
