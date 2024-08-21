import { auth } from '@/app/auth';

export default auth((req) => {
  const newUrl = new URL('/login', req.nextUrl.origin);
  return Response.redirect(newUrl);
});
export const config = {
  matcher: ['/blog'],
};
