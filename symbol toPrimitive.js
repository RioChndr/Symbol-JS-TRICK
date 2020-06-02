function Uang(jumlah, mata_uang) {
    this.jumlah = jumlah;
    this.mata_uang = mata_uang;
}

Uang.prototype[Symbol.toPrimitive] = function (hint) {
    var result;
    switch (hint) {
        case 'string':
            result = this.jumlah + " " + this.mata_uang
            break;
        case 'number':
            result = this.jumlah;
            break;
        case 'default':
            result = this.jumlah + " " + this.mata_uang
            break
    }
    return result;
}

var harga = new Uang(2000, "Rupiah")
console.log("Harga baju : " + harga) // 
console.log(harga * 2)
console.log(String(harga))

/**
 * Output
    Harga baju : 2000 Rupiah
    4000
    2000 Rupiah
 */