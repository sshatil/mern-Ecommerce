import { MenuAlt3Icon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import { getProducts } from "../redux/actions/proudctActions";
import SearchBar from "./SearchBar";
import SingleProduct from "./SingleProduct";

const Products = ({ showSidebar, setShowSidebar }) => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  const [name, setName] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [rating, setRating] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    dispatch(getProducts(name, categoryName, min, max, rating, setLoading));
  }, [dispatch, name, categoryName, min, max, rating, loading]);
  // useEffect(() => {
  //   setName("");
  // }, [loading]);

  // pagination
  const [itemOffset, setItemOffset] = useState(0);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 6;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(products.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(products.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, products]);
  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };
  return (
    <div className="w-full overflow-hidden">
      {/* sidebar btn */}
      <MenuAlt3Icon
        className="w-6 h-6 cursor-pointer md:hidden"
        onClick={() => setShowSidebar(!showSidebar)}
      />
      {/* search products */}
      <div className="mx-10">
        <SearchBar setName={setName} />
      </div>
      <div className="bg-white mt-10">
        <div className="max-w-2xl mx-auto py-4 lg:py-4 md:py-4 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          {/* <h2 className="">Products</h2> */}

          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {currentItems?.map((product) => (
              <>
                <SingleProduct product={product} key={product._id} />
              </>
            ))}
          </div>
          <div className="my-8">
            <ReactPaginate
              breakLabel="..."
              nextLabel=">"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              pageCount={pageCount}
              previousLabel="<"
              renderOnZeroPageCount={null}
              containerClassName="pagination"
              pageLinkClassName="page-num"
              previousLinkClassName="page-arrow"
              nextLinkClassName="page-arrow"
              activeLinkClassName="active"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
