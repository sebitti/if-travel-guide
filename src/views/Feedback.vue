<template>
  <div class="body_color mb-auto h-screen font-serif">
    <section class="text-gray-700 body-font relative">
      <div class="container px-5 py-24 mx-auto flex sm:flex-no-wrap flex-wrap">
        <div
          class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"
        >
          <iframe
            class="absolute inset-0"
            style="filter: grayscale(1) contrast(1.2) opacity(0.4);"
            title="map"
            marginheight="0"
            marginwidth="0"
            scrolling="no"
            src="https://maps.google.com/maps?q=Ivano-Frankivsk%2C%20Ivano-Frankivsk%20Oblast%2C%20Ukraine&t=&z=15&ie=UTF8&iwloc=&output=embed&hl=ua"
            width="100%"
            height="100%"
            frameborder="0"
          ></iframe>
          <div class="bg-white relative flex flex-wrap flex-col py-6">
            <div class="lg:w-full px-6">
              <h2
                class="title-font font-medium text-gray-900 tracking-widest text-sm"
              >
                АДРЕСА
              </h2>
              <p class="leading-relaxed">
                м. Івано-Франківськ
              </p>
            </div>
            <div class="lg:w-full px-6 mt-4 lg:mt-0">
              <h2
                class="title-font font-medium text-gray-900 tracking-widest text-sm"
              >
                ЕЛЕКТРОННА ПОШТА
              </h2>
              <a class="text-indigo-500 leading-relaxed">example@email.com</a>
              <h2
                class="title-font font-medium text-gray-900 tracking-widest text-sm"
              >
                ТЕЛЕФОН
              </h2>
              <p class="leading-relaxed">123-456-7890</p>
            </div>
          </div>
        </div>
        <div
          class="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
            Відгук
          </h2>
          <input
            class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
            placeholder="Ім'я"
            type="text"
          />
          <input
            class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
            placeholder="Електронна пошта"
            type="email"
          />
          <textarea
            class="bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-indigo-500 text-base px-4 py-2 mb-4 resize-none"
            placeholder="Повідомлення"
          ></textarea>
          <button
            class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Надіслати
          </button>
        </div>
      </div>

      <br />
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
