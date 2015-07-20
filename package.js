Package.describe({
  name: "spectrum:accounts-naver",
  version: '0.0.1',
  summary: 'Login service for Naver',
  git: 'https://github.com/acidsound/meteor-accounts-naver',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('accounts-base', ['client', 'server']);
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('spectrum:naver@0.0.1', ['client', 'server']);

  api.addFiles('naver_login_button.css', 'client');

  api.addFiles('naver.js');
});