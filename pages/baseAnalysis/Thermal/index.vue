<template>
  <div>
    <RootPage :language="language" default-active="2-2" :default-openeds="['2']">
      <div class="Thermal" slot="page"></div>
    </RootPage>
  </div>
</template>

<script>
  import RootPage from "@pages/index.vue";

  export default {
    name: "Thermal",
    components: {
      RootPage
    },
    computed: {
      languageDatas() {
        return this.$store.getters.languageDatas;
      },
    },
    async asyncData(ctx) {
      const language = ctx.query.language || 'cn';
      return {
        language: language,
      }
    },
  }
</script>

<style lang="less">
  .Thermal {

  }
</style>
