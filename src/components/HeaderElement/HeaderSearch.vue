<template>
  <div class="relative">
    <search-focus @keyup="focusSearch" />
    <div>
      <input
        type="text"
        placeholder=""
        class="px-4 py-2 pl-10 border-b border-gray-500 outline-none bg-background-form focus:border-blue-500 w-30 opacity-75 bg-gray-200"
        v-model="query"
        @blur="searchResultsVisible = false"
        @focus="searchResultsVisible = true"
        @keydown.esc="searchResultsVisible = false"
        @input="softReset"
        ref="search"
        @keyup="performSearch"
        @keydown.up.prevent="highlightPrevious"
        @keydown.down.prevent="highlightNext"
        @keydown.enter="gotoLink"
      />
      <div
        v-if="query.length > 0"
        class="absolute top-0 right-0 mr-3 text-2xl text-gray-600 cursor-pointer hover:text-gray-800"
        style="top:2px;"
        @click="reset"
      >
        &times;
      </div>
    </div>
    <transition name="fade">
      <div
        v-if="query.length > 0 && searchResultsVisible"
        class="absolute left-0 right-0 z-10 mt-2 mb-4 overflow-hidden overflow-y-auto text-left normal-case bg-white border shadow w-108"
        style="max-height: 32rem"
      >
        <div class="flex flex-col" ref="results">
          <a
            v-for="(post, index) in searchResults"
            :key="index"
            :href="post.item.path"
            @mousedown.prevent="searchResultsVisible = true"
            class="p-4 text-xl border-b border-gray-400 cursor-pointer hover:bg-blue-100"
            :class="{ 'bg-blue-100': index === highlightedIndex }"
          >
            {{ post.item.title }}

            <span class="block my-1 text-sm font-normal">{{
              post.item.summary
            }}</span>
          </a>

          <div
            v-if="searchResults.length === 0"
            class="w-full p-4 font-normal border-b cursor-pointer"
          >
            <p class="my-0">
              No results for '<strong>{{ query }}</strong
              >'
            </p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import SearchFocus from './SearchFocus'
import axios from 'axios'

export default {
  components: {
    SearchFocus
  },
  data() {
    return {
      query: '',
      searchResultsVisible: false,
      posts: [],
      searchResults: [],
      highlightedIndex: 0,
      options: {
        shouldSort: true,
        includeMatches: true,
        threshold: 0.5,
        location: 0,
        distance: 500,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: ['title', 'summary']
      }
    }
  },
  created() {
    axios.get('/index.json').then(response => {
      this.posts = response.data
    })
  },
  methods: {
    reset() {
      this.query = ''
      this.highlightedIndex = 0
    },
    softReset() {
      this.searchResultsVisible = true
      this.highlightedIndex = 0
    },
    focusSearch(e) {
      if (e.key === '/') {
        this.$refs.search.focus()
      }
    },
    performSearch() {
      this.$search(this.query, this.posts, this.options).then(results => {
        this.searchResults = results
      })
    },
    highlightPrevious() {
      if (this.highlightedIndex > 0) {
        this.highlightedIndex = this.highlightedIndex - 1
        this.scrollIntoView()
      }
    },
    highlightNext() {
      if (this.highlightedIndex < this.searchResults.length - 1) {
        this.highlightedIndex = this.highlightedIndex + 1
        this.scrollIntoView()
      }
    },
    scrollIntoView() {
      this.$refs.results.children[this.highlightedIndex].scrollIntoView({
        block: 'nearest'
      })
    },
    gotoLink() {
      if (this.searchResults[this.highlightedIndex]) {
        window.location = this.searchResults[this.highlightedIndex].item.path
      }
    }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
