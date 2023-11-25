## 📂 Functions

Aturan Penulisan Function :

- Nama fungsi hanya boleh menggunakan huruf (a-z, A-Z), angka (0-9), simbol $ dan _
- Nama fungsi tidak boleh dimulai dengan angka 
- Nama Fungsi bersifat case-sensitive

Saran terbaik :
- Nama fungsi sebaiknya deskriptif dan menjelaskan tugas atau tujuan dari fungsi tersebut
- Nama fungsi sebaiknya menggunakan Camel Case

Contoh penulisan fungsi biasa:
### Contoh Function

```js
function ExampleFunction() {
  // tulis kode anda di sini

}

```
### Function Parameters

Parameter bisa dimasukan kedalam function, ditulis didalam kurung ( ).

```js
function Example(name, age) {
    // masukan kode anda

}

```
### Arrow Functions

Arrow Functions menggunakan sintaksis panah => untuk mendefinisikan fungsi, Penggunaan kurung kurawal bersifat Optional.

```js
const Example = (a, b) => {
    return a * b;
};
```

Contoh Arrow Function tanpa kurung kurawal : 

```js
const ExampleTwo = number => number * 5;
```

Catat : ini bisa dipakai jika hanya ada satu pernyataan pengembalian (return)

### Immediately-Invoked Function Expression (IIFE)

