"use client";

import ProductsCard from "./productsCard";
import { useState, useEffect } from "react";
import { getAllProducts, Product } from "@/api/apiMethods";
import { RangeSlider, Label, Checkbox } from "flowbite-react";
interface Filter {
  category?:
    | "All"
    | "women's clothing"
    | "men's clothing"
    | "electronics"
    | "jewelery";
  rating?: number;
  price?: number;
}

export default function ProductsViewer() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [filterPrice, setFilterPrice] = useState<number>(700);
  const [filterRate, setFilterRate] = useState<number>(0);

  function handleFilterPrice(e: React.ChangeEvent<HTMLInputElement>) {
    setFilterPrice(Number(e.target.value));
  }

  function handleFilterRate(e: React.ChangeEvent<HTMLInputElement>) {
    setFilterRate(Number(e.target.value));
  }
  

  async function handleGetAllProducts() {
    const data = await getAllProducts();
    setProducts(data);
    setFilteredProducts(data);
  }

  useEffect(() => {
    handleGetAllProducts();
  }, []);

  useEffect(() => {
    const lookedProducts: Product[] = [];
    products.filter((product) => {
      if (product.price > filterPrice) {
        return;
      }

      if (product.rating.rate < filterRate) {
        return;
      }

      lookedProducts.push(product);
    });

    setFilteredProducts(lookedProducts);
  }, [filterPrice, filterRate]);

  return (
    <section className="max-w-screen-xl w-full">
      <div className="flex justify-between gap-4 items-center">
        <div className="w-full">
          <Label htmlFor="price-range">Price: ${filterPrice}</Label>
          <RangeSlider
            id="price-range"
            onChange={handleFilterPrice}
            value={filterPrice}
            min={0}
            max={700}
          />
        </div>
        <div className="w-1/2">
          <Label htmlFor="price-range">Rating: {filterRate}</Label>
          <RangeSlider
            id="price-range"
            onChange={handleFilterRate}
            value={filterRate}
            min={0}
            max={5}
          />
        </div>
      </div>
      <div className="block mt-4 space-y-4 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductsCard
              key={product.id}
              name={product.title}
              rate={product.rating.rate}
              ratedBy={product.rating.count}
              price={product.price}
              image={product.image}
            />
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </section>
  );
}
