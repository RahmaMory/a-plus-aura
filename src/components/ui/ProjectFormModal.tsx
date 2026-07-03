import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { createPortal } from "react-dom";
import {
  ArrowRight,
  Check,
  LoaderCircle,
  X,
} from "lucide-react";
type ProjectFormModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const services = [
  "Full Marketing Package",
  "Performance Marketing & Media Buying",
  "Social Media",
  "Media Production",
  "Other",
];

function ProjectFormModal({
  isOpen,
  onClose,
}: ProjectFormModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const closeModal = () => {
    setIsSubmitted(false);
    setIsSubmitting(false);
    setSubmitError("");
    onClose();
  };
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsSubmitted(false);
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

const handleSubmit = async (
  event: FormEvent<HTMLFormElement>,
) => {
  event.preventDefault();

  const form = event.currentTarget;
  const formData = new FormData(form);

  const payload = {
    name: String(formData.get("name") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    service: String(formData.get("service") ?? "").trim(),
    industry: String(formData.get("industry") ?? "").trim(),
  };

  setIsSubmitting(true);
  setSubmitError("");

  try {
    const response = await fetch("/api/project-request", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result: {
      success?: boolean;
      message?: string;
    } | null = await response.json().catch(() => null);

    if (!response.ok || !result?.success) {
      throw new Error(
        result?.message ||
          "Unable to send your request. Please try again.",
      );
    }

    form.reset();
    setIsSubmitted(true);
  } catch (error) {
    setSubmitError(
      error instanceof Error
        ? error.message
        : "Unable to send your request. Please try again.",
    );
  } finally {
    setIsSubmitting(false);
  }
};

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div
      className="
        fixed inset-0 z-[9999]
        overflow-y-auto
        bg-black/75
        px-4 py-6
        backdrop-blur-sm
        sm:px-6 sm:py-10
      "
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          closeModal();
        }
      }}
    >
      <div
        className="
          flex min-h-full
          items-center justify-center
        "
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) {
            closeModal();
          }
        }}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-form-title"
          onMouseDown={(event) => event.stopPropagation()}
          className="
            relative grid
            max-h-[calc(100vh-3rem)]
            w-full max-w-[980px]
            overflow-y-auto
            rounded-[28px]
            bg-white text-black
            shadow-[0_40px_120px_rgba(0,0,0,0.5)]
            lg:grid-cols-[0.8fr_1.2fr]
          "
        >
          {/* زر الإغلاق */}
          <button
            type="button"
            onClick={closeModal}
            className="
              absolute right-4 top-4 z-30
              grid size-11 place-items-center
              rounded-full
              border border-black/10
              bg-white text-black
              shadow-md
              transition-all duration-300
              hover:rotate-90
              hover:bg-black hover:text-white
              sm:right-5 sm:top-5
            "
            aria-label="Close project form"
          >
            <X size={20} />
          </button>

          {/* الجزء الأسود */}
          <div
            className="
              relative overflow-hidden
              bg-black px-7 py-10
              text-white
              sm:px-10 sm:py-12
              lg:flex lg:min-h-[680px]
              lg:flex-col lg:justify-between
              lg:px-12 lg:py-14
            "
          >
            <div
              className="
                pointer-events-none
                absolute -right-24 -top-24
                size-64 rounded-full
                border border-white/10
              "
            />

            <div
              className="
                pointer-events-none
                absolute -bottom-36 -left-24
                size-80 rounded-full
                border border-white/10
              "
            />

            <div className="relative">
              <p
                className="
                  text-xs font-bold uppercase
                  tracking-[0.22em]
                  text-white/45
                "
              >
                Start Your Project
              </p>

              <h2
                id="project-form-title"
                className="
                  mt-6 max-w-[440px]
                  text-[clamp(2.5rem,5vw,4.7rem)]
                  font-black leading-[0.9]
                  tracking-[-0.06em]
                "
              >
                Let&apos;s Build Something That Gets Results.
              </h2>

              <p
                className="
                  mt-7 max-w-[390px]
                  text-sm leading-7 text-white/55
                  sm:text-base
                "
              >
                Tell us about your business and the service you need. Our team
                will contact you to discuss the right solution for your brand.
              </p>
            </div>

            <div
              className="
                relative mt-9
                border-t border-white/15 pt-7
                lg:mt-14
              "
            >
              <p className="text-sm font-semibold">
                A complete team for your growth.
              </p>

              <div className="mt-5 grid gap-3 text-sm text-white/50">
                <p className="flex items-center gap-3">
                  <span className="size-1.5 rounded-full bg-white" />
                  Marketing strategy and planning
                </p>

                <p className="flex items-center gap-3">
                  <span className="size-1.5 rounded-full bg-white" />
                  Media buying and performance
                </p>

                <p className="flex items-center gap-3">
                  <span className="size-1.5 rounded-full bg-white" />
                  Social media and media production
                </p>
              </div>
            </div>
          </div>

          {/* الجزء الأبيض */}
          <div
            className="
              px-6 py-10
              sm:px-10 sm:py-12
              lg:px-12 lg:py-14
            "
          >
            {isSubmitted ? (
              <div
                className="
                  flex min-h-[500px]
                  flex-col items-center
                  justify-center text-center
                "
              >
                <span
                  className="
                    grid size-20 place-items-center
                    rounded-full bg-black text-white
                  "
                >
                  <Check size={34} />
                </span>

                <h3
                  className="
                    mt-7 text-4xl font-black
                    tracking-[-0.05em]
                  "
                >
                  Request Received
                </h3>

                <p
                  className="
                    mt-5 max-w-[410px]
                    leading-8 text-black/55
                  "
                >
                  Thank you for contacting A Plus Aura. Our team will review
                  your request and contact you soon.
                </p>

                <button
                  type="button"
                  onClick={closeModal}
                  className="
                    mt-9 min-h-[52px]
                    rounded-xl bg-black
                    px-9 py-3
                    font-semibold text-white
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:bg-black/80
                  "
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <p
                  className="
                    pr-12 text-xs font-bold uppercase
                    tracking-[0.2em] text-black/40
                  "
                >
                  Project Inquiry
                </p>

                <h3
                  className="
                    mt-4 pr-12
                    text-[clamp(2rem,4vw,3.2rem)]
                    font-black leading-[0.95]
                    tracking-[-0.05em]
                  "
                >
                  Tell Us What You Need.
                </h3>

                <p className="mt-4 text-sm leading-7 text-black/50">
                  Complete the form and our team will get back to you.
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="mt-8 grid gap-5"
                >
                  {/* الاسم */}
                  <div>
                    <label
                      htmlFor="project-name"
                      className="mb-2 block text-sm font-semibold"
                    >
                      Full Name
                    </label>

                    <input
                      id="project-name"
                      name="name"
                      type="text"
                      required
                      autoFocus
                      autoComplete="name"
                      placeholder="Enter your full name"
                      className="
                        min-h-[52px] w-full
                        rounded-xl
                        border border-black/15
                        bg-[#f5f5f5]
                        px-4 py-3
                        outline-none
                        transition-all duration-200
                        placeholder:text-black/30
                        focus:border-black
                        focus:bg-white
                        focus:shadow-[0_0_0_3px_rgba(0,0,0,0.06)]
                      "
                    />
                  </div>

                  {/* الهاتف والإيميل */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="project-phone"
                        className="mb-2 block text-sm font-semibold"
                      >
                        Phone Number
                      </label>

                      <input
                        id="project-phone"
                        name="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        placeholder="Phone number"
                        className="
                          min-h-[52px] w-full
                          rounded-xl
                          border border-black/15
                          bg-[#f5f5f5]
                          px-4 py-3
                          outline-none
                          transition-all duration-200
                          placeholder:text-black/30
                          focus:border-black
                          focus:bg-white
                          focus:shadow-[0_0_0_3px_rgba(0,0,0,0.06)]
                        "
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="project-email"
                        className="mb-2 block text-sm font-semibold"
                      >
                        Email Address
                      </label>

                      <input
                        id="project-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="Email address"
                        className="
                          min-h-[52px] w-full
                          rounded-xl
                          border border-black/15
                          bg-[#f5f5f5]
                          px-4 py-3
                          outline-none
                          transition-all duration-200
                          placeholder:text-black/30
                          focus:border-black
                          focus:bg-white
                          focus:shadow-[0_0_0_3px_rgba(0,0,0,0.06)]
                        "
                      />
                    </div>
                  </div>

                  {/* الخدمة */}
                  <div>
                    <label
                      htmlFor="project-service"
                      className="mb-2 block text-sm font-semibold"
                    >
                      Service Needed
                    </label>

                    <input
                      id="project-service"
                      name="service"
                      type="text"
                      list="service-options"
                      required
                      autoComplete="off"
                      placeholder="Choose or type a service"
                      className="
                        min-h-[52px] w-full
                        rounded-xl
                        border border-black/15
                        bg-[#f5f5f5]
                        px-4 py-3
                        outline-none
                        transition-all duration-200
                        placeholder:text-black/30
                        focus:border-black
                        focus:bg-white
                        focus:shadow-[0_0_0_3px_rgba(0,0,0,0.06)]
                      "
                    />

                    <datalist id="service-options">
                      {services.map((service) => (
                        <option key={service} value={service} />
                      ))}
                    </datalist>

                    <p className="mt-2 text-xs text-black/40">
                      Choose one of our services or type another service.
                    </p>
                  </div>

                  {/* مجال النشاط */}
                  <div>
                    <label
                      htmlFor="project-industry"
                      className="mb-2 block text-sm font-semibold"
                    >
                      Business Type / Industry
                    </label>

                    <input
                      id="project-industry"
                      name="industry"
                      type="text"
                      required
                      autoComplete="organization"
                      placeholder="Example: Restaurant, Fashion Brand..."
                      className="
                        min-h-[52px] w-full
                        rounded-xl
                        border border-black/15
                        bg-[#f5f5f5]
                        px-4 py-3
                        outline-none
                        transition-all duration-200
                        placeholder:text-black/30
                        focus:border-black
                        focus:bg-white
                        focus:shadow-[0_0_0_3px_rgba(0,0,0,0.06)]
                      "
                    />
                  </div>

                  {/* زر الإرسال */}
                  <button
  type="submit"
  disabled={isSubmitting}
  className="
    group mt-2 flex min-h-[56px]
    w-full items-center
    justify-center gap-3
    rounded-xl
    bg-black px-6 py-4
    font-semibold text-white
    shadow-[0_12px_30px_rgba(0,0,0,0.16)]
    transition-all duration-300
    hover:-translate-y-0.5
    hover:bg-black/80
    hover:shadow-[0_16px_36px_rgba(0,0,0,0.22)]
    disabled:cursor-not-allowed
    disabled:translate-y-0
    disabled:opacity-60
  "
>
  {isSubmitting ? (
    <>
      <LoaderCircle
        size={19}
        className="animate-spin"
      />

      <span>Sending Request...</span>
    </>
  ) : (
    <>
      <span>Send Project Request</span>

      <ArrowRight
        size={18}
        className="
          transition-transform duration-300
          group-hover:translate-x-1
        "
      />
    </>
  )}
</button>

{submitError && (
  <p
    role="alert"
    className="
      rounded-xl border border-red-200
      bg-red-50 px-4 py-3
      text-sm leading-6 text-red-700
    "
  >
    {submitError}
  </p>
)}
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

export default ProjectFormModal;