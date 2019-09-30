<script>
  import { getContext } from "svelte";
  import { fly, fade } from "svelte/transition";
  import { flip } from "svelte/animate";

  import { TOASTS } from "./ToastContext.svelte";
  import Toast from "./Toast.svelte";

  import { camelCase } from "./util";

  const { _toasts } = getContext(TOASTS);

  let toasts = {
    topLeft: [],
    topCenter: [],
    topRight: [],
    bottomLeft: [],
    bottomCenter: [],
    bottomRight: []
  };

  $: toasts = $_toasts.reduce(
    (toasts, toast) => {
      const position = camelCase(toast.position);

      return {
        ...toasts,
        [position]: [...toasts[position], toast]
      };
    },
    {
      topLeft: [],
      topCenter: [],
      topRight: [],
      bottomLeft: [],
      bottomCenter: [],
      bottomRight: []
    }
  );

  const rows = ["top", "bottom"];
  const columns = ["Left", "Center", "Right"];
</script>

<style>
  .toast-container {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: transparent;
    pointer-events: none;
    overflow-y: hidden;
  }

  .toast-row {
    position: absolute;
    left: 0;
    right: 0;
  }

  .toast-row:first-child {
    top: 0;
  }
  .toast-row:last-child {
    bottom: 0;
  }

  .toast-group {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .toast-group:first-child {
    align-items: flex-start;
  }

  .toast-group:last-child {
    align-items: flex-end;
  }

  @media (min-width: 700px) {
    .toast-row {
      display: flex;
      justify-content: space-between;
    }

    .toast-group {
      width: 33%;
    }

    .toast-row:last-child .toast-group {
      justify-content: flex-end;
    }
  }
</style>

<div class="toast-container">
  {#each rows as row}
    <div class="toast-row">
      {#each columns as column}
        <div class="toast-group">
          {#each toasts[`${row}${column}`] as toast (toast)}
            <div
              in:fly={{ key: toast, duration: 300, y: row === 'bottom' ? 100 : -100 }}
              out:fade={{ key: toast, duration: 300 }}
              animate:flip={{ duration: 300 }}>
              <Toast {toast} />
            </div>
          {/each}
        </div>
      {/each}
    </div>
  {/each}
</div>
