import { useMemo } from "react";

const WildlifeProtectionContainer = ({
  imageDimensions,
  organizationDescription,
  wildlifeHistoryDescriptio,
  propTop,
  propWidth,
  propHeight,
}) => {
  const groupDiv2Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const logo1IconStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const groupDiv3Style = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div
      className="absolute top-[10rem] left-[0rem] w-[33.75rem] h-[8.13rem] text-left text-[1.13rem] text-white font-times-new-roman"
      style={groupDiv2Style}
    >
      <div className="absolute top-[0rem] left-[0rem] rounded-xl bg-gainsboro [backdrop-filter:blur(10px)] w-[33.75rem] h-[8.13rem]" />
      <img
        className="absolute top-[1.25rem] left-[1.25rem] w-[5.63rem] h-[5.63rem] object-cover"
        alt=""
        src={imageDimensions}
        style={logo1IconStyle}
      />
      <div
        className="absolute top-[1.31rem] left-[calc(50%_-_127px)] w-[23.75rem] h-[4.31rem]"
        style={groupDiv3Style}
      >
        <b className="absolute top-[0rem] left-[calc(50%_-_190px)] tracking-[0.03em] leading-[1.44rem] inline-block w-[23.75rem]">
          {organizationDescription}
        </b>
        <div className="absolute top-[2.06rem] left-[calc(50%_-_190px)] text-[0.88rem] leading-[1.13rem] text-justify inline-block w-[23.75rem]">
          {wildlifeHistoryDescriptio}
        </div>
      </div>
    </div>
  );
};

export default WildlifeProtectionContainer;
