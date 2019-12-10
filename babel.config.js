module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  "plugins": [
    ["component", 
      {
        "libraryName": "mint-ui",
        "style": true
      }
    ,"mint-ui"],
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']]
}
