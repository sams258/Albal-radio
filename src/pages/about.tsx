import Head from "next/head";
import { Info } from "lucide-react";

export default function About() {
  return (
    <>
      <Head>
        <title>About | Albal Radio</title>
      </Head>
      <div className="page-container">
        <div className="icon-header">
          <Info size={48} className="icon" />
          <h1>About Albal Radio</h1>
        </div>

        <p>
          Albal Radio was launched on <strong>February 22, 2022</strong> — a
          once-in-a-lifetime date: <strong>22/02/2022</strong>. From that unique
          moment, a new sound began echoing to the world: timeless Arabic music
          curated with love and precision.
        </p>

        <p>
          Albal Radio serves as a cultural beacon, promoting the soul of Arabic
          music. The station broadcasts a rich mix of songs from the 80s, 90s,
          and 2000s — golden eras of Arab musical expression.
        </p>

        <p>
          What sets Albal Radio apart is its mission: not just to entertain, but
          to preserve and elevate Arabic heritage through music. It&apos;s not
          uncommon to hear legendary voices like Fairuz, Abdel Halim Hafez, or
          Warda followed by hidden gems from the underground Arabic scenes.
        </p>

        <p>
          Whether you&apos;re seeking nostalgia, discovery, or community — Albal
          Radio welcomes you. Tune in anytime, anywhere, and become part of a
          growing global family that cherishes Arabic music.
        </p>

        <p>
          For more, visit us on platforms like{" "}
          <a
            href="https://www.getmeradio.com/stations/albalradio-5364/"
            target="_blank"
            rel="noreferrer"
          >
            GetMeRadio
          </a>{" "}
          or{" "}
          <a
            href="https://www.allradio.net/radio/30711/"
            target="_blank"
            rel="noreferrer"
          >
            AllRadio.net
          </a>
          .
        </p>
      </div>
    </>
  );
}
