'use strict';

export default function (app) {
    app.provider('resolver', resolverProvider);

    function resolverProvider () {

        console.log("-->> resolverProvider")
        this.asyncPagePrealoading = asyncPagePrealoading;
        this.loginPagePrealoading = loginPagePrealoading;
        this.$get = function() { return this; };
    }
    
        function asyncPagePrealoading ($q) {
            "ngInject";
            var defer = $q.defer();
            // Some async stuff (request, calculations, etc.)
            return defer.promise;
        }


        function loginPagePrealoading () {
            "ngInject";
            console.log("-->>>>>>> loginPagePrealoading")
            var deferred = $q.defer();
            require.ensure([], function (require) {
                var asyncModule = require('../../pages/login/login.module');
                $ocLazyLoad.load({
                    name: asyncModule.name,
                });
                deferred.resolve(asyncModule.controller);
            });
            return deferred.promise;
        }
    

}
