export default function DomainCard({ icon, title, desc }) {
  return (
    <div
      className="
        group
        bg-white
        rounded-2xl
        p-5 sm:p-6
        shadow-md
        hover:shadow-2xl
        transition-all
        duration-300
        hover:-translate-y-2
        cursor-pointer
        border
        border-gray-100
        hover:border-purple-500
        focus-within:ring-2
        focus-within:ring-purple-500
      "
      tabIndex={0}
      aria-label={`Explore ${title}`}
    >
      {/* ICON */}
      <div
        className="
          text-3xl sm:text-4xl
          mb-3 sm:mb-4
          transition-transform
          duration-300
          group-hover:scale-110
        "
      >
        {icon}
      </div>

      {/* TITLE */}
      <h3
        className="
          text-lg sm:text-xl
          font-semibold
          text-gray-900
          group-hover:text-purple-600
          transition-colors
        "
      >
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-gray-600 mt-2 text-sm leading-relaxed">
        {desc}
      </p>

      {/* CTA */}
      <div className="mt-4">
        <span
          className="
            inline-block
            text-purple-600
            font-medium
            text-sm
            opacity-100 sm:opacity-0
            sm:group-hover:opacity-100
            transition
          "
        >
          Explore →
        </span>
      </div>
    </div>
  );
}
