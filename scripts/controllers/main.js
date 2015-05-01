'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('MainCtrl', function () {

    var vm = this;
    var element = $('#flyerImg');
    TweenLite.to(element, 20, {opacity: 1});



//    setInterval(function () {
//      var element = $('#flyerImg');
//      //fade out and set visibility:hidden
//      TweenLite.to(element, 2, {autoAlpha: 0});
//
////in 2 seconds, fade back in with visibility:visible
//      TweenLite.to(element, 2, {autoAlpha: 1, delay: 10});
//    }, 28);
  });
