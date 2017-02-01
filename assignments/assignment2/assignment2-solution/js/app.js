(function() {
"use strict";

angular.module("ShoppingListCheckOff", [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
    this.items = ShoppingListCheckOffService.getItemsToBuy();

    this.boughtItemAtIndex = function(index) {
        ShoppingListCheckOffService.boughtItemAtIndex(index);
    }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
    this.items = ShoppingListCheckOffService.getItemsAlreadyBought();
}

ShoppingListCheckOffService.$inject = [];
function ShoppingListCheckOffService() {
    this.toBuy = [ { name: "cookies", quantity: 10 },
                    { name: "cans of coffee", quantity: 20 },
                    { name: "cartons of milk", quantity: 3 },
                    { name: "apples", quantity: 365 },
                    { name: "bottle of olive oil", quantity: 1 } ];
    this.alreadyBought = [];

    this.getItemsToBuy = function() {
        return this.toBuy;
    }

    this.getItemsAlreadyBought = function() {
        return this.alreadyBought;
    }

    this.boughtItemAtIndex = function(index) {
        var item = this.toBuy[index];
        this.toBuy.splice(index, 1);
        this.alreadyBought.push(item);
    }
}

})();
