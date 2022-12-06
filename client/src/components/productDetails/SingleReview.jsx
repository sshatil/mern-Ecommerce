import { StarIcon, UserCircleIcon } from "@heroicons/react/solid";
import React from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const SingleReview = ({ name, rating, comment, createdAt }) => {
  return (
    <div className="lg:flex lg:items-start mt-4 py-4">
      <div className="lg:w-3/12 flex items-center gap-3">
        <p>
          <UserCircleIcon className="w-10 h-10 text-gray-500" />
        </p>
        <h3 className="text-lg">{name}</h3>
      </div>
      <div className="lg:w-8/12 mt-2">
        <div className="flex items-center lg:ml-0 ml-12">
          {[0, 1, 2, 3, 4].map((r) => (
            <StarIcon
              key={r}
              className={classNames(
                rating > r ? "text-yellow-500" : "text-gray-200",
                "h-5 w-5 flex-shrink-0"
              )}
              aria-hidden="true"
            />
          ))}
        </div>
        <p className="my-3">{comment}</p>
        <p className="font-bold">{createdAt.slice(0, 10)}</p>
      </div>
    </div>
  );
};

export default SingleReview;
