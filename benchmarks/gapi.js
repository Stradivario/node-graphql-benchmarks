const { createApolloSchema } = require("../lib/schemas/createApolloSchema");
const { CoreModule, setup, SCHEMA_OVERRIDE } = require("@gapi/core");

setup({
  providers: [
    {
      provide: SCHEMA_OVERRIDE,
      useFactory: () => () => createApolloSchema()
    }
  ],
  imports: [
    CoreModule.forRoot({
      server: { hapi: { port: 4001 } },
      graphql: { path: "/graphql" }
    })
  ]
}).subscribe();
