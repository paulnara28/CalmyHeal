import React from "react";

const Icon = ({ name, className }) => {
  const renderIlustrasi = () => {
    switch (name) {
      case "menu":
        return (
          <svg
            className="w-full h-full"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 7H21"
              stroke="#F9FAF9"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M3 12H21"
              stroke="#F9FAF9"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M3 17H21"
              stroke="#F9FAF9"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        );
      case "close":
        return (
          <svg
            className="w-full h-full"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.728 12.7279L21.2133 21.2132"
              stroke="#F9FAF9"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.7281 21.2132L21.2134 12.7279"
              stroke="#272E38"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        );
      case "right":
        return (
          <svg
            className="w-full h-full"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 6L15 12L9 18" stroke="#33363F" stroke-width="2" />
          </svg>
        );
      case "left":
        return (
          <svg
            className="w-full h-full"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15 6L9 12L15 18" stroke="#33363F" stroke-width="2" />
          </svg>
        );
      case "bintang":
        return (
          <svg
            className="w-full h-full"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
              fill="#04364A"
            />
          </svg>
        );
      case "bawah":
        return (
          <svg
            className="w-full h-full"
            viewBox="0 0 18 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 8L0 0H18L9 8Z" fill="#252525" />
          </svg>
        );
      case "atas":
        return (
          <svg
            className="w-full h-full"
            viewBox="0 0 15 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 5L19 13L0.999999 13L10 5Z" fill="#252525" />
          </svg>
        );

      default:
        return null;
    }
  };

  return renderIlustrasi();
};

export default Icon;
