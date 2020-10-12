<template>
  <div class="body_color mb-auto font-serif h-screen">
    <section class="my-8 container m-auto">
      <div class="text-center pt-3">
        <h1 class="text-3xl leading-tight my-4 font-bold">
          Список вподобаних
        </h1>
      </div>
    </section>
    <section class="text-gray-700 body-font overflow-hidden">
      <div class="container px-5 py-5 mx-auto">
        <div class="-my-8">
          <div class="py-8 flex flex-wrap md:flex-no-wrap">
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span class="tracking-widest font-medium title-font text-gray-900"
                >ВИСТАВИ</span
              >
              <span class="mt-1 text-gray-500 text-sm">16 вер. - 20 вер.</span>
            </div>
            <div class="md:flex-grow">
              <h2
                class="text-2xl font-medium text-gray-900 title-font mb-2 ml-1"
              >
                27 BookForum
              </h2>
              <p
                class="text-gray-700 text-base flex items-center hover:text-teal-600"
              >
                <span
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    class="fill-current h-5 w-5"
                  >
                    <path
                      d="M10 2.009c-2.762 0-5 2.229-5 4.99 0 4.774 5 11 5 11s5-6.227 5-11c0-2.76-2.238-4.99-5-4.99zm0 7.751a2.7 2.7 0 1 1 0-5.4 2.7 2.7 0 0 1 0 5.4z"
                    /></svg
                ></span>
                <span class="ml-2">Івано-Фраківський Палац Мистецтв</span>
              </p>
              <a
                href="#"
                class="text-indigo-500 inline-flex items-center mt-4 ml-1"
                ><router-link to="/City/Events/Performances/Detail"
                  >Докладніше</router-link
                >
                <svg
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
