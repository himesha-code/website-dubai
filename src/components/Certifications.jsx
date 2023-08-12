import React from "react";
import { certifications } from "../constants/home";

const Certifications = () => {
  return (
    <div className="container">
      <div className="certifications">
        <div className="row">
          <div className="col-sm-2">
            <p className="fs-20 font-medium">
              Certifications & <br /> Associations
            </p>
          </div>
          <div className="col-sm-10">
            {certifications.map((certi) => {
              const {img} = certi;
              return <img src={img} />;
            })}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
