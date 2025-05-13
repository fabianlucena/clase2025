export function logMiddleware(req, res, next) {
  const date = new Date()
    .toISOString()
    .replace('T', ' ')
    .replace('Z', '');

  const ip = req.ip;

  const request = req.method + ' ' + req.url;

  const body = {...req.body };
  if (body.password) {
    body.password = '********';
  }

  const bodyText = JSON.stringify(body);

  console.log(`[${date}] ${ip} ${request} ${bodyText}`);

  next();
}