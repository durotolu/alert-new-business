import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import Logo from "../icons/logo";
import "../styles/Sidebar.css";
import BusinessCard from "./BusinessCard";

const sidebarActionsTop = [
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.25 5H6.75C5.7835 5 5 5.7835 5 6.75V8.5H9.375H19V6.75C19 5.7835 18.2165 5 17.25 5Z"
          fill="#5540EB"
        />
        <path
          d="M5 17.25C5 18.2165 5.7835 19 6.75 19H8.5V9.375H5V17.25Z"
          fill="#5540EB"
        />
        <path
          d="M17.25 19C18.2165 19 19 18.2165 19 17.25V9.375H9.375V19H17.25Z"
          fill="#CDCBFF"
        />
      </svg>
    ),
    text: "Dashboard",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.9227 15.9061L13.1881 15.8967C13.5952 15.895 13.8164 15.4049 13.5556 15.0823L9.43967 9.99029C9.18186 9.67133 8.70634 9.67331 8.45103 9.99441L4.3751 15.1206C4.11689 15.4453 4.34192 15.9336 4.74903 15.9319L7.01441 15.9224C7.01747 16.7041 7.02303 17.8042 7.03973 19.0384C7.0432 19.2944 7.25192 19.5 7.50797 19.5H10.4566C10.714 19.5 10.9234 19.2923 10.9247 19.0348C10.9313 17.7973 10.9257 16.6903 10.9227 15.9061Z"
          fill="#E2E3E5"
        />
        <path
          d="M13.0757 8.11469L10.8104 8.12413C10.4033 8.12583 10.1821 8.61592 10.4428 8.9385L14.5587 14.0305C14.8166 14.3495 15.2921 14.3475 15.5474 14.0264L19.6233 8.90023C19.8815 8.57549 19.6565 8.08725 19.2494 8.08895L16.984 8.0984C16.9819 7.56531 16.9787 6.03922 16.9715 4.96398C16.9698 4.70682 16.7607 4.5 16.5035 4.5H13.539C13.2804 4.5 13.0707 4.70903 13.0706 4.96761C13.0704 6.04804 13.0736 7.57903 13.0757 8.11469Z"
          fill="#99999C"
        />
      </svg>
    ),
    text: "Transactions",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.09998 15.7L9.89998 19.5V16.7C9.89998 16.1477 9.45226 15.7 8.89998 15.7H5.09998Z"
          fill="#E2E3E5"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.9 18.5V5.5C18.9 4.94772 18.4523 4.5 17.9 4.5H6.09998C5.54769 4.5 5.09998 4.94772 5.09998 5.5V15.7H8.89998C9.45226 15.7 9.89998 16.1477 9.89998 16.7V19.5H17.9C18.4523 19.5 18.9 19.0523 18.9 18.5ZM8.4989 11.4996C8.4989 9.48377 10.1331 7.84961 12.1489 7.84961C13.3077 7.84961 14.3399 8.38937 15.0084 9.2311L15.1386 8.87584C15.2622 8.5388 15.6356 8.36576 15.9727 8.48934C16.3097 8.61293 16.4828 8.98634 16.3592 9.32338L15.6992 11.1234C15.5911 11.4181 15.2878 11.5935 14.9784 11.5402L13.2385 11.2402C12.8847 11.1792 12.6474 10.8429 12.7084 10.4892C12.7693 10.1354 13.1056 9.89807 13.4593 9.95906L14.0007 10.0524C13.5704 9.5028 12.9006 9.14961 12.1489 9.14961C10.851 9.14961 9.7989 10.2017 9.7989 11.4996C9.7989 12.7975 10.851 13.8496 12.1489 13.8496C12.7293 13.8496 13.259 13.6401 13.6691 13.2917C13.9427 13.0593 14.3529 13.0926 14.5853 13.3662C14.8178 13.6398 14.7844 14.05 14.5108 14.2824C13.8745 14.823 13.049 15.1496 12.1489 15.1496C10.133 15.1496 8.4989 13.5154 8.4989 11.4996Z"
          fill="#99999C"
        />
      </svg>
    ),
    text: "Refunds",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.5 15.4223C19.0523 15.4223 19.5 14.9746 19.5 14.4223V5.5C19.5 4.94772 19.0523 4.5 18.5 4.5H10.4515C9.89917 4.5 9.45146 4.94772 9.45146 5.5V8.14078V12.6553H11.9466C12.4989 12.6553 12.9466 13.1031 12.9466 13.6553V15.4223H14.5485H18.5ZM14.5397 12.6553C14.8614 12.6553 15.1222 12.3945 15.1222 12.0728V8.45184L16.0378 9.29697C16.2742 9.51519 16.6427 9.50045 16.8609 9.26405C17.0792 9.02765 17.0644 8.65911 16.828 8.44089L14.9348 6.69332C14.7117 6.48734 14.3677 6.48734 14.1446 6.69332L12.2514 8.44089C12.015 8.65911 12.0002 9.02765 12.2184 9.26405C12.4367 9.50045 12.8052 9.51519 13.0416 9.29697L13.9572 8.45184V12.0728C13.9572 12.3945 14.218 12.6553 14.5397 12.6553Z"
          fill="#E2E3E5"
        />
        <path
          d="M12.9466 15.4223L9.45146 12.6553V8.14078H5.5C4.94771 8.14078 4.5 8.58849 4.5 9.14078V16.0994C4.5 16.6861 4.75764 17.2433 5.2047 17.6233L6.85248 19.0239C7.21408 19.3312 7.6732 19.5 8.14778 19.5H13.5485C14.1008 19.5 14.5485 19.0523 14.5485 18.5V15.4223H12.9466Z"
          fill="#99999C"
        />
      </svg>
    ),
    text: "Payments",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_462_597)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.5 10.3285V16.0179C4.5 16.9054 5.21954 17.625 6.10714 17.625H17.8929C18.7804 17.625 19.5 16.9054 19.5 16.0179V10.3285H4.5ZM14.0089 14.4107C14.0089 14.0409 14.3087 13.7411 14.6786 13.7411H16.2857C16.6556 13.7411 16.9554 14.0409 16.9554 14.4107C16.9554 14.7806 16.6556 15.0804 16.2857 15.0804H14.6786C14.3087 15.0804 14.0089 14.7806 14.0089 14.4107Z"
            fill="#99999C"
          />
          <path
            d="M6.10714 6.375C5.21954 6.375 4.5 7.09454 4.5 7.98214V8.98922H19.5V7.98214C19.5 7.09454 18.7804 6.375 17.8929 6.375H6.10714Z"
            fill="#E2E3E5"
          />
        </g>
        <defs>
          <clipPath id="clip0_462_597">
            <rect
              width="15"
              height="15"
              fill="white"
              transform="translate(4.5 4.5)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    text: "Cards",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.2982 9.90172L12.5192 4.68197C12.2161 4.43934 11.7839 4.43934 11.4808 4.68197L4.70183 9.90172C4.30609 10.2185 4.53132 10.8539 5.03932 10.8539H6.20343H7.8596H9.51577H11.1719H12.8281H14.4843H16.1404H17.7966H18.9607C19.4687 10.8539 19.6939 10.2185 19.2982 9.90172Z"
          fill="#99999C"
        />
        <path
          d="M14.4843 16.8238V10.8539H12.8281V16.8238H14.4843Z"
          fill="#E2E3E5"
        />
        <path
          d="M9.51577 10.8539V16.8238H11.1719V10.8539H9.51577Z"
          fill="#E2E3E5"
        />
        <path
          d="M6.20343 10.8539V16.8238H7.8596V10.8539H6.20343Z"
          fill="#E2E3E5"
        />
        <path
          d="M17.7966 16.8238V10.8539H16.1404V16.8238H17.7966Z"
          fill="#E2E3E5"
        />
        <path
          d="M6.20343 16.8238H5.8674C5.41007 16.8238 5.03932 17.1925 5.03932 17.6473V19.0883C5.03932 19.3157 5.22469 19.5 5.45336 19.5H18.5466C18.7753 19.5 18.9607 19.3157 18.9607 19.0883V17.6473C18.9607 17.1925 18.5899 16.8238 18.1326 16.8238H17.7966H16.1404H14.4843H12.8281H11.1719H9.51577H7.8596H6.20343Z"
          fill="#99999C"
        />
      </svg>
    ),
    text: "Accounts",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.09998 15.7L9.89998 19.5V16.7C9.89998 16.1477 9.45226 15.7 8.89998 15.7H5.09998Z"
          fill="#E2E3E5"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.9 18.5V5.5C18.9 4.94772 18.4523 4.5 17.9 4.5H6.09998C5.54769 4.5 5.09998 4.94772 5.09998 5.5V15.7H8.89998C9.45226 15.7 9.89998 16.1477 9.89998 16.7V19.5H17.9C18.4523 19.5 18.9 19.0523 18.9 18.5ZM8.4989 11.4996C8.4989 9.48377 10.1331 7.84961 12.1489 7.84961C13.3077 7.84961 14.3399 8.38937 15.0084 9.2311L15.1386 8.87584C15.2622 8.5388 15.6356 8.36576 15.9727 8.48934C16.3097 8.61293 16.4828 8.98634 16.3592 9.32338L15.6992 11.1234C15.5911 11.4181 15.2878 11.5935 14.9784 11.5402L13.2385 11.2402C12.8847 11.1792 12.6474 10.8429 12.7084 10.4892C12.7693 10.1354 13.1056 9.89807 13.4593 9.95906L14.0007 10.0524C13.5704 9.5028 12.9006 9.14961 12.1489 9.14961C10.851 9.14961 9.7989 10.2017 9.7989 11.4996C9.7989 12.7975 10.851 13.8496 12.1489 13.8496C12.7293 13.8496 13.259 13.6401 13.6691 13.2917C13.9427 13.0593 14.3529 13.0926 14.5853 13.3662C14.8178 13.6398 14.7844 14.05 14.5108 14.2824C13.8745 14.823 13.049 15.1496 12.1489 15.1496C10.133 15.1496 8.4989 13.5154 8.4989 11.4996Z"
          fill="#99999C"
        />
      </svg>
    ),
    text: "Refunds",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4.5 6.75C4.5 5.64543 5.39543 4.75 6.5 4.75H17.5C18.6046 4.75 19.5 5.64543 19.5 6.75V17.25C19.5 18.3546 18.6046 19.25 17.5 19.25H6.5C5.39543 19.25 4.5 18.3546 4.5 17.25V6.75ZM17.1563 6.5625H6.84375C6.41228 6.5625 6.0625 6.90062 6.0625 7.31771V12.151C6.0625 12.5681 6.41228 12.9062 6.84375 12.9062H9.15625C9.43239 12.9062 9.65625 13.1226 9.65625 13.3896V14.5677C9.65625 14.9848 10.006 15.3229 10.4375 15.3229H13.5625C13.994 15.3229 14.3438 14.9848 14.3438 14.5677V13.3896C14.3438 13.1226 14.5676 12.9062 14.8438 12.9062H17.1563C17.5877 12.9062 17.9375 12.5681 17.9375 12.151V7.31771C17.9375 6.90062 17.5877 6.5625 17.1563 6.5625Z"
          fill="#99999C"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.84375 6.5625H17.1563C17.5877 6.5625 17.9375 6.90062 17.9375 7.31771V12.151C17.9375 12.5681 17.5877 12.9062 17.1563 12.9062H14.8438C14.5676 12.9062 14.3438 13.1226 14.3438 13.3896V14.5677C14.3438 14.9848 13.994 15.3229 13.5625 15.3229H10.4375C10.006 15.3229 9.65625 14.9848 9.65625 14.5677V13.3896C9.65625 13.1226 9.43239 12.9062 9.15625 12.9062H6.84375C6.41228 12.9062 6.0625 12.5681 6.0625 12.151V7.31771C6.0625 6.90062 6.41228 6.5625 6.84375 6.5625ZM15.5 8.375H8.5C8.36193 8.375 8.25 8.4832 8.25 8.61667V9.34167C8.25 9.47514 8.36193 9.58333 8.5 9.58333H15.5C15.6381 9.58333 15.75 9.47514 15.75 9.34167V8.61667C15.75 8.4832 15.6381 8.375 15.5 8.375Z"
          fill="#E2E3E5"
        />
      </svg>
    ),
    text: "Manage Bills",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.80655 9.13745V13.0595C7.80655 13.1341 7.84816 13.2026 7.91443 13.2369L10.2131 14.4289C10.3462 14.4978 10.505 14.4013 10.505 14.2514V10.3826L15.9996 7.48409L13.3035 6.08499L7.80655 9.13745Z"
          fill="#F0F0F0"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4.5 8.40692V15.6297C4.5 15.7751 4.57889 15.909 4.70603 15.9794L11.5219 19.7653C11.7602 19.8973 12.0493 19.899 12.289 19.7696L19.29 15.9927C19.4194 15.923 19.5 15.7879 19.5 15.6409V8.31784C19.5 8.17332 19.422 8.04005 19.296 7.96928L12.4016 4.18595C12.2816 4.11853 12.1353 4.11762 12.0144 4.18355L4.70834 8.05596C4.57991 8.12601 4.5 8.26062 4.5 8.40692ZM7.80655 13.0595V9.13745L13.3035 6.08499L15.9996 7.48409L10.505 10.3826V14.2514C10.505 14.4013 10.3462 14.4978 10.2131 14.4289L7.91443 13.2369C7.84816 13.2026 7.80655 13.1341 7.80655 13.0595Z"
          fill="#99999C"
        />
      </svg>
    ),
    text: "Ecommerce",
  },
];

