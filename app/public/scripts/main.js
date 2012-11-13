requirejs.config({
    shim: {
        'lib/jquery/jquery' : {
            exports: 'jquery'   
        }
    }
});

requirejs(['api/food'], 
function (foodModule) {
    console.log("Executing Food Module");
    
    foodModule.loadFood();
});