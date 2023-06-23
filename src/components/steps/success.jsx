import ty from "../../../images/icon-thank-you.svg";
export default function success() {
  return (
    <div className="flex flex-col justify-center w-full text-center bg-white rounded-lg p-4 py-10">
      <img src={ty} className="m-auto" />
      <p className="font-bold text-[2.5rem] ">Thank you!</p>
      <p className="text-Cool_gray max-w-[390px]">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. if you ever need support, please feel free to email us at
        support@loregaming.com.
      </p>
    </div>
  );
}
