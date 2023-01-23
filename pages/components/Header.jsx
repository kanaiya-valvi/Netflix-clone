import React, { useState, useEffect } from "react";
import SearchIcon from "@heroicons/react/24/solid/MagnifyingGlassIcon";
import { BellIcon } from "@heroicons/react/24/solid";
import User from "@heroicons/react/24/solid/UserCircleIcon";
import Link from "next/link";

function Header() {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${isScroll && "scroll-bg"}`}>
      <div className="header-left">
        <img
          src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
          alt="NEtflix logo"
        />
        <ul className="header-menu">
          <li className="header-menu__link">Home</li>
          <li className="header-menu__link">Tv Show</li>
          <li className="header-menu__link">New & Popular</li>
          <li className="header-menu__link">My List</li>
        </ul>
      </div>
      <div className="header-right">
        <SearchIcon className="icon" />
        <BellIcon className="icon" />
        <Link href="/accounts">
          <User className="icon" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
