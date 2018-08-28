<template>
  <div class="IndependentStore">
    <RootPage :language="language" default-active="1-2" :default-openeds="['1']">
      <div class="overview-wrap" slot="page">

      </div>
    </RootPage>
  </div>
</template>

<script>
  import RootPage from "@pages/index.vue";

  export default {
    components: {
      RootPage
    },
    async asyncData(ctx) {
      const language = ctx.query.language || 'cn';
      return {
        language: language
      }
    }
  }
</script>

<style lang="less">
  .IndependentStore {

  }
</style>
