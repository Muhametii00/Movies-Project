import { useQuery } from "react-query";
import { ErrorMessage } from "../components/shared/ErrorMessage";
import { getAllUsers } from "../api/Users/users.client";
import { UsersTable } from "../components/Users/UsersTable";
import { MutatingDots } from "react-loader-spinner";

export const Users = () => {
  const { data, isLoading, error } = useQuery("users", getAllUsers);
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
      <>
        {error && (
          <ErrorMessage message="This page is not avaliable for the moment, please try again later!" />
        )}
      </>
      {data && <UsersTable data={data.data.users} />}
    </>
  );
};
