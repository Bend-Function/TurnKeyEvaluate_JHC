// ==UserScript==
// @name        _Amazon-like store, auto select 50 items per page
// @include     https://dl.dropboxusercontent.com/u/5546881/*
// @grant       GM_addStyle

// @match        https://xk.jhc.cn/*
// @grant        none
// ==/UserScript==
/*- The @grant directive is needed to work around a design change
    introduced in GM 1.0.   It restores the sandbox.
*/

(function() {
    'use strict';

    // Your code here...
$(document).ready(function() {
$('body').prepend('<input type="一键好评" value="button" id="button">');
$("#button").on("click", function(){
  Object.keys(values).forEach(function(key){
    $("#" + key).val(values[key]);
  });
});
});

var values = {
'DataGrid1_JS1_0': '优秀',
'DataGrid1_JS2_0': '优秀',
'DataGrid1_js3_0': '优秀',
'DataGrid1_js4_0': '优秀',
'DataGrid1_js5_0': '优秀',
'DataGrid1_JS1_1': '优秀',
'DataGrid1_JS2_1': '优秀',
'DataGrid1_js3_1': '优秀',
'DataGrid1_js4_1': '优秀',
'DataGrid1_js5_1': '优秀',
'DataGrid1_JS1_2': '优秀',
'DataGrid1_JS2_2': '优秀',
'DataGrid1_js3_2': '优秀',
'DataGrid1_js4_2': '优秀',
'DataGrid1_js5_2': '优秀',
'DataGrid1_JS1_3': '优秀',
'DataGrid1_JS2_3': '优秀',
'DataGrid1_js3_3': '优秀',
'DataGrid1_js4_3': '优秀',
'DataGrid1_js5_3': '优秀',
'DataGrid1_JS1_4': '优秀',
'DataGrid1_JS2_4': '优秀',
'DataGrid1_js3_4': '优秀',
'DataGrid1_js4_4': '优秀',
'DataGrid1_js5_4': '优秀',
'DataGrid1_JS1_5': '优秀',
'DataGrid1_JS2_5': '优秀',
'DataGrid1_js3_5': '优秀',
'DataGrid1_js4_5': '优秀',
'DataGrid1_js5_5': '优秀',
'DataGrid1_JS1_6': '优秀',
'DataGrid1_JS2_6': '优秀',
'DataGrid1_js3_6': '优秀',
'DataGrid1_js4_6': '优秀',
'DataGrid1_js5_6': '优秀',
'DataGrid1_JS1_7': '优秀',
'DataGrid1_JS2_7': '优秀',
'DataGrid1_js3_7': '优秀',
'DataGrid1_js4_7': '优秀',
'DataGrid1_js5_7': '优秀',
'DataGrid1_JS1_8': '优秀',
'DataGrid1_JS2_8': '优秀',
'DataGrid1_js3_8': '优秀',
'DataGrid1_js4_8': '优秀',
'DataGrid1_js5_8': '优秀',
'DataGrid1_JS1_9': '优秀',
'DataGrid1_JS2_9': '优秀',
'DataGrid1_js3_9': '优秀',
'DataGrid1_js4_9': '优秀',
'DataGrid1_js5_9': '优秀'
};
})();
