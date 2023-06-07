const formulario = document.getElementById("formulary");
const exito = document.getElementById("exito");
const container = document.getElementById("convocation_main");

formulario.addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(
      "https://sheet.best/api/sheets/7a3fff19-ceb9-4bbc-a2c0-e77c5bf84569",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          Nombres: formulario.nombres.value,
          Apellidos: formulario.apellidos.value,
          Correo: formulario.correo.value,
          Celular: formulario.celular.value,
          Semestre: formulario.semestre.value,
          Motivo: formulario.motivo.value,
        }),
      }
    );
    if (response.ok) {
      container.classList.add("inactive");
      exito.classList.remove("inactive");
      await new Promise((resolve) => setTimeout(resolve, 3000)); // Esperar 3 segundos
      window.location.href = "../../index.html";
    } else {
      console.log("Error en la petición POST:", response.status);
    }
  } catch (error) {
    console.log(error);
  }
});
