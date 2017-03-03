define('app',['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var App = exports.App = function () {
        function App() {
            _classCallCheck(this, App);

            this.message = 'This is message from app.js! Website elements do NOT go here! ';
        }

        App.prototype.configureRouter = function configureRouter(config, router) {
            this.router = router;
            config.title = 'Estlingo';
            config.map([{ route: ['', 'home'], name: 'home', moduleId: 'home/index' }, { route: 'games', name: 'games', moduleId: 'games/games', nav: true }, { route: 'about', name: 'about', moduleId: 'about/about', nav: true }]);
        };

        return App;
    }();
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('about/about',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var about = exports.about = function about() {
        _classCallCheck(this, about);

        this.message = "Information about project! (page:about)";
    };
});
define('games/games',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var games = exports.games = function () {
        function games() {
            _classCallCheck(this, games);

            this.message = "Games go here! (page:games)";
        }

        games.prototype.checkAnswer = function checkAnswer(choice) {
            if (choice == 'Oun') {
                this.answer = "True";
            } else {
                this.answer = "False";
            }
        };

        return games;
    }();
});
define('home/index',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Home = exports.Home = function Home() {
        _classCallCheck(this, Home);

        this.message = "Welcome to Estlingo! (page: home)";
    };
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('text!app.html', ['module'], function(module) { module.exports = "<template><router-view></router-view><div>------------------------------------------------------------------------------------------------------------<div>${message}<br>(page: app.html)</div><br><div>Different pages:<ul><li><a href=\"http://localhost:9000\"><b>Home:</b> http://localhost:9000</a></li><li><a href=\"http://localhost:9000/#/games\"><b>Games:</b> http://localhost:9000/#/games</a></li><li><a href=\"http://localhost:9000/#/about\"><b>About:</b> http://localhost:9000/#/about</a></li></ul></div>------------------------------------------------------------------------------------------------------------</div></template>"; });
define('text!about/about.html', ['module'], function(module) { module.exports = "<template>${message}</template>"; });
define('text!games/games.html', ['module'], function(module) { module.exports = "<template><div>${message}</div><br><div><b>Game 1:</b><div><img src=\"src/games/images/Apple.png\" alt=\"Error loading image! Image: Apple\" style=\"height:50px\"><br><button click.trigger=\"checkAnswer('Oun')\">Õun</button><br><button click.trigger=\"checkAnswer('Pirn')\">Pirn</button><br><button click.trigger=\"checkAnswer('Banaan')\">Banaan</button></div>${answer}</div></template>"; });
define('text!home/index.html', ['module'], function(module) { module.exports = "<template>${message}</template>"; });
//# sourceMappingURL=app-bundle.js.map