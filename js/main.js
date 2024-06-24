/*function square(){
    var n = prompt('количество выстрелов')-0;
    var allscore=0;
    for (var i=0;i<n;i++){
        var score=0;
        var x=Math.random();
        var y=Math.random();
        if (x>=-1 && x<=1 && y<=1 && y>=-1){
            score = 1;
            if ((x*x)+(y*y)<=1){
                score = 2;
                if (Math.abs(x)+Math.abs(y)<=1){
                    score=3;
                    if ((Math.sqrt(1-(Math.sqrt(1-Math.abs(x)))**4))+Math.abs(y)<1){
                        score=4;
                        if ( x === 0 && y === 0){
                            score=10;
                        }
                    }
                }
            }
        }
        allscore+=score;
    }
    console.log('100% попаданий');
    console.log('Очки:');
    console.log(allscore);
}

function circle(){
    var n = prompt('количество выстрелов')-0;
    var allscore=0;
    var pp=0;
    for (var i=0;i<n;i++){
        var score=0;
        var x=Math.random();
        var y=Math.random();
        if ((x*x)+(y*y)<=1){
            score = 2;
            if (Math.abs(x)+Math.abs(y)<=1){
                score=3;
                if ((Math.sqrt(1-(Math.sqrt(1-Math.abs(x)))**4))+Math.abs(y)<1){
                    score=4;
                    if ( x === 0 && y === 0){
                        score=10;
                    }
                }
            }
        }
        if (score>0) pp+=1;
        allscore+=score;
    }
    console.log('Частота попаданий:');
    console.log(pp/n);
    console.log('Очки:');
    console.log(allscore);
}

function rhomb(){
    var n = prompt('количество выстрелов')-0;
    var allscore=0;
    var pp=0;
    for (var i=0;i<n;i++){
        var score=0;
        var x=Math.random();
        var y=Math.random();
        if (Math.abs(x)+Math.abs(y)<=1){
            score=3;
            if ((Math.sqrt(1-(Math.sqrt(1-Math.abs(x)))**4))+Math.abs(y)<1){
                score=4;
                if ( x === 0 && y === 0){
                    score=10;
                }
            }
        }
        if (score>0) pp+=1;
        allscore+=score;
    }
    console.log('Частота попаданий:');
    console.log(pp/n);
    console.log('Очки:');
    console.log(allscore);
}

function star(){
    var n = prompt('количество выстрелов')-0;
    var allscore=0;
    var pp=0;
    for (var i=0;i<n;i++){
        var score=0;
        var x=Math.random();
        var y=Math.random();
        if ((Math.sqrt(1-(Math.sqrt(1-Math.abs(x)))**4))+Math.abs(y)<1){
            score=4;
            if ( x === 0 && y === 0){
                score=10;
            }
        }
        if (score>0) pp+=1;
        allscore+=score;
    }
    console.log('Частота попаданий:');
    console.log(pp/n);
    console.log('Очки:');
    console.log(allscore);
}

var cell=prompt('Выберите мишень (квадрат, круг, ромб, звезда):');
if (cell=='квадрат') square();
if (cell=='круг') circle();
if (cell=='ромб') rhomb();
if (cell=='звезда') star();*/

window.onload = function(){
    //console.log('pisyapopa');
    var points = 0;
    var acc = 0;
    function handler(){
        var n = document.getElementById("n").value-0;
        var radius = document.getElementById("radius").value-0;
        var x = document.getElementById("x").value-0;
        var y = document.getElementById("y").value-0;
        points += shotsToTarget(n).score;
        if (acc>0) {
            acc += shotsToTarget(n).accuracy;
            acc = acc/2;
        } else acc = shotsToTarget(n).accuracy; 
        
        points+=shotxy(x,y).score;
        if (acc>0) {
            acc += shotxy(x,y).accuracy;
            acc = acc/2;
        } else acc = shotxy(x,y).accuracy;
        //if (shot(x,y)>0) points.accuracy=1;
        document.getElementById("result").innerHTML="Очки:"+ JSON.stringify(points);
        document.getElementById("acc").innerHTML="Точность:"+ JSON.stringify(acc);

    }
    
function chistyulya(){
   points=0;
   document.getElementById("result").innerHTML="Результат:0";
   document.getElementById("acc").innerHTML="Точность:0";
   document.getElementById('n').value = '';
   document.getElementById('radius').value = '';
   document.getElementById('x').value = '';
   document.getElementById('y').value = '';
   acc=0;
}
    function random(){
        console.log('pisyapopa');
    }

    function xy(){
        console.log('pisyapopa');
    }

    var button = document.getElementById("pressMe");
    button.addEventListener("click", handler);
    var clean = document.getElementById("clean");
    clean.addEventListener("click", chistyulya);
    var random = document.getElementById("random");
    random.addEventListener("click", random);
    var xy = document.getElementById("xy");
    xy.addEventListener("click", xy)
    
};