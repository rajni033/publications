/**
 * Created by Soumya on 6/10/2017.
 */
(function () {
    'use strict'

    angular.module('PublicationApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
        // Redirect to home page if no other URL matches
        $urlRouterProvider.otherwise('/');
        $stateProvider.state('home',{
            url:'/',
        //     templateUrl:'home.html'
        // })
        // $stateProvider.state('contents', {
                // url: '/publications',
                templateUrl: 'main-results.html',
                controller: 'ResultsController as res',
                resolve: {
                    items: ['PublicationDataService', function (PublicationDataService) {
                        return PublicationDataService.getAllPublications();
                    }]
                }
            });
            // .state('items', {
            //     url: '/categories/{shortName}/items',
            //     templateUrl: 'item-details.html',
            //     controller: 'ItemsController as item',
            //     resolve: {
            //         items: ['$stateParams','PublicationDataService', function ($stateParams,PublicationDataService) {
            //             return  PublicationDataService.getItemsForCategory($stateParams.shortName);
            //         }]
            //     }
            //
            // });
    }

})();