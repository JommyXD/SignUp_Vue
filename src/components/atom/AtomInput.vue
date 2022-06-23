<template>
  <div><input :type="type" :placeholder="placeholder" /></div>
</template>

<script>
export default {
  name: "AtomInput",
  props: {
    placeholder: String,
    type: String,
  },
};
</script>

<style scope>
input {
  width: 300px;
  height: 20px;
  border: none;
  border-bottom: 1px solid #e1e1e1;
}
</style>
