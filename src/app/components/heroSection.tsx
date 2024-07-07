import Image from "next/image";
import { Typography, Button } from "@/src/ui";
import bgImage from "@/public/assets/home-img.png";

const HeroSection = () => {
  return (
    <section className="relative">
      <Image
        src={bgImage}
        alt="Background Image"
        className="w-full h-full object-cover bg-cover"
      />
      <div className="absolute left-0 top-[50%] pl-10">
        <Typography
          color="white"
          fontWeight="bold"
          align="left"
          variant="h1"
          customClassName="mb-4"
        >
          Get The Best Quality Product
        </Typography>
        <Button variant="primary" color="primary" label="Shop Now" />
      </div>
    </section>
  );
};

export default HeroSection;
