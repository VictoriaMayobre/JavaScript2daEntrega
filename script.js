document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('travelForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const destination = document.getElementById('destination').value;
    const departureDate = document.getElementById('departureDate').value;
    const returnDate = document.getElementById('returnDate').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
   

    if (!destination || !departureDate || !returnDate || !name || !email) {
      displayMessage('Por favor, complete todos los campos.', 'error');
      return;
    }

    const travelRequest = {
      destination: destination,
      departureDate: departureDate,
      returnDate: returnDate,
      name: name,
      email: email
    };

    agregarPersona(name, email); 
    displayConfirmation(travelRequest);
  });

  function displayMessage(message, className) {
    const messageDiv = document.createElement('div');
    messageDiv.className = className;
    messageDiv.textContent = message;

    const form = document.getElementById('travelForm');
    form.insertAdjacentElement('beforebegin', messageDiv);

    setTimeout(() => {
      messageDiv.remove();
    }, 3000);
  }

  function displayConfirmation(travelRequest) {
    const confirmationDiv = document.getElementById('confirmation');
    confirmationDiv.innerHTML = `
      <h2 class="success">Confirmación de solicitud</h2>
      <p>Destino: ${travelRequest.destination}</p>
      <p>Fecha de Ida: ${travelRequest.departureDate}</p>
      <p>Fecha de Vuelta: ${travelRequest.returnDate}</p>
      <p>Nombre: ${travelRequest.name}</p>
      <p>Email: ${travelRequest.email}</p>
      <p>Su solicitud ha sido recibida. ¡Nos pondremos en contacto pronto!</p>
    `;
    confirmationDiv.style.display = 'block';
  }

  function agregarPersona(nombre, email) {
    const nuevaPersona = {
      nombre: nombre,
      email: email
    };

    let listaPersonas = obtenerPersonasDesdeLocalStorage();
    listaPersonas.push(nuevaPersona);
    localStorage.setItem('listaPersonas', JSON.stringify(listaPersonas));
    console.log('Persona agregada:', nuevaPersona); 
  }

  function obtenerPersonasDesdeLocalStorage() {
    const listaPersonas = localStorage.getItem('listaPersonas');
    return listaPersonas ? JSON.parse(listaPersonas) : [];
  }

 
  mostrarUsuariosRegistrados();

 
 function mostrarUsuariosRegistrados() {
  const listaPersonas = obtenerPersonasDesdeLocalStorage();
  const usuariosRegistradosDiv = document.getElementById('usuariosRegistrados');
  usuariosRegistradosDiv.innerHTML = ''; 

  if (listaPersonas.length === 0) {
    usuariosRegistradosDiv.textContent = 'No hay usuarios registrados.';
  } else {
    const listaUsuariosUl = document.createElement('ul');
    listaPersonas.forEach(persona => {
      const usuarioLi = document.createElement('li');
      usuarioLi.textContent = `Nombre: ${persona.nombre}, Email: ${persona.email}`;
      listaUsuariosUl.appendChild(usuarioLi);
    });
    usuariosRegistradosDiv.appendChild(listaUsuariosUl);
  }
}
});

