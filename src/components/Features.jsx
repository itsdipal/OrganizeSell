const Features = () => {
  return (
    <section className="features">
      <div className="features-container">
        <div className="features-header">
          <h2>Everything You Need to Sell Better</h2>
          <p>
            All essential tools to manage your social selling business — in one
            simple dashboard.
          </p>
        </div>
        <div className="features-flex">
          <div className="feature-card">
            <span className="feature-icon">📦</span>
            <h3>Order Management</h3>
            <p>Track, update, and manage all your orders in one place.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">👥</span>
            <h3>Customer Management</h3>
            <p>Store customer details and view purchase history instantly.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🛍️</span>
            <h3>Product & Inventory</h3>
            <p>Add products, manage stock, and prevent overselling.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">💰</span>
            <h3>Payment Tracking</h3>
            <p>Track paid, unpaid, and pending payments easily.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">📊</span>
            <h3>Reports & Insights</h3>
            <p>See sales performance and business growth at a glance.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Features;
