const formulario = document.getElementById("formulary");
const estudianteEpn = document.getElementById("estudianteEpn");
const exito = document.getElementById("exito");

formulario.addEventListener("submit", async (e) => {
  e.preventDefault();
  // const data = {
  //   Id: 10,
  //   Name: "Jack Doe",
  //   Age: 97,
  //   "Created at": new Date(),
  // };

  try {
    await fetch(
      "https://sheet.best/api/sheets/2e32783d-f39d-4853-8015-087fce224e67",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          "Nombres": formulario.nombres.value,
          "Apellidos": formulario.apellidos.value,
          "Correo": formulario.correo.value,
          "Celular": formulario.celular.value,
          "Estudiante EPN": estudianteEpn.value,
        }),
      }
    );
  } catch (error) {
    console.log(error);
  }
  formulario.classList.add("inactive");
  exito.classList.remove("inactive");
});
