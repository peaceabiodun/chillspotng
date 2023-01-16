import { useState } from "react";
import { Link } from "react-router-dom";
import {MdOutlineAccountCircle} from "react-icons/md";
import { HiMenu } from "react-icons/hi";
import { BsSearch} from "react-icons/bs";
import { MdClose, MdLogin, MdFavoriteBorder, MdOutlineSettings, MdLanguage } from "react-icons/md";
import AccountDropdown from "./accountDropdown";



const Navbar = () => {
    const [search, setSearch ] = useState('');
    const [mobileMenu, setMobileMenu ] = useState(false);
    const [openAccount, setOpenAccount] = useState(false);

    
    const handleChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
      };

    const handleOpen = () => {
        setOpenAccount(!openAccount);
      };

    return ( 
        <div className=' border-b-2 shadow-lg' >
            <div className='flex flex-row justify-between mx-7 py-4 '>
                <div className='flex flex-row'>
                    <h1 className='text-lg md:text-xl mdLg:text-2xl text-[#850068] font-bold mr-7'>Chillspotng</h1>
                    <input  
                        type="text" 
                        placeholder='Search'  
                        value={search} 
                        onChange={handleChange}
                        className='hidden md:flex bg-[#F6FBF6] border-none w-[250px] h-[40px] mdLg:w-[350px] rounded-md p-1 text-[#8EA5A0]' 
                    />
                </div>
                <div className='hidden md:flex flex-row text-lg font-bold '>
                    <Link to="/" className='mr-6 mt-1 '>Explore</Link>
                    <Link to="/" onClick={handleOpen}><MdOutlineAccountCircle size={35} className='mr-6' /></Link>
                    <button className='bg-[black] text-[white] w-[120px] h-[40px] rounded-md'>Sign up</button>
                    {openAccount ? <AccountDropdown /> : null}
                </div>

                <div className='md:hidden flex flex-row'>
                    <BsSearch size={20} className='mr-4 mt-1' />
                    <div onClick={() => setMobileMenu(!mobileMenu) }>
                    {mobileMenu ? <MdClose size={25} /> :  < HiMenu size={25} /> }
                    </div>
                </div>

                <div id="mobile-menu" className={mobileMenu ? ' md:hidden absolute flex list-none left-0 top-[60px] w-[100%] bottom-0 bg-[#F6FBF6] px-3 py-3 transition-all' : 'hidden'} 
                    onClick={() => setMobileMenu(true)} >
                    <ul className='flex flex-col justify-between text-xl font-bold text-[#3D0031]'>
                        <li className='flex flex-row' >                          
                            <i> <MdLogin size={25} className='mr-2' /> </i>
                            <Link>Signin</Link>                        
                        </li>
                        <li className='flex flex-row'>                       
                            <i> <MdOutlineAccountCircle size={25} className='mr-2'/> </i>
                            <Link>Profiles</Link>                          
                        </li>
                        <li className='flex flex-row'>                           
                            <i><MdFavoriteBorder size={25} className='mr-2' /></i>
                            <Link>Favorites</Link>                          
                        </li>
                        <li className='flex flex-row'>
                            <i><MdOutlineSettings size={25} className='mr-2' /></i>
                            <Link>Settings</Link>
                        </li>
                        <li className='flex flex-row'>  
                            <i><MdLanguage size={25} className='mr-2' /></i>
                            <Link>Language</Link>
                        </li>
                        
                    </ul>
                </div>

            </div>
           
        </div>
     );
}
 
export default Navbar;