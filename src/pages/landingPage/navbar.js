import { useState } from "react";
import { Link } from "react-router-dom";
import {MdOutlineAccountCircle} from "react-icons/md";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
    const [search, setSearch ] = useState('');
    
    const handleChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
      };

    return ( 
        <div className=' border-b-2' >
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
                    <Link to="/" ><MdOutlineAccountCircle size={35} className='mr-6' /></Link>
                    <button className='bg-[black] text-[white] w-[120px] h-[40px] rounded-md'>Sign up</button>
                </div>

                <div className='md:hidden'>
                    <HiMenu size={25} />
                </div>

            </div>
           
        </div>
     );
}
 
export default Navbar;