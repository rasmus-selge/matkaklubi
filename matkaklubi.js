let menyyAndmed = [
	{ nimi: 'Esileht', url: 'index.html', title: 'Matkaklubi' },
	{ nimi: 'Meist', url: 'meist.html', title: 'Matkaklubi - meist' },
	{ nimi: 'Kontakt', url: 'kontakt.html', title: 'Matkaklubi - kontakt' },
];

let matkaAndmed = [
	{
		pildiUrl: './assets/syst1.jpg',
		nimi: 'Süstamatk Võhandu jõel',
		lyhikirjeldus: 'alsdj alskdjfalsdkjf alskdjf lasjdf laskjdf lasdfasdfljasdfa. DFASdf',
	},
	{
		pildiUrl: './syst2.jpg',
		nimi: 'Süstamatk Pärnu jõel',
		lyhikirjeldus: 'alsdj alskdjfalsdkjf alskdjf lasjdf laskjdf lasdfasdfljasdfa. DFASdf',
	},
	{
		pildiUrl: './assets/matk_tartus1.jpg',
		nimi: 'Tutvume Tartu linnaga',
		lyhikirjeldus: 'alsdj alskdjfalsdkjf alskdjf lasjdf laskjdf lasdfasdfljasdfa. DFASdf',
	},
];

function menyyValik(menyyObjekt) {
	let klassid = 'nav-item nav-link';
	if (menyyObjekt.title === document.title) {
		klassid += ' active';
	}

	let menyyTekst = `
		<a class="${klassid}"
		   href="${menyyObjekt.url}"
		>
			${menyyObjekt.nimi}
		</a>
		`;
	return menyyTekst
}

function matkaKaart(matkaObjekt) {
	let kaart = `
				<div class="card col-md-6 col-lg-4">
					<img class="card-img-top" src="${matkaObjekt.pildiUrl}" alt="">
					<div class="card-body">
						<div class="card-title">
							${matkaObjekt.nimi}
						</div>
						<div class="card-text">
							${matkaObjekt.lyhikirjeldus}
						</div>
						<a href="#" class="btn btn-primary">Registreeru!</a>
					</div>
				</div>
	`;
	return kaart;
}


function naitaMatkaAndmeidRegistreerimiseks(indeks = 0) {
    const matkaKirjeldus = matkaAndmed[indeks];
    const kirjeldusElem = document.querySelector('#matka-kirjeldus');
    const matkaPilt = document.querySelector('#matka-pilt');

    if (!kirjeldusElem) {
        return;
    }

}


let menyyKast = document.querySelector('navbar-nav')

let koguMenyy = ''
for (let i = 0; i < menyyAndmed.length; i++) {
    keguMenyy += menyyValik(menyyAndmed[i]);
}

menyyKast.innerHTML = koguMenyy;

let matkaKaardid = document.querySelector('#matkakaardid');
if(matkaKaardid) {
    let matkaSisu ='';
    for(let i= 0; i < matkaAndmed.length; i++) {
        matkaSisu += matkaKaart(matkaAndmed[i], i);
	}
	matkaKaardid.innerHTML = matkaSisu; //loome esielehe amtkakaardie sisu
}

let matk = 0;
