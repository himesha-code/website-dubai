import React from "react";
import { offerService, offerServiceList } from "../constants/home";

const OfferService = () => {
  return (
    <div className="row" style={{ width: "100%" }}>
      <div className="col-sm-8">
        <img src="./image/offerservice.svg" width="100%" />
      </div>
      <div className="col-sm-4">
        <div className="offerservice">
          <p className="text-black font-regular">{offerService.mainTitle}</p>
          <p className="text-black font-regular">{offerService.title}</p>
          <ul className="offerservice-list">
            {offerServiceList.map((servicelist) => {
              const {id, title} = servicelist;
              return (
                <>
                  <li className="text-white font-regular" key={id}>
                   {title}
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OfferService;
