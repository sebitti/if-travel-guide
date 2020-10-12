<template>
  <header
    class="bg-white sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3 font-sans"
  >
    <div class="flex items-center justify-between px-4 py-3 sm:p-0">
      <div
        class="inline-block text-gray-900 hover:text-gray-700 no-underline font-medium"
      >
        <router-link to="/">IF SMART CITY</router-link>
      </div>
      <div class="sm:hidden flex">
        <button
          class="block text-gray-900 hover:text-gray-700 focus:text-gray-700 focus:outline-none"
        >
          <HeaderLanguage class="sm:hidden block sm:ml-6" />
        </button>
        <button
          @click="isOpen = !isOpen"
          type="button"
          class="block text-gray-900 hover:text-gray-700 focus:text-gray-700 focus:outline-none"
        >
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path
              v-if="isOpen"
              fill-rule="evenodd"
              d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
            />
            <path
              v-if="!isOpen"
              fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          </svg>
        </button>
      </div>
    </div>
    <nav :class="isOpen ? 'block' : 'hidden'" class="sm:block">
      <div class="sm:flex sm:p-0 sm:items-center">
        <div class="hidden sm:block sm:ml-6">
          <button
            @click="isOpen = !isOpen"
            ref="btnRef"
            class="flex items-center"
            v-on:click="togglePopover()"
            type="button"
            style="transition:all .15s ease"
          >
            <span
              class="mr-1 text-lg not-italic font-normal leading-none normal-case align-middle"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                class="fill-current h-5 w-5"
              >
                <path
                  d="M17.545 15.467l-3.779-3.779a6.15 6.15 0 0 0 .898-3.21c0-3.417-2.961-6.377-6.378-6.377A6.185 6.185 0 0 0 2.1 8.287c0 3.416 2.961 6.377 6.377 6.377a6.15 6.15 0 0 0 3.115-.844l3.799 3.801a.953.953 0 0 0 1.346 0l.943-.943c.371-.371.236-.84-.135-1.211zM4.004 8.287a4.282 4.282 0 0 1 4.282-4.283c2.366 0 4.474 2.107 4.474 4.474a4.284 4.284 0 0 1-4.283 4.283c-2.366-.001-4.473-2.109-4.473-4.474z"
                /></svg
            ></span>
            <span class="font-medium">{{ $t('header.search.title') }}</span>
            <svg
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              width="24"
              height="24"
            >
              <path
                v-if="isOpen"
                d="M11 10L7.859 6.58a.695.695 0 0 1 0-.978.68.68 0 0 1 .969 0l3.83 3.908a.697.697 0 0 1 0 .979l-3.83 3.908a.68.68 0 0 1-.969 0 .695.695 0 0 1 0-.978L11 10z"
              ></path>
              <path
                v-if="!isOpen"
                d="M13.418 7.859a.695.695 0 0 1 .978 0 .68.68 0 0 1 0 .969l-3.908 3.83a.697.697 0 0 1-.979 0l-3.908-3.83a.68.68 0 0 1 0-.969.695.695 0 0 1 .978 0L10 11l3.418-3.141z"
              ></path>
            </svg>
          </button>
          <div
            ref="popoverRef"
            v-bind:class="{ hidden: !popoverShow, block: popoverShow }"
            class="mr-3 block z-50 leading-normal max-w-xs text-left no-underline break-words"
          >
            <HeaderSearch class="hidden sm:block" />
          </div>
        </div>
        <div class="w-full mx-auto sm:hidden block overflow-hidden">
          <div
            class="flex block pl-4 py-2 leading-normal cursor-pointer font-medium items-end inline-block text-gray-900 hover:text-gray-700"
          >
            <div>{{ $t('header.search.title') }}:</div>
            <input
              type="text"
              name=""
              class="border-b border-gray-600 bg-transparent ml-4 w-40"
            />
          </div>
        </div>
        <HeaderFavorite class="hidden sm:block sm:ml-6" />
        <div class="w-full mx-auto sm:hidden block">
          <div class="tab w-full overflow-hidden">
            <input
              class="absolute opacity-0 "
              id="tab-favorite"
              type="checkbox"
            />
            <label
              class="block pl-4 py-2 leading-normal cursor-pointer text-gray-900 font-medium"
              for="tab-favorite"
              >{{ $t('header.favorite.title') }}</label
            >
            <div class="tab-content overflow-hidden leading-normal">
              <a
                href=""
                class="block pl-6 ml-1 py-2 leading-normal cursor-pointer text-gray-600 font-medium text-sm"
                >Мої уподобання</a
              >
              <a
                href=""
                class="block pl-6 ml-1 py-2 leading-normal cursor-pointer text-gray-600 font-medium text-sm"
                >Авторизуватися</a
              >
            </div>
          </div>
        </div>
        <HeaderLanguage class="hidden sm:block sm:ml-6" />
      </div>
      <div class="border-t border-gray-600 sm:hidden border-solid">
        <div class="w-full mx-auto">
          <div class="tab w-full overflow-hidden">
            <input class="absolute opacity-0" id="tab-city" type="checkbox" />
            <label
              class="block pl-4 py-2 leading-normal cursor-pointer text-gray-900 font-medium"
              for="tab-city"
              >Місто</label
            >
            <div class="tab-content overflow-hidden leading-normal">
              <div class="tab-child w-full overflow-hidden">
                <input
                  class="absolute opacity-0 "
                  id="tab-child-events"
                  type="checkbox"
                />
                <label
                  class="block pl-6 ml-1 py-2 leading-normal cursor-pointer text-gray-600 font-medium text-sm"
                  for="tab-child-events"
                  >Події</label
                >
                <div class="tab-child-content overflow-hidden leading-normal">
                  <a
                    href=""
                    class="block pl-10 py-2 leading-normal cursor-pointer text-gray-500 font-medium text-sm"
                    >Вистави</a
                  >
                  <a
                    href=""
                    class="block pl-10 py-2 leading-normal cursor-pointer text-gray-500 font-medium text-sm"
                    >Фестивалі</a
                  >
                  <a
                    href=""
                    class="block pl-10 py-2 leading-normal cursor-pointer text-gray-500 font-medium text-sm"
                    >Виставки</a
                  >
                  <a
                    href=""
                    class="block pl-10 py-2 leading-normal cursor-pointer text-gray-500 font-medium text-sm"
                    >Концерти</a
                  >
                  <a
                    href=""
                    class="block pl-10 py-2 leading-normal cursor-pointer text-gray-500 font-medium text-sm"
                    >Спорт</a
                  >
                  <a
                    href=""
                    class="block pl-10 py-2 leading-normal cursor-pointer text-gray-500 font-medium text-sm"
                    >Конференції</a
                  >
                  <a
                    href=""
                    class="block pl-10 py-2 leading-normal cursor-pointer text-gray-500 font-medium text-sm"
                    >Ярмарки</a
                  >
                  <a
                    href=""
                    class="block pl-10 py-2 leading-normal cursor-pointer text-gray-500 font-medium text-sm"
                    >Шоу та мюзикли</a
                  >
                  <a
                    href=""
                    class="block pl-10 py-2 leading-normal cursor-pointer text-gray-500 font-medium text-sm"
                    >Календар подій</a
                  >
                </div>
              </div>
              <div class="tab-child w-full overflow-hidden">
                <input
                  class="absolute opacity-0 "
                  id="tab-child-relevant"
                  type="checkbox"
                />
                <label
                  class="block pl-6 ml-1 py-2 leading-normal cursor-pointer text-gray-600 font-medium text-sm"
                  for="tab-child-relevant"
                  >Актуальне</label
                >
                <div class="tab-child-content overflow-hidden leading-normal">
                  <a
                    href=""
                    class="block pl-10 py-2 leading-normal cursor-pointer text-gray-500 font-medium text-sm"
                    >Поради на вихідні</a
                  >
                  <a
                    href=""
                    class="block pl-10 py-2 leading-normal cursor-pointer text-gray-500 font-medium text-sm"
                    >Поради місяця</a
                  >
                  <a
                    href=""
                    class="block pl-10 py-2 leading-normal cursor-pointer text-gray-500 font-medium text-sm"
                    >Основні моменти</a
                  >
                  <a
                    href=""
                    class="block pl-10 py-2 leading-normal cursor-pointer text-gray-500 font-medium text-sm"
                    >Нові та модні тенденції</a
                  >
                  <a
                    href=""
                    class="block pl-10 py-2 leading-normal cursor-pointer text-gray-500 font-medium text-sm"
                    >Повинен побачити</a
                  >
                </div>
              </div>
              <div class="tab-child w-full overflow-hidden">
                <input
                  class="absolute opacity-0 "
                  id="tab-child-seasons"
                  type="checkbox"
                />
                <label
                  class="block pl-6 ml-1 py-2 leading-normal cursor-pointer text-gray-600 font-medium text-sm"
                  for="tab-child-seasons"
                  >Сезони</label
                >
                <div class="tab-child-content overflow-hidden leading-normal">
                  <a
                    href=""
                    class="block pl-10 py-2 leading-normal cursor-pointer text-gray-500 font-medium text-sm"
                    >Весна</a
                  >
                  <a
                    href=""
                    class="block pl-10 py-2 leading-normal cursor-pointer text-gray-500 font-medium text-sm"
                    >Літо</a
                  >
                  <a
                    href=""
                    class="block pl-10 py-2 leading-normal cursor-pointer text-gray-500 font-medium text-sm"
                    >Осінь</a
                  >
                  <a
                    href=""
                    class="block pl-10 py-2 leading-normal cursor-pointer text-gray-500 font-medium text-sm"
                    >Зима</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="tab w-full overflow-hidden">
            <input
              class="absolute opacity-0"
              id="tab-explore"
              type="checkbox"
            />
            <label
              class="block pl-4 py-2 leading-normal cursor-pointer text-gray-900 font-medium"
              for="tab-explore"
              >Досліджуй</label
            >
            <div class="tab-content overflow-hidden leading-normal">
              <div class="tab-child w-full overflow-hidden">
                <input
                  class="absolute opacity-0 "
                  id="tab-child-leisure"
                  type="checkbox"
                />
                <label
                  class="block pl-6 ml-1 py-2 leading-normal cursor-pointer text-gray-600 font-medium text-sm"
                  for="tab-child-leisure"
                  >Дозвілля</label
                >
                <div class="tab-child-content overflow-hidden leading-normal">
                  <a
                    href=""
                    class="block pl-10 py-2 leading-normal cursor-pointer text-gray-500 font-medium text-sm"
                    >Пам'ятки історії та культури</a
                  >
                  <a
                    href=""
                    class="block pl-10 py-2 leading-normal cursor-pointer text-gray-500 font-medium text-sm"
                    >Музеї та галареї</a
                  >
                  <a
                    href=""
                    class="block pl-10 py-2 leading-normal cursor-pointer text-gray-500 font-medium text-sm"
                    >Театри і кіно</a
                  >
                  <a
                    href=""
                    class="block pl-10 py-2 leading-normal cursor-pointer text-gray-500 font-medium text-sm"
                    >Парки</a
                  >
                  <a
                    href=""
                    class="block pl-10 py-2 leading-normal cursor-pointer text-gray-500 font-medium text-sm"
                    >Ресторани та заклади харчування</a
                  >
                  <a
                    href=""
                    class="block pl-10 py-2 leading-normal cursor-pointer text-gray-500 font-medium text-sm"
                    >Розваги</a
                  >
                  <a
                    href=""
                    class="block pl-10 py-2 leading-normal cursor-pointer text-gray-500 font-medium text-sm"
                    >Нічне життя</a
                  >
                  <a
                    href=""
                    class="block pl-10 py-2 leading-normal cursor-pointer text-gray-500 font-medium text-sm"
                    >Відпочинок</a
                  >
                </div>
              </div>
              <div class="tab-child w-full overflow-hidden">
                <input
                  class="absolute opacity-0 "
                  id="tab-child-planyourtrip"
                  type="checkbox"
                />
                <label
                  class="block pl-6 ml-1 py-2 leading-normal cursor-pointer text-gray-600 font-medium text-sm"
                  for="tab-child-planyourtrip"
                  >Плануй свою поїздку</label
                >
                <div class="tab-child-content overflow-hidden leading-normal">
                  <a
                    href=""
                    class="block pl-10 py-2 leading-normal cursor-pointer text-gray-500 font-medium text-sm"
                    >Квитки та бронювання</a
                  >
                  <a
                    href=""
                    class="block pl-10 py-2 leading-normal cursor-pointer text-gray-500 font-medium text-sm"
                    >Тури</a
                  >
                  <a
                    href=""
                    class="block pl-10 py-2 leading-normal cursor-pointer text-gray-500 font-medium text-sm"
                    >Гіди</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="tab w-full overflow-hidden">
            <input class="absolute opacity-0" id="tab-stay" type="checkbox" />
            <label
              class="block pl-4 py-2 leading-normal cursor-pointer text-gray-900 font-medium"
              for="tab-stay"
              >Залишайся</label
            >
            <div class="tab-content overflow-hidden leading-normal">
              <div class="tab-child w-full overflow-hidden">
                <input
                  class="absolute opacity-0 "
                  id="tab-child-overnightstayandaccommodation"
                  type="checkbox"
                />
                <label
                  class="block pl-6 ml-1 py-2 leading-normal cursor-pointer text-gray-600 font-medium text-sm"
                  for="tab-child-overnightstayandaccommodation"
                  >Нічліг та проживання</label
                >
                <div class="tab-child-content overflow-hidden leading-normal">
                  <a
                    href=""
                    class="block pl-10 py-2 leading-normal cursor-pointer text-gray-500 font-medium text-sm"
                    >Хостели</a
                  >
                  <a
                    href=""
                    class="block pl-10 py-2 leading-normal cursor-pointer text-gray-500 font-medium text-sme"
                    >Мотелі</a
                  >
                  <a
                    href=""
                    class="block pl-10 py-2 leading-normal cursor-pointer text-gray-500 font-medium text-sm"
                    >Туристичні бази</a
                  >
                  <a
                    href=""
                    class="block pl-10 py-2 leading-normal cursor-pointer text-gray-500 font-medium text-sm"
                    >Квартири для тимчасового проживання</a
                  >
                </div>
              </div>
              <div class="tab-child w-full overflow-hidden">
                <input
                  class="absolute opacity-0 "
                  id="tab-child-placereservation"
                  type="checkbox"
                />
                <label
                  class="block pl-6 ml-1 py-2 leading-normal cursor-pointer text-gray-600 font-medium text-sm"
                  for="tab-child-placereservation"
                  ><a href="">Резервування місця</a>
                </label>
              </div>
            </div>
          </div>
          <div class="tab w-full overflow-hidden">
            <input
              class="absolute opacity-0"
              id="tab-dontwander"
              type="checkbox"
            />
            <label
              class="block pl-4 py-2 leading-normal cursor-pointer text-gray-900 font-medium"
              for="tab-dontwander"
              >Не блукай</label
            >
            <div class="tab-content overflow-hidden leading-normal">
              <div class="tab-child w-full overflow-hidden">
                <input
                  class="absolute opacity-0 "
                  id="tab-child-travelresources"
                  type="checkbox"
                />
                <label
                  class="block pl-6 ml-1 py-2 leading-normal cursor-pointer text-gray-600 font-medium text-sm"
                  for="tab-child-travelresources"
                  >Ресурси мандрівника</label
                >
                <div class="tab-child-content overflow-hidden leading-normal">
                  <a
                    href=""
                    class="block pl-10 py-2 leading-normal cursor-pointer text-gray-500 font-medium text-sm"
                    >Основна інформація</a
                  >
                  <a
                    href=""
                    class="block pl-10 py-2 leading-normal cursor-pointer text-gray-500 font-medium text-sm"
                    >Офіційний туристичний центр</a
                  >
                  <a
                    href=""
                    class="block pl-10 py-2 leading-normal cursor-pointer text-gray-500 font-medium text-sm"
                    >Візові центри</a
                  >
                  <a
                    href=""
                    class="block pl-10 py-2 leading-normal cursor-pointer text-gray-500 font-medium text-sm"
                    >Митниця</a
                  >
                  <a
                    href=""
                    class="block pl-10 py-2 leading-normal cursor-pointer text-gray-500 font-medium text-sm"
                    >Консульства</a
                  >
                  <a
                    href=""
                    class="block pl-10 py-2 leading-normal cursor-pointer text-gray-500 font-medium text-sm"
                    >Вокзали</a
                  >
                  <a
                    href=""
                    class="block pl-10 py-2 leading-normal cursor-pointer text-gray-500 font-medium text-sm"
                    >Транспорт</a
                  >
                  <a
                    href=""
                    class="block pl-10 py-2 leading-normal cursor-pointer text-gray-500 font-medium text-sm"
                    >Доступ в інтернет</a
                  >
                  <a
                    href=""
                    class="block pl-10 py-2 leading-normal cursor-pointer text-gray-500 font-medium text-sm"
                    >Погода</a
                  >
                </div>
              </div>
              <div class="tab-child w-full overflow-hidden">
                <input
                  class="absolute opacity-0 "
                  id="tab-child-mapsandguides"
                  type="checkbox"
                />
                <label
                  class="block pl-6 ml-1 py-2 leading-normal cursor-pointer text-gray-600 font-medium text-sm"
                  for="tab-child-mapsandguides"
                  >Карти і путівники</label
                >
                <div class="tab-child-content overflow-hidden leading-normal">
                  <a
                    href=""
                    class="block pl-10 py-2 leading-normal cursor-pointer text-gray-500 font-medium text-sm"
                    >Маршрути по місту</a
                  >
                  <a
                    href=""
                    class="block pl-10 py-2 leading-normal cursor-pointer text-gray-500 font-medium text-sm"
                    >Івано-Франківськ. Місто-прогулянка</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import Popper from 'popper.js'
