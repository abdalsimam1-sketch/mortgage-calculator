import { useState } from "react";
import calButtton from "../assets/images/icon-calculator.svg";

export const Home = () => {
  const [formState, setFormState] = useState({
    amount: "",
    term: "",
    rate: "",
    type: "repayment",
  });
  const handleSumbmit = (e) => {
    e.preventDefault();
  };
  return (
    <div
      className="home-page py-5 p-md-0 d-flex align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="container  d-flex flex-column  flex-md-row justify-content-md-center ">
        <section className="col-12 col-md-6 p-3 d-flex flex-column gap-4 form-section rounded-start ">
          <div className="d-flex flex-column flex-md-row justify-content-md-between align-items-md-center">
            <h1>Mortgage Calculator</h1>
            <span className="text-muted text-decoration-underline cursor-pointer d-inline">
              Clear All
            </span>
          </div>
          <form className="d-flex flex-column gap-3" onSubmit={handleSumbmit}>
            <div>
              <label htmlFor="amount">Mortgage Amount</label>
              <div className="d-flex">
                <div
                  style={{ backgroundColor: "var(--slate-300)" }}
                  className="p-2 px-4 rounded-start"
                >
                  <span> $</span>
                </div>
                <input
                  value={formState.amount}
                  onChange={(e) =>
                    setFormState((current) => ({
                      ...current,
                      amount: e.target.value,
                    }))
                  }
                  type="number"
                  id="amount"
                  className="form-control rounded-start-0"
                />
              </div>
            </div>
            <div className="row gap-3 gap-md-0">
              <div className="col-12 col-md-6">
                <label htmlFor="term">Mortgage Term</label>
                <div className="d-flex">
                  <input
                    value={formState.term}
                    onChange={(e) =>
                      setFormState((current) => ({
                        ...current,
                        term: e.target.value,
                      }))
                    }
                    type="number"
                    id="term"
                    className="form-control rounded-end-0"
                  />{" "}
                  <div
                    style={{ backgroundColor: "var(--slate-300)" }}
                    className="p-2 px-4 rounded-end"
                  >
                    <span>years</span>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <label htmlFor="rate">Interest Rate</label>
                <div className="d-flex">
                  <input
                    type="number"
                    id="rate"
                    className="form-control "
                    value={formState.rate}
                    onChange={(e) =>
                      setFormState((current) => ({
                        ...current,
                        rate: e.target.value,
                      }))
                    }
                  />
                  <div
                    style={{ backgroundColor: "var(--slate-300)" }}
                    className="p-2 px-4 rounded-end"
                  >
                    <span>%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="type-section d-flex flex-column gap-3">
              <span>Mortgage Type</span>
              <label
                className="form-control d-flex gap-3 cursor-pointer"
                id="repayment"
              >
                <input
                  value={"repayment"}
                  onChange={(e) =>
                    setFormState((current) => ({
                      ...current,
                      type: e.target.value,
                    }))
                  }
                  type="radio"
                  id="repayment"
                  className="cursor-pointer"
                  name="type"
                />
                <label htmlFor="repayment" className="cursor-pointer">
                  Repayment
                </label>
              </label>
              <label
                className="form-control d-flex gap-3 cursor-pointer"
                id="interest"
              >
                <input
                  value={"interest"}
                  onChange={(e) =>
                    setFormState((current) => ({
                      ...current,
                      type: e.target.value,
                    }))
                  }
                  name="type"
                  type="radio"
                  id="interest"
                  className="cursor-pointer"
                />
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
          </form>
        </section>
        <section className="col-12 col-md-6 logo-section p-3 px-5 text-light green-section rounded-end">
          <div className="d-flex flex-column gap-md-5">
            <div>
              <h2>Your Results</h2>
              <p>
                Your results are shown below based on the information you
                provided, to adjust the results, edit the form and hit the
                calculate button again
              </p>
            </div>
            <div className="p-3 result-section">
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
