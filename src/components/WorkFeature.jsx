import React from "react";
import Title from "./Title";
import { Portfolio } from "../Icons";
import { workfeatures } from "../constants/home";

const WorkFeature = () => {
  return (
    <div className="container">
      <div className="work-feature">
        <Title title="Work Feature" subTitle="We are specialist" />
        <div class="row my-5">
          <div class="col-9">
            <div class="row">
              {workfeatures.map((feature) => {
                const { id, icon, title } = feature;
                return (
                  <>
                    <div class="col-sm-6 mb-4 mb-sm-0" key={id}>
                      <div class="card border-0">
                        <div class="card-body">
                          <div className="d-flex flex-row gap-4 align-items-center">
                            {icon}
                            <h5 class="card-title mb-0 fs-18 font-regular text-light-black">
                              {title}
                            </h5>
                          </div>
                          <p class="card-text mt-3 text-light-gray">
                            Lorem Ipsum is simply dummy text of the printing and
                            type setting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div class="col-3">
            <img src="./image/feature.png" width="100%" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkFeature;
