// ekran basma methodu
function log(text){
    document.write(text + "</br>")
}

//! Dizi Methdoları
// var markalar  = ["BMW","Mercedes"]

// log("<b>Markalar</b>: " + markalar)

// //* push() > dizinin sonuna eleman ekler 
// markalar.push("Porsche")
// log("<b>Push'tan sonra</b>: " + markalar)

// //* pop() > dizinin sonun eleman siler ve getirir
// var silinen =  markalar.pop()
// log("<b>Poptan sonra</b>: " + markalar)
// log("<b>Silinen</b>: " + silinen)

// //* unshift() > dizinin başına eleman ekler
// markalar.unshift("Ferrari")
// markalar.unshift("Lambo")
// markalar.unshift("Lexus")
// log("<b>unshift'ten sonra</b>: " + markalar)

// //* shift() > dizinin ilk elemanını sile ve getirir
// var silinen2 = markalar.shift()
// log("<b>shift'ten sonra</b>: " + markalar)
// log("<b>Silinen</b>: " + silinen2)

// //* slice() > dizinin bir kısmıyla yeni dizi oluşturmaya yarar
// var yeniDizi = markalar.slice(1,3)
// log("<b>slice'tan sonra yeni dizi</b>: " + yeniDizi)
// log("<b>slice'tan sonra markalar</b>: " + markalar)

// //* reverse() > diziyi ters çevirmeye yarar
// markalar.reverse();
// log("<b>reverse'ten sonra</b>: " + markalar)

// //* fill() > diziyi bir elemanla doldurmaya yarar
// markalar.fill("Fiat",1,3)
// log("<b>fill'den sonra</b>: " + markalar)

// //* indexOf() > elemanın sırasınnı bulamya yarar 
// var sira = markalar.indexOf("Lambo")
// log("<b>Bulunan sira:</b>" + sira)

// //* includes() > dizide bu eelman var mı kontrol etme
// var varmi = markalar.includes("Honda")
// log("<b>Honda içeriyor mu?</b> " + varmi)
 
// //* concat() > iki dizyi birleştirmeye yarar
// var birlesen = markalar.concat(["Honda","Ford"]) ;
// log("<b>Concat'ten sonra</b> " + birlesen)

var liderlikTablo = [
    {
        id:1,
        name:"Ahmet",
        point:2454,
    },
    {
        id:2,
        name:"Mehmet",
        point:1246,
    },
    {
        id:3,
        name:"Veli",
        point:6032,
    },
     {
        id:4,
        name:"Fatma",
        point:3468,
    }
]

console.table(liderlikTablo)

//! NOT
//- Buradan sonraki dizi methodlarının tamımı diziyi dönen
//- yani dizideki bütün elemalar için tanımladığımız 
//- fonksiyonu çalıştıran methodlar

//* find() 
//- bir koşula göre dizideki elemanı bulmaya yarar
//- aynı koşula uyan birden fazla eleman varsa ilkini döndürür
var bulunan =  liderlikTablo.find(function(kisi){
    return kisi.name === "Mehmet"
})
console.log(bulunan)


//* every() > dizideki bütün elemanlar koşula uyuyor mu kontrol etme 
var sonuc = liderlikTablo.every(function(kisi){
    return kisi.point > 2000
});

console.log("Every Sonuç:" +sonuc)

//* some() > dizideki en az bir eleman koşula uyuyor mu kontrol etme
var sonuc2 = liderlikTablo.some(function(kisi){
    return kisi.point > 5000
})

console.log("Some Sonuç:" + sonuc2)

//* findIndex() > elmanın sırasını bulma
var sonuc3 = liderlikTablo.findIndex(function(kisi){
    return kisi.name === "Veli"
})

console.log("Velinin Sırası",sonuc3)

//* filter() > koşula uyan elemanlar ile yeni dizi oluşturur
var yeniDizi2 = liderlikTablo.filter(function(kisi){
    return kisi.point > 3000
});

console.table(yeniDizi2)

//* map() > dizideki bütün elemaları dönüp yeni dizi oluşturur
var yeniDizi3 = liderlikTablo.map(function(kisi){
    return{
    name: kisi.name,
    point: kisi.point + 1000
   }
})

console.table(yeniDizi3)

//* forEach() > dieideki her bir eleman için fonk. çalıştırmaya yar
liderlikTablo.forEach(function(kisi,key){
    document.write(kisi.name + key + "<br />")
})

//* reduce() > dizideki bütün elemanlar için 4 işlem yapar
const toplam_puan = liderlikTablo.reduce(function(toplam,kisi){
    return toplam + kisi.point
},0)

console.log(toplam_puan)

//* sort() > diziyi sıralar
// iki farklı elemanı paramete olarak alır
// sayı değeri ise karşılaştırmak istrdeiklerimizi
// birbirinden çıkarırırız
liderlikTablo.sort(function(kisi1,kisi2){
    return kisi2.point - kisi1.point
})

console.table(liderlikTablo);

// stringlerde localCompare yaparız
liderlikTablo.sort(function(kisi1,kisi2){
    return kisi1.name.localeCompare(kisi2.name)
})

console.table(liderlikTablo);


//* splice() > dizyi güncellemey yarar
// 1. çıkarılcak elemanın sırası
// 2. bu sıradan itibaren kaç eleman çıkıcak
// 3. çıkanların yerine ne gelicek

liderlikTablo.splice(2,1,{name:"Muzaffer",id:9,point:1230})

console.table(liderlikTablo);
