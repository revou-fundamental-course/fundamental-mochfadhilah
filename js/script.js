
// function-button
function btnf() {
    // validate form
    const nama = document.getElementById('pnama');
    const tanggal = document.getElementById('tanggal');
    const pesan = document.getElementById('pesan');
    const jkel = document.getElementsByName('jkel');
    const tgl = new Date;
    // validation
    const enama = document.getElementById('error-name');
    const etanggal = document.getElementById('error-tanggal');
    const ejkel = document.getElementById('error-jkel');
    const epesan = document.getElementById('error-pesan');
    // input
    const itime = document.getElementById('itime');
    const inama = document.getElementsByClassName ('inama');
    const itanggal = document.getElementById('itanggal');
    const ijkel = document.getElementById('ijkel');
    const ipesan = document.getElementById('ipesan');
    console.log(jkel);
    if ( nama.value == "") {
      enama.innerHTML = "masukkan nama terlebih dahulu";
      etanggal.innerHTML = "";
      ejkel.innerHTML = "";
      epesan.innerHTML = "";
      nama.focus;
      return;
    } else if (tanggal.value == "") {
      enama.innerHTML = "";
      etanggal.innerHTML = "masukkan tanggal lahir terlebih dahulu";
      ejkel.innerHTML = "";
      epesan.innerHTML = "";
      tanggal.focus;
      return;
    } else if (document.querySelectorAll('input[type="radio"]:checked').length === 0) {
      enama.innerHTML = "";
      etanggal.innerHTML = "";
      ejkel.innerHTML = "Pilih jenis kelamin anda";
      epesan.innerHTML = "";
      jkel.focus;
      return;
    } else if (pesan.value == "") {
      enama.innerHTML = "";
      etanggal.innerHTML = "";
      ejkel.innerHTML = "";
      epesan.innerHTML = "masukkan pesan terlebih dahulu";
      pesan.focus;
      return;
    }
    // validasi hilang
    enama.innerHTML ="";
    etanggal.innerHTML ="";
    ejkel.innerHTML ="";
    epesan.innerHTML ="";
    // box variabel
    itime.innerHTML = tgl;
    inama[0].innerHTML = nama.value;
    inama[1].innerHTML = nama.value;
    itanggal.innerHTML = tanggal.value;
    ipesan.innerHTML = pesan.value;
    for (i = 0; i < jkel.length; i++) {
        if (jkel[i].checked)
        ijkel.innerHTML = jkel[i].value;
    }
}
window.addEventListener("DOMContentLoaded", (event) => {
  const el = document.getElementById("btn1");
  if (el) {
    el.addEventListener("click", btnf, false);
  }
});