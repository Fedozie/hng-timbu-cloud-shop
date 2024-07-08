"use client";

import Image from "next/image";
import { Typography, Button } from "@/src/ui";
import Table from "../components/table";
import Link from "next/link";

import tvImg from "@/public/assets/image-8.png";
import iceImg from "@/public/assets/image-5.png";
import genImg from "@/public/assets/image-10.png";
import inverterImg from "@/public/assets/image-9.png";
import blenderImg from "@/public/assets/image-3.png";
import DeleteIcon from "@/public/assets/delete.svg";

const Cart = () => {
  const columns = [
    {
      Header: "",
      accessor: "delete",
      Cell: ({ row }: any) => (
        <button className="w-6 h-6 flex justify-center items-center">
          <DeleteIcon />
        </button>
      ),
    },
    {
      Header: "PRODUCT NAME",
      accessor: "name",
      Cell: (row: any) => (
        <div className="flex items-center">
          <Image
            src={row.imageUrl}
            alt={row.name}
            width={50}
            height={50}
            className="mr-2"
          />
          {row.name}
        </div>
      ),
    },
    { Header: "PRICE", accessor: "price" },
    {
      Header: "QUANTITY",
      accessor: "quantity",
      Cell: (row: any) => (
        <div className="flex items-center justify-between">
          <button
            onClick={() => alert(`Decrementing quantity for ${row.name}`)}
            className="w-4 h-4 bg-[#818181] text-white p-1 rounded flex justify-center items-center"
          >
            -
          </button>
          <span className="">{row.quantity}</span>
          <button
            onClick={() => alert(`Decrementing quantity for ${row.name}`)}
            className="w-4 h-4 bg-primary-500 text-white p-1 rounded flex justify-center items-center"
          >
            +
          </button>
        </div>
      ),
    },
    { Header: "TOTAL", accessor: "total" },
  ];

  const data = [
    {
      delete: DeleteIcon,
      name: "HISENSE 100 INCH U7K SERIES ULED 4K",
      imageUrl: tvImg,
      price: "₦3,900,990",
      quantity: "1",
      total: "₦3,900,990",
    },
    {
      delete: DeleteIcon,
      name: "HISENSE 20KG ICE MAKER ICM2011",
      imageUrl: iceImg,
      price: "₦160,900",
      quantity: "2",
      total: "₦321,800",
    },
    {
      delete: DeleteIcon,
      name: "MAXI E17000KWH GENERATOR 21.25 KVA",
      imageUrl: genImg,
      price: "₦3,597,900",
      quantity: "1",
      total: "₦3,597,900",
    },
    {
      delete: DeleteIcon,
      name: "HUAWEI -M 2.5kW POWER  INVERTER",
      imageUrl: inverterImg,
      price: "₦4,182,900",
      quantity: "1",
      total: "₦4,182,900",
    },
    {
      delete: DeleteIcon,
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
          Home/Cart
        </Typography>
        <Typography variant="h1" fontWeight="medium">
          Cart
        </Typography>
        <div></div>
      </div>

      <div className="w-full flex justify-between items-start">
        <div className="flex-grow">
          <Table data={data} columns={columns} />
        </div>
        <div className="w-[25%] ml-10">
          <div className="w-full border-2 border-primary-600 p-4 rounded-lg">
            <Typography variant="h5">Order Summary</Typography>
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
            <Link href = "/cart/checkout">
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
    </section>
  );
};

export default Cart;
