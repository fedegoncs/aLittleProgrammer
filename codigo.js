console.log("hello world");
document.querySelector('.menu-btn').addEventListener('click', () => {
	document.querySelector('.nav-menu').classList.toggle('show');
});

// ModelsMenu
const btnDepartamentos = document.getElementById('btnDeparts'),
	contenedorSubCategorias = document.querySelector('#grid .contenedor-subcategorias'),
	btnCerrarMenu = document.querySelector('.menu-btn'),
	grid = document.getElementById('grid'),
	esDispositivoMovil = () => window.innerWidth <= 800;

btnDepartamentos.addEventListener('mouseover', () => {
	if(!esDispositivoMovil()){
	grid.classList.add('activo');
	}
	if(esDispositivoMovil()){
		btnDepartamentos.classList.add('color')
	}
});

grid.addEventListener('mouseleave', () => {
	if(!esDispositivoMovil()){
	grid.classList.remove('activo');
	}
	if(esDispositivoMovil()){
	btnDepartamentos.classList.remove('color')
	}
});
//Mobile

// Filtrado
document.querySelectorAll('#grid .categorias a').forEach((elemento) => {
	elemento.addEventListener('mouseenter', (e) => {
		if(!esDispositivoMovil()) {
		document.querySelectorAll('#grid .subcategoria').forEach((categoria) => {
			categoria.classList.remove('activo');
				if(categoria.dataset.categoria == e.target.dataset.categoria){
					categoria.classList.add('activo');
				} 
			});
		};	
	});
});

// Click en boton de todos los departamentos (para mobile).
btnDepartamentos.addEventListener('click', (e) => {
	e.preventDefault();
	grid.classList.add('activo');
});


ScrollReveal().reveal('.showcase', {delay: 500});
ScrollReveal().reveal('.news-cards', {delay: 500});
ScrollReveal().reveal('.cards-banner-one', {delay: 500});
ScrollReveal().reveal('.cards-banner-two', {delay: 500});
ScrollReveal().reveal('.notices', {delay: 500}); 

// boton de regresar menu categorias
document.querySelector('#grid .categorias .btn-regresar').addEventListener('click', (e) =>{
	e.preventDefault();
	grid.classList.remove('activo');
	
});

//Click en boton de todos los departamentos (para mobile).

document.querySelectorAll('#grid .categorias a').forEach((elemento) => {
	elemento.addEventListener('click', (e) => {
		if(esDispositivoMovil()){
			contenedorSubCategorias.classList.add('activo');
			document.querySelectorAll('#grid .subcategoria').forEach((categoria) => {
				categoria.classList.remove('activo');
				if(categoria.dataset.categoria == e.target.dataset.categoria){
					categoria.classList.add('activo');
				} 
			})
		}
	});
});

// boton de regresar menu categorias
document.querySelectorAll('#grid .contenedor-subcategorias .btn-regresar').forEach((boton) =>{
	boton.addEventListener('click', (e) => {
		e.preventDefault();
		contenedorSubCategorias.classList.remove('activo');
	});
});

btnCerrarMenu.addEventListener('click', (e) => {
	e.preventDefault();
	document.querySelectorAll('.grid').forEach((elemento) => {
		elemento.classList.remove('activo');
	});
});


btnCerrarMenu.addEventListener('click', (e) => {
	e.preventDefault();
	document.querySelectorAll('#grid .contenedor-subcategorias').forEach((elemento) => {
		elemento.classList.remove('activo');
	});
});




















/*nombre = prompt("¿Cuál es tu nombre?");

if (nombre == "magali" || nombre == "magui" || nombre == "Magali" || nombre ==  "Magui" || nombre == "maga" || nombre == "Maga" || nombre == "magi" || nombre == "Magi" || nombre =="tirri"){
	alert("Te amo muchisimo " + (nombre));
	alert("y sos el amor de mi vida " + (nombre));
}

else if (nombre != "magali" || nombre != "magui" || nombre != "Magali" || nombre !=  "Magui" || nombre != "maga" || nombre != "Maga" || nombre != "magi" || nombre != "Magi")
	alert("Hola " + (nombre) + ", esta pagina fue creada por el Momoide y Picaporte"); */



