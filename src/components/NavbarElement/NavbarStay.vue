<template>
  <div class="hoverable hover:text-gray-800 text-gray-900">
    <div class="relative block font-medium uppercase cursor-pointer">
      {{ $t('navbar.stay.title') }}
    </div>
    <div class="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-white">
      <div class="container mx-auto">
        <div class="flex flex-wrap overflow-hidden">
          <div class="w-1/2 overflow-hidden">
            <div class="flex justify-center">
              <ul>
                <div class="uppercase font-medium text-gray-800">
                  {{
                    $t('navbar.stay.overnight_stay_and_accommodation.subtitle')
                  }}
                </div>
                <li class="pl-4 hover:text-orange-600 uppercase text-sm">
                  <router-link to="/Stay/Accommodation/Hostels">{{
                    $t('navbar.stay.overnight_stay_and_accommodation.hostels')
                  }}</router-link>
                </li>
                <li class="pl-4 hover:text-orange-600 uppercase text-sm">
                  <router-link to="/Stay/Accommodation/Motels">{{
                    $t('navbar.stay.overnight_stay_and_accommodation.motels')
                  }}</router-link>
                </li>
                <li class="pl-4 hover:text-orange-600 uppercase text-sm">
                  <router-link to="/Stay/Accommodation/Hotels">{{
                    $t('navbar.stay.overnight_stay_and_accommodation.hotels')
                  }}</router-link>
                </li>
                <li class="pl-4 hover:text-orange-600 uppercase text-sm">
                  <router-link to="/Stay/Accommodation/TouristBases">{{
                    $t(
                      'navbar.stay.overnight_stay_and_accommodation.tourist_bases'
                    )
                  }}</router-link>
                </li>
                <div class="pl-4 hover:text-orange-600 uppercase text-sm">
                  <router-link
                    to="/Stay/Accommodation/ApartmentsForTemporaryResidence"
                    >{{
                      $t(
                        'navbar.stay.overnight_stay_and_accommodation.apartments_for_temporary_residence'
                      )
                    }}</router-link
                  >
                </div>
              </ul>
            </div>
          </div>

          <div class="w-1/2 overflow-hidden">
            <div class="fixed">
              <div class="uppercase font-medium text-gray-800">
                {{ $t('navbar.stay.place_reservation.subtitle') }}
              </div>
              <div class="text-black flex border-none placeholder-transparent">
                <div class="border text-sm font-light">
                  <datepicker
                    class="pl-3"
                    :language="uk"
                    placeholder="зареєструватися"
                  ></datepicker>
                </div>
                <div class="border ml-2 text-sm font-light">
                  <datepicker
                    class="pl-3"
                    :language="uk"
                    placeholder="виписатися"
                  ></datepicker>
                </div>
                <div>
                  <select
                    class="ml-2 bg-gray-300 text-gray-900 font-medium uppercase text-xs px-4 py-1 rounded shadow hover:shadow-md outline-none focus:outline-none appearance-none"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </div>
              <button
                class="mt-3 bg-gray-300 text-gray-900 font-medium uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1"
                type="button"
                style="transition: all .15s ease"
              >
                <router-link to="/Stay/PlaceReservation">{{
                  $t('navbar.stay.place_reservation.submit')
                }}</router-link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
import { en, uk } from 'vuejs-datepicker/dist/locale'
export default {
  components: {
    Datepicker
  },
  mounted() {
    this.menuItems = document.querySelectorAll('.mega-menu a')
  },
  data() {
    return {
      menuItems: null,
      en: en,
      uk: uk
    }
  }
}
</script>

<style>
.mega-menu {
  display: none;
  left: 0;
  position: absolute;
  text-align: left;
  width: 100%;
}
.hoverable {
  position: static;
}
.hoverable > a:after {
  font-size: 10px;
  padding-left: 6px;
  position: relative;
  top: -1px;
}
.hoverable:hover .mega-menu {
  display: block;
}
</style>
