<template>
  <div class="container">
    <todo-app />
  </div>

</template>

<script>
import TodoApp from './components/TodoApp.vue'

export default {
  components: { TodoApp },
  name: 'App',
}
</script>

<style>
body {
  background-image: url(./assets/bg-desktop-dark.jpg);
  background-repeat: no-repeat;
  background-size: 100% 200px;
  background-color:#222222
}

.container {
  margin-top: 70px;
  max-width: 700px;
}
</style>