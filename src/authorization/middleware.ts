import jwt from "express-jwt";
import jwtAuthz from "express-jwt-authz";
import jwksRsa from "jwks-rsa";

const secure = jwt({
  algorithms: ["RS256"],
  audience: process.env.AUTH0_AUDIENCE,
  issuer: `https://${process.env.AUTH0_DOMAIN}/`,
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
    rateLimit: true,
  }),
});

function requirePems(permissions) {
  return jwtAuthz(permissions);
}

export { secure, requirePems };
