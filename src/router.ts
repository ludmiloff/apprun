import app from './app';

const ROUTER_EVENT = '//';

app.on('//', _ => { });
app.on('#', _ => { });
app.on('route', url => route(url));

export default function route(url: string) {
  if (!url) url = '#';
  if (url.startsWith('#')) {
    const [name, ...rest] = url.split('/');    
    app.run(ROUTER_EVENT, name, ...rest);
    app.run(name, ...rest);
  } else if (url.startsWith('/')) {
    const [_, name, ...rest] = url.split('/');    
    app.run(ROUTER_EVENT, '/' + name, ...rest);
    app.run('/' + name, ...rest);
  } else {    
    app.run(ROUTER_EVENT, url);
    app.run(url);
  }
}
