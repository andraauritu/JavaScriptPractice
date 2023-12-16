const key = "species";
const pet = { species: "dog", name: "Fido", age: 3 };
let myTriangle = {
    a: 4,
    b: 3,
    getArea: function () {
        return this.a * this.b / 2;
    },
    getHypotenuse: function () {
        return Math.sqrt(this.a * this.a + this.b * this.b);
    }
};

class Triangle {
    getArea() {
        return this.a * this.b / 2;
    }
    getHypotenuse() {
        return Math.sqrt(this.a * this.a + this.b * this.b);
    }
}