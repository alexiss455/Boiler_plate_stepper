import Btn from "../reusableComponents/btn";

export default function step1({ formData, handleChange, nextStep }) {
  return (
    <div className="flex flex-col justify-center w-full  text-Marine_blue bg-white rounded-lg p-4">
      <h1 className="text-5xl font-bold">Personal info</h1>
      <p className="text-gray-500 mt-6">
        Please provide your name, email address, and phone number.{" "}
      </p>
      <form className="flex flex-col gap-3 mt-8 font-bold">
        <label>Name</label>
        <input
          value={formData.name}
          onChange={handleChange}
          type="text"
          className="py-3 border rounded-md px-2"
          placeholder="Name"
          name="name"
        />

        <label>Email Address</label>
        <input
          value={formData.email}
          onChange={handleChange}
          type="email"
          className="py-3 border rounded-md px-2"
          placeholder="Email"
          name="email"
        />

        <label>Phone Number</label>
        <input
          value={formData.number}
          onChange={handleChange}
          type="number"
          className="py-3 border rounded-md px-2 normal-nums"
          placeholder="Number"
          name="number"
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
