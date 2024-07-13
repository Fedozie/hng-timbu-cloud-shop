"use client";

interface Product {
  id: string;
  name: string;
  description: string | null;
  unique_id: string;
  url_slug: string;
  is_available: boolean;
  selling_price: number | null;
  discounted_price: number | null;
  buying_price: number | null;
  product_image: string[];
  available_quantity: number;
  photos: { url: string }[];
  current_price: Array<{
    NGN: [number, null, []];
  }>;
}

import { useState, useEffect } from "react";
import { Typography } from "@/src/ui";
import { getAllProducts } from "../services/api";
import ProductCard from "./productCard";

const ProductsSections = () => {
  const texts = [
    "Convenient Checkout Process",
    "Quick Customer Service",
    "Product Quality",
    "Fast Delivery",
  ];

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const organization_id = "299d5d30ddfb491bb504018c375288a3";
        const Appid = "TIG0IIEZE6OCHOT";
        const Apikey = "d9473e02aa994baa82d27fdd64f582ca20240712124108402122";
        const page = 1;
        const size = 10;

        const response = await getAllProducts(
          organization_id,
          Appid,
          Apikey,
          page,
          size,
          false
        );
        setProducts(response.items);
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="bg-white w-full p-10">
      <div className="w-full pb-4 flex flex-col sm:flex-row sm:justify-between">
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
        <div className="grid grid-cols-1 gap-4 place-items-center sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-4">
          {products.map((product) => {
            const price = product.current_price?.[0]?.NGN?.[0];
            return (
              <ProductCard
                title={product.name}
                price={price}
                image={
                  product.photos.length > 0
                    ? `https://api.timbu.cloud/images/${product.photos[0].url}`
                    : ""
                }
                key={product.unique_id}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsSections;
