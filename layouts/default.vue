<template>
  <div class="container">
    <nuxt/>
  </div>
</template>

<script>
export default {
  mounted() {

  }
};
</script>

<style>
.container {
  width: 100%;
}

.button,
.button:visited {
  display: inline-block;
  color: #3b8070;
  letter-spacing: 1px;
  background-color: #fff;
  border: 2px solid #3b8070;
  text-decoration: none;
  text-transform: uppercase;
  padding: 15px 45px;
}

.button:hover,
.button:focus {
  color: #fff;
  background-color: #3b8070;
}

.title {
  color: #505153;
  font-weight: 300;
  font-size: 2.5em;
  margin: 0;
}
</style>
