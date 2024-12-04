import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";
import ProductsView from "@/components/ProductsView";
import BlackFridayBanner from "@/components/BlackFridayBanner";

export const dynamic = "force-static";
export const revalidate = 60;   //revalidate every 60 sec

export default async function Home() {
  const products = await getAllProducts();
  const categories = await getAllCategories();


  return (
    <div>
      <BlackFridayBanner />

      <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4" >
        {/* render products */}
        <ProductsView products={products} categories={categories} />
      </div>
    </div>
  );
}
 