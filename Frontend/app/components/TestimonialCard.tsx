// components/TestimonialCard.tsx

export default function TestimonialCard({ text }: any) {
  return (
    <div className="testimonialCard">
      <p>{text}</p>

      <div className="triangle"></div>
    </div>
  );
}