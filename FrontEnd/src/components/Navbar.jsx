import React from "react";

const Navbar = () => {
  return (
    <div className=" h-[79px] bg-white flex items-center   ">
      <nav class="block w-full max-w-screen-lg px-4 py-2 mx-auto bg-white  lg:px-8   ">
        <div class="container flex flex-wrap items-center justify-between mx-auto text-slate-800 ">
          <a
            href="#"
            class="mr-4 text-2xl block cursor-pointer py-1.5 sm:text-base text-slate-800 font-semibold"
          >
            Accredian
            <span className="ml-4 h-[40px] w-[116px] bg-[#1a73e9] py-[8px] px-[18px] rounded-md text-white">Courses</span>
          </a> 
        

          <div class="hidden lg:block">
            <ul class="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              <li class="flex items-center p-1 text-sm gap-x-2 text-slate-600">
              

                <a href="#" class="flex items-center">
                Refer n Earn
                </a>
              </li>
              <li class="flex items-center p-1 text-sm gap-x-2 text-slate-600">
                

                <a href="#" class="flex items-center">
                  Resources
                </a>
              </li>
              <li class="flex items-center p-1 text-sm gap-x-2 text-slate-600">
                

                <a href="#" class="flex items-center">
                 About US 
                </a>
              </li>
              <li class="flex items-center p-1 text-sm gap-x-2 text-slate-600">
               

                <a href="#" class="flex items-center justify-center h-[38px] w-[78px] bg-[#eaedf2] py-[8px]  rounded-md ">
                Login
                </a>
              </li>
              <li class="flex items-center p-1 text-sm gap-x-2 text-slate-600">
               

                <a href="#" class="flex items-center justify-center h-[40px] w-[116px] bg-[#1a73e9] py-[8px]  rounded-md text-white">
                Try for Free
                </a>
              </li>

            </ul>

        
          </div>

        
        </div>
       </nav>
    </div>
  
  );
};

export default Navbar;
