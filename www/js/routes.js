angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider


      .state('tabs.home', {
    url: '/home',
    params: { datas: null },
    views: {
      'tab1': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('tabs.search', {
    url: '/search',
    views: {
      'tab2': {
        templateUrl: 'templates/search.html',
        controller: 'searchCtrl'
      }
    }
  })

  .state('tabs.setting', {
    url: '/setting',
    params: { datas: null },
    views: {
      'tab5': {
        templateUrl: 'templates/setting.html',
        controller: 'settingCtrl'
      }
    }
  })

  .state('tabs', {
    url: '/home',
    templateUrl: 'templates/tabs.html',
    controller: 'tabsCtrl',
    abstract:true
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('tabs.addRelation', {
    url: '/add',
    params: { datas: null },
    views: {
      'tab3': {
        templateUrl: 'templates/addRelation.html',
        controller: 'addRelationCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/login')


});
