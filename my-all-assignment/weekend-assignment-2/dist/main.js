/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_addbook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/addbook */ \"./src/utils/addbook.js\");\n\r\n\r\nclass bookManager {\r\n\r\n    addBook() {\r\n        document.getElementById(\"addbook\").addEventListener(\"click\", _utils_addbook__WEBPACK_IMPORTED_MODULE_0__.saveBook);\r\n    }   \r\n\r\n    getAllBooks() {\r\n        (0,_utils_addbook__WEBPACK_IMPORTED_MODULE_0__.getBooks)();\r\n    }\r\n\r\n    removeBook() {\r\n        (0,_utils_addbook__WEBPACK_IMPORTED_MODULE_0__.bokDelete)();\r\n     }\r\n\r\n}\r\n\r\nlet book = new bookManager();\r\nbook.addBook();\r\nbook.getAllBooks();\r\nbook.removeBook();\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://weekend-assignment-2/./src/app.js?");

/***/ }),

/***/ "./src/utils/addbook.js":
/*!******************************!*\
  !*** ./src/utils/addbook.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bokDelete\": () => (/* binding */ bokDelete),\n/* harmony export */   \"bokInDetail\": () => (/* binding */ bokInDetail),\n/* harmony export */   \"getBooks\": () => (/* binding */ getBooks),\n/* harmony export */   \"saveBook\": () => (/* binding */ saveBook)\n/* harmony export */ });\nif (!localStorage.getItem('bookDetails')) {\r\n    localStorage.setItem('bookDetails', JSON.stringify([]));\r\n}\r\n\r\nfunction saveBook() {\r\n    let getTitle = document.getElementById('title');\r\n    let getAuthor = document.getElementById('author');\r\n    let getPrice = document.getElementById('price');\r\n    let getRating = document.getElementById('rating');\r\n    let getIsbn = document.getElementById('isbn');\r\n    let getCoverPhoto = document.getElementById('coverphoto');\r\n    let getDesc = document.getElementById('description');\r\n\r\n    let title = getTitle.value;\r\n    let author = getAuthor.value;\r\n    let price = getPrice.value;\r\n    let rating = getRating.value;\r\n    let isbn = getIsbn.value;\r\n    let coverphoto = getCoverPhoto.value;\r\n    let description = getDesc.value;\r\n\r\n    let bookLocal = localStorage.getItem('bookDetails')\r\n\r\n    let bokDetail = JSON.parse(bookLocal);\r\n    bokDetail.push({ 'title': title, 'author': author, 'price': price, 'rating': rating, 'isbn': isbn, 'coverphoto': coverphoto, 'description': description });\r\n\r\n    localStorage.setItem('bookDetails', JSON.stringify(bokDetail));\r\n}\r\n\r\n\r\n\r\nlet bokDetail = JSON.parse(localStorage.getItem('bookDetails'));\r\nfunction getBooks() {\r\n    bokDetail.map(book => {\r\n        var tr = document.createElement('tr');\r\n\r\n        var td0 = document.createElement('td');\r\n        var td1 = document.createElement('td');\r\n        var td2 = document.createElement('td');\r\n        var td3 = document.createElement('td');\r\n        var td4 = document.createElement('td');\r\n\r\n        let bookTitle = JSON.stringify(book.title);\r\n\r\n        td0.innerHTML = '';\r\n        td1.innerHTML = book.title;\r\n        td2.innerHTML = book.author;\r\n        td3.innerHTML = `<a href=\"book_detail.html\"><input style=\"background:red;border: 1px solid red; cursor: pointer; width:50%; color:white; border-radius: 2px;\" type=\"button\" name=${book.author} id=${bookTitle} value=\"Details\" onclick=\"bokInDetail(this);\"></a>`\r\n        td4.innerHTML = `<input style=\"background:green; width:50%;color:white; border: 1px solid red; cursor: pointer;  border-radius: 2px;\"type=\"button\" id=${bookTitle} value=\"Delete\" onclick=\"bokDelete(this);\">`\r\n\r\n        tr.appendChild(td0);\r\n        tr.appendChild(td1);\r\n        tr.appendChild(td2);\r\n        tr.appendChild(td3);\r\n        tr.appendChild(td4);\r\n\r\n        document.getElementById(\"booktable\").appendChild(tr);\r\n    })\r\n}\r\n\r\nfunction bokDelete(book) {\r\n    let books = JSON.parse(localStorage.getItem('bookDetails'));\r\n\r\n    var s = book.parentNode.parentNode;\r\n    s.parentNode.removeChild(s);\r\n    let getTitle = book.id;\r\n    let delBook = books.filter(bok => bok.title != getTitle);\r\n    localStorage.setItem('bookDetails', JSON.stringify(delBook));\r\n}\r\n\r\nfunction bokInDetail(book) {\r\n    let getTitle = book.id;\r\n    let getBook = bokDetail.filter(bok => bok.title == getTitle);\r\n    localStorage.setItem('getBook', JSON.stringify(getBook));\r\n}\n\n//# sourceURL=webpack://weekend-assignment-2/./src/utils/addbook.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;