import Btn from "../reusableComponents/btn";

export default function step1({
  formData,
  handleChange,
  nextStep,
  req,
  req1,
  req2,
}) {
  return (
    <div className="flex flex-col justify-center w-full  text-Marine_blue bg-white rounded-lg p-4">
      <h1 className="text-5xl font-bold">Personal info</h1>
      <p className="text-gray-500 mt-6">
        Please provide your name, email address, and phone number.{" "}
      </p>
      <form className="flex flex-col gap-3 mt-8 font-bold">
        <div className="flex justify-between ">
          <label>Name</label>
          {req ? (
            <label className={`text-red-500 italic`}>Required Name</label>
          ) : (
            ""
          )}
        </div>
        <input
          value={formData.name}
          onChange={handleChange}
          type="text"
          className={`${
            req ? "outline outline-[2px] outline-red-500 " : ""
          } py-3 border rounded-md px-2 `}
          placeholder="Name"
          name="name"
          required
          
        />

        <div className="flex justify-between ">
          <label>E-mail</label>
          {req1 ? (
            <label className={`text-red-500 italic`}>Required Email</label>
          ) : (
            ""
          )}
        </div>
        <input
          value={formData.email}
          onChange={handleChange}
          type="email"
          className={`${
            req1 ? "outline outline-[2px] outline-red-500 " : ""
          } py-3 border rounded-md px-2 `}
          placeholder="Email"
          name="email"
          required
        />

        <div className="flex justify-between ">
          <label>Phone Number</label>
          {req2 ? (
            <label className={`text-red-500 italic`}>Required Number</label>
          ) : (
            ""
          )}
        </div>
        <input
          value={formData.number}
          onChange={handleChange}
          type="number"
          className={`${
            req2 ? "outline outline-[2px] outline-red-500 " : ""
          } py-3 border rounded-md px-2 `}
          placeholder="Number"
          name="number"
          required
        />

        <div
          className=" 
      max-md:w-full 
      max-md:h-[4rem] 
      max-md:fixed bg-white bottom-0 left-0 
      max-md:flex 
      max-md:items-center 
      max-md:justify-center px-6"
        >
          <Btn
            handleClick={nextStep}
            name={"Next"}
            className="text-white max-md:-translate-y-[1rem]"
          />
        </div>
      </form>
    </div>
  );
}
