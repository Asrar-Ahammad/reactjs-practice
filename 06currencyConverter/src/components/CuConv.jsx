// src/InputBox.js
import React, { useState, useEffect } from "react";

const InputBox = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [exchangeRate, setExchangeRate] = useState(0);
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    fetch(`https://open.er-api.com/v6/latest/${fromCurrency}`)
      .then((response) => response.json())
      .then((data) => {
        setExchangeRate(data.rates[toCurrency]);
        setCurrencies(Object.keys(data.rates));
      });
  }, [fromCurrency, toCurrency]);

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <>
      <div className="h-screen w-full flex items-center justify-center">
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-xl space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Currency Converter
          </h2>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
                min={0}
              />
              <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
                className="px-3 py-2 border rounded-md"
              >
                {currencies.map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center justify-center">
              <button
                onClick={handleSwap}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition"
              >
                Swap
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
              >
                {currencies.map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <h3 className="text-xl text-gray-700">
            {amount} {fromCurrency} is equal to{" "}
            {(amount * exchangeRate).toFixed(2)} {toCurrency}
          </h3>
        </div>
      </div>
    </>
  );
};

export default InputBox;
