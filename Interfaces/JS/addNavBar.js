function addNavBar() {
	document.write("<nav class='navbar navbar-icon-top navbar-expand-lg navbar-light' style='background-color: #e3f2fd;'>" +
  "<a class='navbar-brand' href='#'>RubricApp</a>" +
  "<button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>" +
    "<span class='navbar-toggler-icon'></span>" +
  "</button>" +

  "<div class='collapse navbar-collapse' id='navbarSupportedContent'>" +
    "<ul class='navbar-nav mr-auto'>" +
      "<li class='nav-item'>" +
        "<a class='nav-link' href='#'>" +
           "<img src='img/ayudante.png' width='30' height='30' alt='Ayudante'>" +
          "Evaluadores" +
        "</a>" +
      "</li>" +
      "<li class='nav-item'>" +
        "<a class='nav-link' href='#'>" +
           "<img src='img/Cursos.png' width='30' height='30' alt='Cursos'>" +
          "Cursos" +
        "</a>" +
      "</li>" +
      "<li class='nav-item'>" +
        "<a class='nav-link' href='#'>" +
           "<img src='img/Evaluaciones.png' width='30' height='30' alt='Evaluaciones'>" +
          "Evaluaciones" +
        "</a>" +
      "</li>" +
      "<li class='nav-item'>" +
        "<a class='nav-link' href='#'>" +
           "<img src='img/rubrica.png' width='30' height='30' alt='rubrica'>" +
          "Rubricas" +
        "</a>" +
      "</li>" +
    "</ul>" +
    
    "<ul class='navbar-nav flex-row ml-md-auto d-none d-md-flex'>" +
      "<li class='nav-item'>" +
        "<a class='nav-link' href='#'>" +
           "<img src='img/gato.jpg' width='35' height='35' alt='jpg' class='rounded-circle'>" +
          "User Name" +
        "</a>" +
      "</li>" +
    "</ul>" +
    
  "</div>" +
"</nav>");
}