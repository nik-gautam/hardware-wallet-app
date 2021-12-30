import moment from 'moment';

const getTransactions = async() => {
    let module = "account";
    let action = "txlist";
    let address = "0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a";
    let startBlock = 0;
    let endBlock = 99999999;
    let page = 1;
    let offset = 10;
    let sort = "asc";
    let apikey = "YourApiKeyToken";

    const myURL = `https://api.etherscan.io/api?module=${module}&action=${action}&address=${address}&startblock=${startBlock}&endblock=${endBlock}&page=${page}&offset=${offset}&sort=${sort}&apikey=${apikey}`;

    let response = await fetch(myURL);
    response = await response.json();
    return response;
}

// let mydata = [];
// getTransactions()
//     .then(data => data.result)
//     .then(data => {
//         mydata = [...data];
//         console.log(mydata);
//     });

export default getTransactions;