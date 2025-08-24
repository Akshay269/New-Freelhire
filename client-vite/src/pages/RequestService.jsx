import  { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { auth_user, submit_form } from "../controllers/user";


export default function DashboardApplicant() {
  let [title, setTitle] = useState("");
  let [desc, setDesc] = useState("");
  let [budget, setBudget] = useState("");
  let [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  let [ setUserId] = useState("");

  const navigate = useNavigate();



  useEffect(() => {
    if (localStorage.getItem("user_token")) {
      let obj = {
        token: localStorage.getItem("user_token"),
      };
      auth_user(obj).then((data) => {
        if (data.tag) {
          setIsUserLoggedIn(true);
          setUserId(
            JSON.parse(atob(localStorage.getItem("user_token").split(".")[1]))
              .id
          );
        } else {
          setIsUserLoggedIn(false);
        }
      });
    }
  });

  const handleChange = async (e) => {
    e.preventDefault();

    let obj = {
      form_title: title,
      form_desc: desc,
      form_budget: budget,
      token: localStorage.getItem("user_token"),
    };

    submit_form(obj).then((data) => {
      alert(data.message);
      window.location.reload();
    });
  };

  return (
    <>
   
      <div className="dashbg p-16">
        <div className="userdetails bg-[#e6e6e6] rounded-lg shadow-2xl p-14 ml-8 mr-10 mt-20">
          <div className="text-5xl text-center">What Service do you need?</div>

          {isUserLoggedIn ? (
            <>
              <div>
                <div class="signup">
                  <form method="POST">
                    <select
                      onChange={(e) => setTitle(e.target.value)}
                      className="dropdown"
                      name="user_type"
                      required
                    >
                      <option value="" disabled selected hidden>
                        Select a Service
                      </option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="Content Creation">Content Creation</option>
                      <option value="Logo Designing">Logo Designing</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Graphic Designing">Graphic Designing</option>
                    </select>
                    <input
                      className="input"
                      type="text"
                      name="Description"
                      placeholder="Description"
                      required=""
                      value={desc}
                      onChange={(e) => {
                        setDesc(e.target.value);
                      }}
                    />
                    <input
                      className="input"
                      type="number"
                      name="budget"
                      placeholder="Budget (USD)"
                      required=""
                      value={budget}
                      onChange={(e) => {
                        setBudget(e.target.value);
                      }}
                    />
                    <button
                      className="signup-btn"
                      value="Register"
                      onClick={handleChange}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>

              <div className="already flex flex-row mt-32">
                <button
                  className="submit p-2 border-2 shadow-2xl w-[30%] text-xl hover:bg-[#c0c0c0] bg-white outline-none rounded-xl "
                  type="submit"
                  onClick={() => {
                    navigate("/userdashboard");
                  }}
                >
                  Back to Dashboard
                </button>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
