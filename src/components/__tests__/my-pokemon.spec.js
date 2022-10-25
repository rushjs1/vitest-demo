import { render, screen, fireEvent } from "@testing-library/vue";
import { describe, it, expect } from "vitest";
import MyPokemon from "@/components/home/MyPokemon.vue";
import { mockEndpoint } from "@/components/__tests__/utils/test-utils.js";
import { pokemonResponse } from "@/components/__tests__/mocks/mocks.js";

//using Async / Await
/* describe("pokemon", () => {
  it("does stuff", async () => {
    mockEndpoint("https://pokeapi.co/api/v2/pokemon", {
      body: pokemonResponse,
    });

    render(MyPokemon);

    //const pokemon = await screen.findByText("Get Pokemon");
    const pokemon = await screen.findByTestId("get-pokemon");

    await fireEvent.click(pokemon);
    const value = await screen.findByTestId("bulbasaur");

    expect(value.innerHTML).toBe("bulbasaur");
  });
}); */

//using Promise
describe("pokemon", () => {
  it("loads data after a click event", () => {
    mockEndpoint(`https://pokeapi.co/api/v2/pokemon`, {
      body: pokemonResponse,
    });

    render(MyPokemon);

    return Promise.resolve(MyPokemon)
      .then(() => {
        return screen.findByTestId("get-pokemon");
      })
      .then((pokemon) => {
        fireEvent.click(pokemon);
      })
      .then(() => {
        return screen.findByTestId("bulbasaur");
      })
      .then((value) => {
        //console.log(value.innerHTML);
        expect(value.innerHTML).toBe("bulbasaur");
      });
  });
});
