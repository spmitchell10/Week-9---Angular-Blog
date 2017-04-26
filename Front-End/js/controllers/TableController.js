(function() {
    'use strict';

    angular
        .module('blog')
        .controller('TableController', function(API) {

        	const vm = this;
           

            //This is how we get our Data from the API

            let data = API.getBlogs(); 
            data.then(res => {
                console.log(res);
                vm.data = res.data
            });

            // Posting a Blog

            vm.submitBlog = ((isValid)=> {
                if (isValid) {

                    const newItem = Object.assign({}, vm.data);
                    let data = API.postBlogs(newItem); //this is linked to saveData that saves newItem and that 'data' is then updated below
                    data.then(res => {
                        let getNew = API.getBlogs(); //this is telling the API to run the updated Data and return that Data
                        getNew.then(res => { //This is displaying the new Data from the API that is sent over
                            console.log("NEW", res); //You can also do this on the backend by re-running the post after the save or delete
                            vm.data = res.data 
                        })
                    });
                    vm.data = {};
                    swal(
                        "Good job!",
                        "You Added an Item!",
                        "success");
                    } else {
                    swal({
                      title: "Uh, oh!",
                      text: "You must fill out all fields!",
                      type: "warning",
                      confirmButtonColor: "#DD6B55",
                      confirmButtonText: "Let's do this!",
                      closeOnConfirm: false});
                }

            })

        });
     
})();