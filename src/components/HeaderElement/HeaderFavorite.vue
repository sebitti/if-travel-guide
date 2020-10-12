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
            d="M17.19 4.155c-1.672-1.534-4.383-1.534-6.055 0L10 5.197 8.864 4.155c-1.672-1.534-4.382-1.534-6.054 0-1.881 1.727-1.881 4.52 0 6.246L10 17l7.19-6.599c1.88-1.726 1.88-4.52 0-6.246z"
          /></svg
      ></span>
      <span class="font-semibold">{{ $t('header.favorite.title') }}</span>
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
        class="absolute normal-case font-normal xs:left-0 lg:right-0 bg-white shadow overflow-hidden rounded w-48 border mt-2 py-1 lg:z-20"
      >
        <li class="border-b border-gray-400">
          <a
            href="#"
            class="flex items-center px-3 py-3 hover:bg-gray-200"
            @keydown.tab.exact="focusNext(false)"
            @keydown.shift.tab="focusPrevious(false)"
            @keydown.up.exact.prevent="focusPrevious(true)"
            @keydown.down.exact.prevent="focusNext(true)"
            @keydown.esc.exact="hideDropdown"
          >
            <span class="ml-2"
              ><router-link to="/MyFavoriteEmpty">{{
                $t('header.favorite.my_favorite')
              }}</router-link></span
            >
          </a>
        </li>
        <li v-show="user">
          <a
            href="#"
            class="flex items-center px-3 py-3 hover:bg-gray-200"
            @keydown.tab.exact="focusNext(false)"
            @keydown.shift.tab="focusPrevious(false)"
            @keydown.up.exact.prevent="focusPrevious(true)"
            @keydown.down.exact.prevent="focusNext(true)"
            @keydown.esc.exact="hideDropdown"
          >
            <span class="ml-2">
              <router-link to="/MyFavorite">{{
                $t('header.favorite.my_favorite')
              }}</router-link>
            </span>
          </a>
        </li>
        <li v-hide="user">
          <a
            href="#"
            class="flex items-center px-3 py-3 hover:bg-gray-200"
            @keydown.tab.exact="focusNext(false)"
            @keydown.shift.tab="focusPrevious(false)"
            @keydown.up.exact.prevent="focusPrevious(true)"
            @keydown.down.exact.prevent="focusNext(true)"
            @keydown.esc.exact="hideDropdown"
          >
            <span class="ml-2">
              <modal-login />
            </span>
          </a>
        </li>
        <li v-show="user">
          <a
            href="#"
            class="flex items-center px-3 py-3 hover:bg-gray-200"
            @click="logout"
            @keydown.tab.exact="focusNext(false)"
            @keydown.shift.tab="focusPrevious(false)"
            @keydown.up.exact.prevent="focusPrevious(true)"
            @keydown.down.exact.prevent="focusNext(true)"
            @keydown.esc.exact="hideDropdown"
          >
            <span class="ml-2">
              {{ $t('header.favorite.logout') }}
            </span>
          </a>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'
import ModalLogin from '../HeaderElement/ModalAuthorization'
import firebase from 'firebase'

export default {
  components: {
    ModalLogin
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user
      }
    })
  },
  mixins: [clickaway],
  data() {
    return {
      user: null,
      isVisible: false,
      focusedIndex: 0
    }
  },
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace('login')
        })
    },
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
