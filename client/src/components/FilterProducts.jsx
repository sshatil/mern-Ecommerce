const FilterProducts = ({ setCategory, setName }) => {
  return (
    <div>
      <div
        className="border w-48 h-48 cursor-pointer"
        onClick={() => setCategory("kids")}
      >
        Filter by category
      </div>
      <div
        className="border w-48 h-48 cursor-pointer"
        onClick={() => setName("iphone")}
      >
        Iphone
      </div>
    </div>
  );
};

export default FilterProducts;
