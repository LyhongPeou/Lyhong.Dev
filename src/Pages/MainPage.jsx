import React, { useEffect } from "react";

const MainPage = () => {
  useEffect(() => {
    document.title = "Home"
 }, []);

  return (
    <div className="flex flex-row mx-10 mt-20 justify-center gap-10">
      <div>
        <h1> Hi</h1>
      </div>
      <div>
        <h1> Hello</h1>
      </div>
    </div>
  );
}

export default MainPage;
