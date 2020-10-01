import React from "react";
import Button from "./Button/Button";

function HomeBody() {
  return (
    <section className="lg:flex items-center justify-center ">
      <div className="lg:w-3/5 __banner_bg1 min-h-screen relative">
        <div className="absolute top-0 bottom-0  left-0 right-0 h-full __blue-background">
          <div className="w-full px-3 lg:px-16 xl:px-20 2xl:px-64 mt-half-screen md:w-2/3 lg:w-full ">
            <h1 className="text-h1 font-bold mb-8 text-white">The Next Billion Creators </h1>
            <h4 className="text-white text-h5 mb-8 lg:w-2/3 ">
              A community of creative minds driving the Open Source movement in Africa.{" "}
            </h4>
            <div>
              <Button type="oc_btn_02" className="text-black font-bold">
                Who we are
              </Button>
            </div>
          </div>
        </div>
      </div>
      <aside className="flex-1">
        <div className="h-half-screen md:py-10 relative __banner_bg2">
          <div className="absolute top-0 bottom-0  left-0 right-0 h-full __community-background">
            <div className="w-full px-3 lg:px-16 xl:px-20 2xl:px-64 md:w-2/3 lg:w-full">
              <h3 className="text-2xl font-black text-white"> Community </h3>
              <h5 className="text-white text-base mt-4 ">
                Our community is spread across Africa hosted in various locations called chapters.
              </h5>
              <p className="text-white mt-12 text-sm cursor-pointer __check_out">
                Check out our community
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="inline ml-5"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="white" />
                </svg>
              </p>
            </div>
          </div>
        </div>
        <div className="h-half-screen relative __banner_bg3">
          <div className="absolute top-0 bottom-0  left-0 right-0 h-full __team-background">
            <div className="w-full px-3 lg:px-16 xl:px-20 2xl:px-64">
              <h3 className="text-2xl font-black text-white"> Team </h3>
              <h5 className="text-white mt-4">The brains behind the awesomeness.</h5>
              <p className="text-white mt-12 text-sm cursor-pointer __check_out">
                Check out our team profiles{" "}
                <svg
                  width="16"
                  height="16"
                  className="inline ml-5"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="white" />
                </svg>
              </p>
            </div>
          </div>
        </div>
      </aside>
    </section>
  );
}

export default HomeBody;
