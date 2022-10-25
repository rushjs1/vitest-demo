<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
const email = ref([]);

onMounted(() => {
  //using axios
  axios.get("https://randomuser.me/api?seed=7f32cc7122d9675c").then((res) => {
    console.log(res);
    email.value = res.data.results[0].email;
  });

  //using fetch
  /*  fetch("https://randomuser.me/api?seed=7f32cc7122d9675c")
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res);
      email.value = res.results[0].email;
    });
}); */
});
</script>

<template>
  <div>
    <div class="title">
      <span data-testid="title"> Assert data loads on mount </span>
    </div>
    <div>
      <span :data-testid="email">
        {{ email }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.title {
  font-weight: 700;
  font-size: 1.3rem;
  margin-bottom: 10px;
}
</style>
