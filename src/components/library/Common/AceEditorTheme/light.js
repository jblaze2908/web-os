let ace = window.ace;
ace.define(
  "ace/theme/light",
  ["require", "exports", "module", "ace/lib/dom"],
  function (require, exports, module) {
    exports.isDark = false;
    exports.cssClass = "ace-light";
    exports.cssText =
      '\
    .ace-light .ace_gutter {\
    background: #ccd6e0;\
    color: #AAA;\
    }\
    .ace-light  {\
    background: #fff;\
    color: #000;\
    }\
    .ace-light .ace_keyword {\
    color: #1784dd;\
    }\
    .ace-light .ace_identifier {\
    color: #000;\
    }\
    .ace-light .ace_type {\
    color: #1784dd;\
    }\
    .ace-light .ace_string {\
    color: #D14;\
    }\
    .ace-light .ace_keyword.ace_operator{\
    color: #D14;\
    }\
    .ace-light .ace_variable.ace_class {\
    color: teal;\
    }\
    .ace-light .ace_constant.ace_numeric {\
    color: #099;\
    }\
    .ace-light .ace_constant.ace_buildin {\
    color: #0086B3;\
    }\
    .ace-light .ace_support.ace_function {\
    color: #0086B3;\
    }\
    .ace-light .ace_comment {\
    color: green;\
    font-style: italic;\
    }\
    .ace-light .ace_variable.ace_language  {\
    color: #0086B3;\
    }\
    .ace-light .ace_paren {\
    font-weight: normal;\
    }\
    .ace-light .ace_boolean {\
    font-weight: bold;\
    }\
    .ace-light .ace_string.ace_regexp {\
    color: #009926;\
    font-weight: normal;\
    }\
    .ace-light .ace_variable.ace_instance {\
    color: teal;\
    }\
    .ace-light .ace_constant.ace_language {\
    font-weight: bold;\
    }\
    .ace-light .ace_cursor {\
    color: black;\
    }\
    .ace-light.ace_focus .ace_marker-layer .ace_active-line {\
    background: #ddebf9;\
    }\
    .ace-light .ace_marker-layer .ace_active-line {\
    background: rgb(245, 245, 245);\
    }\
    .ace-light .ace_marker-layer .ace_selection {\
    background: rgb(181, 213, 255);\
    }\
    .ace-light.ace_multiselect .ace_selection.ace_start {\
    box-shadow: 0 0 3px 0px white;\
    }\
    .ace-light.ace_nobold .ace_line > span {\
    font-weight: normal !important;\
    }\
    .ace-light .ace_marker-layer .ace_step {\
    background: rgb(252, 255, 0);\
    }\
    .ace-light .ace_marker-layer .ace_stack {\
    background: rgb(164, 229, 101);\
    }\
    .ace-light .ace_marker-layer .ace_bracket {\
    margin: -1px 0 0 -1px;\
    border: 1px solid rgb(192, 192, 192);\
    }\
    .ace-light .ace_gutter-active-line {\
    background-color : rgba(0, 78, 155, 0.07);\
    }\
    .ace-light .ace_marker-layer .ace_selected-word {\
    background: rgb(250, 250, 255);\
    border: 1px solid rgb(200, 200, 250);\
    }\
    .ace-light .ace_invisible {\
    color: #BFBFBF\
    }\
    .ace-light .ace_print-margin {\
    width: 1px;\
    background: #e8e8e8;\
    }\
    .ace-light .ace_indent-guide {\
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
