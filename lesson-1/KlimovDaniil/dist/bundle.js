/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const lesson_1 = __webpack_require__(1);
const task_1 = __webpack_require__(3);
const task_2 = __webpack_require__(4);
const task_3 = __webpack_require__(5);
const task_4 = __webpack_require__(6);
const lesson = new lesson_1.NgLesson({
    lessonName: 'Lesson 1: TypeScript',
    lessonTasks: [{
            taskName: 'isInArray',
            taskResult: new task_2.TaskTypeScriptIsInArray()
        }, {
            taskName: 'summator',
            taskResult: new task_1.TaskTypeScriptSummator()
        }, {
            taskName: 'getUnique',
            taskResult: new task_3.TaskTypeScriptGetUnique()
        }, {
            taskName: 'toMatrix',
            taskResult: new task_4.TaskTypeScriptToMatrix()
        }]
});


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ngLesson_1 = __webpack_require__(2);
class NgLesson extends ngLesson_1.NGLesson {
    constructor(lessonContent) {
        super(lessonContent);
        this.lessonContent = lessonContent;
    }
}
exports.NgLesson = NgLesson;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class NGLesson {
    constructor(lessonContent) {
        this.lessonContent = lessonContent;
        this.lessonName = 'Undefined lesson';
        this.tasks = [];
        this.body = document.querySelector('body');
        this.lessonName = lessonContent.lessonName;
        this.tasks = lessonContent.lessonTasks;
        this.build();
    }
    build() {
        this.wrapperHeader();
        this.tasks.forEach((task, index) => {
            this.wrapperSection(task, index);
        });
    }
    wrapperHeader() {
        const header = document.createElement('h1');
        header.innerText = this.lessonName;
        if (this.body)
            this.body.appendChild(header);
    }
    wrapperSection(task, index) {
        task.taskResult = (task.taskResult !== undefined) ? task.taskResult.getResult() : 'Not Found';
        const section = document.createElement('section');
        section.innerHTML = '<section>' +
            '<h2> Task #' + index + ': ' + task.taskName + '</h2>' +
            '<div>Task Result:  ' + task.taskResult + '</div>' +
            '<hr></section>';
        if (this.body)
            this.body.appendChild(section);
    }
}
exports.NGLesson = NGLesson;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class TaskTypeScriptSummator {
    constructor() {
        this.taskResult = summator(1, '2', 3, 'lol', '4', 5);
    }
    getResult() {
        return this.taskResult;
    }
}
exports.TaskTypeScriptSummator = TaskTypeScriptSummator;
function toNumber(str) {
    return (!isNaN(parseInt(str))) ? parseInt(str) : 0;
}
function summator(...args) {
    return args.reduce((sum, current) => {
        return sum + ((typeof current === 'string') ? toNumber(current) : current);
    }, 0);
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class TaskTypeScriptIsInArray {
    constructor() {
        this.taskResult = isInArray([1, 4, 7, 9, 12, 20], 2, 4, 4, 7, 9, 14, 19, 20, 25);
        // this.taskResult = isInArray([1, 4, 7, 9, 12, 20], 1, 9, 12, 20);
    }
    getResult() {
        return this.taskResult;
    }
}
exports.TaskTypeScriptIsInArray = TaskTypeScriptIsInArray;
function isInArray(arr, ...args) {
    return args.every((item) => {
        return arr.includes(item);
    });
}
console.log(isInArray([1, 4, 7, 9, 12, 20], 2, 4, 4, 7, 9, 14, 19, 20, 25));
console.log(isInArray([1, 4, 7, 9, 12, 20], 1, 9, 12, 20));


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class TaskTypeScriptGetUnique {
    constructor() {
        this.taskResult = getUnique(1, 3, 3, 5, 6, 8, 9, 9, 10);
    }
    getResult() {
        return this.taskResult;
    }
}
exports.TaskTypeScriptGetUnique = TaskTypeScriptGetUnique;
function getUnique(...arr) {
    return [...new Set(arr)];
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class TaskTypeScriptToMatrix {
    constructor() {
        this.taskResult = toMatrix([1, 3, 3, 5, 6, 8, 9, 9, 10], 5);
    }
    getResult() {
        return this.taskResult;
    }
}
exports.TaskTypeScriptToMatrix = TaskTypeScriptToMatrix;
function toMatrix(arr, sizeOfSubArrays) {
    const martix = [];
    for (let i = 0; i < sizeOfSubArrays; i++)
        martix[i] = arr.slice(0, sizeOfSubArrays);
    return martix;
}


/***/ })
/******/ ]);