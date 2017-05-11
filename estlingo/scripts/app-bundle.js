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
            config.map([{ route: ['', 'register'], name: 'register', moduleId: 'register/register' }, { route: 'games', name: 'games', moduleId: 'games/games', nav: true }, { route: 'about', name: 'about', moduleId: 'about/about', nav: true }, { route: 'home', name: 'home', moduleId: 'home/home', nav: true }, { route: 'selectEquivalent', name: 'selectEquivalent', moduleId: 'selectEquivalent/selectEquivalent', nav: true }, { route: 'selectEquivalent1', name: 'selectEquivalent1', moduleId: 'selectEquivalent1/selectEquivalent1', nav: true }, { route: 'selectEquivalent2', name: 'selectEquivalent2', moduleId: 'selectEquivalent2/selectEquivalent2', nav: true }, { route: 'selectEquivalent3', name: 'selectEquivalent3', moduleId: 'selectEquivalent3/selectEquivalent3', nav: true }, { route: 'selectEquivalent4', name: 'selectEquivalent4', moduleId: 'selectEquivalent4/selectEquivalent4', nav: true }, { route: 'selectEquivalent5', name: 'selectEquivalent5', moduleId: 'selectEquivalent5/selectEquivalent5', nav: true }, { route: 'selectEquivalent6', name: 'selectEquivalent6', moduleId: 'selectEquivalent6/selectEquivalent6', nav: true }, { route: 'selectEquivalent7', name: 'selectEquivalent7', moduleId: 'selectEquivalent7/selectEquivalent7', nav: true }, { route: 'typeEquivalent', name: 'typeEquivalent', moduleId: 'typeEquivalent/typeEquivalent', nav: true }, { route: 'colours', name: 'colours', moduleId: 'colours/colours', nav: true }, { route: 'numbers', name: 'numbers', moduleId: 'numbers/numbers', nav: true }, { route: 'days', name: 'days', moduleId: 'days/days', nav: true }, { route: 'months', name: 'months', moduleId: 'months/months', nav: true }, { route: 'human', name: 'human', moduleId: 'human/human', nav: true }, { route: 'kitchen', name: 'kitchen', moduleId: 'kitchen/kitchen', nav: true }]);
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
define('colours/colours',["exports", "aurelia-fetch-client", "aurelia-cookie"], function (exports, _aureliaFetchClient, _aureliaCookie) {
	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Colours = undefined;

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var Colours = exports.Colours = function () {
		function Colours() {
			_classCallCheck(this, Colours);
		}

		Colours.prototype.colours = function colours() {

			if (this.white == undefined || this.black == undefined || this.red == undefined || this.blue == undefined || this.green == undefined || this.yellow == undefined || this.brown == undefined || this.purple == undefined) {
				alert("You must fill the blanks before checking!");
				return;
			} else {
				if (this.white.toLowerCase() == "valge") {
					this.backgroundColor1 = "background-color:lightgreen;";
				} else {
					this.backgroundColor1 = "background-color:lightcoral;";
				}

				if (this.black.toLowerCase() == "must") {
					this.backgroundColor2 = "background-color:lightgreen;";
				} else {
					this.backgroundColor2 = "background-color:lightcoral;";
				}

				if (this.red.toLowerCase() == "punane") {
					this.backgroundColor3 = "background-color:lightgreen;";
				} else {
					this.backgroundColor3 = "background-color:lightcoral;";
				}

				if (this.blue.toLowerCase() == "sinine") {
					this.backgroundColor4 = "background-color:lightgreen;";
				} else {
					this.backgroundColor4 = "background-color:lightcoral;";
				}

				if (this.green.toLowerCase() == "roheline") {
					this.backgroundColor5 = "background-color:lightgreen;";
				} else {
					this.backgroundColor5 = "background-color:lightcoral;";
				}

				if (this.yellow.toLowerCase() == "kollane") {
					this.backgroundColor6 = "background-color:lightgreen;";
				} else {
					this.backgroundColor6 = "background-color:lightcoral;";
				}

				if (this.brown.toLowerCase() == "pruun") {
					this.backgroundColor7 = "background-color:lightgreen;";
				} else {
					this.backgroundColor7 = "background-color:lightcoral;";
				}

				if (this.purple.toLowerCase() == "lilla") {
					this.backgroundColor8 = "background-color:lightgreen;";
				} else {
					this.backgroundColor8 = "background-color:lightcoral;";
				}
			}
		};

		return Colours;
	}();
});
define('days/days',["exports", "aurelia-fetch-client", "aurelia-cookie"], function (exports, _aureliaFetchClient, _aureliaCookie) {
	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Days = undefined;

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var Days = exports.Days = function () {
		function Days() {
			_classCallCheck(this, Days);
		}

		Days.prototype.days = function days() {

			if (this.monday == undefined || this.tuesday == undefined || this.wednesday == undefined || this.thursday == undefined || this.friday == undefined || this.saturday == undefined || this.sunday == undefined) {
				alert("You must fill the blanks before checking!");
				return;
			} else {
				if (this.monday.toLowerCase() == "esmaspäev") {
					this.backgroundColor1 = "background-color:lightgreen;";
				} else {
					this.backgroundColor1 = "background-color:lightcoral;";
				}

				if (this.tuesday.toLowerCase() == "teisipäev") {
					this.backgroundColor2 = "background-color:lightgreen;";
				} else {
					this.backgroundColor2 = "background-color:lightcoral;";
				}

				if (this.wednesday.toLowerCase() == "kolmapäev") {
					this.backgroundColor3 = "background-color:lightgreen;";
				} else {
					this.backgroundColor3 = "background-color:lightcoral;";
				}

				if (this.thursday.toLowerCase() == "neljapäev") {
					this.backgroundColor4 = "background-color:lightgreen;";
				} else {
					this.backgroundColor4 = "background-color:lightcoral;";
				}

				if (this.friday.toLowerCase() == "reede") {
					this.backgroundColor5 = "background-color:lightgreen;";
				} else {
					this.backgroundColor5 = "background-color:lightcoral;";
				}

				if (this.saturday.toLowerCase() == "laupäev") {
					this.backgroundColor6 = "background-color:lightgreen;";
				} else {
					this.backgroundColor6 = "background-color:lightcoral;";
				}

				if (this.sunday.toLowerCase() == "pühapäev") {
					this.backgroundColor7 = "background-color:lightgreen;";
				} else {
					this.backgroundColor7 = "background-color:lightcoral;";
				}
			}
		};

		return Days;
	}();
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
        this.h2 = "Type equivalent";
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
define('human/human',["exports", "aurelia-fetch-client", "aurelia-cookie"], function (exports, _aureliaFetchClient, _aureliaCookie) {
	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Human = undefined;

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var Human = exports.Human = function () {
		function Human() {
			_classCallCheck(this, Human);
		}

		Human.prototype.human = function human() {

			if (this.head == undefined || this.hand == undefined || this.leg == undefined || this.mouth == undefined || this.nose == undefined || this.ear == undefined || this.knee == undefined || this.finger == undefined || this.tongue == undefined || this.hair == undefined || this.chest == undefined || this.back == undefined) {
				alert("You must fill the blanks before checking!");
				return;
			} else {
				if (this.head.toLowerCase() == "pea") {
					this.backgroundColor1 = "background-color:lightgreen;";
				} else {
					this.backgroundColor1 = "background-color:lightcoral;";
				}

				if (this.hand.toLowerCase() == "käsi") {
					this.backgroundColor2 = "background-color:lightgreen;";
				} else {
					this.backgroundColor2 = "background-color:lightcoral;";
				}

				if (this.leg.toLowerCase() == "jalg") {
					this.backgroundColor3 = "background-color:lightgreen;";
				} else {
					this.backgroundColor3 = "background-color:lightcoral;";
				}

				if (this.mouth.toLowerCase() == "suu") {
					this.backgroundColor4 = "background-color:lightgreen;";
				} else {
					this.backgroundColor4 = "background-color:lightcoral;";
				}

				if (this.nose.toLowerCase() == "nina") {
					this.backgroundColor5 = "background-color:lightgreen;";
				} else {
					this.backgroundColor5 = "background-color:lightcoral;";
				}

				if (this.ear.toLowerCase() == "kõrv") {
					this.backgroundColor6 = "background-color:lightgreen;";
				} else {
					this.backgroundColor6 = "background-color:lightcoral;";
				}

				if (this.knee.toLowerCase() == "põlv") {
					this.backgroundColor7 = "background-color:lightgreen;";
				} else {
					this.backgroundColor7 = "background-color:lightcoral;";
				}

				if (this.finger.toLowerCase() == "sõrm") {
					this.backgroundColor8 = "background-color:lightgreen;";
				} else {
					this.backgroundColor8 = "background-color:lightcoral;";
				}

				if (this.tongue.toLowerCase() == "keel") {
					this.backgroundColor9 = "background-color:lightgreen;";
				} else {
					this.backgroundColor9 = "background-color:lightcoral;";
				}

				if (this.hair.toLowerCase() == "juuksed") {
					this.backgroundColor10 = "background-color:lightgreen;";
				} else {
					this.backgroundColor10 = "background-color:lightcoral;";
				}

				if (this.chest.toLowerCase() == "rind") {
					this.backgroundColor11 = "background-color:lightgreen;";
				} else {
					this.backgroundColor11 = "background-color:lightcoral;";
				}

				if (this.back.toLowerCase() == "selg") {
					this.backgroundColor12 = "background-color:lightgreen;";
				} else {
					this.backgroundColor12 = "background-color:lightcoral;";
				}
			}
		};

		return Human;
	}();
});
define('kitchen/kitchen',["exports", "aurelia-fetch-client", "aurelia-cookie"], function (exports, _aureliaFetchClient, _aureliaCookie) {
	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Kitchen = undefined;

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var Kitchen = exports.Kitchen = function () {
		function Kitchen() {
			_classCallCheck(this, Kitchen);
		}

		Kitchen.prototype.kitchen = function kitchen() {

			if (this.sink == undefined || this.plate == undefined || this.bowl == undefined || this.glass == undefined || this.cup == undefined || this.fridge == undefined || this.knife == undefined || this.fork == undefined || this.spoon == undefined || this.oven == undefined || this.stove == undefined || this.sponge == undefined) {
				alert("You must fill the blanks before checking!");
				return;
			} else {
				if (this.sink.toLowerCase() == "kraanikauss") {
					this.backgroundColor1 = "background-color:lightgreen;";
				} else {
					this.backgroundColor1 = "background-color:lightcoral;";
				}

				if (this.plate.toLowerCase() == "taldrik") {
					this.backgroundColor2 = "background-color:lightgreen;";
				} else {
					this.backgroundColor2 = "background-color:lightcoral;";
				}

				if (this.bowl.toLowerCase() == "kauss") {
					this.backgroundColor3 = "background-color:lightgreen;";
				} else {
					this.backgroundColor3 = "background-color:lightcoral;";
				}

				if (this.glass.toLowerCase() == "klaas") {
					this.backgroundColor4 = "background-color:lightgreen;";
				} else {
					this.backgroundColor4 = "background-color:lightcoral;";
				}

				if (this.cup.toLowerCase() == "tass") {
					this.backgroundColor5 = "background-color:lightgreen;";
				} else {
					this.backgroundColor5 = "background-color:lightcoral;";
				}

				if (this.fridge.toLowerCase() == "külmkapp") {
					this.backgroundColor6 = "background-color:lightgreen;";
				} else {
					this.backgroundColor6 = "background-color:lightcoral;";
				}

				if (this.knife.toLowerCase() == "nuga") {
					this.backgroundColor7 = "background-color:lightgreen;";
				} else {
					this.backgroundColor7 = "background-color:lightcoral;";
				}

				if (this.fork.toLowerCase() == "kahvel") {
					this.backgroundColor8 = "background-color:lightgreen;";
				} else {
					this.backgroundColor8 = "background-color:lightcoral;";
				}

				if (this.spoon.toLowerCase() == "lusikas") {
					this.backgroundColor9 = "background-color:lightgreen;";
				} else {
					this.backgroundColor9 = "background-color:lightcoral;";
				}

				if (this.oven.toLowerCase() == "ahi") {
					this.backgroundColor10 = "background-color:lightgreen;";
				} else {
					this.backgroundColor10 = "background-color:lightcoral;";
				}

				if (this.stove.toLowerCase() == "pliit") {
					this.backgroundColor11 = "background-color:lightgreen;";
				} else {
					this.backgroundColor11 = "background-color:lightcoral;";
				}

				if (this.sponge.toLowerCase() == "käsn") {
					this.backgroundColor12 = "background-color:lightgreen;";
				} else {
					this.backgroundColor12 = "background-color:lightcoral;";
				}
			}
		};

		return Kitchen;
	}();
});
define('months/months',["exports", "aurelia-fetch-client", "aurelia-cookie"], function (exports, _aureliaFetchClient, _aureliaCookie) {
	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Months = undefined;

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var Months = exports.Months = function () {
		function Months() {
			_classCallCheck(this, Months);
		}

		Months.prototype.months = function months() {

			if (this.january == undefined || this.february == undefined || this.march == undefined || this.april == undefined || this.may == undefined || this.june == undefined || this.july == undefined || this.august == undefined || this.september == undefined || this.october == undefined || this.november == undefined || this.december == undefined) {
				alert("You must fill the blanks before checking!");
				return;
			} else {
				if (this.january.toLowerCase() == "jaanuar") {
					this.backgroundColor1 = "background-color:lightgreen;";
				} else {
					this.backgroundColor1 = "background-color:lightcoral;";
				}

				if (this.february.toLowerCase() == "veebruar") {
					this.backgroundColor2 = "background-color:lightgreen;";
				} else {
					this.backgroundColor2 = "background-color:lightcoral;";
				}

				if (this.march.toLowerCase() == "märts") {
					this.backgroundColor3 = "background-color:lightgreen;";
				} else {
					this.backgroundColor3 = "background-color:lightcoral;";
				}

				if (this.april.toLowerCase() == "aprill") {
					this.backgroundColor4 = "background-color:lightgreen;";
				} else {
					this.backgroundColor4 = "background-color:lightcoral;";
				}

				if (this.may.toLowerCase() == "mai") {
					this.backgroundColor5 = "background-color:lightgreen;";
				} else {
					this.backgroundColor5 = "background-color:lightcoral;";
				}

				if (this.june.toLowerCase() == "juuni") {
					this.backgroundColor6 = "background-color:lightgreen;";
				} else {
					this.backgroundColor6 = "background-color:lightcoral;";
				}

				if (this.july.toLowerCase() == "juuli") {
					this.backgroundColor7 = "background-color:lightgreen;";
				} else {
					this.backgroundColor7 = "background-color:lightcoral;";
				}

				if (this.august.toLowerCase() == "august") {
					this.backgroundColor8 = "background-color:lightgreen;";
				} else {
					this.backgroundColor8 = "background-color:lightcoral;";
				}

				if (this.september.toLowerCase() == "september") {
					this.backgroundColor9 = "background-color:lightgreen;";
				} else {
					this.backgroundColor9 = "background-color:lightcoral;";
				}

				if (this.october.toLowerCase() == "oktoober") {
					this.backgroundColor10 = "background-color:lightgreen;";
				} else {
					this.backgroundColor10 = "background-color:lightcoral;";
				}

				if (this.november.toLowerCase() == "november") {
					this.backgroundColor11 = "background-color:lightgreen;";
				} else {
					this.backgroundColor11 = "background-color:lightcoral;";
				}

				if (this.december.toLowerCase() == "detsember") {
					this.backgroundColor12 = "background-color:lightgreen;";
				} else {
					this.backgroundColor12 = "background-color:lightcoral;";
				}
			}
		};

		return Months;
	}();
});
define('numbers/numbers',["exports", "aurelia-fetch-client", "aurelia-cookie"], function (exports, _aureliaFetchClient, _aureliaCookie) {
	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Numbers = undefined;

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var Numbers = exports.Numbers = function () {
		function Numbers() {
			_classCallCheck(this, Numbers);
		}

		Numbers.prototype.numbers = function numbers() {

			if (this.one == undefined || this.two == undefined || this.three == undefined || this.four == undefined || this.five == undefined || this.six == undefined || this.seven == undefined || this.eight == undefined || this.nine == undefined || this.ten == undefined) {
				alert("You must fill the blanks before checking!");
				return;
			} else {
				if (this.one.toLowerCase() == "üks") {
					this.backgroundColor1 = "background-color:lightgreen;";
				} else {
					this.backgroundColor1 = "background-color:lightcoral;";
				}

				if (this.two.toLowerCase() == "kaks") {
					this.backgroundColor2 = "background-color:lightgreen;";
				} else {
					this.backgroundColor2 = "background-color:lightcoral;";
				}

				if (this.three.toLowerCase() == "kolm") {
					this.backgroundColor3 = "background-color:lightgreen;";
				} else {
					this.backgroundColor3 = "background-color:lightcoral;";
				}

				if (this.four.toLowerCase() == "neli") {
					this.backgroundColor4 = "background-color:lightgreen;";
				} else {
					this.backgroundColor4 = "background-color:lightcoral;";
				}

				if (this.five.toLowerCase() == "viis") {
					this.backgroundColor5 = "background-color:lightgreen;";
				} else {
					this.backgroundColor5 = "background-color:lightcoral;";
				}

				if (this.six.toLowerCase() == "kuus") {
					this.backgroundColor6 = "background-color:lightgreen;";
				} else {
					this.backgroundColor6 = "background-color:lightcoral;";
				}

				if (this.seven.toLowerCase() == "seitse") {
					this.backgroundColor7 = "background-color:lightgreen;";
				} else {
					this.backgroundColor7 = "background-color:lightcoral;";
				}

				if (this.eight.toLowerCase() == "kaheksa") {
					this.backgroundColor8 = "background-color:lightgreen;";
				} else {
					this.backgroundColor8 = "background-color:lightcoral;";
				}

				if (this.nine.toLowerCase() == "üheksa") {
					this.backgroundColor9 = "background-color:lightgreen;";
				} else {
					this.backgroundColor9 = "background-color:lightcoral;";
				}

				if (this.ten.toLowerCase() == "kümme") {
					this.backgroundColor10 = "background-color:lightgreen;";
				} else {
					this.backgroundColor10 = "background-color:lightcoral;";
				}
			}
		};

		return Numbers;
	}();
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
            alert("Account created!");
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
define('selectEquivalent/selectEquivalent',["exports"], function (exports) {
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

        this.h1 = "Apple";
        this.h2 = "Chair";
        this.h3 = "Bicycle";
        this.h4 = "Potato";
        this.h5 = "Strawberry";
        this.h6 = "Clock";
        this.h7 = "Fork";
    };
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
            this.gameCompleted = true;
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
            this.gameCompleted = true;
        };

        select.prototype.NotRight = function NotRight() {
            this.isFalse = true;
            this.isTrue = false;
        };

        return select;
    }();
});
define('selectEquivalent3/selectEquivalent3',["exports"], function (exports) {
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
            this.gameCompleted = true;
        };

        select.prototype.NotRight = function NotRight() {
            this.isFalse = true;
            this.isTrue = false;
        };

        return select;
    }();
});
define('selectEquivalent4/selectEquivalent4',["exports"], function (exports) {
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
            this.gameCompleted = true;
        };

        select.prototype.NotRight = function NotRight() {
            this.isFalse = true;
            this.isTrue = false;
        };

        return select;
    }();
});
define('selectEquivalent5/selectEquivalent5',["exports"], function (exports) {
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
            this.gameCompleted = true;
        };

        select.prototype.NotRight = function NotRight() {
            this.isFalse = true;
            this.isTrue = false;
        };

        return select;
    }();
});
define('selectEquivalent6/selectEquivalent6',["exports"], function (exports) {
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
            this.gameCompleted = true;
        };

        select.prototype.NotRight = function NotRight() {
            this.isFalse = true;
            this.isTrue = false;
        };

        return select;
    }();
});
define('selectEquivalent7/selectEquivalent7',["exports"], function (exports) {
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
            this.gameCompleted = true;
        };

        select.prototype.NotRight = function NotRight() {
            this.isFalse = true;
            this.isTrue = false;
        };

        return select;
    }();
});
define('typeEquivalent/typeEquivalent',["exports"], function (exports) {
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

        this.h1 = "Colours";
        this.h2 = "Numbers";
        this.h3 = "Days of the week";
        this.h4 = "Months";
        this.h5 = "Human body";
        this.h6 = "Kitchen";
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
define('text!app.css', ['module'], function(module) { module.exports = "html, body{\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-size: 15px;\r\n    background-color: #f5f5f5;\r\n    height: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\ninput{\r\n    border: none;\r\n    outline: none;\r\n    background-color: transparent;\r\n    cursor: pointer;\r\n    font-size: 15px;\r\n}\r\n\r\n.header{\r\n    width: 100%;\r\n    background-color: #4099FF;\r\n    color: #f5f5f5;\r\n    padding: 5px 5px 0px 5px;\r\n    margin: 0px 0px 0px 0px;\r\n    box-sizing: border-box;\r\n    position: fixed;\r\n    top: 0;\r\n}\r\n\r\n.indexMain{\r\n    width: 900px;\r\n    height: auto;\r\n    margin: 0px auto 0px auto;\r\n    padding-top: 45px;\r\n}\r\n\r\n.main{\r\n    width: 900px;\r\n    min-height: 400px;\r\n    margin: 105px auto 0px auto;\r\n    padding: 10px 0px 0px 0px;\r\n    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.3), 0 8px 20px 0 rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.main2{\r\n    width: 900px;\r\n    min-height: 470px;\r\n    margin: 105px auto 0px auto;\r\n    padding: 10px 0px 0px 0px;\r\n    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.3), 0 8px 20px 0 rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.welcomeText{\r\n    width: 550px;\r\n    min-height: 400px;\r\n    float: left;\r\n    color: #f5f5f5;\r\n    margin: 10px 0px 10px 0px;\r\n    text-align: center;\r\n}\r\n\r\n.loginScreen{\r\n    width: 315px;\r\n    min-height: 400px;\r\n    float: right;\r\n    margin: 10px 0px 10px 0px;\r\n}\r\n\r\n.footer{\r\n    width: 100%;\r\n    background-color: #4099FF;\r\n    color: #f5f5f5;\r\n    padding: 9px 10px 9px 10px;\r\n    box-sizing: border-box;\r\n    margin: auto 0px 0px 0px;\r\n    position: fixed;\r\n    bottom: 0;\r\n    white-space: nowrap;\r\n    font-size: 10px;\r\n}\r\n\r\n.gamechoiceButton {\r\n    width: 180px;\r\n    height: 120px;\r\n    text-align: center;\r\n    margin-top: 90px;\r\n    margin-left: 20px;\r\n    float: left;\r\n    color: black;\r\n}\r\n\r\n.gamechoiceButton:hover {\r\n    color: #f5f5f5;\r\n}\r\n\r\n.gameHeader {\r\n    width: 400px;\r\n    min-height: 50px;\r\n    float: left;\r\n    color: black;\r\n    margin: 5px 0px 5px 250px;\r\n    text-align: center;\r\n}\r\n\r\n.gameArea {\r\n    width: 550px;\r\n    min-height: 90px;\r\n    float: left;\r\n    color: #f5f5f5;\r\n    margin: 5px 0px 10px 170px;\r\n    text-align: center; \r\n}\r\n\r\n.blueBox{\r\n    background-color: #4099FF;\r\n    padding: 5px;\r\n}\r\n\r\n.greyBox{\r\n    width: auto;\r\n    background-color: #f5f5f5;\r\n    padding: 5px;\r\n    margin: 3px 3px 3px 3px;\r\n}\r\n\r\n.content{\r\n    margin: 5px 0px 5px 0px;\r\n    padding: 0px 5px 0px 5px;\r\n    float: top;\r\n}\r\n\r\n.contentGame{\r\n    margin: 5px 0px 5px 250px;\r\n    padding: 0px 5px 0px 5px;\r\n    float: top;\r\n}\r\n\r\n.choice {\r\n    margin: 5px 0px 5px 0px;\r\n    color: black;\r\n    cursor: pointer;\r\n}\r\n\r\n.choice:hover {\r\n    color: #f5f5f5;\r\n    font-weight: bold;\r\n}\r\n\r\n.answerLeft {\r\n    height: 200px;\r\n    width: 250px;\r\n    margin-left: 20px;\r\n    float: left;\r\n}\r\n\r\n.answerRight {\r\n    height: 200px;;\r\n    width: 250px;\r\n    margin-right: 20px;\r\n    float: right;\r\n}\r\n\r\n.answerLeft2 {\r\n    height: 200px;\r\n    width: 250px;\r\n    margin-left: 20px;\r\n    float: left;\r\n    text-align: right;\r\n}\r\n\r\n.answerRight2 {\r\n    height: 200px;;\r\n    width: 250px;\r\n    margin-right: 20px;\r\n    float: right;\r\n    text-align: right;\r\n}\r\n\r\n.nextGame {\r\n    margin-top: 20px;\r\n    margin-right: 0px;\r\n    float: right;\r\n    background-color: #4b4b4b;\r\n    cursor: pointer;\r\n}\r\n\r\n.BackToGames {\r\n    margin-top: 100px;\r\n    margin-right: -200px;\r\n    float: left;\r\n    background-color: #4b4b4b;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.picture {\r\n    width:100px;\r\n    height:80px;\r\n}\r\n\r\ninput[type=text] {\r\n    border-radius: 3px;\r\n    background-color: lightgray;\r\n}\r\n\r\n.check {\r\n    width: 100px;\r\n    margin-left: 230px;\r\n    background-color: #4b4b4b;\r\n    margin-top: 15px;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n/*Menubar styles:*/\r\n.menuBar{\r\n    position: fixed;\r\n    top: 45px;\r\n}\r\n\r\nul {\r\n    list-style-type: none;\r\n    margin: 0px;\r\n    padding: 0px;\r\n    overflow: hidden;\r\n    background-color: #4099FF;\r\n    position: fixed;\r\n    width: 100%;\r\n}\r\n\r\nli {\r\n    float: left;\r\n}\r\n\r\nli a {\r\n    display: block;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n}\r\n\r\nli a:hover:not(.active) {\r\n    background-color: #55a4ff;\r\n}\r\n    \r\n.active {\r\n    background-color: #4b4b4b;\r\n}"; });
define('text!nav-bar.html', ['module'], function(module) { module.exports = "<template bindable=\"router\" class=\"nav\"><p><a repeat.for=\"item of router.navigation\" href.bind=\"item.href\">${item.title}</a></p></template>"; });
define('text!about/about.html', ['module'], function(module) { module.exports = "<template><div class=\"body\"><div class=\"main\"><div class=\"content\">${message}<br><br><img style=\"vertical-align:middle;padding:5px\" src=\"src/images/easy.png\" alt=\"Easy\" height=\"42\" width=\"42\">${easy}<br><img style=\"vertical-align:middle;padding:5px\" src=\"src/images/fast.png\" alt=\"Fast\" height=\"42\" width=\"42\">${fast}<br><img style=\"vertical-align:middle;padding:5px\" src=\"src/images/family.png\" alt=\"Family\" height=\"42\" width=\"42\">${family}<br><img style=\"vertical-align:middle;padding:5px\" src=\"src/images/game.png\" alt=\"Game\" height=\"42\" width=\"42\">${game}</div></div></div></template>"; });
define('text!colours/colours.html', ['module'], function(module) { module.exports = "<template><div class=\"main\"><div class=\"content\"><div class=\"greyBox BackToGames\"><input type=\"button\" value=\"Back to selection\" style=\"color:#f5f5f5;font-family:'Open Sans',sans-serif\" onclick='window.location.href=\"http://localhost:9000/#/typeEquivalent\"'></div><div class=\"gameHeader\"><h2>Colors</h2></div><div class=\"gameArea\"><div class=\"greyBox check\" style=\"color:#f5f5f5;font-family:'Open Sans',sans-serif\" click.delegate=\"colours()\">Check!</div><div class=\"answerLeft2\"><br><form style=\"color:#000\"><label>White &nbsp;</label><input type=\"text\" value.bind=\"white\" style.bind=\"backgroundColor1\"><br><label>Black &nbsp;</label><input type=\"text\" value.bind=\"black\" style.bind=\"backgroundColor2\"><br><label>Red &nbsp;</label><input type=\"text\" value.bind=\"red\" style.bind=\"backgroundColor3\"><br><label>Blue &nbsp;</label><input type=\"text\" value.bind=\"blue\" style.bind=\"backgroundColor4\"><br></form></div><div class=\"answerRight3\"><br><form style=\"color:#000\"><label>Green &nbsp;</label><input type=\"text\" value.bind=\"green\" style.bind=\"backgroundColor5\"><br><label>Yellow &nbsp;</label><input type=\"text\" value.bind=\"yellow\" style.bind=\"backgroundColor6\"><br><label>Brown &nbsp;</label><input type=\"text\" value.bind=\"brown\" style.bind=\"backgroundColor7\"><br><label>Purple &nbsp;</label><input type=\"text\" value.bind=\"purple\" style.bind=\"backgroundColor8\"><br></form></div></div><div class=\"greyBox nextGame\"><input type=\"button\" value=\"To the next guess\" style=\"color:#f5f5f5;font-family:'Open Sans',sans-serif\" onclick='window.location.href=\"http://localhost:9000/#/numbers\"'></div></div></div></template>"; });
define('text!days/days.html', ['module'], function(module) { module.exports = "<template><div class=\"main\"><div class=\"content\"><div class=\"greyBox BackToGames\"><input type=\"button\" value=\"Back to selection\" style=\"color:#f5f5f5;font-family:'Open Sans',sans-serif\" onclick='window.location.href=\"http://localhost:9000/#/typeEquivalent\"'></div><div class=\"gameHeader\"><h2>Days of the week</h2></div><div class=\"gameArea\"><div class=\"greyBox check\" style=\"color:#f5f5f5;font-family:'Open Sans',sans-serif\" click.delegate=\"days()\">Check!</div><div class=\"answerLeft\"><br><form style=\"color:#000\"><label>Monday &nbsp;</label><br><input type=\"text\" value.bind=\"monday\" style.bind=\"backgroundColor1\"><br><label>Tuesday &nbsp;</label><br><input type=\"text\" value.bind=\"tuesday\" style.bind=\"backgroundColor2\"><br><label>Wednesday &nbsp;</label><br><input type=\"text\" value.bind=\"wednesday\" style.bind=\"backgroundColor3\"><br><label>Thursday &nbsp;</label><br><input type=\"text\" value.bind=\"thursday\" style.bind=\"backgroundColor4\"><br></form></div><div class=\"answerRight\"><br><form style=\"color:#000\"><label>Friday &nbsp;</label><br><input type=\"text\" value.bind=\"friday\" style.bind=\"backgroundColor5\"><br><label>Saturday &nbsp;</label><br><input type=\"text\" value.bind=\"saturday\" style.bind=\"backgroundColor6\"><br><label>Sunday &nbsp;</label><br><input type=\"text\" value.bind=\"sunday\" style.bind=\"backgroundColor7\"><br></form></div></div><div class=\"greyBox nextGame\"><input type=\"button\" value=\"To the next guess\" style=\"color:#f5f5f5;font-family:'Open Sans',sans-serif\" onclick='window.location.href=\"http://localhost:9000/#/months\"'></div></div></div></template>"; });
define('text!games/games.html', ['module'], function(module) { module.exports = "<template><div class=\"main\"><div class=\"contentGame\"><a href=\"http://localhost:9000/#/selectEquivalent\"><div class=\"gamechoiceButton blueBox\"><h1>${h1}</h1></div></a><a href=\"http://localhost:9000/#/typeEquivalent\"><div class=\"gamechoiceButton blueBox\"><h1>${h2}</h1></div></a></div></div></template>"; });
define('text!home/home.html', ['module'], function(module) { module.exports = "<template><div class=\"body\"><div class=\"main\"><div class=\"content\">${message}</div></div></div></template>"; });
define('text!human/human.html', ['module'], function(module) { module.exports = "<template><div class=\"main\"><div class=\"content\"><div class=\"greyBox BackToGames\"><input type=\"button\" value=\"Back to selection\" style=\"color:#f5f5f5;font-family:'Open Sans',sans-serif\" onclick='window.location.href=\"http://localhost:9000/#/typeEquivalent\"'></div><div class=\"gameHeader\"><h2>Human body</h2></div><div class=\"gameArea\"><div class=\"greyBox check\" style=\"color:#f5f5f5;font-family:'Open Sans',sans-serif\" click.delegate=\"human()\">Check!</div><div class=\"answerLeft\"><br><form style=\"color:#000\"><label>Head &nbsp;</label><br><input type=\"text\" value.bind=\"head\" style.bind=\"backgroundColor1\"><br><label>Hand &nbsp;</label><br><input type=\"text\" value.bind=\"hand\" style.bind=\"backgroundColor2\"><br><label>Leg &nbsp;</label><br><input type=\"text\" value.bind=\"leg\" style.bind=\"backgroundColor3\"><br><label>Mouth &nbsp;</label><br><input type=\"text\" value.bind=\"mouth\" style.bind=\"backgroundColor4\"><br><label>Nose &nbsp;</label><br><input type=\"text\" value.bind=\"nose\" style.bind=\"backgroundColor5\"><br><label>Ear &nbsp;</label><br><input type=\"text\" value.bind=\"ear\" style.bind=\"backgroundColor6\"><br></form></div><div class=\"answerRight\"><br><form style=\"color:#000\"><label>Knee &nbsp;</label><br><input type=\"text\" value.bind=\"knee\" style.bind=\"backgroundColor7\"><br><label>Finger &nbsp;</label><br><input type=\"text\" value.bind=\"finger\" style.bind=\"backgroundColor8\"><br><label>Tongue &nbsp;</label><br><input type=\"text\" value.bind=\"tongue\" style.bind=\"backgroundColor9\"><br><label>Hair &nbsp;</label><br><input type=\"text\" value.bind=\"hair\" style.bind=\"backgroundColor10\"><br><label>Chest &nbsp;</label><br><input type=\"text\" value.bind=\"chest\" style.bind=\"backgroundColor11\"><br><label>Back &nbsp;</label><br><input type=\"text\" value.bind=\"back\" style.bind=\"backgroundColor12\"><br></form></div></div><div class=\"greyBox nextGame\"><input type=\"button\" value=\"To the next guess\" style=\"color:#f5f5f5;font-family:'Open Sans',sans-serif\" onclick='window.location.href=\"http://localhost:9000/#/kitchen\"'></div></div></div></template>"; });
define('text!kitchen/kitchen.html', ['module'], function(module) { module.exports = "<template><div class=\"main\"><div class=\"content\"><div class=\"greyBox BackToGames\"><input type=\"button\" value=\"Back to selection\" style=\"color:#f5f5f5;font-family:'Open Sans',sans-serif\" onclick='window.location.href=\"http://localhost:9000/#/typeEquivalent\"'></div><div class=\"gameHeader\"><h2>Kitchen</h2></div><div class=\"gameArea\"><div class=\"greyBox check\" style=\"color:#f5f5f5;font-family:'Open Sans',sans-serif\" click.delegate=\"kitchen()\">Check!</div><div class=\"answerLeft\"><br><form style=\"color:#000\"><label>Sink &nbsp;</label><br><input type=\"text\" value.bind=\"sink\" style.bind=\"backgroundColor1\"><br><label>Plate &nbsp;</label><br><input type=\"text\" value.bind=\"plate\" style.bind=\"backgroundColor2\"><br><label>Bowl &nbsp;</label><br><input type=\"text\" value.bind=\"bowl\" style.bind=\"backgroundColor3\"><br><label>Glass &nbsp;</label><br><input type=\"text\" value.bind=\"glass\" style.bind=\"backgroundColor4\"><br><label>Cup &nbsp;</label><br><input type=\"text\" value.bind=\"cup\" style.bind=\"backgroundColor5\"><br><label>Fridge &nbsp;</label><br><input type=\"text\" value.bind=\"fridge\" style.bind=\"backgroundColor6\"><br></form></div><div class=\"answerRight\"><br><form style=\"color:#000\"><label>Knife &nbsp;</label><br><input type=\"text\" value.bind=\"knife\" style.bind=\"backgroundColor7\"><br><label>Fork &nbsp;</label><br><input type=\"text\" value.bind=\"fork\" style.bind=\"backgroundColor8\"><br><label>Spoon &nbsp;</label><br><input type=\"text\" value.bind=\"spoon\" style.bind=\"backgroundColor9\"><br><label>Oven &nbsp;</label><br><input type=\"text\" value.bind=\"oven\" style.bind=\"backgroundColor10\"><br><label>Stove &nbsp;</label><br><input type=\"text\" value.bind=\"stove\" style.bind=\"backgroundColor11\"><br><label>Sponge &nbsp;</label><br><input type=\"text\" value.bind=\"sponge\" style.bind=\"backgroundColor12\"><br></form></div></div></div></div></template>"; });
define('text!months/months.html', ['module'], function(module) { module.exports = "<template><div class=\"main\"><div class=\"content\"><div class=\"greyBox BackToGames\"><input type=\"button\" value=\"Back to selection\" style=\"color:#f5f5f5;font-family:'Open Sans',sans-serif\" onclick='window.location.href=\"http://localhost:9000/#/typeEquivalent\"'></div><div class=\"gameHeader\"><h2>Months</h2></div><div class=\"gameArea\"><div class=\"greyBox check\" style=\"color:#f5f5f5;font-family:'Open Sans',sans-serif\" click.delegate=\"months()\">Check!</div><div class=\"answerLeft\"><br><form style=\"color:#000\"><label>January &nbsp;</label><br><input type=\"text\" value.bind=\"january\" style.bind=\"backgroundColor1\"><br><label>February &nbsp;</label><br><input type=\"text\" value.bind=\"february\" style.bind=\"backgroundColor2\"><br><label>March &nbsp;</label><br><input type=\"text\" value.bind=\"march\" style.bind=\"backgroundColor3\"><br><label>April &nbsp;</label><br><input type=\"text\" value.bind=\"april\" style.bind=\"backgroundColor4\"><br><label>May &nbsp;</label><br><input type=\"text\" value.bind=\"may\" style.bind=\"backgroundColor5\"><br><label>June &nbsp;</label><br><input type=\"text\" value.bind=\"june\" style.bind=\"backgroundColor6\"><br></form></div><div class=\"answerRight\"><br><form style=\"color:#000\"><label>July &nbsp;</label><br><input type=\"text\" value.bind=\"july\" style.bind=\"backgroundColor7\"><br><label>August &nbsp;</label><br><input type=\"text\" value.bind=\"august\" style.bind=\"backgroundColor8\"><br><label>September &nbsp;</label><br><input type=\"text\" value.bind=\"september\" style.bind=\"backgroundColor9\"><br><label>October &nbsp;</label><br><input type=\"text\" value.bind=\"october\" style.bind=\"backgroundColor10\"><br><label>November &nbsp;</label><br><input type=\"text\" value.bind=\"november\" style.bind=\"backgroundColor11\"><br><label>December &nbsp;</label><br><input type=\"text\" value.bind=\"december\" style.bind=\"backgroundColor12\"><br></form></div></div><div class=\"greyBox nextGame\"><input type=\"button\" value=\"To the next guess\" style=\"color:#f5f5f5;font-family:'Open Sans',sans-serif\" onclick='window.location.href=\"http://localhost:9000/#/human\"'></div></div></div></template>"; });
define('text!numbers/numbers.html', ['module'], function(module) { module.exports = "<template><div class=\"main\"><div class=\"content\"><div class=\"greyBox BackToGames\"><input type=\"button\" value=\"Back to selection\" style=\"color:#f5f5f5;font-family:'Open Sans',sans-serif\" onclick='window.location.href=\"http://localhost:9000/#/typeEquivalent\"'></div><div class=\"gameHeader\"><h2>Numbers</h2>(Make sure to type out the numbers)</div><div class=\"gameArea\"><div class=\"greyBox check\" style=\"color:#f5f5f5;font-family:'Open Sans',sans-serif\" click.delegate=\"numbers()\">Check!</div><div class=\"answerLeft2\"><br><form style=\"color:#000\"><label>One &nbsp;</label><input type=\"text\" value.bind=\"one\" style.bind=\"backgroundColor1\"><br><label>Two &nbsp;</label><input type=\"text\" value.bind=\"two\" style.bind=\"backgroundColor2\"><br><label>Three &nbsp;</label><input type=\"text\" value.bind=\"three\" style.bind=\"backgroundColor3\"><br><label>Four &nbsp;</label><input type=\"text\" value.bind=\"four\" style.bind=\"backgroundColor4\"><br><label>Five &nbsp;</label><input type=\"text\" value.bind=\"five\" style.bind=\"backgroundColor5\"><br></form></div><div class=\"answerRight2\"><br><form style=\"color:#000\"><label>Six &nbsp;</label><input type=\"text\" value.bind=\"six\" style.bind=\"backgroundColor6\"><br><label>Seven &nbsp;</label><input type=\"text\" value.bind=\"seven\" style.bind=\"backgroundColor7\"><br><label>Eight &nbsp;</label><input type=\"text\" value.bind=\"eight\" style.bind=\"backgroundColor8\"><br><label>Nine &nbsp;</label><input type=\"text\" value.bind=\"nine\" style.bind=\"backgroundColor9\"><br><label>Ten &nbsp;</label><input type=\"text\" value.bind=\"ten\" style.bind=\"backgroundColor10\"><br></form></div></div><div class=\"greyBox nextGame\"><input type=\"button\" value=\"To the next guess\" style=\"color:#f5f5f5;font-family:'Open Sans',sans-serif\" onclick='window.location.href=\"http://localhost:9000/#/days\"'></div></div></div></template>"; });
define('text!register/register.html', ['module'], function(module) { module.exports = "<template><require from=\"app.css\"></require><div class=\"body\"><br><div class=\"indexMain\"><div class=\"welcomeText blueBox\"><h1>Welcome to Estlingo!</h1><div>Learn Estonian in a playful way!<br></div></div><div class=\"loginScreen blueBox\"><div><div>Log in:<form id=\"loginform\" submit.delegate=\"getUser()\"><div class=\"greyBox\"><input id=\"username\" name=\"username\" placeholder=\"Username\"></div><div class=\"greyBox\"><input id=\"password\" name=\"password\" placeholder=\"Password\" type=\"password\"></div><div class=\"greyBox\" style=\"float:right\"><input type=\"submit\" value=\"Log in\"></div></form></div><br><br><div>Register:<form id=\"registerform\" submit.delegate=\"addUser()\"><div class=\"greyBox\"><input name=\"username\" placeholder=\"Username\" value.bind=\"userData.username\"></div><div class=\"greyBox\"><input type=\"password\" name=\"password\" placeholder=\"Password\" value.bind=\"userData.password\"></div><div class=\"greyBox\"><input name=\"e_mail\" placeholder=\"E-mail\" value.bind=\"userData.e_mail\"></div><div class=\"greyBox\" style=\"float:right\"><input type=\"submit\" value=\"Register user\"></div></form></div></div><br><br><div style=\"font-size:10px\"><i>Log-in instructions etc ..</i></div></div></div></div></template>"; });
define('text!selectEquivalent/selectEquivalent.html', ['module'], function(module) { module.exports = "<template><div class=\"body\"><div class=\"main\"><div class=\"content\"><div class=\"greyBox BackToGames\"><input type=\"button\" value=\"Back to games\" style=\"color:#f5f5f5;font-family:'Open Sans',sans-serif\" onclick='window.location.href=\"http://localhost:9000/#/games\"'></div><div class=\"gameHeader\"><h2>Choose the topic:</h2></div><div class=\"gameArea\"><div class=\"picture\"></div><div class=\"answerLeft\"><a href=\"http://localhost:9000/#/selectEquivalent1\" style=\"text-decoration:none\"><div class=\"blueBox choice\">${h1}</div></a><a href=\"http://localhost:9000/#/selectEquivalent2\" style=\"text-decoration:none\"><div class=\"blueBox choice\">${h2}</div></a><a href=\"http://localhost:9000/#/selectEquivalent3\" style=\"text-decoration:none\"><div class=\"blueBox choice\">${h3}</div></a><a href=\"http://localhost:9000/#/selectEquivalent4\" style=\"text-decoration:none\"><div class=\"blueBox choice\">${h4}</div></a></div><div class=\"answerRight\"><a href=\"http://localhost:9000/#/selectEquivalent5\" style=\"text-decoration:none\"><div class=\"blueBox choice\">${h5}</div></a><a href=\"http://localhost:9000/#/selectEquivalent6\" style=\"text-decoration:none\"><div class=\"blueBox choice\">${h6}</div></a><a href=\"http://localhost:9000/#/selectEquivalent7\" style=\"text-decoration:none\"><div class=\"blueBox choice\">${h7}</div></a></div></div></div></div></div></template>"; });
define('text!selectEquivalent1/selectEquivalent1.html', ['module'], function(module) { module.exports = "<template><div class=\"body\"><div class=\"main\"><div class=\"content\"><div class=\"greyBox BackToGames\"><input type=\"button\" value=\"Back to selection\" style=\"color:#f5f5f5;font-family:'Open Sans',sans-serif\" onclick='window.location.href=\"http://localhost:9000/#/selectEquivalent\"'></div><div class=\"gameHeader\"><h2>Select the right Estonian equivalent!</h2></div><div class=\"gameArea\"><div><img src=\"src/images/Apple.png\" alt=\"Apple\" style=\"width:100px;height:50\"></div><h3 style=\"color:green\" if.bind=\"isTrue\">CORRECT</h3><h3 style=\"color:red\" if.bind=\"isFalse\">FALSE</h3><div class=\"answerLeft\"><div id=\"click\" class=\"blueBox choice\" click.delegate=\"Right()\">Õun</div><div class=\"blueBox choice\" click.delegate=\"NotRight()\">Banaan</div><div class=\"blueBox choice\" click.delegate=\"NotRight()\">Sibul</div><div class=\"blueBox choice\" click.delegate=\"NotRight()\">Kaalikas</div></div><div class=\"answerRight\"><div class=\"blueBox choice\" click.delegate=\"NotRight()\">Pirn</div><div class=\"blueBox choice\" click.delegate=\"NotRight()\">Apelsin</div><div class=\"blueBox choice\" click.delegate=\"NotRight()\">Sidrun</div><div class=\"blueBox choice\" click.delegate=\"NotRight()\">Peet</div></div></div><div class=\"greyBox nextGame\" if.bind=\"gameCompleted\"><input type=\"button\" value=\"To the next guess\" style=\"color:#f5f5f5;font-family:'Open Sans',sans-serif\" onclick='window.location.href=\"http://localhost:9000/#/selectEquivalent2\"'></div></div></div></div></template>"; });
define('text!selectEquivalent2/selectEquivalent2.html', ['module'], function(module) { module.exports = "<template><div class=\"main\"><div class=\"content\"><div class=\"greyBox BackToGames\"><input type=\"button\" value=\"Back to selection\" style=\"color:#f5f5f5;font-family:'Open Sans',sans-serif\" onclick='window.location.href=\"http://localhost:9000/#/selectEquivalent\"'></div><div class=\"gameHeader\"><h2>Select the right Estonian equivalent!</h2></div><div class=\"gameArea\"><div><img src=\"src/images/chair.png\" alt=\"Chair\" style=\"width:100px;height:50\"></div><h3 style=\"color:green\" if.bind=\"isTrue\">CORRECT</h3><h3 style=\"color:red\" if.bind=\"isFalse\">FALSE</h3><div class=\"answerLeft\"><div class=\"blueBox choice\" click.delegate=\"NotRight()\">Nuga</div><div class=\"blueBox choice\" click.delegate=\"NotRight()\">Laud</div><div class=\"blueBox choice\" click.delegate=\"Right()\">Tool</div><div class=\"blueBox choice\" click.delegate=\"NotRight()\">Kruus</div></div><div class=\"answerRight\"><div class=\"blueBox choice\" click.delegate=\"NotRight()\">Kartul</div><div class=\"blueBox choice\" click.delegate=\"NotRight()\">Lusikas</div><div class=\"blueBox choice\" click.delegate=\"NotRight()\">Kahvel</div><div class=\"blueBox choice\" click.delegate=\"NotRight()\">Taldrik</div></div></div><div class=\"greyBox nextGame\" if.bind=\"gameCompleted\"><input type=\"button\" value=\"To the next guess\" style=\"color:#f5f5f5;font-family:'Open Sans',sans-serif\" onclick='window.location.href=\"http://localhost:9000/#/selectEquivalent3\"'></div></div></div></template>"; });
define('text!selectEquivalent3/selectEquivalent3.html', ['module'], function(module) { module.exports = "<template><div class=\"main\"><div class=\"content\"><div class=\"greyBox BackToGames\"><input type=\"button\" value=\"Back to selection\" style=\"color:#f5f5f5;font-family:'Open Sans',sans-serif\" onclick='window.location.href=\"http://localhost:9000/#/selectEquivalent\"'></div><div class=\"gameHeader\"><h2>Select the right Estonian equivalent!</h2></div><div class=\"gameArea\"><div><img src=\"src/images/bicycle.png\" alt=\"Bicycle\" style=\"width:100px;height:50\"></div><h3 style=\"color:green\" if.bind=\"isTrue\">CORRECT</h3><h3 style=\"color:red\" if.bind=\"isFalse\">FALSE</h3><div class=\"answerLeft\"><div class=\"blueBox choice\" click.delegate=\"NotRight()\">Traktor</div><div class=\"blueBox choice\" click.delegate=\"NotRight()\">Auto</div><div class=\"blueBox choice\" click.delegate=\"NotRight()\">Kelk</div><div class=\"blueBox choice\" click.delegate=\"NotRight()\">Kart</div></div><div class=\"answerRight\"><div class=\"blueBox choice\" click.delegate=\"NotRight()\">Buss</div><div class=\"blueBox choice\" click.delegate=\"NotRight()\">Veoauto</div><div class=\"blueBox choice\" click.delegate=\"NotRight()\">Vanker</div><div class=\"blueBox choice\" click.delegate=\"Right()\">Jalgratas</div></div></div><div class=\"greyBox nextGame\" if.bind=\"gameCompleted\"><input type=\"button\" value=\"To the next guess\" style=\"color:#f5f5f5;font-family:'Open Sans',sans-serif\" onclick='window.location.href=\"http://localhost:9000/#/selectEquivalent4\"'></div></div></div></template>"; });
define('text!selectEquivalent4/selectEquivalent4.html', ['module'], function(module) { module.exports = "<template><div class=\"main\"><div class=\"content\"><div class=\"greyBox BackToGames\"><input type=\"button\" value=\"Back to selection\" style=\"color:#f5f5f5;font-family:'Open Sans',sans-serif\" onclick='window.location.href=\"http://localhost:9000/#/selectEquivalent\"'></div><div class=\"gameHeader\"><h2>Select the right Estonian equivalent!</h2></div><div class=\"gameArea\"><div><img src=\"src/images/potato.png\" alt=\"Potato\" style=\"width:100px;height:50\"></div><h3 style=\"color:green\" if.bind=\"isTrue\">CORRECT</h3><h3 style=\"color:red\" if.bind=\"isFalse\">FALSE</h3><div class=\"answerLeft\"><div class=\"blueBox choice\" click.delegate=\"NotRight()\">Lusikas</div><div class=\"blueBox choice\" click.delegate=\"NotRight()\">Maasikas</div><div class=\"blueBox choice\" click.delegate=\"NotRight()\">Arvuti</div><div class=\"blueBox choice\" click.delegate=\"NotRight()\">Vaarikas</div></div><div class=\"answerRight\"><div class=\"blueBox choice\" click.delegate=\"Right()\">Kartul</div><div class=\"blueBox choice\" click.delegate=\"NotRight()\">Püksid</div><div class=\"blueBox choice\" click.delegate=\"NotRight()\">Rihm</div><div class=\"blueBox choice\" click.delegate=\"NotRight()\">Kell</div></div></div><div class=\"greyBox nextGame\" if.bind=\"gameCompleted\"><input type=\"button\" value=\"To the next guess\" style=\"color:#f5f5f5;font-family:'Open Sans',sans-serif\" onclick='window.location.href=\"http://localhost:9000/#/selectEquivalent5\"'></div></div></div></template>"; });
define('text!selectEquivalent5/selectEquivalent5.html', ['module'], function(module) { module.exports = "<template><div class=\"main\"><div class=\"content\"><div class=\"greyBox BackToGames\"><input type=\"button\" value=\"Back to selection\" style=\"color:#f5f5f5;font-family:'Open Sans',sans-serif\" onclick='window.location.href=\"http://localhost:9000/#/selectEquivalent\"'></div><div class=\"gameHeader\"><h2>Select the right Estonian equivalent!</h2></div><div class=\"gameArea\"><div><img src=\"src/images/strawberry.png\" alt=\"Strawberry\" style=\"width:100px;height:50\"></div><h3 style=\"color:green\" if.bind=\"isTrue\">CORRECT</h3><h3 style=\"color:red\" if.bind=\"isFalse\">FALSE</h3><div class=\"answerLeft\"><div class=\"blueBox choice\" click.delegate=\"NotRight()\">Vaarikas</div><div class=\"blueBox choice\" click.delegate=\"NotRight()\">Tikker</div><div class=\"blueBox choice\" click.delegate=\"NotRight()\">Kirss</div><div class=\"blueBox choice\" click.delegate=\"NotRight()\">Banaan</div></div><div class=\"answerRight\"><div class=\"blueBox choice\" click.delegate=\"NotRight()\">Kurk</div><div class=\"blueBox choice\" click.delegate=\"NotRight()\">Ploom</div><div class=\"blueBox choice\" click.delegate=\"Right()\">Maasikas</div><div class=\"blueBox choice\" click.delegate=\"NotRight()\">Rosmariin</div></div></div><div class=\"greyBox nextGame\" if.bind=\"gameCompleted\"><input type=\"button\" value=\"To the next guess\" style=\"color:#f5f5f5;font-family:'Open Sans',sans-serif\" onclick='window.location.href=\"http://localhost:9000/#/selectEquivalent6\"'></div></div></div></template>"; });
define('text!selectEquivalent6/selectEquivalent6.html', ['module'], function(module) { module.exports = "<template><div class=\"main\"><div class=\"content\"><div class=\"greyBox BackToGames\"><input type=\"button\" value=\"Back to selection\" style=\"color:#f5f5f5;font-family:'Open Sans',sans-serif\" onclick='window.location.href=\"http://localhost:9000/#/selectEquivalent\"'></div><div class=\"gameHeader\"><h2>Select the right Estonian equivalent!</h2></div><div class=\"gameArea\"><div><img src=\"src/images/clock.png\" alt=\"Clock\" style=\"width:100px;height:50\"></div><h3 style=\"color:green\" if.bind=\"isTrue\">CORRECT</h3><h3 style=\"color:red\" if.bind=\"isFalse\">FALSE</h3><div class=\"answerLeft\"><div class=\"blueBox choice\" click.delegate=\"NotRight()\">Kahvel</div><div class=\"blueBox choice\" click.delegate=\"Right()\">Kell</div><div class=\"blueBox choice\" click.delegate=\"NotRight()\">Särk</div><div class=\"blueBox choice\" click.delegate=\"NotRight()\">Pilt</div></div><div class=\"answerRight\"><div class=\"blueBox choice\" click.delegate=\"NotRight()\">Päike</div><div class=\"blueBox choice\" click.delegate=\"NotRight()\">Rebane</div><div class=\"blueBox choice\" click.delegate=\"NotRight()\">Sidrun</div><div class=\"blueBox choice\" click.delegate=\"NotRight()\">Kirss</div></div></div><div class=\"greyBox nextGame\" if.bind=\"gameCompleted\"><input type=\"button\" value=\"To the next guess\" style=\"color:#f5f5f5;font-family:'Open Sans',sans-serif\" onclick='window.location.href=\"http://localhost:9000/#/selectEquivalent7\"'></div></div></div></template>"; });
define('text!selectEquivalent7/selectEquivalent7.html', ['module'], function(module) { module.exports = "<template><div class=\"main\"><div class=\"content\"><div class=\"greyBox BackToGames\"><input type=\"button\" value=\"Back to selection\" style=\"color:#f5f5f5;font-family:'Open Sans',sans-serif\" onclick='window.location.href=\"http://localhost:9000/#/selectEquivalent\"'></div><div class=\"gameHeader\"><h2>Select the right Estonian equivalent!</h2></div><div class=\"gameArea\"><div><img src=\"src/images/fork.png\" alt=\"Fork\" style=\"width:100px;height:50\"></div><h3 style=\"color:green\" if.bind=\"isTrue\">CORRECT</h3><h3 style=\"color:red\" if.bind=\"isFalse\">FALSE</h3><div class=\"answerLeft\"><div class=\"blueBox choice\" click.delegate=\"NotRight()\">Lusikas</div><div class=\"blueBox choice\" click.delegate=\"NotRight()\">Taldrik</div><div class=\"blueBox choice\" click.delegate=\"NotRight()\">Kauss</div><div class=\"blueBox choice\" click.delegate=\"Right()\">Kahvel</div></div><div class=\"answerRight\"><div class=\"blueBox choice\" click.delegate=\"NotRight()\">Nuga</div><div class=\"blueBox choice\" click.delegate=\"NotRight()\">Padi</div><div class=\"blueBox choice\" click.delegate=\"NotRight()\">Külmkapp</div><div class=\"blueBox choice\" click.delegate=\"NotRight()\">Röster</div></div></div></div></div></template>"; });
define('text!typeEquivalent/typeEquivalent.html', ['module'], function(module) { module.exports = "<template><div class=\"body\"><div class=\"main\"><div class=\"content\"><div class=\"greyBox BackToGames\"><input type=\"button\" value=\"Back to games\" style=\"color:#f5f5f5;font-family:'Open Sans',sans-serif\" onclick='window.location.href=\"http://localhost:9000/#/games\"'></div><div class=\"gameHeader\"><h2>Choose the topic:</h2></div><div class=\"gameArea\"><div class=\"picture\"></div><div class=\"answerLeft\"><a href=\"http://localhost:9000/#/colours\" style=\"text-decoration:none\"><div class=\"blueBox choice\">${h1}</div></a><a href=\"http://localhost:9000/#/numbers\" style=\"text-decoration:none\"><div class=\"blueBox choice\">${h2}</div></a><a href=\"http://localhost:9000/#/days\" style=\"text-decoration:none\"><div class=\"blueBox choice\">${h3}</div></a></div><div class=\"answerRight\"><a href=\"http://localhost:9000/#/months\" style=\"text-decoration:none\"><div class=\"blueBox choice\">${h4}</div></a><a href=\"http://localhost:9000/#/human\" style=\"text-decoration:none\"><div class=\"blueBox choice\">${h5}</div></a><a href=\"http://localhost:9000/#/kitchen\" style=\"text-decoration:none\"><div class=\"blueBox choice\">${h6}</div></a></div></div></div></div></div></template>"; });
//# sourceMappingURL=app-bundle.js.map