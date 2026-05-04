import { useMemo, useState } from "react";
import { recentBookings } from "../../data/mockDashboard";
import { Card, StatusBadge } from "../../components/dashboard/DashboardUi";

const formatMoney = (n) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);

const statuses = ["all", "confirmed", "pending", "waitlist", "cancelled"];

const DashboardBookings = () => {
  const [q, setQ] = useState("");
  const [status, setStatus] = useState("all");

  const rows = useMemo(() => {
    return recentBookings.filter((b) => {
      const okStatus = status === "all" || b.status === status;
      const hay = `${b.id} ${b.guest} ${b.tour}`.toLowerCase();
      const okQ = !q || hay.includes(q.toLowerCase());
      return okStatus && okQ;
    });
  }, [q, status]);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-volkhov text-3xl font-bold text-[#181433]">
          Bookings
        </h2>
        <p className="mt-1 text-sm text-[#757095]">
          Search and filter mock reservations for demos.
        </p>
      </div>

      <Card title="Pipeline" subtitle="All values are static mock data">
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search guest, tour, or reference…"
            className="w-full max-w-md rounded-xl border border-black/10 bg-[#f9fafc] px-4 py-2.5 text-sm outline-none ring-primary/30 placeholder:text-[#757095] focus:ring-2"
          />
          <div className="flex flex-wrap gap-2">
            {statuses.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setStatus(s)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold capitalize ring-1 ring-inset transition-colors ${
                  status === s
                    ? "bg-primary text-white ring-primary"
                    : "bg-white text-[#4a4a68] ring-black/10 hover:bg-black/[0.03]"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="border-b border-black/10 text-[#757095]">
                <th className="pb-3 pr-4 font-medium">Reference</th>
                <th className="pb-3 pr-4 font-medium">Guest</th>
                <th className="pb-3 pr-4 font-medium">Tour</th>
                <th className="pb-3 pr-4 font-medium">Start</th>
                <th className="pb-3 pr-4 font-medium">Party</th>
                <th className="pb-3 pr-4 font-medium">Total</th>
                <th className="pb-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((b) => (
                <tr
                  key={b.id}
                  className="border-b border-black/[0.06] last:border-0"
                >
                  <td className="py-3 pr-4 font-mono text-xs font-semibold text-primary">
                    {b.id}
                  </td>
                  <td className="py-3 pr-4 font-medium">{b.guest}</td>
                  <td className="py-3 pr-4 text-[#4a4a68]">{b.tour}</td>
                  <td className="py-3 pr-4 text-[#4a4a68]">{b.startDate}</td>
                  <td className="py-3 pr-4">{b.party}</td>
                  <td className="py-3 pr-4 font-semibold">
                    {formatMoney(b.total)}
                  </td>
                  <td className="py-3">
                    <StatusBadge status={b.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default DashboardBookings;
