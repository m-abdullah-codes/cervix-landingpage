import React, { useLayoutEffect, useRef, useState } from "react";
import {
  Play,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import logo from "./assets/logo.png";
import greenishLogo from "./assets/greenish-logo.png";
import automationLogo from "./assets/automation-logo.png";
import leafeLogo from "./assets/leafe-logo.png";
import mindfulnessLogo from "./assets/mindfullness-logo.png";
import heroImage from "./assets/hero.png";
import ornament from "./assets/Ornament.png";
import aboutBehind from "./assets/about-us-behind.png";
import aboutFront from "./assets/about-us-front.jpg";
import aboutMiddle from "./assets/about-us-middle.png";
import avatarImage from "./assets/avatar.png";
import digitalStrategy from "./assets/digital-strategy.jpg";
import uiDesignOne from "./assets/ui-design-1.jpg";
import uiDesignTwo from "./assets/ui-design-2.jpg";
import uiDesignThree from "./assets/ui-design-3.jpg";
import ideateIcon from "./assets/ideate.png";
import researchIcon from "./assets/research.png";
import createIcon from "./assets/create.png";
import testingIcon from "./assets/testing.png";
import contentMarketingIcon from "./assets/services-icons/content-marketing.png";
import graphicDesignIcon from "./assets/services-icons/graphic-designing.png";
import digitalMarketingIcon from "./assets/services-icons/digital-marketing.png";
import webDesignIcon from "./assets/services-icons/web-designing.png";
import itConsultingIcon from "./assets/services-icons/IT-Consulting.png";
import brandIdentityIcon from "./assets/services-icons/brand-identity.png";

// Accent color used across the page
const ACCENT = "#70C5C5";

export default function CanvixLanding() {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900">
      {/* ============================== HERO ============================== */}
      <section className="relative flex min-h-screen flex-col overflow-x-clip bg-[#0A0A0A] text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 65% at 58% 48%, rgba(255,255,255,0.035) 0%, rgba(255,255,255,0.02) 40%, rgba(255,255,255,0.008) 60%, transparent 100%)",
          }}
        />

        {/* Nav */}
        <header className="relative z-10 mx-auto flex w-full max-w-[1400px] items-center justify-between px-8 py-7 lg:px-20">
          <a href="#" className="flex items-center gap-2.5">
            <img
              src={logo}
              alt=""
              className="h-9 w-9 shrink-0"
              aria-hidden
            />
            <span className="text-lg font-semibold tracking-tight">Canvix</span>
          </a>
          <nav className="absolute left-1/2 hidden -translate-x-1/2 gap-12 text-[15px] font-normal md:flex">
            <a href="#" className="hover:opacity-80">
              Home
            </a>
            <a href="#" className="hover:opacity-80">
              About
            </a>
            <a href="#" className="hover:opacity-80">
              Contact Us
            </a>
          </nav>
          <button className="rounded-full bg-white px-6 py-2.5 text-sm font-medium text-black transition hover:bg-neutral-200">
            Get in touch
          </button>
        </header>

        {/* Hero content */}
        <div className="relative mx-auto grid w-full max-w-[1400px] flex-1 grid-cols-1 items-center gap-10 px-8 pb-16 pt-8 md:grid-cols-[minmax(0,1fr)_minmax(0,540px)] md:gap-10 lg:px-20 lg:pb-20 lg:pt-12">
          <div className="flex min-h-[min(520px,calc(100vh-180px))] flex-col py-4 md:py-8">
            <div>
              <div className="relative">
                <img
                  src={ornament}
                  alt=""
                  aria-hidden
                  className="pointer-events-none absolute -left-[120px] -top-[50px] z-0 h-32 w-30 object-cover opacity-50"
                />
                <h1 className="relative z-10 max-w-xl text-[2.75rem] font-bold leading-[1.12] tracking-tight lg:text-[3.5rem]">
                  Ready to take your
                  <br />
                  <span style={{ color: ACCENT }}>Business Growth</span>
                  <br />
                  to the next level?
                </h1>
              </div>
              <p className="mt-10 max-w-sm leading-[1.7] text-neutral-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit metus
                ut tortor purus tincidunt sed lectus ut eros, turpis tincidunt
                id.
              </p>
              <button className="mt-10 inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-neutral-200">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black">
                  <ArrowRight className="h-3 w-3 text-white" />
                </span>
                Start your Free Trial
              </button>
            </div>

            {/* Trusted by */}
            <div className="mt-auto pt-20">
              <p
                className="mb-4 text-sm font-medium"
                style={{ color: ACCENT }}
              >
                Trusted by Leading Brands
              </p>
              <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
                <img
                  src={greenishLogo}
                  alt="Greenish"
                  className="h-12 w-auto object-contain"
                />
                <img
                  src={automationLogo}
                  alt="Automation"
                  className="h-12 w-auto object-contain"
                />
                <img
                  src={leafeLogo}
                  alt="Leafe"
                  className="h-12 w-auto object-contain"
                />
                <img
                  src={mindfulnessLogo}
                  alt="Mindfulness"
                  className="h-12 w-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Circular image with two concentric gradient rings */}
          <div className="relative mx-auto aspect-square w-full max-w-[min(100%,520px)] overflow-visible md:mx-0 md:ml-auto md:max-w-[540px]">
            {/* Radial glow — behind rings and visible through ring gaps */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-[-52%] z-[1] rounded-full blur-[56px]"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, rgba(153, 237, 229, 0.2) 0%, rgba(178, 241, 235, 0.14) 20%, rgba(215, 246, 243, 0.08) 38%, rgba(234, 249, 247, 0.04) 55%, rgba(153, 237, 229, 0.015) 72%, rgba(153, 237, 229, 0.005) 88%, transparent 100%)",
              }}
            />

            {/* Gradient rings — SVG stroke only, no fill */}
            <svg
              aria-hidden
              className="pointer-events-none absolute inset-0 z-[2] h-full w-full"
              viewBox="0 0 100 100"
            >
              <defs>
                <linearGradient
                  id="hero-outer-ring"
                  x1="0.5"
                  y1="0"
                  x2="0.5"
                  y2="1"
                >
                  <stop offset="0%" stopColor="rgba(251, 251, 251, 0.4)" />
                  <stop offset="53.12%" stopColor="rgba(6, 248, 225, 0.4)" />
                  <stop offset="100%" stopColor="rgba(100, 204, 197, 0.4)" />
                </linearGradient>
                <linearGradient
                  id="hero-inner-ring"
                  x1="0.5"
                  y1="0"
                  x2="0.5"
                  y2="1"
                >
                  <stop offset="11.46%" stopColor="rgba(255, 255, 255, 0.22)" />
                  <stop offset="50%" stopColor="rgba(0, 0, 0, 0.22)" />
                  <stop offset="94.27%" stopColor="rgba(153, 237, 229, 0.22)" />
                </linearGradient>
              </defs>
              <circle
                cx="50"
                cy="50"
                r="49"
                fill="none"
                stroke="url(#hero-outer-ring)"
                strokeWidth="0.25"
              />
              <circle
                cx="50"
                cy="50"
                r="44"
                fill="none"
                stroke="url(#hero-inner-ring)"
                strokeWidth="0.25"
              />
            </svg>

            {/* Hero image */}
            <div className="absolute inset-[12.5%] z-[3] overflow-hidden rounded-full">
              <img
                src={heroImage}
                alt="Team collaborating"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================== SERVICES ============================== */}
      <section className="bg-white px-8 py-24">
        <div className="mx-auto max-w-6xl">
          <p
            className="text-center text-sm font-medium"
            style={{ color: ACCENT }}
          >
            Our Services
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl text-center text-4xl font-bold leading-tight md:text-5xl">
            High-impact services
            <br />
            for your business
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            <ServiceCard
              iconSrc={contentMarketingIcon}
              title="Content Marketing"
              desc="Our team creates engaging and shareable content that resonates with your audience, drives organic traffic."
              dark
            />
            <ServiceCard
              iconSrc={graphicDesignIcon}
              title="Graphic Design"
              desc="Unlock the power of visual storytelling with our expert graphic design services tailored to elevate your brand and captivate."
            />
            <ServiceCard
              iconSrc={digitalMarketingIcon}
              title="Digital Marketing"
              desc="Elevate your brand's online presence with our data-driven digital marketing strategies. From SEO and content marketing."
            />
            <ServiceCard
              iconSrc={webDesignIcon}
              title="Web Design"
              desc="We specialize in creating visually stunning, user-friendly websites that align with your brand identity and deliver an exceptional."
            />
            <ServiceCard
              iconSrc={itConsultingIcon}
              title="IT Consulting"
              desc="IT consulting, or information technology consulting, refers to the practice of providing advisory and implementation services."
            />
            <ServiceCard
              iconSrc={brandIdentityIcon}
              title="Brand Identity"
              desc="It involves creating a unique and recognizable identity that sets the brand apart from competitors and resonates with the target audience."
            />
          </div>
        </div>
      </section>

      {/* ============================== ABOUT ============================== */}
      <section className="overflow-visible bg-black px-6 py-24 text-white sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 overflow-visible lg:grid-cols-2 lg:gap-20">
          {/* Stacked photo cards — back layers peek out to the left */}
          <div className="relative mx-auto h-[220px] w-full max-w-[min(100%,220px)] overflow-visible min-[380px]:h-[300px] min-[380px]:max-w-[min(100%,300px)] sm:ml-auto sm:h-[460px] sm:max-w-[560px] lg:ml-0">
            <div className="absolute -left-3 top-0 aspect-square w-[85%] overflow-hidden rounded-2xl opacity-20 min-[380px]:-left-4 sm:-left-8 sm:h-[400px] sm:w-[400px] sm:max-w-none">
              <img
                src={aboutBehind}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute left-[3%] top-[4%] aspect-square w-[85%] overflow-hidden rounded-2xl opacity-40 min-[380px]:left-3 min-[380px]:top-4 sm:left-4 sm:h-[400px] sm:w-[400px] sm:max-w-none">
              <img
                src={aboutMiddle}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute left-[12%] top-[8%] aspect-square w-[85%] overflow-hidden rounded-2xl min-[380px]:left-10 min-[380px]:top-7 sm:left-16 sm:top-9 sm:h-[400px] sm:w-[400px] sm:max-w-none">
              <img
                src={aboutFront}
                alt="Our team"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div>
            <p
              className="text-sm font-medium lowercase"
              style={{ color: "#5EB1B1" }}
            >
              About us
            </p>
            <h2 className="mt-4 text-[2.5rem] font-bold leading-[1.15] tracking-tight sm:text-5xl">
              The core mission
              <br />
              behind all our
              <br />
              work
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-neutral-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit metus
              ut tortor purus tincidunt sed lectus ut eros, turpis tincidunt id.
            </p>

            <div className="mt-10 flex gap-16">
              <div>
                <p
                  className="text-4xl font-semibold tracking-tight"
                  style={{ color: "#5EB1B1" }}
                >
                  330 +
                </p>
                <p className="mt-2 text-neutral-400">Companies helped</p>
              </div>
              <div>
                <p
                  className="text-4xl font-semibold tracking-tight"
                  style={{ color: "#5EB1B1" }}
                >
                  230 +
                </p>
                <p className="mt-2 text-neutral-400">Revenue generated</p>
              </div>
            </div>

            <button className="mt-10 inline-flex items-center gap-3 rounded-full bg-white py-2.5 pl-2 pr-6 text-sm font-medium text-black transition hover:bg-neutral-200">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black">
                <ChevronRight className="h-4 w-4 text-white" strokeWidth={2.5} />
              </span>
              Start your Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* ============================== PROCESS ============================== */}
      <section className="bg-white px-8 py-24">
        <div className="mx-auto max-w-6xl">
          <p
            className="text-center text-sm font-medium"
            style={{ color: ACCENT }}
          >
            Process
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl text-center text-4xl font-bold leading-tight md:text-5xl">
            Process that moves
            <br />
            things forward
          </h2>

          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-8">
            <ProcessStep
              iconSrc={ideateIcon}
              title="Ideate"
              desc="The ideation process is a crucial phase in the design process where creative thinking and brainstorming."
            />
            <ProcessStep
              iconSrc={researchIcon}
              title="Research"
              desc="Research is a critical component of the design process, helping designers understand the problem."
            />
            <ProcessStep
              iconSrc={createIcon}
              title="Create"
              desc="Designing a process involves several key steps to ensure clarity, efficiency, successful implementation."
            />
            <ProcessStep
              iconSrc={testingIcon}
              title="Testing"
              desc="Testing is a crucial phase in the design process to ensure that the product or system meets the specified requirements."
              showArrow={false}
            />
          </div>
        </div>
      </section>

      {/* ============================== RECENT SHOWCASE ============================== */}
      <section className="bg-white px-8 pb-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-4xl font-bold md:text-5xl">
            Recent Showcase
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Col 1 */}
            <div className="space-y-8">
              <ShowcaseCard
                img={uiDesignOne}
                title="Web UI design"
                subtitle="Creative UI design"
              />
              <ShowcaseCard
                img={uiDesignTwo}
                title="UI Design"
                subtitle="Creative Rebranding for logo"
              />
            </div>
            {/* Col 2 (offset) */}
            <div className="space-y-8 md:pt-20">
              <ShowcaseCard
                img={digitalStrategy}
                title="To design Digital Strategy"
                subtitle="Social Media Marketing"
                button
              />
              <ShowcaseCard
                img={uiDesignThree}
                title="UI Design"
                subtitle="Creative Rebranding for logo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================== TESTIMONIAL ============================== */}
      <section className="bg-white px-8 pb-24">
        <div className="mx-auto max-w-4xl">
          <div className="relative rounded-2xl bg-[#F5F5F5] px-8 py-16 text-center">
            <div className="absolute left-1/2 top-0 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-neutral-900">
              <img
                src={avatarImage}
                alt="Jacqueline Miller"
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mx-auto max-w-2xl font-serif text-sm font-medium leading-relaxed text-neutral-900">
              &ldquo;Be genuine in your assessment, and provide constructive
              feedback to benefit both potential customers and the company
              providing the product or service.&rdquo;
            </p>
            <p className="mt-6 text-sm font-semibold">Jacqueline Miller</p>
            <p className="text-xs text-neutral-500">CEO of an eduport</p>
            <div className="mt-6 flex justify-center gap-2">
              <button className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-300 transition hover:bg-neutral-900 hover:text-white">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-300 transition hover:bg-neutral-900 hover:text-white">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== FOOTER ============================== */}
      <footer className="bg-black px-8 pb-10 pt-20 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-14 md:grid-cols-[1.35fr_0.9fr_1fr_1.35fr] md:gap-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3">
                <img
                  src={logo}
                  alt=""
                  className="h-10 w-10 shrink-0"
                  aria-hidden
                />
                <span className="font-serif text-[1.35rem] font-bold tracking-tight">
                  Canvix
                </span>
              </div>
              <p className="mt-5 max-w-[250px] font-sans text-[0.8125rem] font-normal leading-[1.7] text-white">
                We&apos;re a team of strategic creator and digital innovator,
                united focus in our pursuit of mastery and joyful.
              </p>
            </div>

            {/* Pages */}
            <div>
              <p className="font-serif text-[0.9375rem] font-bold">Pages</p>
              <ul className="mt-5 space-y-2.5 font-sans text-[0.8125rem] font-normal">
                <li>
                  <a href="#" className="transition hover:opacity-70">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:opacity-70">
                    Home 2
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:opacity-70">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:opacity-70">
                    Conatct Us
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:opacity-70">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:opacity-70">
                    Portfolio Single
                  </a>
                </li>
              </ul>
            </div>

            {/* Utility */}
            <div>
              <p className="font-serif text-[0.9375rem] font-bold">
                Utility Pages
              </p>
              <ul className="mt-5 space-y-2.5 font-sans text-[0.8125rem] font-normal">
                <li>
                  <a href="#" className="transition hover:opacity-70">
                    Style Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:opacity-70">
                    Instruction
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:opacity-70">
                    License
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:opacity-70">
                    Changelog
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:opacity-70">
                    Error 404
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:opacity-70">
                    Password Protected
                  </a>
                </li>
              </ul>
            </div>

            {/* Subscribe */}
            <div>
              <p className="font-serif text-[0.9375rem] font-bold">
                Subscribe
              </p>
              <div className="relative mt-5">
                <input
                  type="email"
                  placeholder="Enter your email here"
                  className="w-full rounded-full bg-white py-3.5 pl-5 pr-[7.25rem] font-sans text-[0.8125rem] font-normal text-neutral-900 outline-none placeholder:text-neutral-500"
                />
                <button
                  type="button"
                  className="absolute right-1 top-1 bottom-1 rounded-full bg-[#1A1A1A] px-5 font-sans text-[0.8125rem] font-medium text-white transition hover:bg-black"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-white/15 pt-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-6">
              <div>
                <p className="font-serif text-[0.9375rem] font-bold">
                  Copyright by
                </p>
                <p className="mt-2 font-sans text-[0.8125rem] font-normal text-neutral-400">
                  Designed by Iconstica.com
                </p>
              </div>
              <div>
                <p className="font-serif text-[0.9375rem] font-bold">
                  Contact Us
                </p>
                <p className="mt-2 font-sans text-[0.8125rem] font-normal text-neutral-400">
                  +0 12 457 4578
                </p>
              </div>
              <div>
                <p className="font-serif text-[0.9375rem] font-bold">
                  Address
                </p>
                <p className="mt-2 font-sans text-[0.8125rem] font-normal text-neutral-400">
                  119 Tanglewood Lane Gulfport, MS 39503
                </p>
              </div>
              <div className="flex items-start gap-3 md:justify-end">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black transition hover:bg-neutral-200"
                >
                  <Facebook className="h-4 w-4" strokeWidth={2.25} />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black transition hover:bg-neutral-200"
                >
                  <Instagram className="h-4 w-4" strokeWidth={2.25} />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black transition hover:bg-neutral-200"
                >
                  <Linkedin className="h-4 w-4" strokeWidth={2.25} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ----------------------------- Sub-components ----------------------------- */

