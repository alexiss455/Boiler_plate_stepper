import Btn from "../reusableComponents/btn";
import obj from "./stepObj";

export default function step3({
  prevStep,
  nextStep,
  select,
  handleClickAddOns,
  check,
}) {
  return (
    <div className="flex flex-col justify-center w-full text-Marine_blue bg-white rounded-lg p-4">
      <h1 className="text-5xl font-bold">Pick add-ons</h1>

      <p className="text-gray-500 mt-6">
        Add-ons help enhance your gaming experience
      </p>

      <form className="flex flex-col gap-3 mt-8">
        {obj.map((item, index) => (
          <div
            key={index}
            className={`${
              check[index] ? "outline outline-[2px] bg-Magnolia" : " "
            } flex justify-between items-center border px-6 py-4 rounded-lg relative overflow-hidden`}
          >
            <div className="flex gap-4 items-center">
              <input
                type="checkbox"
                value={item.price}
                checked={check[index]}
                onChange={() => handleClickAddOns(index)}
                className="w-4 h-4 after:absolute after:w-full after:h-full after:top-0 after:left-0 after:cursor-pointer"
              />
              <div className="font-thin text-Cool_gray">
                <p className="font-bold text-Marine_blue">{item.name}</p>
                {item.desc}
              </div>
            </div>

            <p className="text-Purplish_blue">
              +${item.price}
              {select ? "/mo" : "0/yr"}
            </p>
          </div>
        ))}
      </form>
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
