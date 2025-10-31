import svgPaths from "./svg-el4itadpi5";
import imgImage43 from "figma:asset/792b078b354fd8131424c5b6e2d43d52fb0bc467.png";
import imgLaptopRealistic2 from "figma:asset/95c17aaddab2755bf05f5d48bd73c5f3d74d2804.png";
import imgImage44 from "figma:asset/7c23523bf9e9e8f8a2994da7ac8e0f808bd72c88.png";

function UpArrow() {
  return (
    <div className="absolute right-[-102.3px] size-[1026.3px] top-[calc(50%+0.149px)] translate-y-[-50%]" data-name="up-arrow_608330">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1027 1027">
        <g clipPath="url(#clip0_6_236)" id="up-arrow_608330" opacity="0.1">
          <path d={svgPaths.p158d9e00} fill="url(#paint0_radial_6_236)" id="Subtract" />
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="translate(513.15 513.149) rotate(90) scale(513.149 507.938)" gradientUnits="userSpaceOnUse" id="paint0_radial_6_236" r="1">
            <stop stopColor="#999999" />
            <stop offset="1" stopColor="white" stopOpacity="0.2" />
          </radialGradient>
          <clipPath id="clip0_6_236">
            <rect fill="white" height="1026.3" width="1026.3" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[417.643px] left-[169.51px] overflow-clip top-[93.78px] w-[668.229px]">
      <div className="absolute h-[417px] left-[-0.51px] top-[0.21px] w-[669px]" data-name="image 43">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage43} />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[627.432px] left-[calc(50%-149.872px)] overflow-clip top-[calc(50%+66.716px)] translate-x-[-50%] translate-y-[-50%] w-[1007.26px]">
      <div className="absolute left-0 size-[1007.26px] top-[-189.91px]" data-name="laptop_realistic 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLaptopRealistic2} />
      </div>
      <Frame />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute h-[331.039px] left-[36.7px] overflow-clip top-[40.85px] w-[529.662px]">
      <div className="absolute h-[331px] left-[-2.71px] top-[0.15px] w-[536px]" data-name="image 44">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage44} />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[390.627px] left-[calc(50%+262.037px)] overflow-clip top-[calc(50%+105.314px)] translate-x-[-50%] translate-y-[-50%] w-[603.073px]">
      <div className="absolute left-[-97.66px] size-[798.387px] top-[-185.03px]" data-name="laptop_realistic 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLaptopRealistic2} />
      </div>
      <Frame3 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute h-[157.583px] left-[82px] top-[134.52px] w-[403px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 403 158">
        <g id="Frame 1000005849">
          <g clipPath="url(#clip0_6_211)" id="up-arrow_608330">
            <path d={svgPaths.p5ab6e00} fill="var(--fill-0, white)" id="Subtract" />
          </g>
          <rect fill="var(--fill-0, white)" height="125.113" id="Rectangle 5444" rx="5.16667" width="15.2165" x="164" y="25.4551" />
          <path d={svgPaths.p2e484f0} fill="var(--fill-0, white)" id="Subtract_2" />
          <g id="Group 1000005614">
            <rect fill="var(--fill-0, white)" height="79.4638" id="Rectangle 5445" rx="5.16667" width="15.2165" x="194.243" y="71.1035" />
            <circle cx="201.852" cy="55.0431" fill="var(--fill-0, white)" id="Ellipse 811" r="9.29895" />
          </g>
          <path d={svgPaths.p19f76300} fill="var(--fill-0, white)" id="Union" />
        </g>
        <defs>
          <clipPath id="clip0_6_211">
            <rect fill="white" height="145.554" transform="translate(5.16699 5.16602)" width="145.554" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function Slide() {
  return (
    <div className="bg-gradient-to-b from-[#000108] relative size-full to-[#402065]" data-name="Slide 16:9 - 5">
      <UpArrow />
      <Frame1 />
      <Frame2 />
      <p className="absolute font-['Poppins:Regular',_sans-serif] leading-[normal] left-[82px] not-italic text-[38.554px] text-nowrap text-white top-[920px] whitespace-pre">Your AI partner for smarter business management.</p>
      <Frame4 />
    </div>
  );
}