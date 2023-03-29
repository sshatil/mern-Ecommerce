export const avatar = (user, w, h, f = "") => {
  return (
    <div
      className={`w-${w} h-${h} rounded-full border flex justify-center items-center bg-yellow-500`}
    >
      <div className={`font-bold text-${f} text-blue-500 shadow-2xl uppercase`}>
        {user.name.slice(0, 1)}
      </div>
    </div>
  );
};
