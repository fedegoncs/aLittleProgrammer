console.log("hello world");
document.querySelector('.menu-btn').addEventListener('click', () => {
	document.querySelector('.nav-menu').classList.toggle('show');
});
ScrollReveal().reveal('.showcase', {delay: 500});
ScrollReveal().reveal('.news-cards', {delay: 750});
ScrollReveal().reveal('.cards-banner-one', {delay: 1000});
ScrollReveal().reveal('.cards-banner-two', {delay: 1000});


nombre = prompt("¿Cuál es tu nombre?");

if (nombre == "magali" || nombre == "magui" || nombre == "Magali" || nombre ==  "Magui" || nombre == "maga" || nombre == "Maga" || nombre == "magi" || nombre == "Magi" || nombre =="tirri"){
	alert("Te amo muchisimo " + (nombre));
	alert("y sos lo más lindo de este mundo vos " + (nombre));
}

else if (nombre != "magali" || nombre != "magui" || nombre != "Magali" || nombre !=  "Magui" || nombre != "maga" || nombre != "Maga" || nombre != "magi" || nombre != "Magi")
	alert("Hola " + (nombre) + ", esta pagina fue creada por el Momoide y Picaporte");

