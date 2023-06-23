function sidebar({ step }) {
  return (
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
  );
}

export default sidebar;
