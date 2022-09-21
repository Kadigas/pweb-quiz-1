function submit(){
    var nama1 = document.getElementById("nama1").value;
    var ttl = document.getElementById("ttl").value;
    var unit = document.getElementById("unit").value;
    var kelurahan = document.getElementById("kelurahan").value;
    var kecamatan = document.getElementById("kecamatan").value;
    var nomor = document.getElementById("nomor").value;
    var kepala = document.getElementById("kepala").value;
    var nama2 = document.getElementById("nama2").value;

    var letters = /^[A-Za-z]+$/;
    var number = /^([0-9])+$/;

    if(nama1==''||ttl==''||unit==''||kelurahan==''||kecamatan==''||nomor==''||kepala==''||nama2==''){
        alert("Masukkan data dengan benar!");
    }
    else if(!letters.test(nama1)){
        alert('Nama harus berupa alfabet!');
    }
    else if(!number.test(nomor)){
        alert('Nomor telepon harus berupa angka!');
    }
    else if(nama2!=nama1){
        alert("Konfirmasi nama tidak sama!");
    }
    else{
        alert("Pendaftaran berhasil!")
        window.location="https://kadigas.github.io/web-event/";
    }
}