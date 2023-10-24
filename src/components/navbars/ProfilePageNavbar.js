import React from 'react'
import four from "../../assets/logos/four.png";
import anmol from "../../assets/images/anmol.jpeg";
import { Link } from 'react-router-dom';

const ProfilePageNavbar = () => {
    return (
        <div className="h-16 flex justify-between py-5 px-40 bg-primary">
          <Link to={'/user'}>
          <img className="w-28 h-28 mt-[-40px]" src={four} alt="hero-img" />
          </Link>
          <div className="flex space-x-12 items-center">
            <Link to={'/user/profile/blog'}>
              <div className="font-semibold">Blogs</div>
            </Link>
            <img
              src={anmol}
              className=" w-10 h-10 rounded-full"
              alt="user-profile"
            />
          </div>
            
        </div>
      );
}

export default ProfilePageNavbar
