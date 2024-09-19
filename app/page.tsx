import {HeroHighlightDemo} from "@/components/Hero";
import {Spotlight} from "@/components/Spotlight";

import localFont from "next/font/local";

const techhno = localFont({
  src: "./fonts/TCFont.otf",
  variable: "--font-techhno",
});

export default function Home() {
  return (
    <div>
      <HeroHighlightDemo unfont={`${techhno.className}`} />
      <hr className="border-red-700" />
      <Spotlight></Spotlight>
      <hr className="border-red-700" />
    </div>
  );
}
