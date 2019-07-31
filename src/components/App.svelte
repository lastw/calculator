<script>
  import MonthlyGraph from "./MonthlyGraph.svelte";
  import MonthlyValue from "./MonthlyValue.svelte";

  const defaults = {
    sum: 3500000,
    percent: 11,
    length: 120
  };

  let { sum, percent, length } = defaults;

  const unsetSum = () => {
    sum = undefined;
    percent = percent || defaults.percent;
    length = length || defaults.length;
  };
  const unsetPercent = () => {
    percent = undefined;
    sum = sum || defaults.sum;
    length = length || defaults.length;
  };
  const unsetLength = () => {
    length = undefined;
    sum = sum || defaults.sum;
    percent = percent || defaults.percent;
  };

  $: arr = [sum, percent, length];
  $: every = arr.every(v => v > 0);

  $: invalid = arr.some(v => v < 0 || v === 0);
</script>

<style>
  :global(body) {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    margin: 0;
    padding: 32px;
  }

  .grid {
    display: grid;
    grid-template-columns: 25% 25% 25%;
    gap: 16px;
    margin-bottom: 32px;
  }

  @media (max-width: 1024px) {
    .grid {
      grid-template-columns: 100%;
    }
  }

  label {
    font-size: 24px;
    color: #666;
  }

  input {
    display: block;
    padding: 6px 0;
    border: none;
    font-size: 24px;
    width: 100%;
    outline: none;
  }

  .small {
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
    display: block;
    color: #666;
    /* text-transform: uppercase; */
  }
</style>

<main>
  <div class="grid">
    <div>
      <label>Сумма</label>
      <input type="number" bind:value={sum} min={1} placeholder="..." />
      <span class="small" on:click={unsetSum}>не знаю →</span>
    </div>
    <div>
      <label>Ставка, % в год</label>
      <input type="number" bind:value={percent} min={1} placeholder="..." />
      <span class="small" on:click={unsetPercent}>не знаю →</span>
    </div>
    <div>
      <label>Срок, мес</label>
      <input type="number" bind:value={length} min={1} placeholder="..." />
      <span class="small" on:click={unsetLength}>не знаю →</span>
    </div>
  </div>
  {#if invalid}
    <h1>Are you самый умный? Вводи нормальные значения</h1>
  {/if}
  {#if every}
    <MonthlyValue {sum} {percent} {length} />
  {:else}
    <MonthlyGraph {sum} {percent} {length} />
  {/if}

</main>
