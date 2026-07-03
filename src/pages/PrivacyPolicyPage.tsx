import { useEffect } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Database,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";

const policyNavigation = [
  { label: "Information We Collect", href: "#information-we-collect" },
  { label: "How We Use Information", href: "#how-we-use-information" },
  { label: "Legal Basis", href: "#legal-basis" },
  { label: "Sharing Your Information", href: "#sharing-information" },
  { label: "Data Storage and Security", href: "#storage-security" },
  { label: "Data Retention", href: "#data-retention" },
  { label: "International Transfers", href: "#international-transfers" },
  { label: "Your Privacy Rights", href: "#privacy-rights" },
  { label: "Cookies and Technical Data", href: "#cookies" },
  { label: "Children’s Privacy", href: "#children" },
  { label: "Policy Updates", href: "#policy-updates" },
  { label: "Contact Us", href: "#contact-us" },
];

const collectedInformation = [
  {
    title: "Contact Information",
    description:
      "Your full name, phone number, and email address when you submit a project request.",
  },
  {
    title: "Project Information",
    description:
      "The marketing service you need and the type of business or industry you operate in.",
  },
  {
    title: "Submission Information",
    description:
      "The date and time of your request and the website page from which the request was submitted.",
  },
  {
    title: "Technical Information",
    description:
      "Our hosting infrastructure may process technical information such as IP address, browser type, device details, and request logs.",
  },
];

