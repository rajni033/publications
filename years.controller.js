/**
 * Created by Soumya on 6/10/2017.
 */
(function () {
    'use strict';

    angular.module('PublicationApp')
        .controller('YearsController', YearsController);

    YearsController.$inject = ['$scope','PublicationDataService'];
    function YearsController($scope,PublicationDataService) {
        $scope.acases = [
            {value:"2017"},
            {value:"2016"},
            {value:"2015"},
            {value:"2014"},
            {value:"2013"},
            {value:"2012"},
            {value:"2011"},
            {value:"2010"},
            {value:"2009"},
            {value:"2008"},
            {value:"2007"},
            {value:"2006"},
            {value:"2005"},
            {value:"2004"},
            {value:"2003"},
            {value:"2002"},
            {value:"2001"},
            {value:"2000"},
            {value:"1999"},
            {value:"1998"},
            {value:"1997"},
            {value:"1996"},
            {value:"1995"},
            {value:"1994"},
            {value:"1993"},
            {value:"1992"},
            {value:"1991"},
            {value:"1990"},
            {value:"1989"},
            {value:"1988"}
        ];
        $scope.selected = $scope.acases[0];
        PublicationDataService.setYear($scope.selected.value);
        $scope.setYear = function(newValue) {
            PublicationDataService.setYear(newValue.value);
            // console.log(PublicationDataService.getYear());
        };
    }

})();
