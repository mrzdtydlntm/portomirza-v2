<script>
export default {
  name: "CONTACT",
};
</script>

<template>
  <!-- Start Work -->
  <section class="py-16 md:py-24" id="work">
    <div class="container">
      <div class="grid grid-cols-1" data-aos="fade-up" data-aos-duration="1000">
        <div class="text-center">
          <div class="inline-block">
            <p
              class="bg-purple text-white text-sm font-semibold py-3 px-5 uppercase rounded-full flex items-center gap-2.5"
            >
              <span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4.33454 9.58362C5.35965 9.83993 6.16007 10.6403 6.41638 11.6655L7.37875 15.5149C7.45002 15.8 7.70616 16 8 16C8.29384 16 8.54998 15.8 8.62125 15.5149L9.58362 11.6655C9.83993 10.6403 10.6403 9.83993 11.6655 9.58362L15.5149 8.62125C15.8 8.54998 16 8.29384 16 8C16 7.70616 15.8 7.45002 15.5149 7.37875L11.6655 6.41638C10.6403 6.16007 9.83993 5.35965 9.58362 4.33454L8.62125 0.485071C8.54998 0.199992 8.29384 0 8 0C7.70616 0 7.45002 0.199991 7.37875 0.485071L6.41638 4.33454C6.16007 5.35965 5.35965 6.16007 4.33454 6.41638L0.485071 7.37875C0.199992 7.45002 0 7.70616 0 8C0 8.29384 0.199991 8.54998 0.485071 8.62125L4.33454 9.58362Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
              Selected work
            </p>
          </div>
          <h2 class="font-semibold text-[26px]/normal mt-7">Showcasing My Remarkable Projects</h2>
          <p class="mt-5 text-gray max-w-[708px] mx-auto">Showcase all the project that i've done</p>
        </div>
      </div>
      <div class="grid grid-cols-1 mt-14 gap-7">
        <div
          class="flex flex-wrap lg:flex-nowrap items-stretch border-2 border-gray/20 dark:border-white/[12%]"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div class="order-2 p-10 md:p-12 lg:flex-1 lg:order-1">
            <p class="text-warning text-[22px] font-bold">Backoffice System</p>
            <a
              href="https://kifisika.finder.ac.id/"
              target="_blank"
              class="font-bold text-2xl/normal md:text-3xl/normal lg:text-[40px]/normal inline-block mt-5"
            >
              Aplikasi Penilaian Dosen
            </a>
            <p class="text-gray max-w-[420px] mt-3 md:mt-5">
              This website is an backoffice system for lecturer in Physics Department, Padjadjaran University. It helps
              head of physics department to assess lecturers about the activeness of uploading journals to Scopus.
            </p>
            <p class="text-gray max-w-[420px] mt-3 md:mt-5">
              Tech Stack: Python Django (Backend) and HTML, CSS and JS (Frontend)
            </p>
            <div class="flex items-center gap-4 mt-5 md:mt-8">
              <div class="border-2 border-gray/[14%] h-14 w-14 rounded-full flex items-center justify-center">
                <img src="@/assets/images/tech/python.svg" alt="" />
              </div>
              <div class="border-2 border-gray/[14%] h-14 w-14 rounded-full flex items-center justify-center">
                <img src="@/assets/images/tech/html.svg" alt="" />
              </div>
            </div>
            <div class="inline-block mt-8">
              <a
                href="https://kifisika.finder.ac.id"
                target="_blank"
                class="flex items-center gap-2.5 py-3.5 text-sm font-semibold px-5 border-2 border-dark duration-300 hover:bg-dark hover:text-white dark:border-white/[14%] dark:hover:bg-white dark:hover:text-dark"
              >
                View Project
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M14.0035 7.4083L5.41176 16L4 14.5882L12.5917 5.99654H5.01905V4H16V14.981H14.0035V7.4083Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div class="xl:max-w-[670px] lg:max-w-[400px] w-full lg:order-2 order-1">
            <img src="@/assets/images/work/kifisika.png" class="object-fill w-full h-full mx-auto" alt="" />
          </div>
        </div>
        <div
          class="flex flex-wrap lg:flex-nowrap items-stretch border-2 border-gray/20 dark:border-white/[12%]"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div class="order-2 p-10 md:p-12 lg:flex-1 lg:order-1">
            <p class="text-purple text-[22px] font-bold">3D Object Web Map</p>
            <a
              href="https://bhumi.atrbpn.go.id/peta"
              target="_blank"
              class="font-bold text-2xl/normal md:text-3xl/normal lg:text-[40px]/normal inline-block mt-5"
            >
              ATR/BPN Geospatial Map
            </a>
            <p class="text-gray max-w-[420px] mt-3 md:mt-5">
              This web application is useful to calculate some distance, area or measure of some landfill and 3D
              building asset. Took Bing Maps as a basemap, this web application acts like a map in general with some
              special features in processing its spatial data.
            </p>
            <p class="text-gray max-w-[420px] mt-3 md:mt-5">Tech Stack: ReactJS (Frontend) and ExpressJS (Backend)</p>
            <div class="flex items-center gap-4 mt-5 md:mt-8">
              <div class="border-2 border-gray/[14%] h-14 w-14 rounded-full flex items-center justify-center">
                <img src="@/assets/images/tech/react.svg" alt="" />
              </div>
              <div class="border-2 border-gray/[14%] h-14 w-14 rounded-full flex items-center justify-center">
                <img src="@/assets/images/tech/node.svg" alt="" />
              </div>
            </div>
            <div class="inline-block mt-8">
              <a
                href="https://bhumi.atrbpn.go.id/peta"
                target="_blank"
                class="flex items-center gap-2.5 py-3.5 text-sm font-semibold px-5 border-2 border-dark duration-300 hover:bg-dark hover:text-white dark:border-white/[14%] dark:hover:bg-white dark:hover:text-dark"
              >
                View Project
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M14.0035 7.4083L5.41176 16L4 14.5882L12.5917 5.99654H5.01905V4H16V14.981H14.0035V7.4083Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div class="xl:max-w-[670px] lg:max-w-[400px] w-full lg:order-2 order-1">
            <img src="@/assets/images/work/jica.png" class="object-fill w-full h-full mx-auto" alt="" />
          </div>
        </div>
        <div
          class="flex flex-wrap lg:flex-nowrap items-stretch border-2 border-gray/20 dark:border-white/[12%]"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div class="order-2 p-10 md:p-12 lg:flex-1 lg:order-1">
            <p class="text-purple text-[22px] font-bold">Inventory Management</p>
            <a
              href="https://infinity88.id"
              target="_blank"
              class="font-bold text-2xl/normal md:text-3xl/normal lg:text-[40px]/normal inline-block mt-5"
            >
              Singgalang
            </a>
            <p class="text-gray max-w-[420px] mt-3 md:mt-5">
              A new inventory management application called Singgalang App has been introduced, specifically designed
              for businesses dealing in gold and diamonds. Singgalang App streamlines the process of tracking and
              managing precious inventory. Users can leverage the built-in barcode scanner to effortlessly capture data
              on each piece of gold or diamond, ensuring comprehensive and accurate records.
            </p>
            <p class="text-gray max-w-[420px] mt-3 md:mt-5">
              Tech Stack: VueJS (Frontend), Laravel and Golang (Backend)
            </p>
            <div class="flex items-center gap-4 mt-5 md:mt-8">
              <div class="border-2 border-gray/[14%] h-14 w-14 rounded-full flex items-center justify-center">
                <img src="@/assets/images/tech/vue.svg" alt="" />
              </div>
              <div class="border-2 border-gray/[14%] h-14 w-14 rounded-full flex items-center justify-center">
                <img src="@/assets/images/tech/laravel.svg" alt="" />
              </div>
              <div class="border-2 border-gray/[14%] h-14 w-14 rounded-full flex items-center justify-center">
                <img src="@/assets/images/tech/go.svg" alt="" />
              </div>
            </div>
            <div class="inline-block mt-8">
              <a
                href="https://infinity88.id"
                target="_blank"
                class="flex items-center gap-2.5 py-3.5 text-sm font-semibold px-5 border-2 border-dark duration-300 hover:bg-dark hover:text-white dark:border-white/[14%] dark:hover:bg-white dark:hover:text-dark"
              >
                View Project
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M14.0035 7.4083L5.41176 16L4 14.5882L12.5917 5.99654H5.01905V4H16V14.981H14.0035V7.4083Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div class="xl:max-w-[670px] lg:max-w-[400px] w-full lg:order-2 order-1">
            <img src="@/assets/images/work/singgalang.png" class="object-fill w-full h-full mx-auto" alt="" />
          </div>
        </div>
        <div
          class="flex flex-wrap lg:flex-nowrap items-stretch border-2 border-gray/20 dark:border-white/[12%]"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div class="order-2 p-10 md:p-12 lg:flex-1 lg:order-1">
            <p class="text-[#453DB1] text-[22px] font-bold">IoT Sensor WebApp</p>
            <a
              href="https://mastermine.id"
              target="_blank"
              class="font-bold text-2xl/normal md:text-3xl/normal lg:text-[40px]/normal inline-block mt-5"
            >
              Mastermine
            </a>
            <p class="text-gray max-w-[420px] mt-3 md:mt-5">
              This web application is useful some data from microcontroller that given by sensors and actuator. User can
              analyze all the sensors data, and do some act to trigger the actuator using this website.
            </p>
            <p class="text-gray max-w-[420px] mt-3 md:mt-5">
              Tech Stack: NuxtJS (Frontend), Golang (Backend), Apache Kafka (Message Broker)
            </p>
            <div class="flex items-center gap-4 mt-5 md:mt-8">
              <div class="border-2 border-gray/[14%] h-14 w-14 rounded-full flex items-center justify-center">
                <img src="@/assets/images/tech/nuxt.svg" alt="" />
              </div>
              <div class="border-2 border-gray/[14%] h-14 w-14 rounded-full flex items-center justify-center">
                <img src="@/assets/images/tech/go.svg" alt="" />
              </div>
              <div class="border-2 border-gray/[14%] h-14 w-14 rounded-full flex items-center justify-center">
                <img src="@/assets/images/tech/kafka.svg" alt="" />
              </div>
            </div>
            <div class="inline-block mt-8">
              <a
                href="https://mastermine.id"
                target="_blank"
                class="flex items-center gap-2.5 py-3.5 text-sm font-semibold px-5 border-2 border-dark duration-300 hover:bg-dark hover:text-white dark:border-white/[14%] dark:hover:bg-white dark:hover:text-dark"
              >
                View Project
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M14.0035 7.4083L5.41176 16L4 14.5882L12.5917 5.99654H5.01905V4H16V14.981H14.0035V7.4083Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div class="xl:max-w-[670px] lg:max-w-[400px] w-full lg:order-2 order-1">
            <img src="@/assets/images/work/mastermine.png" class="object-fill w-full h-full mx-auto" alt="" />
          </div>
        </div>
        <div
          class="flex flex-wrap lg:flex-nowrap items-stretch border-2 border-gray/20 dark:border-white/[12%]"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div class="order-2 p-10 md:p-12 lg:flex-1 lg:order-1">
            <p class="text-[#453DB1] text-[22px] font-bold">Measurement WebApp</p>
            <a class="font-bold text-2xl/normal md:text-3xl/normal lg:text-[40px]/normal inline-block mt-5"> Teraa </a>
            <p class="text-gray max-w-[420px] mt-3 md:mt-5">
              This web application is useful for user that want to get a measure for some instrument. As an example, if
              we have Instrument A, it will have some parameter such as pH, waste water, etc.
            </p>
            <p class="text-gray max-w-[420px] mt-3 md:mt-5">Tech Stack: NuxtJS (Frontend), Golang (Backend)</p>
            <div class="flex items-center gap-4 mt-5 md:mt-8">
              <div class="border-2 border-gray/[14%] h-14 w-14 rounded-full flex items-center justify-center">
                <img src="@/assets/images/tech/nuxt.svg" alt="" />
              </div>
              <div class="border-2 border-gray/[14%] h-14 w-14 rounded-full flex items-center justify-center">
                <img src="@/assets/images/tech/go.svg" alt="" />
              </div>
            </div>
          </div>
          <div class="xl:max-w-[670px] lg:max-w-[400px] w-full lg:order-2 order-1">
            <img src="@/assets/images/work/teraa.png" class="object-fill w-full h-full mx-auto" alt="" />
          </div>
        </div>
        <div
          class="flex flex-wrap lg:flex-nowrap items-stretch border-2 border-gray/20 dark:border-white/[12%]"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div class="order-2 p-10 md:p-12 lg:flex-1 lg:order-1">
            <p class="text-[#453DB1] text-[22px] font-bold">IoT Monitoring WebApp</p>
            <a class="font-bold text-2xl/normal md:text-3xl/normal lg:text-[40px]/normal inline-block mt-5">
              POC MQTT UBS
            </a>
            <p class="text-gray max-w-[420px] mt-3 md:mt-5">
              This web is useful to monitoring all the devices using MQTT Paho (broker).
            </p>
            <p class="text-gray max-w-[420px] mt-3 md:mt-5">Tech Stack: NuxtJS (Frontend), Golang (Backend)</p>
            <div class="flex items-center gap-4 mt-5 md:mt-8">
              <div class="border-2 border-gray/[14%] h-14 w-14 rounded-full flex items-center justify-center">
                <img src="@/assets/images/tech/nuxt.svg" alt="" />
              </div>
              <div class="border-2 border-gray/[14%] h-14 w-14 rounded-full flex items-center justify-center">
                <img src="@/assets/images/tech/go.svg" alt="" />
              </div>
            </div>
          </div>
          <div class="xl:max-w-[670px] lg:max-w-[400px] w-full lg:order-2 order-1">
            <img src="@/assets/images/work/ubs.png" class="object-fill w-full h-full mx-auto" alt="" />
          </div>
        </div>
        <div
          class="flex flex-wrap lg:flex-nowrap items-stretch border-2 border-gray/20 dark:border-white/[12%]"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div class="order-2 p-10 md:p-12 lg:flex-1 lg:order-1">
            <p class="text-[#453DB1] text-[22px] font-bold">Company Profile WebApp</p>
            <a
              href="https://faxtor.co.id"
              target="_blank"
              class="font-bold text-2xl/normal md:text-3xl/normal lg:text-[40px]/normal inline-block mt-5"
            >
              Faxtor
            </a>
            <p class="text-gray max-w-[420px] mt-3 md:mt-5">
              Faxtor Company Profile that provide all the information about Faxtor Company such as psychological
              instrument that used by Faxtor, all the member of Faxtor etc.
            </p>
            <p class="text-gray max-w-[420px] mt-3 md:mt-5">Tech Stack: NextJS (Frontend), Golang (Backend)</p>
            <div class="flex items-center gap-4 mt-5 md:mt-8">
              <div class="border-2 border-gray/[14%] h-14 w-14 rounded-full flex items-center justify-center">
                <img src="@/assets/images/tech/next.svg" alt="" />
              </div>
              <div class="border-2 border-gray/[14%] h-14 w-14 rounded-full flex items-center justify-center">
                <img src="@/assets/images/tech/go.svg" alt="" />
              </div>
            </div>
            <div class="inline-block mt-8">
              <a
                href="https://faxtor.co.id"
                target="_blank"
                class="flex items-center gap-2.5 py-3.5 text-sm font-semibold px-5 border-2 border-dark duration-300 hover:bg-dark hover:text-white dark:border-white/[14%] dark:hover:bg-white dark:hover:text-dark"
              >
                View Project
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M14.0035 7.4083L5.41176 16L4 14.5882L12.5917 5.99654H5.01905V4H16V14.981H14.0035V7.4083Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div class="xl:max-w-[670px] lg:max-w-[400px] w-full lg:order-2 order-1">
            <img src="@/assets/images/work/faxtor.png" class="object-fill w-full h-full mx-auto" alt="" />
          </div>
        </div>
        <div
          class="flex flex-wrap lg:flex-nowrap items-stretch border-2 border-gray/20 dark:border-white/[12%]"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div class="order-2 p-10 md:p-12 lg:flex-1 lg:order-1">
            <p class="text-[#453DB1] text-[22px] font-bold">E-Commerce WebApp</p>
            <a
              href="https://crystalsea.id"
              target="_blank"
              class="font-bold text-2xl/normal md:text-3xl/normal lg:text-[40px]/normal inline-block mt-5"
            >
              Crystal of The Sea
            </a>
            <p class="text-gray max-w-[420px] mt-3 md:mt-5">
              Crystal of The Sea is a company that selling a healthy food such as brown anchovy etc. This e-commerce
              provide a transaction app and company profile.
            </p>
            <p class="text-gray max-w-[420px] mt-3 md:mt-5">Tech Stack: NextJS (Frontend), ExpressJS (Backend)</p>
            <div class="flex items-center gap-4 mt-5 md:mt-8">
              <div class="border-2 border-gray/[14%] h-14 w-14 rounded-full flex items-center justify-center">
                <img src="@/assets/images/tech/next.svg" alt="" />
              </div>
              <div class="border-2 border-gray/[14%] h-14 w-14 rounded-full flex items-center justify-center">
                <img src="@/assets/images/tech/node.svg" alt="" />
              </div>
            </div>
            <div class="inline-block mt-8">
              <a
                href="https://crystalsea.id"
                target="_blank"
                class="flex items-center gap-2.5 py-3.5 text-sm font-semibold px-5 border-2 border-dark duration-300 hover:bg-dark hover:text-white dark:border-white/[14%] dark:hover:bg-white dark:hover:text-dark"
              >
                View Project
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M14.0035 7.4083L5.41176 16L4 14.5882L12.5917 5.99654H5.01905V4H16V14.981H14.0035V7.4083Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div class="xl:max-w-[670px] lg:max-w-[400px] w-full lg:order-2 order-1">
            <img src="@/assets/images/work/crystalsea.png" class="object-fill w-full h-full mx-auto" alt="" />
          </div>
        </div>
        <div
          class="flex flex-wrap lg:flex-nowrap items-stretch border-2 border-gray/20 dark:border-white/[12%]"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div class="order-2 p-10 md:p-12 lg:flex-1 lg:order-1">
            <p class="text-[#453DB1] text-[22px] font-bold">QRIS Banking System</p>
            <a class="font-bold text-2xl/normal md:text-3xl/normal lg:text-[40px]/normal inline-block mt-5">
              Allobank
            </a>
            <p class="text-gray max-w-[420px] mt-3 md:mt-5">
              The user's Allo Bank mobile app now features the QRIS functionality. This enables them to make quick and
              secure payments at any merchant in Indonesia displaying the QRIS logo. By eliminating the need for cash or
              physical contact, the app offers a convenient and contactless payment method.
            </p>
            <p class="text-gray max-w-[420px] mt-3 md:mt-5">Tech Stack: Golang (Backend)</p>
            <div class="flex items-center gap-4 mt-5 md:mt-8">
              <div class="border-2 border-gray/[14%] h-14 w-14 rounded-full flex items-center justify-center">
                <img src="@/assets/images/tech/go.svg" alt="" />
              </div>
            </div>
          </div>
          <div class="xl:max-w-[670px] lg:max-w-[400px] w-full lg:order-2 order-1">
            <img src="@/assets/images/work/allobank.png" class="object-fill w-full h-full mx-auto" alt="" />
          </div>
        </div>
        <div
          class="flex flex-wrap lg:flex-nowrap items-stretch border-2 border-gray/20 dark:border-white/[12%]"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div class="order-2 p-10 md:p-12 lg:flex-1 lg:order-1">
            <p class="text-[#453DB1] text-[22px] font-bold">News Clipping and Sentiment Analysis WebApp</p>
            <a
              href="https://eclip.jabarprov.go.id"
              target="_blank"
              class="font-bold text-2xl/normal md:text-3xl/normal lg:text-[40px]/normal inline-block mt-5"
            >
              E-Clip
            </a>
            <p class="text-gray max-w-[420px] mt-3 md:mt-5">
              This application streamlines the process of clipping news articles relevant to the government's
              activities. By utilizing e-Clip, government officials gain access to a centralized and efficient system
              for monitoring news coverage.
            </p>
            <p class="text-gray max-w-[420px] mt-3 md:mt-5">Tech Stack: NextJS (Frontend), Golang (Backend)</p>
            <div class="flex items-center gap-4 mt-5 md:mt-8">
              <div class="border-2 border-gray/[14%] h-14 w-14 rounded-full flex items-center justify-center">
                <img src="@/assets/images/tech/next.svg" alt="" />
              </div>
              <div class="border-2 border-gray/[14%] h-14 w-14 rounded-full flex items-center justify-center">
                <img src="@/assets/images/tech/go.svg" alt="" />
              </div>
            </div>
            <div class="inline-block mt-8">
              <a
                href="https://eclip.jabarprov.go.id"
                target="_blank"
                class="flex items-center gap-2.5 py-3.5 text-sm font-semibold px-5 border-2 border-dark duration-300 hover:bg-dark hover:text-white dark:border-white/[14%] dark:hover:bg-white dark:hover:text-dark"
              >
                View Project
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M14.0035 7.4083L5.41176 16L4 14.5882L12.5917 5.99654H5.01905V4H16V14.981H14.0035V7.4083Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div class="xl:max-w-[670px] lg:max-w-[400px] w-full lg:order-2 order-1">
            <img src="@/assets/images/work/eclip.png" class="object-fill w-full h-full mx-auto" alt="" />
          </div>
        </div>
        <div
          class="flex flex-wrap lg:flex-nowrap items-stretch border-2 border-gray/20 dark:border-white/[12%]"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div class="order-2 p-10 md:p-12 lg:flex-1 lg:order-1">
            <p class="text-[#453DB1] text-[22px] font-bold">Outfit Planner and Annotation WebApp</p>
            <a
              href="https://dash.spiffify.app"
              target="_blank"
              class="font-bold text-2xl/normal md:text-3xl/normal lg:text-[40px]/normal inline-block mt-5"
            >
              Spiffify
            </a>
            <p class="text-gray max-w-[420px] mt-3 md:mt-5">
              Spiffify helps users curate stylish looks by suggesting outfits based on their existing wardrobe. This
              innovative app doesn't just stop at outfit suggestions; it empowers users to annotate and label individual
              items, creating a personalized fashion catalog within the app. Spiffify streamlines the decision-making
              process for daily attire, taking the guesswork out of what to wear and allowing users to express their
              unique style with ease.
            </p>
            <p class="text-gray max-w-[420px] mt-3 md:mt-5">Tech Stack: VueJS (Frontend), ExpressJS (Backend)</p>
            <div class="flex items-center gap-4 mt-5 md:mt-8">
              <div class="border-2 border-gray/[14%] h-14 w-14 rounded-full flex items-center justify-center">
                <img src="@/assets/images/tech/vue.svg" alt="" />
              </div>
              <div class="border-2 border-gray/[14%] h-14 w-14 rounded-full flex items-center justify-center">
                <img src="@/assets/images/tech/node.svg" alt="" />
              </div>
            </div>
            <div class="inline-block mt-8">
              <a
                href="https://dash.spiffify.app"
                target="_blank"
                class="flex items-center gap-2.5 py-3.5 text-sm font-semibold px-5 border-2 border-dark duration-300 hover:bg-dark hover:text-white dark:border-white/[14%] dark:hover:bg-white dark:hover:text-dark"
              >
                View Project
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M14.0035 7.4083L5.41176 16L4 14.5882L12.5917 5.99654H5.01905V4H16V14.981H14.0035V7.4083Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div class="xl:max-w-[670px] lg:max-w-[400px] w-full lg:order-2 order-1">
            <img src="@/assets/images/work/spiffify.png" class="object-fill w-full h-full mx-auto" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Work -->
</template>
