export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto mt-4 max-w-3xl px-6 py-16 text-slate-200">
      <h1 className="text-3xl font-semibold text-white">
        Privacy Policy
      </h1>

      <p className="mt-4 text-sm text-slate-400">
        Last updated: {new Date().toLocaleDateString()}
      </p>

      <p className="mt-6 leading-relaxed text-slate-300">
        SnipHub values your privacy. This Privacy Policy explains how we
        collect, use, and protect your information when you use our
        platform.
      </p>

      {/* -------- INFORMATION WE COLLECT -------- */}
      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold text-white">
          Information We Collect
        </h2>

        <p className="text-slate-300">
          When you use SnipHub, we may collect the following information:
        </p>

        <ul className="list-disc space-y-2 pl-5 text-slate-300">
          <li>
            <strong>Account information</strong> such as email address,
            username, and profile image (via GitHub or email authentication).
          </li>
          <li>
            <strong>Code snippets and metadata</strong> you create, including
            titles, tags, languages, and visibility settings (public or
            private).
          </li>
          <li>
            <strong>Usage data</strong> such as interactions with snippets
            (likes, views) to improve the product experience.
          </li>
        </ul>
      </section>

      {/* -------- HOW WE USE DATA -------- */}
      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold text-white">
          How We Use Your Information
        </h2>

        <ul className="list-disc space-y-2 pl-5 text-slate-300">
          <li>To provide and operate the SnipHub platform.</li>
          <li>To allow you to save, organize, and reuse code snippets.</li>
          <li>
            To display public snippets and community activity when you
            choose to share publicly.
          </li>
          <li>To improve performance, reliability, and features.</li>
          <li>To communicate important updates or security notices.</li>
        </ul>
      </section>

      {/* -------- PUBLIC VS PRIVATE -------- */}
      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold text-white">
          Public and Private Content
        </h2>

        <p className="text-slate-300">
          SnipHub allows you to control the visibility of your snippets.
        </p>

        <ul className="list-disc space-y-2 pl-5 text-slate-300">
          <li>
            <strong>Private snippets</strong> are visible only to you.
          </li>
          <li>
            <strong>Public snippets</strong> may be visible to other users
            and visitors and can be liked or viewed.
          </li>
        </ul>

        <p className="text-slate-300">
          You are responsible for ensuring that any code or information you
          make public does not contain sensitive or confidential data.
        </p>
      </section>

      {/* -------- COOKIES & AUTH -------- */}
      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold text-white">
          Authentication & Cookies
        </h2>

        <p className="text-slate-300">
          SnipHub uses cookies and similar technologies to manage
          authentication sessions and keep you signed in securely.
        </p>

        <p className="text-slate-300">
          These cookies are essential for the platform to function and are
          not used for advertising or tracking across other websites.
        </p>
      </section>

      {/* -------- THIRD PARTIES -------- */}
      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold text-white">
          Third-Party Services
        </h2>

        <p className="text-slate-300">
          SnipHub relies on trusted third-party services for core
          functionality such as authentication and hosting.
        </p>

        <p className="text-slate-300">
          These services only receive the information necessary to perform
          their function and are required to protect your data.
        </p>
      </section>

      {/* -------- DATA SECURITY -------- */}
      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold text-white">
          Data Security
        </h2>

        <p className="text-slate-300">
          We take reasonable measures to protect your data, including secure
          authentication, access controls, and encrypted connections.
        </p>

        <p className="text-slate-300">
          However, no method of transmission or storage is 100% secure, and
          we cannot guarantee absolute security.
        </p>
      </section>

      {/* -------- DATA DELETION -------- */}
      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold text-white">
          Data Deletion
        </h2>

        <p className="text-slate-300">
          You may delete your snippets at any time. If you wish to delete
          your account or request data removal, please contact us.
        </p>
      </section>

      {/* -------- CHANGES -------- */}
      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold text-white">
          Changes to This Policy
        </h2>

        <p className="text-slate-300">
          We may update this Privacy Policy from time to time. Changes will
          be posted on this page with an updated revision date.
        </p>
      </section>

      {/* -------- CONTACT -------- */}
      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold text-white">
          Contact
        </h2>

        <p className="text-slate-300">
          If you have any questions about this Privacy Policy or your data,
          please contact us at:
        </p>

        <p className="text-slate-300 font-medium">
          utsav.gp1204@gmail.com
        </p>
      </section>
    </div>
  );
}