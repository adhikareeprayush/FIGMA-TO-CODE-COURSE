import { toursCatalog } from "../../data/mockDashboard";
import { Card } from "../../components/dashboard/DashboardUi";

const formatMoney = (n) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);

const DashboardTours = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-volkhov text-3xl font-bold text-[#181433]">
            Tours
          </h2>
          <p className="mt-1 text-sm text-[#757095]">
            Inventory and utilization from mock catalog data.
          </p>
        </div>
        <button
          type="button"
          className="w-fit rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-primary/30 hover:opacity-95"
        >
          Add tour (mock)
        </button>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {toursCatalog.map((t) => {
          const fill = Math.round((t.booked / t.seats) * 100);
          return (
            <Card
              key={t.id}
              title={t.name}
              subtitle={`${t.region} · ${t.durationDays} days`}
              action={
                t.featured ? (
                  <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-primary">
                    Featured
                  </span>
                ) : null
              }
            >
              <div className="space-y-4">
                <div className="flex items-baseline justify-between gap-3">
                  <p className="text-2xl font-bold text-[#181433]">
                    {formatMoney(t.basePrice)}
                    <span className="text-sm font-medium text-[#757095]">
                      {" "}
                      / guest
                    </span>
                  </p>
                  <p className="text-sm font-semibold text-[#4a4a68]">
                    ★ {t.rating.toFixed(1)}
                  </p>
                </div>
                <div>
                  <div className="mb-1 flex justify-between text-xs font-medium text-[#757095]">
                    <span>Capacity</span>
                    <span>
                      {t.booked}/{t.seats} booked ({fill}%)
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-black/5">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-primary/70"
                      style={{ width: `${Math.min(fill, 100)}%` }}
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    className="flex-1 rounded-xl border border-black/10 py-2 text-sm font-semibold hover:bg-black/[0.03]"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="flex-1 rounded-xl border border-black/10 py-2 text-sm font-semibold hover:bg-black/[0.03]"
                  >
                    Schedule
                  </button>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default DashboardTours;
