(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tagSunburst\r\n{\r\n     display:inline-block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0tBRUsscUJBQXFCO0NBQ3pCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFnU3VuYnVyc3Rcclxue1xyXG4gICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<sunburstchart [textSize] = \"0.3\" [showTags] = \"true\" [parameters]='{\"legend\": \"Current Weight: \",\r\n\"roots\" : [{\"tag\":\"example1\",\"weight\":25,\"childs\":[{\"tag\":\"example2\",\"weight\":10},{\"tag\":\"example3\",\"weight\":15}]},{\"tag\":\"example4\",\"weight\":25,\"childs\":[{\"tag\":\"example5\",\"weight\":5},{\"tag\":\"example6\",\"weight\":15}]},{\"tag\":\"example7\",\"weight\":25,\"childs\":[{\"tag\":\"example8\",\"weight\":15},{\"tag\":\"example9\",\"weight\":10}]},{\"tag\":\"example10\",\"weight\":45,\"childs\":[{\"tag\":\"example11\",\"weight\":25,\"childs\":[{\"tag\":\"example12\",\"weight\":15},{\"tag\":\"example13\",\"weight\":10}]}]}]}' [height]=\"800\" [width]=\"800\"></sunburstchart>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'otroproject';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _sunburstchart_sunburstchart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sunburstchart/sunburstchart.component */ "./src/app/sunburstchart/sunburstchart.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _sunburstchart_sunburstchart_component__WEBPACK_IMPORTED_MODULE_3__["SunburstchartComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/sunburstchart/main.ts":
/*!***************************************!*\
  !*** ./src/app/sunburstchart/main.ts ***!
  \***************************************/
/*! exports provided: SunburstChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SunburstChart", function() { return SunburstChart; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/app/sunburstchart/utils.ts");

var utils = new _utils__WEBPACK_IMPORTED_MODULE_0__["Utils"]();
var SunburstChart = /** @class */ (function () {
    function SunburstChart() {
        this.parameters = null;
        this.canvas = null;
        this.context = null;
        this.maxSize = 0;
        this.baseRadius = 0;
        this.drawRadius = 0;
        this.textRadius = 0;
        this.mouseX = 0;
        this.mouseY = 0;
        this.mouseAngle = 0;
        this.mousemove = false;
        this.currentWeight = 0;
        this.totalWeight = 0;
        this.maxLevel = 0;
        this.distanceToCenter = 0;
        this.mouseCentered = true;
        this.tagsHovered = [];
        this.tags = null;
        this.initialized = false;
        this.displayDataOnCanvas = function (canvas, parameters, showTag, textSize) {
            if (parameters) {
                this.showTag = showTag;
                this.textSize = textSize || 0;
                this.parameters = parameters;
                this.canvas = canvas;
                this.context = canvas.getContext('2d');
                if (showTag) {
                    this.tags = document.getElementById("tagDisplay");
                    for (var i = 0; i < this.parameters.roots.length; i++) {
                        this.maxLevel = Math.max(this.maxLevel, this.findMaxLevel(this.parameters.roots[i], 0));
                    }
                    for (var i = 0; i < this.maxLevel; i++) {
                        var tagDiv = document.createElement('div');
                        tagDiv.className = 'tagSunburst';
                        tagDiv.style.display = 'inline-block';
                        this.tags.appendChild(tagDiv);
                    }
                    this.initialized = true;
                }
                this.draw();
            }
            ;
        };
        this.recursiveDraw = function (node, startPoint, endPoint, radius) {
            this.context.beginPath();
            this.context.fillStyle = node.color;
            if (!this.mouseCentered) {
                if (this.mouseMove) {
                    this.context.globalAlpha = 0.45;
                }
                var innerRadius = radius - this.elementRadius / 2;
                //If hovering
                if ((this.mouseAngle >= 2 * Math.PI * startPoint && this.mouseAngle <= 2 * Math.PI * endPoint
                    && this.distanceToCenter > innerRadius)) {
                    this.tagsHovered.push(node);
                    this.context.globalAlpha = 1;
                    this.currentWeight = node.weight;
                }
            }
            //Draws
            this.context.arc(this.canvas.width / 2, this.canvas.height / 2, radius - this.elementRadius / 2, 2 * Math.PI * startPoint, 2 * Math.PI * endPoint);
            this.context.arc(this.canvas.width / 2, this.canvas.height / 2, radius + this.elementRadius / 2, 2 * Math.PI * endPoint, 2 * Math.PI * startPoint, true);
            this.context.fill();
            //Recursion on childs
            if (node.childs) {
                var colorShades = utils.getShadesFromColor(node.childs.length, node.color);
                var totalWeight = node.weight;
                for (var i = 0; i < node.childs.length; i++) {
                    node.childs[i].color = colorShades[i];
                }
                var newEndPoint = startPoint;
                var newStartPoint = startPoint;
                for (var i = 0; i < node.childs.length; i++) {
                    newEndPoint += (endPoint - startPoint) * (node.childs[i].weight / totalWeight);
                    this.recursiveDraw(node.childs[i], newStartPoint, newEndPoint, radius + this.elementRadius);
                    newStartPoint = newEndPoint;
                }
            }
        };
        this.findMaxLevel = function (node, level) {
            var levels = level + 1;
            if (node.childs) {
                for (var i = 0; i < node.childs.length; i++) {
                    level = Math.max(level, this.findMaxLevel(node.childs[i], levels));
                }
                return level;
            }
            return levels;
        };
        this.checkMousePosition = function (event) {
            this.weightPercentage = (this.currentWeight * 100 / this.totalWeight).toFixed(2) + "%";
            var rect = this.canvas.getBoundingClientRect();
            this.mouseX = event.clientX - rect.left;
            this.mouseY = event.clientY - rect.top;
            this.distanceToCenter = utils.dist(this.mouseX, this.mouseY, this.canvas.height / 2, this.canvas.width / 2);
            this.mouseCentered = this.distanceToCenter < utils.dist(this.canvas.width / 2, this.canvas.height / 2, this.canvas.width / 2 + (this.baseRadius - this.elementRadius / 2), this.canvas.height / 2);
            this.mouseAngle = Math.atan2(this.mouseY - this.canvas.height / 2, this.mouseX - this.canvas.width / 2);
            if (this.mouseAngle < 0) {
                this.mouseAngle += 2 * Math.PI;
            }
            this.mouseMove = true;
            this.draw();
        };
        this.draw = function () {
            if (this.tags) {
                for (var i = 0; i < this.tags.children.length; i++) {
                    this.tags.children[i].style.display = 'none';
                }
            }
            this.currentWeight = 0;
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.tagsHovered = [];
            this.maxLevel = 0;
            this.totalWeight = 0;
            var colorWheel = utils.getColorWheelSet(this.parameters.roots.length, null);
            for (var i = 0; i < this.parameters.roots.length; i++) {
                this.totalWeight += this.parameters.roots[i].weight;
                this.parameters.roots[i].color = colorWheel[i];
                this.maxLevel = Math.max(this.maxLevel, this.findMaxLevel(this.parameters.roots[i], 0));
            }
            this.currentWeight = this.totalWeight;
            this.maxSize = Math.min(this.canvas.width / 2, this.canvas.height / 2);
            if (this.showTag) {
                this.maxSize -= 100;
            }
            this.textRadius = this.maxSize * this.textSize;
            this.drawRadius = this.maxSize - this.textRadius;
            this.elementRadius = this.drawRadius / this.maxLevel;
            this.baseRadius = this.textRadius + this.elementRadius / 2;
            var startPoint = 0;
            var endPoint = 0;
            for (var i = 0; i < this.parameters.roots.length; i++) {
                endPoint += this.parameters.roots[i].weight / this.totalWeight;
                this.recursiveDraw(this.parameters.roots[i], startPoint, endPoint, this.baseRadius);
                startPoint = endPoint;
            }
            this.weightPercentage = (this.currentWeight * 100 / this.totalWeight).toFixed(2) + "%";
            if (this.showTag) {
                this.showTags();
            }
        };
        this.showTags = function () {
            this.context.globalAlpha = 1;
            for (var i = 0; i < this.tagsHovered.length; i++) {
                this.tags.children[i].style.display = 'inline-block';
                this.tags.children[i].style.backgroundColor = this.tagsHovered[i].color;
                this.tags.children[i].innerHTML = this.tagsHovered[i].tag;
                this.tags.children[i].style.color = '#ffffff';
            }
        };
    }
    return SunburstChart;
}());

;


/***/ }),

/***/ "./src/app/sunburstchart/sunburstchart.component.css":
/*!***********************************************************!*\
  !*** ./src/app/sunburstchart/sunburstchart.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#mainsunburst{\r\n    position: relative;\r\n}\r\n.outer-div\r\n{\r\n     display: table;\r\n     position: absolute;\r\n     height: 100%;\r\n     width: 100%;\r\n}\r\n.mid-div\r\n{\r\n     display: table-cell;\r\n     vertical-align: middle;\r\n}\r\n#text-div\r\n{\r\n     text-align: center;\r\n     margin: 0 auto;\r\n     width: 150px;\r\n     height: 50px;\r\n}\r\n#canvas-div\r\n{\r\n     margin: 0 auto;\r\n     width: 800px;\r\n     height: 800px;\r\n}\r\n#tagDisplay\r\n{\r\n     display:inline-block;\r\n     z-index:0;\r\n}\r\n.tagSunburst\r\n{\r\n     display:inline-block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VuYnVyc3RjaGFydC9zdW5idXJzdGNoYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7Q0FDdEI7QUFDRDs7S0FFSyxlQUFlO0tBQ2YsbUJBQW1CO0tBQ25CLGFBQWE7S0FDYixZQUFZO0NBQ2hCO0FBQ0Q7O0tBRUssb0JBQW9CO0tBQ3BCLHVCQUF1QjtDQUMzQjtBQUNEOztLQUVLLG1CQUFtQjtLQUNuQixlQUFlO0tBQ2YsYUFBYTtLQUNiLGFBQWE7Q0FDakI7QUFDRDs7S0FFSyxlQUFlO0tBQ2YsYUFBYTtLQUNiLGNBQWM7Q0FDbEI7QUFFRDs7S0FFSyxxQkFBcUI7S0FDckIsVUFBVTtDQUNkO0FBRUQ7O0tBRUsscUJBQXFCO0NBQ3pCIiwiZmlsZSI6InNyYy9hcHAvc3VuYnVyc3RjaGFydC9zdW5idXJzdGNoYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFpbnN1bmJ1cnN0e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5vdXRlci1kaXZcclxue1xyXG4gICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLm1pZC1kaXZcclxue1xyXG4gICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG4jdGV4dC1kaXZcclxue1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcbiNjYW52YXMtZGl2XHJcbntcclxuICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICB3aWR0aDogODAwcHg7XHJcbiAgICAgaGVpZ2h0OiA4MDBweDtcclxufVxyXG5cclxuI3RhZ0Rpc3BsYXlcclxue1xyXG4gICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgIHotaW5kZXg6MDtcclxufVxyXG5cclxuLnRhZ1N1bmJ1cnN0XHJcbntcclxuICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/sunburstchart/sunburstchart.component.html":
/*!************************************************************!*\
  !*** ./src/app/sunburstchart/sunburstchart.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id='tagDisplay'></div>\r\n<div id='mainsunburst'>\r\n    <div class=\"outer-div\">\r\n        <div class=\"mid-div\">\r\n            <div id=\"text-div\">\r\n                <span class='sunburst-legend'>{{sunburstChart.parameters.legend}}</span><span class='sunburst-percentage'>{{sunburstChart.weightPercentage}}</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"mid-div\">\r\n        <div id=\"canvas-div\">\r\n            <canvas id=\"dataCanvas\" height=\"{{height}}\" width=\"{{width}}\"></canvas>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/sunburstchart/sunburstchart.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/sunburstchart/sunburstchart.component.ts ***!
  \**********************************************************/
/*! exports provided: SunburstchartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SunburstchartComponent", function() { return SunburstchartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main */ "./src/app/sunburstchart/main.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SunburstchartComponent = /** @class */ (function () {
    function SunburstchartComponent() {
    }
    SunburstchartComponent.prototype.ngOnInit = function () {
        this.sunburstChart = new _main__WEBPACK_IMPORTED_MODULE_1__["SunburstChart"]();
        var component = this;
        var param = this.parameters;
        this.sunburstChart.parameters = param;
        var showTags = this.showTags;
        var textSize = this.textSize;
        window.onload = function () {
            component.sunburstChart.displayDataOnCanvas(document.getElementById("dataCanvas"), param, showTags, textSize);
            document.getElementById("mainsunburst").style.width = (component.width + "px");
            document.getElementById("mainsunburst").style.height = (component.height + "px");
            document.getElementById("canvas-div").style.width = (component.width + "px");
            document.getElementById("canvas-div").style.height = (component.height + "px");
            document.getElementById("text-div").style.width = component.sunburstChart.textRadius * 2 + "px";
            document.getElementById("text-div").style.height = component.sunburstChart.textRadius / 2 + "px";
            console.log(component.sunburstChart.textRadius);
        };
        document.getElementById("mainsunburst").onmousemove = function (event) {
            component.sunburstChart.checkMousePosition(event);
        };
        document.getElementById("mainsunburst").onmouseout = function () {
            component.sunburstChart = new _main__WEBPACK_IMPORTED_MODULE_1__["SunburstChart"]();
            component.sunburstChart.displayDataOnCanvas(document.getElementById("dataCanvas"), param, showTags, textSize);
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SunburstchartComponent.prototype, "parameters", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], SunburstchartComponent.prototype, "width", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], SunburstchartComponent.prototype, "height", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SunburstchartComponent.prototype, "showTags", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], SunburstchartComponent.prototype, "textSize", void 0);
    SunburstchartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sunburstchart',
            template: __webpack_require__(/*! ./sunburstchart.component.html */ "./src/app/sunburstchart/sunburstchart.component.html"),
            styles: [__webpack_require__(/*! ./sunburstchart.component.css */ "./src/app/sunburstchart/sunburstchart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SunburstchartComponent);
    return SunburstchartComponent;
}());



