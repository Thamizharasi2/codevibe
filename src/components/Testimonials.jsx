import { useEffect, useState } from "react";

export default function Testimonials() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://script.google.com/macros/s/AKfycbzUFYvesI-IDpqBPLc_ug737g5W5qBIR-61gxZkN61DMfpvjv9psLzrWZVWnFGW_T5p/exec")
      .then(res => res.json())
      .then(data => setReviews(data.slice(-6).reverse()));
  }, []);

  return (
    <section className="py-20 bg-white">
      <h2 className="text-4xl font-bold text-center">
        What Students Say
      </h2>
      <p className="text-center text-gray-500 mt-2">
        Real feedback from real students
      </p>

      <div className="mt-12 max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="p-6 rounded-3xl bg-gradient-to-br from-purple-50 to-indigo-50 hover:shadow-xl transition"
          >
            <p className="italic text-gray-700">“{r.Message}”</p>

            <div className="mt-4 text-yellow-400">
              {"⭐".repeat(Number(r.Rating))}
            </div>

            <p className="mt-3 font-semibold text-gray-900">
              — {r.Name}
            </p>
            <p className="text-sm text-gray-500">{r.Course}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
