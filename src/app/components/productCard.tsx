import { Typography, Button } from "@/src/ui";
import CartIcon from "@/public/assets/cartIcon.svg";
import Image from "next/image";

interface CardProps {
  title: string;
  price: number | null;
  image: any;
}



const ProductCard = ({ title, price, image }: CardProps) => {
  
  return (
    <div className="w-full lg:w-72">
      <div className="border rounded-md border-primary-100">
        <div className="relative w-full h-72">
          <Image src={image} alt="Product Image" layout="fill" objectFit="cover" unoptimized  />
        </div>
      </div>
      <div>
        <Typography
          variant="p"
          color="black"
          align="left"
          customClassName="font-thin my-3"
        >
          {title.slice(0, 30)}...
        </Typography>
        <Typography
          variant="h6"
          color="black"
          align="left"
          customClassName="font-bold"
        >
          ₦{price}
        </Typography>
      </div>
      <div>
        <Button
          variant="primary"
          color="primary"
          label="Add to Cart"
          customClassName="w-full mt-4"
          // leftIcon = {<CartIcon/>}
        />
      </div>
    </div>
  );
};

export default ProductCard;

