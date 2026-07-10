import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "India's On-Ground Brand Growth Partner",
  description: 'Helping brands execute BTL campaigns, retail branding, rural activation, employee engagement, event IPs, and corporate experiences across India.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('error', function(e) {
                if (e.target instanceof HTMLImageElement) {
                  var img = e.target;
                  if (!img.dataset.fallbackApplied) {
                    img.dataset.fallbackApplied = 'true';
                    var fallbackSvg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='18' height='18' x='3' y='3' rx='2' ry='2'/%3E%3Ccircle cx='9' cy='9' r='2'/%3E%3Cpath d='m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21'/%3E%3C/svg%3E";
                    img.src = fallbackSvg;
                    img.classList.add('broken-image-fallback');
                    if (!img.alt || img.alt.trim() === '') img.alt = 'Image not available';
                  }
                }
              }, true);
            `,
          }}
        />
      </body>
    </html>
  );
}
