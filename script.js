let postacie = [
    ["Frodo Baggins", "Hobbit, Powiernik Pierścienia, który podjął się misji zniszczenia go w Górze Przeznaczenia."],
    ["Gandalf", "Czarodziej (Istari), mentor Drużyny Pierścienia, znany jako Mithrandir wśród elfów."],
    ["Aragorn", "Potomek Isildura, prawowity następca tronu Gondoru, znany jako Obieżyświat."],
    ["Legolas", "Elf z Mrocznej Puszczy, syn Thranduila, wybitny łucznik i lojalny przyjaciel Gimlego."],
    ["Gimli", "Syn Glóina, krasnoludzki wojownik, który udowodnił, że przyjaźń między elfem a krasnoludem jest możliwa."],
    ["Samwise Gamgee", "Ogrodnik i najwierniejszy towarzysz Froda, bez którego misja by się nie powiodła."],
    ["Galadriela", "Pani Lorien, jedna z najpotężniejszych istot w Śródziemiu, powierniczka pierścienia Nenya."],
    ["Elrond", "Władca Rivendell, półelf, który zwołał Radę decydującą o losach Jedynego Pierścienia."],
    ["Arwena", "Córka Elronda, Gwiazda Wieczorna swojego ludu, która wybrała śmiertelne życie u boku Aragorna."],
    ["Boromir", "Syn Namiestnika Gondoru, dzielny wojownik, który oddał życie w obronie hobbitów."],
    ["Gollum", "Istota zniewolona przez Pierścień, która przez wieki żyła w ciemnościach pod Górami Mglistymi."],
    ["Sauron", "Władca Ciemności, twórca Jedynego Pierścienia, dążący do absolutnej władzy nad Śródziemiem."],
    ["Saruman", "Niegdyś przywódca Białej Rady, który uległ żądzy władzy i zdradził wolne ludy."],
    ["Theoden", "Król Rohanu, który wyzwolił się spod wpływu Sarumana i poprowadził Rohirrimów do walki."],
    ["Eowina", "Tarcza Rohanu, siostrzenica króla Theodena, która wsławiła się pokonaniem Czarnoksiężnika z Angmaru."]
];

let cytaty = [
    "Czarodziej nigdy się nie spóźnia, nie jest też zbyt wcześnie, przybywa wtedy kiedy ma na to ochotę",
    "Dawne Dni przeminęły. Średnie Dni przemijają. Świtają Dni Nowe",
    "My decydujemy tylko o tym jak wykorzystać czas, który nam dano",
    "Pierścień ma tylko jednego władcę, i nie podzieli się władzą.",
    "Jestem przyjacielem nieprzyjaciół naszego jedynego nieprzyjaciela",
    "Kto nie umie w potrzebie rozstać się ze skarbem, jest jak niewolnik w pętach",
    "Nie bądźmy zbyt pochopni",
    "Głupi Tuk!!!.",
    "Zbliża się spełnienie naszej nadziei albo kres wszelkiej nadziei świata",
    "Prawdziwa odwaga polega na wiedzeniu, nie kiedy odebrać życie, ale kiedy je oszczędzić.",
    "Nadzieja jest zawsze tam, gdzie się jej nie spodziesz.",
    "Jeden, by wszystkimi rządzić"
];

let czyCiemny = false;

function pokazLosowyCytat() {
    let numer = Math.floor(Math.random() * cytaty.length);
    document.querySelector("#losowyCytat").innerHTML = cytaty[numer];
}

function wyswietlPostacie(lista) {
    let kontener = document.querySelector("#kontenerKart");
    kontener.innerHTML = "";

    for (let i = 0; i < lista.length; i++) {
        kontener.innerHTML += `
        <div class="karta">
            <h3>${lista[i][0]}</h3>
            <p>${lista[i][1]}</p>
        </div>
        `;
    }

    let wszystkieKarty = document.querySelectorAll(".karta");
    if (czyCiemny === true) {
        for (let j = 0; j < wszystkieKarty.length; j++) {
            wszystkieKarty[j].style.backgroundColor = "#2a2a2a";
            wszystkieKarty[j].style.color = "white";
        }
    } else {
        for (let j = 0; j < wszystkieKarty.length; j++) {
            wszystkieKarty[j].style.backgroundColor = "white";
            wszystkieKarty[j].style.color = "#2b2b2b";
        }
    }
}

