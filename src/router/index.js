import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

import MyFavorite from '../views/MyFavorite.vue'
import MyFavoriteEmpty from '../views/MyFavoriteEmpty.vue'
import Feedback from '../views/Feedback.vue'
// City
import EventsPerformances from '../views/City/EventsPerformances.vue'
import EventsPerformancesDetail from '../views/City/CityDetails/EventsPerformancesDetail.vue'
import EventsFestivals from '../views/City/EventsFestivals.vue'
import EventsExhibitions from '../views/City/EventsExhibitions.vue'
import EventsConcerts from '../views/City/EventsConcerts.vue'
import EventsSports from '../views/City/EventsSports.vue'
import EventsConferences from '../views/City/EventsConferences.vue'
import EventsFairs from '../views/City/EventsFairs.vue'
import EventsShowsAndMusicals from '../views/City/EventsShowsAndMusicals.vue'
import EventsCalendarOfEvents from '../views/City/EventsCalendarOfEvents.vue'

import RelevantWeekendTips from '../views/City/RelevantWeekendTips.vue'
import RelevantTipsOfTheMonth from '../views/City/RelevantTipsOfTheMonth.vue'
import RelevantHighlights from '../views/City/RelevantHighlights.vue'
import RelevantNewAndFashionTrends from '../views/City/RelevantNewAndFashionTrends.vue'
import RelevantMustSee from '../views/City/RelevantMustSee.vue'

import SeasonsSpring from '../views/City/SeasonsSpring.vue'
import SeasonsSummer from '../views/City/SeasonsSummer.vue'
import SeasonsAutumn from '../views/City/SeasonsAutumn.vue'
import SeasonsWinter from '../views/City/SeasonsWinter.vue'
// Explore
import LeisureHistoricalManumentsAndCulture from '../views/Explore/LeisureHistoricalManumentsAndCulture.vue'
import LeisureHistoricalManumentsAndCultureDetail from '../views/Explore/ExploreDetails/LeisureHistoricalManumentsAndCultureDetail.vue'
import LeisureMuseumsAndGalleries from '../views/Explore/LeisureMuseumsAndGalleries.vue'
import LeisureTheatersAndCinema from '../views/Explore/LeisureTheatersAndCinema.vue'
import LeisureParks from '../views/Explore/LeisureParks.vue'
import LeisureRestourants from '../views/Explore/LeisureRestourants.vue'
import LeisureEntertainment from '../views/Explore/LeisureEntertainment.vue'
import LeisureNightLife from '../views/Explore/LeisureNightLife.vue'
import LeisureVocation from '../views/Explore/LeisureVocation.vue'

import PlanYourTripTicketsAndReservations from '../views/Explore/PlanYourTripTicketsAndReservations.vue'
import PlanYourTripTours from '../views/Explore/PlanYourTripTours.vue'
import PlanYourTripGuides from '../views/Explore/PlanYourTripGuides.vue'
// Stay
import AccommodationHostels from '../views/Stay/AccommodationHostels.vue'
import AccommodationMotels from '../views/Stay/AccommodationMotels.vue'
import AccommodationHotels from '../views/Stay/AccommodationHotels.vue'
import AccommodationTouristBases from '../views/Stay/AccommodationTouristBases.vue'
import AccommodationApartments from '../views/Stay/AccommodationApartments.vue'

import PlaceReservation from '../views/Stay/PlaceReservation.vue'
// Dont wander
import TravelResourcesBasicInformation from '../views/DontWander/TravelResourcesBasicInformation.vue'
import TravelResourcesTouristCenter from '../views/DontWander/TravelResourcesTouristCenter.vue'
import TravelResourcesVisaCenter from '../views/DontWander/TravelResourcesVisaCenter.vue'
import TravelResourcesCustoms from '../views/DontWander/TravelResourcesCustoms.vue'
import TravelResourcesConsulates from '../views/DontWander/TravelResourcesConsulates.vue'
import TravelResourcesTrainStations from '../views/DontWander/TravelResourcesTrainStations.vue'
import TravelResourcesTransports from '../views/DontWander/TravelResourcesTransports.vue'
import TravelResourcesInternetAccess from '../views/DontWander/TravelResourcesInternetAccess.vue'
import TravelResourcesWeather from '../views/DontWander/TravelResourcesWeather.vue'

