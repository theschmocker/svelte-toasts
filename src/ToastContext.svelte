<script context="module">
  export const TOASTS = {};
</script>

<script>
  import { setContext } from "svelte";
  import { writable } from "svelte/store";

  const MAX_TOASTS_VISIBLE = 1;

  const toasts = writable([]);

  setContext(TOASTS, {
    addToast(content, options = {}) {
      const toast = {
        content,
        position: "top-left",
        ...options
      };

      toasts.update(toasts => [...toasts, toast]);

      setTimeout(() => {
        toasts.update(toasts => toasts.filter(t => t !== toast));
      }, 3000);
    },
    _toasts: toasts
  });
</script>

<slot />
