class Context {
  constructor() {
    this.request = {
      query: new Map(),
      headers: new Map(),
    };
    this.event = {};
    this.state = {};
    this.response = {
      headers: new Map(),
    };
    this.body = '';
    this.status = 404;

    // Shortcuts directly on the context
    this.query = this.request.query;
  }

  /**
   * Gets a header from the request
   * @param {string} key
   */
  header(key) {
    return this.request.headers.get(key);
  }

  set(key, value) {
    this.response.headers.set(key, value);
  }
}

/**
 * A minimal ctx used for testing
 */
function getCtx() {
  const ctx = new Context();
  ctx.request.headers.origin = 'http://localhost';

  return ctx;
}

/**
 * Returns an empty function that can be used to terminate routes when testing
 */
function getNext() {
  return async (ctx) => {
    return ctx;
  };
}

module.exports = {
  getCtx,
  getNext,
};
