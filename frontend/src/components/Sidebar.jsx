import React from 'react';

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-[#0367A6] flex flex-col justify-between text-white">
      {/* Top Section */}
      <div>
        {/* Logo Section with Homepage Redirect */}
        <div className="flex items-center justify-start mt-8 ml-6">
          <a href="/" className="flex items-center">
            <img src="./ccps.svg" alt="Logo" className="h-16 w-16" />
            <span className="ml-4 text-2xl font-montserrat">CCPS</span>
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col mt-8">
          <a href="home" className="text-lg font-montserrat text-[#05F2C7] py-3 pl-6 hover:bg-[#03658C]">Home</a>
          <a href="profile" className="text-lg font-montserrat text-[#05F2C7] py-3 pl-6 hover:bg-[#03658C]">Profile</a>
          <a href="applications" className="text-lg font-montserrat text-[#05F2C7] py-3 pl-6 hover:bg-[#03658C]">Applications</a>
          <a href="saved-applications" className="text-lg font-montserrat text-[#05F2C7] py-3 pl-6 hover:bg-[#03658C]">Saved Applications</a>
        </div>
      </div>

      {/* Logout Button */}
      <div className="mb-8">
        <button className="w-full text-lg font-lato text-white bg-[#05F2DB] py-3 hover:bg-[#05F2C7]">Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;
