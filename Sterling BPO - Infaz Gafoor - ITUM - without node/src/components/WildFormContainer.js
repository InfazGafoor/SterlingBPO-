import ContainerScrollMoreForm from "./ContainerScrollMoreForm";

const WildFormContainer = () => {
  return (
    <div className="w-[80rem] relative bg-gray-200 h-[52rem] overflow-hidden shrink-0 z-[6] text-left text-[1.88rem] text-darkgray-100 font-rubik">
      <img
        className="absolute top-[0rem] left-[calc(50%_-_640px)] w-[80rem] h-[52rem] object-cover"
        alt=""
        src="/original@2x.png"
      />
      <img
        className="absolute top-[0rem] left-[-0.31rem] w-[80.25rem] h-[52.06rem] object-cover"
        alt=""
        src="/geranimon9s3fjzsstmunsplash-1@2x.png"
      />
      <div className="absolute top-[0rem] left-[-0.25rem] bg-black w-[80.19rem] h-[52rem] opacity-[0.4] mix-blend-overlay" />
      <div className="absolute top-[0rem] left-[-0.31rem] bg-gray-700 [backdrop-filter:blur(5px)] w-[80.31rem] h-[52rem]" />
      <div className="absolute top-[16.5rem] left-[7.63rem] w-[64.69rem] h-[13.31rem] text-[11.25rem] text-darkgray-300">
        <b className="absolute top-[0rem] left-[0rem] [filter:blur(2px)] [backdrop-filter:blur(10px)]">
          WILD
        </b>
        <b className="absolute top-[0rem] left-[40.19rem] [filter:blur(2px)] [backdrop-filter:blur(10px)]">
          LIFE
        </b>
      </div>
      <img
        className="absolute top-[0rem] left-[calc(50%_-_640px)] w-[80rem] h-[52rem] object-cover"
        alt=""
        src="/remove@2x.png"
      />
      <b className="absolute top-[2.69rem] left-[3.75rem] font-dancing-script">
        Prasad Siriwardana
      </b>
      <b className="absolute top-[1.56rem] left-[3.75rem] font-zilla-slab">
        WILDLIFE
      </b>
      <img
        className="absolute top-[1.56rem] left-[71.75rem] w-[4.5rem] h-[4.5rem] overflow-hidden object-contain"
        alt=""
        src="/jammenu.svg"
      />
      <ContainerScrollMoreForm scroll1 propTop="44.25rem" propMargin="unset" />
      <img
        className="absolute top-[43rem] left-[7.63rem] w-[5rem] h-[1.25rem] object-contain"
        alt=""
        src="/group-3@2x.png"
      />
      <img
        className="absolute top-[calc(50%_-_139px)] left-[0rem] w-[80rem] h-[17.33rem] object-cover"
        alt=""
        src="/rectangle-33@2x.png"
      />
      <img
        className="absolute top-[0rem] left-[0rem] w-[80rem] h-[17.33rem] object-cover"
        alt=""
        src="/rectangle-34@2x.png"
      />
      <img
        className="absolute bottom-[-0.02rem] left-[0rem] w-[80rem] h-[17.33rem] object-cover"
        alt=""
        src="/rectangle-35@2x.png"
      />
      <div className="absolute top-[0rem] left-[calc(50%_-_640px)] bg-gray-200 w-[80rem] h-[17.31rem] opacity-[0.7]" />
      <div className="absolute top-[34.69rem] left-[calc(50%_-_640px)] bg-gray-200 w-[80rem] h-[17.31rem] opacity-[0.7]" />
    </div>
  );
};

export default WildFormContainer;
