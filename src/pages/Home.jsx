import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check, Globe, Truck } from "lucide-react";

function Home() {
  useEffect(() => {
    document.title = "Subhan International | Premium Surgical Instruments";
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Precision Surgical Instruments for Medical Excellence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Subhan International provides the highest quality surgical instruments to medical professionals worldwide, ensuring precision, reliability, and exceptional performance in every procedure.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="hero-actions"
          >
            <Link to="/catalogue" className="btn">Explore Products <ArrowRight size={20} /></Link>
            <Link to="/contact" className="btn btn-outline">Contact Us</Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Why Choose Subhan International</h2>
          <p className="section-subtitle">We are committed to excellence in every instrument we produce</p>
          
          <div className="features">
            {[
              { icon: <Check size={40} />, title: "Premium Quality", desc: "Finest medical-grade materials for unparalleled performance and durability in surgical procedures." },
              { icon: <Globe size={40} />, title: "Global Reach", desc: "Trusted by medical professionals in 30+ countries with reliable international shipping." },
              { icon: <Truck size={40} />, title: "Fast Delivery", desc: "Efficient logistics network ensures timely delivery of orders worldwide." }
            ].map((item, i) => (
              <motion.div
                className="feature-card"
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="feature-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section" style={{ backgroundColor: "#f9f9f9" }}>
        <div className="container">
          <h2 className="section-title">Featured Products</h2>
          <p className="section-subtitle">Explore our range of premium surgical instruments</p>
          
          <div className="products">
            {[
              { id: 1, name: "Precision Forceps", category: "Grasping Instruments", description: "Stainless steel forceps for delicate procedures with exceptional grip and control.", image: "/src/assets/product-1.jpg" },
              { id: 2, name: "Scalpel Handles", category: "Cutting Instruments", description: "Ergonomic designs for maximum control and precision during surgical procedures.", image: "/src/assets/product-2.jpg" },
              { id: 3, name: "Surgical Scissors", category: "Cutting Instruments", description: "Multiple types for various applications with sharp, durable blades.", image: "/src/assets/product-3.jpg" }
            ].map((item, i) => (
              <motion.div
                className="product-card"
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="product-image">
                  <img src={item.image} alt={item.name} />
                  <div className="product-overlay">
                    <Link to={`/product/${item.id}`} className="view-details-btn">
                      View Details
                    </Link>
                  </div>
                </div>
                <div className="product-info">
                  <span className="product-category">{item.category}</span>
                  <h3 className="product-name">{item.name}</h3>
                  <p className="product-description">{item.description}</p>
                  <div className="product-actions">
                    <button className="btn btn-outline">Request Quote</button>
                    <Link to={`/product/${item.id}`} className="btn">
                      Learn More
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link to="/catalogue" className="btn">View Full Catalogue</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)", color: "white" }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}
          >
            <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Ready to Elevate Your Surgical Practice?</h2>
            <p style={{ fontSize: "1.25rem", marginBottom: "2.5rem" }}>
              Contact us today to discuss your surgical instrument needs or request a custom quote.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link to="/contact" className="btn" style={{ background: "white", color: "var(--primary)" }}>Get in Touch</Link>
              <Link to="/catalogue" className="btn btn-outline" style={{ borderColor: "white", color: "white" }}>Browse Products</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;