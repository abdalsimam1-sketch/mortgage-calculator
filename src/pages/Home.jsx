import { useState } from "react";
import calButtton from "../assets/images/icon-calculator.svg";
import emptyState from "../assets/images/illustration-empty.svg";

export const Home = () => {
  const [formState, setFormState] = useState({
    amount: "",
    term: "",
    rate: "",
    type: "repayment",
  });
  const [errors, setErrors] = useState({
    amountError: "",
    termError: "",
    rateError: "",
  });
  const [result, setResult] = useState({ monthly: 0, total: 0 });
  const [hasCalculated, setHasCalculated] = useState(false);
  const clearAll = () => {
    setFormState({ amount: "", term: "", rate: "", type: "repayment" });
    setErrors({
      amountError: "",
      termError: "",
      rateError: "",
    });
    setResult({ monthly: 0, total: 0 });
    setHasCalculated(false);
  };
  const handleSumbmit = (e) => {
    let hasError = false;
    e.preventDefault();
    setErrors({ amountError: "", termError: "", rateError: "" });
    if (!formState.amount.trim()) {
      setErrors((current) => ({
        ...current,
        amountError: "Amount field cannot be empty",
      }));
      hasError = true;
    } else if (Number(formState.amount) <= 0) {
      setErrors((current) => ({
        ...current,
        amountError: "Amount has to be > 0",
      }));
      hasError = true;
    }
    if (!formState.rate.trim()) {
      setErrors((current) => ({
        ...current,
        rateError: "Rate field cannot be empty",
      }));
      hasError = true;
    } else if (Number(formState.rate) <= 0) {
      setErrors((current) => ({
        ...current,
        rateError: "Rate has to be > 0",
      }));
      hasError = true;
    }
    if (!formState.term.trim()) {
      setErrors((current) => ({
        ...current,
        termError: "Years cannot be empty",
      }));
      hasError = true;
    } else if (Number(formState.term) <= 0) {
      setErrors((current) => ({
        ...current,
        termError: "Years has to be > 0",
      }));
      hasError = true;
    }
    if (hasError) {
      return;
    }
    const P = Number(formState.amount);
    const r = Number(formState.rate) / 100 / 12;
    const n = Number(formState.term) * 12;
    if (formState.type === "repayment") {
      const monthly = P * ((r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
      const total = monthly * n;
      setResult({ monthly, total });
    } else {
      const monthly = P * r;
      const total = P + monthly * n;
      setResult({ monthly, total });
    }
    setHasCalculated(true);
  };
  return (
    <div
      className="home-page py-5 p-md-0 d-flex align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="container  d-flex flex-column  flex-md-row justify-content-md-center ">
        <section className="col-12 col-md-6 p-md-5 p-3 d-flex flex-column gap-4 form-section rounded-start ">
          <div className="d-flex flex-column flex-md-row justify-content-md-between align-items-md-center">
            <h1>Mortgage Calculator</h1>
            <span
              className="text-muted text-decoration-underline cursor-pointer d-inline"
              onClick={clearAll}
            >
              Clear All
            </span>
          </div>
          <form className="d-flex flex-column gap-3" onSubmit={handleSumbmit}>
            <div>
              <div className="d-flex justify-content-between">
                <label htmlFor="amount">Mortgage Amount</label>
                {errors.amountError && (
                  <span className="text-danger">{errors.amountError}</span>
                )}
              </div>
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
                  className={`form-control ${errors.amountError ? "border-danger" : ""}  rounded-start-0`}
                />
              </div>
            </div>
            <div className="row gap-3 gap-md-0">
              <div className="col-12 col-md-6">
                <div className="d-flex justify-content-between">
                  <label htmlFor="term">Mortgage Term</label>
                  {errors.termError && (
                    <span className="text-danger">{errors.termError}</span>
                  )}
                </div>

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
                    className={`form-control ${errors.termError ? "border-danger" : ""}  rounded-end-0`}
                  />

                  <div
                    style={{ backgroundColor: "var(--slate-300)" }}
                    className="p-2 px-4 rounded-end"
                  >
                    <span>years</span>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="d-flex justify-content-between">
                  <label htmlFor="rate">Interest Rate</label>
                  {errors.rateError && (
                    <span className="text-danger">{errors.rateError}</span>
                  )}
                </div>

                <div className="d-flex">
                  <input
                    type="number"
                    id="rate"
                    className={`form-control ${errors.rateError ? "border-danger" : ""} rounded-end-0`}
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
                className={`cursor-pointer ${formState.type === "repayment" ? "active-type" : ""} form-control d-flex gap-3`}
                id="repayment"
              >
                <input
                  checked={formState.type === "repayment"}
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
                <span className="cursor-pointer">Repayment</span>
              </label>
              <label
                className={`cursor-pointer ${formState.type === "interest" ? "active-type" : ""} form-control d-flex gap-3`}
                id="interest"
              >
                <input
                  checked={formState.type === "interest"}
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
                <span className="cursor-pointer">Interest Only</span>
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
        <section className="col-12 col-md-6 logo-section p-3 px-5 text-light green-section rounded rounded-md-end ">
          {hasCalculated ? (
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
                  <p className="text-light m-0">Your monthly payments</p>
                  <h1 className="result">
                    $ {Number(result.monthly.toFixed(2)).toLocaleString()}
                  </h1>
                </div>
                <div className="text-light ">
                  <p className="m-0 mt-3">Total you'll repay over the term</p>
                  <h3 className="m-0">
                    $ {Number(result.total.toFixed(2)).toLocaleString()}
                  </h3>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center px-3 d-flex flex-column justify-content-center h-100">
              <img
                src={emptyState}
                alt="empty state illustration image"
                style={{ width: "15rem" }}
                className="mx-auto"
              />
              <h3>Results shown here</h3>{" "}
              <p>
                Complete the form and click "calculate repayments" to see what
                your monthly repayments would be{" "}
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};
