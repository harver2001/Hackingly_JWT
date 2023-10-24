import React from "react";
import { Link } from "react-router-dom";
import four from "../../assets/logos/four.png";
import PrimaryButton from "../buttons/PrimaryButton";
const LoginPageNavBar = () => {
  return (
    <div className="h-16 flex justify-between py-5 px-40 bg-primary">
      <Link to={"/"}>
        <img
          className="w-28 h-28 mt-[-40px]"
          src={four}
          alt="hero-img"
        />
      </Link>

      <div className="flex space-x-4">
        <div className="font-semibold">
          <Link to={"/blogs"}>Blogs</Link>
        </div>
        <Link to={"/signup"}>
          <PrimaryButton size={'xs'} content={'SignUp'} margin={'mt-[-3px]'} />
        </Link>
      </div>
    </div>
  );
};

export default LoginPageNavBar;
