<script>
  import { isComponent } from "./util";
  export let toast;
</script>

<style>
  .toast {
    background: white;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    border-left: 3px solid cornflowerblue;
    padding: 1rem;
    margin: 1rem;
    pointer-events: auto;
    max-width: 200px;
    min-width: 100px;
  }
</style>

{#if isComponent(toast.content)}
  <svelte:component this={toast.content} />
{:else}
  <div aria-live="polite" class="toast">{toast.content}</div>
{/if}
