import Fastify from 'fastify';

import { loadAnime } from '@acme/example-ts';
import { makeCoffee } from '@acme/example-old';
import { printDates } from '@acme/example-new';

const fastify = Fastify({
  logger: true,
});

fastify.get('/', async (request, reply) => {
  const anime = await loadAnime();
  const coffee = makeCoffee();
  var lol = 42;
  console.log(lol);

  reply.type('application/json').code(200);
  return { hello: 'world', anime, coffee, today: printDates() };
});

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) throw err;
  console.log(`Server is now listening on ${address}`);
});
