
var db = {
    food: {
        1: {
            id: 1,
            name: 'Bear Burger',
            price: 6.00
        },
        2: {
            id: 2,
            name: 'Chicken Salad',
            price: 5.00
        }
    }
};


module.exports = (function food() {  
      return function (req, res, next) {
          if (req.url.match(/^\/food\/(\d+)/)) {
            var id = RegExp.$1;
            console.log("Food Id: " + id);
            var foodItem = db.food[id];
            if (foodItem) {
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify(foodItem));
            } else {
              var err = new Error('Food not found');
              err.notFound = true;
              next(err);
            }
          } else {
            next();
      }    
    }
})();