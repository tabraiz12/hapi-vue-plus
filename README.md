# hapi-vue-plus

> A prototyping setup utilising Vue.js (Webpack HMR + Vue loader) and Hapi (Nodemon) running with Gulp and BrowserSync. Plus version, which extends [hapi-vue-simple](https://github.com/Belar/hapi-vue-simple), includes linting (ESlint) and unit testing (Karma, Mocha, Chai, Sinon).

## Mini-doc

**/build/** - Contains files needed for build and hot development  
**/build/index_dev.html** - Template for index.html, it will be used by HMR when developing in memory and during production build   
**/client/** - Vue.js app source  
**/config/** - Configuration files  
**/public/** - Public folder served by Hapi  
**/server/** - Server side logic  
**/test/** -   Contains test files
**/app.js**  - Production server
**/gulpfile.js**  - Gulp setup file   

Hapi (API) folders (e.g. routes, controllers, models, plug-ins) can be added either to root structure or with a server folder.

### Usage

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli).

``` bash
$ npm install -g vue-cli
$ vue init belar/hapi-vue-plus my-project
$ cd my-project
```

## Dev Setup

``` bash
# install dependencies
npm install

# run unit tests
npm run unit

# serve with hot reload at localhost:3000 (with proxy at localhost:4000)
npm run dev
```

## Production Setup

``` bash
# install dependencies
npm install

# build for production with minification
npm run build

# run application at localhost:3000
node app.js
```

Credits:  
[Vue.js](https://vuejs.org/)  
[Hapi](http://hapijs.com/)  
[Gulp](https://gulpjs.com/)  
[BrowserSync](https://www.browsersync.io/)  
[Webpack](https://webpack.github.io/)  

[vue-webpack-simple template](https://github.com/vuejs-templates/webpack-simple)  
[vue-loader](https://vuejs.github.io/vue-loader)  
[vue-resource](https://github.com/vuejs/vue-resource)  
[hapi-webpack-hot-middleware](https://github.com/prashaantt/hapi-webpack-hot-middleware)  
[hapi-webpack-dev-middleware](https://github.com/prashaantt/hapi-webpack-dev-middleware)  
[inert](https://github.com/hapijs/inert)
