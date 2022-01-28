import { MockedProvider } from "@apollo/client/testing";
import { render, cleanup } from "@testing-library/react";
import Pokemons, { GET_POKEMONS } from "../src/pages/Pokemon";

afterEach(cleanup);

const pokemonName = "bulbasaur";

const mocks = [
  {
    request: {
      query: GET_POKEMONS,
      variables: {
        limit: 2,
        offset: 1,
      },
      result: {
        data: {
          pokemons: {
            count: 1118,
            next: "https://pokeapi.co/api/v2/pokemon/?offset=3&limit=2",
            previous: "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1",
            nextOffset: 3,
            prevOffset: 0,
            status: true,
            message: "",
            results: [
              {
                url: "https://pokeapi.co/api/v2/pokemon/2/",
                name: `${pokemonName}`,
                image:
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
              },
              {
                url: "https://pokeapi.co/api/v2/pokemon/3/",
                name: "venusaur",
                image:
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
              },
            ],
          },
        },
      },
    },
  },
];

it("renders with MockedProvider", async () => {
  const {} = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Pokemons />
    </MockedProvider>
  );

  expect(getByText("Loading...")).toBeInTheDocument();
});
