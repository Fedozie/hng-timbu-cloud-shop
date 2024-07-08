import { Typography } from "@/src/ui";
import ProductCard from "./productCard";
import cardImg1 from "../../../public/assets/image-1.png";
import cardImg2 from "../../../public/assets/image-2.png";
import cardImg3 from "../../../public/assets/image-3.png";
import cardImg4 from "../../../public/assets/image-4.png";
import cardImg5 from "../../../public/assets/image-5.png";
import cardImg6 from "../../../public/assets/image-6.png";
import cardImg7 from "../../../public/assets/image-7.png";
import cardImg8 from "../../../public/assets/image-8.png";
import cardImg9 from "../../../public/assets/image-9.png";
import cardImg10 from "../../../public/assets/image-10.png";
import cardImg11 from "../../../public/assets/image-11.png";
import cardImg12 from "../../../public/assets/image-12.png";

const texts = [
  "Convenient Checkout Process",
  "Quick Customer Service",
  "Product Quality",
  "Fast Delivery",
];

const cardData = [
  {
    image: cardImg1,
    title: "BRUHM BLACK AC BAS-09ICQB",
    price: "₦298,490",
  },
  {
    image: cardImg2,
    title: "BRUHM LED BTF43SV SMART OS TV",
    price: "₦3,298,490",
  },
  {
    image: cardImg3,
    title: "BINATONE BLENDER",
    price: "₦48,990",
  },
  {
    image: cardImg4,
    title: "BRUHM BLACK REF BFQ-592EN ",
    price: "₦1,421,290",
  },
  {
    image: cardImg5,
    title: "HISENSE 20KG ICE MAKER ICM2011",
    price: "₦160,900",
  },
  {
    image: cardImg6,
    title: "HISENSE H04AfBK1S1 4.5L AIR FRYER",
    price: "₦60,000",
  },
  {
    image: cardImg7,
    title: "LG F2V5FGPYJE 9/5KG FRONT LOAD",
    price: "₦733,400",
  },
  {
    image: cardImg8,
    title: "HISENSE 100 INCH U7K SERIES ULED 4K",
    price: "₦3,900,990",
  },
  {
    image: cardImg9,
    title: "HUAWEI -M 2.5kW POWER  INVERTER",
    price: "₦4,182,900",
  },
  {
    image: cardImg10,
    title: "MAXI E17000KWH GENERATOR 21.25 KVA",
    price: "₦3,597,900",
  },
  {
    image: cardImg11,
    title: "MAXI TOASTER 2 SLICES",
    price: "₦28,400",
  },
  {
    image: cardImg12,
    title: "Jinko 625W Monofacial Solar Panel",
    price: "₦184,800",
  },
];

const ProductsSections = () => {
  return (
    <section className="bg-white w-full p-10">
      <div className="w-full pb-4 sm:flex sm:justify-between">
        {texts.map((text, index) => (
          <div className="" key={index}>
            <span>{text} </span>
          </div>
        ))}
      </div>
      <div className="border-t-2 "></div>
      <div className="mt-8">
        <Typography color="black" variant="h3" customClassName="mb-8">
          Featured Products
        </Typography>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-4">
        {
          cardData.map((card, index) => (
            <ProductCard 
              title={card.title}
              price={card.price}
              image={card.image}
              key={index}
            />
          ))
        }
        </div>
      </div>
    </section>
  );
};

export default ProductsSections;
