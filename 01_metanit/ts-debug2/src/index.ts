import express, { Request, Response } from 'express';

const app = express();

app.get('/_healthcheck', (req: Request, res: Response) => {
  res.json({ uptime: process.uptime() });
});

app.get('/areWeDebugging?', (req: Request, res: Response) => {
  debugger
  res.json({ hellYeah: true });
});

app.listen(8000);
