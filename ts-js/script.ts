class Sight {
    city: string;
    name: string;
    address: string;
    img: string;
    visit: Date;

    constructor(city, name, address, img, visit) {
        this.city = city;
        this.name = name;
        this.address = address;
        this.img = img;
        this.visit = visit;
    }


    display(){
        let card = ` 
            <div class="card mb-3" value="${this.city}"> 
            <!--col-xl-2 col-lg-3 col-md-4 col-sm-10 gefaellt mir nicht-->
                <img class="card-img-top d-sm-none d-md-flex " alt="img" src="../img/${this.img}">
                <div class="card-body ">
                    <h5 class="card-title">${this.name}</h5>
                    <p class="card-text">${this.address}</p>
                    <span class="p-2" value="${Number(this.visit)}">Visited on: ${this.visit.toLocaleDateString('en-GB')}</span>
                </div>
            </div>
        `;
        return card
    }
}

class Restaurant extends Sight{
    restoType: string;
    tel: string;
    link: string;

    constructor(city, name, address, img, visit, restoType, tel, link) {
        super(city, name, address, img, visit);
        this.restoType = restoType;
        this.tel = tel;
        this.link = link;
    }
    display(){
        let card = ` 
            <div class="card mb-3"  value="${this.city}">
                <img class="card-img-top" alt="img" src="../img/${this.img}">
                <div class="card-body">
                    <h5 class="card-title">${this.name}</h5>
                    <p class="card-text">${this.address}</p>
                    <p class="card-text">${this.restoType}</p>
                    <p class="card-text">${this.tel}</p>
                    <p class="card-text"><a href="https://${this.link}" target="_blank">${this.link}</a></p>
                    <span class="p-2" value="${Number(this.visit)}">Visited on: ${this.visit.toLocaleDateString('en-GB')}</span>
                </div>
            </div>
        `;
        return card
    }
}
class Event extends Sight{
    eventDateTime: string;
    price: number;

    constructor(city, name, address, img, visit, eventDateTime, price) {
        super(city, name, address, img, visit);
        this.eventDateTime = eventDateTime;
        this.price = price;
    }
    display(){
        let card = ` 
            <div class="card mb-3"  value="${this.city}">
                <img class="card-img-top" alt="img" src="../img/${this.img}">
                <div class="card-body">
                    <h5 class="card-title">${this.name}</h5>
                    <p class="card-text">${this.address}</p>
                    <p class="card-text">${this.eventDateTime}</p>
                    <p class="card-text">${this.price} EUR</p>
                    <span class="p-2 " value="${Number(this.visit)}">Visited on: ${this.visit.toLocaleDateString('en-GB')}</span>
                </div>
            </div>
        `;
        return card
    }
}
let objectForCards: Array<Sight>;
objectForCards = [];

function objectCreation(indexStart, indexEnd, className, divName){
    for (let i = indexStart; i<indexEnd; i++){
       if (className == Sight){
           var objectInfo = new Sight( city[i], locationName[i], ad[i], img[i], date[i]);
       }
       else if (className == Restaurant){
           var objectInfo = new Restaurant( city[i], locationName[i], ad[i], img[i], date[i], restoType[i], tel[i] , link[i]);
       }
       else if (className == Event) {
           var objectInfo = new Event( city[i], locationName[i], ad[i], img[i], date[i],  eventDateTime[i], price[i]);
       }
       objectForCards.push(objectInfo);
       document.getElementById(divName).innerHTML+=objectInfo.display()
    }
}

objectCreation(0, 6, Sight, "sightCardsDiv");
objectCreation(6, 12, Restaurant, "restoCardsDiv");
objectCreation(12, 18, Event, "eventCardsDiv");
console.table(objectForCards);



function navSelections(){
    var currentText = this.parentElement.previousElementSibling;
    currentText.innerText = this.innerText;
    switch (this.getAttribute("value")) {
        case "Vienna" :
            $(".card[value='London']").hide();
            $(".card[value='Vienna']").show();
            break;
        case "London" :
            $(".card[value='Vienna']").hide();
            $(".card[value='London']").show();
            break;
        case "sightseeing" :
            $("#restoCardsDiv").hide();
            $("#eventCardsDiv").hide();
            $("#sightCardsDiv").show();
            break;
        case "restaurant" :
            $("#restoCardsDiv").show();
            $("#eventCardsDiv").hide();
            $("#sightCardsDiv").hide();
            break;
        case "events" :
            $("#restoCardsDiv").hide();
            $("#eventCardsDiv").show();
            $("#sightCardsDiv").hide();
            break;
    }

}
$(".dropdown-item").on("click", navSelections);

