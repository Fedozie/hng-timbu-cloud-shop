import Logo from "@/public/assets/Logo.png";
import CartIcon from "@/public/assets/cartIcon.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/src/ui";
import Cart from "../cart/page";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="w-full px-10 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Image src={Logo} alt="Logo" width={100} height={100} />
        </div>

        <div className="w-[50%] flex justify-between">
          <div className="border rounded-md p-2 flex-grow flex justify-between items-center">
            <input
              type="text"
              className="bg-transparent outline-none flex-grow"
              placeholder="Search for all accessories"
            />
            <select className="bg-transparent outline-none">
              <option value="categories">All Categories</option>
            </select>
          </div>
          <button className="bg-primary-500 text-white p-2 rounded-r-md">
            Search
          </button>
        </div>

        <div className="flex gap-4">
          <Link href="/">Products</Link>
          <Link href="/">Contact Us</Link>
        </div>

        <div className="relative">
          <button className="bg-primary-500 text-white p-2 rounded-md flex justify-between items-center">
            <Image src={CartIcon} alt="cart" width={20} height={20} className="mr-2"/>
            My Cart
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