import HeaderSearch from './HeaderElement/HeaderSearch'
import HeaderFavorite from './HeaderElement/HeaderFavorite'
import HeaderLanguage from './HeaderElement/HeaderLanguage'
export default {
  components: {
    HeaderSearch,
    HeaderFavorite,
    HeaderLanguage
  },
  data() {
    return {
      isOpen: false,
      popoverShow: false
    }
  },
  methods: {
    togglePopover: function() {
      if (this.popoverShow) {
        this.popoverShow = false
      } else {
        this.popoverShow = true
        new Popper(this.$refs.btnRef, this.$refs.popoverRef, {
          placement: 'left'
        })
      }
    }
  }
}
</script>

<style>
/* Tab */
/* Tab content - closed */
.tab-content {
  max-height: 0;
  -webkit-transition: max-height 0.35s;
  -o-transition: max-height 0.35s;
  transition: max-height 0.35s;
}
/* :checked - resize to full height */
.tab input:checked ~ .tab-content {
  max-height: 100vh;
}
/* Label formatting when open */
.tab input:checked + label {
  border-left-width: 2px;
  border-color: #ffffff;
}
/* Icon */
.tab label::after {
  float: right;
  padding-right: 40px;
  right: 0;
  top: 0;
  display: block;
  width: 1.5em;
  height: 1.5em;
  line-height: 1.5;
  font-size: 1.1rem;
  text-align: center;
  -webkit-transition: all 0.35s;
  -o-transition: all 0.35s;
  transition: all 0.35s;
}
/* Icon formatting - closed */
.tab input[type='checkbox'] + label::after {
  content: '\25BE';
  font-weight: bold;
}
/* Icon formatting - open */
.tab input[type='checkbox']:checked + label::after {
  transform: rotateX(180deg);
}
/* Child */
/* Tab-child content - closed */
.tab-child-content {
  max-height: 0;
  -webkit-transition: max-height 0.35s;
  -o-transition: max-height 0.35s;
  transition: max-height 0.35s;
}
/* :checked - resize to full height */
.tab-child input:checked ~ .tab-child-content {
  max-height: 100vh;
}
/* Icon */
.tab-child label::after {
  visibility: hidden;
}
</style>
