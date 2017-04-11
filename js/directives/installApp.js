/**
 * Created by karthik on 11/4/17.
 */
app.directive("installApp", function(){
  return {
    restrict: 'E',
    scope: {},
    link: function(scope,attrs,element) {
      	scope.buttonText = "Install";
  			scope.installed = false;
        scope.download = function(){
        element.toggleClass('btn-active');
        if(scope.installed) {
          scope.buttonText = "Install";
          scope.installed = false;
        } else {
          scope.buttonText = "Uninstall";
          scope.installed = true;
    		}
      };
    },
    templateURL: 'js/directives/installApp.html'
  };
});