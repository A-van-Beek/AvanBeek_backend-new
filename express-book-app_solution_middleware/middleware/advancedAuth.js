import { auth } from "express-oauth2-jwt-bearer";

const checkJwt = auth({
  audience: "https://book-store-api", // e.g. https://book-store-api
  issuerBaseURL: `https://dev-gn0pbw67ixhusi4b.us.auth0.com/`,
});

export default checkJwt;
