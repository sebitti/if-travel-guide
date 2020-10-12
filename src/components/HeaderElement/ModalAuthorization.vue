<template>
  <div v-show="!user" class="normal-case tracking-normal">
    <a
      href="/#login"
      @click.prevent="show"
      class="text-copy-primary hover:text-gray-600"
      >{{ $t('header.favorite.authorization') }}</a
    >
    <modal
      name="modal-login"
      @opened="opened"
      :adaptive="true"
      :height="200"
      :width="300"
    >
      <div class="bg-gray-300 h-full">
        <div class="flex flex-col text-center w-full pt-5">
          <h2
            class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1"
          >
            УВІЙТИ ЗА ДОПОМОГОЮ
          </h2>
        </div>
        <div class="flex flex-col justify-between">
          <div class="flex my-3">
            <button
              @click="GoogleLogin"
              class="bg-teal-500 inline-flex py-3 px-5 rounded-lg items-center mx-auto hover:bg-gray-500 focus:outline-none w-40"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                class="w-6 h-6"
              >
                <path
                  d="M1.989 5.589c0 1.494.499 2.572 1.482 3.205.806.52 1.74.598 2.226.598.118 0 .213-.006.279-.01 0 0-.154 1.004.59 1.996h-.034c-1.289 0-5.493.269-5.493 3.727 0 3.516 3.861 3.695 4.636 3.695.061 0 .097-.002.097-.002.008 0 .063.002.158.002.497 0 1.782-.062 2.975-.643 1.548-.75 2.333-2.059 2.333-3.885 0-1.764-1.196-2.814-2.069-3.582-.533-.469-.994-.873-.994-1.266 0-.4.337-.701.762-1.082.689-.615 1.339-1.492 1.339-3.15 0-1.457-.189-2.436-1.354-3.057.121-.062.551-.107.763-.137.631-.086 1.554-.184 1.554-.699V1.2H6.64c-.046.002-4.651.172-4.651 4.389zm7.424 9.013c.088 1.406-1.115 2.443-2.922 2.574-1.835.135-3.345-.691-3.433-2.096-.043-.676.254-1.336.835-1.863.589-.533 1.398-.863 2.278-.928.104-.006.207-.012.31-.012 1.699.001 2.849.999 2.932 2.325zM8.212 4.626c.451 1.588-.23 3.246-1.316 3.553a1.417 1.417 0 0 1-.384.052c-.994 0-1.979-1.006-2.345-2.393-.204-.776-.187-1.458.047-2.112.229-.645.643-1.078 1.163-1.225.125-.035.254-.053.385-.053 1.2 0 1.972.498 2.45 2.178zM16 8V5h-2v3h-3v2h3v3h2v-3h3V8h-3z"
                />
              </svg>
              <span class="ml-4 flex items-start flex-col leading-none">
                <span class="title-font font-medium">Google</span>
              </span>
            </button>
          </div>
          <div class="flex my-3">
            <button
              @click="FacebookLogin"
              class="bg-teal-500 inline-flex py-3 px-5 rounded-lg items-center mx-auto hover:bg-gray-500 focus:outline-none w-40"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                class="w-6 h-6"
              >
                <path
                  d="M17 1H3c-1.1 0-2 .9-2 2v14c0 1.101.9 2 2 2h7v-7H8V9.525h2v-2.05c0-2.164 1.212-3.684 3.766-3.684l1.803.002v2.605h-1.197c-.994 0-1.372.746-1.372 1.438v1.69h2.568L15 12h-2v7h4c1.1 0 2-.899 2-2V3c0-1.1-.9-2-2-2z"
                />
              </svg>
              <span class="ml-4 flex items-start flex-col leading-none">
                <span class="title-font font-medium">Facebook</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'ModalAuthorization',
  methods: {
    GoogleLogin() {
      const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider()

      firebase
        .auth()
        .signInWithPopup(GoogleAuthProvider)
        // eslint-disable-next-line no-unused-vars
        .then(result => {
          this.$router.replace('MyFavorite')
        })
        .catch(err => {
          alert('Oops. ' + err.message)
        })
    },
    FacebookLogin() {
      const FacebookAuthProvider = new firebase.auth.FacebookAuthProvider()

      firebase
        .auth()
        .signInWithPopup(FacebookAuthProvider)
        // eslint-disable-next-line no-unused-vars
        .then(result => {
          this.$router.replace('MyFavorite')
        })
        .catch(err => {
          alert('Oops. ' + err.message)
        })
    },
    show() {
      this.$modal.show('modal-login')
    },
    showRegister() {
      this.$modal.show('modal-register')
      this.$modal.hide('modal-login')
    },
    opened() {
      this.$refs.email.focus()
    },
    hide() {
      this.$modal.hide('modal-login')
    }
  }
}
</script>
