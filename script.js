function hitung() {
  let tipe1 = document.getElementById("tipe1").value;
  let tipe2 = document.getElementById("tipe2").value;
  let nilai1 = parseFloat(document.getElementById("nilai1").value);
  let nilai2 = parseFloat(document.getElementById("nilai2").value);

  let V, I, R;

  if (tipe1 === tipe2) {
    alert("Tidak boleh memilih jenis yang sama!");
    return;
  }

  if (isNaN(nilai1) || isNaN(nilai2)) {
    alert("Harap isi semua nilai!");
    return;
  }

  if (tipe1 === "V") V = nilai1;
  if (tipe1 === "I") I = nilai1;
  if (tipe1 === "R") R = nilai1;

  if (tipe2 === "V") V = nilai2;
  if (tipe2 === "I") I = nilai2;
  if (tipe2 === "R") R = nilai2;

  let hasilText = "";
  let langkah = "";

  function formatAngka(angka) {
    return Number.isInteger(angka) ? angka : parseFloat(angka.toFixed(2));
  }

  if (V === undefined) {
    V = I * R;

    hasilText = `Tegangan (V) = ${formatAngka(V)} Volt`;

    langkah = `
        <div style="text-align:center;">
            <strong>Rumus:</strong><br>
            V = I × R <br><br>

            V = ${I} × ${R} <br>
            V = ${formatAngka(V)} Volt
        </div>
        `;
  } else if (I === undefined) {
    I = V / R;

    hasilText = `Arus (I) = ${formatAngka(I)} Ampere`;

    langkah = `
        <div style="text-align:center;">
            <strong>Rumus:</strong><br>
            I = V ÷ R <br><br>

            I = ${V} ÷ ${R} <br>
            I = ${formatAngka(I)} Ampere
        </div>
        `;
  } else if (R === undefined) {
    R = V / I;

    hasilText = `Resistansi (R) = ${formatAngka(R)} Ohm`;

    langkah = `
        <div style="text-align:center;">
            <strong>Rumus:</strong><br>
            R = V ÷ I <br>

            R = ${V} ÷ ${I} <br>
            R = ${formatAngka(R)} Ohm
        </div>
        `;
  }

  document.getElementById("hasil").innerHTML = `
        <div>${hasilText}</div>
        <div style="margin-top:10px; font-size:14px;">${langkah}</div>
    `;
}
