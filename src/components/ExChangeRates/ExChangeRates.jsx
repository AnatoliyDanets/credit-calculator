import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import s from "./ExChangeRates.module.css";

export default function ExChangeRates() {
  const [currency, setCurrency] = useState(
    JSON.parse(window.localStorage.getItem("exchange")) ?? []
  );
  const [status, setStatus] = useState(true);
  const getExChange = async () => {
    try {
      const { data } = await axios.get("https://api.monobank.ua/bank/currency");
      const exchange = data.filter(
        (el) =>
          (el.currencyCodeA === 840 && el.currencyCodeB === 980) ||
          (el.currencyCodeA === 978 && el.currencyCodeB === 980)
      );
      if (!data) {
        setStatus(true);
        return;
      }
      return (setCurrency(exchange), setStatus(false));
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
  }, [currency]);
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
            {currency.length > 0 ? currency.map(({ currencyCodeA, rateBuy, rateSell }, i) => {
              return (
                <tr key={i}>
                  <td>{currencyCodeA === 840 ? "USD" : "EUR"}</td>
                  <td>{Number(rateBuy).toFixed(2)}</td>
                  <td>{Number(rateSell).toFixed(2)}</td>
                </tr>
              );
            }) : <h3>No information</h3>}
          </tbody>
        </table>
      )}
    </div>
  );
}
