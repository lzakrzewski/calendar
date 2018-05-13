import React from 'react';
import { mount } from 'enzyme';
import Calendar from "../../src/pages/Calendar";
import moment from 'moment-immutable';

test('Calendar renders table with days of current month', () => {
    const calendar = mount(<Calendar />);

    expect(calendar.text()).toContain('Monday');
    expect(calendar.text()).toContain('28');
    expect(calendar.text()).toContain(moment().format('MMMM YYYY'));
});

test('Calendar can go to next month', () => {
    const calendar = mount(<Calendar />);

    calendar.find('.next-month').simulate('click');

    expect(calendar.text()).toContain(moment().add(1, 'month').format('MMMM YYYY'));
});

test('Calendar can go to previous month', () => {
    const calendar = mount(<Calendar />);

    calendar.find('.prev-month').simulate('click');

    expect(calendar.text()).toContain(moment().subtract(1, 'month').format('MMMM YYYY'));
});