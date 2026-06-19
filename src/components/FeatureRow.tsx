import Image from "next/image";
import React, { ReactNode } from "react";

export default function FeatureRow() {
  return (
    <>
  <section className="feature-section">
    <div className="feature-container">
      
      {/* Decorative Arrow Row */}
      <div className="feature-row">
        <div className="arrow-wrapper">
          <img
            className="feature-arrow"
            alt="feature arrow"
            src="https://odoocdn.com/openerp_website/static/src/img/arrows/grey_arrow_dot_02.svg"
          />
        </div>
      </div>

      {/* Main Content Row */}
      <div className="feature-row">
        
        {/* Left Column: Text Copy */}
        <div className="feature-col">
          <h2 className="feature-heading">
            <span className="highlight-green">Real-time</span> simulated operations
          </h2>
          <p className="feature-text">
            <strong>Simulate manufacturing orders</strong> with real-time capacity 
            planning, components availability, and cost control.
          </p>
          <p className="feature-text">
            Get just-in-time replenishment propositions and choose how to
            fulfill parts: make or buy, sub-contract, deliver from another
            warehouse, etc.
          </p>
        </div>

        {/* Right Column: Graphic Display */}
        <div className="feature-col">
          <img
            className="img-thumbnail-custom"
            alt="Manufacturing Operations Interface"
            src="https://odoocdn.com/openerp_website/static/src/img/apps/manufacturing/operations.webp"
          />
        </div>

      </div>

    </div>
  </section>
</>
  );
}
