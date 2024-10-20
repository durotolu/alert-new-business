import Logo from "../icons/logo";
import "../styles/Sidebar.css";

const DashBoardActions = () => {
  return (
    <div className="dashboard__content__actions">
      <div className="dashboard__content__currencies">
        <button className="dashboard__content__actions__currency_active">
          NGN
        </button>
        <button className="dashboard__content__actions__currency">GBP</button>
        <button className="dashboard__content__actions__currency">USD</button>
        <button className="dashboard__content__actions__currency">CAD</button>
      </div>
      <div className="dashboard__content__actions__buttons">
        <button className="dashboard__content__actions__button add_money">
          Add Money
        </button>
        <button className="dashboard__content__actions__button">
          Send Money
        </button>
        <button className="dashboard__content__actions__button ellipsis">
          <svg
            width="4"
            height="15"
            viewBox="0 0 4 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.30001 1.50001C3.30001 2.21798 2.71798 2.80001 2.00001 2.80001C1.28204 2.80001 0.700012 2.21798 0.700012 1.50001C0.700012 0.782042 1.28204 0.200012 2.00001 0.200012C2.71798 0.200012 3.30001 0.782042 3.30001 1.50001Z"
              fill="#343433"
            />
            <path
              d="M3.30001 7.50001C3.30001 8.21798 2.71798 8.80001 2.00001 8.80001C1.28204 8.80001 0.700012 8.21798 0.700012 7.50001C0.700012 6.78204 1.28204 6.20001 2.00001 6.20001C2.71798 6.20001 3.30001 6.78204 3.30001 7.50001Z"
              fill="#343433"
            />
            <path
              d="M3.30001 13.5C3.30001 14.218 2.71798 14.8 2.00001 14.8C1.28204 14.8 0.700012 14.218 0.700012 13.5C0.700012 12.782 1.28204 12.2 2.00001 12.2C2.71798 12.2 3.30001 12.782 3.30001 13.5Z"
              fill="#343433"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default DashBoardActions;
