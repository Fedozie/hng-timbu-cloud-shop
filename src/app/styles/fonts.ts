import { Poppins } from "next/font/google";

//Poppins Font Setup
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins"
})