function ServiceCard({ iconSrc, title, desc, dark }) {
  return (
    <div
      className={`rounded-2xl p-7 transition ${
        dark
          ? "bg-[#111] text-white"
          : "bg-[#F2F2F2] text-neutral-900 hover:bg-[#EAEAEA]"
      }`}
    >
      <div
        className={`flex h-11 w-11 items-center justify-center rounded-full ${
          dark ? "bg-white" : "bg-black"
        }`}
      >
        <img
          src={iconSrc}
          alt=""
          className="h-5 w-5 object-contain"
          style={dark ? { filter: "brightness(0)" } : undefined}
        />
      </div>
      <h3 className="mt-16 text-lg font-semibold">{title}</h3>
      <p
        className={`mt-3 leading-relaxed ${
          dark ? "text-neutral-400" : "text-neutral-600"
        }`}
      >
        {desc}
      </p>
    </div>
  );
}

function buildDesktopPath({ startX, startY, arrowY, showArrow }) {
  const r = 8;
  const sx = Math.max(r + 0.5, Math.min(100, startX));
  const sy = Math.max(0, Math.min(92 - r, startY));
  const ay = Math.max(sy + r + 4, Math.min(92, arrowY));

  const base = `M ${sx} ${sy} H ${r} A ${r} ${r} 0 0 0 0 ${sy + r} V ${100 - r} A ${r} ${r} 0 0 0 ${r} 100 H ${100 - r} A ${r} ${r} 0 0 0 100 ${100 - r} V ${ay}`;

  return showArrow
    ? `${base} H 118 M 114 ${ay - 4} L 118 ${ay} L 114 ${ay + 4}`
    : base;
}

