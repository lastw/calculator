<script>
  import { getMonthlyPayment } from "../utils/getMonthlyPayment";
  import { getOverPay } from "../utils/getOverPay";
  import { roundMoney } from "../utils/roundMoney";

  export let sum;
  export let percent;
  export let length;

  let label;
  let values;

  $: {
    switch (true) {
      case !sum:
        label = "Сумма";
        values = [
          1500000,
          2000000,
          2500000,
          3000000,
          3500000,
          4000000,
          4500000,
          5000000
        ].map(roubles => {
          return {
            value: `${roubles / 1000000} млн`,
            payment: getMonthlyPayment(roubles, percent / 100, length),
            overpay: getOverPay(roubles, percent / 100, length)
          };
        });
        break;
      case !percent:
        label = "Ставка";
        values = [9.5, 10, 10.5, 11, 11.5, 12].map(pcts => {
          return {
            value: pcts,
            payment: getMonthlyPayment(sum, pcts / 100, length),
            overpay: getOverPay(sum, pcts / 100, length)
          };
        });
        break;
      case !length:
        label = "Лет";
        values = [5, 10, 15, 20, 25, 30].map(years => {
          return {
            value: years,
            payment: getMonthlyPayment(sum, percent / 100, years * 12),
            overpay: getOverPay(sum, percent / 100, years * 12)
          };
        });
        break;
      default:
        label = "Ничего";
        values = [];
    }
  }
</script>

<style>
  .grid {
    display: grid;
    grid-template-columns: fit-content(50%) fit-content(50%) auto;
    gap: 16px;
  }

  .grid h2 {
    font-size: 16px;
    margin: 0;
  }
</style>

<div class="grid">
  <h2>{label} 🤔</h2>
  <h2>Месячный платёж 😱</h2>
  <h2>Переплата 😱😱😱</h2>

  {#each values as { value, payment, overpay }}
    <div>{value}</div>
    <div>{roundMoney(payment)}</div>
    <div>{roundMoney(overpay)}</div>
  {/each}
</div>
