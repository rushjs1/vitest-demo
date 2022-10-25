<script setup>
import { ref, onMounted } from "vue";
const name = ref("");

const emit = defineEmits(["formSubmitted", "greet"]);

const onSubmit = () => {
  console.log(name.value);
  emit("formSubmitted", { name: name.value });
};

onMounted(() => {
  emit("greet", "helloooo");
});
</script>

<template>
  <div>
    <div class="title">
      <span>Assert custom events and their payloads</span>
    </div>
    <div>
      {{ name }}
    </div>
    <form @submit.prevent="onSubmit" class="form">
      <input
        data-testid="name-input"
        type="text"
        v-model="name"
        class="form-input"
      />
      <button
        type="submit"
        class="submit-btn"
        data-testid="submit-btn"
        @click="onSubmit"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<style scoped>
.form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 10px;
  width: 300px;
}

.form .submit-btn {
  background-color: rgb(245, 245, 245);
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  margin-right: 10px;
  margin-left: 10px;
  cursor: pointer;
  border: none;
}

.submit-btn:hover {
  background-color: rgb(230, 230, 230);
}

.form-input {
  width: 100%;
  border: 1px solid rgb(226, 226, 226);
  border-radius: 3px;
  padding: 6px;
}

.form-input:focus {
  outline: none;
}

.title {
  font-weight: 700;
  font-size: 1.3rem;
  margin-bottom: 10px;
}
</style>
