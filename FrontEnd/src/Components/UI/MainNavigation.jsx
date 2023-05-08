import { Link } from "react-router-dom";

const MainNavigation = () => {
  return (
    <div className="flex flex-row flex-wrap justify-between content-center items-center m-10 font-semibold text-title font-roboto">
      <Link to="/">
        Lyhong.Dev
      </Link> 
      <div className="flex gap-7 sm:gap-3 text-nav font-medium flex-wrap">
        <Link to = "" className="hover:underline"> Home </Link>
        <Link to="/classes" className="hover:underline"> Classes </Link>
        <Link to="/projects" className="hover:underline"> Projects</Link>
        <Link to="/about" className="hover:underline"> About </Link>
      </div>
    </div>
  );
};
export default MainNavigation;
