import React from "react";
import calButtton from "../assets/images/icon-calculator.svg";
import logo from "../assets/images/illustration-empty.svg";
export const Home = () => {
  return (
    <div
      className="home-page py-5 p-md-0 d-flex align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="container  d-flex flex-column  flex-md-row justify-content-md-center ">
        <section className="col-12 col-md-6 card p-3 d-flex flex-column gap-4 ">
          <div className="d-flex flex-column flex-md-row justify-content-md-between align-items-md-center">
            <h1>Mortgage Calculator</h1>
            <span className="text-muted text-decoration-underline cursor-pointer d-inline">
              Clear All
            </span>
          </div>
          <div>
            <label htmlFor="amount">Mortgage Amount</label>
            <input type="number" id="amount" className="form-control" />
          </div>
          <div className="row gap-3 gap-md-0">
            <div className="col-12 col-md-6">
              <label htmlFor="term">Mortgage Term</label>
              <input type="number" id="term" className="form-control" />
            </div>
            <div className="col-12 col-md-6">
              <label htmlFor="rate">Interest Rate</label>
              <input type="number" id="rate" className="form-control" />
            </div>
          </div>
          <div className="type-section d-flex flex-column gap-3">
            <span>Mortgage Type</span>
            <label
              className="form-control d-flex gap-3 cursor-pointer"
              id="repayment"
            >
              <input
                type="checkbox"
                id="repayment"
                className="cursor-pointer"
              />
              <label htmlFor="repayment" className="cursor-pointer">
                Repayment
              </label>
            </label>
            <label
              className="form-control d-flex gap-3 cursor-pointer"
              id="interest"
            >
              <input type="checkbox" id="interest" className="cursor-pointer" />
              <label htmlFor="interest" className="cursor-pointer">
                Interest Only
              </label>
            </label>
          </div>
          <div>
            <button className="btn  rounded-pill cal-button align-self-md-start">
              <img src={calButtton} alt="cal button svg" />
              <span> Calculate Repayments</span>
            </button>
          </div>
        </section>
        <section className="col-12 col-md-6 card logo-section p-3 px-5 text-light">
          <div className="d-flex flex-column gap-md-5">
            <div>
              <h2>Your Results</h2>
              <p>
                Your results are shown below based on the information you
                provided, to adjust the results, edit the form and hit the
                calculate button again
              </p>
            </div>
            <div className="card p-3 result-section">
              <div className=" border-bottom">
                <p className="text-light">Your monthly payments</p>
                <h1 className="result">$1797.74</h1>
              </div>
              <div className="text-light">
                <p>Total you'll repay over the term</p>
                <h3>$ 539,322.94</h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
