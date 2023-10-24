import React, { useState } from "react";
import four from "../../assets/logos/four.png";
import anmol from "../../assets/images/anmol.jpeg";
import { Link } from "react-router-dom";
// const UserHomePageNavBar = () => {
//   return (
//     <div className="h-16 flex justify-between py-5 px-40 bg-primary">
//       <Link to={"/user"}>
//         <img className="w-28 h-28 mt-[-40px]" src={four} alt="hero-img" />
//       </Link>

//       <div className="flex space-x-12">
//         <div className="font-semibold">Oraginsation</div>
//         <div className="font-semibold">Admin</div>
//         <div className="font-semibold">Opportunity</div>
//       </div>

//       <div className="flex space-x-12 items-center">
//         <Link to={"/user/blog"}>
//           <div className="font-semibold">Blogs</div>
//         </Link>
//         <Link to={"profile"}>
//           <img
//             src={anmol}
//             className=" w-10 h-10 rounded-full"
//             alt="user-profile"
//           />
//         </Link>
//       </div>
//     </div>
//   );
// };

const UserHomePageNavBar = () => {
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!isProfileMenuOpen);
  };

  return (
    <div className="h-16 flex justify-between py-5 px-40 bg-primary">
      <Link to={"/user"}>
        <img className="w-28 h-28 mt-[-40px]" src={four} alt="hero-img" />
      </Link>

      <div className="flex space-x-12">
        <div className="font-semibold">Oraginsation</div>
        <div className="font-semibold">Admin</div>
        <div className="font-semibold">Opportunity</div>
      </div>

      <div className="flex space-x-12 items-center">
        <Link to={"/user/blog"}>
          <div className="font-semibold">Blogs</div>
        </Link>
        <div className="relative">
          <div className="cursor-pointer" onClick={toggleProfileMenu}>
            <img
              src={anmol}
              className="w-10 h-10 rounded-full"
              alt="user-profile"
            />
          </div>
          {isProfileMenuOpen && (
            <div className="absolute top-12 right-6 w-36 bg-white border rounded-b-lg rounded-tl-lg ">
              <div className="flex flex-col items-center ">
                <ul className="w-full">
                  <Link to="profile">
                    <li className="hover:bg-tertiary rounded-tl-lg hover:text-white px-4 py-2 flex justify-center items-center">
                      Profile
                    </li>
                  </Link>
                  <li className="hover:bg-tertiary rounded-b-lg hover:text-white mt-2 px-4 py-2 flex justify-center items-center">
                   Logout 
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserHomePageNavBar;
