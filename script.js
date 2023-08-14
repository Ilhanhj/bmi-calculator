const btn = document.querySelector(".button1");
const btn2 = document.querySelector(".button2");

btn.addEventListener("click", function () {
  let bb = document.querySelector("#bb").value;
  let tinggi = document.querySelector("#tinggi").value;
  const status = document.querySelectorAll(".status");

  let hasil = (bb / (tinggi * tinggi)) * 10000;

  for (let i = 0; i < status.length; i++) {
    if (hasil < 18.5 && hasil > 0) {
      status[0].classList.add("bb-bahaya");
      status[1].classList.add("bb-bahaya");
      document.querySelector("#hasil").classList.add("bb-bahaya");
      document.querySelector("#pHasil").innerHTML =
        "Jika Anda menerima perawatan untuk gangguan makan, perangkat ini TIDAK boleh digunakan.Mungkin ada penyebab medis yang mendasari berat badan Anda, atau diet Anda mungkin tidak memberi Anda cukup kalori. Kami menyarankan Anda mendiskusikan hal ini dengan dokter umum Anda.";
    } else if (hasil > 18.5 && hasil < 22.9) {
      status[2].classList.add("bb-aman");
      status[3].classList.add("bb-aman");
      document.querySelector("#hasil").classList.add("bb-aman");
      document.querySelector("#pHasil").innerHTML = "Kami sarankan Anda memperhatikan berat badan Anda. tetap berolahraga dan beraktivitas untuk membantu Anda tetap aktif.";
    } else if (hasil > 23.0 && hasil < 24.9) {
      status[4].classList.add("bb-lumayan");
      status[5].classList.add("bb-lumayan");
      document.querySelector("#hasil").classList.add("bb-lumayan");
      document.querySelector("#pHasil").innerHTML =
        "Anda berada dalam kisaran berat badan yang sehat, tetapi di ujung yang lebih tinggi. Perhatikan berat badan Anda dan cobalah untuk tetap berada dalam kisaran yang sehat. Perbanyak olahraga agar membantu Anda meningkatkan kesehatan Anda secara keseluruhan.";
    } else if (hasil > 25.0 && hasil < 50.0) {
      status[6].classList.add("bb-bahaya");
      status[7].classList.add("bb-bahaya");
      document.querySelector("#hasil").classList.add("bb-bahaya");
      document.querySelector("#pHasil").innerHTML =
        "Menurunkan dan mempertahankan 5% dari berat badan Anda dapat memberikan manfaat kesehatan, seperti menurunkan tekanan darah dan mengurangi risiko terkena diabetes tipe 2. Seiring waktu Anda harus bekerja untuk mencapai berat badan yang lebih sehat.Jika Anda mengkhawatirkan berat badan Anda, bicarakan dengan dokter umum Anda.";
    } else if ((hasil = isNaN)) {
      document.querySelector("#hasil").innerHTML = "Masukkan Angka dengan benar ";
    }
  }

  document.querySelector("#hasil").innerHTML = "BMI Kamu <br>" + hasil.toFixed(1);
});
