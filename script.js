function calc(){
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var pil = document.getElementById('pil');
    var total = document.getElementById('total');
    var hasilahkir;
    if(isNaN(num1) || isNaN(num2)){
        alert('Angka yang dimasukan tidak valid atau Kosong, Cek Lagi!');
    }else{
        if(pil.value=='+'){
            hasilahkir = num1 + num2;
        }
        else if(pil.value=='-'){
            hasilahkir = num1 - num2;
        }
        else if(pil.value=='/'){
            hasilahkir = num1 / num2;
        }
        else if(pil.value=='x'){
            hasilahkir = num1 * num2;
        }
        else if(pil.value=='%'){
            hasilahkir = num1 % num2;
        }
        else if(pil.value=='^'){
            hasilahkir = num1 ** num2;
        }
    }
    total.value = hasilahkir;
}
