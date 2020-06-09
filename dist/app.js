var scripts = [
  "https://cdn.jsdelivr.net/gh/bterys/goindex-theme-acrou@2.0.6/dist/js/app.1bc572b0.js",
  "https://cdn.jsdelivr.net/gh/bterys/goindex-theme-acrou@2.0.6/dist/js/chunk-2d0aed92.295ece1d.js",
  "https://cdn.jsdelivr.net/gh/bterys/goindex-theme-acrou@2.0.6/dist/js/chunk-2d0b2ee4.e48efc6a.js",
  "https://cdn.jsdelivr.net/gh/bterys/goindex-theme-acrou@2.0.6/dist/js/chunk-2d0c4c28.32f0d528.js",
  "https://cdn.jsdelivr.net/gh/bterys/goindex-theme-acrou@2.0.6/dist/js/chunk-48822c69.15514e05.js",
  "https://cdn.jsdelivr.net/gh/bterys/goindex-theme-acrou@2.0.6/dist/js/chunk-498d4d6d.467d8cc0.js",
  "https://cdn.jsdelivr.net/gh/bterys/goindex-theme-acrou@2.0.6/dist/js/chunk-52046d96.3ff3fa65.js",
  "https://cdn.jsdelivr.net/gh/bterys/goindex-theme-acrou@2.0.6/dist/js/chunk-d364e3a0.209252be.js",
  "https://cdn.jsdelivr.net/gh/bterys/goindex-theme-acrou@2.0.6/dist/js/chunk-f8849b3c.eea1f15f.js",
  "https://cdn.jsdelivr.net/gh/bterys/goindex-theme-acrou@2.0.6/dist/js/chunk-vendors.d9b6bd36.js",
];
var cdnjs = [
  "https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.min.js",
  "https://cdn.jsdelivr.net/npm/vue-i18n@8.17.3/dist/vue-i18n.min.js",
  "https://cdn.jsdelivr.net/npm/vue-router@3.1.6/dist/vue-router.min.js",
  "https://cdn.jsdelivr.net/npm/vuex@3.4.0/dist/vuex.js",
  "https://cdn.jsdelivr.net/npm/axios@0.19.2/dist/axios.min.js",
  "https://cdn.jsdelivr.net/npm/element-ui@2.13.1/lib/index.js",
  "https://cdn.jsdelivr.net/npm/lodash@4.17.15/lodash.min.js",
  "https://cdn.jsdelivr.net/npm/js-cookie@2.2.1/src/js.cookie.min.js",
  "https://cdn.jsdelivr.net/npm/lowdb@1.0.0/dist/low.min.js",
  "https://cdn.jsdelivr.net/npm/lowdb@1.0.0/dist/LocalStorage.min.js",
  "https://cdn.jsdelivr.net/npm/markdown-it@10.0.0/dist/markdown-it.min.js",
  "https://at.alicdn.com/t/font_1760192_axq33n6snd.js",
];
cdnjs.forEach(item => {
  document.write('<script src="' + item + '"></script>');
});
scripts.forEach(item => {
  document.write('<script src="' + item + '"></script>');
});
