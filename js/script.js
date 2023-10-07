// if,else,nested if

let angka = 20;
if (angka < 20) {
  console.log("Nilai kurang dari 20");
} else {
  console.log("Nilai lebih dari 20");
}

let nilai = 90;
if (nilai >= 80) {
  console.log("Nilai A");
} else if (nilai >= 70) {
  console.log("Nilai B");
} else if (nilai >= 60) {
  console.log("Nilai C");
} else if (nilai >= 50) {
  console.log("Nilai D");
} else {
  console.log("Nilai E");
}

// switch case
let hari = "Minggu";

switch (hari) {
  case "Senin":
    console.log("Anda memilih Belajar Hari Senin");
    break;

  case "Selasa":
    console.log("Anda memilih Belajar Hari Selasa");
    break;

  case "Rabu":
    console.log("Anda memilih Belajar Hari Rabu");
    break;

  case "Kamis":
    console.log("Anda memilih Belajar Hari Kamis");
    break;

  case "Jumat":
    console.log("Anda memilih Belajar Hari Jumat");
    break;

  default:
    console.log(`Hari ${hari}, Anda Libur`);
    break;
}

//  for statement
let buah = ["Apel", "Anggur", "Orange", "Avocado"];
for (let jumlahBuah = 0; jumlahBuah < buah.length; jumlahBuah++) {
  const jenisBuah = buah[jumlahBuah];
  console.log(jenisBuah);
}

// while, do while
let no = 1;
while (no <= 10) {
  console.log(`${no} Saya belajar while`);
  no++;
}

let iterasi = 1;
do {
  console.log(`${iterasi} Saya Belajar do while`);
  iterasi++;
} while (iterasi < 5);

// function
function hasilBelajar(nilaiSaya) {
  if (nilaiSaya >= 80) {
    console.log("Nilai A");
  } else if (nilaiSaya >= 70) {
    console.log("Nilai B");
  } else if (nilaiSaya >= 60) {
    console.log("Nilai C");
  } else if (lnilaiSaya >= 50) {
    console.log("Nilai D");
  } else {
    console.log("Nilai E");
  }
}

hasilBelajar(90);
