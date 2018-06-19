import React from 'react';
import { mount } from 'enzyme';
import Calendar from "../../src/pages/Calendar";
import { Provider } from "react-redux";
import moment from 'moment';
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({ events: {}});

test('Calendar renders table with days of current month', () => {
    const calendar = mount(<Provider store={store}><Calendar /></Provider>);

    expect(calendar.text()).toContain('Monday');
    expect(calendar.text()).toContain('28');
    expect(calendar.text()).toContain(moment().format('MMMM YYYY'));
});

test('Calendar can go to next month', () => {
    const calendar = mount(<Provider store={store}><Calendar /></Provider>);

    calendar.find('.next-month').simulate('click');

    expect(calendar.text()).toContain(moment().add(1, 'month').format('MMMM YYYY'));
});

test('Calendar can go to previous month', () => {
            const calendar = mount(<Provider store={store}><Calendar /></Provider>);

    calendar.find('.prev-month').simulate('click');

    expect(calendar.text()).toContain(moment().subtract(1, 'month').format('MMMM YYYY'));
});