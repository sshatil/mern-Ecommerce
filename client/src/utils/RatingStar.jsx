import { StarIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const RatingStar = ({ value, setRating }) => {
  return (
    <div
      className="flex items-center cursor-pointer my-1"
      onClick={() => setRating(value)}
    >
      <div className="mr-1">
        <input type="radio" name="rating" id={value} />
      </div>
      <label htmlFor={value} className="cursor-pointer">
        <div className="flex">
          {[0, 1, 2, 3, 4].map((r) => (
            <StarIcon
              key={r}
              className={classNames(
                value > r ? "text-yellow-500" : "text-gray-400",
                "h-5 w-5 flex-shrink-0"
              )}
              aria-hidden="true"
            />
          ))}
        </div>
      </label>
    </div>
  );
};

export default RatingStar;
