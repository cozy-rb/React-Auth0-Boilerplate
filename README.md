https://auth0.com/docs/connections/social/google

https://manage.auth0.com/dashboard/us/AUTH0_DOMAIN_PREFIX/connections/social

# React-Auth0 Express Boilerplate
This is a production-ready boilerplate that implements the following technologies:
- React
- React-Auth0
- Express

# Setup
Environmental variables should include the following:
- REACT_APP_AUTH0_CLIENT_SECRET
- REACT_APP_AUTH0_DOMAIN
- REACT_APP_AUTH0_CLIENT_ID

These are provided by Auth0.
React-Auth0 quick start guide: https://auth0.com/blog/complete-guide-to-react-user-authentication/

To enable OAuth with Google, follow this guide: https://auth0.com/docs/connections/social/google
You will need to supply your Auth0 app with the ClientID and ClientSecret provided by Google.

To avoid status 404, your Auth0 Application Type should be set to "Regular Web Application" and the Token Endpoint Authentication Method set to "none".

To prevent CORS errors, add your Auth0 domain (and localhost url and port) to Allowed Web Origins and Allowed Origins (CORS).

# Running
To run locally use:
````
npm run dev
````
