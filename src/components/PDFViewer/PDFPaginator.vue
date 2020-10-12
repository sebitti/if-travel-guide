<template>
  <div class="pdf-paginator text-black font-medium">
    <template v-if="pageCount">
      <input
        class="border w-13 p-1"
        :value="value"
        @input="input"
        min="1"
        :max="pageCount"
        type="number"
      />
      / <span>{{ pageCount }}</span>
    </template>
    <input v-else type="number" />
  </div>
</template>

<script>
export default {
  name: 'PDFPaginator',

  props: {
    value: Number,
    pageCount: Number
  },

  methods: {
    input(event) {
      this.$emit('input', parseInt(event.target.value, 10))
    }
  },

  watch: {
    pageCount() {
      this.$emit('input', 1)
    }
  }
}
</script>
