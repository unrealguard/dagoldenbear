define(['jquery'],
function ($) {
   var exports = {};
       
    exports.url = window.location.host + "/api/";
    
    var DefaultConfig = function (objectType) {
        return {
            method: 'GET',
            dataType: 'json',
            cache: false,
            url: exports.url + objectType,
            success: [],
        };
    };
    
    exports.list = function (objectType, success) {
        var config = new DefaultConfig(objectType);
        config.success.push(success);
        $.ajax(config);
    };
    
    console.log('Jquery: ' + $.jquery());
       
    return exports;
});