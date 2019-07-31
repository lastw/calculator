// переплата — это все отданные деньги минус сумма кредита

import { getMonthlyPayment } from "./getMonthlyPayment";

export function getOverPay(value, annualRate, numberOfMonth) {
  const payment = getMonthlyPayment(value, annualRate, numberOfMonth);

  return payment * numberOfMonth - value;
}
