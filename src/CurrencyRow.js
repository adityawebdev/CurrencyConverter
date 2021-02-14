import React from "react";

function CurrencyRow(props) {
  const {
    currencyOptions,
    onChangeCurrency,
    selectedCurrency,
    amount,
    onChangeAmount,
  } = props;
  return (
    <>
      <input
        className="input"
        type="number"
        value={amount}
        onChange={onChangeAmount}
      />
      <select value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyOptions.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
}

export default CurrencyRow;
