import Link from "next/link";
import { ArrowUpRight, Orbit, Rocket, Satellite, Sparkles } from "lucide-react";

const navLinks = [
  { label: "Missions", href: "#missions" },
  { label: "Fleet", href: "#fleet" },
  { label: "Insights", href: "#insights" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

const missionPillars = [
  {
    title: "Orbital Science",
    description:
      "Deploying modular observatories that scan the cosmos for emerging phenomena and frontier physics.",
    icon: <Orbit className="size-6 text-sky-400" />,
  },
  {
    title: "Deep Space Logistics",
    description:
      "Autonomous supply chains powering multi-planetary habitats with reusable launch platforms.",
    icon: <Rocket className="size-6 text-purple-400" />,
  },
  {
    title: "Planetary Defense",
    description:
      "Proactive monitoring with kinetic interceptors to deflect hazards long before they near Earth.",
    icon: <Satellite className="size-6 text-emerald-400" />,
  },
];

const stats = [
  { label: "Active Missions", value: "24" },
  { label: "Payloads Delivered", value: "128" },
  { label: "Habitat Hours", value: "51K+" },
  { label: "Research Partners", value: "76" },
];

const launchSchedule = [
  {
    vehicle: "Atlas IX Heavy",
    window: "May 18 · 04:25 UTC",
    payload: "Europa Cryovolcano Mapper",
    status: "Go for launch",
  },
  {
    vehicle: "Solace Shuttle",
    window: "Jun 03 · 12:05 UTC",
    payload: "Lunar Orbital Habitat Crew Rotation",
    status: "In final integration",
  },
  {
    vehicle: "Pulse Skipper",
    window: "Jun 29 · 19:48 UTC",
    payload: "Exoplanet Biosignature Array",
    status: "Stage checkout underway",
  },
];

const fleet = [
  {
    name: "Aurora-Class Observatory",
    focus: "Infrared spectral analysis",
    detail: "Deployable mirror network tuned for exoplanet atmospheres.",
  },
  {
    name: "Helios Lagrange Gate",
    focus: "Interplanetary launch staging",
    detail: "Reusable hub stationed at L1 for deep space assembly.",
  },
  {
    name: "Siren Autonomous Rover",
    focus: "Subsurface exploration",
    detail: "Quantum lidar array mapping hidden ice caverns.",
  },
];

const insights = [
  {
    title: "Cryovolcanic Plumes Reveal Organic Chains",
    summary:
      "Europa flyby spectrometry confirms complex organics previously theorized but never observed in-situ.",
    category: "Research Brief",
    href: "#",
  },
  {
    title: "Reusable Heat Shield Survives 9th Reentry",
    summary:
      "Pulse Skipper fleet surpasses target lifetime, reducing orbital transfer costs by 37%.",
    category: "Engineering Log",
    href: "#",
  },
  {
    title: "Habitat Gardens Thrive in Lunar Shadow",
    summary:
      "Closed-loop agroponics deliver 18% surplus nutrition to Shackleton Crater crews this rotation.",
    category: "Life Support",
    href: "#",
  },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,#1f3a8a40,transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#7c3aed33,transparent_60%)]" />
      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-10 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-full bg-sky-500/20">
            <Sparkles className="size-5 text-sky-300" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm uppercase tracking-[0.35em] text-slate-400">
              AstraNova
            </span>
            <span className="text-lg font-semibold text-slate-50">
              Space Agency
            </span>
          </div>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="transition-colors hover:text-slate-100"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <Link
          href="#contact"
          className="hidden rounded-full border border-slate-700 bg-slate-900/60 px-5 py-2 text-sm font-semibold text-slate-100 shadow-[0_0_25px_rgba(59,130,246,0.15)] transition hover:border-slate-500 hover:bg-slate-900/90 md:block"
        >
          Mission Proposal
        </Link>
      </header>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl justify-center px-6 md:hidden">
        <nav className="flex w-full items-center justify-between gap-4 overflow-x-auto rounded-full border border-slate-800/70 bg-slate-900/70 px-4 py-2 text-xs font-medium text-slate-300">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="whitespace-nowrap rounded-full px-3 py-1 transition hover:bg-slate-800/80 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-32 lg:px-10">
        <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-3 rounded-full border border-slate-800/70 bg-slate-900/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.35em] text-slate-400">
              <span className="size-2 rounded-full bg-sky-400" />
              Expedition Year 2046
            </div>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Navigating humanity beyond the edge of known space.
              </h1>
              <p className="max-w-xl text-lg text-slate-300">
                AstraNova leads the coalition of orbital scientists, habitat
                architects, and propulsion pioneers building a thriving
                multi-planetary future. From Europa&apos;s cryovolcanoes to
                Lagrange staging gates, our missions unlock the next frontier.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#missions"
                className="flex items-center gap-3 rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
              >
                View Live Missions
                <ArrowUpRight className="size-4" />
              </Link>
              <Link
                href="#fleet"
                className="flex items-center gap-3 rounded-full border border-slate-700/80 bg-slate-900/70 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white"
              >
                Explore Fleet
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-slate-800/70 bg-slate-900/60 p-5"
                >
                  <p className="text-2xl font-semibold text-white">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-slate-800/60 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-8 shadow-[0_45px_120px_rgba(59,130,246,0.25)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#38bdf830,transparent_60%)]" />
            <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_30%_50%,#c084fc20,transparent_55%)]" />
            <div className="relative flex h-full flex-col justify-between gap-8">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
                  Orbital Snapshot
                </p>
                <h2 className="text-2xl font-semibold text-white">
                  Crew Expedition Sentinel-7
                </h2>
                <p className="text-sm text-slate-300">
                  Monitoring cryovolcanic activity across Europa&apos;s Thomason
                  Basin with real-time fluid dynamics arrays.
                </p>
              </div>
              <dl className="grid grid-cols-2 gap-5 text-sm text-slate-200">
                <div className="rounded-2xl border border-slate-800/70 bg-slate-900/70 p-4">
                  <dt className="text-xs uppercase tracking-widest text-slate-500">
                    Orbit Altitude
                  </dt>
                  <dd className="mt-2 text-lg font-semibold text-white">
                    132 km
                  </dd>
                </div>
                <div className="rounded-2xl border border-slate-800/70 bg-slate-900/70 p-4">
                  <dt className="text-xs uppercase tracking-widest text-slate-500">
                    Crew
                  </dt>
                  <dd className="mt-2 text-lg font-semibold text-white">
                    6 specialists
                  </dd>
                </div>
                <div className="rounded-2xl border border-slate-800/70 bg-slate-900/70 p-4">
                  <dt className="text-xs uppercase tracking-widest text-slate-500">
                    Mission Day
                  </dt>
                  <dd className="mt-2 text-lg font-semibold text-white">
                    182
                  </dd>
                </div>
                <div className="rounded-2xl border border-slate-800/70 bg-slate-900/70 p-4">
                  <dt className="text-xs uppercase tracking-widest text-slate-500">
                    Data Throughput
                  </dt>
                  <dd className="mt-2 text-lg font-semibold text-white">
                    12.5 Tb/s
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section id="missions" className="space-y-12">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.45em] text-slate-500">
                Mission Pillars
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                Our programs build the infrastructure of deep space.
              </h2>
            </div>
            <Link
              href="#insights"
              className="flex items-center gap-2 text-sm font-semibold text-sky-300 transition hover:text-sky-200"
            >
              Browse mission dossiers
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {missionPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="relative overflow-hidden rounded-3xl border border-slate-800/70 bg-slate-900/70 p-8 transition hover:border-sky-500/50 hover:bg-slate-900/90"
              >
                <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/80 to-transparent" />
                <div className="flex size-12 items-center justify-center rounded-2xl bg-slate-800/70">
                  {pillar.icon}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-sm text-slate-300">
                  {pillar.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-sky-300">
                  Learn more
                  <ArrowUpRight className="size-4" />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-slate-800/70 bg-slate-900/70 p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-slate-500">
                  Upcoming Launches
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-white">
                  Launch Complex One
                </h2>
              </div>
              <span className="rounded-full border border-slate-700/70 bg-slate-900 px-3 py-1 text-xs font-medium uppercase tracking-[0.3em] text-sky-300">
                Live Feed
              </span>
            </div>
            <div className="mt-8 space-y-6">
              {launchSchedule.map((launch) => (
                <div
                  key={launch.vehicle}
                  className="rounded-3xl border border-slate-800/70 bg-slate-950/40 p-6 transition hover:border-sky-500/60"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.45em] text-slate-500">
                        {launch.window}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold text-white">
                        {launch.vehicle}
                      </h3>
                    </div>
                    <span className="rounded-full border border-slate-700/60 bg-slate-900/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">
                      {launch.status}
                    </span>
                  </div>
                  <p className="mt-4 text-sm text-slate-300">
                    Payload: {launch.payload}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div
            id="fleet"
            className="rounded-3xl border border-slate-800/70 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-8"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-slate-500">
              Fleet Architecture
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white">
              Strategic assets for multiplanetary expansion.
            </h2>
            <div className="mt-8 space-y-6">
              {fleet.map((asset) => (
                <div
                  key={asset.name}
                  className="rounded-2xl border border-slate-800/60 bg-slate-950/40 p-6 transition hover:border-purple-500/50"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {asset.name}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.3em] text-slate-500">
                    {asset.focus}
                  </p>
                  <p className="mt-4 text-sm text-slate-300">{asset.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="insights"
          className="rounded-3xl border border-slate-800/70 bg-slate-900/70 px-8 py-12"
        >
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-slate-500">
                Latest Insights
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white">
                Research transmissions from across the frontier.
              </h2>
            </div>
            <Link
              href="#contact"
              className="flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-white"
            >
              Subscribe for updates
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {insights.map((entry) => (
              <article
                key={entry.title}
                className="group rounded-3xl border border-slate-800/60 bg-slate-950/40 p-6 transition hover:border-sky-500/50 hover:bg-slate-950/60"
              >
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
                  {entry.category}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {entry.title}
                </h3>
                <p className="mt-3 text-sm text-slate-300">{entry.summary}</p>
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-sky-300 transition group-hover:text-sky-200">
                  Read dispatch
                  <ArrowUpRight className="size-4" />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="careers"
          className="rounded-3xl border border-slate-800/70 bg-gradient-to-r from-slate-900/80 via-slate-900 to-slate-950 px-8 py-12"
        >
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.4em] text-slate-500">
                Careers
              </p>
              <h2 className="text-3xl font-semibold text-white">
                Join the teams designing humanity&apos;s next habitats.
              </h2>
              <p className="text-sm text-slate-300">
                We recruit interplanetary architects, orbital physicians, data
                cartographers, and systems thinkers ready to blueprint the
                infrastructure of civilizations beyond Earth.
              </p>
              <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.35em] text-slate-400">
                <span className="rounded-full border border-slate-700 px-3 py-1">
                  Robotics
                </span>
                <span className="rounded-full border border-slate-700 px-3 py-1">
                  Propulsion
                </span>
                <span className="rounded-full border border-slate-700 px-3 py-1">
                  Habitat Science
                </span>
                <span className="rounded-full border border-slate-700 px-3 py-1">
                  Cosmic Biology
                </span>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-800/60 bg-slate-950/40 p-8">
              <h3 className="text-lg font-semibold text-white">
                Current Openings
              </h3>
              <ul className="mt-4 space-y-4 text-sm text-slate-300">
                <li className="flex items-start justify-between gap-3">
                  <span>Orbital Systems Architect · L1 Platform</span>
                  <ArrowUpRight className="mt-1 size-4 shrink-0 text-sky-300" />
                </li>
                <li className="flex items-start justify-between gap-3">
                  <span>Lunar Bio-Dome Ecologist · Shackleton Habitat</span>
                  <ArrowUpRight className="mt-1 size-4 shrink-0 text-sky-300" />
                </li>
                <li className="flex items-start justify-between gap-3">
                  <span>Quantum Navigation Analyst · Deep Space Fleet</span>
                  <ArrowUpRight className="mt-1 size-4 shrink-0 text-sky-300" />
                </li>
              </ul>
              <Link
                href="#contact"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
              >
                Submit credentials
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="rounded-3xl border border-slate-800/70 bg-slate-900/80 px-8 py-12"
        >
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-slate-500">
                Strategic Partnerships
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white">
                Collaborate on the next era of exploration.
              </h2>
              <p className="mt-4 text-sm text-slate-300">
                Share your mission objectives and our liaisons will coordinate a
                discovery session across our propulsion, life support, and
                analytics divisions.
              </p>
              <div className="mt-8 grid gap-4 text-sm text-slate-300 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-800/60 bg-slate-950/40 p-4">
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
                    Mission Control
                  </p>
                  <p className="mt-2 font-semibold text-white">
                    Houston · L1 Station
                  </p>
                  <p className="text-xs text-slate-400">
                    24/7 coalition operations
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-800/60 bg-slate-950/40 p-4">
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
                    Research Campus
                  </p>
                  <p className="mt-2 font-semibold text-white">
                    Reykjavik · Arctic Lab
                  </p>
                  <p className="text-xs text-slate-400">
                    Cryogenic field simulation
                  </p>
                </div>
              </div>
            </div>
            <form className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm text-slate-200">
                  Organization
                  <input
                    type="text"
                    placeholder="Agency or consortium name"
                    className="rounded-2xl border border-slate-800/70 bg-slate-950/50 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                    required
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm text-slate-200">
                  Contact Email
                  <input
                    type="email"
                    placeholder="you@agency.gov"
                    className="rounded-2xl border border-slate-800/70 bg-slate-950/50 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                    required
                  />
                </label>
              </div>
              <label className="flex flex-col gap-2 text-sm text-slate-200">
                Mission Objectives
                <textarea
                  rows={4}
                  placeholder="Summarize your target orbit, research goals, and desired launch window."
                  className="rounded-2xl border border-slate-800/70 bg-slate-950/50 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                  required
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-slate-200">
                Preferred Collaboration Path
                <select className="rounded-2xl border border-slate-800/70 bg-slate-950/50 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20">
                  <option>Launch services</option>
                  <option>Orbital research partnership</option>
                  <option>Habitat infrastructure</option>
                  <option>Joint propulsion program</option>
                </select>
              </label>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
              >
                Initiate briefing
                <ArrowUpRight className="size-4" />
              </button>
              <p className="text-xs text-slate-500">
                Data encrypted via AstraNova quantum relays. Expect a briefing
                confirmation in less than 6 hours.
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-slate-800/60 bg-slate-950/90">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-12 text-xs text-slate-500 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <p>
            © {new Date().getFullYear()} AstraNova Space Agency. Charting the
            trajectory beyond Earth orbit.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a className="transition hover:text-slate-300" href="#missions">
              Mission Control
            </a>
            <a className="transition hover:text-slate-300" href="#fleet">
              Fleet Status
            </a>
            <a className="transition hover:text-slate-300" href="#insights">
              Research
            </a>
            <a className="transition hover:text-slate-300" href="#careers">
              Careers
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