function PrivacyPolicyPage() {
  useEffect(() => {
    document.title = "Privacy Policy | A Plus Aura";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header
        className="
          sticky top-0 z-50
          border-b border-black/10
          bg-white/95 backdrop-blur-md
        "
      >
        <div
          className="
            mx-auto flex h-[80px]
            max-w-[1280px]
            items-center justify-between
            px-5 sm:px-8
          "
        >
          <a
            href="/#home"
            className="flex items-center"
            aria-label="Return to A Plus Aura home page"
          >
            <img
              src="/logo.png"
              alt="A Plus Aura"
              className="
                h-auto w-[135px] object-contain
                sm:w-[150px]
              "
            />
          </a>

          <a
            href="/#home"
            className="
              group inline-flex min-h-11
              items-center justify-center gap-2
              border border-black
              px-5 py-3
              text-sm font-semibold
              transition-colors duration-300
              hover:bg-black hover:text-white
            "
          >
            <ArrowLeft
              size={17}
              className="
                transition-transform duration-300
                group-hover:-translate-x-1
              "
            />

            Back to Website
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-black text-white">
          <div
            className="
              pointer-events-none absolute
              -right-32 -top-48
              size-[520px] rounded-full
              border border-white/10
            "
          />

          <div
            className="
              pointer-events-none absolute
              -bottom-56 -left-32
              size-[520px] rounded-full
              border border-white/10
            "
          />

          <div
            className="
              relative mx-auto max-w-[1280px]
              px-5 py-20
              sm:px-8 sm:py-24
              lg:py-32
            "
          >
            <div className="max-w-[900px]">
              <div
                className="
                  inline-flex items-center gap-3
                  text-xs font-bold uppercase
                  tracking-[0.22em] text-white/45
                "
              >
                <ShieldCheck size={17} />
                Legal Information
              </div>

              <h1
                className="
                  mt-7
                  text-[clamp(3.2rem,7vw,7rem)]
                  font-black leading-[0.85]
                  tracking-[-0.065em]
                "
              >
                Privacy
                <span className="block text-white/45">
                  Policy.
                </span>
              </h1>

              <p
                className="
                  mt-8 max-w-[700px]
                  text-base leading-8 text-white/60
                  sm:text-lg
                "
              >
                This Privacy Policy explains how A Plus Aura collects, uses,
                stores, and protects personal information submitted through
                this website.
              </p>

              <div
                className="
                  mt-10 flex flex-wrap gap-x-10 gap-y-4
                  border-t border-white/15 pt-6
                  text-sm text-white/45
                "
              >
                <p>
                  <span className="font-semibold text-white">
                    Effective Date:
                  </span>{" "}
                  July 3, 2026
                </p>

                <p>
                  <span className="font-semibold text-white">
                    Last Updated:
                  </span>{" "}
                  July 3, 2026
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Policy content */}
        <section className="bg-white py-16 sm:py-20 lg:py-28">
          <div
            className="
              mx-auto grid max-w-[1280px]
              items-start gap-12
              px-5 sm:px-8
              lg:grid-cols-[280px_minmax(0,1fr)]
              lg:gap-20
            "
          >
            {/* Side navigation */}
            <aside className="hidden lg:sticky lg:top-[112px] lg:block">
              <p
                className="
                  text-xs font-bold uppercase
                  tracking-[0.2em] text-black/40
                "
              >
                On This Page
              </p>

              <nav className="mt-6 border-l border-black/15">
                {policyNavigation.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="
                      block border-l-2
                      border-transparent
                      px-5 py-2.5
                      text-sm text-black/50
                      transition-colors duration-200
                      hover:border-black
                      hover:font-semibold
                      hover:text-black
                    "
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </aside>

            <article className="min-w-0 max-w-[850px]">
              {/* Introduction */}
              <section>
                <p
                  className="
                    text-xs font-bold uppercase
                    tracking-[0.2em] text-black/40
                  "
                >
                  Introduction
                </p>

                <h2
                  className="
                    mt-5
                    text-[clamp(2.2rem,4vw,4rem)]
                    font-black leading-[0.95]
                    tracking-[-0.05em]
                  "
                >
                  Your Privacy Matters to Us.
                </h2>

                <div className="mt-7 space-y-5 text-base leading-8 text-black/65">
                  <p>
                    A Plus Aura respects your privacy and is committed to
                    handling personal information responsibly and
                    transparently.
                  </p>

                  <p>
                    This policy applies to information collected through the
                    A Plus Aura website, including information submitted
                    through the Start Your Project form and other contact
                    methods available through the website.
                  </p>

                  <p>
                    By submitting information through the website, you
                    acknowledge that your information will be handled as
                    described in this Privacy Policy.
                  </p>
                </div>
              </section>

              {/* Information collected */}
              <section
                id="information-we-collect"
                className="scroll-mt-28 border-t border-black/10 pt-12 mt-14"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="
                      grid size-11 shrink-0
                      place-items-center rounded-xl
                      bg-black text-white
                    "
                  >
                    <Database size={20} />
                  </span>

                  <h2
                    className="
                      text-3xl font-black
                      tracking-[-0.04em]
                      sm:text-4xl
                    "
                  >
                    Information We Collect
                  </h2>
                </div>

                <p className="mt-6 text-base leading-8 text-black/60">
                  We collect information that you voluntarily provide, along
                  with limited technical information required to operate and
                  secure the website.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {collectedInformation.map((item) => (
                    <article
                      key={item.title}
                      className="
                        rounded-2xl
                        border border-black/10
                        bg-[#f6f6f6] p-6
                      "
                    >
                      <h3 className="text-base font-bold">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-black/55">
                        {item.description}
                      </p>
                    </article>
                  ))}
                </div>

                <p
                  className="
                    mt-6 rounded-2xl
                    border border-black/10
                    bg-white p-5
                    text-sm leading-7 text-black/55
                  "
                >
                  Please do not submit payment card information, passwords,
                  government identification numbers, medical information, or
                  other sensitive personal data through the project inquiry
                  form.
                </p>
              </section>

              {/* How used */}
              <section
                id="how-we-use-information"
                className="scroll-mt-28 border-t border-black/10 pt-12 mt-14"
              >
                <h2 className="text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                  How We Use Your Information
                </h2>

                <p className="mt-6 text-base leading-8 text-black/60">
                  We may use the information collected through the website to:
                </p>

                <ul className="mt-7 grid gap-4">
                  {[
                    "Review and respond to your project inquiry.",
                    "Contact you by phone, email, or another contact method you provide.",
                    "Understand your business, industry, and marketing requirements.",
                    "Prepare proposals, quotations, recommendations, or service plans.",
                    "Manage prospective and existing client relationships.",
                    "Improve our website, services, and customer experience.",
                    "Prevent fraud, misuse, security threats, and technical problems.",
                    "Comply with applicable laws and legitimate legal requests.",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-4 text-base leading-7 text-black/65"
                    >
                      <span className="mt-3 size-1.5 shrink-0 rounded-full bg-black" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Legal basis */}
              <section
                id="legal-basis"
                className="scroll-mt-28 border-t border-black/10 pt-12 mt-14"
              >
                <h2 className="text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                  Legal Basis for Processing
                </h2>

                <div className="mt-6 space-y-5 text-base leading-8 text-black/60">
                  <p>
                    Depending on the circumstances and applicable law, we may
                    process your information because you requested information
                    or services, provided your consent, or because processing
                    is necessary for our legitimate business interests.
                  </p>

                  <p>
                    We may also process information where necessary to comply
                    with legal obligations, protect our rights, maintain
                    website security, or establish and defend legal claims.
                  </p>
                </div>
              </section>

              {/* Sharing */}
              <section
                id="sharing-information"
                className="scroll-mt-28 border-t border-black/10 pt-12 mt-14"
              >
                <h2 className="text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                  Sharing Your Information
                </h2>

                <p className="mt-6 text-base leading-8 text-black/60">
                  We do not sell or rent personal information submitted through
                  the website.
                </p>

                <p className="mt-5 text-base leading-8 text-black/60">
                  Information may be shared only when reasonably necessary
                  with:
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <article className="rounded-2xl border border-black/10 p-6">
                    <h3 className="font-bold">Authorized Team Members</h3>
                    <p className="mt-3 text-sm leading-7 text-black/55">
                      A Plus Aura employees, contractors, or representatives
                      who need access to manage your inquiry.
                    </p>
                  </article>

                  <article className="rounded-2xl border border-black/10 p-6">
                    <h3 className="font-bold">Technology Providers</h3>
                    <p className="mt-3 text-sm leading-7 text-black/55">
                      Providers supporting website hosting, form processing,
                      data storage, and communication.
                    </p>
                  </article>

                  <article className="rounded-2xl border border-black/10 p-6">
                    <h3 className="font-bold">Professional Advisers</h3>
                    <p className="mt-3 text-sm leading-7 text-black/55">
                      Lawyers, accountants, auditors, or consultants where
                      reasonably necessary.
                    </p>
                  </article>

                  <article className="rounded-2xl border border-black/10 p-6">
                    <h3 className="font-bold">Legal Authorities</h3>
                    <p className="mt-3 text-sm leading-7 text-black/55">
                      Government bodies or law-enforcement authorities where
                      disclosure is legally required.
                    </p>
                  </article>
                </div>
              </section>

              {/* Storage and security */}
              <section
                id="storage-security"
                className="scroll-mt-28 border-t border-black/10 pt-12 mt-14"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="
                      grid size-11 shrink-0
                      place-items-center rounded-xl
                      bg-black text-white
                    "
                  >
                    <LockKeyhole size={20} />
                  </span>

                  <h2 className="text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                    Data Storage and Security
                  </h2>
                </div>

                <div className="mt-6 space-y-5 text-base leading-8 text-black/60">
                  <p>
                    Project inquiry information is currently processed through
                    the website’s Vercel-hosted infrastructure and stored using
                    Google Sheets and Google Apps Script.
                  </p>

                  <p>
                    We take reasonable administrative and technical measures
                    to restrict unauthorized access, alteration, disclosure,
                    or destruction of personal information. Access should be
                    limited to authorized people who require it for legitimate
                    business purposes.
                  </p>

                  <p>
                    No online system or transmission method can be guaranteed
                    to be completely secure. You should avoid submitting
                    confidential information that is not required for your
                    inquiry.
                  </p>
                </div>
              </section>

              {/* Retention */}
              <section
                id="data-retention"
                className="scroll-mt-28 border-t border-black/10 pt-12 mt-14"
              >
                <h2 className="text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                  Data Retention
                </h2>

                <p className="mt-6 text-base leading-8 text-black/60">
                  We retain personal information only for as long as reasonably
                  necessary to respond to your inquiry, manage a potential or
                  active client relationship, maintain appropriate business
                  records, resolve disputes, and comply with legal obligations.
                </p>

                <p className="mt-5 text-base leading-8 text-black/60">
                  When information is no longer required, we may delete,
                  anonymize, or securely archive it, subject to applicable
                  legal and operational requirements.
                </p>
              </section>

              {/* International transfers */}
              <section
                id="international-transfers"
                className="scroll-mt-28 border-t border-black/10 pt-12 mt-14"
              >
                <h2 className="text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                  International Data Transfers
                </h2>

                <p className="mt-6 text-base leading-8 text-black/60">
                  Some technology providers used by the website operate
                  internationally. Your information may therefore be
                  processed or stored in countries other than the country
                  where you submitted it.
                </p>

                <p className="mt-5 text-base leading-8 text-black/60">
                  Where required by applicable law, reasonable safeguards
                  should be used to protect personal information transferred
                  internationally.
                </p>
              </section>

              {/* Rights */}
              <section
                id="privacy-rights"
                className="scroll-mt-28 border-t border-black/10 pt-12 mt-14"
              >
                <h2 className="text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                  Your Privacy Rights
                </h2>

                <p className="mt-6 text-base leading-8 text-black/60">
                  Subject to applicable law, you may have the right to:
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    "Request access to personal information we hold about you.",
                    "Ask us to correct inaccurate or incomplete information.",
                    "Request deletion of your information where legally permitted.",
                    "Object to or request restriction of certain processing.",
                    "Withdraw consent where processing is based on consent.",
                    "Submit a complaint to the relevant data-protection authority.",
                  ].map((right) => (
                    <div
                      key={right}
                      className="
                        rounded-2xl
                        border border-black/10
                        bg-[#f6f6f6] p-5
                        text-sm leading-7 text-black/60
                      "
                    >
                      {right}
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-sm leading-7 text-black/50">
                  We may need to verify your identity before responding to a
                  privacy request.
                </p>
              </section>

              {/* Cookies */}
              <section
                id="cookies"
                className="scroll-mt-28 border-t border-black/10 pt-12 mt-14"
              >
                <h2 className="text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                  Cookies and Technical Data
                </h2>

                <div className="mt-6 space-y-5 text-base leading-8 text-black/60">
                  <p>
                    The current website does not intentionally use advertising
                    cookies through the project inquiry form.
                  </p>

                  <p>
                    Essential technical information and hosting logs may still
                    be processed to deliver the website, maintain security,
                    diagnose errors, and prevent abuse.
                  </p>

                  <p>
                    If analytics, advertising pixels, or additional cookies
                    are introduced later, this policy should be updated and
                    any legally required consent mechanism should be provided.
                  </p>
                </div>
              </section>

              {/* Children */}
              <section
                id="children"
                className="scroll-mt-28 border-t border-black/10 pt-12 mt-14"
              >
                <h2 className="text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                  Children’s Privacy
                </h2>

                <p className="mt-6 text-base leading-8 text-black/60">
                  The website and A Plus Aura’s business services are not
                  directed to children. We do not knowingly request personal
                  information from children through the project inquiry form.
                </p>

                <p className="mt-5 text-base leading-8 text-black/60">
                  If you believe that a child has submitted personal
                  information without appropriate permission, please contact
                  us so the information can be reviewed and deleted where
                  appropriate.
                </p>
              </section>

              {/* Links */}
              <section className="border-t border-black/10 pt-12 mt-14">
                <h2 className="text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                  Third-Party Services and Links
                </h2>

                <p className="mt-6 text-base leading-8 text-black/60">
                  The website may contain links to external websites or use
                  third-party platforms. Those providers maintain their own
                  privacy practices, and A Plus Aura is not responsible for
                  external websites that it does not control.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noreferrer"
                    className="
                      group inline-flex items-center gap-2
                      rounded-full border border-black/15
                      px-5 py-3 text-sm font-semibold
                      transition-colors duration-300
                      hover:bg-black hover:text-white
                    "
                  >
                    Google Privacy Policy
                    <ArrowUpRight size={16} />
                  </a>

                  <a
                    href="https://vercel.com/legal/privacy-notice"
                    target="_blank"
                    rel="noreferrer"
                    className="
                      group inline-flex items-center gap-2
                      rounded-full border border-black/15
                      px-5 py-3 text-sm font-semibold
                      transition-colors duration-300
                      hover:bg-black hover:text-white
                    "
                  >
                    Vercel Privacy Notice
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </section>

              {/* Updates */}
              <section
                id="policy-updates"
                className="scroll-mt-28 border-t border-black/10 pt-12 mt-14"
              >
                <h2 className="text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                  Changes to This Policy
                </h2>

                <p className="mt-6 text-base leading-8 text-black/60">
                  We may update this Privacy Policy when our website,
                  services, technologies, or legal obligations change.
                </p>

                <p className="mt-5 text-base leading-8 text-black/60">
                  The latest version will be published on this page with an
                  updated effective or revision date. Material changes may be
                  communicated through the website where appropriate.
                </p>
              </section>

              {/* Contact */}
              <section
                id="contact-us"
                className="
                  scroll-mt-28 mt-14
                  overflow-hidden rounded-[28px]
                  bg-black p-7 text-white
                  sm:p-10
                "
              >
                <p
                  className="
                    text-xs font-bold uppercase
                    tracking-[0.2em] text-white/40
                  "
                >
                  Privacy Requests
                </p>

                <h2
                  className="
                    mt-5
                    text-[clamp(2rem,4vw,3.7rem)]
                    font-black leading-[0.95]
                    tracking-[-0.05em]
                  "
                >
                  Questions About Your Data?
                </h2>

                <p className="mt-6 max-w-[650px] text-base leading-8 text-white/60">
                  To request access, correction, or deletion of your personal
                  information, contact A Plus Aura through the website or
                  WhatsApp. Please provide enough information for us to
                  identify the relevant request.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="/#contact"
                    className="
                      inline-flex min-h-12
                      items-center justify-center
                      bg-white px-6 py-3
                      font-semibold text-black
                      transition-colors duration-300
                      hover:bg-white/80
                    "
                  >
                    Contact Through Website
                  </a>

                  <a
                    href="https://wa.me/201557642021"
                    target="_blank"
                    rel="noreferrer"
                    className="
                      inline-flex min-h-12
                      items-center justify-center gap-2
                      border border-white/25
                      px-6 py-3 font-semibold text-white
                      transition-colors duration-300
                      hover:border-white
                      hover:bg-white hover:text-black
                    "
                  >
                    Contact on WhatsApp
                    <ArrowUpRight size={17} />
                  </a>
                </div>
              </section>
            </article>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black text-white">
        <div
          className="
            mx-auto flex max-w-[1280px]
            flex-col gap-6 px-5 py-8
            sm:px-8 md:flex-row
            md:items-center md:justify-between
          "
        >
          <img
            src="/logo.png"
            alt="A Plus Aura"
            className="h-auto w-[145px] brightness-0 invert"
          />

          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} A Plus Aura. All rights reserved.
          </p>

          <a
            href="/#home"
            className="
              text-sm font-semibold text-white/60
              transition-colors hover:text-white
            "
          >
            Back to Website
          </a>
        </div>
      </footer>
    </div>
  );
}

export default PrivacyPolicyPage;