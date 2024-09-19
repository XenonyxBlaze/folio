import {HeroHighlightDemo} from "@/components/Hero";
import {Spotlight} from "@/components/Spotlight";
import { Toolbox } from "@/components/Toolbox";

import localFont from "next/font/local";

const techhno = localFont({
  src: "./fonts/TCFont.otf",
  variable: "--font-techhno",
});

export default function Home() {
  return (
    <div>
      <HeroHighlightDemo unfont={`${techhno.className}`} />
      <Spotlight />
      <Toolbox unfont={`${techhno.className}`} />
    </div>
  );
}
