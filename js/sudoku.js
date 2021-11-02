class Game {
    constructor(options = {}) {
        this.difficulty = options.difficulty || "easy";
    }

    start() {

    }

    reset() {

    }

    clean() {

    }

    back() {

    }

    changeOption() {

    }

    changeTheme() {

    }

    suspend() {

    }

    tip() {

    }

    erase() {

    }

    pencil() {

    }
}

class Sudoku {
    row = 3;
    col = 3;

    constructor(el) {
        this.el = document.querySelector(el);
        this.data = [];
    }

    // create(el) {
    //
    // }

    fillNumber() {

    }

    computeArray() {



    }

    createArena() {
        this.cutBox(this.el, "box cell");
        document.querySelectorAll(".box").forEach((item) => {
            this.cutBox(item, "cell")
        })
    }

    set(coordinate, value) {

    }

    change(coordinate, value) {

    }

    judgeDuplicate(data) {
        let res = {};
        data.forEach((item, key) => {
            if (res[item]) {
                res[item].push(key)
            } else {
                res[item] = []
            }
        });
        return res;
    }

    cutBox(el, className) {
        const cellEl = document.createElement("div");
        cellEl.className = className;
        for (let r = 0; r < this.row; r++) {
            for (let c = 0; c < this.col; c++) {
                cellEl.setAttribute("row", r);
                cellEl.setAttribute("col", c);
                el.appendChild(cellEl.cloneNode(true));
            }
        }
    }

}
