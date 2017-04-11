define('app',['exports', 'aurelia-cookie'], function (exports, _aureliaCookie) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.App = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var App = exports.App = function () {
        function App() {
            _classCallCheck(this, App);

            this.isLoggedIn = false;

            if (_aureliaCookie.AureliaCookie.get('isLoggedIn') == "true") {
                this.isLoggedIn = _aureliaCookie.AureliaCookie.get('isLoggedIn');console.log("isLoggedIn: " + this.isLoggedIn);
            } else {
                console.log("isLoggedIn: not defiend");
                window.location.href = "http://localhost:9000/#/register";
            }
        }

        App.prototype.configureRouter = function configureRouter(config, router) {
            this.router = router;
            config.title = 'Estlingo';
            config.map([{ route: ['', 'register'], name: 'register', moduleId: 'register/register' }, { route: 'games', name: 'games', moduleId: 'games/games', nav: true }, { route: 'about', name: 'about', moduleId: 'about/about', nav: true }, { route: 'home', name: 'home', moduleId: 'home/home', nav: true }, { route: 'selectEquivalent1', name: 'selectEquivalent1', moduleId: 'selectEquivalent1/selectEquivalent1', nav: true }, { route: 'selectEquivalent2', name: 'selectEquivalent2', moduleId: 'selectEquivalent2/selectEquivalent2', nav: true }, { route: 'typeEquivalent1', name: 'typeEquivalent1', moduleId: 'typeEquivalent1/typeEquivalent1', nav: true }]);
        };

        App.prototype.logOut = function logOut() {
            _aureliaCookie.AureliaCookie.delete('isLoggedIn');
            window.location.href = "http://localhost:9000/#/register";
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
    aurelia.use.standardConfiguration().plugin('aurelia-cookie').feature('resources');

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

        this.message = "ESTLINGO is the easiest way to learn Estonian.";
        this.easy = "Learning language by games that are easy to understand. Pictures help to memorize words better and make connections that are afterwards easy to remember.";
        this.fast = "Are you having a coffee break? Good, then you have more than enough time to play one of our games and educate yourself.";
        this.family = "Language learning by games is so easy, that even kids can learn Estonian. Why not play language games with the whole family?";
        this.game = "Do you love games and puzzles? Then this is the right place for you!";
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

    var games = exports.games = function games() {
        _classCallCheck(this, games);

        this.h1 = "Select equivalent";
        this.h2 = "Select equivalent 2";
        this.h3 = "Type equivalent";
    };
});
define('home/home',["exports"], function (exports) {
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
define('register/register',["exports", "aurelia-fetch-client", "aurelia-cookie"], function (exports, _aureliaFetchClient, _aureliaCookie) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Register = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Register = exports.Register = function () {
        function Register() {
            _classCallCheck(this, Register);

            this.userData = {};
        }

        Register.prototype.addUser = function addUser() {
            console.log("addUser() started");

            if (this.userData.username == undefined) {
                console.log("Registered username field empty");
                alert("Please enter a username!");
                return;
            }
            if (this.userData.password == undefined) {
                console.log("Registered password field empty");
                alert("Please enter a password!");
                return;
            }
            if (this.userData.e_mail == undefined) {
                console.log("Registered email field empty");
                alert("Please enter a e-mail!");
                return;
            }

            var client = new _aureliaFetchClient.HttpClient();
            client.fetch("http://localhost:8080/users/add", {
                'method': "POST",
                'body': (0, _aureliaFetchClient.json)(this.userData)
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                console.log("Server saatis " + data.username + data.password + data.e_mail);
            });

            window.location.href = "http://localhost:9000/#/home";

            _aureliaCookie.AureliaCookie.set('isLoggedIn', true, {
                expiry: 1,
                path: '',
                domain: '',
                secure: false
            });

            console.log("addUser() finished");
        };

        Register.prototype.getUser = function getUser() {
            console.log("getUser() started");
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;
            console.log("inserted username: " + username);
            console.log("inserted password: " + password);

            if (username == "") {
                console.log("Username field enpty!");
                alert("Please enter a username!");
                return;
            }

            if (password == "") {
                console.log("Password field empty!");
                alert("Please enter a password!");
                return;
            }

            _aureliaCookie.AureliaCookie.set('isLoggedIn', true, {
                expiry: 1,
                path: '',
                domain: '',
                secure: false
            });

            var client = new _aureliaFetchClient.HttpClient();
            client.fetch("http://localhost:8080/users/" + username).then(function (response) {
                return response.json();
            }).then(function (data) {
                if (JSON.stringify(data.password) === '"' + password + '"') {
                    window.location.href = "http://localhost:9000/#/home";
                } else {
                    alert("No such user or password exists!");
                }
            });

            console.log("getUser() finished");
        };

        return Register;
    }();
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('selectEquivalent1/selectEquivalent1',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var select = exports.select = function () {
        function select() {
            _classCallCheck(this, select);
        }

        select.prototype.Right = function Right() {
            this.isTrue = true;
            this.isFalse = false;
        };

        select.prototype.NotRight = function NotRight() {
            this.isFalse = true;
            this.isTrue = false;
        };

        return select;
    }();
});
define('selectEquivalent2/selectEquivalent2',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var select = exports.select = function () {
        function select() {
            _classCallCheck(this, select);
        }

        select.prototype.Right = function Right() {
            this.isTrue = true;
            this.isFalse = false;
        };

        select.prototype.NotRight = function NotRight() {
            this.isFalse = true;
            this.isTrue = false;
        };

        return select;
    }();
});
define('typeEquivalent1/typeEquivalent1',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var type = exports.type = function type() {
        _classCallCheck(this, type);
    };
});
define('aurelia-cookie/aurelia-cookie',["require", "exports"], function (require, exports) {
    "use strict";
    var AureliaCookie = (function () {
        function AureliaCookie() {
        }
        /**
        *
        * Get a cookie by its name
        */
        AureliaCookie.get = function (name) {
            var cookies = this.all();
            if (cookies && cookies[name]) {
                return cookies[name];
            }
            return null;
        };
        /**
        * Set a cookie
        */
        AureliaCookie.set = function (name, value, options) {
            var str = this.encode(name) + "=" + this.encode(value);
            if (value === null) {
                options.expiry = -1;
            }
            /**
            * Expiry date in hours
            */
            if (options.expiry >= 0 && !options.expires) {
                var expires = new Date();
                expires.setHours(expires.getHours() + options.expiry);
                options.expires = expires;
            }
            if (options.path) {
                str += "; path=" + options.path;
            }
            if (options.domain) {
                str += "; domain=" + options.domain;
            }
            if (options.expires) {
                str += "; expires=" + options.expires.toUTCString();
            }
            if (options.secure) {
                str += '; secure';
            }
            document.cookie = str;
        };
        /**
        * Deletes a cookie by setting its expiry date in the past
        */
        AureliaCookie.delete = function (name, domain) {
            if (domain === void 0) { domain = null; }
            var cookieString = name + " =;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
            if (domain) {
                cookieString += "; domain=" + domain;
            }
            document.cookie = cookieString;
        };
        /**
        * Get all set cookies and return an array
        */
        AureliaCookie.all = function () {
            return this.parse(document.cookie);
        };
        AureliaCookie.parse = function (str) {
            var obj = {};
            var pairs = str.split(/ *; */);
            var pair;
            if (pairs[0] === '') {
                return obj;
            }
            for (var i = 0; i < pairs.length; ++i) {
                pair = pairs[i].split('=');
                obj[this.decode(pair[0])] = this.decode(pair[1]);
            }
            return obj;
        };
        AureliaCookie.encode = function (value) {
            try {
                return encodeURIComponent(value);
            }
            catch (e) {
                return null;
            }
        };
        AureliaCookie.decode = function (value) {
            try {
                return decodeURIComponent(value);
            }
            catch (e) {
                return null;
            }
        };
        return AureliaCookie;
    }());
    exports.AureliaCookie = AureliaCookie;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template><router-view></router-view><require from=\"app.css\"></require><div class=\"body\"><div class=\"header\"><img class=\"imageInput\" src=\"src/images/EstlingoLogo.png\" alt=\"Error loading image!\" width=\"150px\"></div><div class=\"menuBar\" if.bind=\"isLoggedIn\"><ul><li><a class=\"active\" href=\"http://localhost:9000/#/home\">Home</a></li><li><a href=\"http://localhost:9000/#/games\">Games</a></li><li><a href=\"http://localhost:9000/#/about\">About</a></li><form id=\"logOutform\" submit.delegate=\"logOut()\"><div id=\"logOut\"><input style=\"float:right;margin:10px 10px 0 0;color:#f5f5f5\" type=\"submit\" value=\"Log out\"></div></form></ul></div><div class=\"footer\">Powered by the Estlingo group - Aet Telvik, Tauri Türkson, Sven Veskijärv</div></div></template>"; });
define('text!app.css', ['module'], function(module) { module.exports = ".body{\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-size: 15px;\r\n    background-color: #f5f5f5;\r\n    height: 100%;\r\n    margin: 0px 0px 0px 0px;\r\n    padding: 0px 0px 0px 0px;\r\n}\r\n\r\na{\r\n    text-decoration: none;\r\n}\r\n\r\ninput{\r\n    border: none;\r\n    outline: none;\r\n    background-color: transparent;\r\n    cursor: pointer;\r\n    font-size: 15px;\r\n}\r\n\r\n.header{\r\n    width: 100%;\r\n    background-color: #4099FF;\r\n    color: #f5f5f5;\r\n    padding: 5px 5px 0px 5px;\r\n    margin: 0px 0px 0px 0px;\r\n    box-sizing: border-box;\r\n    position: fixed;\r\n    top: 0;\r\n}\r\n\r\n.indexMain{\r\n    width: 900px;\r\n    height: auto;\r\n    margin: 25px auto 0px auto;\r\n    padding-top: 45px;\r\n}\r\n\r\n.main{\r\n    width: 900px;\r\n    min-height: 400px;\r\n    margin: 105px auto 0px auto;\r\n    padding: 10px 10px 10px 10px;\r\n    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.3), 0 8px 20px 0 rgba(0, 0, 0, 0.2);\r\n    background-color: #f5f5f5;\r\n}\r\n\r\n.main2{\r\n    width: 900px;\r\n    min-height: 470px;\r\n    margin: 105px auto 0px auto;\r\n    padding: 10px 0px 0px 0px;\r\n    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.3), 0 8px 20px 0 rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.welcomeText{\r\n    width: 550px;\r\n    min-height: 400px;\r\n    float: left;\r\n    color: #f5f5f5;\r\n    margin: 10px 0px 10px 0px;\r\n    text-align: center;\r\n}\r\n\r\n.loginScreen{\r\n    width: 315px;\r\n    min-height: 400px;\r\n    float: right;\r\n    margin: 10px 0px 10px 0px;\r\n}\r\n\r\n.footer{\r\n    width: 100%;\r\n    background-color: #4099FF;\r\n    color: #f5f5f5;\r\n    padding: 9px 10px 9px 10px;\r\n    box-sizing: border-box;\r\n    margin: auto 0px 0px 0px;\r\n    position: fixed;\r\n    bottom: 0;\r\n    white-space: nowrap;\r\n    font-size: 10px;\r\n}\r\n\r\n.gamechoiceButton {\r\n    width: 125px;\r\n    height: 25px;\r\n    text-align: center;\r\n    margin: 5px 5px 5px 5px;\r\n    color: #f5f5f5;\r\n}\r\n\r\n.gamechoiceButton:hover {\r\n    color: #bababa;\r\n}\r\n\r\n.gameHeader {\r\n    width: 400px;\r\n    min-height: 50px;\r\n    float: left;\r\n    color: black;\r\n    margin: 5px 0px 5px 250px;\r\n    text-align: center;\r\n}\r\n\r\n.gameArea {\r\n    width: 550px;\r\n    min-height: 90px;\r\n    float: left;\r\n    color: #f5f5f5;\r\n    margin: 5px 0px 10px 170px;\r\n    text-align: center; \r\n}\r\n\r\n.blueBox{\r\n    background-color: #4099FF;\r\n    padding: 5px;\r\n}\r\n\r\n.greyBox{\r\n    width: auto;\r\n    background-color: #f5f5f5;\r\n    padding: 5px;\r\n    margin: 3px 3px 3px 3px;\r\n}\r\n\r\n.content{\r\n    margin: 5px 0px 5px 0px;\r\n    padding: 0px 5px 0px 5px;\r\n    float: top;\r\n    background-color: #f5f5f5;\r\n}\r\n\r\n.contentGame{\r\n    margin: 5px 0px 5px 250px;\r\n    padding: 0px 5px 0px 5px;\r\n    float: top;\r\n}\r\n\r\n.choice {\r\n    margin: 5px 0px 5px 0px;\r\n    color: black;\r\n    cursor: pointer;\r\n}\r\n\r\n.choice:hover {\r\n    color: #f5f5f5;\r\n    font-weight: bold;\r\n}\r\n\r\n.answerLeft {\r\n    height: 200px;\r\n    width: 250px;\r\n    margin-left: 20px;\r\n    float: left;\r\n}\r\n\r\n.answerRight {\r\n    height: 200px;;\r\n    width: 250px;\r\n    margin-right: 20px;\r\n    float: right;\r\n}\r\n\r\n.nextGame {\r\n    margin-top: 20px;\r\n    margin-right: 0px;\r\n    float: right;\r\n    background-color: #4b4b4b;\r\n    cursor: pointer;\r\n}\r\n\r\n.BackToGames {\r\n    margin-top: 100px;\r\n    margin-right: -200px;\r\n    float: left;\r\n    background-color: #4b4b4b;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.picture {\r\n    width:100px;\r\n    height:80px;\r\n}\r\n\r\ninput[type=text] {\r\n    border-radius: 3px;\r\n    background-color: #f5f5f5;\r\n}\r\n\r\n.check {\r\n    width: 100px;\r\n    margin-left: 230px;\r\n    background-color: #4b4b4b;\r\n    margin-top: 15px;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n/*Menubar styles:*/\r\n.menuBar{\r\n    position: fixed;\r\n    top: 45px;\r\n}\r\n\r\nul {\r\n    list-style-type: none;\r\n    margin: 0px;\r\n    padding: 0px;\r\n    overflow: hidden;\r\n    background-color: #4099FF;\r\n    position: fixed;\r\n    width: 100%;\r\n}\r\n\r\nli {\r\n    float: left;\r\n}\r\n\r\nli a {\r\n    display: block;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n}\r\n\r\nli a:hover:not(.active) {\r\n    background-color: #55a4ff;\r\n}\r\n    \r\n.active {\r\n    background-color: #4b4b4b;\r\n}"; });
define('text!nav-bar.html', ['module'], function(module) { module.exports = "<template bindable=\"router\" class=\"nav\"><p><a repeat.for=\"item of router.navigation\" href.bind=\"item.href\">${item.title}</a></p></template>"; });
define('text!about/about.html', ['module'], function(module) { module.exports = "<template><div class=\"body\"><div class=\"main\"><div class=\"content\">${message}<br><br><img style=\"vertical-align:middle;padding:5px\" src=\"src/images/easy.png\" alt=\"Easy\" height=\"42\" width=\"42\">${easy}<br><img style=\"vertical-align:middle;padding:5px\" src=\"src/images/fast.png\" alt=\"Fast\" height=\"42\" width=\"42\">${fast}<br><img style=\"vertical-align:middle;padding:5px\" src=\"src/images/family.png\" alt=\"Family\" height=\"42\" width=\"42\">${family}<br><img style=\"vertical-align:middle;padding:5px\" src=\"src/images/game.png\" alt=\"Game\" height=\"42\" width=\"42\">${game}</div></div></div></template>"; });
define('text!games/games.html', ['module'], function(module) { module.exports = "<template><div class=\"main\"><b>Select gametype:</b> <a href=\"http://localhost:9000/#/selectEquivalent1\"><div class=\"gamechoiceButton blueBox\">${h1}</div></a><a href=\"http://localhost:9000/#/selectEquivalent2\"><div class=\"gamechoiceButton blueBox\">${h2}</div></a><a href=\"http://localhost:9000/#/typeEquivalent1\"><div class=\"gamechoiceButton blueBox\">${h3}</div></a></div></template>"; });
define('text!home/home.html', ['module'], function(module) { module.exports = "<template><div class=\"body\"><div class=\"main\"><div class=\"content\">${message}</div></div></div></template>"; });
define('text!register/register.html', ['module'], function(module) { module.exports = "<template><require from=\"app.css\"></require><div class=\"body\"><br><div class=\"indexMain\"><div class=\"welcomeText blueBox\"><h1>Welcome to Estlingo!</h1><div>Learn Estonian in a playful way!<br></div></div><div class=\"loginScreen blueBox\"><div><div>Log in:<form id=\"loginform\" submit.delegate=\"getUser()\"><div class=\"greyBox\"><input id=\"username\" name=\"username\" placeholder=\"Username\"></div><div class=\"greyBox\"><input id=\"password\" name=\"password\" placeholder=\"Password\" type=\"password\"></div><div class=\"greyBox\" style=\"float:right\"><input type=\"submit\" value=\"Log in\"></div></form></div><br><br><div>Register:<form id=\"registerform\" submit.delegate=\"addUser()\"><div class=\"greyBox\"><input name=\"username\" placeholder=\"Username\" value.bind=\"userData.username\"></div><div class=\"greyBox\"><input type=\"password\" name=\"password\" placeholder=\"Password\" value.bind=\"userData.password\"></div><div class=\"greyBox\"><input name=\"e_mail\" placeholder=\"E-mail\" value.bind=\"userData.e_mail\"></div><div class=\"greyBox\" style=\"float:right\"><input type=\"submit\" value=\"Register user\"></div></form></div></div><br><br><div style=\"font-size:10px\"><i>Log-in instructions etc ..</i></div></div></div></div></template>"; });
define('text!selectEquivalent1/selectEquivalent1.html', ['module'], function(module) { module.exports = "<template><div class=\"body\"><div class=\"main\"><div class=\"content\"><div class=\"greyBox BackToGames\"><input type=\"button\" value=\"Back to games\" style=\"color:#f5f5f5;font-family:'Open Sans',sans-serif\" onclick='window.location.href=\"http://localhost:9000/#/games\"'></div><div class=\"gameHeader\"><h2>Select the right Estonian equivalent!</h2></div><div class=\"gameArea\"><div><img src=\"src/images/Apple.png\" alt=\"Apple\" style=\"width:100px;height:50\"></div><div class=\"answerLeft\"><h3 id=\"correct\" style=\"color:green\" if.bind=\"isTrue\">CORRECT</h3><div id=\"click\" class=\"blueBox choice\" click.delegate=\"Right()\">Õun</div><div class=\"blueBox choice\" click.delegate=\"NotRight()\">Banaan</div><div class=\"blueBox choice\" click.delegate=\"NotRight()\">Sibul</div><div class=\"blueBox choice\" click.delegate=\"NotRight()\">Kaalikas</div></div><div class=\"answerRight\"><h3 id=\"notCorrect\" style=\"color:red\" if.bind=\"isFalse\">FALSE</h3><div class=\"blueBox choice\" click.delegate=\"NotRight()\">Pirn</div><div class=\"blueBox choice\" click.delegate=\"NotRight()\">Apelsin</div><div class=\"blueBox choice\" click.delegate=\"NotRight()\">Sidrun</div><div class=\"blueBox choice\" click.delegate=\"NotRight()\">Peet</div></div></div><div class=\"greyBox nextGame\"><input type=\"button\" value=\"To the next guess\" style=\"color:#f5f5f5;font-family:'Open Sans',sans-serif\" onclick='window.location.href=\"http://localhost:9000/#/selectEquivalent2\"'></div></div></div></div></template>"; });
define('text!selectEquivalent2/selectEquivalent2.html', ['module'], function(module) { module.exports = "<template><div class=\"main\"><div class=\"content\"><div class=\"greyBox BackToGames\"><input type=\"button\" value=\"Back to games\" style=\"color:#f5f5f5;font-family:'Open Sans',sans-serif\" onclick='window.location.href=\"http://localhost:9000/#/games\"'></div><div class=\"gameHeader\"><h2>Select the right Estonian equivalent!</h2></div><div class=\"gameArea\"><div><img src=\"src/images/chair.png\" alt=\"Chair\" style=\"width:100px;height:50\"></div><div class=\"answerLeft\"><h3 id=\"correct\" style=\"color:green\" if.bind=\"isTrue\">CORRECT</h3><div class=\"blueBox choice\" click.delegate=\"NotRight()\">Nuga</div><div class=\"blueBox choice\" click.delegate=\"Right()\">Laud</div><div class=\"blueBox choice\" click.delegate=\"NotRight()\">Tool</div><div class=\"blueBox choice\" click.delegate=\"NotRight()\">Kruus</div></div><div class=\"answerRight\"><h3 id=\"notCorrect\" style=\"color:red\" if.bind=\"isFalse\">FALSE</h3><div class=\"blueBox choice\" click.delegate=\"NotRight()\">Kartul</div><div class=\"blueBox choice\" click.delegate=\"NotRight()\">Lusikas</div><div class=\"blueBox choice\" click.delegate=\"NotRight()\">Kahvel</div><div class=\"blueBox choice\" click.delegate=\"NotRight()\">Taldrik</div></div></div><div class=\"greyBox nextGame\"><input type=\"button\" value=\"To the next guess\" style=\"color:#f5f5f5;font-family:'Open Sans',sans-serif\"></div></div></div></template>"; });
define('text!typeEquivalent1/typeEquivalent1.html', ['module'], function(module) { module.exports = "<template><div class=\"body\"><div class=\"main\"><div class=\"content\"><div class=\"greyBox BackToGames\"><input type=\"button\" value=\"Back to games\" style=\"color:#f5f5f5;font-family:'Open Sans',sans-serif\" onclick='window.location.href=\"http://localhost:9000/#/games\"'></div><div class=\"gameHeader\"><h2>Choose the topic:</h2></div><div class=\"gameArea\"><div class=\"answerLeft\"><a href=\"\" style=\"text-decoration:none\"><div class=\"blueBox choice\">Colors</div></a><a href=\"\" style=\"text-decoration:none\"><div class=\"blueBox choice\">Numbers</div></a><a href=\"\" style=\"text-decoration:none\"><div class=\"blueBox choice\">Days of the week</div></a></div><div class=\"answerRight\"><a href=\"\" style=\"text-decoration:none\"><div class=\"blueBox choice\">Months</div></a><a href=\"\" style=\"text-decoration:none\"><div class=\"blueBox choice\">Human body</div></a><a href=\"\" style=\"text-decoration:none\"><div class=\"blueBox choice\">Kitchen</div></a></div></div></div></div></div></template>"; });
//# sourceMappingURL=app-bundle.js.map