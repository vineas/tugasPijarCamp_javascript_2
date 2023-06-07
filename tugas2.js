// // // nomer 1
// // // kecuali : split, reverse, join, foreach, map

// // // filter()
// // // Metode filter() membuat larik baru yang diisi dengan elemen yang lulus uji yang disediakan oleh suatu fungsi.
// const ages = [32, 33, 16, 40];
// const hasil = ages.filter(checkAdult);
// function checkAdult(age) {
//   return age >= 18;
// }
// console.log(hasil);

// // // length()
// // // // Properti length menetapkan atau mengembalikan jumlah elemen dalam array.
// // const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let panjang = fruits.length;
// console.log(panjang);

// // // include()
// // // // Metode include() mengembalikan nilai true jika array berisi nilai yang ditentukan.
// // const buah = ["Banana", "Orange", "Apple", "Mango"];
// let tampil = buah.includes("Mango");
// console.log(tampil);

// // // indexOf()
// // // // Metode indexOf() mengembalikan indeks pertama (posisi) dari nilai yang ditentukan.
// // // // Metode indexOf() mengembalikan -1 jika nilainya tidak ditemukan.
// // const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let index = fruits.indexOf("Apple");
// console.log(index);

// // // splice()
// // // // Metode splice() menambahkan dan/atau menghapus elemen array.
// // // // Metode splice() menimpa array asli.
// // const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi");
// console.log(fruits);

// // // slice()
// // // // Metode slice() mengembalikan elemen yang dipilih dalam array, sebagai array baru.
// // // // Metode slice() memilih dari awal yang diberikan, hingga akhir yang diberikan (tidak termasuk).
// // const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1, 4);
// console.log(citrus);

// // // push()
// // // // Metode push() menambahkan item baru ke akhir array.
// // // // Metode push() mengubah panjang array.
// // const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push("Kiwi");
// console.log(fruits);

// // // pop()
// // // // Metode pop() menghapus (muncul) elemen terakhir dari sebuah array.
// // // // Metode pop() mengubah array asli.
// // const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.pop();
// console.log(fruits);

// // // toString()
// // // Metode toString() mengembalikan string dengan nilai array yang dipisahkan dengan koma.
// // // Metode toString() tidak mengubah larik asli.
// // const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let text = fruits.toString();
// console.log(fruits);

// // // valueOf()
// // // // Metode valueOf() mengembalikan array itu sendiri.
// // // // Metode valueOf() tidak mengubah array asli.
// // let text = "Hello World!";
// let result = text.valueOf();
// console.log(result);

// // nomer 2
const names = [
  "Abigail",
  "Alexandra",
  "Alison",
  "Amanda",
  "Angela",
  "Bella",
  "Carol",
  "Caroline",
  "Carolyn",
  "Deirdre",
  "Diana",
  "Elizabeth",
  "Ella",
  "Faith",
  "Olivia",
  "Penelope",
];
const validation = (kataKunci, batas) => {
  if (!kataKunci) throw "Kata kunci Tidak boleh kosong";
  if (typeof kataKunci !== "string") throw "Kata kunci harus string";
  if (typeof batas !== "number") throw "Batas harus number";
}

const searchName = (kataKunci, batas, callback, validation) => {
  try {
    validation(kataKunci, batas);
  }
  catch (err) {
    return console.log(err);
  }

  const searchResults = names
    .filter((name) => name.toLowerCase().includes(kataKunci.toLowerCase()))
    .slice(0, batas);
  callback(searchResults);
}

const callback = (result) => {
  console.log(result);
}

searchName("ca", 2, callback, validation);



// nomer 3
const valid = (nilaiAwal, nilaiAkhir, dataArray) => {
  if (typeof nilaiAwal !== "number" || typeof nilaiAkhir !== "number") {
    throw "Nilai awal dan akhir harus number";
  }
  if (nilaiAwal > nilaiAkhir) {
    throw "Nilai akhir harus lebih besar";
  }
  if (dataArray.length <= 5) {
    throw "Jumlah angka dalam dataArray harus lebih dari 5";
  }
};

const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray, valid) => {
  try {
    valid(nilaiAwal, nilaiAkhir, dataArray);
  } catch (err) {
    return console.log(err);
  }
  let result = dataArray.filter(
    (angka) => angka > nilaiAwal && angka < nilaiAkhir
  );
  if (result.length > 0) {
    result.sort((a, b) => {
      return a - b;
    });
    callback(result);
  } else {
    console.log("nilai tidak ditemukan");
  }
};

const callback = (result) => {
  console.log(result);
};

seleksiNilai(6, 22, [2, 5, 4, 14, 17, 30, 8], valid);
seleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8], valid);
seleksiNilai(5, 17, [12, 25, 4], valid);
seleksiNilai(5, 17, [2, 25, 4, 1, 30, 18], valid);
