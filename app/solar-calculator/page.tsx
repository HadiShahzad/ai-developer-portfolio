"use client";

import { useState } from "react";

export default function SolarCalculatorPage() {
  const [capacity, setCapacity] = useState("");
  const [sunHours, setSunHours] = useState("");
  const [efficiency, setEfficiency] = useState("");
  const [tariff, setTariff] = useState("");

  const dailyEnergy =
    Number(capacity) * Number(sunHours) * (Number(efficiency) / 100);
      const monthlyEnergy = dailyEnergy * 30;
      const monthlySavings = monthlyEnergy * Number(tariff);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-4xl px-6 py-20">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Day 2 Project
        </p>

        <h1 className="mb-6 text-5xl font-bold">Solar Energy Calculator</h1>

        <p className="max-w-2xl text-lg leading-8 text-slate-300">
          Enter basic solar PV system information to estimate daily energy
          generation.
        </p>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <label className="block">
            <span className="text-sm font-medium text-slate-300">
              PV Capacity (kW)
            </span>
            <input
              type="number"
              value={capacity}
              onChange={(event) => setCapacity(event.target.value)}
              className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-400"
              placeholder="Example: 5"
            />
          </label>

          <label className="mt-5 block">
            <span className="text-sm font-medium text-slate-300">
              Sun Hours per Day
            </span>
            <input
              type="number"
              value={sunHours}
              onChange={(event) => setSunHours(event.target.value)}
              className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-400"
              placeholder="Example: 5.5"
            />
          </label>

          <label className="mt-5 block">
            <span className="text-sm font-medium text-slate-300">
              System Efficiency (%)
            </span>
            <input
              type="number"
              value={efficiency}
              onChange={(event) => setEfficiency(event.target.value)}
              className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-400"
              placeholder="Example: 80"
            />
          </label>

          <label className="mt-5 block">
            <span className="text-sm font-medium text-slate-300">
            Electricity Tariff (PKR/kWh)
            </span>
            <input
            type="number"
            value={tariff}
            onChange={(event) => setTariff(event.target.value)}
            className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-400"
            placeholder="Example: 60"
  />
</label>

          

                    <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-cyan-900 bg-cyan-950/40 p-5">
              <p className="text-sm text-slate-300">Estimated Daily Energy</p>

              <p className="mt-2 text-3xl font-bold text-cyan-300">
                {dailyEnergy.toFixed(2)} kWh/day
              </p>
            </div>

            <div className="rounded-xl border border-cyan-900 bg-cyan-950/40 p-5">
              <p className="text-sm text-slate-300">Estimated Monthly Energy</p>

              <p className="mt-2 text-3xl font-bold text-cyan-300">
                {monthlyEnergy.toFixed(2)} kWh/month
              </p>
            </div>
            <div className="rounded-xl border border-cyan-900 bg-cyan-950/40 p-5">
              <p className="text-sm text-slate-300">Estimated Monthly Savings</p>

              <p className="mt-2 text-3xl font-bold text-cyan-300">
               PKR {monthlySavings.toFixed(2)}
               </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}