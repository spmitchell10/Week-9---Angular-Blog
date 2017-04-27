(function() {
    'use strict';

    angular
        .module('blog', ['ui.router','ngSanitize'])
        .config(function($stateProvider, $urlRouterProvider, $locationProvider) {


            $stateProvider
                .state('blogs', {
                    url: '/',
                    views: {
                        'content': {
                            templateUrl: '../partials/blogs.html',
                            controller: 'TableController',
                            controllerAs: 'vm',
                        },

                    }
                })

            $stateProvider
                .state('admin', {
                    url: '/admin',
                    views: {
                        'content': {
                            templateUrl: '../partials/admin.html',
                            controller: 'TableController',
                            controllerAs: 'vm',
                        },

                    }
                })

                $stateProvider
                .state('singleBlog', {
                    url: '/blog',
                    views: {
                        'content': {
                            templateUrl: '../partials/singleblog.html',
                            controller: 'singleBlogController',
                            controllerAs: 'vm',
                        },

                    }
                })
        })

})();
