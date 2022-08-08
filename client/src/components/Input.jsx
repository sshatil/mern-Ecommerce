const Input = ({ setName }) => {
  return (
    <form>
      <input
        type="text"
        placeholder="Search your product"
        onChange={(e) => setName(e.target.value)}
      />
    </form>
  );
};

export default Input;
