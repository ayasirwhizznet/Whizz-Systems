import 'zone.js/node';
import express from 'express';
import { existsSync } from 'fs';
import { join } from 'path';
import { ngExpressEngine } from '@nguniversal/express-engine';
import bootstrap from './main.server';

console.log('Starting server...');

const app = express();
const distFolder = join(process.cwd(), 'dist/whizz/browser');
const assetsFolder = join(process.cwd(), 'dist/whizz/browser/assets');
const indexHtml = existsSync(join(distFolder, 'index.original.html'))
  ? 'index.original.html'
  : 'index.html';

app.engine(
  'html',
  ngExpressEngine({
    bootstrap,
  })
);

app.use(express.static(distFolder));
app.use('/assets', express.static(assetsFolder));

app.set('view engine', 'html');
app.set('views', distFolder);

app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});

app.get('/assets/*', (req, res) => {
  const assetPath = join(assetsFolder, req.path.replace('/assets/', ''));

  if (existsSync(assetPath)) {
    res.sendFile(assetPath);
  } else {
    res.status(404).send('Asset not found');
  }
});


app.get('*', (req, res) => {
  res.render(indexHtml, { req });
});

const port = 4000;
app.listen(port, () => {
  console.log(`Node server running at http://localhost:${port}`);
});
