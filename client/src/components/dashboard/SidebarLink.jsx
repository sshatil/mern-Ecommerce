const SidebarLink = ({ Icon, name, handleLink, activeLink }) => {
  return (
    <div
      className={`flex items-center gap-2 mb-2 ${
        name === activeLink && "text-yellow-400 font-bold"
      }`}
      onClick={() => handleLink(name)}
    >
      <Icon className="w-6 h-6" />
      <p className="font-semibold">{name}</p>
    </div>
  );
};

export default SidebarLink;
