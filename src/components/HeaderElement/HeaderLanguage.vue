<template>
  <div class="relative">
    <button
      href="#"
      class="flex items-center"
      @click="toggleVisibility"
      @keydown.space.exact.prevent="toggleVisibility"
      @keydown.esc.exact="hideDropdown"
      @keydown.shift.tab="hideDropdown"
      @keydown.up.exact.prevent="startArrowKeys"
      @keydown.down.exact.prevent="startArrowKeys"
    >
      <span
        class="mr-1 text-lg not-italic font-normal leading-none normal-case align-middle"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          class="fill-current h-5 w-5"
        >
          <path
            d="M10 .4C4.705.4.399 4.707.399 10S4.705 19.6 10 19.6c5.293 0 9.6-4.307 9.6-9.6S15.293.4 10 .4zm8.188 9.6c0 1.873-.636 3.6-1.696 4.98-.3-.234-.619-.867-.319-1.523.303-.66.382-2.188.312-2.783-.066-.594-.375-2.025-1.214-2.039-.838-.012-1.413-.289-1.911-1.283-1.033-2.068 1.939-2.465.906-3.609-.289-.322-1.783 1.322-2.002-.869-.014-.157.135-.392.336-.636 3.244 1.09 5.588 4.157 5.588 7.762zM8.875 1.893c-.196.382-.713.537-1.027.824-.684.619-.978.533-1.346 1.127-.371.594-1.567 1.449-1.567 1.879s.604.936.906.838c.302-.1 1.099-.094 1.567.07.469.166 3.914.332 2.816 3.244-.348.926-1.873.77-2.279 2.303-.061.225-.272 1.186-.285 1.5-.025.486.344 2.318-.125 2.318-.471 0-1.738-1.639-1.738-1.936s-.328-1.338-.328-2.23c0-.891-1.518-.877-1.518-2.062 0-1.068.823-1.6.638-2.113-.181-.51-1.627-.527-2.23-.59a8.213 8.213 0 0 1 6.516-5.172zM7.424 17.77c.492-.26.542-.596.988-.613.51-.023.925-.199 1.5-.326.51-.111 1.423-.629 2.226-.695.678-.055 2.015.035 2.375.689a8.159 8.159 0 0 1-7.089.945z"
          /></svg
      ></span>
      <span class="font-semibold">{{ $i18n.locale.toUpperCase() }}</span>
      <svg
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        width="24"
        height="24"
      >
        <path
          v-if="isVisible"
          d="M6.582 12.141c-.271.268-.709.268-.978 0s-.272-.701 0-.969l3.908-3.83a.697.697 0 0 1 .979 0l3.908 3.83a.68.68 0 0 1 0 .969.697.697 0 0 1-.979 0L10 9l-3.418 3.141z"
        ></path>
        <path
          v-if="!isVisible"
          d="M13.418 7.859a.695.695 0 0 1 .978 0 .68.68 0 0 1 0 .969l-3.908 3.83a.697.697 0 0 1-.979 0l-3.908-3.83a.68.68 0 0 1 0-.969.695.695 0 0 1 .978 0L10 11l3.418-3.141z"
        ></path>
      </svg>
    </button>
    <transition name="dropdown-fade">
      <ul
        v-on-clickaway="hideDropdown"
        v-if="isVisible"
        ref="dropdown"
        class="absolute z-30 w-48 py-1 mt-2 overflow-hidden font-normal normal-case bg-white border rounded shadow xs:left-0 lg:right-0 lg:z-20"
      >
        <li>
          <a
            href="#"
            @click.prevent="setLocale('ukr')"
            class="flex items-center px-3 py-3 hover:bg-gray-200"
            @keydown.shift.tab="focusPrevious(false)"
            @keydown.up.exact.prevent="focusPrevious(true)"
            @keydown.down.exact.prevent=""
            @keydown.tab.exact="hideDropdown"
            @keydown.esc.exact="hideDropdown"
          >
            <span class="ml-2">{{ $t('header.language.ua') }}</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            @click.prevent="setLocale('eng')"
            ref="account"
            class="flex items-center px-3 py-3 hover:bg-gray-200"
            @keydown.up.exact.prevent=""
            @keydown.tab.exact="focusNext(false)"
            @keydown.down.exact.prevent="focusNext(true)"
            @keydown.esc.exact="hideDropdown"
          >
            <span class="ml-2">{{ $t('header.language.eng') }}</span>
          </a>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'

export default {
  mixins: [clickaway],
  data() {
    return {
      isVisible: false,
      focusedIndex: 0
    }
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible
    },
    hideDropdown() {
      this.isVisible = false
      this.focusedIndex = 0
    },
    startArrowKeys() {
      if (this.isVisible) {
        // this.$refs.account.focus()
        this.$refs.dropdown.children[0].children[0].focus()
      }
    },
    focusPrevious(isArrowKey) {
      this.focusedIndex = this.focusedIndex - 1
      if (isArrowKey) {
        this.focusItem()
      }
    },
    focusNext(isArrowKey) {
      this.focusedIndex = this.focusedIndex + 1
      if (isArrowKey) {
        this.focusItem()
      }
    },
    focusItem() {
      this.$refs.dropdown.children[this.focusedIndex].children[0].focus()
    },
    setLocale(locale) {
      this.$i18n.locale = locale
      this.$router.push({
        params: { lang: locale }
      })
      this.hideDropdown()
    }
  }
}
</script>

<style scoped>
.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: all 0.1s ease-in-out;
}
.dropdown-fade-enter,
.dropdown-fade-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>