import MapsAndGuidesMap from '../views/DontWander/MapsAndGuidesMap.vue'
import MapsAndGuidesRoutesAroundTheCity from '../views/DontWander/MapsAndGuidesRoutesAroundTheCity.vue'
import MapsAndGuidesIvanoFrankivskCityWalk from '../views/DontWander/MapsAndGuidesIvanoFrankivskCityWalk.vue'
// import firebase from 'firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/MyFavorite',
    name: 'MyFavorite',
    component: MyFavorite,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/MyFavoriteEmpty',
    name: 'MyFavoriteEmpty',
    component: MyFavoriteEmpty
  },
  {
    path: '/Feedback',
    name: 'Feedback',
    component: Feedback
  },
  // City
  {
    path: '/City/Events/Performances',
    name: 'EventsPerformances',
    component: EventsPerformances
  },
  {
    path: '/City/Events/Performances/Detail',
    name: 'EventsPerformancesDetail',
    component: EventsPerformancesDetail
  },
  {
    path: '/City/Events/Festivals',
    name: 'EventsFestivals',
    component: EventsFestivals
  },
  {
    path: '/City/Events/Exhibitions',
    name: 'EventsExhibitions',
    component: EventsExhibitions
  },
  {
    path: '/City/Events/Concerts',
    name: 'EventsConcerts',
    component: EventsConcerts
  },
  {
    path: '/City/Events/Sports',
    name: 'EventsSports',
    component: EventsSports
  },
  {
    path: '/City/Events/Conferences',
    name: 'EventsConferences',
    component: EventsConferences
  },
  {
    path: '/City/Events/Fairs',
    name: 'EventsFairs',
    component: EventsFairs
  },
  {
    path: '/City/Events/ShowsAndMusicals',
    name: 'EventsShowsAndMusicals',
    component: EventsShowsAndMusicals
  },
  {
    path: '/City/Events/CalendarOfEvents',
    name: 'EventsCalendarOfEvents',
    component: EventsCalendarOfEvents
  },
  {
    path: '/City/Relevant/WeekendTips',
    name: 'RelevantWeekendTips',
    component: RelevantWeekendTips
  },
  {
    path: '/City/Relevant/TipsOfTheMonth',
    name: 'RelevantTipsOfTheMonth',
    component: RelevantTipsOfTheMonth
  },
  {
    path: '/City/Relevant/Highlights',
    name: 'RelevantHighlights',
    component: RelevantHighlights
  },
  {
    path: '/City/Relevant/NewAndFashionTrends',
    name: 'RelevantNewAndFashionTrends',
    component: RelevantNewAndFashionTrends
  },
  {
    path: '/City/Relevant/MustSee',
    name: 'RelevantMustSee',
    component: RelevantMustSee
  },
  {
    path: '/City/Seasons/Spring',
    name: 'SeasonsSpring',
    component: SeasonsSpring
  },
  {
    path: '/City/Seasons/Summer',
    name: 'SeasonsSummer',
    component: SeasonsSummer
  },
  {
    path: '/City/Seasons/Autumn',
    name: 'SeasonsAutumn',
    component: SeasonsAutumn
  },
  {
    path: '/City/Seasons/Winter',
    name: 'SeasonsWinter',
    component: SeasonsWinter
  },
  // Explore
  {
    path: '/Explore/Leisure/HistoricalManumentsAndCulture',
    name: 'LeisureHistoricalManumentsAndCulture',
    component: LeisureHistoricalManumentsAndCulture
  },
  {
    path: '/Explore/Leisure/LeisureHistoricalManumentsAndCulture/Detail',
    name: 'LeisureHistoricalManumentsAndCultureDetail',
    component: LeisureHistoricalManumentsAndCultureDetail
  },
  {
    path: '/Explore/Leisure/MuseumsAndGalleries',
    name: 'LeisureMuseumsAndGalleries',
    component: LeisureMuseumsAndGalleries
  },
  {
    path: '/Explore/Leisure/TheatersAndCinema',
    name: 'LeisureTheatersAndCinema',
    component: LeisureTheatersAndCinema
  },
  {
    path: '/Explore/Leisure/Parks',
    name: 'LeisureParks',
    component: LeisureParks
  },
  {
    path: '/Explore/Leisure/Restourants',
    name: 'LeisureRestourants',
    component: LeisureRestourants
  },
  {
    path: '/Explore/Leisure/Entertainment',
    name: 'LeisureEntertainment',
    component: LeisureEntertainment
  },
  {
    path: '/Explore/Leisure/NightLife',
    name: 'LeisureNightLife',
    component: LeisureNightLife
  },
  {
    path: '/Explore/Leisure/Vocation',
    name: 'LeisureVocation',
    component: LeisureVocation
  },
  {
    path: '/Explore/PlanYourTrip/TicketsAndReservations',
    name: 'PlanYourTripTicketsAndReservations',
    component: PlanYourTripTicketsAndReservations
  },
  {
    path: '/Explore/PlanYourTrip/Tours',
    name: 'PlanYourTripTours',
    component: PlanYourTripTours
  },
  {
    path: '/Explore/PlanYourTrip/Guides',
    name: 'PlanYourTripGuides',
    component: PlanYourTripGuides
  },
  // Stay
  {
    path: '/Stay/Accommodation/Hostels',
    name: 'AccommodationHostels',
    component: AccommodationHostels
  },
  {
    path: '/Stay/Accommodation/Motels',
    name: 'AccommodationMotels',
    component: AccommodationMotels
  },
  {
    path: '/Stay/Accommodation/Hotels',
    name: 'AccommodationHotels',
    component: AccommodationHotels
  },
  {
    path: '/Stay/Accommodation/TouristBases',
    name: 'AccommodationTouristBases',
    component: AccommodationTouristBases
  },
  {
    path: '/Stay/Accommodation/ApartmentsForTemporaryResidence',
    name: 'AccommodationApartments',
    component: AccommodationApartments
  },
  {
    path: '/Stay/PlaceReservation',
    name: 'PlaceReservation',
    component: PlaceReservation
  },
  // Dont wander
  {
    path: '/DontWander/TravelResources/BasicInformation',
    name: 'TravelResourcesBasicInformation',
    component: TravelResourcesBasicInformation
  },
  {
    path: '/DontWander/TravelResources/OfficialTouristCenter',
    name: 'TravelResourcesTouristCenter',
    component: TravelResourcesTouristCenter
  },
  {
    path: '/DontWander/TravelResources/VisaCenter',
    name: 'TravelResourcesVisaCenter',
    component: TravelResourcesVisaCenter
  },
  {
    path: '/DontWander/TravelResources/Customs',
    name: 'TravelResourcesCustoms',
    component: TravelResourcesCustoms
  },
  {
    path: '/DontWander/TravelResources/Consulates',
    name: 'TravelResourcesConsulates',
    component: TravelResourcesConsulates
  },
  {
    path: '/DontWander/TravelResources/TrainStations',
    name: 'TravelResourcesTrainStations',
    component: TravelResourcesTrainStations
  },
  {
    path: '/DontWander/TravelResources/Transports',
    name: 'TravelResourcesTransports',
    component: TravelResourcesTransports
  },
  {
    path: '/DontWander/TravelResources/InternetAccess',
    name: 'TravelResourcesInternetAccess',
    component: TravelResourcesInternetAccess
  },
  {
    path: '/DontWander/TravelResources/Weather',
    name: 'TravelResourcesWeather',
    component: TravelResourcesWeather
  },
  {
    path: '/DontWander/MapsAndGuides/Map',
    name: 'MapsAndGuidesMap',
    component: MapsAndGuidesMap
  },
  {
    path: '/DontWander/MapsAndGuides/RoutesAroundTheCity',
    name: 'MapsAndGuidesRoutesAroundTheCity',
    component: MapsAndGuidesRoutesAroundTheCity
  },
  {
    path: '/DontWander/MapsAndGuides/IvanoFrankivskCityWalk',
    name: 'MapsAndGuidesIvanoFrankivskCityWalk',
    component: MapsAndGuidesIvanoFrankivskCityWalk
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   const currentUser = firebase.auth().currentUser
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

//   if (requiresAuth && !currentUser) next('login')
//   else if (!requiresAuth && currentUser) next('MyFavorite')
//   else next()
// })

export default router
