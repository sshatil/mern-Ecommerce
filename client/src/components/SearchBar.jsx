import React from "react";

const SearchBar = ({ setName }) => {
  return (
    <form>
      <input
        type="text"
        className="focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 pl-4 block w-full appearance-none leading-normal"
        placeholder="Search products here"
        onChange={(e) => setName(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;
