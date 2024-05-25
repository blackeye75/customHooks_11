import { useEffect, useState } from "react";

function useCurencyInfo(curency) {
  const [data, setdata] = useState({});
  useEffect(() => {
    const data = fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${curency}.json`
    )
      .then((res) =>{return res.json()})     //return in curly braces
      .then((res) => setdata(res[curency])) 
  }, [curency]);
  // console.log(data);
  return data;
}
export default useCurencyInfo;
