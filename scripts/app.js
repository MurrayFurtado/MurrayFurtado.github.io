'use strict';


/**
 * @ngdoc overview
 * @name appApp
 * @description
 * # appApp
 *
 * Main module of the application.
 */
angular
  .module('appApp', [
    'ngAnimate',
    'ngCart',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      }).when('/gallery/:id', {
        templateUrl: 'views/gallery.html'
      }).when('/lineup', {
        templateUrl: 'views/lineup.html'
      }).when('/djmixes', {
        templateUrl: 'views/djmixes.html'
      }).when('/tickets', {
        templateUrl: 'views/tickets.html'

        //.otherwise({
        //  redirectTo: '/'
        //});
  }).otherwise({
        redirectTo :'/'
      });

  }).animation('.slide-animation', function () {
    return {
      beforeAddClass: function (element, className, done) {
        var scope = element.scope();

        if (className == 'ng-hide') {
          var finishPoint = element.parent().width();
          if(scope.direction !== 'right') {
            finishPoint = -finishPoint;
          }
          TweenMax.to(element, 0.5, {left: finishPoint, onComplete: done });
        }
        else {
          done();
        }
      },
      removeClass: function (element, className, done) {
        var scope = element.scope();

        if (className == 'ng-hide') {
          element.removeClass('ng-hide');

          var startPoint = element.parent().width();
          if(scope.direction === 'right') {
            startPoint = -startPoint;
          }

          TweenMax.fromTo(element, 0.5, { left: startPoint }, {left: 0, onComplete: done });
        }
        else {
          done();
        }
      }
    };
  }).controller('HeaderCtrl', function ($location) {
    var vm = this;

    vm.defaultAction = {id : '', name: 'Previous Parties '};

    vm.actions = [
      {id: '#gallery/6', name: '24 Oct 2014', url : 'www.facebook.com/events/846877831991147', elems : 65},
      {id: '#gallery/5', name: '27 Jun 2014', url : 'www.facebook.com/events/539313966181598', elems : 24},
      {id: '#gallery/4', name: '15 Nov 2013', url : 'www.facebook.com/events/584172964976813', elems : 33},
      {id: '#gallery/3', name: '31 May 2013', url : 'www.facebook.com/events/492017834196515', elems : 41},
      {id: '#gallery/2', name: '23 Nov 2012', url : 'www.facebook.com/events/205791809554655', elems : 23},
      {id: '#gallery/1', name: '20 Jul 2012', url : 'www.facebook.com/events/303222209753565', elems : 70}
    ];

    vm.selectedAction = vm.defaultAction;

    vm.hideFlyer = function() {
      $('#flyerImg').hide();
    };

    vm.showFlyer = function() {
      $('f#lyerImg').show()
    };

    vm.setAction = function(action) {
      vm.selectedAction = action;
    };

    vm.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };

  });

