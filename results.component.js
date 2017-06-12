/**
 * Created by Soumya on 6/10/2017.
 */
(function () {
    'use strict'

    angular.module('PublicationApp')
        .component('contents',{
            templateUrl : 'displayResults.html',
            bindings :{
                contents : '<'
            }
        });
})();