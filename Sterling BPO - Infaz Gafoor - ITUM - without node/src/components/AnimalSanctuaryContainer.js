import { useMemo } from "react";

const AnimalSanctuaryContainer = ({
  imageDescription,
  serviceDescription,
  sanctuaryImageUrl,
  propLeft,
  propWidth,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className="absolute top-[23.69rem] left-[3.13rem] w-[16.94rem] h-[20.56rem] text-left text-[1.13rem] text-white font-times-new-roman"
      style={groupDivStyle}
    >
      <div className="absolute top-[0rem] left-[0rem] flex flex-row items-start justify-start p-[0.63rem]">
        <div className="w-[15.69rem] relative rounded-11xl bg-gray-400 [backdrop-filter:blur(5px)] h-[19.31rem] hover:cursor-grab hover:animate-[5s_ease_0s_infinite_normal_none_slide-in-top] hover:opacity-[1]" />
      </div>
      <div
        className="absolute top-[0rem] left-[0rem] flex flex-col items-start justify-start p-[0.63rem]"
        style={frameDivStyle}
      >
        <img
          className="w-[15.69rem] relative rounded-t-11xl rounded-b-none h-[8.75rem] object-cover"
          alt=""
          src={imageDescription}
        />
      </div>
      <b className="absolute top-[10rem] left-[calc(50%_-_116.5px)] tracking-[0.03em] leading-[1.44rem] inline-block w-[14.81rem]">
        {serviceDescription}
      </b>
      <div className="absolute top-[13.5rem] left-[calc(50%_-_116.5px)] text-[0.88rem] leading-[1.13rem] text-justify inline-block w-[14.5rem]">
        {sanctuaryImageUrl}
      </div>
    </div>
  );
};

export default AnimalSanctuaryContainer;
