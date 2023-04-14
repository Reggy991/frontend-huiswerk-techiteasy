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