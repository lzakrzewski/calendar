import React from 'react';
import { shallow } from 'enzyme';
import Week from "../../src/components/Week";

test('can reder 7 days week', () => {
    const days = [
        {
            day: "1",
            dayName: "Monday",
        },
        {
            day: "2",
            dayName: "Tuesday",
        },
        {
            day: "3",
            dayName: "Wednesday",
        },
        {
            day: "4",
            dayName: "Thursday",
        },
        {
            day: "5",
            dayName: "Friday",
        },
        {
            day: "6",
            dayName: "Saturday",
        },
        {
            day: "7",
            dayName: "Sunday",
        }
    ];

    const week = shallow(<Week days={days} />);

    expect(week.text()).toContain('1');
    expect(week.text()).toContain('2');
    expect(week.text()).toContain('3');
    expect(week.text()).toContain('4');
    expect(week.text()).toContain('5');
    expect(week.text()).toContain('6');
    expect(week.text()).toContain('7');
});

test('can reder 1 days week', () => {
    const days = [
        {
            day: "1",
            dayName: "Sunday",
        }
    ];

    const week = shallow(<Week days={days} />);

    expect(week.text()).toContain('1');
});
