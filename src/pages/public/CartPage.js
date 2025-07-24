function CartPage() {
  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>
      <p>Your cart is currently empty.</p>
      <ul className="cart-items">
        <li>
          <div className="item-details">
            <h3>Product Name</h3>
            <p>Price: $XX.XX</p>
            <p>Quantity: X</p>
          </div>
          <button className="remove-item">Remove</button>
        </li>
      </ul>
    </div>
  );
}

export default CartPage;
