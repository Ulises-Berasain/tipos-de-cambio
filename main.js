///<reference types="jquery" />
const $base = $(".base");
const $fecha = $(".fecha");

  $(".boton-calculo").click(()=>{
      fetch(`https://api.exchangeratesapi.io/latest?base=${$($base).val()}`)
      .then(respuesta => respuesta.json())
      .then(respuestaJSON => {
        $("h1").text(
          `Cambios del día ${respuestaJSON.date} en base ${respuestaJSON.base}`
        );

        $(".resultados").html('');
    
        Object.keys(respuestaJSON.rates).forEach(moneda => {
          $(".resultados").append($(`<li>${moneda}: ${respuestaJSON.rates[moneda]}</li>`));
        });
      })
      .catch(error => console.error("FALLÓ", error));
  })

  $(".boton-fecha").click(()=>{
    fetch(`https://api.exchangeratesapi.io/${$($fecha).val()}?base=${$($base).val()}`)
    .then(respuesta => respuesta.json())
    .then(respuestaJSON => {
      $("h1").text(
        `Cambios del día ${respuestaJSON.date} en base ${respuestaJSON.base}`
      );
  
      $("ul").html('');
  
      Object.keys(respuestaJSON.rates).forEach(moneda => {
        $("ul").append($(`<li>${moneda}: ${respuestaJSON.rates[moneda]}</li>`));
      });
    })
    .catch(error => console.error("FALLÓ", error));
})
