<script>
import Color from 'color'
import palettes from '../../palettes.json'

export default {
  name: 'Contrast',
  props: {
    value: {
      type: String,
      required: true,
    },
    styled: {
      type: Boolean,
      default: true,
    },
    versus: {
      type: String,
      required: true,
    },
  },
  computed: {
    background() {
      if (this.contrast >= 7) {
        return palettes.green['200'].value;
      } else if (this.contrast >= 4.5) {
        return palettes.yellow['200'].value;
      } else {
        return palettes.red['200'].value;
      }
    },
    color() {
      if (this.contrast >= 7) {
        return palettes.green['800'].value;
      } else if (this.contrast >= 4.5) {
        return palettes.yellow['800'].value;
      } else {
        return palettes.red['800'].value;
      }
    },
    contrast() {
      const ratio = Color(this.value).contrast(Color(this.versus));
      return ratio.toFixed(2);
    },
    style() {
      return this.styled  ? `background: ${this.background}; color: ${this.color}` : '';
    },
  },
}
</script>

<template>
  <span
    class="contrast"
    v-bind:style="style"
  >
    {{ contrast }}
  </span>
</template>
