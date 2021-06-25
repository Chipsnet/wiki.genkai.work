const { description } = require('../../package')

module.exports = {
locales: {
    '/': {
        label: '日本語',
        lang: 'ja-JP',
        title: '限界大会 Wiki',
        description: description
    },
    '/en/': {
        label: 'English',
        lang: 'en-US',
        title: 'Project Genkai Wiki',
        description: description
    }
},
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */


  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'chipsnet/wiki.genkai.work',
    editLinks: true,
    docsDir: 'src',
    editLinkText: 'Edit on Github',
    lastUpdated: true,
    docsBranch: 'develop',
    nav: [
      {
        text: 'ガイド',
        link: '/guide/',
      },
      {
        text: 'ルール',
        link: '/rule/'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'ガイド',
          collapsable: false,
          children: [
            '',
            'using-vue'
          ]
        }
      ],
      '/rule/': [
        {
            title: 'ルール',
            collapsable: false,
            children: [
                '',
                'movie',
                'modeling'
            ]
        }
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
