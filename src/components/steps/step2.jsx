import Btn from "../reusableComponents/btn";
import { newOgj } from "./stepObj";

export default function step2({
  nextStep,
  prevStep,
  handleClick,
  clickIndexActive,
  handleYear,
  select,
}) {
  return (
    <div className="flex flex-col justify-center w-full  text-Marine_blue bg-white rounded-lg p-4">
      <h1 className="text-5xl font-bold">Select your plan</h1>

      <p className="text-gray-500 mt-6">
        You have the option of monthly or yearly billing.
      </p>

      <form className="flex flex-col gap-3 mt-8 font-bold">
        <div className="flex gap-4 max-md:flex-col">
          {newOgj.map((item, index) => (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className={`w-full p-4 rounded-lg border cursor-pointer max-md:flex items-center gap-8 ${
                clickIndexActive === index
                  ? "outline outline-[2px] outline-slate-800 bg-Magnolia"
                  : ""
              }`}
            >
              <img src={item.img1} />
              <div className="md:mt-10">
                {item.planNmae}
                <p className="text-Cool_gray font-thin">
                  {select ? item.monthly : item.yearly}
                </p>
                <p
                  className={`${
                    select ? "hidden" : ""
                  }  font-bold text-[.60rem] mt-2`}
                >
                  Two months free
                </p>
              </div>
            </div>
          ))}
        </div>
      </form>

      <div className="mt-6 flex flex-row items-center justify-center gap-7 py-3 bg-Light_gray rounded-lg font-bold">
        <div className={`${select ? "" : "text-Cool_gray"}`}>Monthly</div>
        <div
          className={`w-12 h-6 bg-Marine_blue rounded-full flex items-center cursor-pointer`}
          onClick={handleYear}
        >
          <span
            className={`w-4 h-4 bg-white rounded-full ${
              select ? "" : "ml-7"
            } transition-all m-1`}
          ></span>
        </div>
        <div className={` ${select ? "text-Cool_gray" : ""} `}> Yearly</div>
      </div>

      <div
        className=" 
      max-md:w-full 
      max-md:h-[4rem] 
      max-md:fixed bg-white bottom-0 left-0 
      px-6 flex items-center justify-between"
      >
        <Btn
          handleClick={prevStep}
          name={"Go back"}
          className={
            "bg-transparent text-slate-950 font-bold  max-md:-translate-y-[1rem]"
          }
        />
        <Btn
          handleClick={nextStep}
          name={"Next"}
          className="text-white max-md:-translate-y-[1rem]"
        />
      </div>
    </div>
  );
}
