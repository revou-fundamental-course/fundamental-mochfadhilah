
// function-button
function btnf() {
    // validate form
    const nama = document.getElementById('pnama');
    const tanggal = document.getElementById('tanggal');
    const pesan = document.getElementById('pesan');
    const jkel = document.getElementsByName('jkel');
    const radio1 = document.getElementById('r1');
    const radio2 = document.getElementById('r2');
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
    if (radio1.checked == true) {
      radio1.checked = false;
    } else {
      radio2.checked =false;
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
// slider
let slideIndex = 1;
showSlides(slideIndex);
// sider tombol next dan back
function plusSlides(n) {
  showSlides((slideIndex += n));
}
// sider tombol dot
function currentSlide(n) {
  showSlides((slideIndex = n));
}
// fungsi slider
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("myslides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  };
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}