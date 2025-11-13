function Closebutton({setIsFav}) {
  return (
    <svg
      width={30}
      height={30}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={()=>setIsFav(false)}
      className="cursor-pointer"
    >
      <rect width={40} height={40} rx={20} fill="#F7F7F7" />
      <g clipPath="url(#clip0_368_466)">
        <path
          d="M19.6445 19L24.7227 24.0781L24.1895 24.6113L19.1113 19.5332L14.0332 24.6113L13.5 24.0781L18.5781 19L13.5 13.9219L14.0332 13.3887L19.1113 18.4668L24.1895 13.3887L24.7227 13.9219L19.6445 19Z"
          fill="#052841"
        />
      </g>
      <defs>
        <clipPath id="clip0_368_466">
          <rect
            width={13}
            height={13}
            fill="white"
            transform="matrix(1 0 0 -1 13.5 25.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Closebutton;
