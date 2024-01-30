import { useMemo } from "react";

const ContainerScrollMoreForm = ({ scroll1, propTop, propMargin }) => {
  const scrollStyle = useMemo(() => {
    return {
      top: propTop,
      margin: propMargin,
    };
  }, [propTop, propMargin]);

  return (
    !scroll1 && (
      <div
        className="w-[3.75rem] absolute my-0 mx-[!important] top-[44.25rem] left-[38rem] h-[7.5rem] hidden z-[9] text-left text-[1.25rem] text-darkgray-100 font-league-spartan"
        style={scrollStyle}
      >
        <div className="absolute top-[0rem] left-[0rem] rounded-31xl bg-gray-800 [backdrop-filter:blur(5px)] w-[3.75rem] h-[7.5rem]" />
        <div className="absolute top-[1.88rem] left-[0.56rem] font-medium flex items-end w-[2.69rem]">
          More
        </div>
        <img
          className="absolute top-[4rem] left-[1.13rem] w-[1.53rem] h-[1.75rem] overflow-hidden"
          alt=""
          src="/fa6solidanglesdown.svg"
        />
      </div>
    )
  );
};

export default ContainerScrollMoreForm;
