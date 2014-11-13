// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.
angular.module('MTApp').controller('ModalInstanceCtrl', function ($scope, $modalInstance) {
 $scope.ok = function () {
   $modalInstance.dismiss('cancel');
 };
});