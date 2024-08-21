import { NextResponse } from 'next/server';
import {
  csrf,
  setCsrfLaravelCookie,
  setLaravelCookie,
  setOptions,
} from '@/utils/helpers';

export async function POST(req: Request, res: Response) {
  try {
    const data = await req.json();

    const res = await csrf();
    const setCookieHeader = res.headers.get('set-cookie');
    const cookies: string[] | undefined = setCookieHeader?.split(', ');

    let sessionKey = setLaravelCookie(cookies) ?? null;
    let xsrfToken = setCsrfLaravelCookie(cookies) ?? null;

    const options = setOptions(sessionKey, xsrfToken, data);

    const result = await fetch('http://localhost/register', options);

    if (!result.ok) {
      // Если статус не 2xx, проверяем на наличие ошибок
      const errorData = await result.json();
      return NextResponse.json(errorData.errors, { status: result.status });
    }
    const user = await result.json();
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ message: 'dfsf' });
  }
}
