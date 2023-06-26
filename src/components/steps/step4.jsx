import Btn from "../reusableComponents/btn";
export default function step4({
  handleSubmit,
  formDataAddOns,
  formData,
  select,
  prevStep,
  wait,
  totalPrice
}) {

  return (
    <div className="flex flex-col justify-center w-full  text-Marine_blue bg-white rounded-lg p-4">
      <h1 className="text-5xl font-bold">Finishing up</h1>
      <p className="text-gray-500 mt-6">
        Double-check everythinh looks OK before confirming.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 mt-8 font-bold "
      >
      
        <div className="p-4 bg-Magnolia rounded-lg">
          <div className="flex justify-between items-center border-b pb-6">
            <div>
              <p>
                {formData.planName} ({formData.plan})
              </p>
              <p className="text-Cool_gray font-thin">Change</p>
            </div>
            <p>
              ${formData.planPrice}
              {select ? "/mo" : "/yr"}
            </p>
          </div>

          {formDataAddOns.map((item, index) => (
            <div
              key={index}
              className="flex justify-between mt-4 text-Cool_gray font-thin"
            >
              <p>{item.name}</p>
              <p className="text-Marine_blue">
                +${parseInt(item.price)}/{formData.plan}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center p-4">
          <p className="text-Cool_gray font-thin">Total (per{select ? "/mo" : "/yr"})</p>
          <p className="text-Marine_blue font-semibold text-[1.75rem]">
            +${totalPrice}{select ? "/mo" : "/yr"}
          </p>
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
            className={"bg-transparent text-slate-950 font-bold  max-md:-translate-y-[1rem]"}
          />
          <Btn
            type={"submit"}
            name={"Confirm"}
            className={`text-white font-thin relative after:absolute after:w-full after:h-full after:top-0 after:left-0 ${
              wait
                ? "after:bg-white after:bg-opacity-40 after:duration-300"
                : ""
            }    max-md:-translate-y-[1rem]`}
            disabled={wait}
          />
        </div>
      </form>
    </div>
  );
}

