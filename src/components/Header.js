import React from "react";
import ListIcon from '@mui/icons-material/List';

const Header = () => {
  return (
    <div className="w-full p-2 flex  justify-between">
      <div className="logo-options flex w-2/12">
          <div className="options m-2 ">

            <ListIcon/>
          </div>
        <div className="logo  flex "><img 
className='h-12 mr-2' src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg" alt="logo"
 />
        </div>
      </div>
      <div className="search bg-blue-600 w-8/12">search</div>
      <div className="profile bg-red-600 w-2/12">profile</div>
    </div>
  );
};

export default Header;
