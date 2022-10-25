<script setup>
import LoginForm from "@/components/home/LoginForm.vue";
import MyPokemon from "@/components/home/MyPokemon.vue";
import RandomUser from "@/components/home/RandomUser.vue";

defineProps({
  title: {
    required: false,
    type: String,
  },
});
</script>

<template>
  <div class="main">
    <div class="container">
      <div class="title-container">
        <span class="title" :data-testid="title">{{ title }} </span>
        <span> Demo</span>
      </div>

      <div class="parent">
        <LoginForm />
        <MyPokemon />
        <RandomUser />
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  min-height: 100vh;
  width: 100%;
  background-color: rgb(255, 255, 255);
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 6rem;
}

.title-container {
  margin-bottom: 30px;
  font-weight: bold;
  font-size: 3rem;
}

.title {
  background: -webkit-linear-gradient(120deg, #86b91a 30%, #edd532);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.parent {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
  column-gap: 100px;
}

@media only screen and (max-width: 1000px) {
  .parent {
    flex-direction: column;
  }
}
</style>
