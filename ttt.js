let start = true;
let win = [
    ['0', '1', '2'], //1
    ['0', '3', '6'], //2
    ['0', '4', '8'], //3
    ['1', '4', '7'], //4
    ['2', '5', '8'], //5
    ['3', '4', '5'], //6
    ['6', '7', '8'], //7
    ['2', '4', '6']  //8
]
let player1 = "X";
let player2 = "0"
let a = document.querySelectorAll(".btn");
let b = [
    a[0],
    a[1],
    a[2],
    a[3],
    a[4],
    a[5],
    a[6],
    a[7],
    a[8]
]
console.log(a)
a.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.innerHTML == "") {
            if (start) {
                btn.innerText = player1
                start = false
            }
            else {
                btn.innerText = player2
                start = true;
            }
        }
        for (var i = 0; i <= 6; i++) {
            for (var j = 1; j <= 7; j++) {
                for (var k = 2; k < 9; k++) {
                    if (i == j || i == k || k == j) {

                    }
                    else {
                        let d = [b[i].id, b[j].id, b[k].id]
                        let c = [b[i].innerText, b[j].innerText, b[k].innerText]
                        var allX = c.every(element => element === 'X');
                        var all0 = c.every(element => element === '0');
                        if (allX) {
                            for(var z=0;z<=8;z++){
                              if(JSON.stringify(d)==JSON.stringify(win[z])){
                                //JSON.stringify is used to convert a array into string . we cannot compare 2 array directly because in js arrays are of type object and we cannot compare 2.
                                console.log("X win")
                                let w = document.querySelector(".win")
                                w.innerHTML = "<p>X WIN</p>"
                              }
                            }
                        }
                        if (all0) {
                            for(var z=0;z<=8;z++){
                              if(JSON.stringify(d)==JSON.stringify(win[z])){
                                console.log("0 win") 
                                let w = document.querySelector(".win")
                                w.innerHTML = "<p>0 WIN</p>"
                              }
                            }
                        }
                    }
                }
            }
        }
    });
});

