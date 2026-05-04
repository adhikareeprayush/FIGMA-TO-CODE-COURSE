import {
  revenueByMonth,
  topDestinations,
} from "../../data/mockDashboard";
import { Card } from "../../components/dashboard/DashboardUi";

const formatMoney = (n) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);

const maxDest = Math.max(...topDestinations.map((d) => d.share));

const DashboardAnalytics = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-volkhov text-3xl font-bold text-[#181433]">
          Analytics
        </h2>
        <p className="mt-1 text-sm text-[#757095]">
          Lightweight mock charts for stakeholder reviews.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card title="Revenue" subtitle="Trailing six months (mock)">
          <ul className="space-y-3">
            {revenueByMonth.map((m) => (
              <li
                key={m.month}
                className="flex items-center justify-between rounded-xl bg-[#f9fafc] px-4 py-3"
              >
                <span className="text-sm font-semibold text-[#181433]">
                  {m.month}
                </span>
                <span className="text-sm font-bold text-primary">
                  {formatMoney(m.amount)}
                </span>
              </li>
            ))}
          </ul>
        </Card>

        <Card
          title="Top destinations"
          subtitle="Share of confirmed bookings"
        >
          <div className="space-y-4">
            {topDestinations.map((d) => (
              <div key={d.name}>
                <div className="mb-1 flex justify-between text-sm">
                  <span className="font-semibold text-[#181433]">
                    {d.name}
                  </span>
                  <span className="text-[#757095]">
                    {d.share}% · {d.bookings} bookings
                  </span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-black/5">
                  <div
                    className="h-full rounded-full bg-primary/80"
                    style={{
                      width: `${Math.round((d.share / maxDest) * 100)}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card title="Notes" subtitle="How this maps to a real product">
        <ul className="list-disc space-y-2 pl-5 text-sm text-[#4a4a68]">
          <li>
            Swap `src/data/mockDashboard.js` for fetches to your CRM or
            payments provider.
          </li>
          <li>
            Add auth-gated routes and role-based nav when you wire a backend.
          </li>
          <li>
            Charts can be upgraded to Recharts or Tremor without changing page
            structure.
          </li>
        </ul>
      </Card>
    </div>
  );
};

export default DashboardAnalytics;
