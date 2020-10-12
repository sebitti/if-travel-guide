<template>
  <div class="hoverable hover:text-gray-800 text-gray-900">
    <div class="relative block font-medium uppercase cursor-pointer">
      {{ $t('navbar.dontWander.title') }}
    </div>
    <div class="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-white">
      <div class="container mx-auto">
        <div class="flex flex-wrap overflow-hidden">
          <div class="w-1/2 overflow-hidden">
            <div class="flex justify-center">
              <ul>
                <div class="uppercase font-medium text-gray-800">
                  {{ $t('navbar.dontWander.travel_resources.subtitle') }}
                </div>
                <!-- <li class="pl-4 hover:text-orange-600 uppercase text-sm">
                  <router-link
                    to="/DontWander/TravelResources/BasicInformation"
                    >{{
                      $t('navbar.dontWander.travel_resources.basic_information')
                    }}</router-link
                  >
                </li> -->
                <li class="pl-4 hover:text-orange-600 uppercase text-sm">
                  <router-link
                    to="/DontWander/TravelResources/OfficialTouristCenter"
                    >{{
                      $t(
                        'navbar.dontWander.travel_resources.official_tourist_cener'
                      )
                    }}</router-link
                  >
                </li>
                <li class="pl-4 hover:text-orange-600 uppercase text-sm">
                  <router-link to="/DontWander/TravelResources/VisaCenter">{{
                    $t('navbar.dontWander.travel_resources.visa_center')
                  }}</router-link>
                </li>
                <li class="pl-4 hover:text-orange-600 uppercase text-sm">
                  <router-link to="/DontWander/TravelResources/Customs">{{
                    $t('navbar.dontWander.travel_resources.customs')
                  }}</router-link>
                </li>
                <li class="pl-4 hover:text-orange-600 uppercase text-sm">
                  <router-link to="/DontWander/TravelResources/Consulates">{{
                    $t('navbar.dontWander.travel_resources.consulates')
                  }}</router-link>
                </li>
                <li class="pl-4 hover:text-orange-600 uppercase text-sm">
                  <router-link to="/DontWander/TravelResources/TrainStations">{{
                    $t('navbar.dontWander.travel_resources.train_station')
                  }}</router-link>
                </li>
                <li class="pl-4 hover:text-orange-600 uppercase text-sm">
                  <router-link to="/DontWander/TravelResources/Transports">{{
                    $t('navbar.dontWander.travel_resources.transport')
                  }}</router-link>
                </li>
                <li class="pl-4 hover:text-orange-600 uppercase text-sm">
                  <router-link
                    to="/DontWander/TravelResources/InternetAccess"
                    >{{
                      $t('navbar.dontWander.travel_resources.internet_access')
                    }}</router-link
                  >
                </li>
                <li class="pl-4 hover:text-orange-600 uppercase text-sm">
                  <router-link to="/DontWander/TravelResources/Weather">{{
                    $t('navbar.dontWander.travel_resources.weather')
                  }}</router-link>
                </li>
              </ul>
            </div>
          </div>

          <div class="w-1/2 overflow-hidden">
            <div class="flex justify-center">
              <ul>
                <div class="uppercase font-medium text-gray-800">
                  {{ $t('navbar.dontWander.maps_and_guides.subtitle') }}
                </div>
                <li class="pl-4 hover:text-orange-600 uppercase text-sm">
                  <router-link to="/DontWander/MapsAndGuides/Map">{{
                    $t('navbar.dontWander.maps_and_guides.map')
                  }}</router-link>
                </li>
                <li class="pl-4 hover:text-orange-600 uppercase text-sm">
                  <router-link
                    to="/DontWander/MapsAndGuides/RoutesAroundTheCity"
                    >{{
                      $t(
                        'navbar.dontWander.maps_and_guides.routes_around_the_city'
                      )
                    }}</router-link
                  >
                </li>
                <li class="pl-4 hover:text-orange-600 uppercase text-sm">
                  <router-link
                    to="/DontWander/MapsAndGuides/IvanoFrankivskCityWalk"
                    >{{
                      $t(
                        'navbar.dontWander.maps_and_guides.ivano_frankivsk_city_walk'
                      )
                    }}</router-link
                  >
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
