import numeral from 'numeral';

export const formatCurrency = (value: number, currency = "IDR") => {
  const [integer, decimal] = String(value).split(".");
  const integerFormat = numeral(integer).format("0,0").replaceAll(",", ".");
  const valueString = [integerFormat, decimal]
    .filter((item) => !!item)
    .join(",");
  const CURRENCIES: { [key: string]: string } = {
    IDR: "Rp",
  };

  return `${CURRENCIES[currency]}${valueString}`;
};
