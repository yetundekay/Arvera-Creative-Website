import svgPaths from "./svg-3zru48toqe";

function Group1() {
  return (
    <div className="absolute contents leading-[normal] left-[calc(50%+80.5px)] text-black text-center text-nowrap top-0 translate-x-[-50%] uppercase whitespace-pre">
      <p className="absolute font-['Poppins:Regular',_sans-serif] left-[calc(50%+80.5px)] not-italic text-[96.792px] top-0 translate-x-[-50%]">ARVERA</p>
      <p className="absolute font-['Montserrat:Regular',_sans-serif] font-normal left-[calc(50%+79.773px)] text-[28.383px] top-[116.44px] tracking-[19.8678px] translate-x-[-50%]">DESIGN</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute bottom-[2.55%] left-0 right-[74.09%] top-[2.64%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 136 144">
        <g id="Group">
          <path d={svgPaths.pc032c00} fill="url(#paint0_linear_7_336)" id="Vector" />
          <path d={svgPaths.p23c31300} fill="url(#paint1_linear_7_336)" id="Vector_2" />
          <path d={svgPaths.p11d7e100} fill="var(--fill-0, #1C1C1C)" id="Vector_3" />
          <path d={svgPaths.p25bd0480} fill="url(#paint2_linear_7_336)" id="Vector_4" />
          <path d={svgPaths.p3f438c80} fill="var(--fill-0, #1C1C1C)" id="Vector_5" />
          <path d={svgPaths.pb6a9b00} fill="url(#paint3_linear_7_336)" id="Vector_6" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_336" x1="30.0519" x2="65.0543" y1="79.168" y2="88.2832">
            <stop offset="0.293269" stopColor="#C6A664" />
            <stop offset="0.495192" stopColor="#E6D9BC" />
            <stop offset="0.653846" stopColor="#C6A664" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_7_336" x1="40.0001" x2="80.5001" y1="88" y2="100">
            <stop offset="0.293269" stopColor="#C6A664" />
            <stop offset="0.495192" stopColor="#E6D9BC" />
            <stop offset="0.653846" stopColor="#C6A664" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_7_336" x1="14.13" x2="17.4804" y1="124.546" y2="144.498">
            <stop offset="0.264423" stopColor="#074D81" />
            <stop offset="1" stopColor="#001321" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_7_336" x1="55.1748" x2="99.0311" y1="28.561" y2="134.418">
            <stop offset="0.264423" stopColor="#074D81" />
            <stop offset="1" stopColor="#001321" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Layer() {
  return (
    <div className="absolute bottom-[2.55%] contents left-0 right-[74.09%] top-[2.64%]" data-name="Layer 1">
      <Group />
    </div>
  );
}

export default function Group2() {
  return (
    <div className="relative size-full">
      <Group1 />
      <Layer />
    </div>
  );
}