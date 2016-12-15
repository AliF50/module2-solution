(function () {
    'use strict';

    var app = angular.module("ShoppingListCheckOff", []);

    app.controller("ToBuyController", ['ShoppingListCheckOffService', function (ShoppingListCheckOffService) {
        var buy = this;
        buy.getItems = ShoppingListCheckOffService.getItems();
        buy.bought = function (index) {
            ShoppingListCheckOffService.addToBought(index);
            ShoppingListCheckOffService.removeFromToBuy(index);
        };

    }]);

    app.controller("AlreadyBoughtController", ['ShoppingListCheckOffService', function (ShoppingListCheckOffService) {
        var bought = this;
        bought.getBoughtItems = ShoppingListCheckOffService.getBoughtItems();

    }]);

    app.service("ShoppingListCheckOffService", function () {
        var initial = [{
            name: "cookie",
            quantity: 10
        }, {
            name: "Lamborghini",
            quantity: 2
        }, {
            name: "computer",
            quantity: 3
        }, {
            name: "ticket",
            quantity: 4
        }, {
            name: "Playstation 4",
            quantity: 5
        }];
        //var buy = [];
        var bought = [];

        this.getItems = function () {
            return initial;
        };

        this.addToBought = function (index) {
            bought.push(initial[index]);

        };

        this.removeFromToBuy = function (index) {
            initial.splice(index, 1);
        };
        this.getBoughtItems = function () {
            return bought;
        };
    });

})();