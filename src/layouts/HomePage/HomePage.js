import React from "react";
import CardPost from "../../components/card-post/CardPost";

const HomePage = (props) => {
  console.log(`${props.message} HomePage`);
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 row">
          <CardPost message={props.message} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
