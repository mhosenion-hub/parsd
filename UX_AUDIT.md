# PARS DEJ — UX / Page Audit

این نسخه یک بازبینی سراسری روی مسیرهای اصلی پروژه دارد.

## Routes checked
- `/`
- `/services`
- `/services/intrusion`
- `/services/fire-alarm`
- `/services/cctv`
- `/services/voip`
- `/services/network`
- `/services/support`
- `/projects`
- `/projects/office-cctv`
- `/projects/store-alarm`
- `/projects/network-voip`
- `/projects/fire-system`
- `/projects/voip-deployment`
- `/projects/network-upgrade`
- `/products`
- `/articles`
- `/articles/1` تا `/articles/6`
- `/about`
- `/contact`

## UX changes
- Header is sticky across pages.
- Desktop Services menu opens on hover and keyboard focus.
- Mobile navigation is available through the compact menu.
- The old day/night control is not present.
- Top-level Contact link remains removed; contact is reached through the request CTA and footer.
- A fixed `ثبت درخواست` CTA is visible at the lower-left on every page.
- Service card artwork remains separate from the service icon panel.
- Service icons are kept stable during hover so they do not jump.
- The 20×20 cursor asset is referenced globally on pointer devices.
- Service detail pages use the matching service artwork as the page background.
- The CCTV detail page keeps the empty glass box layout.
- Placeholder contact fields and sample-project wording were replaced with usable page copy and scenario wording.

## Font setup
Headings prioritize `Vazirmatn` and body/UI text prioritize `Vazirmatn`. The project does not ship unidentified/proprietary font binaries; Vazirmatn v33.003 is loaded from the official jsDelivr stylesheet configured in `app/layout.tsx`.

## Verification note
Static route, href, and referenced-asset checks pass in the working copy. Full Next.js build could not be completed in this environment because dependency installation timed out before `node_modules` was available.
