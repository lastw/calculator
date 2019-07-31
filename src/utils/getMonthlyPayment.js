// https://www.banki.ru/wikibank/annuitetnyie_plateji_po_kreditu/

export function getMonthlyPayment(value, annualRate, numberOfMonth) {
  const i = annualRate / 12;
  const n = numberOfMonth;
  const K = (i * (1 + i) ** n) / ((1 + i) ** n - 1);
  return K * value;
}
