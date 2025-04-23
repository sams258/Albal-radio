import Head from "next/head";
import { ShieldCheck } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Albal Radio</title>
      </Head>
      <div className="page-container">
        <div className="icon-header">
          <ShieldCheck size={48} className="icon" />
          <h1>Privacy Policy</h1>
        </div>
        <p className="date">Effective Date: April 23, 2025</p>

        <p>
          We value your privacy and outline here how we collect and protect your
          data.
        </p>

        <h2>1. Information We Collect</h2>
        <ul>
          <li>Streaming data</li>
          <li>Contact information (if provided)</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>Improve service quality</li>
          <li>Communicate with you (if requested)</li>
        </ul>

        <h2>3. Third-Party Services</h2>
        <p>
          We use analytics and streaming platforms that have their own privacy
          policies.
        </p>

        <h2>4. Cookies</h2>
        <p>
          You may disable cookies in your browser. We use them only for basic
          analytics.
        </p>

        <h2>5. Your Rights</h2>
        <p>
          Email us at <strong>privacy@albalradio.com</strong> to manage your
          data rights.
        </p>
      </div>
    </>
  );
}
