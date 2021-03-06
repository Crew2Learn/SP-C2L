// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider
      .state('login', {
        url:'/',
        templateUrl: 'templates/login.html'
      })

      .state('tabs', {
        url:'/tabs',
        abstract: true,
        templateUrl: 'templates/side_menu.html'
      })

      .state('tabs.home', {
        url:'/home',
        views: {
          'menuContent':{
            templateUrl: 'templates/home.html'
          }
        }
      })

      .state('tabs.meine_crews', {
        url:'/meine_crews',
        views: {
          'menuContent':{
            templateUrl: 'templates/meine_crews.html'
          }
        }
      })

      .state('tabs.crew_erstellen', {
        url:'/crew_erstellen',
        views: {
          'menuContent':{
            templateUrl: 'templates/crew_erstellen.html'
          }
        }
      })

      .state('tabs.crew_erstellen_2', {
        url:'/crew_erstellen_2',
        views: {
          'menuContent':{
            templateUrl: 'templates/crew_erstellen_2.html'
          }
        }
      })

      .state('tabs.crew_suche', {
        url:'/crew_suche',
        views: {
          'menuContent':{
            templateUrl: 'templates/crew_suche.html'
          }
        }
      })

      .state('tabs.crew_suche_2', {
        url:'/crew_suche_2',
        views: {
          'menuContent':{
            templateUrl: 'templates/crew_suche_2.html'
          }
        }
      })


      .state('tabs.Profil', {
        url:'/profil',
        views: {
          'menuContent':{
            templateUrl: 'templates/profil.html'
          }
        }
      })

      .state('tabs.raum', {
        url:'/raum',
        views: {
          'menuContent':{
            templateUrl: 'templates/raum.html'
          }
        }
      })

      .state('tabs.raum_suche', {
        url:'/raum_suche',
        views: {
          'menuContent':{
            templateUrl: 'templates/raum_suche.html'
          }
        }
      })


      .state('tabs.break', {
        url:'/break',
        views: {
          'menuContent':{
            templateUrl: 'templates/break.html'
          }
        }
      })



    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tabs/home');

  });


