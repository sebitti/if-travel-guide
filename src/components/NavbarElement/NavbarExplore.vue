<template>
  <div class="hoverable hover:text-gray-800 text-gray-900">
    <div class="relative block font-medium uppercase cursor-pointer">
      {{ $t('navbar.explore.title') }}
    </div>
    <div class="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-white">
      <div class="container mx-auto">
        <div class="flex flex-wrap overflow-hidden">
          <div class="w-1/2 overflow-hidden">
            <div class="flex justify-center">
              <ul>
                <div class="uppercase font-medium text-gray-800">
                  {{ $t('navbar.explore.leisure.subtitle') }}
                </div>
                <li class="pl-4 hover:text-orange-600 uppercase text-sm">
                  <router-link
                    to="/Explore/Leisure/HistoricalManumentsAndCulture"
                    >{{
                      $t(
                        'navbar.explore.leisure.historical_monuments_and_culture'
                      )
                    }}</router-link
                  >
                </li>
                <li class="pl-4 hover:text-orange-600 uppercase text-sm">
                  <router-link to="/Explore/Leisure/MuseumsAndGalleries">{{
                    $t('navbar.explore.leisure.museums_and_galleries')
                  }}</router-link>
                </li>
                <li class="pl-4 hover:text-orange-600 uppercase text-sm">
                  <router-link to="/Explore/Leisure/TheatersAndCinema">{{
                    $t('navbar.explore.leisure.theaters_and_cinema')
                  }}</router-link>
                </li>
                <li class="pl-4 hover:text-orange-600 uppercase text-sm">
                  <router-link to="/Explore/Leisure/Parks">{{
                    $t('navbar.explore.leisure.parks')
                  }}</router-link>
                </li>
                <li class="pl-4 hover:text-orange-600 uppercase text-sm">
                  <router-link to="/Explore/Leisure/Restourants">{{
                    $t('navbar.explore.leisure.restaurants')
                  }}</router-link>
                </li>
                <li class="pl-4 hover:text-orange-600 uppercase text-sm">
                  <router-link to="/Explore/Leisure/Entertainment">{{
                    $t('navbar.explore.leisure.entertainment')
                  }}</router-link>
                </li>
                <li class="pl-4 hover:text-orange-600 uppercase text-sm">
                  <router-link to="/Explore/Leisure/NightLife">{{
                    $t('navbar.explore.leisure.night_life')
                  }}</router-link>
                </li>
                <li class="pl-4 hover:text-orange-600 uppercase text-sm">
                  <router-link to="/Explore/Leisure/Vocation">{{
                    $t('navbar.explore.leisure.vocation')
                  }}</router-link>
                </li>
              </ul>
            </div>
          </div>

          <div class="w-1/2 overflow-hidden">
            <div class="flex justify-center">
              <ul>
                <div class="uppercase font-medium text-gray-800">
                  {{ $t('navbar.explore.plan_your_trip.subtitle') }}
                </div>
                <!-- <li class="pl-4 hover:text-orange-600 uppercase text-sm">
                  <router-link
                    to="/Explore/PlanYourTrip/TicketsAndReservations"
                    >{{
                      $t(
                        'navbar.explore.plan_your_trip.tickets_and_reservations'
                      )
                    }}</router-link
                  >
                </li> -->
                <li class="pl-4 hover:text-orange-600 uppercase text-sm">
                  <router-link to="/Explore/PlanYourTrip/Tours">{{
                    $t('navbar.explore.plan_your_trip.tours')
                  }}</router-link>
                </li>
                <li class="pl-4 hover:text-orange-600 uppercase text-sm">
                  <router-link to="/Explore/PlanYourTrip/Guides">{{
                    $t('navbar.explore.plan_your_trip.guides')
                  }}</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.menuItems = document.querySelectorAll('.mega-menu a')
  },
  data() {
    return {
      isVisible: false,
      menuItems: null,
      focusedIndex: 0
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
