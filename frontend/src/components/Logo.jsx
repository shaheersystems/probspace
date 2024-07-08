import React from "react";

const Logo = () => {
  return (
    <a href="/">
      <h2 className="flex items-center gap-2 pb-1 text-2xl dark:text-white font-display">
        <span className="mt-2 text-blue-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M11 21v-6.6l-4.65 4.675l-1.425-1.425L9.6 13H3v-2h6.6L4.925 6.35L6.35 4.925L11 9.6V3h2v6.6l4.65-4.675l1.425 1.425L14.4 11H21v2h-6.6l4.675 4.65l-1.425 1.425L13 14.4V21z"
            />
          </svg>
        </span>
        <span className="font-semibold">probspace.</span>
      </h2>
    </a>
  );
};

export default Logo;
