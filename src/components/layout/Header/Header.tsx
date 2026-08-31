import logo from '../../../assets/logo-w-name.webp'
import { NavLink } from 'react-router-dom'

export default function Header(){
    return(
            <header className="border-b border-gray-200 bg-white">
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    <div className='shrink-0'>
                        <img src={logo} alt="Joblyst Logo" className="h-26 w-auto"></img>
                    </div>

                    <nav className='flex items-center gap-6'>
                        <NavLink
                            to="/"
                            end
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
                </div>
            </header>
    )
}