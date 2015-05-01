(function () {
    'use strict';

    angular
        .module('appApp')
        .controller('GalleryCtrl', gallery);

    //gallery.$inject = ['ngAnimate, ngTouch'];

    /* @ngInject */
    function gallery($routeParams) {
        /* jshint validthis: true */
        var vm = this;
        vm.title = 'gallery';

      vm.direction = 'right';
      vm.currentIndex = 0;


      vm.activate = function() {
          console.log('route ' + $routeParams.id);
          vm.slides = vm.buildSrcArray($routeParams.id, 69);
          vm.flyerFrontUrl = 'images/flyers/flyer' + $routeParams.id + 'front.jpg';
          vm.flyerBackUrl  = 'images/flyers/flyer'+ $routeParams.id + 'back.jpg';
      }

      vm.buildSrcArray = function(partyNo, noOfElems) {
        var array = new Array();
        for(var i=1; i <= noOfElems; i++)
        {
          array.push(decodeURIComponent('images/parties/' + partyNo + '/' + i + '.jpg'));
        }
        return array;
      }

      vm.setCurrentSlideIndex = function (index) {
        vm.direction = (index > vm.currentIndex) ? 'left' : 'right';
        vm.currentIndex = index;
      };

      vm.isCurrentSlideIndex = function (index) {
        return vm.currentIndex === index;
      };

      vm.prevSlide = function () {
        console.log('left');
        vm.direction = 'left';
        vm.currentIndex = (vm.currentIndex < vm.slides.length - 1) ? ++vm.currentIndex : 0;
      };

      vm.nextSlide = function () {
        vm.direction = 'right';
        vm.currentIndex = (vm.currentIndex > 0) ? --vm.currentIndex : vm.slides.length - 1;
      };

      vm.activate();

        ////////////////


    }
})();
