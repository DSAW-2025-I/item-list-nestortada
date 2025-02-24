// Carrito de compras en memoria
let cart = [];

/**
 * Inicializa los eventos al cargar la página.
 */
document.addEventListener('DOMContentLoaded', () => {
  const productCards = document.querySelectorAll('.product-card');

  productCards.forEach((card) => {
    // Cada tarjeta tiene data-name y data-price
    const productName = card.dataset.name;
    const productPrice = parseFloat(card.dataset.price);

    // Botón "Add to Cart"
    const addToCartButton = card.querySelector('.add-to-cart-button');

    // Evento para cuando se hace clic en "Add to Cart"
    addToCartButton.addEventListener('click', (e) => {
      e.preventDefault();

      // Revisamos si el producto ya está en el carrito
      const existingItem = cart.find(item => item.name === productName);

      if (!existingItem) {
        // Si no está, lo agregamos
        const newItem = {
          name: productName,
          price: productPrice,
          quantity: 1,
          buttonRef: addToCartButton // Guardamos la referencia al botón
        };
        cart.push(newItem);

        // Cambiamos estilo del botón, mostramos controles +/- y añadimos borde a la imagen
        switchButtonToQuantity(addToCartButton, newItem);
      } else {
        // Si ya existe, incrementamos la cantidad
        existingItem.quantity++;
        updateButtonQuantity(existingItem);
      }

      // Actualizamos el carrito (sidebar)
      updateCartView();
    });
  });
});

/**
 * Convierte el botón "Add to Cart" en un botón naranja con controles +/-.
 * Además, añade un borde naranja a la imagen del producto.
 */
function switchButtonToQuantity(button, cartItem) {
  button.classList.remove('bg-white', 'text-gray-800');
  button.classList.add('bg-orange-500', 'text-white');

  // Añadir borde naranja a la imagen del producto
  const productCard = button.closest('.product-card');
  const productImage = productCard.querySelector('img');
  productImage.classList.add('border-2', 'border-orange-500');

  // Reemplazar contenido del botón por la UI de +/- y cantidad
  button.innerHTML = `
    <div class="flex items-center justify-center space-x-2">
      <button type="button" class="minus-btn text-white font-bold">-</button>
      <span class="quantity">${cartItem.quantity}</span>
      <button type="button" class="plus-btn text-white font-bold">+</button>
    </div>
  `;

  // Asignar eventos a los botones "+" y "-"
  const minusBtn = button.querySelector('.minus-btn');
  const plusBtn = button.querySelector('.plus-btn');

  minusBtn.addEventListener('click', (evt) => {
    evt.stopPropagation();
    decrementQuantity(cartItem);
  });

  plusBtn.addEventListener('click', (evt) => {
    evt.stopPropagation();
    incrementQuantity(cartItem);
  });
}

/**
 * Decrementa la cantidad de un artículo en el carrito.
 * Si llega a 0, elimina el artículo y restaura el botón.
 */
function decrementQuantity(cartItem) {
  cartItem.quantity--;
  if (cartItem.quantity <= 0) {
    // Eliminar del carrito
    cart = cart.filter(item => item.name !== cartItem.name);
    resetButton(cartItem.buttonRef);
  } else {
    updateButtonQuantity(cartItem);
  }
  updateCartView();
}

/**
 * Incrementa la cantidad de un artículo y actualiza el botón.
 */
function incrementQuantity(cartItem) {
  cartItem.quantity++;
  updateButtonQuantity(cartItem);
  updateCartView();
}

/**
 * Actualiza el texto de la cantidad en el botón (+/-).
 */
function updateButtonQuantity(cartItem) {
  const quantitySpan = cartItem.buttonRef.querySelector('.quantity');
  if (quantitySpan) {
    quantitySpan.textContent = cartItem.quantity;
  }
}

/**
 * Restaura el botón a su estado original ("Add to Cart") y quita el borde de la imagen.
 */
function resetButton(button) {
  button.classList.remove('bg-orange-500', 'text-white');
  button.classList.add('bg-white', 'text-gray-800');

  // Quitar borde naranja de la imagen del producto
  const productCard = button.closest('.product-card');
  const productImage = productCard.querySelector('img');
  productImage.classList.remove('border-2', 'border-orange-500');

  button.innerHTML = `
    <img class="w-5 h-5 mr-2" src="assets/icon-add-to-cart.svg" alt="Cart Icon" />
    Add to Cart
  `;
}

/**
 * Actualiza la vista del carrito en el sidebar:
 * - Actualiza el título "Your Cart (n)"
 * - Muestra la lista de productos y el total acumulado.
 */
function updateCartView() {
  // Cantidad total de artículos
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Actualizar "Your Cart (n)"
  const cartTitle = document.getElementById('cart-title');
  cartTitle.textContent = `Your Cart (${totalItems})`;

  // Actualizar lista de artículos
  const cartItemsList = document.getElementById('cart-items');
  cartItemsList.innerHTML = ''; // Limpiar primero

  // Crear un <li> por cada producto en el carrito
  cart.forEach((item) => {
    const li = document.createElement('li');
    li.className = 'flex justify-between';

    const itemTotal = (item.price * item.quantity).toFixed(2);
    li.innerHTML = `
      <span>${item.name} (x${item.quantity})</span>
      <span>$${itemTotal}</span>
    `;
    cartItemsList.appendChild(li);
  });

  // Calcular el total final
  const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  // Mostrar total en #cart-total
  const cartTotal = document.getElementById('cart-total');
  cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
}
