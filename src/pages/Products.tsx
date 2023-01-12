import { MutatingDots } from "react-loader-spinner";
import { useQuery } from "react-query";
import { getAllProducts } from "../api/products/poroducts.client";
import { Product } from "../api/products/products";
import { ProductsTable } from "../components/Products/ProductsTable";
import { ErrorMessage } from "../components/shared/ErrorMessage";

export const Products = () => {
  const { data, isLoading, error } = useQuery("products", getAllProducts);

  return (
    <>
      {isLoading && (
        <MutatingDots
          height="100"
          width="100"
          color="#4fa94d"
          secondaryColor="#4fa94d"
          radius="15.5"
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          wrapperClass=""
          visible={true}
        />
      )}
      {error && (
        <ErrorMessage message="This page is not avaliable for the moment, please try again later!" />
      )}
      {data && <ProductsTable data={data.data.products} />}
    </>
  );
};
