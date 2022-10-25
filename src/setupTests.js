/* import { describe, it, expect, beforeAll, afterEach, afterAll } from "vitest";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { pokemonResponse } from "@/components/__tests__/mockPokemon.js";
import "whatwg-fetch";

export const restHandlers = [
  rest.get("https://pokeapi.co/api/v2/pokemon", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(pokemonResponse));
  }),
];

const server = setupServer(...restHandlers);

//start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

//close server after all tests
afterAll(() => server.close());

afterEach(() => server.resetHandlers());
 */

//import matchers from "@testing-library/jest-dom/matchers";
import { afterAll, afterEach, beforeAll } from "vitest";
import { mockServer } from "@/components/__tests__/utils/test-utils.js";
import "whatwg-fetch";

//expect.extend(matchers);

beforeAll(() => mockServer.listen({ onUnhandledRequest: "error" }));

afterAll(() => mockServer.close());

afterEach(() => mockServer.resetHandlers());
