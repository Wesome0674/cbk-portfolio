import createMiddleware from "next-intl/middleware";
import { defineRouting } from "next-intl/routing";

// Définir le routing avec `defineRouting`
const routing = defineRouting({
  locales: ['en', 'fr', 'es'],
  defaultLocale: 'fr',
  localeDetection: false
});

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ]
};
