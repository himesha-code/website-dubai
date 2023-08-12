import React from "react";
import "../Styles/style.css";
import { address } from "../constants/home";

const Header = () => {
  return (
    <>
      {" "}
      <div className="container">
        <div className="d-flex justify-content-between p-3">
          <h1 className="text-black fs-18">Logo</h1>
          <div className="d-flex gap-3">
            {address.map((headerAddress) => {
              const { id, icon, time, closeDays, color } = headerAddress;
              return (
                <>
                  <div
                    className="header-leftsection d-flex flex-row gap-1 align-items-center gap-3"
                    key={id}
                  >
                    {icon}
                    <div className="d-flex flex-column">
                      <p className="mb-0 text-black font-medium">{time}</p>
                      <p className="mb-0" style={{ color: color }}>
                        {closeDays}
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <div className="navbar bg-black">
        <div className="container">
          <nav
            className="navbar navbar-expand-lg bg-black border-body"
            data-bs-theme="dark"
          >
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                  <a className="nav-link" href="#">
                    Who we are
                  </a>
                  <a className="nav-link" href="#">
                    What we do
                  </a>
                  <a className="nav-link" href="#">
                    careers
                  </a>
                  <a className="nav-link" href="#">
                    contact us
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
