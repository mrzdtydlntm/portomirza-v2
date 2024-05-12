<script>
export default {
  name: "SERVICE",
};
</script>

<template>
  <!-- service section -->
  <!-- Start Services -->
  <section
    class="py-16 md:py-24 bg-dark text-white dark:bg-gradient-liner dark:from-white/[4%] dark:to-transparent"
    id="services"
  >
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
                  />
                </svg>
              </span>
              Tech Role
            </p>
          </div>
          <h2 class="font-semibold text-[26px]/normal mt-7">The Role I'm Working On</h2>
          <p class="mt-5 text-gray max-w-[708px] mx-auto">
            We craft a digital things, web application or any tech architecture.
          </p>
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-14 gap-7">
        <div
          class="border-2 border-gray/[12%] p-7 space-y-5 bg-gradient-liner from-white/[4%] to-transparent"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div>
            <img src="@/assets/images/services-1.svg" alt="" />
          </div>
          <h3 class="text-xl font-semibold">Backend Developer</h3>
          <p class="text-gray">
            It is a fact that an application needs logic in it so that every user treatment can have a good experience.
            Here I have mastered the Golang and ExpressJS programming languages in making the application logic.
          </p>
        </div>
        <div
          class="border-2 border-gray/[12%] p-7 space-y-5 bg-gradient-liner from-white/[4%] to-transparent"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div>
            <img src="@/assets/images/services-2.svg" alt="" />
          </div>
          <h3 class="text-xl font-semibold">DevOps Engineer</h3>
          <p class="text-gray">
            An application needs to be deployed so that all users can use the application we created. In this case,
            several deployment techniques such as simple deployment (using NGINX and not containerized), containerized
            (using docker) and even using kubernetes and terraform.
          </p>
        </div>
        <div
          class="border-2 border-gray/[12%] p-7 space-y-5 bg-gradient-liner from-white/[4%] to-transparent"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div>
            <img src="@/assets/images/services-3.svg" alt="" />
          </div>
          <h3 class="text-xl font-semibold">System Analyst</h3>
          <p class="text-gray">
            It should be known that every application needs planning in its creation such as creating a system
            architecture, infrastructure management and even determining the techstack to be used. All of this can be
            made into a pictorial documentation in order to describe the future needs of the application.
          </p>
        </div>
      </div>
    </div>
  </section>
  <!-- End Services -->
</template>
