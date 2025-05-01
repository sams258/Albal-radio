import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>AlBal Radio – Aghany Albal</title>
        <meta
          name="description"
          content="AlBal Radio is a station broadcasting the greatest Arabic hits from the 80s, 90s, and 2000s. Tune in for a mix of timeless classics and modern favorites."
        />
        <meta
          name="keywords"
          content="AlBal Radio, Arabic music, Lebanon radio, 80s hits, 90s hits, 2000s music, Aghany Albal"
        />
        <meta name="author" content="AlBal Radio" />
        <meta name="orb-verification" content="4fe69c78eac6002f" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="AlBal Radio – Aghany Albal" />
        <meta
          property="og:description"
          content="Broadcasting the greatest Arabic hits from the 80s, 90s, and 2000s."
        />
        <meta property="og:image" content="/albal_logo.png" />
        <meta property="og:url" content="https://www.albalradio.com" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AlBal Radio – Aghany Albal" />
        <meta
          name="twitter:description"
          content="Broadcasting the greatest Arabic hits from the 80s, 90s, and 2000s."
        />
        <meta name="twitter:image" content="/albal_logo.png" />
        <link rel="canonical" href="https://albalradio.com" />
      </Head>

      <main className="home-main">
        <div className="home-content">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/albal_logo.png"
              alt="AlBal Radio Logo"
              width={400}
              height={200}
              priority
              className="logo"
            />
            <div className="instagram-cta">
              <a
                href="https://www.instagram.com/albalradio" // 🔁 replace with your actual handle
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm4.75-2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z" />
                </svg>
                <span>Follow us on Instagram</span>
              </a>
            </div>
          </motion.div>
        </div>
      </main>

      <Analytics />
    </>
  );
}
