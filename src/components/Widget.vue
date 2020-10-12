<template>
  <section
    v-if="(usdConvRates, eurConvRates, weather)"
    class="text-white body-font"
  >
    <div class="container px-5 py-5 mx-auto flex flex-wrap">
      <div
        class="flex mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10"
      >
        <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2r">
          <div class="flex items-center">
            <img
              class="h-12"
              :src="
                'https://openweathermap.org/img/wn/' +
                  weather.weather[0].icon +
                  '@2x.png'
              "
            />
            <p class="leading-relaxed">
              {{ Math.round(weather.main.temp) }} °C
            </p>
          </div>
          <p class="leading-relaxed">Min: {{ weather.main.temp_min }} °C</p>
          <p class="leading-relaxed">Max: {{ weather.main.temp_max }} °C</p>
        </div>
        <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
          <p class="leading-relaxed">USD: {{ usdConvRates.UAH }}</p>
          <p class="leading-relaxed">EUR: {{ eurConvRates.UAH }}</p>
        </div>
        <div class="p-4 sm:w-1/2 lg:w-1/3 w-1/2">
          <p class="leading-relaxed">
            {{ new Date(weather.dt * 1000).toLocaleTimeString() }}
          </p>
          <p class="leading-relaxed text-gray-400 uppercase text-xs">
            місцевий час
          </p>
        </div>
      </div>
    </div>
  </section>
  <div v-else class="card shadow mt-4 text-white" style="width: 21rem;">
    <div class="card-body p-4">
      Зачекайте, інформація завантажується.
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  el: '#app',
  data: function() {
    return {
      usdConvRates: null,
      eurConvRates: null,
      weather: null,
      pad: function(a) {
        return (100 + a + '').slice(-2)
      }
    }
  },
  mounted: function() {
    axios
      .all([
        axios.get(
          'https://prime.exchangerate-api.com/v5/36cc025b13d9122726ba1285/latest/USD'
        ),
        axios.get(
          'https://prime.exchangerate-api.com/v5/36cc025b13d9122726ba1285/latest/EUR'
        ),
        axios.get(
          'https://api.openweathermap.org/data/2.5/weather?lat=48.92&lon=24.71&units=metric&appid=cef457bb164fa54ddf24e56b89469d70'
        )
      ])
      .then(
        axios.spread((url1, url2, url3) => {
          this.usdConvRates = url1.data.conversion_rates
          this.eurConvRates = url2.data.conversion_rates
          this.weather = url3.data
        })
      )
  }
}
</script>
