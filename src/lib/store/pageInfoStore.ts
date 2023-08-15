import { writable } from "svelte/store";

export let pageInfo = writable<Record<string, string | boolean>>({
  isPageTop: true,
  activeSection: "",
});
