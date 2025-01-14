import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  matcher: ['/((?!api|_next|_vercel\\..*).*)'] // this solved: Unable to find `next-intl` locale because the middleware didn't run on this request. 
};
