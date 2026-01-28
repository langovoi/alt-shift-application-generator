interface LoadingIconProps {
  className?: string;
}

export function LoadingIcon({ className }: LoadingIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 320 320"
      className={className}
    >
      <g filter="url(#a)">
        <circle cx="160" cy="160" r="80" fill="#fff" />
      </g>
      <g filter="url(#b)">
        <circle cx="160" cy="160" r="40" fill="url(#c)" />
        <circle cx="160" cy="160" r="40" fill="url(#d)" />
      </g>
      <defs>
        <radialGradient
          id="c"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(45 -84.85281374 204.85281374)scale(113.137)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset="1" stopColor="#d0d5dd" />
        </radialGradient>
        <radialGradient
          id="d"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(111.93 43.25391027 129.32472843)scale(51.8788)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset="1" stopColor="#fff" stopOpacity=".16" />
        </radialGradient>
        <filter
          id="a"
          width="320"
          height="320"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            result="effect1_foregroundBlur_4_10791"
            stdDeviation="40"
          />
        </filter>
        <filter
          id="b"
          width="80"
          height="82"
          x="120"
          y="118"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="-2" />
          <feGaussianBlur stdDeviation="16" />
          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.08 0" />
          <feBlend in2="shape" result="effect1_innerShadow_4_10791" />
        </filter>
      </defs>
    </svg>
  );
}
