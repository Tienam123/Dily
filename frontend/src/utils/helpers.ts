export const csrf = async () => {
  return await fetch('http://localhost/sanctum/csrf-cookie', {
    method: 'GET',
  });
};

export const setCsrfLaravelCookie = (cookies: string[] | undefined) => {
  let xsrfToken;
  for (const cookie of cookies ?? []) {
    if (cookie.startsWith('XSRF-TOKEN=')) {
      xsrfToken = cookie.split('=')[1];
      xsrfToken = xsrfToken.split('%')[0];
      return xsrfToken;
    }
  }
};

export const setLaravelCookie = (cookies: string[] | undefined) => {
  let sessionKey = null;
  for (const cookie of cookies ?? []) {
    if (cookie.startsWith('laravel_session=')) {
      sessionKey = cookie.split('=')[1];
      sessionKey = sessionKey.split('%')[0];
      return sessionKey;
    }
  }
};

export const setOptions = (
  sessionKey: string | null,
  xsrfToken: string | null,
  data: any
) => {
  const headers = new Headers({
    Cookie: `laravel_session=${sessionKey}`,
    'Content-Type': 'application/json',
    Accept: 'application/json',
  });

  if (xsrfToken) {
    headers.append('X-XSRF-TOKEN', xsrfToken);
  }

  const options = {
    method: 'POST',
    headers,
    body: JSON.stringify(data),
  };

  return options;
};
