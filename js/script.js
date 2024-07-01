
// function-button
function btnf() {
    // validate form
    const nama = document.getElementById('pnama');
    const tanggal = document.getElementById('tanggal');
    const pesan = document.getElementById('pesan');
    const jkel = document.getElementsByName('jkel');
    const tgl = new Date;
    const itime = document.getElementById('itime');
    const inama = document.getElementsByClassName ('inama');
    const itanggal = document.getElementById('itanggal');
    const ijkel = document.getElementById('ijkel');
    const ipesan = document.getElementById('ipesan');
    if ( nama.value == "" || tanggal.value == ""  || jkel.value == "" || pesan.value == "") {
        alert("lengkapi data anda terlebih dahulu");
        document.getElementById("pnama").focus;
        return;
    }
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