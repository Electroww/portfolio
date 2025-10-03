import { ComputerTowerIcon } from "@phosphor-icons/react/ssr";
import { FanIcon } from "@phosphor-icons/react/ssr";

export default function MySetup() {
  return (
    <div className="col-span-full md:col-start-7 md:col-span-2 md:row-start-3 md:row-span-2 flex flex-col gap-2">
      <h2 className="flex gap-2 font-title font-bold uppercase text-lg">
        <ComputerTowerIcon size={26} />
        Setup
      </h2>
      <div className="flex flex-wrap w-full gap-2 overflow-hidden">
        <div className="grid grid-cols-3 p-2 px-3 grid-rows-3 gap-2 border border-foreground/20 rounded-sm w-full h-36">
          <div className="col-span-2 row-span-full border border-foreground/10 bg-foreground/3 rounded-md flex flex-col justify-center items-center gap-2">
            <div className=" text-xs h-10 w-18 bg-red-500/20 rounded-sm flex justify-center items-center">
              Ryzen 7 <br />
              9800 x3d
            </div>
            <div className=" text-xs h-10 w-22 bg-green-500/20 rounded-sm flex justify-center items-center">
              RTX 5080
            </div>
          </div>

          <div className="py-1 col-start-3 row-span-full border border-foreground/10 bg-foreground/3 rounded-md flex flex-col justify-between items-center">
            <div className="w-9 h-9 flex justify-center items-center bg-foreground/10 rounded-full">
              <FanIcon size={30} className="fan-spin" />
            </div>
            <div className="w-9 h-9 flex justify-center items-center bg-foreground/10 rounded-full">
              <FanIcon size={30} className="fan-spin" />
            </div>
            <div className="w-9 h-9 flex justify-center items-center bg-foreground/10 rounded-full">
              <FanIcon size={30} className="fan-spin" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
