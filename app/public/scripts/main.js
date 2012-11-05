requirejs.config({
   shim: 'lib/jquery/jquery': {
       exports: 'jquery'
   }
});

require(['api/api'], 
function (    api) {
    console.log(api.url);
});