/***/ }),

/***/ "./src/app/sunburstchart/utils.ts":
/*!****************************************!*\
  !*** ./src/app/sunburstchart/utils.ts ***!
  \****************************************/
/*! exports provided: Utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });
var Utils = /** @class */ (function () {
    function Utils() {
    }
    /* DISTANCE FUNCTIONS*/
    Utils.prototype.distSqr = function (x1, y1, x2, y2) {
        return this.sqr(x1 - x2) + this.sqr(y1 - y2);
    };
    Utils.prototype.dist = function (x1, y1, x2, y2) {
        return Math.sqrt(this.distSqr(x1, y1, x2, y2));
    };
    Utils.prototype.sqr = function (x) {
        return x * x;
    };
    /* MATH FUNCTIONS */
    Utils.prototype.clamp = function (value, min, max) {
        return Math.max(Math.min(value, max), min);
    };
    /* STRING FUNCTIONS */
    Utils.prototype.pad = function (str, padValue, before, toLength) {
        var i;
        var returnStr = str;
        for (i = str.length; i < toLength; i++) {
            if (before) {
                returnStr = padValue + returnStr;
            }
            else {
                returnStr = returnStr + padValue;
            }
        }
        return returnStr;
    };
    /* COLOR FUNCTIONS */
    Utils.prototype.hightlightColor = function (color) {
        var f = parseInt(color.slice(1), 16), R = f >> 16, G = f >> 8 & 0x00FF, B = f & 0x0000FF;
        var hsv = this.RGBtoHSV(R, G, B);
        if (hsv.v < 0.5) {
            hsv.v += 0.4;
        }
        else {
            hsv.v -= 0.4;
        }
        var rgb = this.HSVtoRGB(hsv.h, hsv.s, hsv.v);
        R = rgb.r;
        G = rgb.g;
        B = rgb.b;
        /*
        if (R > 200 || G > 200 || B > 200){
            // Make color darker
            ret = "#" + pad(Math.round((clamp((R * 0.8),0,255) << 16) + (clamp(G * 0.8, 0, 255) << 8) + clamp(B * 0.8,0,255)).toString(16), "0", true, 6) ;
        }else{
            // Make color brighter
            ret = "#" + pad(Math.round((clamp(((R + 20) * 1.2),0,255) << 16) + (clamp(((G + 20) * 1.2),0,255) << 8) + clamp(((B + 20) * 1.2),0,255)).toString(16), "0", true, 6);
        }*/
        var ret = this.rgbToHexString(R, G, B);
        return ret;
        //return "#"+(0x1000000 + (Math.round((t-R)*p)+R) * 0x10000 + (Math.round((t-G)*p)+G) * 0x100 + (Math.round((t-B)*p)+B)).toString(16).slice(1);
    };
    Utils.prototype.rgbToHexString = function (R, G, B) {
        return "#" + this.pad(Math.round((this.clamp(R, 0, 255) << 16) + (this.clamp(G, 0, 255) << 8) + this.clamp(B, 0, 255)).toString(16), "0", true, 6);
    };
    // returns N different colors, evenly spaced in the color wheel
    Utils.prototype.getColorWheelSet = function (n, randomStart) {
        var colors = [];
        var h = randomStart ? Math.random() : 0;
        var s = 0.63;
        var v = 0.82;
        var separation = 1 / n;
        for (var i = 0; i < n; i++) {
            h += separation;
            if (h > 1) {
                h -= 1;
            }
            var rgbColor = this.HSVtoRGB(h, s, v);
            colors.push(this.rgbToHexString(rgbColor.r, rgbColor.g, rgbColor.b));
        }
        return colors;
    };
    // returns N different colors, shades of a root color
    Utils.prototype.getShadesFromColor = function (n, rootColor) {
        var colorRGB = this.hexToRgb(rootColor);
        var color = this.RGBtoHSV(colorRGB.r, colorRGB.g, colorRGB.b);
        var colors = [];
        var h = color.h;
        var s = color.s;
        var v = color.v;
        var separation = s / (2 * n);
        for (var i = 0; i < n; i++) {
            s -= separation;
            if (s < 0) {
                s = 0;
            }
            var rgbColor = this.HSVtoRGB(h, s, v);
            colors.push(this.rgbToHexString(rgbColor.r, rgbColor.g, rgbColor.b));
        }
        return colors;
    };
    Utils.prototype.hexToRGBA = function (hex, alpha) {
        var c;
        alpha = alpha == undefined ? 1 : alpha;
        if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
            c = hex.substring(1).split('');
            if (c.length == 3) {
                c = [c[0], c[0], c[1], c[1], c[2], c[2]];
            }
            c = '0x' + c.join('');
            return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',' + alpha + ')';
        }
        return '';
    };
    Utils.prototype.RGBtoHSV = function (r, g, b) {
        if (arguments.length === 1) {
            g = r.g, b = r.b, r = r.r;
        }
        var max = Math.max(r, g, b), min = Math.min(r, g, b), d = max - min, h, s = (max === 0 ? 0 : d / max), v = max / 255;
        switch (max) {
            case min:
                h = 0;
                break;
            case r:
                h = (g - b) + d * (g < b ? 6 : 0);
                h /= 6 * d;
                break;
            case g:
                h = (b - r) + d * 2;
                h /= 6 * d;
                break;
            case b:
                h = (r - g) + d * 4;
                h /= 6 * d;
                break;
        }
        return {
            h: h,
            s: s,
            v: v
        };
    };
    Utils.prototype.HSVtoRGB = function (h, s, v) {
        var r, g, b, i, f, p, q, t;
        if (arguments.length === 1) {
            s = h.s, v = h.v, h = h.h;
        }
        i = Math.floor(h * 6);
        f = h * 6 - i;
        p = v * (1 - s);
        q = v * (1 - f * s);
        t = v * (1 - (1 - f) * s);
        switch (i % 6) {
            case 0:
                r = v, g = t, b = p;
                break;
            case 1:
                r = q, g = v, b = p;
                break;
            case 2:
                r = p, g = v, b = t;
                break;
            case 3:
                r = p, g = q, b = v;
                break;
            case 4:
                r = t, g = p, b = v;
                break;
            case 5:
                r = v, g = p, b = q;
                break;
        }
        return {
            r: Math.round(r * 255),
            g: Math.round(g * 255),
            b: Math.round(b * 255)
        };
    };
    Utils.prototype.fromComponentsToHexString = function (r, g, b) {
        var transitionColorR = this.pad(r.toString(16), "0", true, 2);
        var transitionColorG = this.pad(g.toString(16), "0", true, 2);
        var transitionColorB = this.pad(b.toString(16), "0", true, 2);
        return "#" + transitionColorR + transitionColorG + transitionColorB;
    };
    Utils.prototype.colorTransition = function (startColor, endColor, weight) {
        var f = parseInt(startColor.slice(1), 16);
        var startR = f >> 16;
        var startG = f >> 8 & 0x00FF;
        var startB = f & 0x0000FF;
        f = parseInt(endColor.slice(1), 16);
        var endR = f >> 16;
        var endB = f & 0x0000FF;
        var endG = f >> 8 & 0x00FF;
        return this.fromComponentsToHexString(Math.round(this.clamp((startR + (endR - startR) * weight), 0, 255)), Math.round(this.clamp((startG + (endG - startG) * weight), 0, 255)), Math.round(this.clamp((startB + (endB - startB) * weight), 0, 255)));
    };
    Utils.prototype.componentToHex = function (c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    };
    Utils.prototype.rgbToHex = function (r, g, b) {
        return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
    };
    Utils.prototype.hexToRgb = function (hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    };
    return Utils;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\emili\OneDrive\Escritorio\RandomIT\master\sunburst\angular\sunburstchart\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map