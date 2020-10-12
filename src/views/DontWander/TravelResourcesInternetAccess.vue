<template>
  <div class="font-sans">
    <section
      v-for="(dontWander, idx) in dontWanders[0].internetAccess
        .basicInformation"
      :key="idx"
      class="text-center my-8 px-8"
    >
      <h1 class="uppercase font-medium mb-2">Доступ в інтернет</h1>
      <img class="ml-auto mr-auto h-64" :src="dontWander" />
    </section>
    <section
      v-for="(dontWander, idx) in dontWanders[0].internetAccess
        .repeatingPattern"
      :key="idx"
      class="container mx-auto max-w-lg py-5 mb-5 border rounded-lg shadow-lg text-center"
    >
      <h2 class="font-semibold underline">
        {{ dontWander.title }}
      </h2>
      <p class=" py-1">Адреса: {{ dontWander.address }}</p>
      <p class="py-1">Ім'я мережі (SSID): {{ dontWander.networkName }}</p>
      <p class="max-w-5xl py-1">Пароль: {{ dontWander.password }}</p>
      <p class="py-1">Статус: {{ dontWander.status }}</p>
    </section>
  </div>
</template>

<script>
import { db } from '../../main'

export default {
  data() {
    return {
      dontWanders: []
    }
  },
  firestore() {
    return {
      dontWanders: db.collection('dontWander')
    }
  }
}
</script>
