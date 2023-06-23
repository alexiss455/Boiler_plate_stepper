import { useState } from "react";
import Step1 from "../../steps/step1";
import Step2 from "../../steps/step2";
import Step3 from "../../steps/step3";
import Step4 from "../../steps/step4";
import Success from "../../steps/success";
import obj from "../../steps/stepObj";
export default function Home() {
  const [step, setStep] = useState(1);
  const [select, setIsSleceted] = useState(true);
  const [clickIndexActive, setclickIndexActive] = useState(-1);
  const [wait, setWait] = useState(false);
  const [check, setCheck] = useState(Array(obj.length).fill(false));
  const empt = [];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    plan: "",
    planName: "",
    planPrice: 0,
    addOns: [],
  });
  const choice = {
    arcade_MON: 9,
    advanced_MON: 12,
    pro_MON: 15,
    arcade_YR: 90,
    advanced_YR: 120,
    pro_YR: 150,
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const sleep = (m) => new Promise((r) => setTimeout(r, m));
  const handleSubmit = async (e) => {
    e.preventDefault();
    setWait(true);
    await sleep(2500);
    setStep(step + 1);
    console.log(formData);
  };

  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };

  function handleYear() {
    setIsSleceted((prevValue) => !prevValue);
    setclickIndexActive(-1);
    setCheck(Array(obj.length).fill(false));
    formData.addOns = [];
  }

  //-------------------------------step 2-----------------------------//
  function handleClick(index) {
    setclickIndexActive(index);
    if (select === true) {
      if (index === 0) {
        empt.push(choice.arcade_MON);
        formData.planName = "Arcade";
      } else if (index === 1) {
        formData.planName = "Advanced";
        empt.push(choice.advanced_MON);
      } else if (index === 2) {
        formData.planName = "Pro";
        empt.push(choice.pro_MON);
      }
    } else {
      if (index === 0) {
        empt.push(choice.arcade_YR);
        formData.planName = "Arcade";
      } else if (index === 1) {
        formData.planName = "Advanced";
        empt.push(choice.advanced_YR);
      } else if (index === 2) {
        formData.planName = "Pro";
        empt.push(choice.pro_YR);
      }
    }

    const lastPick_For_Plan = empt[empt.length - 1];
    formData.planPrice = lastPick_For_Plan;
    if (select) {
      formData.plan = "Monthly";
    } else {
      formData.plan = "Yearly";
    }
  }
  //-------------------------------End step2-----------------------------//

  //-------------------------------step3-----------------------------//
  const addOnsData = formData.addOns;
  function handleClickAddOns(index) {
    const selectedAddon = obj[index];
    const newCheck = [...check];
    newCheck[index] = !newCheck[index];
    const addon = {
      name: selectedAddon.name,
      price: select ? `${selectedAddon.price}` : `${selectedAddon.price}0`,
    };
    setFormData((prevFormData) => ({
      ...prevFormData,
      addOns: newCheck[index]
        ? [...prevFormData.addOns, addon]
        : prevFormData.addOns.filter((a) => a.name !== addon.name),
    }));
    setCheck(newCheck);
  }
  //-------------------------------End step3-----------------------------//

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Step1
            formData={formData}
            handleChange={handleChange}
            nextStep={nextStep}
          />
        );

      case 2:
        return (
          <Step2
            formData={formData}
            handleClick={handleClick}
            handleYear={handleYear}
            nextStep={nextStep}
            prevStep={prevStep}
            clickIndexActive={clickIndexActive}
            select={select}
          />
        );

      case 3:
        return (
          <Step3
            nextStep={nextStep}
            prevStep={prevStep}
            select={select}
            handleClickAddOns={handleClickAddOns}
            check={check}
          />
        );

      case 4:
        return (
          <Step4
            prevStep={prevStep}
            select={select}
            formDataAddOns={addOnsData}
            formData={formData}
            handleSubmit={handleSubmit}
            wait={wait}
          />
        );
      case 5:
        return <Success />;
      default:
        return null;
    }
  };

  return (
    <div className="h-screen md:flex items-center justify-center mx-auto text-slate-800 max-md:bg-Magnolia">
      <div className="flex flex-row max-md:flex-col max-md:w-full overflow-hidden md:border md:rounded-2xl ">
        <div className="md:p-4  h-full">
          <div
            className="md:bg-sidebar 
            max-md:bg-cover
            max-md:h-[200px]
            max-md:bg-mobile bg-no-repeat  
            md:bg-contain 
            md:min-w-[274px]
            md:min-h-[568px] text-white p-8"
          >
            <div className="flex flex-col gap-5 max-md:flex-row max-md:justify-center">
              <div className="flex gap-6 items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center 
                ${
                  step >= 0
                    ? " bg-Pastel_blue text-Marine_blue"
                    : " outline outline-[1px] outline-gray-300"
                }  font-bold`}
                >
                  1
                </div>
                <div className="text-Light_blue max-md:hidden">
                  Step 1
                  <div className="font-semibold tracking-[.15rem] text-white">
                    YOUR INFO
                  </div>
                </div>
              </div>

              <div className="flex gap-6 items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center 
                   ${
                     step >= 2
                       ? " bg-Pastel_blue text-Marine_blue"
                       : " outline outline-[1px] outline-gray-300"
                   }  font-bold`}
                >
                  2
                </div>
                <div className="text-Light_blue max-md:hidden">
                  Step 2
                  <div className="font-semibold tracking-[.15rem] text-white">
                    SELECT PLAN
                  </div>
                </div>
              </div>

              <div className="flex gap-6 items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center 
                   ${
                     step >= 3
                       ? " bg-Pastel_blue text-Marine_blue"
                       : " outline outline-[1px] outline-gray-300"
                   }  font-bold`}
                >
                  3
                </div>
                <div className="text-Light_blue max-md:hidden">
                  Step 3
                  <div className="font-semibold tracking-[.15rem] text-white">
                    ADD ONS
                  </div>
                </div>
              </div>

              <div className="flex gap-6 items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center 
                   ${
                     step >= 4
                       ? " bg-Pastel_blue text-Marine_blue"
                       : " outline outline-[1px] outline-gray-300"
                   }  font-bold`}
                >
                  4
                </div>
                <div className="text-Light_blue max-md:hidden">
                  Step 4
                  <div className="font-semibold tracking-[.15rem] text-white">
                    SUMMARY
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:px-6 max-md:px-4 max-md:pb-12 flex items-center w-full md:pr-10  max-md:-mt-[6.5rem]">
          {renderStep()}
        </div>
      </div>
    </div>
  );
}
