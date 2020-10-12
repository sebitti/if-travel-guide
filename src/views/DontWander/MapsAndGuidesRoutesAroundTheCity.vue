<template>
  <div class="font-sans flex flex-col items-center">
    <section
      v-for="dontWander of dontWanders"
      :key="dontWander"
      class="text-center my-8 px-8"
    >
      <h1 class="uppercase font-medium mb-2">Маршрути по місту</h1>
      <img
        class="ml-auto mr-auto max-h-screen"
        :src="dontWanders[0].aroundTheCity.basicInformation.touristRoutesImg"
        alt=""
      />
    </section>
    <section
      v-for="dontWander of dontWanders"
      :key="dontWander"
      class="pb-10 pl-48"
    >
      <h2 class="textIndent max-w-5xl font-semibold underline">
        {{
          dontWanders[0].aroundTheCity.basicInformation.routes.routeOne.title
        }}
      </h2>
      <p class="textIndent max-w-5xl py-2">
        {{
          dontWanders[0].aroundTheCity.basicInformation.routes.routeOne.item1
        }}
      </p>
      <p class="textIndent max-w-5xl py-2">
        {{
          dontWanders[0].aroundTheCity.basicInformation.routes.routeOne.item2
        }}
      </p>
      <p class="textIndent max-w-5xl py-2">
        {{
          dontWanders[0].aroundTheCity.basicInformation.routes.routeOne.item3
        }}
      </p>
      <p class="textIndent max-w-5xl py-2">
        {{
          dontWanders[0].aroundTheCity.basicInformation.routes.routeOne.item4
        }}
      </p>
      <p class="textIndent max-w-5xl py-2">
        {{
          dontWanders[0].aroundTheCity.basicInformation.routes.routeOne.item5
        }}
      </p>
      <p class="textIndent max-w-5xl py-2">
        {{
          dontWanders[0].aroundTheCity.basicInformation.routes.routeOne.item6
        }}
      </p>
      <p class="textIndent max-w-5xl py-2">
        {{
          dontWanders[0].aroundTheCity.basicInformation.routes.routeOne.item7
        }}
      </p>
      <p class="textIndent max-w-5xl py-2">
        {{
          dontWanders[0].aroundTheCity.basicInformation.routes.routeOne.item8
        }}
      </p>
    </section>
    <section class="pb-10 pl-48">
      <h2 class="textIndent max-w-5xl font-semibold underline">
        {{
          dontWanders[0].aroundTheCity.basicInformation.routes.routeTwo.title
        }}
      </h2>
      <p class="textIndent max-w-5xl py-2">
        {{
          dontWanders[0].aroundTheCity.basicInformation.routes.routeTwo.item1
        }}
      </p>
      <p class="textIndent max-w-5xl py-2">
        {{
          dontWanders[0].aroundTheCity.basicInformation.routes.routeTwo.item2
        }}
      </p>
      <p class="textIndent max-w-5xl py-2">
        {{
          dontWanders[0].aroundTheCity.basicInformation.routes.routeTwo.item3
        }}
      </p>
      <p class="textIndent max-w-5xl py-2">
        {{
          dontWanders[0].aroundTheCity.basicInformation.routes.routeTwo.item4
        }}
      </p>
      <p class="textIndent max-w-5xl py-2">
        {{
          dontWanders[0].aroundTheCity.basicInformation.routes.routeTwo.item5
        }}
      </p>
      <p class="textIndent max-w-5xl py-2">
        {{
          dontWanders[0].aroundTheCity.basicInformation.routes.routeTwo.item6
        }}
      </p>
    </section>
    <section class="pb-10 pl-48">
      <h2 class="textIndent max-w-5xl font-semibold underline">
        {{
          dontWanders[0].aroundTheCity.basicInformation.routes.routeThree.title
        }}
      </h2>
      <p class="textIndent max-w-5xl py-2">
        {{
          dontWanders[0].aroundTheCity.basicInformation.routes.routeTwo.item1
        }}
      </p>
      <p class="textIndent max-w-5xl py-2">
        {{
          dontWanders[0].aroundTheCity.basicInformation.routes.routeTwo.item2
        }}
      </p>
      <p class="textIndent max-w-5xl py-2">
        {{
          dontWanders[0].aroundTheCity.basicInformation.routes.routeTwo.item3
        }}
      </p>
      <p class="textIndent max-w-5xl py-2">
        {{
          dontWanders[0].aroundTheCity.basicInformation.routes.routeTwo.item4
        }}
      </p>
      <p class="textIndent max-w-5xl py-2">
        {{
          dontWanders[0].aroundTheCity.basicInformation.routes.routeTwo.item5
        }}
      </p>
      <p class="textIndent max-w-5xl py-2">
        {{
          dontWanders[0].aroundTheCity.basicInformation.routes.routeTwo.item6
        }}
      </p>
      <p class="textIndent max-w-5xl py-2">
        {{
          dontWanders[0].aroundTheCity.basicInformation.routes.routeTwo.item7
        }}
      </p>
    </section>
    <section class="pb-10 pl-48">
      <p class="textIndent max-w-5xl font-semibold">
        {{ dontWanders[0].aroundTheCity.basicInformation.routes.advices.title }}
      </p>
      <p class="textIndent max-w-5xl py-2">
        {{ dontWanders[0].aroundTheCity.basicInformation.routes.advices.item1 }}
      </p>
      <p class="textIndent max-w-5xl py-2">
        {{ dontWanders[0].aroundTheCity.basicInformation.routes.advices.item2 }}
      </p>
      <p class="textIndent max-w-5xl py-2">
        {{ dontWanders[0].aroundTheCity.basicInformation.routes.advices.item3 }}
      </p>
      <p class="textIndent max-w-5xl py-2">
        {{ dontWanders[0].aroundTheCity.basicInformation.routes.advices.item4 }}
      </p>
      <p class="textIndent max-w-5xl py-2">
        {{ dontWanders[0].aroundTheCity.basicInformation.routes.advices.item5 }}
      </p>
      <p class="textIndent max-w-5xl py-2">
        {{ dontWanders[0].aroundTheCity.basicInformation.routes.advices.item6 }}
      </p>
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

<style>
.textIndent {
  text-indent: 2.5em;
}
</style>
