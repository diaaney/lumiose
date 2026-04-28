import { NextRequest, NextResponse } from 'next/server';
import { LOCALES, isLocale, type Locale } from './lib/i18n/config';
import { detectLocale } from './lib/i18n/detect';

const LOCALE_COOKIE = 'lumiose-locale';
const COUNTRY_COOKIE = 'lumiose-country';
const DETECTED_FLAG_COOKIE = 'lumiose-detected';
const ONE_YEAR_SECONDS = 60 * 60 * 24 * 365;

export const config = {
  matcher: ['/((?!_next|api|favicon|.*\\..*).*)'],
};

function pathHasLocale(pathname: string): Locale | null {
  const [, first] = pathname.split('/');
  return first && isLocale(first) ? (first as Locale) : null;
}

function readCountry(req: NextRequest): string | null {
  return (
    req.headers.get('x-vercel-ip-country') ||
    req.headers.get('cf-ipcountry') ||
    null
  );
}

export function proxy(req: NextRequest) {
  const { pathname, search } = req.nextUrl;

  // Locale already in URL — pass through untouched so the response stays cacheable
  // at the CDN. Country/detection state is read client-side from a separate hint.
  if (pathHasLocale(pathname)) {
    return NextResponse.next();
  }

  const cookieLocale = req.cookies.get(LOCALE_COOKIE)?.value;
  const explicitLocale = cookieLocale && isLocale(cookieLocale) ? (cookieLocale as Locale) : null;

  const country = readCountry(req);
  const target: Locale = explicitLocale ?? detectLocale(country);

  const url = req.nextUrl.clone();
  url.pathname = `/${target}${pathname === '/' ? '' : pathname}`;
  url.search = search;

  const res = NextResponse.redirect(url);

  res.cookies.set(LOCALE_COOKIE, target, {
    maxAge: ONE_YEAR_SECONDS,
    sameSite: 'lax',
    path: '/',
  });
  if (country) {
    res.cookies.set(COUNTRY_COOKIE, country, {
      maxAge: ONE_YEAR_SECONDS,
      sameSite: 'lax',
      path: '/',
    });
  }
  if (!explicitLocale) {
    res.cookies.set(DETECTED_FLAG_COOKIE, '1', {
      maxAge: ONE_YEAR_SECONDS,
      sameSite: 'lax',
      path: '/',
    });
  }

  return res;
}

export { LOCALES };
