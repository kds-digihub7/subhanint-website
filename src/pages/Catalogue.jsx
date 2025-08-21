import React, { useEffect } from "react";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";

function Catalogue() {
  useEffect(() => {
    document.title = "Subhan International | Catalogue";
  }, []);

  const products = [
    { id: 1, name: "Surgical Forceps", category: "Grasping Instruments", description: "Stainless steel forceps for precise handling with exceptional grip.", image: "/src/assets/product-1.jpg" },
    { id: 2, name: "Scalpel Handles", category: "Cutting Instruments", description: "Ergonomic designs for precision and control during procedures.", image: "/src/assets/product-2.jpg" },
    { id: 3, name: "Surgical Scissors", category: "Cutting Instruments", description: "Multiple types for various surgical applications with sharp blades.", image: "/src/assets/product-3.jpg" },
    { id: 4, name: "Needle Holders", category: "Suturing Instruments", description: "Secure grip for suturing procedures with precision locking.", image: "/src/assets/product-4.jpg" },
    { id: 5, name: "Retractors", category: "Retracting Instruments", description: "Hold tissue aside for better exposure and access during surgery.", image: "/src/assets/product-1.jpg" },
    { id: 6, name: "Hemostats", category: "Clamping Instruments", description: "Control bleeding during surgery with reliable clamping action.", image: "/src/assets/product-2.jpg" },
    { id: 7, name: "Dilators", category: "Access Instruments", description: "Gradually enlarge openings for surgical access with minimal trauma.", image: "/src/assets/product-3.jpg" },
    { id: 8, name: "Probes", category: "Exploring Instruments", description: "Explore structures and cavities with precision and tactile feedback.", image: "/src/assets/product-4.jpg" },
  ];

  return (
    <div className="section">
      <div className="container">
        <motion.h1
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Product Catalogue
        </motion.h1>
        <p className="section-subtitle">Browse our comprehensive range of surgical instruments</p>
        
        <div className="products">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        <motion.div
          style={{ textAlign: "center", marginTop: "50px" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p>Can't find what you're looking for? Contact us for custom requests.</p>
          <a href="/contact" className="btn" style={{ marginTop: "15px" }}>Contact Us</a>
        </motion.div>
      </div>
    </div>
  );
}

export default Catalogue;