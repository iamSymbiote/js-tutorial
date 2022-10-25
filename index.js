console.log("javascript tutorial");

var a = 1;
var b = 2;
var c = 10;

var fun = function () {
    var a = 5
    console.log(a); // 5
    console.log(b); // 2
    var b = 3
    console.log(b); // 3
    console.log(c); // 10
    c = 9
    console.log(c); // 9
};
/*fun();

console.log(a); // 1
console.log(b); // 2
console.log(c); // 10*/

var x;
var y = 98;
var z = 99;

var fun2 = function () {
    console.log(x); // undefined
    console.log(y); // 98
    console.log(z); // 99

    if (z < 100) {
        var x = (z + 1) // (z + 1)  
        console.log(x); // 100
        console.log(z); // 99
    }

    var x = z + y

    console.log(x); // 197
    console.log(y); // 98
    console.log(z); // 99

    window.x = z
    y = (y + 1)
    z = (z + 1)
    console.log(x); // 99
    console.log(y); // 99
    console.log(z); // 100
}


/* console.log(x); // 197
console.log(y); // 99 
console.log(z); // 100
fun2()
console.log(x); // undefined
console.log(y); // 98
console.log(z); // 99 */

var f = 97;
var g = 98;
var h = 99;

var fun3 = function () {
    var n = 0;
    var m = 1;
    

    console.log(f); // undefined    
    console.log(g); // 98
    console.log(h); // undefined       // 91 ve 99. satirlarda fonksiyon icinde tekrar tanimlamaya girdikleri icin F ve H undef basarken G kendi degeriyle geliyor.

    h = (h + 1)
    
    if (h < 100) {
        var f = (h + 1) 
    
        console.log(f);  // bu ve alttaki abi en basta undefined geldigi icin konsola hic basmadi diye dusunuyorum, NaN olabilirdi belki asagidakiler gibi ama niye olmadi bilemedim, konusuruz.
        console.log(h);
    }

    for (var i = 0; i < 10; i++) {
        var n = i
        m = (m + i)
    }

    console.log(n); // 9   // alacagi deger 10'a kadar oldugundan 9 geldi.
    console.log(m); // 46  // 1 2 7 11 16 22 29 37 46 diye eklenerek gidip 10.da aldigimiz degeri yaziyor, sebep 85.satir. 85'in altina console.log(m) atip cozdum bunuda sinsinati :P

    var f = h + g

    console.log(f); // NaN // 74. satirda undef bir deger  +1 yapmaya calisinda sonuc number olmadigindan NaN atti.
    console.log(g); // 98  // bu da icerde yine tanimlanmadigi icin globalki degerini cekti.
    console.log(h); // NaN // bunun sebebi de ayni F ile.

    window.f = h
    g = (g + 1)
    var h = (h + 1)
    
    console.log(f); // NaN
    console.log(g); // 99  // 98.satirdan dolayi +1 degerle 99 yapti, digerlerinin akibeti usttekiyle ayni sonuc number olmadigindan NaN aldik.
    console.log(h); // NaN
}


console.log(f);  // 97
console.log(g); // 98
console.log(h); // 99   // bu uclu globaldekileri basti.

fun3()

console.log(f); // NaN  // global F icerde hic tanimlanmamis H'ye esitlendigi icin(97.satir) not a number.
console.log(g); // 99   // 98.satirdan dolayi +1 degerle basti.
console.log(h); // 99  // globaldeki H hic iceriye girmedigi icin kendi degeriyle geldi.