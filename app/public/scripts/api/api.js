define(['lib/jquery/jquery'],
function (jqueryLocal) {
   var exports = {};
       
    exports.url = "/api/";
    
    var DefaultConfig = function (objectType) {
        return {
            method: 'GET',
            dataType: 'json',
            cache: true,
            url: exports.url + objectType,
            success: [],
        };
    };
    
    exports.list = function (objectType, success) {
        var config = new DefaultConfig(objectType);
        config.success.push(success);
        $.ajax(config);
    };
       
    return exports;
});