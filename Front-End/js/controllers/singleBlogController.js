(function() {
    'use strict';

    angular
        .module('blog')
        .controller('singleBlogController', function(API, $sce) {

            const vm = this;

            vm.delibertlyTrustDangerousSnippet = function() {
                return $sce.trustAsHtml(vm)
            }


            //This is how we get our Data from the API

            let data = API.getBlogs();
            data.then(res => {
                console.log(res);
                vm.data = res.data
            });

            vm.singleBlog = ((id) => {
                let getSingleBlog = API.getSingleBlog(id);
                getSingleBlog.then(res => {
                    console.log(res);
                    vm.currentBlog = res.data;


                })
            })

        })
})();
