let ace = window.ace;
ace.define(
  "ace/theme/dark",
  ["require", "exports", "module", "ace/lib/dom"],
  function (require, exports, module) {
    exports.isDark = false;
    exports.cssClass = "ace-dark";
    exports.cssText =
      '\
    .ace-dark .ace_gutter {\
    background: #292a2c;\
    color: #AAA;\
    }\
    .ace-dark  {\
    background: #323336;;\
    color: #fff;\
    }\
    .ace-dark .ace_keyword {\
    color: #F92672;\
    }\
    .ace-dark .ace_identifier {\
    color: #fff;\
    }\
    .ace-dark .ace_type {\
    color: #66D9EF;\
    }\
    .ace-dark .ace_string {\
    color: #E6DB74;\
    }\
    .ace-dark .ace_keyword.ace_operator{\
    color: #D14;\
    }\
    .ace-dark .ace_variable.ace_class {\
    color: #66D9EF;\
    }\
    .ace-dark .ace_constant.ace_numeric {\
    color: #AE81FF;\
    }\
    .ace-dark .ace_constant.ace_buildin {\
    color: #0086B3;\
    }\
    .ace-dark .ace_support.ace_function {\
    color: #66D9EF;\
    }\
    .ace-dark .ace_comment {\
    color: green;\
    font-style: italic;\
    }\
    .ace-dark .ace_variable.ace_language  {\
    color: #A6E22E;\
    }\
    .ace-dark .ace_paren {\
    font-weight: normal;\
    }\
    .ace-dark .ace_boolean {\
    font-weight: bold;\
    }\
    .ace-dark .ace_string.ace_regexp {\
    color: #009926;\
    font-weight: normal;\
    }\
    .ace-dark .ace_variable.ace_instance {\
    color: teal;\
    }\
    .ace-dark .ace_constant.ace_language {\
    font-weight: bold;\
    }\
    .ace-dark .ace_cursor {\
    color: #fff;\
    }\
    .ace-dark.ace_focus .ace_marker-layer .ace_active-line {\
    background: #2a2b2e;\
    }\
    .ace-dark .ace_marker-layer .ace_active-line {\
    background: #2a2b2e;\
    }\
    .ace-dark .ace_marker-layer .ace_selection {\
    background:#494d52;\
    }\
    .ace-dark.ace_multiselect .ace_selection.ace_start {\
    box-shadow: 0 0 3px 0px white;\
    }\
    .ace-dark.ace_nobold .ace_line > span {\
    font-weight: normal !important;\
    }\
    .ace-dark .ace_marker-layer .ace_step {\
    background:  rgb(102, 82, 0);\
    }\
    .ace-dark .ace_marker-layer .ace_stack {\
    background: rgb(164, 229, 101);\
    }\
    .ace-dark .ace_marker-layer .ace_bracket {\
    margin: -1px 0 0 -1px;\
    border: 1px solid rgb(192, 192, 192);\
    }\
    .ace-dark .ace_gutter-active-line {\
    background-color : rgba(0, 78, 155, 0.07);\
    }\
    .ace-dark .ace_marker-layer .ace_selected-word {\
    background: rgb(250, 250, 255);\
    border: 1px solid #49483E;\
    }\
    .ace-dark .ace_invisible {\
    color: #BFBFBF\
    }\
    .ace-dark .ace_print-margin {\
    width: 1px;\
    background: #e8e8e8;\
    }\
    .ace-dark .ace_indent-guide {\
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;\
    }';

    var dom = require("../lib/dom");
    dom.importCssString(exports.cssText, exports.cssClass);
  }
);
(function () {
  ace.require(["ace/theme/light"], function (m) {
    if (typeof module == "object" && typeof exports == "object" && module) {
      module.exports = m;
    }
  });
})();
