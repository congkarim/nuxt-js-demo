export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Phòng khám Nam khoa Đông Anh - Anh Minh Clinic',
    htmlAttrs: {
      lang: 'vn',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Khám, tư vấn và điều trị các bệnh lí nam khoa ở Đông Anh' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap",
        rel: "stylesheet"
      },
      {rel: "stylesheet", href: "css/bootstrap.min.css", type: "text/css"},
      {rel: "stylesheet", href: "css/font-awesome.min.css", type: "text/css"},
      {rel: "stylesheet", href: "css/flaticon.css", type: "text/css"},
      {rel: "stylesheet", href: "css/nice-select.css", type: "text/css"},
      {rel: "stylesheet", href: "css/jquery-ui.min.css", type: "text/css"},
      {rel: "stylesheet", href: "css/magnific-popup.css", type: "text/css"},
      {rel: "stylesheet", href: "css/owl.carousel.min.css", type: "text/css"},
      {rel: "stylesheet", href: "css/slicknav.min.css", type: "text/css"},
      {rel: "stylesheet", href: "css/style.css", type: "text/css"},
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
