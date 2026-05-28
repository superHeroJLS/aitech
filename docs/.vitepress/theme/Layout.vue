<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
</script>

<template>
  <DefaultTheme.Layout>
    <template #layout-bottom>
      <div class="icp-beian">
        <a
          href="https://beian.miit.gov.cn/"
          target="_blank"
          rel="noopener noreferrer"
        >赣ICP备2026011221号-1</a>
      </div>
    </template>
  </DefaultTheme.Layout>
</template>
