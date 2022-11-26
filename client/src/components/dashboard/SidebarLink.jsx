const SidebarLink = ({ Icon, name, handleLink, activeLink }) => {
  return (
    <div
      className={`flex items-center justify-center md:justify-start gap-2 my-3 md:pl-2 cursor-pointer text-white ${
        name === activeLink && "text-yellow-400 font-bold"
      }`}
      onClick={() => handleLink(name)}
    >
      <Icon className="w-6 h-6" />
      <p className="font-semibold hidden md:inline-block">{name}</p>
    </div>
  );
};

export default SidebarLink;
