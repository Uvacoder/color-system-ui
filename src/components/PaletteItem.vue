<script>
import Color from 'color'
import Contrast from './Contrast.vue'
import Sample from './Sample.vue'
import Swatch from './Swatch.vue'

export default {
  name: 'PaletteItem',
  components: {
    Contrast,
    Sample,
    Swatch,
  },
  props: {
    scale: {
      type: String,
      required: true,
    },
    paletteName: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
  computed: {
    color() {
      return Color(this.value);
    },
    name() {
      return `${this.paletteName}-${this.scale}`;
    },
  },
}
</script>

<template>
  <tr>
    <th>
      <Swatch
        v-bind:color="value"
        v-bind:palette-name="paletteName"
        v-bind:scale="scale"
      />
    </th>
    <td>
      <code>
        {{ color.hex() }}
      </code>
    </td>
    <td>
      <code>
        {{ color.hsl() }}
      </code>
    </td>
    <td>
      <code>
        {{ color.rgb() }}
      </code>
    </td>
    <td>
      <Sample
        background="black"
        v-bind:color="value"
      />
      <Contrast
        v-bind:value="value"
        versus="black"
      />
    </td>
    <td>
      <Sample
        background="white"
        v-bind:color="value"
      />
      <Contrast
        v-bind:value="value"
        versus="white"
      />
    </td>
  </tr>
</template>
