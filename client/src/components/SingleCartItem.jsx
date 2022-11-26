import { PlusIcon, MinusIcon } from "@heroicons/react/outline";

const SingleCartItem = ({ product, handleRemove, increase, decrease }) => {
  return (
    <div>
      <li className="flex py-6">
        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="ml-4 flex flex-1 flex-col">
          <div>
            <div className="flex justify-between text-base font-medium text-gray-900">
              <h3>{product.name}</h3>
              <p className="ml-4">$ {product.price}</p>
            </div>
            {/* <p className="mt-1 text-sm text-gray-500">
                                      {product.color}
                                    </p> */}
          </div>
          <div className="flex flex-1 items-end justify-between text-sm">
            {/* <p className="text-gray-500">
                                      Qty {product.countInStock}
                                    </p> */}
            <div className="flex gap-3">
              <button className="p-1 rounded-sm btn-color">
                <MinusIcon
                  className="h-4 w-4 text-white"
                  onClick={() => {
                    if (product.qty > 1) {
                      decrease(product._id, product.qty);
                    }
                  }}
                />
              </button>
              <h6>{product.qty}</h6>
              <button className="p-1 rounded-sm btn-color">
                <PlusIcon
                  className="h-4 w-4 text-white"
                  onClick={() => increase(product._id, product.qty)}
                />
              </button>
            </div>
            <div className="flex">
              <button
                type="button"
                className="font-medium text-indigo-600 hover:text-indigo-500"
                onClick={() => handleRemove(product._id)}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
};

export default SingleCartItem;
