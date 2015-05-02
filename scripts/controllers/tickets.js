angular.module('appApp')
  .controller('TicketsCtrl', ticketsController);

function ticketsController(ngCart) {

  var vm = this;
  vm.item = {
    id : '1',
    name  : '£7 Astral Circus Earlybird Ticket x ',
    price : 7.00
  };

  vm.activate = function() {

  };


}
