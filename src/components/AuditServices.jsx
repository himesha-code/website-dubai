import React from "react";
import Title from "./Title";
import { Verified } from "../Icons";
import { auditservices } from "../constants/home";

const AuditServices = () => {
  return (
    <div className="bg-dark">
      <div className="container">
        <div className="audit-services">
          <div class="row">
            <div class="col-sm-5 text-white">
              <img src="./image/auditservice.svg" width="100%" />
            </div>
            <div class="col-sm-7 text-white">
              <Title
                title="20+ Years of Experience in Financial & 
Business Audit Services"
                subTitle="Why us?"
                titleColor="#fff"
                subTitleColor="var(--primary-color)"
              />

              <div class="row my-5">
                {auditservices.map((audit) => {
                  const { id, title, description } = audit;
                  return (
                    <>
                      <div class="col-sm-6 mb-3" key={id}>
                        <div class="card border-0">
                          <div class="card-body background-light">
                            <div className="d-flex flex-row gap-3">
                              <Verified />
                              <div className="d-flex flex-column">
                                <h5 class="card-title text-white">{title}</h5>
                                <p class="card-text text-light">
                                  {description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditServices;