function buildMobilePath({ startX, startY, showArrow }) {
  const r = 8;
  const sx = Math.max(r + 0.5, Math.min(100, startX));
  const sy = Math.max(0, Math.min(92 - r, startY));
  const ax = 50;

  const base = `M ${sx} ${sy} H ${r} A ${r} ${r} 0 0 0 0 ${sy + r} V ${100 - r} A ${r} ${r} 0 0 0 ${r} 100 H ${ax}`;

  return showArrow
    ? `${base} V 118 M ${ax - 4} 114 L ${ax} 118 L ${ax + 4} 114`
    : base;
}

function ProcessStep({ iconSrc, title, desc, showArrow = true }) {
  const stroke = "#e5e7eb";
  const containerRef = useRef(null);
  const iconRef = useRef(null);
  const textRef = useRef(null);
  const [paths, setPaths] = useState(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const icon = iconRef.current;
    const text = textRef.current;
    if (!container || !icon) return;

    const measure = () => {
      const c = container.getBoundingClientRect();
      const i = icon.getBoundingClientRect();
      const t = text?.getBoundingClientRect();

      const toX = (px) => ((px - c.left) / c.width) * 100;
      const toY = (px) => ((px - c.top) / c.height) * 100;

      const startX = toX(i.left);
      const startY = toY(i.top + i.height / 2);
      const arrowY = t ? toY(t.top + t.height / 2) : startY;

      setPaths({
        desktop: buildDesktopPath({ startX, startY, arrowY, showArrow }),
        mobile: buildMobilePath({ startX, startY, showArrow }),
      });
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(container);

    return () => observer.disconnect();
  }, [showArrow, desc, title]);

  const desktopPath =
    paths?.desktop ??
    (showArrow
      ? "M 9 24 H 8 A 8 8 0 0 0 0 32 V 92 A 8 8 0 0 0 8 100 H 92 A 8 8 0 0 0 100 92 V 62 H 118 M 114 58 L 118 62 L 114 66"
      : "M 9 24 H 8 A 8 8 0 0 0 0 32 V 92 A 8 8 0 0 0 8 100 H 92 A 8 8 0 0 0 100 92 V 62");

  const mobilePath =
    paths?.mobile ??
    (showArrow
      ? "M 9 24 H 8 A 8 8 0 0 0 0 32 V 92 A 8 8 0 0 0 8 100 H 50 V 118 M 46 114 L 50 118 L 54 114"
      : "M 9 24 H 8 A 8 8 0 0 0 0 32 V 92 A 8 8 0 0 0 8 100 H 50");

  return (
    <div
      className={`relative ${showArrow ? "pb-7 md:pb-0 md:pr-7" : ""}`}
    >
      <div ref={containerRef} className="relative px-5 py-6">
        <svg
          className="pointer-events-none absolute inset-0 hidden h-full w-full overflow-visible md:block"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          fill="none"
          aria-hidden
        >
          <path
            d={desktopPath}
            stroke={stroke}
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full overflow-visible md:hidden"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          fill="none"
          aria-hidden
        >
          <path
            d={mobilePath}
            stroke={stroke}
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <div className="relative flex items-center gap-3">
          <div
            ref={iconRef}
            className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-900"
          >
            <img src={iconSrc} alt="" className="h-5 w-5 object-contain" />
          </div>
          <h3 className="font-serif text-lg font-bold text-black">{title}</h3>
        </div>
        <p
          ref={textRef}
          className="relative mt-4 leading-relaxed text-neutral-500"
        >
          {desc}
        </p>
      </div>
    </div>
  );
}

function ShowcaseCard({ img, title, subtitle, button }) {
  return (
    <div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
        <img src={img} alt={title} className="h-full w-full object-cover" />
        {button && (
          <button className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-2 text-xs font-medium text-black shadow">
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-black">
              <Play className="h-2 w-2 fill-white text-white" />
            </span>
            Start your Free Trial
          </button>
        )}
      </div>
      <h3 className="mt-4 text-base font-semibold">{title}</h3>
      <p className="mt-1 text-neutral-500">{subtitle}</p>
    </div>
  );
}
