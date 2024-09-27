import React from 'react';
import { Link,useLocation } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();
  React.useEffect(() => {
    console.log(location.pathname)
  }, [location.pathname]);
  return (
    <div className='flex flex-row h-14 text-white bg-black items-center gap-5 px-5'>
      <h1 className='text-2xl'>iNoteBook</h1>
      <Link className={`hover:border-b-2 hover:border-b-[#b6b4b4] ${location.pathname === '/' ? "text-[#b6b4b4]" : ""} `} to='/'>Home</Link>
      <Link className={`hover:border-b-2 hover:border-b-[#b6b4b4] ${location.pathname === '/about' ? "text-[#b6b4b4]" : ""} `} to='/about'>About</Link>
    </div>
  );
}

export default Navbar;
