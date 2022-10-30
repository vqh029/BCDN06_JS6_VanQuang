// Bai01
const btnNumN = document.getElementById('btn_b01');

function findN01(){
    var S = 0;
    var i = 0;
    while(S < 10000)
    {
        S+=i;
        i++;
    }
    return i;
};

btnNumN.addEventListener('click', function(e){
    e.preventDefault();

    document.getElementById('value-rs1').innerHTML = "Số nguyên dương nhỏ nhất cần tìm: " + findN01();
});


// Bai 02
const btnToTalS = document.getElementById('btn_b02');

function TinhTong(x , n){
    var S = 0;
    for(var i = 1; i <= n; i ++){
        S += Math.pow(x, i);
    }
    
    return S;
}

btnToTalS.addEventListener('click', function(e) {
    e.preventDefault();
    const soX = parseInt(document.getElementById('b02-so-x').value);
    const soN = parseInt(document.getElementById('b02-so-n').value);

    document.getElementById('value-rs2').innerHTML = "Tổng S(n) = " + TinhTong(soX, soN);
});


// Bai 03
const btnGiaiThua = document.getElementById('btn_b03');

function TinhGiaiThua(n){
    var S = 1;
    for(var i = 1; i <= n; i ++){
        S *= i;
    }
    
    return S;
}

btnGiaiThua.addEventListener('click', function(e) {
    e.preventDefault();
    const soN03 = parseInt(document.getElementById('b03-so-n').value);

    document.getElementById('value-rs3').innerHTML = "Tổng S(n) = " + TinhGiaiThua(soN03);
});


// Bai 04
const btnPrintDiv = document.getElementById('btn_b04');

function PrintDiv(){
    var divchan = `<p style="background-color:red; color:white"> Div chan </p>`;
    var divle = `<p style="background-color:blue; color:white"> Div le </p>`;
    var contentDiv = "";
    
    for(var i = 0; i < 10; i ++){
        if(i % 2 == 0){
            contentDiv += divchan;
        }
        else
        {
            contentDiv += divle;
        }
    }

    return contentDiv;
}

btnPrintDiv.addEventListener('click', function(e) {
    e.preventDefault();

    document.getElementById('value-rs4').innerHTML = PrintDiv();
});