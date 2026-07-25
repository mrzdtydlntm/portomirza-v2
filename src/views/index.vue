<script>
import Layout from "../layout/index.vue";
import { CountTo } from "vue3-count-to";
import "@/assets/css/typing-effect.css";
export default {
  name: "INDEX",
  components: {
    Layout,
    CountTo,
  },
  mounted() {
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.classList.add("scroll-smooth");
  },
  data: () => {
    return {
      typeValue: "",
      typeStatus: false,
      displayTextArray: ["Software Engineer", "DevOps Engineer", "Physicist"],
      typingSpeed: 50,
      erasingSpeed: 50,
      newTextDelay: 1000,
      displayTextArrayIndex: 0,
      charIndex: 0,
      pageLoadTime: 200, // the typing won't typed when the animation fadeup
    };
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + this.pageLoadTime);
  },
  methods: {
    typeText() {
      if (this.charIndex < this.displayTextArray[this.displayTextArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.displayTextArray[this.displayTextArrayIndex].charAt(this.charIndex);
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.displayTextArray[this.displayTextArrayIndex].substring(0, this.charIndex - 1);
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.displayTextArrayIndex += 1;
        if (this.displayTextArrayIndex >= this.displayTextArray.length) this.displayTextArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  },
};
</script>

<template>
  <Layout>
    <section class="pt-[100px] relative overflow-hidden" id="home">
      <div class="container">
        <div class="grid grid-cols-1">
          <div class="flex flex-col flex-wrap items-center gap-5 lg:flex-row">
            <div class="w-full lg:w-1/2">
              <div class="py-16 md:py-24" data-aos="fade-up" data-aos-duration="1000">
                <p class="text-purple font-semibold text-2xl inline-block rounded"
                  style="background-color: rgba(5, 12, 23, 0.1); padding: 16px 32px;">
                  Hi, I'm Mirza Aditya Deliantama 👋
                </p>
                <h1 class="mt-6 md:mt-8 font-bold text-2xl/normal md:text-[50px]/normal">
                  <span>I'm a {{ typeValue }}</span>
                  <span class="blinking-cursor">|</span>
                  <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
                </h1>
                <p class="text-gray mt-6 max-w-[571px] leading-loose">
                  "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma.
                  Don't let the noise of others' opinions drown out your own inner voice. And most important, have the
                  courage to follow your heart and intuition."
                  <span class="text-dark mt-3 block">- Steve Jobs</span>
                </p>
                <div class="flex flex-wrap gap-5 mt-10">
                  <a href="https://calendar.app.google/3YD6cLPi4VdLWFYL6" target="_blank"
                    class="flex items-center gap-2.5 btn btn-purple rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path opacity="0.2"
                        d="M18 9C18 10.1867 17.6481 11.3467 16.9888 12.3334C16.3295 13.3201 15.3925 14.0892 14.2961 14.5433C13.1997 14.9974 11.9933 15.1162 10.8295 14.8847C9.66557 14.6532 8.59648 14.0818 7.75736 13.2426C6.91825 12.4035 6.3468 11.3344 6.11529 10.1705C5.88378 9.00666 6.0026 7.80026 6.45673 6.7039C6.91085 5.60754 7.67989 4.67047 8.66658 4.01118C9.65328 3.35189 10.8133 3 12 3C13.5913 3 15.1174 3.63214 16.2426 4.75736C17.3679 5.88258 18 7.4087 18 9Z"
                        fill="currentColor" />
                      <path
                        d="M21.6488 19.8751C20.2209 17.4067 18.0206 15.6367 15.4528 14.7976C16.723 14.0415 17.7098 12.8893 18.2618 11.518C18.8137 10.1468 18.9003 8.63224 18.5082 7.20701C18.1161 5.78178 17.267 4.52467 16.0912 3.62873C14.9155 2.73279 13.4782 2.24756 12 2.24756C10.5218 2.24756 9.08451 2.73279 7.90878 3.62873C6.73306 4.52467 5.88394 5.78178 5.49183 7.20701C5.09971 8.63224 5.18629 10.1468 5.73825 11.518C6.29021 12.8893 7.27704 14.0415 8.5472 14.7976C5.97938 15.6357 3.77907 17.4057 2.35126 19.8751C2.2989 19.9605 2.26417 20.0555 2.24912 20.1545C2.23407 20.2535 2.239 20.3545 2.26363 20.4516C2.28825 20.5487 2.33207 20.6399 2.3925 20.7197C2.45293 20.7996 2.52874 20.8666 2.61547 20.9167C2.7022 20.9667 2.79808 20.999 2.89745 21.0114C2.99683 21.0238 3.0977 21.0163 3.19409 20.9891C3.29049 20.9619 3.38047 20.9157 3.45872 20.8532C3.53697 20.7907 3.6019 20.7131 3.6497 20.6251C5.41595 17.5726 8.53782 15.7501 12 15.7501C15.4622 15.7501 18.5841 17.5726 20.3503 20.6251C20.3981 20.7131 20.4631 20.7907 20.5413 20.8532C20.6196 20.9157 20.7095 20.9619 20.8059 20.9891C20.9023 21.0163 21.0032 21.0238 21.1026 21.0114C21.2019 20.999 21.2978 20.9667 21.3845 20.9167C21.4713 20.8666 21.5471 20.7996 21.6075 20.7197C21.6679 20.6399 21.7118 20.5487 21.7364 20.4516C21.761 20.3545 21.766 20.2535 21.7509 20.1545C21.7358 20.0555 21.7011 19.9605 21.6488 19.8751ZM6.75001 9.00011C6.75001 7.96176 7.05792 6.94672 7.63479 6.08337C8.21167 5.22001 9.03161 4.5471 9.99092 4.14974C10.9502 3.75238 12.0058 3.64841 13.0242 3.85099C14.0426 4.05356 14.9781 4.55357 15.7123 5.2878C16.4465 6.02202 16.9466 6.95748 17.1491 7.97589C17.3517 8.99429 17.2477 10.0499 16.8504 11.0092C16.453 11.9685 15.7801 12.7884 14.9168 13.3653C14.0534 13.9422 13.0384 14.2501 12 14.2501C10.6081 14.2486 9.27359 13.695 8.28934 12.7108C7.3051 11.7265 6.7515 10.392 6.75001 9.00011Z"
                        fill="currentColor" />
                    </svg>
                    Book a Meeting
                  </a>
                  <a href="https://drive.google.com/file/d/1ZiGINIJx16nrwvC33csx8SNSJ_Ofqqj2/view?usp=sharing"
                    target="_blank" class="flex items-center gap-2.5 btn btn-outline-white rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path opacity="0.2"
                        d="M20.2388 5.28654L17.4497 21.1303C17.4326 21.2273 17.3966 21.32 17.3436 21.4031C17.2907 21.4862 17.2219 21.558 17.1412 21.6145C17.0605 21.671 16.9695 21.7111 16.8733 21.7324C16.7771 21.7537 16.6777 21.7559 16.5806 21.7387L4.36971 19.5825C4.17396 19.5479 3.99991 19.4371 3.88583 19.2743C3.77174 19.1116 3.72694 18.9101 3.76127 18.7143L6.55034 2.8706C6.56743 2.77358 6.60347 2.68087 6.6564 2.59778C6.70933 2.51469 6.77811 2.44284 6.85882 2.38634C6.93952 2.32984 7.03057 2.28979 7.12675 2.26848C7.22294 2.24718 7.32238 2.24503 7.4194 2.26216L19.6303 4.41841C19.8261 4.45294 20.0001 4.56378 20.1142 4.72656C20.2283 4.88933 20.2731 5.09075 20.2388 5.28654Z"
                        fill="currentColor" />
                      <path
                        d="M19.7606 3.67969L7.54969 1.52344C7.15796 1.4545 6.7549 1.54397 6.42913 1.77217C6.10335 2.00037 5.88155 2.34861 5.8125 2.74031L3.02344 18.5841C2.98932 18.7782 2.99379 18.9771 3.03659 19.1694C3.07938 19.3618 3.15967 19.5439 3.27285 19.7052C3.38603 19.8665 3.5299 20.004 3.69622 20.1097C3.86254 20.2154 4.04807 20.2873 4.24219 20.3213L16.4531 22.4775C16.6473 22.5117 16.8463 22.5074 17.0388 22.4647C17.2313 22.4219 17.4134 22.3417 17.5749 22.2285C17.7363 22.1153 17.8738 21.9714 17.9796 21.805C18.0854 21.6386 18.1573 21.453 18.1912 21.2588L20.9803 5.415C21.0486 5.02315 20.9585 4.6202 20.7298 4.29478C20.5011 3.96936 20.1525 3.74811 19.7606 3.67969ZM16.7119 21L4.5 18.8438L7.28906 3L19.5 5.15625L16.7119 21ZM8.37562 5.47688C8.41036 5.2811 8.52143 5.10713 8.68439 4.99321C8.84736 4.8793 9.04889 4.83475 9.24469 4.86938L17.0259 6.24281C17.2109 6.27521 17.3769 6.37579 17.4913 6.52467C17.6057 6.67356 17.66 6.85993 17.6437 7.04696C17.6273 7.23399 17.5414 7.40808 17.4029 7.53484C17.2644 7.66159 17.0834 7.73179 16.8956 7.73156C16.8516 7.7315 16.8077 7.72774 16.7644 7.72031L8.98312 6.34594C8.78735 6.3112 8.61338 6.20014 8.49946 6.03717C8.38554 5.87421 8.341 5.67267 8.37562 5.47688ZM7.85625 8.43188C7.87334 8.33485 7.90938 8.24215 7.96231 8.15906C8.01524 8.07597 8.08403 8.00412 8.16473 7.94762C8.24544 7.89111 8.33648 7.85107 8.43267 7.82976C8.52885 7.80845 8.6283 7.8063 8.72531 7.82344L16.5066 9.19781C16.6928 9.22896 16.8604 9.3292 16.976 9.47853C17.0915 9.62786 17.1465 9.81527 17.1299 10.0034C17.1134 10.1915 17.0265 10.3664 16.8866 10.4932C16.7467 10.62 16.5641 10.6894 16.3753 10.6875C16.331 10.6876 16.2867 10.6835 16.2431 10.6753L8.46187 9.30188C8.26625 9.26671 8.09258 9.15533 7.97903 8.9922C7.86547 8.82907 7.82131 8.62754 7.85625 8.43188ZM7.33594 11.3859C7.37133 11.1907 7.48266 11.0174 7.64555 10.9041C7.80844 10.7907 8.00961 10.7466 8.205 10.7813L12.0938 11.4647C12.2786 11.4971 12.4446 11.5976 12.559 11.7464C12.6733 11.8952 12.7278 12.0814 12.7115 12.2684C12.6733 11.8952 12.7278 12.0814 12.7115 12.2684C12.6... [truncated]"
                        fill="currentColor" />
                    </svg>
                    Download My CV
                  </a>
                </div>
                <div class="flex flex-wrap items-center gap-5 pt-12 md:pt-20 md:gap-12">
                  <div class="space-y-3 text-center">
                    <p class="text-2xl font-semibold" data-vanilla-counter data-start-at="0" data-end-at="180"
                      data-time="1000" data-delay="0" data-format="{+}">
                      <count-to :startVal="0" :endVal="20" :duration="5500"></count-to>+
                    </p>
                    <p class="text-gray">Clients</p>
                  </div>
                  <div class="space-y-3 text-center">
                    <p class="text-2xl font-semibold" data-vanilla-counter data-start-at="0" data-end-at="590"
                      data-time="1000" data-delay="0" data-format="{+}">
                      <count-to :startVal="0" :endVal="35" :duration="5500"></count-to>+
                    </p>
                    <p class="text-gray">Project Done</p>
                  </div>
                  <div class="space-y-3 text-center">
                    <p class="text-2xl font-semibold" data-vanilla-counter data-start-at="0" data-end-at="12"
                      data-time="1000" data-delay="0" data-format="{+}">
                      <count-to :startVal="0" :endVal="5" :duration="3000"></count-to>+
                    </p>
                    <p class="text-gray">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="bg-gradient-radial from-[#994FF5] to-[#FFC41F] max-w-[800px] md:top-[100px] lg:absolute bottom-0 ltr:right-0 rtl:left-0 lg:w-6/12 w-full">
              <!-- <p
                class="max-w-2xl mx-auto mt-5 text-5xl font-extrabold text-center text-transparent uppercase md:text-7xl lg:text-8xl bg-gradient-to-b from-white/70 bg-clip-text"
              >
                Mirza Aditya Deliantama
              </p> -->
              <div class="">
                <img src="@/assets/images/mrz-img.png" class="inset-x-0 bottom-0 mx-auto -mt-16 lg:absolute md:mt-0"
                  alt="Professional headshot of Mirza Aditya Deliantama, software engineer and DevOps specialist" width="614" height="615" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 mt-14">
          <div class="flex-wrap items-start sm:flex gap-7 space-y-7 sm:space-y-0">
            <div class="space-y-2.5 font-semibold flex-1">
              <p class="text-gray whitespace-nowrap">Contact</p>
              <p class="whitespace-nowrap">me@mrzdtydlntm.my.id</p>
            </div>
            <div class="space-y-2.5 font-semibold flex-1">
              <p class="text-gray whitespace-nowrap">Phone</p>
              <p class="whitespace-nowrap">+62 813-9447-3670</p>
            </div>
            <div class="space-y-2.5 font-semibold flex-1">
              <p class="text-gray whitespace-nowrap">Spoken Languages</p>
              <p class="whitespace-nowrap">Indonesia - English</p>
            </div>
            <div class="space-y-2.5 font-semibold flex-1">
              <p class="text-gray whitespace-nowrap">Interest</p>
              <p class="whitespace-nowrap">Tech, Music, Game</p>
            </div>
            <div class="space-y-2.5 font-semibold flex-1">
              <p class="text-gray whitespace-nowrap">Social Media</p>
              <ul class="flex flex-wrap items-center gap-5">
                <li class="shrink-0">
                  <a href="https://github.com/mrzdtydlntm" target="_blank" aria-label="GitHub profile">
                    <img src="@/assets/images/social/github-mark.svg" alt="GitHub logo" style="height: 24px; width: 24px" />
                  </a>
                </li>
                <li class="shrink-0">
                  <a href="https://gitlab.com/mrzdtydlntm" target="_blank" aria-label="GitLab profile">
                    <img src="@/assets/images/social/gitlab-black.svg" alt="GitLab logo" style="height: 24px; width: 24px" />
                  </a>
                </li>
                <li class="shrink-0">
                  <a href="https://www.instagram.com/hoyitsmir/" target="_blank" aria-label="Instagram profile">
                    <img src="@/assets/images/social/instagram-black.svg" alt="Instagram logo" style="height: 24px; width: 24px" />
                  </a>
                </li>
                <li class="shrink-0">
                  <a href="https://www.linkedin.com/in/mrzdtydlntm/" target="_blank" aria-label="LinkedIn profile">
                    <img src="@/assets/images/social/linkedin-black.svg" alt="LinkedIn logo" style="height: 24px; width: 24px" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End About me -->

    <!-- Start About me -->
    <section class="py-16 md:py-24 border-t-2 border-gray/[12%] dark:border-white/[12%]" id="about">
      <div class="container" data-aos="fade-up" data-aos-duration="1000">
        <div class="grid grid-cols-1">
          <div>
            <div class="inline-block">
              <p
                class="bg-purple text-white text-sm font-semibold py-3 px-5 uppercase rounded-full flex items-center gap-2.5">
                <span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M4.33454 9.58362C5.35965 9.83993 6.16007 10.6403 6.41638 11.6655L7.37875 15.5149C7.45002 15.8 7.70616 16 8 16C8.29384 16 8.54998 15.8 8.62125 15.5149L9.58362 11.6655C9.83993 10.6403 10.6403 9.83993 11.6655 9.58362L15.5149 8.62125C15.8 8.54998 16 8.29384 16 8C16 7.70616 15.8 7.45002 15.5149 7.37875L11.6655 6.41638C10.6403 6.16007 9.83993 5.35965 9.58362 4.33454L8.62125 0.485071C8.54998 0.199992 8.29384 0 8 0C7.70616 0 7.45002 0.199991 7.37875 0.485071L6.41638 4.33454C6.16007 5.35965 5.35965 6.16007 4.33454 6.41638L0.485071 7.37875C0.199992 7.45002 0 7.70616 0 8C0 8.29384 0.199991 8.54998 0.485071 8.62125L4.33454 9.58362Z"
                      fill="currentColor" />
                  </svg>
                </span>
                About Me
              </p>
            </div>
            <div class="mt-7">
              <h2 class="font-semibold text-[26px]/normal">Just call me Mirza!</h2>
              <p class="mt-6 text-gray">
                Passionate about technology, especially in software engineering. Experienced a lot during these 5+ years
                as a software engineer, especially being a Backend and DevOps engineer. Mastering programming with
                Golang and ExpressJS languages, and often handling application deployments using Docker, Kubernetes, and
                Terraform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End About me -->

    <!-- Skills & Experience -->
    <section class="py-16 md:py-24 border-t-2 border-gray/[12%] dark:border-white/[12%]" id="skills">
      <div class="container">
        <h2 class="text-center text-3xl font-bold mb-12" data-aos="fade-up" data-aos-duration="1000">
          Skills & Expertise
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Technical Skills -->
          <div class="space-y-6" data-aos="fade-up" data-aos-duration="1000">
            <h3 class="text-2xl font-semibold mb-4">Technical Skills</h3>
            <div class="grid grid-cols-2 gap-4">
              <div class="flex items-center gap-3">
                <img src="@/assets/images/tech/go.svg" alt="Go/Golang programming language logo" class="w-8 h-8">
                <span>Go/Golang</span>
              </div>
              <div class="flex items-center gap-3">
                <img src="@/assets/images/tech/node.svg" alt="Node.js JavaScript runtime logo" class="w-8 h-8">
                <span>Node.js</span>
              </div>
              <div class="flex items-center gap-3">
                <img src="@/assets/images/tech/docker.svg" alt="Docker containerization platform logo" class="w-8 h-8">
                <span>Docker</span>
              </div>
              <div class="flex items-center gap-3">
                <img src="@/assets/images/tech/kubernetes.svg" alt="Kubernetes container orchestration logo" class="w-8 h-8">
                <span>Kubernetes</span>
              </div>
              <div class="flex items-center gap-3">
                <img src="@/assets/images/tech/terraform.svg" alt="Terraform infrastructure as code logo" class="w-8 h-8">
                <span>Terraform</span>
              </div>
              <div class="flex items-center gap-3">
                <img src="@/assets/images/tech/vue.svg" alt="Vue.js progressive JavaScript framework logo" class="w-8 h-8">
                <span>Vue.js</span>
              </div>
              <div class="flex items-center gap-3">
                <img src="@/assets/images/tech/nginx.svg" alt="Nginx web server logo" class="w-8 h-8">
                <span>NGINX</span>
              </div>
              <div class="flex items-center gap-3">
                <img src="@/assets/images/tech/postgresql.svg" alt="PostgreSQL database logo" class="w-8 h-8">
                <span>PostgreSQL</span>
              </div>
            </div>
          </div>

          <!-- Experience -->
          <div class="space-y-6" data-aos="fade-up" data-aos-duration="1000">
            <h3 class="text-2xl font-semibold mb-4">Professional Experience</h3>
            <div class="space-y-4">
              <div class="border-l-4 border-purple pl-4">
                <h4 class="font-semibold">Senior Software Engineer</h4>
                <p class="text-sm text-gray-500">PT. Edandex Indonesia | 2022 - Present</p>
                <ul class="list-disc list-inside mt-2 space-y-1">
                  <li>Designed and implemented microservices architecture using Go and Kubernetes</li>
                  <li>Reduced deployment time by 70% through CI/CD pipeline optimization</li>
                  <li>Led a team of 5 engineers in developing scalable backend systems</li>
                </ul>
              </div>
              <div class="border-l-4 border-purple pl-4">
                <h4 class="font-semibold">DevOps Engineer</h4>
                <p class="text-sm text-gray-500">Freelance | 2020 - 2022</p>
                <ul class="list-disc list-inside mt-2 space-y-1">
                  <li>Automated infrastructure provisioning with Terraform and Ansible</li>
                  <li>Implemented monitoring and logging solutions using Grafana and ELK stack</li>
                  <li>Managed CI/CD pipelines for multiple microservices applications</li>
                </ul>
              </div>
              <div class="border-l-4 border-purple pl-4">
                <h4 class="font-semibold">Full Stack Developer</h4>
                <p class="text-sm text-gray-500">PT. Teknologi Maju Jaya | 2018 - 2020</p>
                <ul class="list-disc list-inside mt-2 space-y-1">
                  <li>Developed web applications using Vue.js and Express.js</li>
                  <li>Optimized database queries resulting in 40% performance improvement</li>
                  <li>Collaborated with cross-functional teams to deliver products on schedule</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Skills & Experience -->

    <!-- Projects -->
    <section class="py-16 md:py-24 border-t-2 border-gray/[12%] dark:border-white/[12%]" id="projects">
      <div class="container">
        <h2 class="text-center text-3xl font-bold mb-12" data-aos="fade-up" data-aos-duration="1000">
          Projects & Portfolio
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Project Card 1 -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300" data-aos="fade-up" data-aos-duration="1000">
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-3">Enterprise Microservices Platform</h3>
              <p class="text-gray mb-4">A scalable microservices architecture for enterprise applications using Go, Kubernetes, and Docker.</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Go</span>
                <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Kubernetes</span>
                <span class="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Docker</span>
              </div>
              <a href="#" class="text-purple hover:text-purple-dark">Learn More</a>
            </div>
          </div>
          <!-- Project Card 2 -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300" data-aos="fade-up" data-aos-duration="1000">
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-3">Cloud-Native E-commerce Platform</h3>
              <p class="text-gray mb-4">A scalable e-commerce platform built with microservices, React, and Node.js.</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Node.js</span>
                <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">React</span>
                <span class="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">MongoDB</span>
              </div>
              <a href="#" class="text-purple hover:text-purple-dark">Learn More</a>
            </div>
          </div>
          <!-- Project Card 3 -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300" data-aos="fade-up" data-aos-duration="1000">
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-3">DevOps Automation Toolkit</h3>
              <p class="text-gray mb-4">A collection of Terraform modules and GitHub Actions workflows for infrastructure automation.</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Terraform</span>
                <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">GitHub Actions</span>
                <span class="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">AWS</span>
              </div>
              <a href="#" class="text-purple hover:text-purple-dark">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Projects -->

    <!-- Testimonials -->
    <section class="py-16 md:py-24 border-t-2 border-gray/[12%] dark:border-white/[12%]" id="testimonials">
      <div class="container">
        <h2 class="text-center text-3xl font-bold mb-12" data-aos="fade-up" data-aos-duration="1000">
          What Clients Say
        What Clients Say
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Testimonial 1 -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6" data-aos="fade-up" data-aos-duration="1000">
            <p class="italic text-gray-600">"Mirza transformed our legacy system into a modern microservices architecture, reducing deployment time by 70% and improving system reliability."</p>
            <div class="flex items-center mt-4">
              <img src="@/assets/images/testimonial/1.png" alt="Client testimonial photo" class="w-12 h-12 rounded-full mr-3">
              <div>
                <h4 class="font-semibold">John Doe</h4>
                <p class="text-sm text-gray-500">CTO, Tech Company</p>
              </div>
            </div>
          </div>
          <!-- Testimonial 2 -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6" data-aos="fade-up" data-aos-duration="1000">
            <p class="italic text-gray-600">"His expertise in Kubernetes and Docker helped us achieve zero-downtime deployments and scalable infrastructure."</p>
            <div class="flex items-center mt-4">
              <img src="@/assets/images/testimonial/2.png" alt="Client testimonial photo" class="w-12 h-12 rounded-full mr-3">
              <div>
                <h4 class="font-semibold">Jane Smith</h4>
                <p class="text-sm text-gray-500">DevOps Lead, Startup Inc</p>
              </div>
            </div>
          </div>
          <!-- Testimonial 3 -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6" data-aos="fade-up" data-aos-duration="1000">
            <p class="italic text-gray-600">"Mirza's work on our CI/CD pipeline reduced our release cycle from weeks to days, significantly improving our time-to-market."</p>
            <div class="flex items-center mt-4">
              <img src="@/assets/images/testimonial/2.png" alt="Client testimonial photo" class="w-12 h-12 rounded-full mr-3">
              <div>
                <h4 class="font-semibold">Bob Johnson</h4>
                <p class="text-sm text-gray-500">Engineering Manager, Enterprise Corp</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Testimonials -->

    <!-- Contact -->
    <section class="py-16 md:py-24 border-t-2 border-gray/[12%] dark:border-white/[12%]" id="contact">
      <div class="container">
        <h2 class="text-center text-3xl font-bold mb-12" data-aos="fade-up" data-aos-duration="1000">
          Get In Touch
        </h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="space-y-6" data-aos="fade-up" data-aos-duration="1000">
            <h3 class="text-2xl font-semibold mb-4">Contact Information</h3>
            <p class="text-gray">Have a project in mind? Feel free to reach out!</p>
            <div class="space-y-4">
              <div class="flex items-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 3H18V17H2V3ZM3 5H17V15H3V5ZM4 7H16V13H4V7Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span class="ml-3">me@mrzdtydlntm.my.id</span>
              </div>
              <div class="flex items-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10H18M10 2V18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
                <span class="ml-3">+62 813-9447-3670</span>
              </div>
              <div class="flex items-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 4H15M5 8H15M5 12H13M5 16H11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
                <span class="ml-3">Bandung, Indonesia</span>
              </div>
            </div>
          </div>
          <div class="space-y-6" data-aos="fade-up" data-aos-duration="1000">
            <h3 class="text-2xl font-semibold mb-4">Send a Message</h3>
            <form class="space-y-4">
              <div>
                <label class="block text-sm font-medium mb-2">Name</label>
                <input type="text" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
              </div>
              <div>
                <label class="block text-sm font-medium mb-2">Email</label>
                <input type="email" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
              </div>
              <div>
                <label class="block text-sm font-medium mb-2">Message</label>
                <textarea required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" rows="5"></textarea>
              </div>
              <button type="submit" class="w-full btn btn-purple py-3">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
    <!-- End Contact -->

    <!-- Footer -->
    <footer class="bg-[url('@/assets/images/footer-bg.png')] bg-center bg-cover bg-no-repeat py-12" data-aos="fade-up" data-aos-duration="1000">
      <div class="container">
        <div class="grid md:grid-cols-3 gap-8">
          <div class="space-y-4">
            <h3 class="text-xl font-semibold mb-2">Mirza Aditya Deliantama</h3>
            <p class="text-gray">Software Architect • Backend & DevOps Expert</p>
            <div class="flex space-x-4 mt-4">
              <a href="https://github.com/mrzdtydlntm" target="_blank" aria-label="GitHub">
                <img src="@/assets/images/social/github-mark-white.svg" alt="GitHub logo" class="w-6 h-6">
              </a>
              <a href="https://www.linkedin.com/in/mrzdtydlntm/" target="_blank" aria-label="LinkedIn">
                <img src="@/assets/images/social/linkedin-white.svg" alt="LinkedIn logo" class="w-6 h-6">
              </a>
              <a href="https://www.instagram.com/hoyitsmir/" target="_blank" aria-label="Instagram">
                <img src="@/assets/images/social/instagram-white.svg" alt="Instagram logo" class="w-6 h-6">
              </a>
              <a href="https://discord.gg/yourserver" target="_blank" aria-label="Discord">
                <img src="@/assets/images/social/discord-white.svg" alt="Discord logo" class="w-6 h-6">
              </a>
            </div>
          </div>
          
          <div class="space-y-4">
            <h3 class="text-xl font-semibold mb-2">Quick Links</h3>
            <nav class="space-y-2">
              <a href="#home" class="text-gray hover:text-purple transition-colors">Home</a>
              <a href="#about" class="text-gray hover:text-purple transition-colors">About</a>
              <a href="#skills" class="text-gray hover:text-purple transition-colors">Skills</a>
              <a href="#projects" class="text-gray hover:text-purple transition-colors">Projects</a>
              <a href="#testimonials" class="text-gray hover:text-purple transition-colors">Testimonials</a>
              <a href="#contact" class="text-gray hover:text-purple transition-colors">Contact</a>
            </nav>
          </div>
          
          <div class="space-y-4">
            <h3 class="text-xl font-semibold mb-2">Newsletter</h3>
            <p class="text-gray mb-4">Subscribe for updates on my latest projects and tech insights</p>
            <form class="flex gap-2">
              <input type="email" placeholder="your@email.com" class="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" required>
              <button type="submit" class="btn btn-purple px-4">Subscribe</button>
            </form>
          </div>
        </div>
        
        <div class="border-t border-gray-200 pt-8 mt-12 text-center text-sm text-gray">
          © 2026 Mirza Aditya Deliantama. All rights reserved.
        </div>
      </div>
    </footer>
  </Layout>
</template>

<style>
/* Respect user's preference for reduced motion */
@media (prefers-reduced-motion: reduce) {
  *[data-aos] {
    animation-duration: 0.001s !important;
    transition-duration: 0.001s !important;
  }
  
  .blinking-cursor,
  .cursor {
    animation: none !important;
  }
}
</style>