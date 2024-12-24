import { useState } from 'react';
import { Link } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const NavBar = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  // Define navigation links and dropdown features
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Workspaces', path: '/workspaces' },
    { name: 'Contact', path: '/contact' },
  ];

  const dropdownFeatures = [
    { name: 'Feature 1', path: '#' },
    { name: 'Feature 2', path: '#' },
    { name: 'Feature 3', path: '#' },
  ];

  const authLinks = [
    { name: 'Login', path: '/login' },
    { name: 'Register', path: '/logout' },
  ];

  return (
    <header className="bg-[#060505] text-white sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-3xl font-bold">
          <Link to="/">VyuhShastra</Link>
        </div>
        <nav className="space-x-10 text-[#7C7C7C]">
          {/* Render Navigation Links */}
          {navLinks.map((link, index) => (
            <Link key={index} to={link.path} className="text-xl">
              {link.name}
            </Link>
          ))}

          {/* Dropdown Menu */}
          <div
            className="inline-block dropdown-item"
            onMouseEnter={() => setIsDropdownVisible(true)}
            onMouseLeave={() => setIsDropdownVisible(false)}
          >
            <div className="text-xl flex items-center cursor-pointer">
              Features
              <ArrowDropDownIcon className={`ml-2 transform ${isDropdownVisible ? 'rotate-180' : ''}`} />
            </div>
            {isDropdownVisible && (
              <div className="absolute bg-[#060505] text-[#7C7C7C] rounded-lg shadow-lg w-48">
                {dropdownFeatures.map((feature, index) => (
                  <Link key={index} to={feature.path} className="block px-4 py-2 text-xl hover:bg-gray-700">
                    {feature.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>
        <nav className="space-x-6">
          {/* Render Authentication Links */}
          {authLinks.map((link, index) => (
            <Link key={index} to={link.path} className="text-xl">
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
