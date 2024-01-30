import AnimalSanctuaryContainer from "./AnimalSanctuaryContainer";
import AnimalRescueTransportContainer from "./AnimalRescueTransportContainer";

const WildCardFormContainer1 = () => {
  return (
    <div className="w-[80rem] relative bg-gray-200 h-[52rem] overflow-hidden shrink-0 mix-blend-normal z-[4] text-left text-[1.88rem] text-white font-times-new-roman">
      <img
        className="absolute top-[0rem] left-[0rem] w-[79.94rem] h-[52rem] object-cover"
        alt=""
        src="/geranimon9s3fjzsstmunsplash-1@2x.png"
      />
      <div className="absolute top-[-0.62rem] left-[81.5rem] bg-gray-700 [backdrop-filter:blur(5px)] w-[80.31rem] h-[52rem] hidden" />
      <img
        className="absolute top-[0rem] left-[calc(50%_-_640px)] w-[80rem] h-[52rem] object-cover"
        alt=""
        src="/original@2x.png"
      />
      <div className="absolute top-[0rem] left-[0rem] bg-black w-[80rem] h-[52rem] opacity-[0.4] mix-blend-overlay" />
      <div className="absolute top-[16.5rem] left-[7.63rem] w-[64.69rem] h-[13.31rem] hidden text-[11.25rem] text-darkgray-300 font-rubik">
        <b className="absolute top-[0rem] left-[0rem] [filter:blur(2px)] [backdrop-filter:blur(10px)]">
          WILD
        </b>
        <b className="absolute top-[0rem] left-[40.19rem] [filter:blur(2px)] [backdrop-filter:blur(10px)]">
          LIFE
        </b>
      </div>
      <img
        className="absolute top-[0rem] left-[calc(50%_-_640px)] w-[80rem] h-[52rem] object-cover hidden"
        alt=""
        src="/remove@2x.png"
      />
      <b className="absolute top-[2.69rem] left-[3.75rem] hidden font-dancing-script text-darkgray-100">
        Prasad Siriwardana
      </b>
      <b className="absolute top-[1.56rem] left-[3.75rem] hidden font-zilla-slab text-darkgray-100">
        WILDLIFE
      </b>
      <img
        className="absolute top-[1.56rem] left-[71.75rem] w-[4.5rem] h-[4.5rem] overflow-hidden object-contain hidden"
        alt=""
        src="/jammenu.svg"
      />
      <div className="absolute top-[44.25rem] left-[38rem] rounded-31xl bg-gray-800 [backdrop-filter:blur(5px)] hidden flex-col items-end justify-start py-[1.75rem] px-[0.5rem] gap-[1rem] text-[1.25rem] text-darkgray-100 font-league-spartan">
        <div className="w-[2.69rem] relative font-medium flex items-end">
          More
        </div>
        <img
          className="w-[1.53rem] relative h-[1.75rem] overflow-hidden shrink-0"
          alt=""
          src="/fa6solidanglesdown.svg"
        />
      </div>
      <img
        className="absolute top-[43rem] left-[7.63rem] w-[5rem] h-[1.25rem] object-contain hidden"
        alt=""
        src="/group-3@2x.png"
      />
      <div className="absolute top-[0rem] left-[0rem] flex flex-col items-end justify-start">
        <div className="w-[80rem] relative bg-gray-300 [backdrop-filter:blur(10px)] h-[52rem]" />
      </div>
      <img
        className="absolute top-[0rem] left-[calc(50%_-_640px)] w-[80rem] h-[52rem] object-cover"
        alt=""
        src="/forestpathwithfernsforeground-2@2x.png"
      />
      <div className="absolute top-[0rem] left-[calc(50%_-_640px)] bg-gray-200 w-[80rem] h-[52rem] opacity-[0.6]" />
      <b className="absolute top-[11.5rem] left-[20.63rem] text-[1.75rem] tracking-[0.05em] inline-block text-center w-[38.75rem] h-[2.06rem] mix-blend-normal">
        Green World Trust
      </b>
      <img
        className="absolute top-[2.5rem] left-[calc(50%_-_62px)] w-[7.75rem] h-[7.75rem] object-cover"
        alt=""
        src="/1519928264146-1@2x.png"
      />
      <div className="absolute top-[14.81rem] left-[calc(50%_-_486px)] text-[1.38rem] leading-[1.44rem] text-center inline-block w-[60.75rem]">
        Green World Trust is a Non-profit organization located in Church Road,
        liyanagemulla, Seeduwa 11410. It is one of the 543 Non-profit
        organizations in Sri Lanka. Address of Green World Trust is 12A/005,
        Church Road, Liyanagemulla, Seeduwa 11410, Green World Trust can be
        contacted at 94112256004
      </div>
      <AnimalSanctuaryContainer
        imageDescription="/GWT-1.png"
        serviceDescription="Animal Sanctuary and Lifetime Care"
        sanctuaryImageUrl="Sanctuaries provide lifelong care to animals rescued from abusive or neglectful situations. They offer a safe and peaceful environment where animals can live out their lives in comfort."
        propLeft="3.13rem"
      />
      <AnimalRescueTransportContainer
        programImageUrl="/GWT-2.png"
        programDescription="Animal Rescue Transport"
        animalTransportImageUrl="This program involves the transportation of animals from overcrowded shelters or areas with high euthanasia rates to regions where they have a better chance of being adopted into loving homes."
        propLeft="22.06rem"
        propTop="12.06rem"
      />
      <AnimalRescueTransportContainer
        programImageUrl="/rectangle-27@2x.png"
        programDescription="Wildlife Conservation and Habitat Restoration"
        animalTransportImageUrl="rotecting endangered species and habitats: restoration, anti-poaching, education for ecosystem preservation, and heightened conservation awareness."
        propLeft="59.94rem"
        propTop="13.5rem"
      />
      <AnimalSanctuaryContainer
        imageDescription="/GWT-4.png"
        serviceDescription="Therapy and Service Animal Training"
        sanctuaryImageUrl="This program trains animals, often dogs, to become therapy or service animals that assist people with disabilities, providing them with companionship, support, and a better quality of life."
        propLeft="41rem"
        propWidth="16.94rem"
      />
    </div>
  );
};

export default WildCardFormContainer1;
