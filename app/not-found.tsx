import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 px-4 text-center">
      <div className="space-y-8">
        <div className="relative">
          <h1 className="text-9xl font-extrabold text-gray-800 tracking-widest">
            404
          </h1>
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <p className="text-2xl font-semibold text-gray-600 bg-gray-50 px-4 py-2 rounded-full">
              Page Not Found
            </p>
          </div>
        </div>
        <p className="text-xl text-gray-600 max-w-lg mx-auto">
          Oops! The page you&apos;re looking for seems to have vanished into the
          digital abyss.
        </p>
        <Button asChild className="bg-primary hover:bg-primary/90">
          <Link href="/">Return to Home</Link>
        </Button>
        <div className="w-full max-w-md mx-auto">
          <svg
            className="w-full"
            viewBox="0 0 1155 742"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M203.5 482C136.5 535.167 13.5 673.5 36.5 741.5H1154.5V-0.5C1150.17 8.5 1131.5 30.5 1089.5 48.5C1037.5 70.5 946 147 907 193C868 239 826.5 318 797.5 347C768.5 376 691 437.5 628.5 449.5C566 461.5 487.5 449.5 438.5 437.5C389.5 425.5 287.5 415.5 203.5 482Z"
              fill="url(#paint0_linear)"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="595.75"
                y1="-0.5"
                x2="595.75"
                y2="741.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#D1D5DB" stopOpacity="0.2" />
                <stop offset="1" stopColor="#D1D5DB" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
