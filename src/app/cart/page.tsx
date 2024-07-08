"use client";

import { Typography, Button } from "@/src/ui";

const Cart = () => {
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

      <div className="w-full flex">
        <div></div>
        <div className="w-[25%]">
          <div className="w-full border-2 border-primary-600 p-4 rounded-lg">
            <Typography variant = "h5">Order Summary</Typography>
            <div className="flex justify-between items-center my-4">
              <Typography customClassName="text-stone-500">Sub-Total</Typography>
              <Typography  color="primary-600">₦12,150,560</Typography>
            </div>
            <div className="flex justify-between items-center my-4">
              <Typography customClassName="text-stone-500">Shipping Fee</Typography>
              <Typography  color="primary-600">₦83,300</Typography>
            </div>
            <div className="border-t-2 my-4"></div>
            <div className="flex justify-between items-center gap-2">
              <input type="text" placeholder="Coupon Code" className="border-2 rounded-md p-2 flex-grow"/>
              <Button variant="disabled" color="primary" label="Apply" customClassName="px-8 py-[0.5rem]"/>
            </div>
            <div className="flex justify-between items-center my-8">
              <Typography variant="h6" fontWeight="semi-bold" >Total Price</Typography>
              <Typography variant="h6" fontWeight="semi-bold" color="primary-600">₦12,223,860</Typography>
            </div>
            <Button variant="primary" color="primary" label="Checkout" customClassName="w-full"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
