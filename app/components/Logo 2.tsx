import Image from "next/image";
import { Alex_Brush } from "next/font/google";

// Configure Alex Brush
const alexBrush = Alex_Brush({
  subsets: ["latin"],
  weight: ["400"],
});

type LogoProps = {
  className?: string;
};

export default function Logo({ className = "" }: LogoProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center -space-y-0.5 ${className}`}
    >
      <Image
        src="/images/gambian-eye-logo.png"
        alt="The Gambian Eye"
        width={160}
        height={60}
        priority
        className="w-auto h-12 md:h-16 object-contain -mb-1"
      />
      <p className="text-xs md:text-sm font-bold text-gambia-blue tracking-wide leading-none">
        The Gambian Eye
      </p>
      <p
        className={`${alexBrush.className} py-2 text-lg md:text-xl text-gambia-blue/80 leading-none mt-0.5`}
      >
        by Ousman Baldeh
      </p>
    </div>
  );
}
