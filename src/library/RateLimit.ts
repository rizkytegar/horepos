import rateLimit from 'express-rate-limit';

/**
 * Create a rate limiting middleware with dynamic windowMs and max values.
 * @param {number} windowMs - Window time in milliseconds.
 * @param {number} max - Maximum number of requests allowed in the specified window time.
 * @returns {function} Rate limiting middleware.
 */
const RateLimitMiddleware = (windowMs: number, max: number) => {
    return rateLimit({
        windowMs,
        max,
        message: { success: false, message: 'Rate limit exceeded' },
        statusCode: 429,
    });
};

export { RateLimitMiddleware };
