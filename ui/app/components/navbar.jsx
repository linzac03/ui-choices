const MenuItem = ({item}) => {
  return (
    <div className="flex-initial py-4 mx-8">
      <p className="hover:underline decoration-solid">
        <a href={item.url}>{item.text}</a>
      </p>
    </div>
  )
}

const Navbar = ({ menuItems, className }) => {
  return (
    <div className={`flex flex-row bg-gradient-to-r from-sky-500 to-sky-100 ${className}`}>
      { 
        menuItems.map((item) => <MenuItem key={JSON.stringify(item)} item={item} />) 
      }
    </div>
  )
}

export default Navbar;
