(function() {
'use script';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.inject = ['$scope'];
function LunchCheckController($scope) {
    $scope.message = "";
    $scope.itemString = "";

    $scope.check = function() {
        var itemArray = $scope.itemString.split(",");
        var itemCount = itemArray.length;
        if ($scope.itemString.length == 0) {
            $scope.message = "Please enter data first";
        } else if (itemCount <= 3) {
            $scope.message = "Enjoy!";
        } else {
            $scope.message = "Too much!";
        }
    };
}

})();
