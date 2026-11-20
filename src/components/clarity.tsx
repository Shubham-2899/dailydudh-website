import Script from "next/script";

/**
 * Microsoft Clarity (heatmaps, scroll depth, session recordings) for the public website.
 * Loaded only when NEXT_PUBLIC_CLARITY_PROJECT_ID is set at build time (Netlify env var). Disclosed in the privacy page.
 */
const PROJECT_ID = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

export function Clarity() {
  if (!PROJECT_ID) return null;
  // The id must NOT be "clarity": an element's id becomes a global (window.clarity), which breaks Clarity's snippet.
  return (
    <Script id="ms-clarity-init" strategy="lazyOnload">
      {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script",${JSON.stringify(PROJECT_ID)});`}
    </Script>
  );
}
