import React from "react";
import {shallow} from "enzyme";
import AddEvent from "../../src/components/AddEvent";

let reference;

beforeEach(() => {
    reference = null;
});

test('can open modal', () => {
    shallow(<AddEvent onRef={ref => (reference = ref)} />);

    reference.openModal();

    expect(reference.state.modalIsOpen).toBe(true)
});

test('can close modal', () => {
    shallow(<AddEvent onRef={ref => (reference = ref)} />);

    reference.openModal();
    reference.closeModal();

    expect(reference.state.modalIsOpen).toBe(false)
});
