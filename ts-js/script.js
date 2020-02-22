var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Sight = /** @class */ (function () {
    function Sight(city, name, address, img, visit) {
        this.city = city;
        this.name = name;
        this.address = address;
        this.img = img;
        this.visit = visit;
    }
    Sight.prototype.display = function () {
        var card = " \n            <div class=\"card mb-3\" value=\"" + this.city + "\">\n                <img class=\"card-img-top d-sm-none d-md-flex \" alt=\"img\" src=\"../img/" + this.img + "\">\n                <div class=\"card-body \">\n                    <h5 class=\"card-title\">" + this.name + "</h5>\n                    <p class=\"card-text\">" + this.address + "</p>\n                    <span class=\"p-2\" value=\"" + Number(this.visit) + "\">Visited on: " + this.visit.toLocaleDateString('en-GB') + "</span>\n                </div>\n            </div>\n        ";
        return card;
    };
    return Sight;
}());
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(city, name, address, img, visit, restoType, tel, link) {
        var _this = _super.call(this, city, name, address, img, visit) || this;
        _this.restoType = restoType;
        _this.tel = tel;
        _this.link = link;
        return _this;
    }
    Restaurant.prototype.display = function () {
        var card = " \n            <div class=\"card mb-3\"  value=\"" + this.city + "\">\n                <img class=\"card-img-top\" alt=\"img\" src=\"../img/" + this.img + "\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">" + this.name + "</h5>\n                    <p class=\"card-text\">" + this.address + "</p>\n                    <p class=\"card-text\">" + this.restoType + "</p>\n                    <p class=\"card-text\">" + this.tel + "</p>\n                    <p class=\"card-text\"><a href=\"https://" + this.link + "\" target=\"_blank\">" + this.link + "</a></p>\n                    <span class=\"p-2\" value=\"" + Number(this.visit) + "\">Visited on: " + this.visit.toLocaleDateString('en-GB') + "</span>\n                </div>\n            </div>\n        ";
        return card;
    };
    return Restaurant;
}(Sight));
var Event = /** @class */ (function (_super) {
    __extends(Event, _super);
    function Event(city, name, address, img, visit, eventDateTime, price) {
        var _this = _super.call(this, city, name, address, img, visit) || this;
        _this.eventDateTime = eventDateTime;
        _this.price = price;
        return _this;
    }
    Event.prototype.display = function () {
        var card = " \n            <div class=\"card mb-3\"  value=\"" + this.city + "\">\n                <img class=\"card-img-top\" alt=\"img\" src=\"../img/" + this.img + "\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">" + this.name + "</h5>\n                    <p class=\"card-text\">" + this.address + "</p>\n                    <p class=\"card-text\">" + this.eventDateTime + "</p>\n                    <p class=\"card-text\">" + this.price + " EUR</p>\n                    <span class=\"p-2 \" value=\"" + Number(this.visit) + "\">Visited on: " + this.visit.toLocaleDateString('en-GB') + "</span>\n                </div>\n            </div>\n        ";
        return card;
    };
    return Event;
}(Sight));
var objectForCards;
objectForCards = [];
var objSights;
objSights = [];
var objResto;
objResto = [];
var objEvents;
objEvents = [];
function objectCreation(arrayName, indexStart, indexEnd, className, divName) {
    for (var i = indexStart; i < indexEnd; i++) {
        if (className == Sight) {
            var objectInfo = new Sight(city[i], locationName[i], ad[i], img[i], date[i]);
        }
        else if (className == Restaurant) {
            var objectInfo = new Restaurant(city[i], locationName[i], ad[i], img[i], date[i], restoType[i], tel[i], link[i]);
        }
        else if (className == Event) {
            var objectInfo = new Event(city[i], locationName[i], ad[i], img[i], date[i], eventDateTime[i], price[i]);
        }
        arrayName.push(objectInfo);
        objectForCards.push(objectInfo);
        document.getElementById(divName).innerHTML += objectInfo.display();
    }
}
objectCreation(objSights, 0, 6, Sight, "sightCardsDiv");
objectCreation(objResto, 6, 12, Restaurant, "restoCardsDiv");
objectCreation(objEvents, 12, 18, Event, "eventCardsDiv");
console.table(objectForCards);
function navSelections() {
    var currentText = this.parentElement.previousElementSibling;
    currentText.innerText = this.innerText;
    switch (this.getAttribute("value")) {
        case "Vienna":
            $(".card[value='London']").hide();
            $(".card[value='Vienna']").show();
            break;
        case "London":
            $(".card[value='Vienna']").hide();
            $(".card[value='London']").show();
            break;
        case "sightseeing":
            $("#restoCardsDiv").hide();
            $("#eventCardsDiv").hide();
            $("#sightCardsDiv").show();
            break;
        case "restaurant":
            $("#restoCardsDiv").show();
            $("#eventCardsDiv").hide();
            $("#sightCardsDiv").hide();
            break;
        case "events":
            $("#restoCardsDiv").hide();
            $("#eventCardsDiv").show();
            $("#sightCardsDiv").hide();
            break;
    }
}
$(".dropdown-item").on("click", navSelections);
