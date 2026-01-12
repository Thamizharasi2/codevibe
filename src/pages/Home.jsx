import Testimonials from "../components/Testimonials";
import Counter from "../components/Counter";

export default function Home() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section
        data-aos="fade-up"
        className="relative min-h-screen pt-28 flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-gradient-to-br from-purple-700 via-indigo-700 to-purple-900 text-white"
      >
        {/* BACKGROUND GLOW */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-400 opacity-30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-400 opacity-30 rounded-full blur-3xl"></div>

        {/* BRAND QUOTE */}
        <span
          data-aos="zoom-in"
          className="mb-6 inline-block px-6 py-2 rounded-full bg-white/20 backdrop-blur-md text-sm font-medium"
        >
          ✨ CodeVibe — where ideas meet real-world execution
        </span>

        {/* HEADING */}
        <h1
          data-aos="fade-up"
          data-aos-delay="150"
          className="text-4xl md:text-6xl font-extrabold leading-tight max-w-4xl"
        >
          College & Business <br /> Project Solutions
        </h1>

        {/* SUB TEXT */}
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="mt-6 text-lg md:text-xl text-purple-100 max-w-3xl"
        >
          AI • ML • Python • Java • Web Projects <br />
          Viva-Ready • Proper Documentation • On-Time Delivery
        </p>

        {/* BADGES */}
        <div
          data-aos="fade-up"
          data-aos-delay="450"
          className="mt-8 flex flex-wrap gap-3 justify-center"
        >
          {["AI", "ML", "Python", "Java", "Web", "MBA"].map((item) => (
            <span
              key={item}
              className="px-4 py-2 bg-white/20 rounded-xl backdrop-blur-md text-sm hover:bg-white/30 transition"
            >
              {item}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="/contact"
            className="bg-white text-purple-700 px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition shadow-lg"
          >
            Get Your Project
          </a>

          <a
            href="https://wa.me/917867830602"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-purple-700 transition"
          >
            WhatsApp Now
          </a>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3 text-center">
          {[
            {
              title: "Viva-Ready Support",
              desc: "We explain every module so you can confidently face your viva.",
            },
            {
              title: "University Format",
              desc: "Reports & documentation strictly follow university guidelines.",
            },
            {
              title: "On-Time Delivery",
              desc: "Zero delays. Reviews, submissions, and finals handled smoothly.",
            },
          ].map((item, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              data-aos-delay={i * 150}
              className="p-8 rounded-3xl bg-gradient-to-br from-purple-50 to-indigo-50 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-bold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-3 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= STATS (COUNTER) ================= */}
      <section className="py-20 px-6 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          <div data-aos="fade-up">
            <Counter end={100} label="Projects Delivered" />
          </div>
          <div data-aos="fade-up" data-aos-delay="150">
            <Counter end={10} label="Domains Covered" />
          </div>
          <div data-aos="fade-up" data-aos-delay="300">
            <Counter end={100} label="Viva Support" />
          </div>
          <div data-aos="fade-up" data-aos-delay="450">
            <Counter end={24} label="Hour Response" />
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <div data-aos="fade-up">
        <Testimonials />
      </div>
    </>
  );
}
