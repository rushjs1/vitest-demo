import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/vue";
import TimelineContainer from "@/components/home/TimelineContainer.vue";
import { randomUserResponse } from "@/components/__tests__/mocks/mocks.js";
import { mockEndpoint } from "@/components/__tests__/utils/test-utils.js";

describe("Timeline", () => {
  mockEndpoint("https://randomuser.me/api?seed=7f32cc7122d9675c", {
    body: randomUserResponse,
  });

  render(TimelineContainer, {
    props: {
      title: "Vitest",
    },
  });

  it("Has expected title", () => {
    const title = screen.getByTestId("Vitest");
    expect(title.innerHTML).toContain("Vitest");
  });
});
