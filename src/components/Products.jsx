import ProductsCard from "./ProductsCard";
import { useGetProductsQuery } from "../api/apiSlice";

const Products = () => {
  const { data: products, isLoading, isError, error } = useGetProductsQuery();
  if (isLoading) {
    return <p>Is loading </p>;
  } else if (isError) {
    return <p>{error}</p>;
  }

  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl bg-black text-white py-2 w-80 text-center ">shopping everyday</h1>
        <span className="w-20 h-[3px] bg-black"></span>
        <p className="max-w-[700px] text-gray-600 text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore ipsum voluptatum animi molestias dicta
          quaerat labore, aspernatur eum architecto veritatis, omnis cumque, sapiente beatae? Officia fugiat saepe
          molestias a dolores!
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10 ">
        {products.map(product => (
          <ProductsCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};
export default Products;
