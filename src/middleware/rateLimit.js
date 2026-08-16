const rateLimit = (maxRequests = 10, windowMs = 60000) => {
  const store = new Map();

  return (req, res, next) => {
    const key = req.ip || req.connection.remoteAddress;
    const now = Date.now();
    const windowStart = now - windowMs;

    if (!store.has(key)) {
      store.set(key, []);
    }

    const requests = store.get(key).filter(ts => ts > windowStart);
    requests.push(now);
    store.set(key, requests);

    if (requests.length > maxRequests) {
      return res.status(429).json({ error: 'Too many requests. Please try again later.' });
    }

    next();
  };
};

module.exports = rateLimit;
