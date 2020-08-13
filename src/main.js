///<reference types="jquery" />
const $base = $(".base");
const $fecha = $(".fecha");

  $(".boton-base").click(()=>{
      fetch(`https://api.exchangeratesapi.io/latest?base=${$($base).val()}`)
      .then(respuesta => respuesta.json())
      .then(respuestaJSON => {
        $(".titulo").text(
          `Cambios del día ${respuestaJSON.date} en base ${respuestaJSON.base}`
        );

        $(".resultados").html('').removeClass("error");
        $("#fecha").removeClass("error").addClass("fecha");
        $("#base").removeClass("error").addClass("base");
    
        Object.keys(respuestaJSON.rates).forEach(moneda => {
          $(".resultados").append($(`<li>${moneda}: ${respuestaJSON.rates[moneda]}</li>`));
        });
      })
      .catch(error => {
        $(".titulo").text("Error!");
        $(".resultados").html("").html("Error! ingresar solo 3 letras en mayusculas o no ingresar ninguna letra", error).removeClass("resultado").addClass("error");
        $(".base").removeClass("base").addClass("error");
      });
  })

  $(".boton-fecha").click(()=>{
    fetch(`https://api.exchangeratesapi.io/${$($fecha).val()}?base=${$($base).val()}`)
    .then(respuesta => respuesta.json())
    .then(respuestaJSON => {
      $(".titulo").text(
        `Cambios del día ${respuestaJSON.date} en base ${respuestaJSON.base}`
      );
  
      $(".resultados").html('').removeClass("error");
      $("#fecha").removeClass("error").addClass("fecha");
      $("#base").removeClass("error").addClass("base");
  
      Object.keys(respuestaJSON.rates).forEach(moneda => {
        $(".resultados").append($(`<li>${moneda}: ${respuestaJSON.rates[moneda]}</li>`));
      });
    })
    .catch(error => {
      $(".titulo").text("Error!");
      $(".resultados").html("").html("Error! ingresar una fecha desde 1999 en adelante", error).removeClass("resultado").addClass("error");
      $(".fecha").removeClass("fecha").addClass("error");
    });
})
