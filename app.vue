<script setup lang="ts">
const {
  golangGlueCodeInitialize,
} = useWebAssemblyDefault();

const {
  callWebAssembly,
  testSum,
  testGenerateMnemonic,
} = useBasic()

onMounted(() => {
  callWebAssembly(golangGlueCodeInitialize)
})


</script>
<template>
  <button @click="testSum">test click</button>
  <button @click="testGenerateMnemonic">test mnemonic</button>
</template>
