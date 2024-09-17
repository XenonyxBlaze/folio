import {HeroHighlightDemo} from "../components/Hero";

import localFont from "next/font/local";

const techhno = localFont({
  src: "./fonts/TCFont.otf",
  variable: "--font-techhno",
});

export default function Home() {
  return (
    <div>
      <HeroHighlightDemo unfont={`${techhno.className}`} />
    </div>
  );
}
