import { Marquee } from "@/components/ui/marquee";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { AppWindowIcon } from "@phosphor-icons/react/ssr";
import Image from "next/image";
const tools = [
  {
    title: "Figma",
    img: "/assets/figma.png",
  },
  {
    title: "Cursor",
    img: "/assets/cursor.png",
  },
  {
    title: "Zed",
    img: "/assets/zed.png",
  },
  {
    title: "Codex",
    img: "/assets/openai.png",
  },
  {
    title: "Claude code",
    img: "/assets/claude.png",
  },
  {
    title: "Davinci Resolve",
    img: "/assets/davinci.png",
  },
];

export default function DailyTools() {
  return (
    <div className="col-span-full md:col-start-7 md:col-span-2 md:row-start-2 md:row-end-3 flex flex-col gap-2">
      <h2 className="flex gap-2 font-title font-bold uppercase text-lg">
        <AppWindowIcon size={26} />
        Tools
      </h2>
      <div className="relative border-1 rounded bg-foreground/3 border-foreground/20">
        <Marquee className="[--duration:15s] [--gap:8px]">
          {tools.map((tool, index) => (
            <div key={index} className="flex items-center">
              <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg bg-background">
                <div className="w-7 shrink-0">
                  <Image
                    src={tool.img}
                    alt={tool.title}
                    width={100}
                    height={100}
                  />
                </div>
                {/*<span className="z-30 text-sm font-medium">{tool.title}</span>*/}
              </div>
            </div>
          ))}
        </Marquee>
        <ProgressiveBlur
          className="pointer-events-none absolute top-1/2 -translate-y-1/2 left-O h-12 w-[50px] rounded-md"
          direction="left"
          blurIntensity={0.5}
        />
        <ProgressiveBlur
          className="pointer-events-none absolute top-1/2 -translate-y-1/2 right-0 h-12 w-[50px] rounded-md"
          direction="right"
          blurIntensity={0.5}
        />
      </div>
    </div>
  );
}
