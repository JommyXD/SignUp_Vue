<template>
  <div>
    <input
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="updateValue($event.target.value)"
      :class="{ active: check }"
    />
  </div>
</template>

<script>
export default {
  name: "AtomInput",
  props: {
    placeholder: String,
    type: String,
    modelValue: String,
    check: Boolean,
  },
  methods: {
    updateValue(value) {
      this.$emit("input", value);
    },
  },
};
</script>

<style scoped>
input {
  width: 280px;
  height: 20px;
  border: none;
  border-bottom: 1px solid #e1e1e1;
  margin-bottom: 30px;
}
.active {
  border-bottom: 1px solid red;
}
</style>
