import "@/app/page.css";
import ProductsViewer from "@/app/components/productsViewer";

export default function Home() {
  return (
    <>
      <header className="block mb-20 align-middle lg:flex max-w-screen-2xl h-1/2 items-center justify-between">
        <img
          className="phone-shado lg:hidden w-48"
          src="/img/phone.webp"
          alt="Phone img"
        />
        <div className="block lg:pt-22">
          <h1 className="text-7xl font-bold">The best products</h1>
          <h2 className=" mt-4 text-3xl">For the best customers</h2>
        </div>

        <img
          className="phone-shadow hidden lg:block"
          src="/img/phone.webp"
          alt="Phome img"
        />
      </header>
      <ProductsViewer />
    </>
  );
}
