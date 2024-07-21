<script setup lang="ts">
import { useHeadSafe } from '#imports';

useHeadSafe({
  bodyAttrs: {
    class: "bg-neutral-900 text-neutral-200"
  }
})
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtPage />
</template>
