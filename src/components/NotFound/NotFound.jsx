import React from "react";
import notFound from "./assets/not_found.jpg";
const NotFound = () => {
  return (
    <div>
      <img className="imgNot" width={"400px"} src={notFound} alt="not found" />
      <p className="not-found">По этому запросу ничего не найдено</p>
    </div>
  );
};

export default NotFound;
