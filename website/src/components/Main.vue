<script setup lang="ts">
import type { ClassValue } from "clsx";
import { cn } from "~/lib/cn";
</script>

<template>
  <main :class="cn('min-h-screen', $attrs.class as ClassValue)">
    <slot />
  </main>
</template>
