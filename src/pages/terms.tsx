import Head from "next/head";
import { ScrollText } from "lucide-react";

export default function TermsOfService() {
  return (
    <>
      <Head>
        <title>Terms and Conditions | Albal Radio</title>
      </Head>
      <div className="page-container">
        <div className="icon-header">
          <ScrollText size={48} className="icon" />
          <h1>Terms and Conditions</h1>
        </div>
        <p className="date">Effective Date: April 23, 2025</p>

        <p>By using Albal Radio, you agree to these terms of service.</p>

        <h2>1. Use of Service</h2>
        <p>Streaming is for personal use only.</p>

        <h2>2. Intellectual Property</h2>
        <p>All music remains the property of original rights holders.</p>

        <h2>3. Restrictions</h2>
        <ul>
          <li>No downloading or redistribution</li>
          <li>No commercial usage</li>
          <li>No service disruption</li>
        </ul>

        <h2>4. Limitation of Liability</h2>
        <p>We’re not liable for indirect or incidental damages.</p>

        <h2>5. Updates</h2>
        <p>Terms may change over time. Continued use = acceptance.</p>

      </div>
    </>
  );
}
