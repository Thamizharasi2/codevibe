import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const testimonials = [
  {
    name: "BCA Final Year Student",
    feedback:
      "CodeVibe helped me complete my AI project with full documentation. Viva explanation was very clear.",
  },
  {
    name: "B.Sc Computer Science",
    feedback:
      "Java project delivered on time in university format. Faculty approved it without corrections.",
  },
  {
    name: "B.Tech Student",
    feedback:
      "They explained each module properly and provided viva questions. Very supportive team.",
  },
  {
    name: "MBA Student",
    feedback:
      "Management project with report and PPT was perfect. Helped me score high marks.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900">
          What Students Say
        </h2>
        <p className="mt-3 text-gray-600">
          Trusted by students across different domains
        </p>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000 }}
          loop={true}
          spaceBetween={30}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mt-12"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition hover:-translate-y-2 h-full">
                <p className="text-gray-700 italic">
                  “{item.feedback}”
                </p>

                <div className="mt-4 font-semibold text-primary">
                  ⭐⭐⭐⭐⭐
                </div>

                <h4 className="mt-2 text-gray-900 font-medium">
                  — {item.name}
                </h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
