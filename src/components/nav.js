import { Link } from "gatsby";
import React, { useState } from "react";

import logo from "../images/osca-white-logo.png";

function Nav() {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <header className="z-20 w-full fixed top-0 left-0 px-2 sm:px-8 lg:px-16 xl:px-20 2xl:px-64 py-1">
      <div className="flex flex-wrap items-center justify-between lg:justify-start max-w-8xl mx-auto p-2 lg:py-8">
        <Link className="z-20 flex items-center no-underline text-white" to="/">
          <img alt="Open Source Community Africa Logo." className="block mx-auto w-12" src={logo} />
        </Link>

        <button
          className="block lg:hidden flex items-center px-3 py-2 rounded text-white"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          {isExpanded ? (
            <svg className="fill-current h-4 w-8" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <title>Close Menu</title>
              <path
                d="M11.0494 1.17733L1.65261 10.5744M1.65234 1.17733L11.0494 10.5744"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg className="fill-current h-4 w-8" viewBox="0 0 25 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <line y1="1" x2="25" y2="1" stroke="white" strokeWidth="2" />
              <path d="M6 10H25" stroke="white" strokeWidth="2" />
            </svg>
          )}
        </button>

        <nav
          className={`${
            isExpanded ? "block" : "hidden"
          } flex flex-col py-24 min-h-screen min-w-full text-center lg:py-0 lg:block lg:flex-row lg:items-center lg:w-auto lg:min-h-0 lg:min-w-0`}
        >
          {[
            {
              route: "#team",
              title: "Team"
            },
            {
              route: "#community",
              title: "Community"
            },
            {
              route: "#blog",
              title: "Blog"
            }
          ].map(link => (
            <a
              className="block mt-0 mb-auto no-underline text-white text-xl lg:inline-block lg:-my-2 lg:ml-8 lg:text-sm uppercase"
              key={link.title + Math.random()}
              href={link.route}
            >
              {link.title}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Nav;
