import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import Sidebar from "./Sidebar";
import "../styles/Dashboard.css";
import Header from "./Header";
import DashBoardActions from "./DashBoardActions";

const Dashboard = () => {
  const businesses = useSelector(
    (state: RootState) => state.business.businesses
  );

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard__content">
        <Header />
        <div>
          <div className="dashboard__content__header">
            <h2>Good Afternoon, Payshiga</h2>
            <div className="dashboard__content__date">
              Monday, January 23, 2023
            </div>
          </div>
          <DashBoardActions />
          <div className="dashboard_stats">
            <div className="dashboard_stat">
              <div className="stat_header">
                Available Balance
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.75736 4.75736C5.88258 3.63214 7.4087 3 9 3C10.5913 3 12.1174 3.63214 13.2426 4.75736C14.3679 5.88258 15 7.4087 15 9C15 9.78793 14.8448 10.5681 14.5433 11.2961C14.2417 12.0241 13.7998 12.6855 13.2426 13.2426C12.6855 13.7998 12.0241 14.2417 11.2961 14.5433C10.5681 14.8448 9.78793 15 9 15C8.21207 15 7.43185 14.8448 6.7039 14.5433C5.97595 14.2417 5.31451 13.7998 4.75736 13.2426C4.20021 12.6855 3.75825 12.0241 3.45672 11.2961C3.15519 10.5681 3 9.78793 3 9C3 7.4087 3.63214 5.88258 4.75736 4.75736ZM8.14353 10.5672C8.09203 10.7733 8.10053 10.9902 8.16826 11.1915C8.23604 11.393 8.36018 11.5707 8.52595 11.7038C8.69173 11.8368 8.89217 11.9195 9.10352 11.942C9.31487 11.9645 9.52825 11.926 9.71834 11.8309L9.74836 11.8156C10.0761 11.6477 10.2057 11.246 10.0378 10.9183C9.93216 10.712 9.73384 10.5843 9.51965 10.5597L9.85659 9.21007C9.90786 9.00399 9.89913 8.78701 9.83119 8.58582C9.76325 8.38462 9.63908 8.20711 9.47338 8.0743C9.30768 7.94149 9.10739 7.85894 8.89623 7.83644C8.68636 7.81407 8.47449 7.85194 8.2854 7.94558L8.26328 7.95637C7.93236 8.1178 7.79495 8.51692 7.95637 8.84783C8.06002 9.06032 8.26168 9.19302 8.48035 9.21805L8.14353 10.5672ZM8.33333 6.77778C8.33333 6.40959 8.63181 6.11111 9 6.11111H9.00474C9.37293 6.11111 9.67141 6.40959 9.67141 6.77778V6.78252C9.67141 7.15071 9.37293 7.44919 9.00474 7.44919H9C8.63181 7.44919 8.33333 7.15071 8.33333 6.78252V6.77778Z"
                    fill="#99999C"
                  />
                </svg>
              </div>
              <div className="stat_value">NGN 1,000,000</div>
              <div className="percentage">
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.99897 5.13344L13.3122 9.44663M8.99897 5.13344L4.685 9.44741M8.99897 5.13344L8.99822 13.8666"
                    stroke="#00C46C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                20% Past Day
              </div>
            </div>
            <div className="dashboard_stat">
              <div className="stat_header">
                Total Transactions
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.75736 4.75736C5.88258 3.63214 7.4087 3 9 3C10.5913 3 12.1174 3.63214 13.2426 4.75736C14.3679 5.88258 15 7.4087 15 9C15 9.78793 14.8448 10.5681 14.5433 11.2961C14.2417 12.0241 13.7998 12.6855 13.2426 13.2426C12.6855 13.7998 12.0241 14.2417 11.2961 14.5433C10.5681 14.8448 9.78793 15 9 15C8.21207 15 7.43185 14.8448 6.7039 14.5433C5.97595 14.2417 5.31451 13.7998 4.75736 13.2426C4.20021 12.6855 3.75825 12.0241 3.45672 11.2961C3.15519 10.5681 3 9.78793 3 9C3 7.4087 3.63214 5.88258 4.75736 4.75736ZM8.14353 10.5672C8.09203 10.7733 8.10053 10.9902 8.16826 11.1915C8.23604 11.393 8.36018 11.5707 8.52595 11.7038C8.69173 11.8368 8.89217 11.9195 9.10352 11.942C9.31487 11.9645 9.52825 11.926 9.71834 11.8309L9.74836 11.8156C10.0761 11.6477 10.2057 11.246 10.0378 10.9183C9.93216 10.712 9.73384 10.5843 9.51965 10.5597L9.85659 9.21007C9.90786 9.00399 9.89913 8.78701 9.83119 8.58582C9.76325 8.38462 9.63908 8.20711 9.47338 8.0743C9.30768 7.94149 9.10739 7.85894 8.89623 7.83644C8.68636 7.81407 8.47449 7.85194 8.2854 7.94558L8.26328 7.95637C7.93236 8.1178 7.79495 8.51692 7.95637 8.84783C8.06002 9.06032 8.26168 9.19302 8.48035 9.21805L8.14353 10.5672ZM8.33333 6.77778C8.33333 6.40959 8.63181 6.11111 9 6.11111H9.00474C9.37293 6.11111 9.67141 6.40959 9.67141 6.77778V6.78252C9.67141 7.15071 9.37293 7.44919 9.00474 7.44919H9C8.63181 7.44919 8.33333 7.15071 8.33333 6.78252V6.77778Z"
                    fill="#99999C"
                  />
                </svg>
              </div>
              <div className="stat_value">345</div>
              <div className="percentage">
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.99897 5.13344L13.3122 9.44663M8.99897 5.13344L4.685 9.44741M8.99897 5.13344L8.99822 13.8666"
                    stroke="#00C46C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                20% Past Day
              </div>
            </div>
            <div className="dashboard_stat">
              <div className="stat_header">
                Total Settlements
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.75736 4.75736C5.88258 3.63214 7.4087 3 9 3C10.5913 3 12.1174 3.63214 13.2426 4.75736C14.3679 5.88258 15 7.4087 15 9C15 9.78793 14.8448 10.5681 14.5433 11.2961C14.2417 12.0241 13.7998 12.6855 13.2426 13.2426C12.6855 13.7998 12.0241 14.2417 11.2961 14.5433C10.5681 14.8448 9.78793 15 9 15C8.21207 15 7.43185 14.8448 6.7039 14.5433C5.97595 14.2417 5.31451 13.7998 4.75736 13.2426C4.20021 12.6855 3.75825 12.0241 3.45672 11.2961C3.15519 10.5681 3 9.78793 3 9C3 7.4087 3.63214 5.88258 4.75736 4.75736ZM8.14353 10.5672C8.09203 10.7733 8.10053 10.9902 8.16826 11.1915C8.23604 11.393 8.36018 11.5707 8.52595 11.7038C8.69173 11.8368 8.89217 11.9195 9.10352 11.942C9.31487 11.9645 9.52825 11.926 9.71834 11.8309L9.74836 11.8156C10.0761 11.6477 10.2057 11.246 10.0378 10.9183C9.93216 10.712 9.73384 10.5843 9.51965 10.5597L9.85659 9.21007C9.90786 9.00399 9.89913 8.78701 9.83119 8.58582C9.76325 8.38462 9.63908 8.20711 9.47338 8.0743C9.30768 7.94149 9.10739 7.85894 8.89623 7.83644C8.68636 7.81407 8.47449 7.85194 8.2854 7.94558L8.26328 7.95637C7.93236 8.1178 7.79495 8.51692 7.95637 8.84783C8.06002 9.06032 8.26168 9.19302 8.48035 9.21805L8.14353 10.5672ZM8.33333 6.77778C8.33333 6.40959 8.63181 6.11111 9 6.11111H9.00474C9.37293 6.11111 9.67141 6.40959 9.67141 6.77778V6.78252C9.67141 7.15071 9.37293 7.44919 9.00474 7.44919H9C8.63181 7.44919 8.33333 7.15071 8.33333 6.78252V6.77778Z"
                    fill="#99999C"
                  />
                </svg>
              </div>
              <div className="stat_value">NGN 49,000,000</div>
              <div className="percentage loss">
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.33234 13.8666L13.6455 9.5534M9.33234 13.8666L5.01837 9.55262M9.33234 13.8666L9.3316 5.13345"
                    stroke="#FF4E4E"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                20% Past Day
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
