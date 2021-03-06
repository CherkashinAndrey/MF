'use strict';

import * as components from './index.components';
import config from './index.config';
import run from './index.run';


const App = angular.module(
  "mfApp", [
    // plugins
    require('angular-ui-router'),
    "ngSanitize", 
  	"ngMessages", 
  	"ngResource",
    "ui.grid",
    "ngAnimate",
    "ui.bootstrap",

    // core
    require("./core/core.module").name,

    // components
    require("./index.components").name,

    // routes
    require("./index.routes").name,

    // pages
    require("./pages/main/main.module").name,

    //controller login
    require("./pages/login/login.module").name,

  ]
);

App
  .config(config)
  .run(run);



export default App;
