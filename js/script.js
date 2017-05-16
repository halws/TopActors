 function _create(e) {
        return document.createElement(e);
    }
function createActor(name, surName, birthDate, films, bestFilms) {
    	this.name = name,
        this.surName = surName,
        this.birthDate = birthDate,
        this.films = films,
        this.bestFilms = bestFilms
    	this._bestFilms = function() {
        var li = [];
        var ul = _create('ul');
        for (var i = 0, length1 = bestFilms.length; i < length1; i++) {
            li[i] = _create("li");
            li[i].innerHTML = bestFilms[i];
            ul.appendChild(li[i]);
        }
        return ul;
    }
    	this.actorCard = function() {
        var playerCard = _create("div"),
            img = _create("img"),
            h4 = _create("h4"),
            ul = _create('ul'),
            li = [],
            span = [],
            strong = [];
        for (var i = 0; i < 3; i++) {
            li[i] = _create("li");
            span[i] = _create("span");
            strong[i] = _create("strong");
            li[i].appendChild(strong[i]);
            strong[i].innerHTML = [i];
            li[i].appendChild(span[i]);
            ul.appendChild(li[i]);
        }
        h4.innerHTML = this.name + " "+ this.surName;
        img.setAttribute("src", "pictures/" + this.name + ".jpg");
        playerCard.className = "animated flipInX player-card";
        playerCard.appendChild(img);
        playerCard.appendChild(h4);
        playerCard.appendChild(ul);
        strong[0].innerHTML = "Date of birth";
        strong[1].innerHTML = "Film amounds";
        strong[2].innerHTML = "Best films";
        span[0].innerHTML = this.birthDate;
        span[1].innerHTML = this.films;
        span[2].appendChild(this._bestFilms());
        var tempalate = playerCard;
        return tempalate;
    }
}
function _getBy(e) {
	return document.querySelector(e);
}
   var helburgId = document.querySelector("#Helburb");
   // var helburgId = _getBy

 var Helburg = new createActor("Kathrine", "Helburg", "12 May,1907", 114, ["The Lion in Winter", "On Golden Pond", "Bringing Up Baby"]);


helburgId.appendChild(Helburg.actorCard());
// var idLevis = _getById("Levis");
 var LewisId = document.querySelector("#Lewis");
 var Lewis = new createActor("Daniel","Day-Lewis","29 April,1957",87,["My Left Foot: The Story of Christy Brown","In the Name of the Father","There Will Be Blood"]);
LewisId.appendChild(Lewis.actorCard());
// var idStreep = _getById("Streep");
 var streepId = document.querySelector("#Streep");
var Streep = new createActor("Meryl","Streep","22 June,1949",269,["Kramer vs. Kramer","The Bridges of Madison County","The Deer Hunter"]);
streepId.appendChild(Streep.actorCard());
 var NicholsonId = document.querySelector("#Nicholson");
var Nicholson = new createActor("Jack","Nicholson","22 April,1937",195,["One Flew Over the Cuckoo's Nest","The Departed","The Bucket List"]);
NicholsonId.appendChild(Nicholson.actorCard());
 var BergmanId = document.querySelector("#Bergman");
var Bergman = new createActor("Ingrid","Bergman","29 August,1982",184,["Goodbye Again","Casablanca","Höstsonaten"]);
BergmanId.appendChild(Bergman.actorCard());

// var Nicholson = new createActor();
// var Ingrid = new createActor();
