import imgOnboardingIPhone15MockupSmartphoneDeviceMockup01 from "figma:asset/acbaa21735a25ab2175e5fc7a630674ee59c3b4e.png";
import imgDarkDashboardIPhone15MockupSmartphoneDeviceMockup01 from "figma:asset/f1b4d93eef854493a74965938f4e93230c8445cc.png";
import imgDashboardIPhone15MockupSmartphoneDeviceMockup01 from "figma:asset/5ebd3fb14fa33b38282b8422f19daf743c5290b8.png";

export default function BankApp() {
  return (
    <div className="bg-[#000a1e] relative size-full" data-name="Bank app 2">
      <div className="absolute h-[564px] left-[41px] top-[155px] w-[482px]" data-name="onboarding iPhone 15 Mockup smartphone_device_mockup_01">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[100.03%] left-[-17.01%] max-w-none top-0 w-[117.05%]" src={imgOnboardingIPhone15MockupSmartphoneDeviceMockup01} />
        </div>
      </div>
      <div className="absolute right-[18.83px] size-[564.172px] top-[137px]" data-name="dark dashboard iPhone 15 Mockup smartphone_device_mockup_01">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgDarkDashboardIPhone15MockupSmartphoneDeviceMockup01} />
      </div>
      <div className="absolute h-[717px] left-[calc(50%-17px)] top-[calc(50%+20px)] translate-x-[-50%] translate-y-[-50%] w-[482px]" data-name="dashboard iPhone 15 Mockup smartphone_device_mockup_01">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-25.52%] max-w-none top-0 w-[148.76%]" src={imgDashboardIPhone15MockupSmartphoneDeviceMockup01} />
        </div>
      </div>
      <p className="absolute font-['Montserrat:Bold',_sans-serif] font-bold leading-[71.717px] left-[calc(50%+372.5px)] opacity-10 text-[86.695px] text-center text-nowrap text-white top-[60.34px] translate-x-[-50%] whitespace-pre">BANK</p>
      <p className="absolute font-['Montserrat:Bold',_sans-serif] font-bold leading-[43.245px] left-[calc(50%+447.5px)] opacity-10 text-[52.277px] text-center text-nowrap text-white top-[437px] translate-x-[-50%] whitespace-pre">APP</p>
    </div>
  );
}