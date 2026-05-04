import {
  activityFeed,
  dashboardStats,
  recentBookings,
  revenueByMonth,
} from "../../data/mockDashboard";
import { Card, StatCard, StatusBadge } from "../../components/dashboard/DashboardUi";

const formatMoney = (n) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);

const maxRevenue = Math.max(...revenueByMonth.map((m) => m.amount));

const DashboardHome = () => {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm font-medium text-[#757095]">
          Snapshot for the last 30 days
        </p>
        <h2 className="mt-1 font-volkhov text-3xl font-bold text-[#181433] sm:text-4xl">
          Welcome back
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((s) => (
          <StatCard key={s.id} {...s} />
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <Card
          title="Revenue trend"
          subtitle="Mock series — connect your billing API later"
          className="xl:col-span-2 xl:min-w-0"
        >
          <div className="flex h-48 items-end gap-3">
            {revenueByMonth.map((m) => {
              const h = Math.round((m.amount / maxRevenue) * 100);
              return (
                <div
                  key={m.month}
                  className="flex flex-1 flex-col items-center gap-2"
                >
                  <div className="flex w-full flex-1 items-end justify-center">
                    <div
                      className="w-full max-w-[48px] rounded-t-lg bg-gradient-to-t from-primary to-primary/50"
                      style={{ height: `${Math.max(h, 8)}%` }}
                      title={`${m.month}: ${formatMoney(m.amount)}`}
                    />
                  </div>
                  <span className="text-xs font-medium text-[#757095]">
                    {m.month}
                  </span>
                </div>
              );
            })}
          </div>
        </Card>

        <Card title="Activity" subtitle="Latest operational events">
          <ul className="space-y-4">
            {activityFeed.map((a) => (
              <li key={a.id} className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary/70" />
                <div>
                  <p className="text-sm font-medium text-[#181433]">
                    {a.message}
                  </p>
                  <p className="text-xs text-[#757095]">{a.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <Card
        title="Recent bookings"
        subtitle="Pulls from mock data in `src/data/mockDashboard.js`"
      >
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
              {recentBookings.slice(0, 5).map((b) => (
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

export default DashboardHome;
