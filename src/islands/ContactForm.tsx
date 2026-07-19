import { useState, type FormEvent } from 'react';

const inputClass =
  'w-full rounded border border-border bg-white px-4 py-2.5 font-body text-base text-charcoal placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // No backend wired up yet — this just confirms locally what would be sent.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-lg border border-accent/30 bg-lime-50 p-6 text-center">
        <p className="m-0 mb-2 font-sans text-lg font-bold text-charcoal">
          Thanks &mdash; we&rsquo;ve got your question.
        </p>
        <p className="m-0 text-sm text-muted">
          One of our engineers will reply by email within one working day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="question" className="mb-1.5 block text-sm font-semibold text-charcoal">
          Your question <span className="text-brand-red">*</span>
        </label>
        <input
          id="question"
          name="question"
          type="text"
          required
          placeholder="e.g. Which IP rating do I need for a car park ducting run?"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="detail" className="mb-1.5 block text-sm font-semibold text-charcoal">
          Detail <span className="font-normal text-muted">(environment, cable sizes, standards...)</span>
        </label>
        <textarea
          id="detail"
          name="detail"
          rows={4}
          placeholder="Tell us about the installation..."
          className={inputClass}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-charcoal">
            Name <span className="text-brand-red">*</span>
          </label>
          <input id="name" name="name" type="text" required placeholder="Your name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-charcoal">
            Email <span className="text-brand-red">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.co.uk"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="mb-1.5 block text-sm font-semibold text-charcoal">
          Company <span className="font-normal text-muted">(optional)</span>
        </label>
        <input id="company" name="company" type="text" placeholder="Company name" className={inputClass} />
      </div>

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <button
          type="submit"
          className="cursor-pointer rounded bg-accent px-6 py-3 font-semibold text-white transition-colors hover:bg-accent-dark"
        >
          Send my question
        </button>
        <p className="m-0 text-sm text-muted">
          &#10003; Free &middot; &#10003; Reply within 1 working day &middot; &#10003; No mailing list
        </p>
      </div>
    </form>
  );
}
