import { render, screen } from "@testing-library/vue";
import { describe, it, expect } from "vitest";
import { randomUserResponse } from "@/components/__tests__/mocks/mocks.js";
import { mockEndpoint } from "@/components/__tests__/utils/test-utils.js";
import RandomUser from "@/components/home/RandomUser.vue";

describe("Random User", () => {
  it("loads data on mount", async () => {
    mockEndpoint("https://randomuser.me/api?seed=7f32cc7122d9675c", {
      body: randomUserResponse,
    });

    render(RandomUser);

    return Promise.resolve(RandomUser)
      .then(() => {
        return screen.findByTestId("jos.garica@example.com");
      })
      .then((res) => {
        console.log(res.innerHTML);
        expect(res.innerHTML).toContain("jos.garica@example.com");
      });
  });
});
