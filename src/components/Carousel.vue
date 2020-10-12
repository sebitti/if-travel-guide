<template>
  <div id="Carousel">
    <div class="container relative mx-auto carousel " style="max-width:600px;">
      <div class="relative w-full overflow-hidden carousel-inner rounded">
        <!--Slide 1-->
        <input
          class="carousel-open"
          type="radio"
          id="carousel-1"
          name="carousel"
          aria-hidden="true"
          hidden=""
          checked="checked"
        />
        <div class="absolute opacity-0 carousel-item" style="height:50vh;">
          <div
            class="flex block w-full h-full pt-6 mx-auto bg-right bg-cover md:pt-0 md:items-center"
            style="background-image: url('https://synod.ugcc.ua/pub/images/8818529044ee3ff1.jpg');"
          >
            <div class="container mx-auto">
              <div
                class="flex flex-col items-center w-full px-6 tracking-wide lg:w-1/2 md:ml-16 md:items-start"
              >
                <p class="my-4 text-2xl text-white">
                  Місто, в якому ти відчуваєш справжнє життя
                </p>
                <!-- <a
                  class="inline-block text-xl leading-relaxed no-underline border-b border-gray-600 hover:text-black hover:border-black"
                  href="#"
                  >kek</a
                > -->
              </div>
            </div>
          </div>
        </div>
        <label
          for="carousel-3"
          class="absolute inset-y-0 left-0 z-10 hidden w-10 h-10 my-auto ml-2 text-3xl font-bold leading-tight text-center text-black bg-white rounded-full cursor-pointer prev control-1 md:ml-10 hover:text-white hover:bg-gray-900"
          >‹</label
        >
        <label
          for="carousel-2"
          class="absolute inset-y-0 right-0 z-10 hidden w-10 h-10 my-auto mr-2 text-3xl font-bold leading-tight text-center text-black bg-white rounded-full cursor-pointer next control-1 md:mr-10 hover:text-white hover:bg-gray-900"
          >›</label
        >

        <!--Slide 2-->
        <input
          class="carousel-open"
          type="radio"
          id="carousel-2"
          name="carousel"
          aria-hidden="true"
          hidden=""
        />
        <div
          class="absolute bg-right bg-cover opacity-0 carousel-item"
          style="height:50vh;"
        >
          <div
            class="flex block w-full h-full pt-6 mx-auto bg-right bg-cover md:pt-0 md:items-center"
            style="background-image: url('https://s1.studway.com.ua/wp-content/uploads/2014/12/ivano-frankivsk.jpg');"
          >
            <div class="container mx-auto">
              <div
                class="flex flex-col items-center w-full px-6 tracking-wide md:items-start max-w-sm"
              >
                <p class="my-4 pt-64 text-2xl text-white">
                  Івано-Франківськ - відкритий для світу!
                </p>
              </div>
            </div>
          </div>
        </div>
        <label
          for="carousel-1"
          class="absolute inset-y-0 left-0 z-10 hidden w-10 h-10 my-auto ml-2 text-3xl font-bold leading-tight text-center text-black bg-white rounded-full cursor-pointer prev control-2 md:ml-10 hover:text-white hover:bg-gray-900"
          >‹</label
        >
        <label
          for="carousel-3"
          class="absolute inset-y-0 right-0 z-10 hidden w-10 h-10 my-auto mr-2 text-3xl font-bold leading-tight text-center text-black bg-white rounded-full cursor-pointer next control-2 md:mr-10 hover:text-white hover:bg-gray-900"
          >›</label
        >

        <!--Slide 3-->
        <input
          class="carousel-open"
          type="radio"
          id="carousel-3"
          name="carousel"
          aria-hidden="true"
          hidden=""
        />
        <div class="absolute opacity-0 carousel-item" style="height:50vh;">
          <div
            class="flex block w-full h-full pt-6 mx-auto bg-bottom bg-cover md:pt-0 md:items-center"
            style="background-image: url('https://firtka.if.ua/data/blog/226061/b81d4c3864038829484061ed760a4fda.jpeg');"
          >
            <div class="container mx-auto">
              <div
                class="flex flex-col items-center w-full px-6 tracking-wide lg:w-1/2 md:ml-16 md:items-start pt-10"
              >
                <p class="my-4 text-2xl text-white">
                  Події у Франківську
                </p>
                <a
                  class="inline-block text-xl leading-relaxed no-underline border-b-2 hover:text-black hover:border-black text-white"
                  href="#"
                  >Докладніше</a
                >
              </div>
            </div>
          </div>
        </div>
        <label
          for="carousel-2"
          class="absolute inset-y-0 left-0 z-10 hidden w-10 h-10 my-auto ml-2 text-3xl font-bold leading-tight text-center text-black bg-white rounded-full cursor-pointer prev control-3 md:ml-10 hover:text-white hover:bg-gray-900"
          >‹</label
        >
        <label
          for="carousel-1"
          class="absolute inset-y-0 right-0 z-10 hidden w-10 h-10 my-auto mr-2 text-3xl font-bold leading-tight text-center text-black bg-white rounded-full cursor-pointer next control-3 md:mr-10 hover:text-white hover:bg-gray-900"
          >›</label
        >

        <!-- Add additional indicators for each slide-->
        <ol class="carousel-indicators">
          <li class="inline-block mr-3">
            <label
              for="carousel-1"
              class="block text-4xl text-gray-400 cursor-pointer carousel-bullet hover:text-gray-900"
              >•</label
            >
          </li>
          <li class="inline-block mr-3">
            <label
              for="carousel-2"
              class="block text-4xl text-gray-400 cursor-pointer carousel-bullet hover:text-gray-900"
              >•</label
            >
          </li>
          <li class="inline-block mr-3">
            <label
              for="carousel-3"
              class="block text-4xl text-gray-400 cursor-pointer carousel-bullet hover:text-gray-900"
              >•</label
            >
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<style>
.carousel-open:checked + .carousel-item {
  position: static;
  opacity: 100;
}

.carousel-item {
  -webkit-transition: opacity 0.6s ease-out;
  transition: opacity 0.6s ease-out;
}

#carousel-1:checked ~ .control-1,
#carousel-2:checked ~ .control-2,
#carousel-3:checked ~ .control-3 {
  display: block;
}

.carousel-indicators {
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 2%;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 10;
}

#carousel-1:checked
  ~ .control-1
  ~ .carousel-indicators
  li:nth-child(1)
  .carousel-bullet,
#carousel-2:checked
  ~ .control-2
  ~ .carousel-indicators
  li:nth-child(2)
  .carousel-bullet,
#carousel-3:checked
  ~ .control-3
  ~ .carousel-indicators
  li:nth-child(3)
  .carousel-bullet {
  color: teal;
  /*Set to match the Tailwind colour you want the active one to be */
}
</style>
