/**
 * Created by Soumya on 6/10/2017.
 */
(function () {
    'use strict'

    angular.module('data')
        .service('PublicationDataService',PublicationDataService )
        .constant('ApiBasePath','http://www-scf.usc.edu/~kumarira/webapp/');

    PublicationDataService.$inject = ['$http','ApiBasePath'];
    function PublicationDataService($http,ApiBasePath) {
        // console.log("pds");
        var service = this;
        // service.categoryShortName = '';
        var categories = [];
        var year = '';
        var first = true;
        service.getAllPublications = function () {
            categories = [];
            var response = $http({
                method:'GET',
                url : (ApiBasePath + '/data.json')
            })
                .then(function (result) {
                    // console.log("result",result.data);
                    var ans = result.data;
                    if(!first){
                    for(var i = 0;i<ans.length;i++){
                        // var obj = {
                        //     name: ans[i].id,
                        //     year : ans[i].pubYear
                        // };
                        // console.log()
                        var year = service.getYear();
                        if(ans[i].pubYear == year)
                            categories.push(ans[i]);
                    }}
                    first = false;
                    console.log("get pub");

                });
            // console.log("categories",categories);
            return categories;
        };
        service.setYear = function (value) {
            year = value;
        };
        service.isFirst = function () {
            // console.log("check",check,"year",year);
          return first;
        };
        service.getYear = function () {
            return year;
        };

    }
})();