const sidebarActionsBottom = [
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.84731 7.69442C5.2737 8.03897 4.9248 8.64593 4.9248 9.29928V14.5473C4.9248 15.1842 5.25648 15.7782 5.80698 16.1272L10.3957 19.0366C11.3701 19.6545 12.6303 19.6545 13.6047 19.0366L18.1934 16.1272C18.7439 15.7782 19.0756 15.1842 19.0756 14.5473V9.29928C19.0756 8.64593 18.7267 8.03897 18.153 7.69442L13.5442 4.92601C12.5985 4.358 11.4018 4.358 10.4562 4.92601L5.84731 7.69442ZM12.0002 15.3318C13.8866 15.3318 15.4159 13.8519 15.4159 12.0263C15.4159 10.2007 13.8866 8.72076 12.0002 8.72076C10.1137 8.72076 8.58448 10.2007 8.58448 12.0263C8.58448 13.8519 10.1137 15.3318 12.0002 15.3318Z"
          fill="#99999C"
        />
      </svg>
    ),
    text: "Settings",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.4939 11.2206C17.5294 10.2561 16.2213 9.71427 14.8573 9.71427C14.0835 9.71376 13.3196 9.88788 12.6224 10.2237C11.9252 10.5594 11.3128 11.0482 10.8307 11.6536C10.3487 12.2589 10.0095 12.9652 9.83839 13.7199C9.66728 14.4746 9.66866 15.2581 9.84247 16.0122C10.0163 16.7663 10.358 17.4714 10.8422 18.075C11.3263 18.6786 11.9405 19.1652 12.6389 19.4985C13.3372 19.8318 14.1018 20.0032 14.8756 20C15.6495 19.9967 16.4126 19.8188 17.1081 19.4796L19.4075 19.8934C19.6691 19.9404 19.8824 19.6849 19.7894 19.4359L19.141 17.7008C19.7042 16.8596 20.0034 15.8695 20.0002 14.8571C20.0002 13.4932 19.4584 12.185 18.4939 11.2206Z"
          fill="#E2E3E5"
        />
        <path
          d="M10.3031 3.99999C8.63142 3.99999 7.02821 4.66406 5.84615 5.84611C4.6641 7.02817 4.00003 8.63137 4.00003 10.303C3.99609 11.5437 4.36275 12.7573 5.05301 13.7883L4.21082 16.042C4.11779 16.291 4.33113 16.5465 4.5927 16.4995L7.54457 15.9684C7.83774 16.1113 8.1407 16.231 8.45062 16.3265C8.34272 15.854 8.28573 15.3622 8.28573 14.8571C8.28573 11.2278 11.2279 8.2857 14.8572 8.2857C15.3644 8.2857 15.8582 8.34316 16.3323 8.45194C16.1011 7.69916 15.7304 6.995 15.2381 6.37676C14.6473 5.63484 13.8967 5.0358 13.0423 4.62428C12.1878 4.21276 11.2515 3.99936 10.3031 3.99999Z"
          fill="#929292"
        />
      </svg>
    ),
    text: "Contact us",
  },
];

const Sidebar = () => {
  const businesses = useSelector(
    (state: RootState) => state.business.businesses
  );

  return (
    <div className="sidebar">
      <BusinessCard />
      <div className="sidebar_actions">
        <nav>
          {sidebarActionsTop.map(({ icon, text }) => (
            <a className="sidebar_actions_action">
              {icon}
              <div>{text}</div>
            </a>
          ))}
        </nav>
        <nav>
          {sidebarActionsBottom.map(({ icon, text }) => (
            <a className="sidebar_actions_action">
              {icon}
              <div>{text}</div>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
