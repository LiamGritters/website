import React from 'react';

const IconLoader = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <title>Loader Logo</title>
    <g>
      <g id="outerHex" transform="translate(11.000000, 5.000000)">
        <polygon
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          points="39 0 0 22 0 67 39 90 78 68 78 23"
          fill="currentColor"
        />
      </g>
      <polygon points="8 5 8 72 92 95 92 28" fill="#020c1b" />
      <path
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M 11, 5
                  L 11, 27
                  L 11, 72
                  L 89, 95
                  L 89, 73
                  L 89, 28 z"
      />
      <g id="LG" transform="translate(11.000000, 5.000000)">
        <text x="14" y="60" fill="currentColor" fontSize="48">
          LG
        </text>
      </g>
    </g>
  </svg>
);

export default IconLoader;
