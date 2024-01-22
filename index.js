const mahasiswaNim = "20220040022";
const updatedData = {
  nama: "Rizki Panca Pamungkas",
  gender: "L",
  prodi: "TI",
  alamat: "Cidahu",
};

fetch(`http://localhost:3000/mahasiswa/${mahasiswaNim}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(updatedData),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
