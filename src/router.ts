import app from './app';

const ROUTER_EVENT = '//';

//app.on('//', _ => { });
app.on('#', _ => { });
app.on('route', url => route(url));

export default function route(url: string) {
  if (!url) url = '#';
  if (url.startsWith('#')) {
    const [name, ...rest] = url.split('/');
    if (name === "#") {
      if (app.onRoute(rest[0], rest.shift())) {
        app.run(name, ...rest)
      }
      return;
    }

    if (app.onRoute(name, ...rest)) {
      app.run(name, ...rest);
    }

  } else if (url.startsWith('/')) {
    const [_, name, ...rest] = url.split('/');
    if (app.onRoute('/' + name, ...rest))
      app.run('/' + name, ...rest);
  } else {
    if (app.onRoute(url))
      app.run(url);    
  }
}
