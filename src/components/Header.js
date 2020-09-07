import React from "react";

function Header() {
  return (
    <section>
      <div className="z-20 flex flex-wrap lg:flex-row bg-dark-blue-primary px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 pt-32 pb-10 sm:pb-6 lg:pt-40 lg:pb-12 lg:pt-40 xl:pb-24 2xl:pt-56 2xl:pb-48 sm:text-left">
        <div className="w-full sm:w-1/2 lg:w-1/2 lg:w-1/2 xl:w-1/2 mb-4 relative sm:w-2/3 lg:w-1/2 z-10 text-white">
          <h1 className="font-ubuntu text-4xl lg:text-6xl leading-tight font-bold uppercase">
            Open Source Community Africa
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Header;
