// Functions

// function yasHesapla(dogumYili){
//    return 2020-dogumYili;
// }

// let ageSakir = yasHesapla(1984);
// let ageFatma = yasHesapla(1987)
// console.log(ageSakir);
// console.log(ageFatma);

// function emekliligeKacYilKladi (dogumYili,isim){
//    let yas = yasHesapla(dogumYili);
//    let emeklilik = 65 - yas

//    if (emeklilik > 0){
//       console.log(`${isim} emekli olmana ${emeklilik} yil kaldi.`);
//    }else{
//       console.log('zaten emeklisin');
//    }
// }

// emekliligeKacYilKladi(1984,'sakir');


// function sum(a,b){
//    let c = a+b;
//    return c;
// }
// console.log(sum(3,5));

// Function Expressions


// ES& ile gelen özellik default parametre

// const sum = function(a=0,b=0){
//    let c = a+b;
//    return c;
// }
// console.log(sum(3,5));(
// console.log(sum(22));



//arguments kullanimi
// function sumAll(){
//    var total = 0;
//    for(let i =0; i<arguments.length;i++){
//       total+=arguments[i];
//    }
//    return total;
// }
// console.log(sumAll(3,5,8));
// console.log(sumAll(5,7,9,34,56));

var hesapA = {
   ad: 'sakir tufan',
   hesapNo: '12345678',
   bakiye: 2000,
   ekHesap: 1000
}
var hesapB = {
   ad: 'fatma tufan',
   hesapNo: '134657899',
   bakiye: 3000,
   ekHesap: 2000
}

function paraCek(hesap,miktar){
   if(hesap.bakiye >= miktar){
      hesap.bakiye -= miktar;
      console.log(`Merhaba ${hesap.ad} paranizi alabilirsiniz.`);
   }else{
      let toplam = hesap.bakiye + hesap.ekHesap;
      if(toplam>=miktar){
         if(confirm('bakiye yetersiz..ek hesabinizi kullanmak istermisiniz?')){
            var bakiye = hesap.bakiye;
            var ekHesap = miktar-bakiye;
            hesap.bakiye = 0;
            hesap.ekHesap -= ekHesap;
            console.log(`Merhaba ${hesap.ad} paranizi alabilirsiniz`)
         }else{
            console.log(`Merhaba ${hesap.ad} paranizi alabilirsiniz`);
         }
      }else{
         console.log('bakiye yetersiz')
      }
   }
}

paraCek(hesapA, 2000);
paraCek(hesapA,1100);