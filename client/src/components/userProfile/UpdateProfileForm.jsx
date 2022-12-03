const UpdateProfileForm = ({ formData, setFormData, handleUpdateProfile }) => {
  const handleFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const { name, email, password } = formData;
  console.log(name, email);
  return (
    <div>
      {/* <h1 className="text-xl font-bold my-3 mt-6">Update User Information</h1> */}
      <form onSubmit={handleUpdateProfile}>
        <div className="mb-2">
          <label
            htmlFor="name"
            className="text-sm block font-semibold text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleFormData}
            className="mt-1 p-2 block rounded-md shadow-sm border-2 border-gray-500 sm:text-sm w-full"
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="email"
            className="text-sm block font-semibold text-gray-700"
          >
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={handleFormData}
            className="mt-1 p-2 block rounded-md shadow-sm border-2 border-gray-500 sm:text-sm w-full"
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="password"
            className="text-sm block font-semibold text-gray-700"
          >
            New Password
          </label>
          <input
            type="text"
            name="password"
            id="password"
            value={password}
            onChange={handleFormData}
            className="mt-1 p-2 block rounded-md shadow-sm border-2 border-gray-500 sm:text-sm w-full"
          />
        </div>
        <button
          type="submit"
          className="border btn-color p-2 rounded-md text-lg  text-white"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default UpdateProfileForm;
