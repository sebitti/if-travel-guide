<template>
  <div class="text-sm flex flex-col sm:block h-screen font-serif">
    <section class="my-8 container m-auto">
      <div class="text-center pt-3">
        <h1 class="text-3xl leading-tight my-4 font-bold">
          Карта Івано-Франківська
        </h1>
      </div>
    </section>
    <div class="flex flex-col flex-1 md:flex-row justify-center w-full">
      <div class="w-full md:w-1/2 p-4 flex">
        <button
          @click="addMarkers"
          class="m-1 text-sm py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-700 w-full lg:w-40 flex items-center justify-evenly"
          :disabled="buttonDisabled"
        >
          <span
            class="mr-1 text-lg not-italic font-normal leading-none normal-case align-middle"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              class="fill-current h-5 w-5"
            >
              <path
                d="M13.648 7.362c-.133-.355 3.539-3.634 1.398-6.291-.501-.621-2.201 2.975-4.615 4.603C9.099 6.572 6 8.484 6 9.541v6.842C6 17.654 10.914 19 14.648 19 16.017 19 18 10.424 18 9.062c0-1.368-4.221-1.344-4.352-1.7zM5 7.457c-.658 0-3 .4-3 3.123v4.848c0 2.721 2.342 3.021 3 3.021.657 0-1-.572-1-2.26V9.816c0-1.768 1.657-2.359 1-2.359z"
              /></svg
          ></span>
          <span class="font-semibold">Рекомендуємо</span>
        </button>

        <button
          @click="removeMarkers"
          class="m-1 text-sm py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-700 w-full lg:w-40 flex items-center justify-evenly"
          :disabled="buttonDisabled"
        >
          <span
            class="mr-1 text-lg not-italic font-normal leading-none normal-case align-middle"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              class="fill-current h-5 w-5"
            >
              <path
                d="M16.949 7.472c-2.176 2.902-4.095 3.002-7.046 3.152h-.101c-3.591-.002-6.138-1.336-6.138-1.832-.002-.471 2.298-1.697 5.605-1.819l.59-1.473-.057-.002c-4.908 0-7.791 1.562-7.791 3.051v2c0 .918.582 8.949 7.582 8.949s8-8.031 8-8.949v-2c0-.391-.201-.787-.584-1.158l-.06.081zm.64-4.77a1 1 0 0 0-1.399.201l-3.608 4.809 2.336-5.838a1 1 0 1 0-1.857-.742L9.802 9.274c2.882-.147 4.277-.227 6.067-2.611l1.919-2.561a1 1 0 0 0-.199-1.4z"
              /></svg
          ></span>
          <span class="font-semibold">Заклади</span>
        </button>

        <button
          @click="changeMapStyle"
          class="m-1 text-sm py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-700 w-full lg:w-40 flex items-center justify-evenly"
          :disabled="buttonDisabled"
        >
          <span
            class="mr-1 text-lg not-italic font-normal leading-none normal-case align-middle"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              class="fill-current h-5 w-5"
            >
              <path
                d="M1.228 10.891a.528.528 0 0 0-.159.69l1.296 2.244c.133.23.438.325.677.208L7 12.116V19h2v-7.854l4.071-1.973-2.62-4.54-9.223 6.258zm17.229-7.854a4.061 4.061 0 0 0-5.546-1.484c-.91.525-1.508 1.359-1.801 2.289l2.976 5.156c.951.212 1.973.11 2.885-.415a4.06 4.06 0 0 0 1.486-5.546z"
              /></svg
          ></span>
          <span class="font-semibold">Атракції</span>
        </button>

        <button
          @click="toggleMarkerColor"
          class="m-1 text-sm py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-700 w-full lg:w-40 flex items-center justify-evenly"
          :disabled="buttonDisabled"
        >
          <span
            class="mr-1 text-lg not-italic font-normal leading-none normal-case align-middle"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              class="fill-current h-5 w-5"
            >
              <path
                d="M18.672 11H17v6c0 .445-.194 1-1 1h-4v-6H8v6H4c-.806 0-1-.555-1-1v-6H1.328c-.598 0-.47-.324-.06-.748L9.292 2.22c.195-.202.451-.302.708-.312.257.01.513.109.708.312l8.023 8.031c.411.425.539.749-.059.749z"
              /></svg
          ></span>
          <span class="font-semibold">Музеї</span>
        </button>

        <button
          @click="useCustomMarker = !useCustomMarker"
          class="m-1 text-sm py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-700 w-full lg:w-40 flex items-center justify-evenly"
        >
          <span
            class="mr-1 text-lg not-italic font-normal leading-none normal-case align-middle"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              class="fill-current h-5 w-5"
            >
              <path
                d="M20 10c0-1.361-.758-2.616-2.031-3.622-.002-.001-.004-.001-.005-.003C17.602 2.803 14.177 0 10 0S2.398 2.803 2.036 6.375c-.001.002-.003.002-.005.003C.758 7.384 0 8.639 0 10c0 3.112 3.947 5.669 9 5.97V17c0 1-1.821 1.911-1.821 1.911a.227.227 0 0 0-.109.277S7.375 20 8 20s1.124-.5 2.374-.5 2.439.432 2.439.432a.342.342 0 0 0 .329-.073l.717-.717c.078-.078.058-.173-.046-.212 0 0-1.812-.68-1.812-1.93v-1.121C16.565 15.324 20 12.903 20 10zM2 10c0-1.019.768-1.945 2.022-2.651C4.012 7.233 4 7.117 4 7c0-2.762 2.687-5 6-5s6 2.238 6 5c0 .117-.012.233-.021.349C17.232 8.055 18 8.981 18 10c0 1.864-2.551 3.424-5.999 3.869v-.668a.53.53 0 0 1 .145-.337l1.833-1.726a.534.534 0 0 0 .146-.337V9.95c0-.11-.078-.155-.172-.099l-1.779 1.047c-.096.056-.173.012-.173-.099V7.2c0-.11-.085-.172-.19-.137l-2.621.874a.297.297 0 0 0-.189.263v2.6c0 .11-.079.158-.177.107L6.802 9.843a.289.289 0 0 0-.318.048l-.342.342a.185.185 0 0 0 .009.273l2.7 2.361c.083.073.15.222.15.332v.765C5.056 13.719 2 12.04 2 10z"
              /></svg
          ></span>
          <span class="font-semibold">Парки</span>
        </button>
      </div>
      <div
        class="px-4 w-full md:w-1/2 flex items-center mb-6 justify-end flex-col lg:flex-row lg:mb-0 lg:justify-between"
      >
        <div
          ref="mapSearch"
          class="w-full lg:w-1/2 order-last lg:order-first"
        ></div>
        <div
          class="mb-4 w-full lg:w-auto lg:mt-0 flex justify-center lg:justify-end"
        >
          <!-- There are {{ payload.length }} markers -->
        </div>
      </div>
    </div>
    <div class="map flex flex-col flex-1 md:flex-row justify-center w-full">
      <div
        class="flex flex-row w-full h-24 py-4 px-2 mb-4 bg-gray-100 flex-grow flex-shrink-0 overflow-x-auto h-6 md:h-auto md:overflow-y-auto md:flex-col md:w-1/2 md:mb-0 "
      >
        <div
          :class="{ 'bg-teal-200': selectedMarker == marker.id }"
          class="flex items-center p-2 md:mb-3 w-40 bg-white shadow cursor-pointer md:w-full"
          v-for="(marker, index) in payload"
          :key="marker.id"
          @click="itemClicked(index)"
          ref="items"
        >
          <span
            class="text-xs inline-flex items-center justify-center p-4 mr-2 w-6 h-6 rounded-full bg-teal-800 text-teal-100"
          >
            {{ marker.id }}
          </span>
          <span>{{ marker.label }}</span>
        </div>
      </div>
      <MglMap
        class="w-full md:w-1/2 flex-grow h-full min-h-full"
        :accessToken="accessToken"
        :mapStyle.sync="mapStyle"
        :scrollZoom="false"
        :center="mapCenter"
        :zoom="defaultZoom"
        @load="onMapLoaded"
      >
        <MglNavigationControl :showZoom="true" :showCompass="false" />
        <MglMarker
          v-for="marker in payload"
          :coordinates="[marker.lng, marker.lat]"
          :draggable="true"
          :color.sync="markerColor"
          :markerId="marker.id"
          :key="marker.id + '' + markerColor + (useCustomMarker ? 1 : 0)"
          @click="markerClicked"
          ref="markers"
        >
          <template slot="marker" v-if="useCustomMarker">
            <span
              class="text-xs inline-flex items-center justify-center p-3 mr-2 w-4 h-4 rounded-full"
              :class="{
                'bg-teal-800 text-teal-100': markerColor == 'blue',
                'bg-red-600 text-red-100': markerColor == 'red'
              }"
            >
              {{ marker.id }}
            </span>
          </template>
          <MglPopup>
            <div class="flex items-center">
              <span
                class="text-xs inline-flex items-center justify-center p-3 mr-2 w-4 h-4 rounded-full"
                :class="{
                  'bg-teal-800 text-teal-100': markerColor == 'blue',
                  'bg-red-800 text-red-100': markerColor == 'red'
                }"
              >
                {{ marker.id }}
              </span>
              <span class="text-sm">{{ marker.label }}</span>
            </div>
          </MglPopup>
        </MglMarker>
      </MglMap>
    </div>
  </div>
