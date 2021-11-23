<script>
import Box from './Box.vue'
import Combination from './Combination.vue'
import Contrast from './Contrast.vue'

export default {
  name: 'Combinations',
  components: {
    Box,
    Combination,
    Contrast,
  },
  props: {
    palettes: {
      type: Object,
      required: true,
    },
  },
}
</script>

<template>
  <ul class="combinations">
    <li
      v-for="(palette, name) in palettes" 
      v-bind:key="name"
    >
      <h3>{{ name.toLowerCase() }}</h3>
      <Combination
        v-bind:first="palette['200'].value"
        v-bind:second="palette['500'].value"
        v-bind:third="palette['800'].value"
      />
      <h4>Light</h4>
      <Box
        v-bind:background="palette['200'].value"
        v-bind:border="palette['500'].value"
        v-bind:color="palette['800'].value"
      >
        <Contrast
          v-bind:styled="false"
          v-bind:value="palette['200'].value"
          v-bind:versus="palette['800'].value"
        />
      </Box>
      <h4>Dark</h4>
      <Box
        v-bind:background="palette['800'].value"
        v-bind:border="palette['500'].value"
        v-bind:color="palette['200'].value"
      >
        <Contrast
          v-bind:styled="false"
          v-bind:value="palette['200'].value"
          v-bind:versus="palette['800'].value"
        />
      </Box>
    </li>
  </ul>
</template>
