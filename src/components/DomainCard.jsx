export default function DomainCard({ icon, title, desc }) {
    return (
      <div className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-transparent hover:border-primary">
        
        <div className="text-4xl mb-4">
          {icon}
        </div>
  
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition">
          {title}
        </h3>
  
        <p className="text-gray-600 mt-2 text-sm">
          {desc}
        </p>
  
        <button className="mt-4 text-primary font-medium opacity-0 group-hover:opacity-100 transition">
          Explore →
        </button>
      </div>
    );
  }
  