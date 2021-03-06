const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/iris.chou/Desktop/learning/gatsby/gatsby-starter-project/src/pages/404.js"))),
  "component---src-pages-about-css-modules-js": hot(preferDefault(require("/Users/iris.chou/Desktop/learning/gatsby/gatsby-starter-project/src/pages/about-css-modules.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/iris.chou/Desktop/learning/gatsby/gatsby-starter-project/src/pages/about.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/iris.chou/Desktop/learning/gatsby/gatsby-starter-project/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/iris.chou/Desktop/learning/gatsby/gatsby-starter-project/src/pages/index.js")))
}

