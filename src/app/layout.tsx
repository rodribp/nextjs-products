import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "flowbite";
import "./globals.css";
import SearchBar from "@/app/components/searchBar";
import Icon from "@/app/components/icons";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fakestore",
  description: "Fakestore using fakestoreapi.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="lg:px-6 flex justify-between items-center py-6 fixed z-20 bg-transparent w-full backdrop-blur">
          <div className="flex items-center gap-2">
            <Icon
              name="shopping-bag"
              size={48}
              color="white"
              type="solid"
            ></Icon>
            <p className="text-2xl font-bold">FakeStore</p>
          </div>

          <ul className="hidden lg:flex mr-2">
            <li>
              <SearchBar />
            </li>
          </ul>
        </nav>
        <main className="flex min-h-screen flex-col items-center justify-between pt-28">
          {children}
        </main>

        <footer className="bg-transparent rounded-lg shadow dark:bg-gray-900 m-4">
          <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
              <div className="flex items-center gap-2">
                <Icon
                  name="shopping-bag"
                  size={48}
                  color="white"
                  type="solid"
                ></Icon>
                <p className="text-2xl font-bold">FakeStore</p>
              </div>
              <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                  <a href="#" className="hover:underline me-4 md:me-6">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline me-4 md:me-6">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline me-4 md:me-6">
                    Licensing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="https://flowbite.com/" className="hover:underline">
                Flowbite™
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </footer>

        <script src="../node_modules/flowbite/dist/flowbite.min.js"></script>
      </body>
    </html>
  );
}
