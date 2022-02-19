const IsimK = document.getElementById('IsimK');

const SoyisimK = document.getElementById('SoyisimK');

const btnVeri = document.getElementById('btnVeri');


 btnVeri.onclick = function () {

    const isim = IsimK.value;

    const soyisim = SoyisimK.value;

     console.log(isim);
     console.log(soyisim);

     if (isim && soyisim) {

     localStorage.setItem(isim, soyisim);

     location.reload();
    }
}
