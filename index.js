module.exports = function() {
  this.options.build.transpile.push("@sirdiego/nuxt-auth-cognito-scheme-using-session");

  this.options.auth = this.options.auth || {};
  this.options.auth.strategies = this.options.auth.strategies || {};
  this.options.auth.strategies.cognitoSession =
    this.options.auth.strategies.cognitoSession || {};
  this.options.auth.strategies.cognitoSession._scheme =
    "@sirdiego/nuxt-auth-cognito-scheme-using-session/CognitoSessionAuthScheme";
};

module.exports.meta = require("./package.json");
