export function CartPage() {
  return (
    <div className="page-shell">
      <div className="container cart-layout">
        <div className="cart-card">
          <h2>Your cart</h2>
          <div className="summary-box" style={{ marginTop: '1rem' }}>
            <div className="summary-row"><span>Aster Smart Speaker</span><strong>PKR 18,999</strong></div>
            <div className="summary-row"><span>Nova Wireless Earbuds</span><strong>PKR 13,999</strong></div>
          </div>
        </div>

        <div className="checkout-card">
          <h3>Order Summary</h3>
          <div className="summary-row"><span>Subtotal</span><strong>PKR 32,998</strong></div>
          <div className="summary-row"><span>Shipping</span><strong>PKR 300</strong></div>
          <div className="summary-row"><span>Discount</span><strong>PKR 0</strong></div>
          <hr />
          <div className="summary-row"><span>Total</span><strong>PKR 33,298</strong></div>
          <button className="button" style={{ width: '100%', marginTop: '1rem' }}>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
}
