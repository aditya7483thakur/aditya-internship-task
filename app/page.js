"use client";

import toast from "react-hot-toast";
import "./page.css";

export default function Home() {
  const send = () => {
    toast.success(
      "Booom , Here you got your notification"
    );
  };
  return (
    <main className=" outer">
      <div className="headings">
        <div className="main-heading">Lorem Ipsum...</div>
        <div className="sub-heading ">Lorem ipsum dolor sit amet.</div>
      </div>
      <div className="border b1 main">
        <div className="border b2 main">
          <div className="border b3 main">
            <div className="border b4 main">
              <div className="centered-div main">
                <svg
                  width="54"
                  height="58"
                  viewBox="0 0 54 58"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M53.6667 48.3333H0.333334V43H3V24.416C3 11.1147 13.7467 0.333334 27 0.333334C40.2533 0.333334 51 11.1147 51 24.416V43H53.6667V48.3333ZM8.33333 43H45.6667V24.416C45.6667 14.0613 37.3093 5.66667 27 5.66667C16.6907 5.66667 8.33333 14.0613 8.33333 24.416V43ZM20.3333 51H33.6667C33.6667 52.7681 32.9643 54.4638 31.714 55.714C30.4638 56.9643 28.7681 57.6667 27 57.6667C25.2319 57.6667 23.5362 56.9643 22.286 55.714C21.0357 54.4638 20.3333 52.7681 20.3333 51Z"
                    fill="url(#paint0_linear_1_54)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1_54"
                      x1="-9.16162"
                      y1="33.0234"
                      x2="59.5253"
                      y2="33.0234"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#CE722C" />
                      <stop offset="0.54096" stopColor="white" />
                      <stop offset="1" stopColor="#CE722C" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="btn" onClick={send}>
        Send Notification
      </button>
    </main>
  );
}
