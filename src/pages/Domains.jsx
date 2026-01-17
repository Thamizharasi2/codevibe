import DomainCard from "../components/DomainCard";
import { domains } from "../data/domains";

export default function Domains() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 px-4 sm:px-6 py-24">

      {/* HEADER */}
      <div className="text-center mb-10 sm:mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Project Domains
        </h2>

        <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-xl mx-auto">
          Choose the domain that fits your academic goals and career path
        </p>
      </div>

      {/* DOMAIN GRID */}
      <div className="
        max-w-7xl mx-auto
        grid gap-6 sm:gap-8
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
      ">
        {domains.map((item, index) => (
          <DomainCard
            key={index}
            icon={item.icon}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>

    </section>
  );
}
