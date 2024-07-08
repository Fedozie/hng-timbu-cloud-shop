import Image from "next/image";
import { Typography, Button, Input } from "@/src/ui";
import Link from "next/link";

import tvImg from "@/public/assets/image-8.png";
import iceImg from "@/public/assets/image-5.png";
import genImg from "@/public/assets/image-10.png";
import inverterImg from "@/public/assets/image-9.png";
import blenderImg from "@/public/assets/image-3.png";

const Checkout = () => {
  const inputs = [
    { label: "Full Name", placeholder: "Darwin Nunez", name: "name" },
    {
      label: "Email Address",
      placeholder: "darwin.nunez@gmail.com",
      name: "email",
    },
    {
      label: "Address",
      placeholder: "Block 12C, West Minister Area",
      name: "address",
    },
    { label: "City", placeholder: "Liverpool", name: "city" },
    { label: "Country", placeholder: "England", name: "country" },
  ];

  const orders = [
    {
      name: "HISENSE 100 INCH U7K SERIES ULED 4K",
      imageUrl: tvImg,
      price: "₦3,900,990",
      quantity: "1",
      total: "₦3,900,990",
    },
    {
      name: "HISENSE 20KG ICE MAKER ICM2011",
      imageUrl: iceImg,
      price: "₦160,900",
      quantity: "2",
      total: "₦321,800",
    },
    {
      name: "MAXI E17000KWH GENERATOR 21.25 KVA",
      imageUrl: genImg,
      price: "₦3,597,900",
      quantity: "1",
      total: "₦3,597,900",
    },
    {
      name: "HUAWEI -M 2.5kW POWER  INVERTER",
      imageUrl: inverterImg,
      price: "₦4,182,900",
      quantity: "1",
      total: "₦4,182,900",
    },
    {
      name: "BINATONE BLENDER",
      imageUrl: blenderImg,
      price: "₦48,990",
      quantity: "3",
      total: "₦48,990",
    },
  ];

  return (
    <section className="w-full p-10">
      <div>
        <Typography
          variant="h6"
          fontWeight="light"
          customClassName="text-stone-500 mb-4"
        >
          Home/Cart/Checkout
        </Typography>
        <div className="flex justify-start">
          <span></span>
          <Typography variant="h1" fontWeight="medium">
            Checkout
          </Typography>
        </div>

        <div className="w-full flex items-center my-8">
          <div className="h-1 flex-grow bg-primary-500 rounded-md"></div>
          <div className="w-6 h-6 bg-primary-500 text-white mx-4 flex justify-center items-center rounded-full">
            1
          </div>
          <div className="h-1 flex-grow bg-primary-500 rounded-md"></div>
          <div className="w-6 h-6 bg-primary-500 text-white mx-4 flex justify-center items-center rounded-full">
            2
          </div>
          <div className="h-1 flex-grow bg-primary-500 rounded-md"></div>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between gap-6">
          <div className="flex-grow">
            <Typography variant="h4" customClassName="mb-4">
              Billing Details
            </Typography>
            <div>
              {inputs.map((input, index) => (
                <Input
                  key={index}
                  placeholder={input.placeholder}
                  label={input.label}
                  name={input.name}
                />
              ))}
              <div className="flex flex-col mb-6">
                <div className="mb-2">
                  <label htmlFor="number">Phone Number</label>
                  <span className="ml-2 text-red-600">*</span>
                </div>

                <input
                  type="number"
                  id="number"
                  className="block w-full rounded-lg border-2  bg-transparent p-4 placeholder:text-[#979797]"
                  placeholder="114 3676734"
                />
              </div>
              <div className="flex flex-col mb-8">
                <div className="mb-2">
                  <label htmlFor="area">Additional Information</label>
                </div>
                <Typography customClassName="mb-2">
                  Order Notes{" "}
                  <span className="inline text-[#979797]">(Optional)</span>{" "}
                </Typography>

                <textarea
                  className="block w-full rounded-lg border-2  bg-transparent p-4 placeholder:text-[#979797]"
                  placeholder="Note about your order, e.g. special note for delivery "
                ></textarea>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[40%]">
            <div className="w-full h-full border-2 border-primary-300 rounded-lg p-4">
              <Typography variant="h4">Order Summary</Typography>
              <div className="mx-2">
                {orders.map((order, index) => (
                  <div
                    className="flex justify-between border-b-2 pb-2 mb-2"
                    key={index}
                  >
                    <div className="flex gap-4">
                      <Image
                        src={order.imageUrl}
                        alt="order"
                        width={75}
                        height={75}
                      />
                      <div className="mt-2 flex flex-col gap-4">
                        <Typography variant="h6" fontWeight="light">
                          {order.name}
                        </Typography>
                        <Typography variant="h5">{order.total}</Typography>
                      </div>
                    </div>
                    <div className="self-center">
                      <Typography>x{order.quantity}</Typography>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mx-2">
                <div className="flex justify-between items-center my-4">
                  <Typography customClassName="text-stone-500">
                    Sub-Total
                  </Typography>
                  <Typography color="primary-600">₦12,150,560</Typography>
                </div>
                <div className="flex justify-between items-center my-4">
                  <Typography customClassName="text-stone-500">
                    Shipping Fee
                  </Typography>
                  <Typography color="primary-600">₦83,300</Typography>
                </div>
                <div className="border-t-2 my-4"></div>
                <div className="flex justify-between items-center gap-2">
                  <input
                    type="text"
                    placeholder="Coupon Code"
                    className="border-2 rounded-md p-2 flex-grow"
                  />
                  <Button
                    variant="disabled"
                    color="primary"
                    label="Apply"
                    customClassName="px-8 py-[0.5rem]"
                  />
                </div>
                <div className="flex justify-between items-center my-8">
                  <Typography variant="h6" fontWeight="semi-bold">
                    Total Price
                  </Typography>
                  <Typography
                    variant="h6"
                    fontWeight="semi-bold"
                    color="primary-600"
                  >
                    ₦12,223,860
                  </Typography>
                </div>
                <Link href="/">
                  <Button
                    variant="primary"
                    color="primary"
                    label="Checkout"
                    customClassName="w-full"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
