<script setup lang="ts">
import { onMounted, reactive, useHeadSafe } from "#imports";
import GitHubIcon from "~/components/icons/GitHubIcon.vue";
import TelegramIcon from "~/components/icons/TelegramIcon.vue";
import Main from "~/components/Main.vue";

useHeadSafe({
  title: "MK26710",
});

const links = reactive({
  telegram: {
    b64: "aHR0cHM6Ly90Lm1lL21rMjY3MTA=",
    normal: "",
  },
  github: {
    b64: "aHR0cHM6Ly9naXRodWIuY29tL21rMjY3MTA=",
    normal: "",
  },
});

onMounted(() => {
  setTimeout(() => {
    links.github.normal = atob(links.github.b64);
    links.telegram.normal = atob(links.telegram.b64);
  }, 100);
});
</script>

<template>
  <Main class="p-4 flex items-center justify-center">
    <div class="flex flex-col">
      <section class="flex flex-col items-center">
        <h1 class="text-2xl font-bold">@mk26710</h1>
        <p class="text-sm text-neutral-400">Software Developer</p>
      </section>

      <section class="flex gap-2 mt-2 self-center">
        <a :href="links.github.normal">
          <GitHubIcon class="size-6" />
        </a>
        <a :href="links.telegram.normal">
          <TelegramIcon class="size-6" />
        </a>
      </section>
    </div>
  </Main>
</template>
