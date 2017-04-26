(function() {
    'use strict';

    angular
        .module('blog')
        .factory('API', function($http) {

            return {
                getBlogs: () => {
                    return $http({
                        method: 'GET',
                        url: 'http://localhost:8080/blog',
                    });
                },

                postBlogs: (data) => {
                    return $http({
                        method: 'POST',
                        url: 'http://localhost:8080/blog',
                        data: data,
                    })
                },


            };

        })
})();
