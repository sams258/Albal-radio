// src/pages/_app.tsx
import '@/styles/globals.css';
import "../components/RecentTracksModal.css";
import type { AppProps } from 'next/app';
import { LiveAudioPlayer } from '@/components/LiveAudioPlayer';
import Layout from '@/components/Layout';
import RecentTracksModal from '@/components/RecentTracksModal';

const streamUrl = process.env.NEXT_PUBLIC_STREAM_URL!;
const metaUrl = process.env.NEXT_PUBLIC_META_URL!;
const serverType = process.env.NEXT_PUBLIC_SERVER_TYPE as 'radioboss' | 'centova';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <LiveAudioPlayer
        streamUrl={streamUrl}
        metaUrl={metaUrl}
        serverType={serverType}
      />
      <RecentTracksModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
