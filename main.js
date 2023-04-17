// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];

/*---------------------------------------------------------------------
ASSIGNMENTS
---------------------------------------------------------------------*/

/*----------------------
    Opdracht 1 - Array Methoden
----------------------*/
// Opdracht 1a: Gebruik een array-methode om een array te maken met alle tv-type namen. Log de uitkomst in de console.
const tvType = inventory.map((tv) => {
  return tv.type;
});
console.log("Array met alle tv-type namen:");
console.log(tvType);

// Opdracht 1b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn. Log de uitkomst in de console.
const soldOut = inventory.filter((tv) => {
  const inventoryTv = tv.originalStock - tv.sold
  return inventoryTv === 0;
});

console.log("Tv's die volledig uitverkocht zijn:");
console.log(soldOut);

// Opdracht 1c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken. Log de uitkomst in de console.
const ambilightTvs = inventory.filter((tv) => {
  return tv.options.ambiLight === true;
});

console.log("Tv's die over Ambilight beschikken:");
console.log(ambilightTvs);

// Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de console.
// Deze functie uitgezet omdat anders onderstaande opdrachten niet meer goed werkten.
/*inventory.sort((a, b) => a.price - b.price);

console.log("Tv's van laagste naar hoogste prijs:");
console.log(inventory);*/


/*----------------------
    Opdracht 2 - Elementen in de DOM plaatsen
----------------------*/
// Opdracht 2a: Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
const arraySoldTVs = inventory.map((tv) => {
  return tv.sold;
});

let totalSoldTVs = 0;
for (let i = 0; i < arraySoldTVs.length; i++) {
  totalSoldTVs += arraySoldTVs[i];
}

console.log("Het totaal aantal verkochte tv's is:");
console.log(totalSoldTVs);

// Opdracht 2b: Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.
const soldTVs = document.getElementById('soldTVs');
soldTVs.innerText = totalSoldTVs;

// Opdracht 2c: Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
const arrayBoughtTVs = inventory.map((tv) => {
  return tv.originalStock
});

let totalBoughtTVs = 0;
for (let i = 0; i < arrayBoughtTVs.length; i++) {
  totalBoughtTVs += arrayBoughtTVs[i];
}

console.log("Het totaal aantal ingekochte tv's is:");
console.log(totalBoughtTVs);

// Opdracht 2d: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.
const boughtTVs = document.getElementById('boughtTVs');
boughtTVs.innerText = totalBoughtTVs;

// Opdracht 2e: Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.
const inventoryTVs = document.getElementById('inventoryTVs');
const tvsInventory = totalBoughtTVs - totalSoldTVs;
inventoryTVs.innerText = tvsInventory;


/*----------------------
    Opdracht 3 - Array methoden en functies
----------------------*/
// Opdracht 3a: Gebruik een array-methode om alle tv merken (zoals Philips, NIKKEI, etc.) in een lijst op de pagina weer te geven. Zorg ervoor dat dit ook zou werken als we 200 tv's in onze array zouden hebben staan. Dat er dubbele namen in zitten, is niet erg.
const listOfTVBrands = document.getElementById('listTvBrands');
const arrayOfTVBrands = inventory.map((tv) => {
  return tv.brand;
})

// De Set methode zorgt ervoor dat er een array overblijft met unieke waarden.
const uniqueArrayofTVBrands = [...new Set(arrayOfTVBrands)];

for (let i = 0; i < uniqueArrayofTVBrands.length; i++) {
  listOfTVBrands.innerHTML += `
  <li>${ uniqueArrayofTVBrands[i] }</li>
`
}

// Opdracht 3b: Schrijf de code uit 3a om naar een functie die een array met tv-objecten verwacht. Het is handig om onze scripts als functies op te zetten, zodat we ze gemakkelijk kunnen hergebruiken. Tip: vergeet deze functie -declaratie niet aan te roepen!
function createListOfTVBrands(inventory) {
  const arrayOfTVBrands = inventory.map((tv) => {
    return tv.brand;
  });
  const uniqueArrayofTVBrands = [...new Set(arrayOfTVBrands)];
  return uniqueArrayofTVBrands;
}

console.log(createListOfTVBrands(inventory));


/*----------------------
    Opdracht 4 - Functies
----------------------*/
// Maak deze gehele opdracht eerst alsof je het voor één tv doet. We gaan één tv weergeven in het volgende format:
//     Philips 43PUS6504/12 - 4K TV
//     €379,-
//     43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)

// Opdracht 4a: Maak een herbruikbare functie die een string genereert voor de naam van één tv en deze teruggeeft in het format [merk] [type] - [naam] zoals Philips 43PUS6504/12 - 4K TV of NIKKEI NH3216SMART - HD smart TV.
function getTVName(tv) {
  return `${tv.brand} ${tv.type} - ${tv.name}`;
}

// Opdracht 4b: Maak een herbruikbare functie die de prijs van één tv als parameter verwacht (zoals 379 of 159) teruggeeft in het format €379,- of €159,-.
function getPrice(tv) {
  return `€${tv.price},-`;
}

// Opdracht 4c: Maak een herbruikbare functie die een string genereert voor alle beschikbare schermgroottes van één tv. De functie geeft dit terug in het format [schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm) etc. Als een tv maar één schermgrootte heeft ([32]) wordt de output 32 inch (81 cm). Wanneer een tv vier schermgroottes heeft ([43, 50, 55, 58]) wordt de output 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm). Let op: om één string te genereren uit een array van schermgroottes zul je een for-loop voor moeten gebruiken.
function getScreenSize(tv) {
  const screenSizes = tv.availableSizes;
  const screenSizesArray = [];
  for (let i = 0; i < screenSizes.length; i++) {
    const screenSizeInch = screenSizes[i];
    const screenSizeCM = screenSizes[i] * 2.54;
    screenSizesArray.push(`${screenSizeInch} inch (${screenSizeCM} cm)`);
  }
  if (screenSizesArray.length === 1) {
    return screenSizesArray[0];
  } else {
    return screenSizesArray.join(" | ")
  }
}

// Opdracht 4d: Schrijf een script die de informatie van de Philips 43PUS6504/12 tv weergeeft op de pagina zoals onderstaand voorbeeld. Gebruik de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.
const tvName = getTVName(inventory[0]);
const tvPrice = getPrice(inventory[0]);
const tvScreenSizes = getScreenSize(inventory[0]);

const tvInfo = `${tvName}\n${tvPrice}\n${tvScreenSizes}`;

console.log(tvInfo);

// Opdracht 4e: Maak een herbruikbare functie die de informatie van alle tv's weergeeft op de pagina. Gebruik hiervoor de map-methode in combinatie met de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.
function displayTVs(inventory) {
  const tvs = inventory.map((tv) => {
    const tvName = getTVName(tv);
    const tvPrice = getPrice(tv);
    const tvScreenSizes = getScreenSize(tv);
    return `${tvName}\n${tvPrice}\n${tvScreenSizes}`;
  });
  return tvs.join("\n" + "\n");
}

console.log(displayTVs(inventory));

const allTVs = document.getElementById('allTVs');
allTVs.innerText = displayTVs(inventory);
