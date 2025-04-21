import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import { LiveAudioPlayer } from "@/components/LiveAudioPlayer";

export default function Home() {
  return (
    <>
      <Head>
        <title>AlBal Radio – Aghany Albal</title>
        <meta
          name="description"
          content="AlBal Radio is a Lebanon-based station broadcasting the greatest Arabic hits from the 80s, 90s, and 2000s. Tune in for a mix of timeless classics and modern favorites."
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
          </motion.div>
        </div>
      </main>

      <LiveAudioPlayer
        streamUrl="https://albal-lbnet2.radioca.st/stream?type=http&nocache=142550"
        metaUrl="https://dione.shoutca.st/recentfeed/albal/json/"
        serverType="centova"
      />

      <Analytics />
    </>
  );
}
