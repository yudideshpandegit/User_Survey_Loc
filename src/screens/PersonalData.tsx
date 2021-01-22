import React, { useState, useEffect } from "react";
import "./PersonalData.css";

import { useSelector, useDispatch } from "react-redux";

import { useHistory } from "react-router-dom";

import { RootState } from "../global-state/store";

import axios from "axios";
import { surveyActionPage1 } from "../global-state/actions/surveyAction";
import { IstateInterface } from "../interfaces/interfaces";
import { validate, validateEmailFormat } from "../validators";
import { surveyReducerPage1 } from "../global-state/reducers/surveyReducer";

const PersonalData: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [age, setAge] = useState<string | number>("");
  const [gender, setGender] = useState<string>("Not Specified");
  const [countryArr, setCountryArr] = useState([]);
 

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    emailFormat: false,
    country: false,
    age: false,
    gender: false,
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    country: false,
    age: false,
    gender: false,
  });

  const history = useHistory();

  const dispatch = useDispatch();

  const { surveyPage1, loading, error } = useSelector((state: RootState) => {
    return state.page1;
  });

  useEffect(() => {
    if (surveyPage1) {
      setName(surveyPage1.name);
      setEmail(surveyPage1.email);
      setAge(surveyPage1.age);
      setGender(surveyPage1.gender);
      setCountry(surveyPage1.country);
    }

    const getCountries = async () => {
      try {
        const data: any = await axios.get(
          "https://restcountries.eu/rest/v2/all"
        );
        setCountryArr(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    getCountries();
  }, []);

  const optionData = [1, 2, 3, 4];

  const onNextHandler = (e: any) => {
    e.preventDefault();

    let data: IstateInterface = {
      name: name,
      email: email,
      country: country,
      age: age,
      gender: gender,
    };

    dispatch(surveyActionPage1(data));
    history.push("/page2");
  };

  const onInputChange = (value: string, type: string) => {
    console.log(value);
    switch (type) {
      case "name": {
        setName(value);
        setErrors({
          ...errors,
          name: validate(value),
        });
        break;
      }
      case "email": {
        setEmail(value);

        setErrors({
          ...errors,
          email: validate(value),
          emailFormat: validateEmailFormat(value),
        });

        break;
      }
      case "country": {
        setCountry(value);
        setErrors({
          ...errors,
          country: validate(value),
        });
        break;
      }
      case "age": {
        setAge(value);
        setErrors({
          ...errors,
          age: validate(value),
        });
        break;
      }
      case "gender": {
        setGender(value);
        setErrors({
          ...errors,
          age: validate(value),
        });
        break;
      }
    }
  };

  const onInputTouched = (type: string) => {
    switch (type) {
      case "name": {
        setTouched({
          ...touched,
          name: true,
        });
        break;
      }
      case "email": {
        setTouched({
          ...touched,
          email: true,
        });
        break;
      }
      case "country": {
        setTouched({
          ...touched,
          country: true,
        });
        break;
      }
      case "age": {
        setTouched({
          ...touched,
          age: true,
        });
        break;
      }
      case "gender": {
        setTouched({
          ...touched,
          gender: true,
        });
        break;
      }
    }
  };

  return (
    <div className="personal-data">
      <div className="row ">
        <h2 className="title">SURVEY</h2>
      </div>
      <div className="personal-data__content">
        <div className="row">
          <h3 className="title">PERSONAL DATA</h3>
        </div>
        <form onSubmit={(e) => onNextHandler(e)}>
          <div className="form-group">
            <label htmlFor="name">
              <h5>
                Name<span className="required__star">*</span>:
              </h5>
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your name"
              value={name}
              onBlur={() => onInputTouched("name")}
              onChange={(e) => onInputChange(e.target.value, "name")}
            />

            {touched.name ? (
              !errors.name ? (
                <p className = "required__star">Please enter a name</p>
              ) : null
            ) : null}
          </div>
          <div className="form-group">
            <label htmlFor="email">
              <h5>
                Email<span className="required__star">*</span>:
              </h5>
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={email}
              onBlur={() => onInputTouched("email")}
              onChange={(e) => onInputChange(e.target.value, "email")}
            />
            {touched.email ? (
              !errors.email ? (
                <p className = "required__star">Please enter your email</p>
              ) : null
            ) : null}
            {touched.email ? (
              !errors.emailFormat ? (
                <p  className = "required__star">Please enter your correct email</p>
              ) : null
            ) : null}
          </div>
          <div className="form-group">
            <label htmlFor="country">
              <h5>
                Country<span className="required__star">*</span>:
              </h5>
            </label>
            <select
              className="form-control"
              onBlur={() => onInputTouched("country")}
              onChange={(e) => onInputChange(e.target.value, "country")}
            >
              {countryArr.map((countryItem: any) => {
                return (
                  <option value={countryItem.name}>{countryItem.name}</option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="age">
              <h5>
                Age<span className="required__star">*</span>:
              </h5>
            </label>
            <input
              type="number"
              className="form-control"
              id="age"
              placeholder="Enter your age"
              onBlur={() => onInputTouched("age")}
              onChange={(e) => onInputChange(e.target.value, "age")}
            />
            {touched.age ? (
              !errors.age ? (
                <p  className = "required__star">Please enter your age</p>
              ) : null
            ) : null}
          </div>
          <div className="form-group">
            <label htmlFor="gender">
              <h5>
                Gender<span className="required__star">*</span>:
              </h5>
            </label>
            <div className="form-check">
              <label className="form-check-label">
                <input
                  type="radio"
                  className="form-check-input"
                  value="Male"
                  name="optradio"
                  onChange={(e) => onInputChange(e.target.value, "gender")}
                />
                Male
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label">
                <input
                  type="radio"
                  className="form-check-input"
                  value="Female"
                  name="optradio"
                  onChange={(e) => onInputChange(e.target.value, "gender")}
                />
                Female
              </label>
            </div>
          </div>

          <div className="row">
            <button
              type="submit"
              className="btn btn-primary ml-auto"
              disabled={
                !(

                  errors.name &&
                  errors.email &&
                  errors.country &&
                  errors.age
                )
              }
            >
              {"NEXT >"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalData;
