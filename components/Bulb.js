import Image from "next/image";

const Bulb = () => {
  return (
    <div className="absolute -left-36 -bottom-12 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[200px] xl:w-[260px] ">
      <Image
        src={"/bulb.png"}
        height={260}
        width={200}
        className="w-full h-width"
        alt=""
      />
    </div>
  );
};

export default Bulb;
