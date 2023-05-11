var cel = document.getElementById("ct");
var far = document.getElementById("ft");
var kel = document.getElementById("kt");

cel.addEventListener('input',function(){
    let c = Number(this.value);
    let f = (c*9/5)+32;
    let k = (c+273);
    f=conv(f);
    k=conv(k);
    far.value=f;
    kel.value=k;
});

far.addEventListener('input',function(){
    let f = Number(this.value);
    let c = (f-32)*5/9;
    let k = (c+273);
    c=conv(c);
    k=conv(k);
    cel.value=c;
    kel.value=k;
});

kel.addEventListener('input',function(){
    let k = Number(this.value);
    let c = (k-273);
    let f = (c*9/5)+32;   
    c=conv(c);
    f=conv(f);
    far.value=f;
    cel.value=c;
});

function conv(value1){
    if(!Number.isInteger(value1)){
        value1=value1.toFixed(2);
    }
    return value1;
}

function reset(){
    location.reload();
}

function gt(num){
    switch(num){
        case 1:
            window.open("https://www.facebook.com/profile.php?id=100079956308306&mibextid=ZbWKwL","_blank");
            break;
        case 2:
            window.open("https://instagram.com/ankit_b15w45?igshid=ZGUzMzM3NWJiOQ==","_blank");
            break;
        case 3:
            window.open("https://www.youtube.com/@factx9641","_blank");
            break;
        case 4:
            window.open("https://www.linkedin.com/in/ankit-biswas-a03899257","_blank");
            break;
        case 5:
            window.open("https://github.com/ANKIT-BISWAS-20","_blank");
            break;
        case 6:
            window.open("https://ankit-biswas-20.github.io/BISWAS-INDUSTRIES","_blank");
            break;

    }
}