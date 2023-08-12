import React from "react";
import Title from "./Title";
import { services } from "../constants/home";

const Services = () => {
  return (
    <div className="container">
      <div className="our-services">
        <Title title="Our Services" subTitle="A general set of" />
        <div class="row my-5">
          <div class="col-9">
            <div class="row">
              {services.map((service) => {
                const { id, icon, title, description } = service;
                return (
                  <div class="col-sm-4 mb-4 mb-sm-0" key={id}>
                    <div class="card">
                      <div class="card-body p-4">
                        <div className="d-flex flex-row gap-4 align-items-center">
                          {icon}
                          <h5 class="card-title mb-0 ">{title}</h5>
                        </div>
                        <p class="card-text mt-3 text-light-gray">
                          {description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
              {/* <div class="col-sm-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <a href="#" class="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div> */}
              {/* <div class="col-sm-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <a href="#" class="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div class="col-3">
            <img src="./image/services.svg" width="100%" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
