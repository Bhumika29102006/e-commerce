// components/NewsletterSection.tsx

export default function NewsletterSection() {
  return (
    <section className="newsletterSection">

      <div className="newsletterContent">

        <p className="newsletterSmall">
          ✉ Newsletter
        </p>

        <h1>
          Get weekly update
        </h1>

        <div className="newsletterInputArea">

          <input
            type="email"
            placeholder="example@gmail.com"
          />

          <button>
            Subscribe
          </button>

        </div>

      </div>

    </section>
  );
}
