<template>
  <div class="hoverable hover:text-gray-800 text-gray-900">
    <div class="relative block font-medium uppercase cursor-pointer">
      {{ $t('navbar.city.title') }}
    </div>
    <div class="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-white">
      <div class="container mx-auto">
        <div class="flex flex-wrap overflow-hidden">
          <div class="w-1/3 overflow-hidden">
            <div class="flex justify-center">
              <ul>
                <div class="uppercase font-medium text-gray-800">
                  {{ $t('navbar.city.events.subtitle') }}
                </div>
                <li class="pl-4 hover:text-orange-600 uppercase text-sm">
                  <router-link to="/City/Events/Performances">{{
                    $t('navbar.city.events.performances')
                  }}</router-link>
                </li>
                <li class="pl-4 hover:text-orange-600 uppercase text-sm">
                  <router-link to="/City/Events/Festivals">{{
                    $t('navbar.city.events.festivals')
                  }}</router-link>
                </li>
                <li class="pl-4 hover:text-orange-600 uppercase text-sm">
                  <router-link to="/City/Events/Exhibitions">{{
                    $t('navbar.city.events.exhibitions')
                  }}</router-link>
                </li>
                <li class="pl-4 hover:text-orange-600 uppercase text-sm">
                  <router-link to="/City/Events/Concerts">{{
                    $t('navbar.city.events.concerts')
                  }}</router-link>
                </li>
                <li class="pl-4 hover:text-orange-600 uppercase text-sm">
                  <router-link to="/City/Events/Sports">{{
                    $t('navbar.city.events.sports')
                  }}</router-link>
                </li>
                <li class="pl-4 hover:text-orange-600 uppercase text-sm">
                  <router-link to="/City/Events/Conferences">{{
                    $t('navbar.city.events.conferences')
                  }}</router-link>
                </li>
                <li class="pl-4 hover:text-orange-600 uppercase text-sm">
                  <router-link to="/City/Events/Fairs">{{
                    $t('navbar.city.events.fairs')
                  }}</router-link>
                </li>
                <li class="pl-4 hover:text-orange-600 uppercase text-sm">
                  <router-link to="/City/Events/ShowsAndMusicals">{{
                    $t('navbar.city.events.shows_and_musicals')
                  }}</router-link>
                </li>
                <li class="pl-4 hover:text-orange-600 uppercase text-sm">
                  <router-link to="/City/Events/CalendarOfEvents">{{
                    $t('navbar.city.events.calendar_of_events')
                  }}</router-link>
                </li>
              </ul>
            </div>
          </div>

          <div class="w-1/3 overflow-hidden">
            <div class="flex justify-center">
              <ul>
                <div class="uppercase font-medium text-gray-800">
                  {{ $t('navbar.city.relevant.subtitle') }}
                </div>
                <li class="pl-4 hover:text-orange-600 uppercase text-sm">
                  <router-link to="/City/Relevant/WeekendTips">{{
                    $t('navbar.city.relevant.weekend_tips')
                  }}</router-link>
                </li>
                <li class="pl-4 hover:text-orange-600 uppercase text-sm">
                  <router-link to="/City/Relevant/TipsOfTheMonth">{{
                    $t('navbar.city.relevant.tips_of_the_month')
                  }}</router-link>
                </li>
                <li class="pl-4 hover:text-orange-600 uppercase text-sm">
                  <router-link to="/City/Relevant/Highlights">{{
                    $t('navbar.city.relevant.higlights')
                  }}</router-link>
                </li>
                <li class="pl-4 hover:text-orange-600 uppercase text-sm">
                  <router-link to="/City/Relevant/NewAndFashionTrends">{{
                    $t('navbar.city.relevant.new_and_fashion_trends')
                  }}</router-link>
                </li>
                <li class="pl-4 hover:text-orange-600 uppercase text-sm">
                  <router-link to="/City/Relevant/MustSee">{{
                    $t('navbar.city.relevant.must_see')
                  }}</router-link>
                </li>
              </ul>
            </div>
          </div>

          <div class="w-1/3 overflow-hidden">
            <div class="flex justify-center">
              <ul>
                <div class="uppercase font-medium text-gray-800">
                  {{ $t('navbar.city.seasons.subtitle') }}
                </div>
                <li class="pl-4 hover:text-orange-600 uppercase text-sm">
                  <router-link to="/City/Seasons/Spring">{{
                    $t('navbar.city.seasons.spring')
                  }}</router-link>
                </li>
                <li class="pl-4 hover:text-orange-600 uppercase text-sm">
                  <router-link to="/City/Seasons/Summer">{{
                    $t('navbar.city.seasons.summer')
                  }}</router-link>
                </li>
                <li class="pl-4 hover:text-orange-600 uppercase text-sm">
                  <router-link to="/City/Seasons/Autumn">{{
                    $t('navbar.city.seasons.autumn')
                  }}</router-link>
                </li>
                <li class="pl-4 hover:text-orange-600 uppercase text-sm">
                  <router-link to="/City/Seasons/Winter">{{
                    $t('navbar.city.seasons.winter')
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
