function center(x,y){
    return (x===0 && y===0)?10:0;
}

function star(x,y){
    return ((Math.sqrt(1-(Math.sqrt(1-Math.abs(x)))**4))+Math.abs(y)<1)?4:0;
}

function rhomb(x,y){
    return (Math.abs(x)+Math.abs(y)<=1)?3:0;
}

function circle(x,y){
    return ((x*x)+(y*y)<=1)?2:0;
}

function square(x,y){
    return (x>=-1 && x<=1 && y<=1 && y>=-1)?1:0;
}

function shot(x,y){
    return center(x,y)||star(x,y)||rhomb(x,y)||circle(x,y)||square(x,y);
}

function shotxy(x,y){
    var result = {
        score:0,
        accuracy:0
    };
    result.score += shot(x,y);
    if (result.accuracy>0){
        if (shot(x,y)==1) {
            result.accuracy+=0.1;
            result.accuracy=result.accuracy/2;
        }
        if (shot(x,y)==2) {
            result.accuracy+=0.2;
            result.accuracy=result.accuracy/2;
        }
        if (shot(x,y)==3) {
            result.accuracy+=0.3;
            result.accuracy=result.accuracy/2;
        }
        if (shot(x,y)==4) {
            result.accuracy+=0.4;
            result.accuracy=result.accuracy/2;
        }
        if (shot(x,y)==10) {
            result.accuracy+=1;
            result.accuracy=result.accuracy/2;
        }
    }else {
        if (shot(x,y)==1) {
            result.accuracy+=0.1;
        }
        if (shot(x,y)==2) {
            result.accuracy+=0.2;
            
        }
        if (shot(x,y)==3) {
            result.accuracy+=0.3;
            
        }
        if (shot(x,y)==4) {
            result.accuracy+=0.4;
        }
        if (shot(x,y)==10) {
            result.accuracy+=1;
        }
    }
    return result;
}

function shotsToTarget(n){
    var result = {
        score:0,
        accuracy:0
    };
    if (!isNaN(n)&&n>0){
        var shet=0;
        for (var i=0;i<n;i++){
            x=Math.random();
            y=Math.random();
            result.score += shot(x,y);
            if ((shot(x,y)-0)>1) shet+=1;
        }
        if (result.accuracy>0){
            if (shot(x,y)==1) {
                result.accuracy+=0.1;
                result.accuracy=result.accuracy/2;
            }
            if (shot(x,y)==2) {
                result.accuracy+=0.2;
                result.accuracy=result.accuracy/2;
            }
            if (shot(x,y)==3) {
                result.accuracy+=0.3;
                result.accuracy=result.accuracy/2;
            }
            if (shot(x,y)==4) {
                result.accuracy+=0.4;
                result.accuracy=result.accuracy/2;
            }
            if (shot(x,y)==10) {
                result.accuracy+=1;
                result.accuracy=result.accuracy/2;
            }
        }else {
            if (shot(x,y)==1) {
                result.accuracy+=0.1;
            }
            if (shot(x,y)==2) {
                result.accuracy+=0.2;
                
            }
            if (shot(x,y)==3) {
                result.accuracy+=0.3;
                
            }
            if (shot(x,y)==4) {
                result.accuracy+=0.4;
            }
            if (shot(x,y)==10) {
                result.accuracy+=1;
            }
        }
    }
    return result;
}