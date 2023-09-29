import Image from "next/image";


const Headerdash = () => {
  return (
    <div>
      <div className=" bg-orange-400 h-28 w-full flex">
        <div className=" pt-6">
          <Image src="/namelogo.png" alt="logo" width={400} height={300} />
        </div>
        <div className="ml-lm pt-9 ">
          <Image
            src="/icons8-notification-50.png"
            alt="notification"
            width={30}
            height={10}
          />
        </div>
        <div className="pt-8 ml-4">
          <Image
            className=" rounded-full "
            src="/dp.jpg"
            alt="notification"
            width={40}
            height={20}
          />
        </div>
        <h5 className="ml-4 pt-9">Hi, Lizzie Drummond</h5>
      </div>
    </div>
  );
};

export default Headerdash;
