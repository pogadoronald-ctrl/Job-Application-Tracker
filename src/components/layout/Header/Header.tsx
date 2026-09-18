import logo from '../../../assets/logo-w-name.webp'
import { Menu, X } from "lucide-react";

import { NavLink } from 'react-router-dom'

import { useState } from "react";


export default function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false); 
    
    const closeMenu = () => { setIsMenuOpen(false); };
    return(
            <header className="border-b border-gray-200 bg-white">
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    <div className='shrink-0'>
                        <img src={logo} alt="Joblyst Logo" className="h-26 w-auto"></img>
                    </div>

                    <nav className='hidden items-center gap-6 md:flex'>
                        <NavLink
                            to="/"
                            end
                            title='Dashboard'
                            aria-label='Dashboard'
                            className={({ isActive}) =>
                                `rounded-md px-4 py-2 text-sm font-medium transition ${
                                    isActive
                                        ?"bg-blue-50 text-blue-600"
                                        :"text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                                }`
                            }
                            >
                            Dashboard
                        </NavLink>

                        <NavLink
                            to="/applications"
                            end
                            title='Applications'
                            aria-label='Applications'
                            className={({ isActive}) =>
                                `rounded-md px-4 py-2 text-sm font-medium transition ${
                                    isActive
                                        ?"bg-blue-50 text-blue-600"
                                        :"text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                                }`
                            }
                            >
                            Applications
                        </NavLink>

                        <NavLink
                            to="/applications/add"
                            end
                            title='Add Application'
                            aria-label='Add Application'
                            className={({ isActive}) =>
                                `rounded-md px-4 py-2 text-sm font-medium transition ${
                                    isActive
                                        ?"bg-blue-50 text-blue-600"
                                        :"text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                                }`
                            }
                            >
                            Add Application
                        </NavLink>
                    </nav>

                    <button 
                        type="button" 
                        onClick={() => setIsMenuOpen(!isMenuOpen)} 
                        className="rounded-md p-2 text-gray-600 hover:bg-gray-100 
                        hover:text-gray-900 md:hidden" 
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"} 
                        aria-expanded={isMenuOpen} > {isMenuOpen ? 
                        ( <X className="h-6 w-6" /> ) : ( <Menu className="h-6 w-6" /> )} 
                    </button> 
                </div>

                {isMenuOpen && ( 
                    <nav className="border-t border-gray-100 bg-white px-4 py-3 md:hidden"> 
                        <div className="flex flex-col gap-1"> 
                            <NavLink 
                                to="/" 
                                end 
                                onClick={closeMenu} 
                                className={({ isActive }) => `rounded-md px-4 py-3 text-sm font-medium transition 
                                ${ isActive ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-100 hover:text-gray-900" }` } > 
                                    Dashboard 
                                </NavLink> 
                            
                            <NavLink 
                                to="/applications" 
                                end 
                                onClick={closeMenu} 
                                className={({ isActive }) => 
                                    `rounded-md px-4 py-3 text-sm font-medium transition 
                                    ${ isActive ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-100 hover:text-gray-900" }` } >
                                Applications
                            </NavLink> 
                            
                            <NavLink 
                                to="/applications/add" 
                                end 
                                onClick={closeMenu} 
                                className={({ isActive }) => `rounded-md px-4 py-3 text-sm font-medium transition 
                                    ${ isActive ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-100 hover:text-gray-900" }` } > 
                                Add Application 
                            </NavLink> 
                        </div> 
                    </nav> 
                )}
            </header>
    )
}