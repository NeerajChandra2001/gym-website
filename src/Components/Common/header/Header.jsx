import React, { useState } from 'react';
import { GiMuscleUp } from 'react-icons/gi';
import { IoIosClose, IoIosMenu } from 'react-icons/io';
import { RiErrorWarningLine } from "react-icons/ri";
import { Link, animateScroll as scroll } from 'react-scroll';

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className='header'>
                <div className='bg-black py-3 px-5'>
                    <h6 className='text-white font-thin flex items-center'>
                        <span className="mr-2"><RiErrorWarningLine /></span>
                        We're committed to a clean and safe facility. View our policies here.
                    </h6>
                </div>
                <div className='navbar  w-full bg-white shadow-md py-5 px-5 flex justify-between items-center'>
                    <div className='navbrand'>
                        <Link to='/'>
                            <GiMuscleUp size={50} />
                        </Link>
                    </div>
                    <div className={`nav-items justify-between font-bold text-black space-y-2 sm:space-y-0 sm:space-x-4 flex ${isMenuOpen ? 'flex-col' : 'hidden'} lg:flex`}>
                        <Link to='home' smooth='true' className='font-bold text-zinc-600 hover:text-pink-500' href=' '>Home</Link>
                        <Link to='facilities' smooth='true' className='font-bold text-zinc-600 hover:text-pink-500' href=' '>Facilities</Link>
                        <Link to='service' smooth='true' className='font-bold text-zinc-600 hover:text-pink-500' href=' '>Services</Link>
                        <Link to='branches' smooth='true' className='font-bold text-zinc-600 hover:text-pink-500' href=' '>Our Branches</Link>
                        <Link to='' smooth='true' className='font-bold text-zinc-600 hover:text-pink-500' href=' '>About Us</Link>
                    </div>
                    <div className='nav-button px-5 py-3 '>
                        <button className='bg-pink-500 h-10 py-3 px-3 flex justify-center items-center hover:text-white'>JOIN NOW</button>
                    </div>
                    <div className='sm:hidden'>
                        <button onClick={toggleMenu}>
                            {isMenuOpen ? <IoIosClose /> : <IoIosMenu />}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;

