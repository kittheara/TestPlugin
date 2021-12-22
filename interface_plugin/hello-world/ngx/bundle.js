'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var HelloWorld = /** @class */ (function (_super) {
    tslib.__extends(HelloWorld, _super);
    function HelloWorld() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HelloWorld.prototype.show = function (arg) { return core.cordova(this, "show", {}, arguments); };
    HelloWorld.pluginName = "HelloWorld";
    HelloWorld.plugin = "cordova-plugin-hello-world";
    HelloWorld.pluginRef = "HelloWorld";
    HelloWorld.repo = "";
    HelloWorld.install = "";
    HelloWorld.installVariables = [];
    HelloWorld.platforms = ["Android", "iOS"];
    HelloWorld.decorators = [
        { type: core$1.Injectable }
    ];
    return HelloWorld;
}(core.AwesomeCordovaNativePlugin));

exports.HelloWorld = HelloWorld;
