import Input from "./custominput";
import { useState, useRef } from "react";
import "./form.css";
import { useDispatch } from "react-redux";
import { FormActions } from "../../redux/form";
import { useNavigate } from "react-router-dom";
const BasicForm = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [city, setcity] = useState(null);
  const [Category, setCategory] = useState(null);
  const cityref = useRef();
  const Categoryref = useRef();
  const Formref = useRef();
  const shopstatus = (date) => {
    const current = new Date();
    const closing = new Date(date);
    if (current > closing) {
      return "Closed";
    }
    return "Open";
  };
  const Cityhandler = (event) => {
    setcity(event.target.value);
    cityref.current.classList.remove("Error");
  };
  const Categoryhandler = (event) => {
    setCategory(event.target.value);
    Categoryref.current.classList.remove("Error");
  };
  const {
    EnteredValue: EnteredFirstName,
    ValueIsValid: FirstNameIsValid,
    valueInputChangeHandler: FirstNameInputChangeHandler,
    setfocus,
    HasError,
    blurHandler,
    reset,
  } = Input((EnteredFirstName) => {
    if (/^[a-zA-Z]+$/.test(EnteredFirstName)) {
      return true;
    }
    return false;
  });
  const {
    EnteredValue: OpeningDate,
    ValueIsValid: OpeningDateIsValid,
    valueInputChangeHandler: OpenDateChangeHandler,
    setfocus: OpeningDateFocus,
    HasError: OpeingDateError,
    blurHandler: OpenDateBlur,
  } = Input((OpeningDate) => {
    if (OpeningDate) {
      return true;
    }
    return false;
  });
  const {
    EnteredValue: ClosingDate,
    ValueIsValid: ClosingDateIsValid,
    valueInputChangeHandler: ClosingDateChangeHandler,
    setfocus: ClosingDateFocus,
    HasError: ClosingDateError,
    blurHandler: ClosingDateBlur,
  } = Input((ClosingDate) => {
    if (Date.parse(OpeningDate) >= Date.parse(ClosingDate)) {
      return false;
    }
    if (ClosingDate) return true;
  });
  const submitHandler = (e) => {
    e.preventDefault();

    if (
      FirstNameIsValid &&
      city &&
      Category &&
      OpeningDateIsValid &&
      ClosingDateIsValid
    ) {
      Formref.current.reset();
      // OpeningDateref.current.value = "";
      // closingDateref.current.value = "";
      reset();

      dispatch(
        FormActions.AddShop({
          name: EnteredFirstName,
          Category,
          city,
          "Opening date": OpeningDate,
          "Closing date": ClosingDate,
          status: shopstatus(ClosingDate),
        })
      );
      navigate("/");
    }
    !city && cityref.current.classList.add("Error");
    !Category && Categoryref.current.classList.add("Error");
    !FirstNameIsValid && setfocus(true);
    !OpeningDateIsValid && OpeningDateFocus(true);
    !ClosingDateIsValid && ClosingDateFocus(true);
  };
  return (
    <div className="wrapper">
      <div className="app">
        <form onSubmit={submitHandler} ref={Formref}>
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <input
              value={EnteredFirstName}
              className={HasError ? "invalid" : ""}
              type="text"
              id="name"
              onChange={FirstNameInputChangeHandler}
              onBlur={blurHandler}
              placeholder="Name"
            />
            {HasError && (
              <h2 className="error_msg"> please enter a valid name</h2>
            )}
          </div>
          <div className="form-control">
            <label htmlFor="Category">Category</label>
            <div className="select" ref={Categoryref}>
              <select
                defaultValue={"DEFAULT"}
                onChange={Categoryhandler}
                required>
                <option value="DEFAULT" disabled>
                  Select Category
                </option>

                <option value="Grocery">Grocery</option>
                <option value="Butcher">Butcher</option>
                <option value="Baker ">Baker</option>
                <option value="Chemist">Chemist</option>
                <option value="Stationery shop">Stationery shop</option>
              </select>
            </div>
          </div>

          <div className="form-control">
            <label htmlFor="City">City</label>

            <div ref={cityref} className="select">
              <select defaultValue={"DEFAULT"} required onChange={Cityhandler}>
                <option value="DEFAULT" disabled>
                  Select City
                </option>
                <option value="Thane">Thane</option>
                <option value="Pune">Pune</option>
                <option value="Mumbai Suburban">Mumbai Suburban</option>
                <option value="Nashik">Nashik</option>
                <option value="Nagpur">Nagpur</option>
                <option value="Ahmednagar">Ahmednagar</option>
                <option value="Solapur">Solapur</option>
              </select>
            </div>
          </div>
          <div className="form-control">
            <label htmlFor="Opening">Opening Date</label>
            <input
              type="date"
              name="opening"
              // value={OpeningDate}
              onChange={OpenDateChangeHandler}
              className={OpeingDateError ? "invalid" : ""}
              onBlur={OpenDateBlur}
            />
          </div>
          <div className="form-control">
            <label htmlFor="closing">Closing Date</label>
            <input
              type="date"
              name="closing"
              // value={ClosingDate}
              onChange={ClosingDateChangeHandler}
              className={ClosingDateError ? "invalid" : ""}
              onBlur={ClosingDateBlur}
            />
            {ClosingDateError && (
              <h2 className="error_msg">
                Closing Date should not be before Opening Date
              </h2>
            )}
          </div>
          <div className="form-actions">
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BasicForm;
