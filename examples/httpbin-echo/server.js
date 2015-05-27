// Must import this first to set up monkey patching.
import isoMarty from './src/isoflux';

import express from 'express';
import {ApplicationContainer} from 'marty';
import React from 'react';

import EchoComponent from './src/EchoComponent';

const app = express();
app.use(isoMarty.middleware);

app.get('/', function root(req, res) {
  isoMarty.app
    .renderToStaticMarkup(
      <ApplicationContainer app={isoMarty.app}>
        <EchoComponent value={req.query.value} />
      </ApplicationContainer>
    )
    .then(render => res.send(render.html).end());
});

app.listen(3000);
