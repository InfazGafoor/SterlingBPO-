import { useCallback } from "react";
import WildCardFormContainer4 from "../components/WildCardFormContainer4";
import WildCardFormContainer3 from "../components/WildCardFormContainer3";
import WildCardFormContainer2 from "../components/WildCardFormContainer2";
import WildPhotosContainer from "../components/WildPhotosContainer";
import WildCardFormContainer1 from "../components/WildCardFormContainer1";
import WildSocietyContainer from "../components/WildSocietyContainer";
import WildFormContainer from "../components/WildFormContainer";
import WildCardFormContainer from "../components/WildCardFormContainer";

const WildLIfePhotography = () => {
  const onFrameContainer1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='charityText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-col items-end justify-start text-right text-[1.38rem] text-darkgray-100 font-times-new-roman">
      <WildCardFormContainer4 />
      <WildCardFormContainer3 />
      <WildCardFormContainer2 />
      <WildPhotosContainer />
      <WildCardFormContainer1 />
      <WildSocietyContainer />
      <WildFormContainer />
      <WildCardFormContainer />
      <div className="w-[4.38rem] absolute my-0 mx-[!important] top-[3rem] left-[66.25rem] h-[1.56rem] z-[8]">
        <b className="absolute top-[0rem] left-[0rem] tracking-[0.02em] hidden">
          Society
        </b>
      </div>
      <div
        className="my-0 mx-[!important] absolute top-[3rem] left-[60.31rem] flex flex-row items-end justify-start cursor-pointer z-[9]"
        onClick={onFrameContainer1Click}
      >
        <b
          className="relative tracking-[0.02em] hover:text-fuchsia-200"
          data-scroll-to="charityText"
        >
          Charity
        </b>
      </div>
      <div className="my-0 mx-[!important] absolute top-[3rem] left-[54.56rem] flex flex-row items-end justify-start z-[10]">
        <b className="h-[1.56rem] relative tracking-[0.02em] inline-block hover:text-fuchsia-200">
          Gallery
        </b>
      </div>
      <div className="my-0 mx-[!important] absolute top-[3rem] left-[49.63rem] flex flex-row items-end justify-start z-[11]">
        <b className="relative tracking-[0.02em] hover:text-fuchsia-100">
          About
        </b>
      </div>
      <a
        className="[text-decoration:none] my-0 mx-[!important] absolute top-[3rem] left-[44.88rem] flex flex-row items-end justify-start z-[12] text-[inherit]"
        id="homeLink"
      >
        <b className="relative tracking-[0.02em] hover:text-fuchsia-200">
          Home
        </b>
      </a>
    </div>
  );
};

export default WildLIfePhotography;
