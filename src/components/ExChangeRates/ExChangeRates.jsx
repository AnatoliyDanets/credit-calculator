import { useState } from "react";
import { useEffect } from "react";
import s from "./ExChangeRates.module.css";

export default function ExChangeRates() {
  const [currency, setCurrency] = useState(
    JSON.parse(window.localStorage.getItem("exchange")) ?? []
  );
  const [status, setStatus] = useState(true);
  const getExChange = async () => {
    try {
      const res = await fetch(
        " https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5"
      );
      const data = await res.json();
      if (!data) {
        setStatus(true);
      }
      setCurrency(data);
      setStatus(false);
    } catch (error) {
      setStatus(false);
      console.log(error.message);
    }
  };
  useEffect(() => {
    const localCurrency = window.localStorage.setItem(
      "exchange",
      JSON.stringify(currency)
    );
    if (localCurrency === undefined) {
      getExChange();
    } else {
      return localCurrency;
    }
    // eslint-disable-next-line
  }, []);
  return (
    <div className={s.currency}>
      {status ? (
        <div className={s.loader}></div>
      ) : (
        <table>
          <thead>
            <tr>
              <td>Currency</td>
              <td>Buy UAH</td>
              <td>Sale UAH</td>
            </tr>
          </thead>
          <tbody>
            {currency.map(({ ccy, buy, sale },i) => {
              return (
                <tr key={i}>
                  <td>{ccy}</td>
                  <td>{Number(buy).toFixed(2)}</td>
                  <td>{Number(sale).toFixed(2)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
