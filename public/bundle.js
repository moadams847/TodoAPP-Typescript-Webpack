(()=>{"use strict";var __webpack_modules__={835:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  "p": () => (/* binding */ list)\n});\n\n;// CONCATENATED MODULE: ./src/ui.ts\nclass UI {\r\n    constructor(list) {\r\n        this.list = list;\r\n    }\r\n    render(todo) {\r\n        let html;\r\n        html = `\r\n    <li class="list-group-item d-flex justify-content-between align-items-center">\r\n      <span>${todo}</span>\r\n      <i class="far fa-trash-alt delete"></i>\r\n    </li>\r\n\r\n  `;\r\n        this.list.innerHTML += html;\r\n    }\r\n}\r\n\n;// CONCATENATED MODULE: ./src/filter.ts\n\r\nconst filterTodos = (term) => {\r\n    // add filtered class\r\n    Array.from(list.children)\r\n        .filter((todo) => !todo.textContent.toLowerCase().includes(term))\r\n        .forEach((todo) => todo.classList.add("filtered"));\r\n    // remove filtered class\r\n    Array.from(list.children)\r\n        .filter((todo) => todo.textContent.toLowerCase().includes(term))\r\n        .forEach((todo) => todo.classList.remove("filtered"));\r\n};\r\n\n;// CONCATENATED MODULE: ./src/app.ts\n// imports ------------------------------------------------------------------------------------\r\n\r\n\r\n// Dom queries---------------------------------------------------------------------------------\r\nconst addForm = document.querySelector(".add");\r\nconst search = document.querySelector(".search input");\r\nconst list = document.querySelector(".todos");\r\n// dom events--------------------------------------------------------------------------------------\r\n// add todos event\r\nconst ui = new UI(list);\r\naddForm.addEventListener("submit", (e) => {\r\n    e.preventDefault();\r\n    const todo = addForm.add.value.trim();\r\n    if (todo.length) {\r\n        ui.render(todo);\r\n        addForm.reset();\r\n    }\r\n});\r\n// delete todos event\r\nlist.addEventListener("click", (e) => {\r\n    const target = e.target;\r\n    if (target.classList.contains("delete")) {\r\n        target.parentElement.remove();\r\n    }\r\n});\r\n// filter todos event\r\nsearch.addEventListener("keyup", () => {\r\n    const term = search.value.trim().toLowerCase();\r\n    filterTodos(term);\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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InNvdXJjZXMiOlsid2VicGFjazovL3RvZG9hcHAvLi9zcmMvdWkudHM/ZmQ3YSIsIndlYnBhY2s6Ly90b2RvYXBwLy4vc3JjL2ZpbHRlci50cz8wMmRiIiwid2VicGFjazovL3RvZG9hcHAvLi9zcmMvYXBwLnRzPzA2NmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGFzUmVuZGVyIH0gZnJvbSBcIi4vbWV0aG9kXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVUkgaW1wbGVtZW50cyBIYXNSZW5kZXIge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbGlzdDogSFRNTFVMaXN0RWxlbWVudCkge31cclxuICByZW5kZXIodG9kbzogc3RyaW5nIHwgbnVtYmVyKTogdm9pZCB7XHJcbiAgICBsZXQgaHRtbDtcclxuICAgIGh0bWwgPSBgXHJcbiAgICA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICA8c3Bhbj4ke3RvZG99PC9zcGFuPlxyXG4gICAgICA8aSBjbGFzcz1cImZhciBmYS10cmFzaC1hbHQgZGVsZXRlXCI+PC9pPlxyXG4gICAgPC9saT5cclxuXHJcbiAgYDtcclxuICAgIHRoaXMubGlzdC5pbm5lckhUTUwgKz0gaHRtbDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgbGlzdCB9IGZyb20gXCIuL2FwcFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZpbHRlclRvZG9zID0gKHRlcm06IHN0cmluZyk6IHZvaWQgPT4ge1xyXG4gIC8vIGFkZCBmaWx0ZXJlZCBjbGFzc1xyXG4gIEFycmF5LmZyb20obGlzdC5jaGlsZHJlbilcclxuXHJcbiAgICAuZmlsdGVyKCh0b2RvKSA9PiAhdG9kby50ZXh0Q29udGVudCEudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0ZXJtKSlcclxuICAgIC5mb3JFYWNoKCh0b2RvKSA9PiB0b2RvLmNsYXNzTGlzdC5hZGQoXCJmaWx0ZXJlZFwiKSk7XHJcblxyXG4gIC8vIHJlbW92ZSBmaWx0ZXJlZCBjbGFzc1xyXG4gIEFycmF5LmZyb20obGlzdC5jaGlsZHJlbilcclxuICAgIC5maWx0ZXIoKHRvZG8pID0+IHRvZG8udGV4dENvbnRlbnQhLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGVybSkpXHJcbiAgICAuZm9yRWFjaCgodG9kbykgPT4gdG9kby5jbGFzc0xpc3QucmVtb3ZlKFwiZmlsdGVyZWRcIikpO1xyXG59O1xyXG4iLCIvLyBpbXBvcnRzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5pbXBvcnQgeyBVSSB9IGZyb20gXCIuL3VpXCI7XHJcbmltcG9ydCB7IGZpbHRlclRvZG9zIH0gZnJvbSBcIi4vZmlsdGVyXCI7XHJcblxyXG4vLyBEb20gcXVlcmllcy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5jb25zdCBhZGRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRcIikhIGFzIEhUTUxGb3JtRWxlbWVudDtcclxuY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2ggaW5wdXRcIikhIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbmV4cG9ydCBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2Rvc1wiKSEgYXMgSFRNTFVMaXN0RWxlbWVudDtcclxuXHJcbi8vIGRvbSBldmVudHMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8gYWRkIHRvZG9zIGV2ZW50XHJcbmNvbnN0IHVpID0gbmV3IFVJKGxpc3QpO1xyXG5hZGRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGU6IEV2ZW50KSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICBjb25zdCB0b2RvID0gYWRkRm9ybS5hZGQudmFsdWUhLnRyaW0oKTtcclxuICBpZiAodG9kby5sZW5ndGgpIHtcclxuICAgIHVpLnJlbmRlcih0b2RvKTtcclxuICAgIGFkZEZvcm0ucmVzZXQoKTtcclxuICB9XHJcbn0pO1xyXG5cclxuLy8gZGVsZXRlIHRvZG9zIGV2ZW50XHJcbmxpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlOiBFdmVudCkgPT4ge1xyXG4gIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxVTGlzdEVsZW1lbnQ7XHJcbiAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJkZWxldGVcIikpIHtcclxuICAgIHRhcmdldC5wYXJlbnRFbGVtZW50IS5yZW1vdmUoKTtcclxuICB9XHJcbn0pO1xyXG5cclxuLy8gZmlsdGVyIHRvZG9zIGV2ZW50XHJcbnNlYXJjaC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKCkgPT4ge1xyXG4gIGNvbnN0IHRlcm0gPSBzZWFyY2gudmFsdWUudHJpbSgpLnRvTG93ZXJDYXNlKCk7XHJcbiAgZmlsdGVyVG9kb3ModGVybSk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///835\n')}},__webpack_require__={d:(Q,F)=>{for(var U in F)__webpack_require__.o(F,U)&&!__webpack_require__.o(Q,U)&&Object.defineProperty(Q,U,{enumerable:!0,get:F[U]})},o:(Q,F)=>Object.prototype.hasOwnProperty.call(Q,F)},__webpack_exports__={};__webpack_modules__[835](0,__webpack_exports__,__webpack_require__)})();