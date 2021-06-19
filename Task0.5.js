function findAreaOfTriangle(base, length, height) {
    var semiP = (base + length + height) / 2;
    var area;
    return area=Math.sqrt(semiP*(semiP-base)*(semiP-length)*(semiP-height));
}

console.log(findAreaOfTriangle(3, 4, 5));