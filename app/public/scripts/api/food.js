define(['api/api'], 
function (api) {
    var exports = {};
    
    exports.loadFood = function () {
        api.list('food', function (data) {
            console.log("Got Food Data");
            
            for(var i = 1; i <= 2; i++)
            {
            var item1 = data.food[i];
            $('#food').append("<tr><td>" + item1.id + "</td><td>" + item1.name + "</td><td>" + item1.price + "</td></tr>");
            }
        });
    };
    
    return exports;
});