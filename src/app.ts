export class App {

  private _events: Object;

  public start;
  public createElement;
  public render;
  public Fragment;

  constructor() {
    this._events = {};
  }

  public onRoute = (name: string, ...rest): boolean => true;

  on(name: string, fn: (...args) => void, options: any = {}) {
    // if (options.debug) console.log('on: ' + name);
    this._events[name] = this._events[name] || [];
    this._events[name].push({ fn: fn, options: options });
  }

  run(name: string, ...args) {
    const subscribers = this._events[name];
    console.assert(!!subscribers, 'No subscriber for event: ' + name);
    if (subscribers) this._events[name] = subscribers.filter((sub) => {
      let { fn, options } = sub;
      if (options.delay) {
        this.delay(name, fn, args, options);
      } else {
        // if (options.debug) console.log('run: ' + name, args);
        fn.apply(this, args);
      }
      return !sub.options.once;
    });
  }

  once(name: string, fn) { this.on(name, fn); }

  private delay(name, fn, args, options) {
    if (options._t) clearTimeout(options._t);
    options._t = setTimeout(() => {
      clearTimeout(options._t);
      // if (options.debug) console.log(`run-delay ${options.delay}:` + name, args);
      fn.apply(this, args);
    }, options.delay);
  }
}

export default new App();
