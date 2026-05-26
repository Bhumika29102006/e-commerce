// components/TestimonialSection.tsx

import TestimonialCard from "./TestimonialCard";

export default function TestimonialSection() {
  const reviews = [
    {
      text: `“ It’s amazing how much easier it has been to meet new people and create instantly non connections. I have the exact same personal the only thing that has changed is my mind set and a few behaviors. “`,
    },
    {
      text: `“ It’s amazing how much easier it has been to meet new people and create instantly non connections. I have the exact same personal the only thing that has changed is my mind set and a few behaviors. “`,
    },
    {
      text: `“ It’s amazing how much easier it has been to meet new people and create instantly non connections. I have the exact same personal the only thing that has changed is my mind set and a few behaviors. “`,
    },
  ];

  return (
    <section className="testimonialSection">
      <div className="testimonialTop">
        <div>
          <p className="testimonialSmall">
            💬 Testimonials
          </p>

          <h1>Users Feedback</h1>
        </div>

        <div className="testimonialButtons">
          <button>←</button>
          <button>→</button>
        </div>
      </div>

      <div className="testimonialGrid">
        {reviews.map((item, index) => (
          <TestimonialCard key={index} text={item.text} />
        ))}
      </div>
    </section>
  );
}