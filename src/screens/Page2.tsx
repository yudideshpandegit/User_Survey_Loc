import React, { useState, useEffect } from "react";
import { IstateInterfacepPage2 } from "../interfaces/interfaces";

import { useSelector, useDispatch } from "react-redux";

import { useHistory } from "react-router-dom";

import { surveyActionPage2 } from "../global-state/actions/surveyAction";

import "./Page2.css";
import { RootState } from "../global-state/store";

const Page2 = () => {
  const [ques4, setQues4] = useState<string>("");
  const [ques5, setQues5] = useState<string>("");
  const [ques6, setQues6] = useState<string>("");
  const [ques7, setQues7] = useState<string>("");
  const [ques8, setQues8] = useState<string>("");

  const history = useHistory();

  const dispatch = useDispatch();

  const { surveyPage2, loading, error } = useSelector((state: RootState) => {
    return state.page2;
  });

  useEffect(() => {
    if (surveyPage2) {
      console.log(surveyPage2);
      setQues4(surveyPage2.ques4);
      setQues5(surveyPage2.ques5);
      setQues6(surveyPage2.ques6);
      setQues7(surveyPage2.ques7);
      setQues8(surveyPage2.ques8);
    }
  }, []);

  const onPage2Submit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();

    let tempPage2: IstateInterfacepPage2 = {
      ques4: ques4,
      ques5: ques5,
      ques6: ques6,
      ques7: ques7,
      ques8: ques8,
    };

    dispatch(surveyActionPage2(tempPage2));
    history.push("/report");
  };

  return (
    <div className="page2">
      <div className="row ">
        <h2 className="title">SURVEY</h2>
      </div>
      <div className="page2__content">
        <div className="row">
          <h3 className="title">FEEDBACK</h3>
        </div>
        <form onSubmit={(e) => onPage2Submit(e)}>
          <div className="form-group">
            <label id="ques4">
              <h4> Q.4 Where did you first hear about us? </h4>
            </label>
            <textarea
              className="form-control"
              id="ques4"
              rows={5}
              value={ques4}
              onChange={(e) => setQues4(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <label id="ques4"><h4>
              Q.5 What do you like most about our [product or service]?
            </h4></label>
            <textarea
              className="form-control"
              id="ques4"
              rows={5}
              value={ques5}
              onChange={(e) => setQues5(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <label id="ques4"><h4> Q.6 What do you like least? </h4></label>
            <textarea
              className="form-control"
              id="ques4"
              rows={5}
              value={ques6}
              onChange={(e) => setQues6(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <label id="ques4"><h4>
              Q.7 What feature/option could we add to make your experience
              better?
            </h4></label>
            <textarea
              className="form-control"
              id="ques4"
              rows={5}
              value={ques7}
              onChange={(e) => setQues7(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <label id="ques4"><h4>
              Q.8 How could we have gone above and beyond?
            </h4></label>
            <textarea
              className="form-control"
              id="ques4"
              rows={5}
              value={ques8}
              onChange={(e) => setQues8(e.target.value)}
            ></textarea>
            <div className="row page2__button">
              <button type="submit" className="btn btn-primary ml-auto">
               {"NEXT >"} 
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page2;
