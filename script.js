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
document.getElementById("nilai").innerHTML = hasilPesan;

// Nested If
const hari = "Minggu";
const cuacaHujan = true;

let pesan = "";

if (hari === "Minggu") {
  if (cuacaHujan) {
    pesan =
      "Hari Minggu pagi hujan adalah waktu yang tepat untuk makan Indomie!";
  } else {
    pesan =
      "Hari Minggu yang cerah adalah waktu yang sempurna untuk piknik bersama keluarga.";
  }
} else {
  pesan = "Hari ini bukan hari Minggu, jadi berencana sesuai dengan hari Anda.";
}

document.getElementById("hasilAktivitas").textContent = pesan;

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

  document.getElementById("kendaraan").textContent = hasil;
}

//For Statement
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

// While
const buah = ["Apel", "Semangka", "Jeruk", "Melon", "Pisang"];
let buahText = "";
let i = 0;

while (i < buah.length) {
  buahText += buah[i] + "<br>";
  i++;
}

document.getElementById("buah").innerHTML = buahText;

// Do While
let text = "";
let j = 1;

do {
  text += j + "<br>";
  j++;
} while (j < 6);

document.getElementById("angka").innerHTML = text;

// Function
function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) {
    return "Good morning";
  } else if (hour < 18) {
    return "Good afternoon";
  } else {
    return "Good evening";
  }
}

const greeting = getGreeting();
document.getElementById("waktu").innerHTML = greeting;
