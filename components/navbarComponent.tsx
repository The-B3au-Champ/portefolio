import React from 'react';
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="flex justify-center py-4 bg-blue-700 text-white">
      <ul className="flex space-x-4">
        {/* Lien vers la page d'accueil */}
        <li>
          <Link href="/homePage">Home Page</Link>
        </li>
        {/* Lien vers une autre page, par exemple "About" */}
        <li>
          <Link href="/experience">Experience</Link>
        </li>
        {/* Lien vers une page de contact */}
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
