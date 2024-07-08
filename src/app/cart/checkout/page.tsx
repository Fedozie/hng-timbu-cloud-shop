import { Typography, Button } from "@/src/ui";

const Checkout = () => {
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

        <div className="w-full flex justify-between">
          <div>
            <Typography variant="h4">Billing Details</Typography>
            <div></div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
