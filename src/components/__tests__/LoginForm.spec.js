import LoginForm from "@/components/home/LoginForm.vue";
import { mount } from "@vue/test-utils";
import { it, expect, beforeEach } from "vitest";

let wrapper;

beforeEach(() => {
  wrapper = mount(LoginForm);
});

it("emits an event with a payload", async () => {
  const input = wrapper.find('[data-testid="name-input"]');
  input.setValue("John Rush");

  await wrapper.find('[data-testid="submit-btn"]').trigger("click");

  console.log(wrapper.emitted());
  console.log(wrapper.emitted().formSubmitted[0][0]);

  expect(wrapper.emitted().formSubmitted[0][0]).toHaveProperty("name");
  expect(
    wrapper.emitted().formSubmitted[0][0].name.length
  ).toBeGreaterThanOrEqual(4);
});
