<template>
  <div class="body_color mb-auto font-serif">
    <section class="my-8 container m-auto">
      <div class="text-center pt-3">
        <h1 class="text-3xl leading-tight my-4 font-bold">
          Нічне життя
        </h1>
      </div>
    </section>
    <section class="text-gray-700 body-font">
      <div class="container px-5 py-8 mx-auto">
        <div class="flex flex-wrap -m-4">
          <div class="p-4 lg:w-1/2">
            <div
              class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left"
            >
              <img
                alt="team"
                class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src="https://frankivsk-online.com/wp-content/uploads/2017/07/logo-frankivsk-atmosfera-club.png"
              />
              <div class="flex-grow sm:pl-8">
                <h2 class="title-font font-medium text-lg text-gray-900">
                  Atmosfera Club
                </h2>
                <StarRating class="my-1" v-model="rating" />
                <h3 class="text-gray-600 mb-3">
                  пт. - сб.: 22:00 - 5:00
                </h3>
                <p class="mb-4">
                  ATMOSFERA – яскраве місце відпочинку сучасних людей. Стильні
                  DJ, чарівні MC і стрункі красуні GO-GO подарують справжнє шоу
                  для перебірливих любителів модного клубного життя
                </p>
                <p class="mb-4">
                  <a class="text-gray-500">Локація:</a> м. Івано-Франківськ,
                  вул. Гетьмана Мазепи, 168
                </p>
                <span class="inline-flex">
                  <a class="text-gray-500">
                    <svg
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                      ></path>
                    </svg>
                  </a>
                  <a class="ml-2 text-gray-500">
                    <svg
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                      ></path>
                    </svg>
                  </a>
                  <a class="ml-2 text-gray-500">
                    <svg
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                      ></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>

          <div class="p-4 lg:w-1/2">
            <div
              class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left"
            >
              <img
                alt="team"
                class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src="https://frankivsk-online.com/wp-content/uploads/2017/07/logo-frankivsk-rodzher.jpg"
              />
              <div class="flex-grow sm:pl-8">
                <h2 class="title-font font-medium text-lg text-gray-900">
                  Клуб «Роджер»
                </h2>
                <StarRating class="my-1" v-model="rating" />
                <h3 class="text-gray-600 mb-3">
                  пн. - нд.: 16:00 - 9:00
                </h3>
                <p class="mb-4">
                  Клуб «Роджер» – це місце, що поєднує більярд та караоке, а
                  також смачну кухню. Заклад пропонує якісні напої світового
                  визнання та смачні коктейлі
                </p>
                <p class="mb-4">
                  <a class="text-gray-500">Локація:</a> м. Івано-Франківськ,
                  вул. Вовчинецька, 194
                </p>
                <span class="inline-flex">
                  <a class="text-gray-500">
                    <svg
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                      ></path>
                    </svg>
                  </a>
                  <a class="ml-2 text-gray-500">
                    <svg
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                      ></path>
                    </svg>
                  </a>
                  <a class="ml-2 text-gray-500">
                    <svg
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                      ></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>

          <div class="p-4 lg:w-1/2">
            <div
              class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left"
            >
              <img
                alt="team"
                class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src="https://frankivsk-online.com/wp-content/uploads/2017/01/buha-rest.jpg"
              />
              <div class="flex-grow sm:pl-8">
                <h2 class="title-font font-medium text-lg text-gray-900">
                  Паб-клуб «Буха-Rest»
                </h2>
                <StarRating class="my-1" v-model="rating" />
                <h3 class="text-gray-600 mb-3">
                  пн. - нд.: 12:00 - 02:00
                </h3>
                <p class="mb-4">
                  Буха-Rest — перший міський ресторан-субмарина. Заклад пропонує
                  пиво та м’ясні страви, що пасують до цього традиційного напою.
                  Одна з «родзинок» інтер’єру – телефонна будка, яка створює
                  фоновий шум офісу/вокзалу/затору/ринку/спортзалу, якщо
                  дзвонитиме дружина чи начальник
                </p>
                <p class="mb-4">
                  <a class="text-gray-500">Локація:</a> м. Івано-Франківськ,
                  вул. Вовчинецька, 219а
                </p>
                <span class="inline-flex">
                  <a class="text-gray-500">
                    <svg
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                      ></path>
                    </svg>
                  </a>
                  <a class="ml-2 text-gray-500">
                    <svg
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                      ></path>
                    </svg>
                  </a>
                  <a class="ml-2 text-gray-500">
                    <svg
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                      ></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>

          <div class="p-4 lg:w-1/2">
            <div
              class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left"
            >
              <img
                alt="team"
                class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src="https://frankivsk-online.com/wp-content/uploads/2017/01/Grand-America-bar-kitchen.jpg"
              />
              <div class="flex-grow sm:pl-8">
                <h2 class="title-font font-medium text-lg text-gray-900">
                  Grand America bar & kitchen
                </h2>
                <StarRating class="my-1" v-model="rating" />
                <h3 class="text-gray-600 mb-3">
                  пн. - нд.: 12:00 - 02:00
                </h3>
                <p class="mb-4">
                  Заклад пропонує страви американської кухні. Також є вибір
                  страв для вегетаріанців, барбекю та бургери. Спеціалізація:
                  сніданок, обід, вечеря, кава та напої. На вихідних Grand
                  America запрошує на вечірки
                </p>
                <p class="mb-4">
                  <a class="text-gray-500">Локація:</a> м. Івано-Франківськ,
                  вул. Чорновола, 23
                </p>
                <span class="inline-flex">
                  <a class="text-gray-500">
                    <svg
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                      ></path>
                    </svg>
                  </a>
                  <a class="ml-2 text-gray-500">
                    <svg
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                      ></path>
                    </svg>
                  </a>
                  <a class="ml-2 text-gray-500">
                    <svg
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                      ></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import StarRating from '../../components/StarRating'

export default {
  components: {
    StarRating
  },
  // eslint-disable-next-line no-unused-vars
  data: vm => ({
    rating: 3
  })
}
</script>
