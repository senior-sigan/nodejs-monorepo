# Monorepo Template

This is an example of nodejs monorepo.

It uses:

- old commonjs modules with `require` and `module.exports`
- typescript modules
- new esm modules with `import/export`

Build system:

- pnpm as a package manager
- rollup as a bundler for esm modules
- tsup as a typescript bundler

Project structure

- apps - place for all you endpoints like backend apis, workers, grpc, rpc, frontend apps
- packages - shareable packages
- tools - eslint, typescript, prettier, etc... configs

TODO:

- maybe yarn?
- try rollup instead of tsup to simplify
- create a scaffolder for new package
- add more sophisticated import-exports and real packages (express, mongodb, grpc, etc...) 