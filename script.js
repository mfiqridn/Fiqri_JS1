//If Else
let nilai = 88; // Nilai Ulangan
let nilaiHuruf = "";

if (nilai >= 85) {
  nilaiHuruf = "A";
} else if (nilai >= 72) {
  nilaiHuruf = "B";
} else if (nilai >= 60) {
  nilaiHuruf = "C";
} else if (nilai >= 50) {
  nilaiHuruf = "D";
} else {
  nilaiHuruf = "E";
}

let hasilPesan = `Nilai Anda: ${nilai}<br>Nilai Huruf: ${nilaiHuruf}`;
document.getElementById("ifelse").innerHTML = hasilPesan;

//Switch Case
function hitungBiayaParkir() {
  const jenisKendaraan = document.getElementById("jenisKendaraan").value;
  let biayaParkir = 0;

  switch (jenisKendaraan) {
    case "motor":
      biayaParkir = 4000;
      break;
    case "mobil":
      biayaParkir = 10000;
      break;
    case "bus":
      biayaParkir = 15000;
      break;
    default:
      biayaParkir = "Tidak valid";
      break;
  }

  const hasil =
    biayaParkir !== "Tidak valid"
      ? `Biaya parkir untuk ${jenisKendaraan} adalah Rp ${biayaParkir}.`
      : "Pilihan kendaraan tidak valid.";

  document.getElementById("switchcase").textContent = hasil;
}

//
const klubSepakbola = [
  "Arsenal",
  "Chelsea",
  "Manchester United",
  "Manchester City",
  "Tottenham",
];
const daftarKlub = document.getElementById("daftarKlub");

// Loop untuk menambahkan setiap klub ke dalam daftar di halaman HTML
for (let i = 0; i < klubSepakbola.length; i++) {
  const klubItem = document.createElement("li");
  klubItem.textContent = klubSepakbola[i];
  daftarKlub.appendChild(klubItem);
}
