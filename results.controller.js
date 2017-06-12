/**
 * Created by Soumya on 6/10/2017.
 */
(function () {
    'use strict';

    angular.module('PublicationApp')
        .controller('ResultsController', ResultsController);

    ResultsController.$inject = ['items','PublicationDataService','$scope'];
    function ResultsController(contents,PublicationDataService,$scope) {
        var content = this;
        // console.log("this",content,"scope this", $scope.contents);
        $scope.year = PublicationDataService;
        $scope.contents = contents;
        // $scope.$watch('PublicationDataService.year');
        $scope.$watch('year.getYear()',function (newVal) {
            console.log("result year",newVal);
            // console.log("contents", $scope.contents);
             content.contents = $scope.year.getAllPublications();
        }, true);
    }
})();