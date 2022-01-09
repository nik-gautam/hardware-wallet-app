import { useEffect, useState } from "react";
import { useGetTransactionsQuery } from "../apis/etherscan";
import { useSelector } from "react-redux";

export default () => {
  const { address } = useSelector((state) => state.wallet);

  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  // const { data, isLoading, isError } = useGetTransactionsQuery({
  //   address: "0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a",
  //   offset: 10,
  // });

  const { data, isLoading, isError, isFetching } = useGetTransactionsQuery(
    {
      address,
      offset: 10,
    },
    {
      refetchOnFocus: true,
      refetchOnMountOrArgChange: true,
    }
  );

  let transactions = [];

  console.log("isFetching", isFetching);

  if (isError || isLoading || isFetching) {
    // error occurred
  } else {
    transactions = data;
  }

  const searchTransactions = async (searchTerm) => {
    try {
      let temp = transactions.filter((trans) => {
        return trans.from.toLowerCase().match(searchTerm.toLowerCase());
      });
      setResults(temp);
    } catch (err) {
      setErrorMessage("Something went wrong!");
    }
  };

  useEffect(() => {
    searchTransactions("");
  }, []);

  return [searchTransactions, results, errorMessage];
};
