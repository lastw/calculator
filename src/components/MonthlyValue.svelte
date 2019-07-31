<script>
  import { getMonthlyPayment } from "../utils/getMonthlyPayment";
  import { roundMoney } from "../utils/roundMoney";

  export let sum;
  export let percent;
  export let length;

  $: payment = getMonthlyPayment(sum, percent / 100, length);
</script>

<style>
  h1 {
    margin: 0;
  }

  small {
    font-size: 16px;
  }
</style>

<h1>{roundMoney(payment)}</h1>
<small>Ежемесячный платёж</small>
