import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  GithubLogoIcon,
  RocketLaunchIcon,
  LinkedinLogoIcon,
  BehanceLogoIcon,
} from "@phosphor-icons/react/ssr";
import Link from "next/link";
import DailyTools from "./daily-tools";
import MySetup from "./my-setup";
import TechStack from "./tech-stack";
import StackedProjects from "./stacked-projects";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans flex items-center justify-center min-h-screen p-10 lg:p-0">
      <div className="max-w-5xl grid grid-cols-1 md:grid-cols-8 md:grid-rows-5 gap-6">
        {/*Header*/}
        <div className="row-start-1 col-span-full w-full h-full flex items-center justify-between gap-2 overflow-hidden">
          <div className="flex gap-6 items-center h-full">
            <h1 className="font-title font-black text-3xl leading-6">
              ELEC
              <br />
              SAMA
            </h1>
            <div className="h-12 w-px bg-foreground"></div>
            <div>
              <h2 className="font-title font-regular text-sm">
                Software Engineer
              </h2>
              <p className="font-sans font-regular text-sm text-foreground">
                Hi. I'm David aka Elec Sama, a software engineer based in
                France.
                <Badge variant="secondary">Open to relocation</Badge>
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-1">
            <Button size="sm" className="cursor-pointer" asChild>
              <Link href="https://github.com/electroww">
                <GithubLogoIcon /> Github
              </Link>
            </Button>
            <Button size="sm" className="cursor-pointer" asChild>
              <Link href="https://www.linkedin.com/in/davidryr">
                <LinkedinLogoIcon /> LinkedIn
              </Link>
            </Button>
            <Button size="sm" className="cursor-pointer" asChild>
              <Link href="https://behance.net/eleclab">
                <BehanceLogoIcon /> Behance
              </Link>
            </Button>
          </div>
        </div>
        {/*End Header*/}
        <TechStack />
        {/*Tech Stack*/}

        {/*End Tech Stack*/}

        <div className="col-span-full md:col-start-3 md:row-start-2 md:col-end-7 md:row-end-5 flex flex-col gap-2">
          <h2 className="flex gap-2 font-title font-bold uppercase text-lg">
            <RocketLaunchIcon size={26} /> EXP
          </h2>
          <div className="border-1 border-foreground/20 rounded bg-foreground/3 hover:bg-foreground/5 p-3 flex items-center gap-6 h-32 cursor-pointer">
            <div className="border-1 border-foreground/20 rounded-md bg-black w-22 h-22 flex-shrink-0 relative overflow-hidden">
              <Image
                src="/assets/smappen.png"
                alt="Smappen Logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex flex-row flex-wrap justify-between w-full">
                <h3 className="font-title text-sm mb-2">Smappen</h3>
                <div className="flex gap-1">
                  <Badge variant="outline" className="h-fit">
                    Currently employed
                  </Badge>
                  <Badge variant="outline" className="h-fit">
                    Pro
                  </Badge>
                </div>
              </div>
              <p className="text-foreground/60 text-xs">
                Mapping app for geormaketing used by thousands of users.
              </p>
              <Button asChild variant="link" size="sm" className="self-end">
                <Link href="/project/1">View project</Link>
              </Button>
            </div>
          </div>
          <div className="border-1 border-foreground/20 rounded bg-foreground/3 hover:bg-foreground/5 p-3 flex items-center gap-6 h-32 cursor-pointer">
            <div className="border-1 border-foreground/20 rounded-md bg-black w-22 h-22 flex-shrink-0 relative overflow-hidden">
              <Image
                src="/assets/lolesport-portal.png"
                alt="Smappen Logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center w-full">
              <div className="flex flex-row flex-wrap justify-between w-full">
                <h3 className="font-title text-sm mb-2">Lolesport Portal</h3>
                <div className="flex gap-1">
                  <Badge variant="outline" className="h-fit">
                    Unmaintained
                  </Badge>
                  <Badge variant="outline" className="h-fit">
                    Personal
                  </Badge>
                </div>
              </div>
              <p className="text-foreground/60 text-xs">
                Esport project driven by passion.
              </p>
              <Button asChild variant="link" size="sm" className="self-end">
                <Link href="/project/2">View project</Link>
              </Button>
            </div>
          </div>
          <StackedProjects />
        </div>
        <DailyTools />
        <MySetup />
      </div>
    </div>
  );
}
