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
    
    console.log(f);
    console.log(g);
    console.log(h);

    h = (h + 1)
    
    if (h < 100) {
        var f = (h + 1) 
    
        console.log(f);
        console.log(h);
    }

    for (var i = 0; i < 10; i++) {
        var n = i
        m = (m + i)
    }

    console.log(n);
    console.log(m);

    var f = h + g

    console.log(f);
    console.log(g);
    console.log(h);

    window.f = h
    g = (g + 1)
    var h = (h + 1)
    
    console.log(f);
    console.log(g);
    console.log(h);
}


console.log(f);
console.log(g);
console.log(h);

fun3()

console.log(f);
console.log(g);
console.log(h);