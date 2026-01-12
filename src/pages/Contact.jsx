import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    college: "",
    department: "",
    domain: "",
    whatsapp: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [whatsappURL, setWhatsappURL] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      // 1️⃣ Send data to Google Sheets
      await fetch(
        "https://script.google.com/macros/s/AKfycbwlTC6kejSK4eIDQsVtLv3cSmTYBRMXmmwe1kCDVpSzQ1X2ihS2Xz1eosnf5EhVL4m5mA/exec",
        {
          method: "POST",
          body: JSON.stringify(form),
        }
      );

      // 2️⃣ Prepare WhatsApp message
      const message = `
Hi CodeVibe 👋
I submitted a project request.

Name: ${form.name}
College: ${form.college}
Department: ${form.department}
Domain: ${form.domain}
WhatsApp: ${form.whatsapp}

Message:
${form.message}

Please contact me.
      `;

      const url = `https://wa.me/917867830602?text=${encodeURIComponent(
        message
      )}`;

      setWhatsappURL(url);
      setSuccess(true);

      // 3️⃣ Reset form fields
      setForm({
        name: "",
        college: "",
        department: "",
        domain: "",
        whatsapp: "",
        message: "",
      });
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section className="min-h-screen pt-32 px-6 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          Contact CodeVibe
        </h2>

        <p className="text-center text-gray-600 mt-2">
          Fill the form and we’ll contact you shortly
        </p>

        {/* SUCCESS MESSAGE + WHATSAPP BUTTON */}
        {success && (
          <div className="mt-6 text-center">
            <p className="text-green-600 font-medium mb-4">
              ✅ Submitted successfully!
            </p>

            <button
              onClick={() => (window.location.href = whatsappURL)}
              className="w-full bg-green-500 text-white py-3 rounded-xl font-semibold hover:bg-green-600 transition"
            >
              Continue to WhatsApp
            </button>
          </div>
        )}

        {/* FORM */}
        {!success && (
          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <input
              name="college"
              value={form.college}
              onChange={handleChange}
              placeholder="College Name"
              required
              className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <input
              name="department"
              value={form.department}
              onChange={handleChange}
              placeholder="Department"
              required
              className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <input
              name="domain"
              value={form.domain}
              onChange={handleChange}
              placeholder="Project Domain (AI / Java / Web etc.)"
              required
              className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <input
              name="whatsapp"
              value={form.whatsapp}
              onChange={handleChange}
              placeholder="Your WhatsApp Number"
              required
              className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your project"
              rows="4"
              className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 rounded-xl font-semibold hover:scale-105 transition"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
