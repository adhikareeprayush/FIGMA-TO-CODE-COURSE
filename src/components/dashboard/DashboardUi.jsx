export const StatusBadge = ({ status }) => {
  const styles = {
    confirmed: "bg-emerald-50 text-emerald-800 ring-emerald-600/15",
    pending: "bg-amber-50 text-amber-900 ring-amber-600/15",
    waitlist: "bg-sky-50 text-sky-900 ring-sky-600/15",
    cancelled: "bg-rose-50 text-rose-800 ring-rose-600/15",
  };
  const key = styles[status] ? status : "pending";
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold capitalize ring-1 ring-inset ${styles[key]}`}
    >
      {status}
    </span>
  );
};

export const StatCard = ({ label, value, change, positive, hint }) => (
  <div className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm shadow-black/5">
    <p className="text-sm font-medium text-[#757095]">{label}</p>
    <p className="mt-2 font-volkhov text-3xl font-bold tracking-tight text-[#181433]">
      {value}
    </p>
    <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
      <span
        className={`font-semibold ${
          positive ? "text-emerald-600" : "text-rose-600"
        }`}
      >
        {change}
      </span>
      {hint && <span className="text-[#757095]">{hint}</span>}
    </div>
  </div>
);

export const Card = ({
  title,
  subtitle,
  children,
  action,
  className = "",
}) => (
  <section
    className={`rounded-2xl border border-black/5 bg-white shadow-sm shadow-black/5 ${className}`}
  >
    <div className="flex flex-col gap-1 border-b border-black/5 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h2 className="font-volkhov text-xl font-bold text-[#181433]">
          {title}
        </h2>
        {subtitle && (
          <p className="text-sm text-[#757095]">{subtitle}</p>
        )}
      </div>
      {action}
    </div>
    <div className="p-5">{children}</div>
  </section>
);
