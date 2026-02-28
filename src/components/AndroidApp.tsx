import Image from 'next/image';

export default function AndroidApp() {

const PLAY_STORE_WEB_URL =
  'https://play.google.com/store/apps/details?id=com.albalradio.app';

const PLAY_STORE_INTENT_URL =
  'intent://details?id=com.albalradio.app#Intent;scheme=market;package=com.android.vending;end';

const openPlayStore = (e: React.MouseEvent<HTMLAnchorElement>) => {
  const ua = navigator.userAgent || '';
  const isAndroid = /Android/i.test(ua);

  if (!isAndroid) return; // normal link opens web

  e.preventDefault();

  // Try to open Play Store app
  window.location.href = PLAY_STORE_INTENT_URL;

  // Fallback to web Play Store page if intent fails
  window.setTimeout(() => {
    window.location.href = PLAY_STORE_WEB_URL;
  }, 600);
};

return (
  <a
    className="googlePlayBtn"
    href={PLAY_STORE_WEB_URL}
    target="_blank"
    onClick={openPlayStore}
    aria-label="Get it on Google Play"
    rel="noopener noreferrer"
  >
    <Image
      src="/Google_Play_Store_badge_EN.svg"
      alt="Get it on Google Play"
      width={140}
      height={42}
      className="googlePlayBadge"
      priority={false}
    />
  </a>
);
}


