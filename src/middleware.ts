import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

// Middleware basé sur next-intl
const intlMiddleware = createMiddleware(routing);

// Gestion des fichiers publics et redirection basée sur les cookies
const PUBLIC_FILE = /\.(.*)$/;

export async function middleware(req: NextRequest) {
  const { pathname, locale } = req.nextUrl;

  // Ignore les fichiers publics, les API, et les fichiers internes Next.js
  if (
    pathname.startsWith('/_next') ||
    pathname.includes('/api/') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  // Si la locale est "default", redirige vers la locale stockée dans le cookie ou la locale par défaut
  if (locale === 'default') {
    const cookieLocale = req.cookies.get('NEXT_LOCALE')?.value || 'fr';
    return NextResponse.redirect(
      new URL(`/${cookieLocale}${pathname}${req.nextUrl.search}`, req.url)
    );
  }

  // Appelle le middleware de next-intl pour gérer les locales
  return intlMiddleware(req);
}

export const config = {
  matcher: [
    // Match tous les chemins sauf ceux qui commencent par `/api`, `/_next`, ou `/_vercel`
    // et ceux qui contiennent un point (fichiers comme `favicon.ico`)
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ],
};
