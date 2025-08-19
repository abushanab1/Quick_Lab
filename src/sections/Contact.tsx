import React from 'react';

type FormState = {
  name: string;
  email: string;
  phone: string;
  testType: string;
  _gotcha?: string; // honeypot (leave blank)
};

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xdkdrgda'; 

export const Contact: React.FC = () => {
  const [form, setForm] = React.useState<FormState>({
    name: '',
    email: '',
    phone: '',
    testType: '',
    _gotcha: '',
  });
  const [submitted, setSubmitted] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [serverError, setServerError] = React.useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = 'Please enter your name';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = 'Enter a valid email';
    if (!/^[0-9()+\-\s]{7,}$/.test(form.phone)) errs.phone = 'Enter a valid phone';
    if (!form.testType) errs.testType = 'Select a test';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);
    if (!validate()) return;

    try {
      setSubmitting(true);

      // Build FormData for Formspree
      const fd = new FormData();
      fd.append('name', form.name);
      fd.append('email', form.email);     // <-- makes your email "Reply-To" the visitor’s email
      fd.append('phone', form.phone);
      fd.append('testType', form.testType);
      fd.append('_gotcha', form._gotcha || ''); // honeypot (hidden)
      fd.append('subject', 'New Quick Lab inquiry'); // optional subject line

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' }, // tell Formspree we want JSON response
        body: fd,
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error((data && data.error) || 'Failed to send');

      setSubmitted(true);
    } catch (err: any) {
      setServerError(err.message || 'Something went wrong');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-16 bg-white py-20 sm:py-32">
      <div className="mx-auto max-w-screen-md px-4">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold">Contact Us</h2>
          <p className="mt-3 text-neutral-700">
            <strong>Walk-ins are welcome</strong> — or give us a call at{' '}
            <a className="font-medium text-red-600 hover:text-red-700" href="tel:+15551234567">
              (555) 123-4567
            </a>.
          </p>
        </div>

        {!submitted ? (
          <form onSubmit={onSubmit} className="mt-8 grid grid-cols-1 gap-4 rounded-2xl border border-gray-200 p-6 shadow-sm md:grid-cols-2">
            {/* Honeypot (bots will fill this; humans won't). Keep it hidden. */}
            <input type="text" name="_gotcha" value={form._gotcha} onChange={handleChange} className="hidden" tabIndex={-1} autoComplete="off" />

            {/* Name */}
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium text-neutral-800">Full name</label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className={`w-full rounded-lg border bg-white px-3 py-2 outline-none focus:ring-2 ${errors.name ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-red-500'}`}
                placeholder="Jane Doe"
                autoComplete="name"
              />
              {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
            </div>

            {/* Email (named "email" so Reply-To is set) */}
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-neutral-800">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className={`w-full rounded-lg border bg-white px-3 py-2 outline-none focus:ring-2 ${errors.email ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-red-500'}`}
                placeholder="jane@example.com"
                autoComplete="email"
              />
              {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="mb-1 block text-sm font-medium text-neutral-800">Phone</label>
              <input
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className={`w-full rounded-lg border bg-white px-3 py-2 outline-none focus:ring-2 ${errors.phone ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-red-500'}`}
                placeholder="(555) 123-4567"
                autoComplete="tel"
              />
              {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
            </div>

            {/* Test type */}
            <div>
              <label htmlFor="testType" className="mb-1 block text-sm font-medium text-neutral-800">Test type</label>
              <select
                id="testType"
                name="testType"
                value={form.testType}
                onChange={handleChange}
                className={`w-full rounded-lg border bg-white px-3 py-2 outline-none focus:ring-2 ${errors.testType ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-red-500'}`}
              >
                <option value="">Select a test…</option>
                <option>General Health Panel</option>
                <option>STD Panel</option>
                <option>COVID-19 PCR</option>
                <option>Allergy Panel</option>
                <option>Hormone Panel</option>
                <option>Other</option>
              </select>
              {errors.testType && <p className="mt-1 text-xs text-red-600">{errors.testType}</p>}
            </div>

            {/* Submit */}
            <div className="md:col-span-2 mt-2">
              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-lg bg-red-600 px-5 py-3 font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 disabled:opacity-60"
              >
                {submitting ? 'Sending…' : 'Submit'}
              </button>
              {serverError && <p className="mt-2 text-center text-sm text-red-600">{serverError}</p>}
              <p className="mt-2 text-center text-xs text-neutral-500">
                By submitting, you agree we may contact you about your request.
              </p>
            </div>
          </form>
        ) : (
          <div className="mt-10 rounded-2xl border border-green-200 bg-green-50 p-6 text-center">
            <h3 className="text-xl font-semibold text-green-700">Thanks! We received your request.</h3>
            <p className="mt-2 text-green-700/90">We’ll reach out shortly.</p>
          </div>
        )}
      </div>

      {/* Extra breathing room at the bottom */}
      <div className="h-24 sm:h-40" aria-hidden="true" />
    </section>
  );
};
