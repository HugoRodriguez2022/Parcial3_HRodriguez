
function CalcularNota(event) {
  event.preventDefault(); 

  const inputs = document.querySelectorAll("input[type='number']");
  const Parcial1 = parseFloat(inputs[0].value);
  const Parcial2 = parseFloat(inputs[1].value);
  const Parcial3 = parseFloat(inputs[2].value);

  if (isNaN(Parcial1) || isNaN(Parcial2) || isNaN(Parcial3)) {
    alert("Por favor ingrese todas las notas.");
    return;
  }

  const PromedioParciales = (Parcial1 + Parcial2 + Parcial3) / 3;
  const AporteParciales = PromedioParciales * 0.6;

  const Rangos = {
    A: 90,
    B: 80,
    C: 70,
    D: 60,
    F: 0
  };

  let Resultado = "Resultados:\n";
  
  for (const [letra, minimo] of Object.entries(rangos)) {
    const NotaNecesaria = (minimo - AporteParciales) / 0.4;

    if (NotaNecesaria <= 0) {
      Resultado += `Para obtener ${letra}: Ya asegurado con tus parciales \n`;
    } else if (NotaNecesaria > 100) {
      Resultado += `Para obtener ${letra}: (necesitarías más de 100)\n`;
    } else {
      Resultado += `Para obtener ${letra}: Necesitas al menos ${NotaNecesaria.toFixed(2)} en el examen final \n`;
    }
  }

  alert(Resultado);
}

document.querySelector("form").addEventListener("submit", CalcularNota);

