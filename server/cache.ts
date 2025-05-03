
import NodeCache from 'node-cache';

// Configure the cache with standard TTL of 5 minutes
const cache = new NodeCache({ 
  stdTTL: 300, // 5 minutes in seconds
  checkperiod: 60 // Check for expired keys every 60 seconds
});

export const cacheMiddleware = (durationSeconds = 300) => {
  return (req: any, res: any, next: any) => {
    // Skip caching for non-GET requests or when specifically requested
    if (req.method !== 'GET' || req.query.skipCache === 'true') {
      return next();
    }

    const key = `__express__${req.originalUrl || req.url}`;
    const cachedBody = cache.get(key);

    if (cachedBody) {
      // Set cache hit header
      req.headers['x-cache-hit'] = 'true';
      // Return cached response
      res.json(cachedBody);
      return;
    }

    // Store the original json method
    const originalJson = res.json;

    // Override res.json method to cache the response
    res.json = function (body: any) {
      // Cache the response for future requests
      cache.set(key, body, durationSeconds);
      
      // Call the original json method
      return originalJson.call(this, body);
    };

    next();
  };
};

export const clearCache = () => {
  cache.flushAll();
};

export const getCacheStats = () => {
  return {
    keys: cache.keys(),
    stats: cache.getStats()
  };
};
