"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { scents } from "@/data/scents";
import {
  whatsappConsultationUrl,
  whatsappContactUrl,
  whatsappOrderUrl,
} from "@/data/contact";

const featuredScents = scents.slice(0, 3);

const testimonials = [
  {
    quote:
      "Every time I wear Velvet Dusk, someone asks me what fragrance I have on.",
    name: "Nomsa M.",
  },
  {
    quote:
      "The scent consultation helped me choose a perfume that feels like me.",
    name: "Thandi K.",
  },
  {
    quote: "Beautiful packaging, long-lasting fragrance, and truly premium feel.",
    name: "Rudo P.",
  },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
    },
  },
};

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative overflow-x-clip">
      <div className="pointer-events-none absolute -left-28 top-8 h-72 w-72 rounded-full bg-[#dbc2ff]/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-40 h-80 w-80 rounded-full bg-[#c4a6ff]/50 blur-3xl" />

      <header className="sticky top-0 z-20 border-b border-[#6d4caf]/12 bg-[#f4efff]/80 backdrop-blur-md">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-10">
          <Link href="/" className="section-title text-2xl font-semibold text-[#22143a]">
            Clover Scents
          </Link>
          <div className="hidden items-center gap-7 text-sm font-medium text-[#3f2f61] md:flex">
            <Link href="/collection" className="transition hover:text-[#8b5cf6]">
              Collection
            </Link>
            <a href="#story" className="transition hover:text-[#8b5cf6]">
              Story
            </a>
            <a href="#testimonials" className="transition hover:text-[#8b5cf6]">
              Reviews
            </a>
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
            aria-controls="mobile-main-menu"
            className="rounded-full border border-[#6d4caf]/35 px-4 py-2 text-sm font-semibold text-[#3f2f61] transition hover:border-[#6d4caf]/70 md:hidden"
          >
            {mobileMenuOpen ? "Close" : "Menu"}
          </button>
        </nav>
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-main-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="border-t border-[#6d4caf]/15 md:hidden"
            >
              <div className="mx-auto max-w-6xl px-6 py-4 md:px-10">
                <div className="flex flex-col gap-2 text-sm font-medium text-[#3f2f61]">
                  <Link
                    href="/collection"
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-xl px-3 py-2 transition hover:bg-white/70"
                  >
                    Collection
                  </Link>
                  <a
                    href="#story"
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-xl px-3 py-2 transition hover:bg-white/70"
                  >
                    Story
                  </a>
                  <a
                    href="#testimonials"
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-xl px-3 py-2 transition hover:bg-white/70"
                  >
                    Reviews
                  </a>
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

      <main className="mx-auto w-full max-w-6xl px-6 pb-24 pt-10 md:px-10 md:pt-16">
        <section className="grid items-center gap-10 pb-20 md:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="space-y-7"
          >
            <motion.p
              variants={fadeInUp}
              className="text-xs font-semibold uppercase tracking-[0.28em] text-[#6d4caf]"
            >
              Clover Scents | Where fragrance meets elegance
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="section-title text-4xl leading-tight font-semibold text-[#22143a] sm:text-5xl lg:text-6xl"
            >
              I create fragrances that feel elegant, personal, and unforgettable.
            </motion.h1>
            <motion.p variants={fadeInUp} className="max-w-xl text-lg text-[#6b5a8b]">
              At Clover Scents, I blend each perfume in small batches for women
              who want a true signature scent. Every bottle is crafted to wear
              beautifully from daytime confidence to evening elegance.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="/collection"
                className="rounded-full bg-[#8b5cf6] px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#6d4caf]"
              >
                Explore The Collection
              </Link>
              <a
                href={whatsappConsultationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#6d4caf]/30 px-6 py-3 text-center text-sm font-semibold text-[#3f2f61] transition hover:border-[#6d4caf]/70"
              >
                Book A Scent Consultation
              </a>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="grid max-w-lg grid-cols-1 gap-3 text-sm text-[#3f2f61] sm:grid-cols-3"
            >
              <div className="glass-panel rounded-2xl px-4 py-4">
                <p className="section-title text-xl font-semibold">3k+</p>
                <p>Happy Clients</p>
              </div>
              <div className="glass-panel rounded-2xl px-4 py-4">
                <p className="section-title text-xl font-semibold">14</p>
                <p>Core Scents</p>
              </div>
              <div className="glass-panel rounded-2xl px-4 py-4">
                <p className="section-title text-xl font-semibold">48h</p>
                <p>Fast Dispatch</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.15 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="glass-panel relative overflow-hidden rounded-[2rem] p-6 shadow-[0_25px_60px_rgba(109,76,175,0.2)]">
              <div className="liquid-orb mx-auto h-48 w-48 rounded-full" />
              <div className="mt-6 space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#6d4caf]">
                  Bestseller trio
                </p>
                {featuredScents.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-2xl border border-[#6d4caf]/15 bg-white/75 px-4 py-3"
                  >
                    <p className="section-title text-lg font-semibold text-[#22143a]">
                      {item.name}
                    </p>
                    <p className="text-sm text-[#6b5a8b]">{item.notes}</p>
                  </div>
                ))}
              </div>
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 5.8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute right-2 top-3 rounded-2xl bg-white/85 px-4 py-3 text-sm shadow-lg sm:-right-8 sm:-top-6"
            >
              <p className="font-semibold text-[#22143a]">Gift wrapping available</p>
            </motion.div>
          </motion.div>
        </section>

        <section className="space-y-8 py-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="max-w-2xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#6d4caf]">
              Collection Preview
            </p>
            <h2 className="section-title mt-2 text-4xl font-semibold text-[#22143a]">
              Explore my full collection on its own page
            </h2>
            <p className="mt-3 text-[#6b5a8b]">
              Browse every scent, fragrance family, and price in a dedicated
              collection experience designed for easy discovery.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="grid gap-5 md:grid-cols-3"
          >
            {featuredScents.map((item, index) => (
              <motion.article
                key={item.name}
                variants={fadeInUp}
                className="glass-panel rounded-3xl p-5 shadow-[0_16px_40px_rgba(109,76,175,0.13)]"
              >
                <div className="rounded-2xl bg-gradient-to-br from-[#efe3ff] via-[#dcc8ff] to-[#b58bff] p-6">
                  <div className="mx-auto h-24 w-16 rounded-b-[1.8rem] rounded-t-2xl border border-white/50 bg-white/45 backdrop-blur-sm" />
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#6d4caf]">
                  Perfume {index + 1}
                </p>
                <h3 className="section-title mt-1 text-2xl font-semibold text-[#22143a]">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm text-[#6b5a8b]">{item.notes}</p>
              </motion.article>
            ))}
          </motion.div>

          <Link
            href="/collection"
            className="inline-flex rounded-full bg-[#6d4caf] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#5a3f93]"
          >
            View Full Collection
          </Link>
        </section>

        <section id="story" className="grid gap-8 py-16 md:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="glass-panel rounded-3xl p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#6d4caf]">
              Brand Story
            </p>
            <h2 className="section-title mt-2 text-4xl font-semibold text-[#22143a]">
              I founded Clover Scents with one belief: where fragrance meets elegance
            </h2>
            <p className="mt-4 text-[#6b5a8b]">
              What started as my personal fragrance passion grew into Clover
              Scents, a boutique perfume studio. I blend every bottle in small
              batches so quality stays exceptional and each scent keeps its own
              distinctive character.
            </p>
            <p className="mt-3 text-[#6b5a8b]">
              My mission is simple: help every client find a fragrance that
              feels like a natural extension of who she is.
            </p>
          </motion.article>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.06 }}
            className="grid gap-4"
          >
            <div className="glass-panel rounded-3xl p-6">
              <p className="section-title text-2xl font-semibold text-[#22143a]">
                Why clients come back
              </p>
              <ul className="mt-4 space-y-3 text-[#3f2f61]">
                <li>Long-lasting concentration with skin-safe ingredients</li>
                <li>Complimentary scent matching for first-time buyers</li>
                <li>Refill and gifting options for recurring orders</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-[#6d4caf]/20 bg-[#f6efff] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6d4caf]">
                Seasonal Note
              </p>
              <p className="section-title mt-2 text-3xl font-semibold text-[#22143a]">
                Spring Capsule Launch
              </p>
              <p className="mt-2 text-[#6b5a8b]">
                Limited citrus-floral batch available until stock runs out.
              </p>
            </div>
          </motion.div>
        </section>

        <section id="testimonials" className="space-y-8 py-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="max-w-2xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#6d4caf]">
              Client Reviews
            </p>
            <h2 className="section-title mt-2 text-4xl font-semibold text-[#22143a]">
              Loved by women who want signature scent energy
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="grid gap-5 md:grid-cols-3"
          >
            {testimonials.map((item) => (
              <motion.blockquote
                key={item.name}
                variants={fadeInUp}
                className="glass-panel rounded-3xl p-6"
              >
                <p className="text-[#3f2f61]">{item.quote}</p>
                <footer className="section-title mt-4 text-xl font-semibold text-[#22143a]">
                  {item.name}
                </footer>
              </motion.blockquote>
            ))}
          </motion.div>
        </section>

        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="rounded-[2rem] border border-[#6d4caf]/25 bg-gradient-to-r from-[#e9dcff] to-[#d7c0ff] p-8 shadow-[0_24px_55px_rgba(109,76,175,0.2)] md:p-10"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6d4caf]">
            Ready To Order
          </p>
            <h2 className="section-title mt-2 text-4xl font-semibold text-[#22143a]">
            Find your Clover Scents signature
            </h2>
          <p className="mt-3 max-w-2xl text-[#3f2f61]">
            Share your order details and I will help you choose the ideal scent
            profile and bottle size. Bulk gifting and bridal packages are also available.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappOrderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#6d4caf] px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#5a3f93]"
            >
              WhatsApp To Order
            </a>
            <a
              href={whatsappConsultationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#6d4caf]/35 px-6 py-3 text-center text-sm font-semibold text-[#3f2f61] transition hover:border-[#6d4caf]/70"
            >
              WhatsApp For Consultation
            </a>
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-[#6d4caf]/12 py-7 text-center text-sm text-[#6b5a8b]">
        © {new Date().getFullYear()} Clover Scents. Where fragrance meets elegance.
      </footer>
    </div>
  );
}
