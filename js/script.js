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
function _getById(e) {
	return document.querySelector(e);
}
var idHelburg= _getById("#Helburg");
 var Helburg = new createActor("Kathrine", "Helburg", "12 May,1907", 114, ["The Lion in Winter", "On Golden Pond", "Bringing Up Baby"]);
idHelburg.appendChild(Helburg.actorCard());
var idLevis = _getById("Levis");
 var Levis = new createActor("Daniel","Day-Lewis","29 April,1957",87,["My Left Foot: The Story of Christy Brown","In the Name of the Father","There Will Be Blood"]);
idLevis.appendChild(Levis.actorCard());
var idStreep = _getById("Streep");
var Streep = new createActor("Meryl","Streep","22 June,1949",269,["Kramer vs. Kramer","The Bridges of Madison County","The Deer Hunter"]);
idStreep.appendChild(Streep.actorCard());

var Nicholson = new createActor();
var Ingrid = new createActor();
