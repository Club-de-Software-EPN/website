const formulario = document.getElementById("formulary");
const exito = document.getElementById("exito");
const container = document.getElementById("convocation_main");

formulario.addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(
      "https://sheet.best/api/sheets/6d2dda7b-1970-490f-96e9-a3b66ead64f5",
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
