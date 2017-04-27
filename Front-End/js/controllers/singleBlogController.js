(function() {
    'use strict';

    angular
        .module('blog')
        .controller('singleBlogController', function(API, $sce, $stateParams) {

            const vm = this;

            vm.delibertlyTrustDangerousSnippet = function() {
                return $sce.trustAsHtml(vm)
            }

            let id = $stateParams.id; //this is the id that is sent over

            //This is how we get our Data from the API

            let getSingleBlog = API.getSingleBlog(id); //this takes that ID and passes it through to vm.currentBlog so we can use on the front end
            getSingleBlog.then(res => {                 //see the singleblog.html page where we use vm.currentBlog
                vm.currentBlog = res.data;
            })

        })
})();