</template>

<script>
import Mapbox from 'mapbox-gl'
import { MglMap, MglNavigationControl, MglMarker, MglPopup } from 'vue-mapbox'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'

export default {
  components: {
    MglMap,
    MglNavigationControl,
    MglMarker,
    MglPopup
  },
  data() {
    return {
      accessToken: process.env.VUE_APP_MAPBOX_ACCESS_TOKEN,
      defaultZoom: 12,
      mapCenter: [-71.038887, 42.364506],
      mapStyle: 'mapbox://styles/mapbox/light-v9',
      markerColor: 'blue',
      useCustomMarker: false,
      buttonDisabled: false,
      counter: 0,
      selectedMarker: null,
      payload: [],
      // Geocoder
      address: ''
    }
  },
  methods: {
    onMapLoaded(event) {
      this.map = event.map
      this.addMarkers()
      this.addGeocoder()
    },
    toggleMarkerColor() {
      this.markerColor = this.markerColor == 'blue' ? 'red' : 'blue'
    },
    changeMapStyle() {
      if (this.mapStyle == 'mapbox://styles/mapbox/light-v9') {
        this.mapStyle = 'mapbox://styles/mapbox/streets-v11'
      } else {
        this.mapStyle = 'mapbox://styles/mapbox/light-v9'
      }
    },
    itemClicked(index) {
      this.$refs['markers'][index].togglePopup()
      this.selectedMarker = index
      this.$refs.markers.forEach((marker, i) => {
        if (i != index) {
          marker.marker._popup.remove()
        }
      })

      this.$nextTick(() => {
        this.map.panTo(this.$refs['markers'][index].coordinates)
      })
    },
    addMarkers() {
      this.buttonDisabled = true
      const bounds = this.map.getBounds()
      let lat_min = bounds.getSouthWest().lat,
        lat_range = bounds.getNorthEast().lat - lat_min,
        lng_min = bounds.getSouthWest().lng,
        lng_range = bounds.getNorthEast().lng - lng_min
      let limit = this.counter + 20
      for (this.counter; this.counter < limit; this.counter++) {
        this.payload.push({
          id: this.counter,
          lat: lat_min + Math.random() * lat_range,
          lng: lng_min + Math.random() * lng_range,
          label: Math.random()
            .toString(36)
            .substring(2, 15)
        })
      }
      this.buttonDisabled = false
    },
    removeMarkers() {
      this.payload = []
      this.counter = 0
    },
    markerClicked(event) {
      let markerId = event.component.$attrs.markerId
      this.selectedMarker = markerId
      this.$refs.items[markerId].scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center'
      })
    },
    addGeocoder() {
      this.geocoder = new MapboxGeocoder({
        accessToken: this.mapbox.accessToken,
        maboxgl: this.mapbox,
        marker: false
      })
      this.$refs.mapSearch.appendChild(this.geocoder.onAdd(this.map))

      let $this = this
      this.geocoder.on('result', function() {
        $this.$nextTick(() => {
          $this.addMarkers()
        })
      })
    }
  },
  created() {
    this.map = null
    this.mapbox = Mapbox
  }
}
</script>

<style>
.map {
  height: 500px;
}
@media screen and (min-width: 640px) {
  .mapboxgl-ctrl-geocoder {
    width: 100% !important;
    max-width: 100% !important;
  }
}
</style>
