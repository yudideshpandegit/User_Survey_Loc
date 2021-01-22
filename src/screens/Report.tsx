import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../global-state/store";
import { useHistory } from "react-router-dom";

import { reset } from "../global-state/actions/surveyAction";

import "./Report.css";

const Report: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  const history = useHistory();

  const dispatch = useDispatch();

  const page1 = useSelector((state: RootState) => {
    return state.page1;
  });

  const page2 = useSelector((state: RootState) => {
    return state.page2;
  });

  useEffect(() => {
    if (page1 && page2) {
      setLoading(false);
    }
  }, []);

  const onResetData = () => {
    dispatch(reset());
    history.push("/");
  };

  return (
    <div className="report">
      <div className="row">
        <h2 className="report__personal-data__title ">Report</h2>
      </div>
      <hr />
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => history.push("/page2")}
      >
        BACK
      </button>
      {loading ? (
        <h1>Loading ...</h1>
      ) : (
        <>
          <div className="report__personal-data">
            <div className="row">
              <h3 className="report__personal-data__title ">PERSONAL DATA</h3>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6">
                    <h4>Name:</h4>
                  </div>{" "}
                  <div className="col-md-6">{page1.surveyPage1?.name}</div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6">
                    <h4>Email:</h4>
                  </div>{" "}
                  <div className="col-md-6">{page1.surveyPage1?.email}</div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6">
                    <h4>Age:</h4>
                  </div>{" "}
                  <div className="col-md-6">{page1.surveyPage1?.age}</div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6">
                    <h4>Gender:</h4>
                  </div>{" "}
                  <div className="col-md-6">{page1.surveyPage1?.gender}</div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6">
                    <h4>Country:</h4>
                  </div>{" "}
                  <div className="col-md-6">{page1.surveyPage1?.country}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="report__feedback">
            <div className="row">
              <h3 className="report__feedback__title">FEEDBACK</h3>
            </div>
            <div className="report__feedback__content">
              <div className="row feedback__item">
                <h4>Q.4 Where did you first hear about us?</h4>
                <p>Ans: {page2.surveyPage2?.ques4}</p>
              </div>
              <div className="row feedback__item">
                <h4>
                  Q.5 What do you like most about our [product or service]?
                </h4>
                <p>Ans: {page2.surveyPage2?.ques5}</p>
              </div>
              <div className="row feedback__item">
                <h4> Q.6 What do you like least? </h4>
                <p>Ans: {page2.surveyPage2?.ques6}</p>
              </div>
              <div className="row feedback__item">
                <h4>
                  Q.7 What feature/option could we add to make your experience
                  better?
                </h4>
                <p>Ans: {page2.surveyPage2?.ques7}</p>
              </div>
              <div className="row feedback__item">
                <h4>Q.8 How could we have gone above and beyond?</h4>
                <p>Ans: {page2.surveyPage2?.ques8}</p>
              </div>
            </div>
          </div>
        </>
      )}

      <div className="row">
        <button
          type="button"
          className="btn btn-primary ml-auto mr-auto"
          onClick={() => onResetData()}
        >
          {"RESET"}
        </button>
      </div>
    </div>
  );
};

export default Report;