function wyszukajPostacie() {
    let wpis = document.querySelector("#poleWyszukiwania").value.toLowerCase();
    let wynik = [];

    for (let i = 0; i < postacie.length; i++) {
        if (postacie[i][0].toLowerCase().includes(wpis)) {
            wynik.push(postacie[i]);
        }
    }

    wyswietlPostacie(wynik);
}

function logowanie() {
    let login = document.querySelector("#poleLogin").value;
    let komunikat = document.querySelector("#komunikatLogowania");

    if (login === "") {
        komunikat.innerHTML = "Wpisz imię, przyjacielu!";
        komunikat.style.color = "#d9534f";
    } else {
        komunikat.innerHTML = "Witaj w Drużynie, " + login + "!";
        komunikat.style.color = "#2f4f2f";
    }
}

function zmienMotyw() {
    let tloStrony = document.body;
    let sekcje = document.querySelectorAll("section");
    let karty = document.querySelectorAll(".karta");
    let cytatPole = document.querySelector("#losowyCytat");
    let gandalfObraz = document.querySelector("#gandalf");
    let opisGandalfa = document.querySelector("#gandalfOpis");
    let pierscienObraz = document.querySelector("#obrazekPierscien");
    let nazgule = document.querySelectorAll(".nazgul");
    let mapaTlo = document.querySelector("#mapaTlo");

    if (!czyCiemny) {
        tloStrony.style.backgroundColor = "#121212";
        mapaTlo.style.display = "none";
        tloStrony.style.color = "white";

        cytatPole.innerHTML = "My decydujemy tylko o tym jak wykorzystać czas, który nam dano.";
        cytatPole.style.backgroundColor = "#222222";

        for (let i = 0; i < sekcje.length; i++) {
            sekcje[i].style.backgroundColor = "#1a1a1a";
        }

        for (let i = 0; i < karty.length; i++) {
            karty[i].style.backgroundColor = "#2a2a2a";
            karty[i].style.color = "white";
        }

        gandalfObraz.src = "gandalf-ciemny.png";
        opisGandalfa.innerHTML = "władca czarnego motywu";

        pierscienObraz.style.filter = "drop-shadow(0 0 8px gold) drop-shadow(0 0 20px rgba(255,215,0,0.7))";

        for (let i = 0; i < nazgule.length; i++) {
            nazgule[i].style.display = "block";
        }

        czyCiemny = true;
    } else {
        tloStrony.style.backgroundColor = "#e6e2d3";
        mapaTlo.style.display = "block";
        tloStrony.style.color = "#2b2b2b";

        cytatPole.innerHTML = "Czarodziej nigdy się nie spóźnia.";
        cytatPole.style.backgroundColor = "rgba(255,255,255,0.4)";

        for (let i = 0; i < sekcje.length; i++) {
            sekcje[i].style.backgroundColor = "#f4f0e6";
        }

        for (let i = 0; i < karty.length; i++) {
            karty[i].style.backgroundColor = "white";
            karty[i].style.color = "#2b2b2b";
        }

        gandalfObraz.src = "gandalf-jasny.png";
        opisGandalfa.innerHTML = "strażnik jasnego motywu";

        pierscienObraz.style.filter = "none";

        for (let i = 0; i < nazgule.length; i++) {
            nazgule[i].style.display = "none";
        }

        czyCiemny = false;
    }
}

document.querySelector("#poleWyszukiwania").addEventListener("input", wyszukajPostacie);
document.querySelector("#przyciskLogin").addEventListener("click", logowanie);
document.querySelector("#gandalf").addEventListener("click", zmienMotyw);

pokazLosowyCytat();
wyswietlPostacie(postacie);