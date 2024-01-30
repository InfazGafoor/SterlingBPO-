import { useMemo } from "react";

const AnimalRescueTransportContainer = ({
  programImageUrl,
  programDescription,
  animalTransportImageUrl,
  propLeft,
  propTop,
}) => {
  const groupDiv1Style = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const thisProgramInvolvesStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className="absolute top-[21rem] left-[22.06rem] w-[16.94rem] h-[18.75rem] text-left text-[1.13rem] text-white font-times-new-roman"
      style={groupDiv1Style}
    >
      <div className="absolute top-[0.63rem] left-[0.63rem] rounded-11xl bg-gray-400 [backdrop-filter:blur(5px)] w-[15.69rem] h-[18.13rem]" />
      <div className="absolute top-[0rem] left-[0rem] flex flex-col items-start justify-start p-[0.63rem]">
        <img
          className="w-[15.69rem] relative rounded-t-11xl rounded-b-none h-[8.75rem] object-cover"
          alt=""
          src={programImageUrl}
        />
      </div>
      <b className="absolute top-[10rem] left-[calc(50%_-_116.5px)] tracking-[0.03em] leading-[1.44rem] inline-block w-[14.81rem]">
        {programDescription}
      </b>
      <div
        className="absolute top-[12.06rem] left-[calc(50%_-_116.5px)] text-[0.88rem] leading-[1.13rem] text-justify inline-block w-[14.5rem]"
        style={thisProgramInvolvesStyle}
      >
        {animalTransportImageUrl}
      </div>
    </div>
  );
};

export default AnimalRescueTransportContainer;
