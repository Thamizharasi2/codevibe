import DomainCard from "../components/DomainCard";
import { domains } from "../data/domains";

export default function Domains() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 px-6 py-20">
      
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">
          Project Domains
        </h2>
        <p className="mt-3 text-gray-600">
          Choose the domain that fits your academic goals
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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
