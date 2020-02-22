let possibleCities: Array<string> = ["Vienna", "London"];

let city: Array<string> = [possibleCities[0], possibleCities[0], possibleCities[0],
    possibleCities[1], possibleCities[1], possibleCities[1],
    possibleCities[0], possibleCities[0], possibleCities[0],
    possibleCities[1], possibleCities[1], possibleCities[1],
    possibleCities[0], possibleCities[0], possibleCities[0],
    possibleCities[1], possibleCities[1], possibleCities[1]];

let locationName: Array<string> = ["St. Stephen's Cathedral", "Giant Ferris Wheel", "Schönbrunn Palace",
    "Tower of London", "British Museum", "Buckingham Palace",
    "Zwölf-Apostelkeller", "Das Loft", "Café Little Britain",
    "Big Moes", "Cutter & Squidge", "Waxy O'Connor's",
    "Miss Saigon", "Jazz Fest Paolo Conte", "Holiday On Ice",
    "Disney's The Lion King", "Sister Act: The Musical", "Wicked"];

let ad: Array<string> = ["Stephansplatz, 1010 Vienna", "Prater, 1020 Vienna", "Schönbrunner Schlossstraße, 1130 Vienna",
    "St Katharine's & Wapping, London", "Great Russell St, Bloomsbury, London", "Westminster, London",
    "Sonnenfelsgasse 3, 1010 Vienna", "Praterstraße 1, 1020 Vienna", "Engerthstraße 249/253, 1020 Vienna",
    "96 Whitechapel High St, Shadwell, London", "20 Brewer St, Soho, London", "14-16 Rupert St, West End, London",
    "Raimund Theater - Wallgasse 18-20, 1060 Vienna", "Wiener Staatsoper - Opernring 2, 1010 Vienna",
    "Wiener Stadthalle - Halle D - Roland Rainer Platz 1, 1150 Vienna",
    "Lyceum Theatre - 21 Wellington Street, London", "Eventim Apollo - 2 Queen Caroline Street, London",
    "Apollo Victoria Theatre - 17 Wilton Road, London"];

let img: Array<string> = ["vienna/stefan.jpg", "vienna/prater.jpg", "vienna/palace.jpg",
    "london/tower.jpg", "london/museum.jpg", "london/palaceB.jpg",
    "vienna/schnitzel.jpg", "vienna/sofitel.jpg", "vienna/cafe.jpg",
    "london/bigmoes.jpg", "london/harryTea.jpg", "london/treePub.jpg",
    "vienna/saigon.jpg", "vienna/jazz.jpg", "vienna/ice.jpg",
    "london/lionKing.jpg", "london/sister.jpg", "london/wicked.jpg"];

let restoType: Array<string> = [null, null, null,
    null, null, null,
    "Austrian", "Rooftop Bar", "Breakfast/Afternoon Tea",
    "Breakfast/Burgers", "Afternoon Tea", "Pub",
    null, null, null,
    null, null, null];

let eventDateTime: Array<Date> = [null, null, null,
    null, null, null,
    null, null, null,
    null, null, null,
    new Date("2020-09-17T19:30"), new Date("2020-07-03T19:30"), new Date("2021-01-23T11:00"),
    new Date("2020-03-22T14:30"), new Date("2020-07-21T19:30"), new Date("2020-03-12T18:30")];

let price: Array<number> = [null, null, null,
    null, null, null,
    null, null, null,
    null, null, null,
    20, 33, 28.80,
    60, 92, 100];

let tel: Array<string> = [null, null, null,
    null, null, null,
    "+4315126777", "+431906168110", "+4319962143",
    "+442072471013", "+442084530212", "+442072870255",
    null, null, null,
    null, null, null];

let link: Array<string> = [null, null, null,
    null, null, null,
    "www.zwoelf-apostelkeller.at/", "www.dasloftwien.at/", "www.little-britain.at/",
    "www.bigmoesdiner.co.uk/", "www.cutterandsquidge.com/", "www.waxyoconnors.co.uk/london",
    null, null, null,
    null, null, null];

let date: Array<Date> = [];
for(i=0; i<18; i++){
    let day = Math.floor(Math.random()*28+1);
    let month = Math.floor(Math.random()*12+1);
    date.push(new Date("2019-"+month+"-"+day));
}
