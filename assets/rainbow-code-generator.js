"use strict";

define('rainbow-code-generator/app', ['exports', 'rainbow-code-generator/resolver', 'ember-load-initializers', 'rainbow-code-generator/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('rainbow-code-generator/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('rainbow-code-generator/controllers/index', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    test: "yea",
    randomColor: Ember.computed({
      get: function get() {
        var colors = this.get('model').colors;
        var random = Math.floor(Math.random() * (colors.length + 1));
        return colors[random];
      }
    })
  });
});
define('rainbow-code-generator/helpers/app-version', ['exports', 'rainbow-code-generator/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  var version = _environment.default.APP.version;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (hash.hideSha) {
      return version.match(_regexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_regexp.shaRegExp)[0];
    }

    return version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('rainbow-code-generator/helpers/capitalize-first', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.capitalizeFirst = capitalizeFirst;

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  function capitalizeFirst(_ref) /*, hash*/{
    var _ref2 = _slicedToArray(_ref, 1),
        word = _ref2[0];

    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  exports.default = Ember.Helper.helper(capitalizeFirst);
});
define('rainbow-code-generator/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('rainbow-code-generator/helpers/randomize', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.randomize = randomize;

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  function randomize(_ref) /*, hash*/{
    var _ref2 = _slicedToArray(_ref, 1),
        array = _ref2[0];

    var random = Math.floor(Math.random() * array.length);
    var value = array[random];
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  exports.default = Ember.Helper.helper(randomize);
});
define('rainbow-code-generator/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('rainbow-code-generator/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'rainbow-code-generator/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var name = void 0,
      version = void 0;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('rainbow-code-generator/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('rainbow-code-generator/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('rainbow-code-generator/initializers/export-application-global', ['exports', 'rainbow-code-generator/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define("rainbow-code-generator/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('rainbow-code-generator/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('rainbow-code-generator/router', ['exports', 'rainbow-code-generator/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {});

  exports.default = Router;
});
define("rainbow-code-generator/routes/index", ["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        model: function model() {
            return {
                colors: ["amethyst", "aquamarine", "beige", "black", "blue", "brown", "burgundy", "chartreuse", "cerulean", "cobalt", "copper", "crimson", "cyan", "emerald", "fuchsia", "gold", "grey", "green", "indigo", "jade", "lime", "lemon", "magenta", "mint", "olive", "orange", "peach", "periwinle", "pink", "plum", "purple", "red", "rose", "ruby", "scarlet", "sapphire", "teal", "turquoise", "violet", "white", "yellow"],
                nouns: ["almond", "anchor", "angel", "anvil", "apple", "apricot", "archer", "arrow", "aster", "badger", "bamboo", "banana", "banner", "barley", "beard", "bishop", "blossom", "boar", "bottle", "boy", "bracket", "brick", "bunny", "cabbage", "carnation", "carpet", "cashew", "cat", "cheeks", "cheese", "circle", "club", "cocktail", "corkscrew", "crop", "dandelion", "danube", "dean", "devil", "devils", "diamond", "diver", "dolphin", "drover", "duck", "duckling", "duster", "envoy", "eric", "eye", "fire", "flag", "flannel", "flash", "flax", "fox", "friend", "garland", "garlic", "garter", "gate", "ginger", "girl", "goddess", "granite", "grass", "hammer", "hammock", "harvest", "hawk", "heathen", "hebe", "herald", "Jack", "jacket", "janet", "jay", "joker", "knigh", "lagoon", "lemon", "light", "lizard", "mace", "maria", "meat", "minnow", "mist", "moon", "neck", "nell", "oak", "orchid", "palm", "parrot", "passion", "peacan", "peacock", "picture", "pippin", "poodle", "porridge", "possum", "prince", "putter", "queen", "ranger", "rapier", "reaper", "riband", "river", "robin", "rock", "rose", "rosette", "saga", "salad", "sand", "sapphire", "satin", "sea", "setter", "shadow", "shield", "shoes", "shrimp", "silk", "sky", "slab", "slug", "snow", "sparkler", "star", "steel", "steer", "stone", "streak", "study", "sugar", "sun", "tartan", "temple", "thistle", "ticket", "tiger", "toffee", "top", "tulip", "veil", "vesta", "vision", "vixen", "walnut", "warrior", "water", "william", "willow", "wizard", "yeoman"]
            };
        }
    });
});
define('rainbow-code-generator/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define("rainbow-code-generator/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "cGq0ABNY", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[6,\"h1\"],[9,\"style\",\"text-align:center\"],[7],[0,\"Rainbow Code Generator\"],[8],[0,\"\\n\"],[1,[18,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "rainbow-code-generator/templates/application.hbs" } });
});
define("rainbow-code-generator/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "VB6RQZiw", "block": "{\"symbols\":[],\"statements\":[[6,\"h2\"],[9,\"style\",\"text-align: center\"],[7],[0,\" \"],[1,[25,\"randomize\",[[20,[\"model\",\"colors\"]]],null],false],[0,\" \"],[1,[25,\"randomize\",[[20,[\"model\",\"nouns\"]]],null],false],[0,\" \"],[8],[0,\"\\n\"],[6,\"h2\"],[9,\"style\",\"text-align: center\"],[7],[0,\" \"],[1,[25,\"randomize\",[[20,[\"model\",\"colors\"]]],null],false],[0,\" \"],[1,[25,\"randomize\",[[20,[\"model\",\"nouns\"]]],null],false],[0,\" \"],[8],[0,\"\\n\"],[6,\"h2\"],[9,\"style\",\"text-align: center\"],[7],[0,\" \"],[1,[25,\"randomize\",[[20,[\"model\",\"colors\"]]],null],false],[0,\" \"],[1,[25,\"randomize\",[[20,[\"model\",\"nouns\"]]],null],false],[0,\" \"],[8],[0,\"\\n\"],[6,\"h2\"],[9,\"style\",\"text-align: center\"],[7],[0,\" \"],[1,[25,\"randomize\",[[20,[\"model\",\"colors\"]]],null],false],[0,\" \"],[1,[25,\"randomize\",[[20,[\"model\",\"nouns\"]]],null],false],[0,\" \"],[8],[0,\"\\n\"],[6,\"h2\"],[9,\"style\",\"text-align: center\"],[7],[0,\" \"],[1,[25,\"randomize\",[[20,[\"model\",\"colors\"]]],null],false],[0,\" \"],[1,[25,\"randomize\",[[20,[\"model\",\"nouns\"]]],null],false],[0,\" \"],[8],[0,\"\\n\"],[6,\"h2\"],[9,\"style\",\"text-align: center\"],[7],[0,\" \"],[1,[25,\"randomize\",[[20,[\"model\",\"colors\"]]],null],false],[0,\" \"],[1,[25,\"randomize\",[[20,[\"model\",\"nouns\"]]],null],false],[0,\" \"],[8],[0,\"\\n\"],[6,\"h2\"],[9,\"style\",\"text-align: center\"],[7],[0,\" \"],[1,[25,\"randomize\",[[20,[\"model\",\"colors\"]]],null],false],[0,\" \"],[1,[25,\"randomize\",[[20,[\"model\",\"nouns\"]]],null],false],[0,\" \"],[8],[0,\"\\n\"],[1,[18,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "rainbow-code-generator/templates/index.hbs" } });
});

define('rainbow-code-generator/config/environment', [], function() {
  var prefix = 'rainbow-code-generator';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("rainbow-code-generator/app")["default"].create({"name":"rainbow-code-generator","version":"0.0.0+34d3b130"});
}
//# sourceMappingURL=rainbow-code-generator.map
