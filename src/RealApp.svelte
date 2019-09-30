<script>
  import { getContext } from "svelte";
  import ToastContext, { TOASTS } from "./ToastContext.svelte";
  import ToastContainer from "./ToastContainer.svelte";

  import CustomToast from "./CustomToast.svelte";

  const toasts = getContext(TOASTS);

  let count = 0;

  function addToast(position = "bottom-center") {
    count++;
    toasts.addToast(count, { position });
  }

  function addToastWithCustomComponent() {
    toasts.addToast(CustomToast);
  }
</script>

<main>
  <button on:click={() => addToast('top-left')}>Top Left</button>
  <button on:click={() => addToast('top-center')}>Top Center</button>
  <button on:click={() => addToast('top-right')}>Top Right</button>
  <button on:click={() => addToast('bottom-left')}>Bottom Left</button>
  <button on:click={() => addToast()}>Bottom Center</button>
  <button on:click={() => addToast('bottom-right')}>Bottom Right</button>
  <button on:click={addToastWithCustomComponent}>Custom Toast</button>
</main>

<ToastContainer />
