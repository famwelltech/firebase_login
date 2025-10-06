import React from "react";

const Mission = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Mission Section */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-gray-900">Our Mission</h1>
          <p className="text-lg text-gray-900 leading-relaxed max-w-3xl mx-auto font-semibold">
            To simplify healthcare experiences with a patient-first approach, supported by
            technology, partnerships, and innovation.
          </p>
        </div>

        {/* Vision Section */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-gray-900">Our Vision</h1>
          <p className="text-lg text-gray-900 leading-relaxed max-w-3xl mx-auto font-semibold">
            To be the most trusted healthcare assistance partner, bridging the gap between patients,
            families, and healthcare providers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;