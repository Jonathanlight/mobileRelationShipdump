angular.module('app.services', [])

.factory('LoginFactory', ['$http', function($http) {
    return {
        getConnexion: function(newData) {
            var host = "https://ceptronbox.com/"
            return $http.post(host + "connexion", newData)
        }
    }
}])

.factory('RegisterFactory', ['$http', function($http) {
    return {
        getRegister: function(newData) {
            var host = "https://ceptronbox.com/"
            return $http.post(host + "inscription", newData)
        }
    }
}])

.factory('UpdateFactory', ['$http', function($http) {
    return {
        postUpdate: function(newData, id) {
            var host = "https://ceptronbox.com/"
            return $http.post(host + "utilisateur/" + id , newData)
        },

        getUser: function(id) {
            var host = "https://ceptronbox.com/"
            return $http.get(host + "utilisateur/" + id )
        },

        getAllUser: function() {
            var host = "https://ceptronbox.com/"
            return $http.get(host + "utilisateur")
        },

        putUpdatePassword: function(newData, id) {
            var host = "https://ceptronbox.com/"
            return $http.post(host + "password/" + id , newData)
        }
    }
}])

.factory('AskFactory', ['$http', function($http) {
    return {
        postRequest: function(newData, id) {
            var host = "https://ceptronbox.com/"
            return $http.post(host + "makeadd/" + id , newData)
        },
        postAskRequest: function(newData) {
            var host = "https://ceptronbox.com/"
            return $http.post(host + "ask", newData)
        },
        postCancelRequest: function(newData) {
            var host = "https://ceptronbox.com/"
            return $http.post(host + "cancel", newData)
        },
    }
}])

.factory('RelationFactory', ['$http', function($http) {
    return {
        getBreakup: function(id) {
            var host = "https://ceptronbox.com/"
            return $http.get(host + "breaklove/" + id)
        },

        getTogether: function(id) {
            var host = "https://ceptronbox.com/"
            return $http.get(host + "backtogether/" + id)
        },

        getShowlove: function(id) {
            var host = "https://ceptronbox.com/"
            return $http.get(host + "showlove/" + id)
        },

        getSeeask: function(id) {
            var host = "https://ceptronbox.com/"
            return $http.get(host + "seeask/" + id)
        },

        postMakeAdd: function(id) {
            var host = "https://ceptronbox.com/"
            return $http.post(host + "makeadd/" + id)
        }

    }
}])

.service('BlankService', [function() {

    this.getCategories = function() {
        return [];
    }

}]);
