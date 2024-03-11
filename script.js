document.getElementById('travelForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe
  
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
  