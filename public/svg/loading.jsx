import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={204}
    height={204}
    preserveAspectRatio="xMidYMid"
    style={{
      margin: "auto",
      background: "0 0",
      display: "block",
      shapeRendering: "auto",
    }}
    viewBox="0 0 100 100"
    {...props}
  >
    <circle
      cx={50}
      cy={50}
      r={44}
      fill="none"
      stroke="#1d0e0b"
      strokeDasharray="69.11503837897544 69.11503837897544"
      strokeLinecap="round"
      strokeWidth={7}
    >
      <animateTransform
        attributeName="transform"
        dur="0.78125s"
        keyTimes="0;1"
        repeatCount="indefinite"
        type="rotate"
        values="0 50 50;360 50 50"
      />
    </circle>
  </svg>
)
export default SvgComponent
