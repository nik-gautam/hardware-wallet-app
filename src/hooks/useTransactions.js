import { useEffect, useState } from 'react';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    let transactions = [{
            name: "Quin Townsend",
            date: "26 Jul 2021",
            crypto: 0.93,
            rupee: "25 124",
        },
        {
            name: "Reagan Hunter",
            date: "11 Apr 2022",
            crypto: 0.35,
            rupee: "16 783",
        },
        {
            name: "Raymond Holman",
            date: "3 Jun 2022",
            crypto: 0.34,
            rupee: "20 164",
        },
        {
            name: "Benedict Hatfield",
            date: "11 Oct 2021",
            crypto: 0.22,
            rupee: "39 427",
        },
        {
            name: "Levi Conley",
            date: "11 Oct 2022",
            crypto: 0.43,
            rupee: "89 570",
        },
        {
            name: "Quin Townsend",
            date: "26 Jul 2021",
            crypto: 0.93,
            rupee: "25 124",
        },
        {
            name: "Reagan Hunter",
            date: "11 Apr 2022",
            crypto: 0.35,
            rupee: "16 783",
        },
        {
            name: "Raymond Holman",
            date: "3 Jun 2022",
            crypto: 0.34,
            rupee: "20 164",
        },
        {
            name: "Benedict Hatfield",
            date: "11 Oct 2021",
            crypto: 0.22,
            rupee: "39 427",
        },
        {
            name: "Levi Conley",
            date: "11 Oct 2022",
            crypto: 0.43,
            rupee: "89 570",
        },
    ];

    transactions = transactions.map((trans) => {
        let imageURL = trans.name.replace(" ", "");
        return {
            id: Math.floor(Math.random() * 99999),
            imageURL: `https://robohash.org/${imageURL}?size=100x100`,
            name: trans.name,
            date: trans.date,
            cryptoAmount: trans.crypto,
            rupeeAmount: trans.rupee,
        };
    });

    const searchTransactions = async(searchTerm) => {
        try {
            let temp = transactions.filter(trans => {
                return trans.name.match(searchTerm);
            });
            setResults(temp);
        } catch (err) {
            setErrorMessage("Something went wrong!");
        }
    }

    useEffect(() => {
        searchTransactions("");
    }, []);

    return [searchTransactions, results, errorMessage];
}