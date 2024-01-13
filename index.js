//  Rest / Spread Operator  ( toplama  yayma operatörü )
//  Rest operatöründen Object / Array destructuring içinde bahsetmiştik

// function topla (sayi1, sayi2, sayi3) {
//     return sayi1 + sayi2 + sayi3;
// }

// const sayilar = [1, 2, 3];

// console.log(topla(sayilar)) //1,2,3undefinedundafined

// console.log(topla.apply(null, sayilar));

// console.log(topla(...sayilar));

// const sayilar = [1, 2, 3];
// const sayilar1 =[4, 5, 6];

// const biresmisDizi = sayilar.concat(sayilar1);

// const biresmisDizi = [...sayilar, ...sayilar1];

// console.log(biresmisDizi);

const kullanici = { isim: "Mehmet", yas: 35};
const adres = { sehir: "Istanbul", semt: "Bakirkoy"};

const birlesmisObje = { ...kullanici, ...adres};

console.log(birlesmisObje);