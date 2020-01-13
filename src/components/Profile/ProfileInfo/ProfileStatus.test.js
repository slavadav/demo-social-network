/* import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {

  test("status from props should be in the state", () => {
    const component = create(<ProfileStatus status="STATUS" />);
    const instance = component.getInstance();
    console.log('component:', component.getInstance())
    expect(instance.state.status).toBe("STATUS");
  });

  test("after creation span should be desplayed", () => {
    const component = create(<ProfileStatus status="STATUS" />);
    const span = component.findByType('span');
    expect(span.length).toBe(1);
  });
});
 */