// Obtiene el formulario y el mensaje de gracias
const form = document.getElementById('purchase-form');
const thankYouMessage = document.getElementById('thank-you-message');

// Añadir el evento de envío del formulario
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que el formulario se envíe realmente

  // Mostrar el mensaje de agradecimiento
  thankYouMessage.style.display = 'block';

  // Opcional: Limpiar el formulario después de "comprar"
  form.reset();
});
