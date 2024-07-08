import Image from "next/image";
import { Typography, Button } from "@/src/ui";
import bgImage from "@/public/assets/home-img.png";

const HeroSection = () => {
  return (
    <section className="relative h-[55vh]">
      <Image
        src={bgImage}
        alt="Background Image"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-start p-10 ">
        <div className="text-left">
          <Typography variant="h1" fontWeight="bold" customClassName="text-white mb-4">
            Get the Best Quality Product
          </Typography>
          <Button
            variant="primary"
            color="primary"
            label="Shop Now"
            customClassName="bg-blue-500 text-white px-6 py-3 rounded"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
