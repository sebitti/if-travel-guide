<template>
  <section class="bg-black w-full text-white font-mono">
    <div class="container mx-auto py-8">
      <div class="flex justify-between flex-wrap overflow-hidden items-center">
        <div
          class="w-1/3 overflow-hidden sm:w-full md:w-full lg:w-1/3 xl:w-1/3"
        >
          <div
            class="flex sm:justify-center md:justify-center lg:justify-around xl:justify-around flex-wrap overflow-hidden items-center"
          >
            <div
              class="w-1/2 overflow-hidden sm:w-full md:w-full lg:w-1/2 xl:w-1/2"
            >
              <div class="flex justify-center">
                <ifLogo2 class="h-20" />
              </div>
            </div>
            <div
              class="w-1/2 overflow-hidden sm:w-full md:w-full lg:w-1/2 xl:w-1/2 flex-shrink"
            >
              <div
                class="w-full overflow-hidden sm:w-full md:w-full lg:w-full xl:w-full"
              >
                <a
                  class="flex sm:justify-center md:justify-center lg:justify-center xl:justify-center flex-wrap overflow-hidden text-base font-medium hover:text-yellow-600"
                  href=""
                >
                  <div
                    class="w-full overflow-hidden sm:w-full md:w-full lg:w-full xl:w-full"
                  >
                    <div class="flex justify-center">Ivano-Frankivs</div>
                  </div>
                  <div
                    class="w-full overflow-hidden sm:w-full md:w-full lg:w-full xl:w-full lg:my-2 xl:my-2"
                  >
                    <div class="flex justify-center">
                      tourism site
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          class="w-1/3 overflow-hidden sm:w-full md:w-full lg:w-1/3 xl:w-1/3 sm:hidden md:hidden lg:block xl:block"
        >
          <div
            class="flex sm:justify-center md:justify-center lg:justify-center xl:justify-center flex-wrap overflow-hidden"
          >
            <div
              class="w-full overflow-hidden sm:w-full md:w-full lg:w-full xl:w-full mb-2 hover:text-yellow-600"
            >
              <div class="flex justify-center">
                <router-link to="/Feedback">Залишити відгук</router-link>
              </div>
            </div>
            <div
              class="w-full overflow-hidden sm:w-full md:w-full lg:w-full xl:w-full"
            >
              <div class="flex justify-center items-end">
                <div>Підписатися</div>
                <input
                  class="mx-2 bg-transparent border-b text-sm p-1 text-xs placeholder-gray-400 text-yellow-600 focus:border-teal-600"
                  type="text"
                  placeholder="Email"
                />
                <button class="hover:text-yellow-600">
                  <div>🡢</div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          class="w-1/3 overflow-hidden sm:w-full md:w-full lg:w-1/3 xl:w-1/3"
        >
          <div
            class="flex sm:justify-center md:justify-center lg:justify-center xl:justify-center flex-wrap overflow-hidden"
          >
            <div
              class="w-full overflow-hidden sm:w-full md:w-full lg:w-full xl:w-full"
            >
              <div
                class="flex sm:justify-center md:justify-center lg:justify-center xl:justify-center flex-wrap overflow-hidden"
              >
                <div
                  class="w-full overflow-hidden sm:w-full md:w-full lg:w-full xl:w-full text-teal-600 sm:hidden md:hidden lg:block xl:block"
                >
                  <div class="flex justify-center">Зв'язатися:</div>
                </div>
                <div
                  class="w-full overflow-hidden sm:w-full md:w-full lg:w-full xl:w-full lg:my-2 xl:my-2"
                >
                  <div class="flex justify-center">
                    ivano-frankivsk@ifcity.ua
                  </div>
                </div>
              </div>
            </div>
            <div
              class="w-full overflow-hidden sm:w-full md:w-full lg:w-full xl:w-full"
            >
              <div
                class="flex sm:justify-center md:justify-center lg:justify-center xl:justify-center flex-wrap overflow-hidden"
              >
                <div
                  class="w-full overflow-hidden sm:w-full md:w-full lg:w-full xl:w-full"
                >
                  <div class="flex justify-center items-center">
                    <div
                      class="sm:hidden md:hidden lg:block xl:block text-teal-600"
                    >
                      Соціальні мережі:
                    </div>
                    <a
                      class="ml-1"
                      target="_blank"
                      href="https://www.facebook.com/"
                    >
                      <facebook class="h-6"
                    /></a>
                    <a class="ml-1" target="_blank" href="https://twitter.com/">
                      <twitter class="h-6"
                    /></a>
                    <a
                      class="ml-1"
                      target="_blank"
                      href="https://web.telegram.org/"
                      ><telegram class="h-6"
                    /></a>
                    <a
                      class="ml-1"
                      target="_blank"
                      href="https://www.instagram.com/"
                    >
                      <instagram class="h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ifLogo2 from '../assets/svg/if_logo2.svg'
import facebook from '../assets/svg/facebook.svg'
import twitter from '../assets/svg/twitter.svg'
import telegram from '../assets/svg/telegram.svg'
import instagram from '../assets/svg/instagram.svg'

export default {
  components: {
    ifLogo2,
    facebook,
    twitter,
    telegram,
    instagram
  }
}
</script>
