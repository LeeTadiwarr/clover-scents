"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { scents } from "@/data/scents";
import {
  whatsappContactUrl,
  whatsappRecommendationUrl,
} from "@/data/contact";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function CollectionPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative overflow-x-clip">
      <div className="pointer-events-none absolute -left-20 top-16 h-72 w-72 rounded-full bg-[#dbc2ff]/45 blur-3xl" />
      <div className="pointer-events-none absolute -right-12 top-36 h-80 w-80 rounded-full bg-[#c4a6ff]/45 blur-3xl" />

      <header className="sticky top-0 z-20 border-b border-[#6d4caf]/12 bg-[#f4efff]/80 backdrop-blur-md">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-10">
          <Link href="/" className="section-title text-2xl font-semibold text-[#22143a]">
            Clover Scents
          </Link>
          <div className="hidden items-center gap-7 text-sm font-medium text-[#3f2f61] md:flex">
            <Link href="/" className="transition hover:text-[#8b5cf6]">
              Home
            </Link>
            <Link href="/collection" className="text-[#8b5cf6]">
              Collection
            </Link>
            <a
              href={whatsappContactUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#6d4caf]/30 px-4 py-2 transition hover:border-[#6d4caf]/70"
            >
              Contact
            </a>
          </div>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-collection-menu"
            className="rounded-full border border-[#6d4caf]/35 px-4 py-2 text-sm font-semibold text-[#3f2f61] transition hover:border-[#6d4caf]/70 md:hidden"
          >
            {mobileMenuOpen ? "Close" : "Menu"}
          </button>
        </nav>
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-collection-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="border-t border-[#6d4caf]/15 md:hidden"
            >
              <div className="mx-auto max-w-6xl px-6 py-4 md:px-10">
                <div className="flex flex-col gap-2 text-sm font-medium text-[#3f2f61]">
                  <Link
                    href="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-xl px-3 py-2 transition hover:bg-white/70"
                  >
                    Home
                  </Link>
                  <Link
                    href="/collection"
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-xl bg-white/70 px-3 py-2 font-semibold text-[#6d4caf]"
                  >
                    Collection
                  </Link>
                  <a
                    href={whatsappContactUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-xl bg-[#6d4caf] px-3 py-2 text-center font-semibold text-white transition hover:bg-[#5a3f93]"
                  >
                    Contact On WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 pb-24 pt-12 md:px-10 md:pt-16">
        <motion.section
          initial="hidden"
          animate="show"
          variants={stagger}
          className="max-w-3xl space-y-5"
        >
          <motion.p
            variants={fadeInUp}
            className="text-xs font-semibold uppercase tracking-[0.26em] text-[#6d4caf]"
          >
            Clover Scents Collection
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            className="section-title text-4xl font-semibold text-[#22143a] sm:text-5xl"
          >
            Where fragrance meets elegance, one signature scent at a time
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg text-[#6b5a8b]">
            I created this collection so you can choose by fragrance family,
            occasion, and mood. All prices shown are for the standard bottle size.
          </motion.p>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          variants={stagger}
          className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {scents.map((item, index) => (
            <motion.article
              key={item.name}
              variants={fadeInUp}
              className="glass-panel rounded-3xl p-5 shadow-[0_18px_42px_rgba(109,76,175,0.15)]"
            >
              <div className="rounded-2xl bg-gradient-to-br from-[#efe3ff] via-[#dcc8ff] to-[#b58bff] p-6">
                <div className="mx-auto h-24 w-16 rounded-b-[1.8rem] rounded-t-2xl border border-white/50 bg-white/45 backdrop-blur-sm" />
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#6d4caf]">
                Perfume {index + 1}
              </p>
              <h2 className="section-title mt-1 text-2xl font-semibold text-[#22143a]">
                {item.name}
              </h2>
              <p className="mt-2 text-sm text-[#6b5a8b]">{item.notes}</p>
              <div className="mt-4 flex flex-col gap-1 text-sm text-[#3f2f61] sm:flex-row sm:items-center sm:justify-between">
                <span>{item.family}</span>
                <span>{item.wear}</span>
              </div>
              <p className="section-title mt-3 text-2xl font-semibold text-[#6d4caf]">
                {item.price}
              </p>
            </motion.article>
          ))}
        </motion.section>

        <section className="mt-16 rounded-[2rem] border border-[#6d4caf]/25 bg-gradient-to-r from-[#e9dcff] to-[#d7c0ff] p-8 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6d4caf]">
            Need Help Choosing?
          </p>
          <h2 className="section-title mt-2 text-3xl font-semibold text-[#22143a]">
            Get a personal scent recommendation
          </h2>
          <p className="mt-3 max-w-2xl text-[#3f2f61]">
            Tell me your preferred notes and where you wear perfume most often.
            I will match you with options from this collection.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappRecommendationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#6d4caf] px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#5a3f93]"
            >
              WhatsApp For Recommendations
            </a>
            <Link
              href="/"
              className="rounded-full border border-[#6d4caf]/35 px-6 py-3 text-center text-sm font-semibold text-[#3f2f61] transition hover:border-[#6d4caf]/70"
            >
              Back To Homepage
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#6d4caf]/12 py-7 text-center text-sm text-[#6b5a8b]">
        © {new Date().getFullYear()} Clover Scents. Where fragrance meets elegance.
      </footer>
    </div>
  );
}
