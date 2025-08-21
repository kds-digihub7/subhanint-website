import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ShoppingCart, Phone, Mail } from "lucide-react";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    document.title = "Product Details | Subhan International";
    
    // Mock product data - in a real app, this would come from an API
    const products = [
      { 
        id: 1, 
        name: "Precision Forceps", 
        category: "Grasping Instruments", 
        description: "Our premium stainless steel forceps are designed for delicate procedures requiring exceptional grip and control. Each instrument is crafted with precision to ensure reliable performance in the most demanding surgical environments.",
        longDescription: "These forceps feature fine tips for precise handling of tissues and sutures. The ergonomic design reduces hand fatigue during prolonged procedures, while the superior craftsmanship ensures durability and long-lasting performance. Made from medical-grade stainless steel, they are corrosion-resistant and can withstand repeated sterilization.",
        image: "/src/assets/product-1.jpg",
        features: [
          "Made from medical-grade stainless steel",
          "Fine tips for precise handling",
          "Ergonomic design reduces hand fatigue",
          "Corrosion-resistant and durable",
          "Suitable for repeated sterilization"
        ],
        specifications: {
          material: "Medical-grade stainless steel",
          length: "12cm, 15cm, 18cm options",
          type: "Tissue forceps with serrated tips",
          sterilization: "Autoclavable"
        }
      },
      { 
        id: 2, 
        name: "Scalpel Handles", 
        category: "Cutting Instruments", 
        description: "Ergonomic designs for maximum control and precision during surgical procedures. Our scalpel handles provide perfect balance and comfort for surgeons.",
        longDescription: "Our scalpel handles are engineered for optimal balance and control, reducing hand fatigue during extended procedures. The textured grip ensures secure handling even in wet conditions, while the universal design accommodates various blade sizes for versatility in surgical applications.",
        image: "/src/assets/product-2.jpg",
        features: [
          "Ergonomic design for comfort and control",
          "Textured grip for secure handling",
          "Universal design fits multiple blade sizes",
          "Durable stainless steel construction",
          "Easy to clean and sterilize"
        ],
        specifications: {
          material: "High-quality stainless steel",
          sizes: "No. 3, No. 4, and No. 7 handles",
          compatibility: "Fits standard surgical blades",
          weight: "Lightweight for precise control"
        }
      },
      // Add more products as needed
    ];

    const foundProduct = products.find(p => p.id === parseInt(id));
    setProduct(foundProduct);
    
    // Set related products (excluding current product)
    setRelatedProducts(products.filter(p => p.id !== parseInt(id)).slice(0, 3));
  }, [id]);

  if (!product) {
    return <div className="section"><div className="container">Product not found</div></div>;
  }

  return (
    <div className="section">
      <div className="container">
        <Link to="/catalogue" className="btn btn-outline" style={{ marginBottom: "2rem", display: "inline-flex", alignItems: "center" }}>
          <ArrowLeft size={18} style={{ marginRight: "0.5rem" }} /> Back to Catalogue
        </Link>

        <div className="product-detail">
          <motion.div 
            className="product-detail-image"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img src={product.image} alt={product.name} />
          </motion.div>

          <motion.div 
            className="product-detail-info"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="product-category">{product.category}</span>
            <h1>{product.name}</h1>
            <p className="product-description">{product.description}</p>
            
            <div className="product-features">
              <h3>Key Features</h3>
              <ul>
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="product-actions">
              <button className="btn" style={{ display: "inline-flex", alignItems: "center" }}>
                <ShoppingCart size={18} style={{ marginRight: "0.5rem" }} /> Request Quote
              </button>
              <div className="contact-options">
                <p>Prefer to talk directly?</p>
                <div>
                  <a href="tel:+92123456789" className="btn btn-outline">
                    <Phone size={16} style={{ marginRight: "0.5rem" }} /> Call Us
                  </a>
                  <a href="mailto:info@subhanint.com" className="btn btn-outline">
                    <Mail size={16} style={{ marginRight: "0.5rem" }} /> Email Us
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="product-detail-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="detailed-description">
            <h2>Detailed Description</h2>
            <p>{product.longDescription}</p>
          </div>

          <div className="specifications">
            <h2>Specifications</h2>
            <div className="specs-grid">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="spec-item">
                  <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {relatedProducts.length > 0 && (
          <motion.div 
            className="related-products"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2>Related Products</h2>
            <div className="products">
              {relatedProducts.map((relatedProduct, i) => (
                <motion.div
                  className="product-card"
                  key={relatedProduct.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <div className="product-image">
                    <img src={relatedProduct.image} alt={relatedProduct.name} />
                    <div className="product-overlay">
                      <Link to={`/product/${relatedProduct.id}`} className="view-details-btn">
                        View Details
                      </Link>
                    </div>
                  </div>
                  <div className="product-info">
                    <span className="product-category">{relatedProduct.category}</span>
                    <h3 className="product-name">{relatedProduct.name}</h3>
                    <p className="product-description">{relatedProduct.description}</p>
                    <div className="product-actions">
                      <button className="btn btn-outline">Request Quote</button>
                      <Link to={`/product/${relatedProduct.id}`} className="btn">
                        Learn More
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default ProductDetail;