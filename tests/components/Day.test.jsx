import React from 'react';
import { shallow } from 'enzyme';
import Day from "../../src/components/Day";
import moment from 'moment-immutable';

test('can render empty cell when given day in month table doesn\'t exist', () => {
    const day = shallow(<Day day={null} events={[]} />);

    expect(day.text()).toEqual('');
});

test('can render day without any events', () => {
    const day = shallow(<Day day={moment('2017-01-01')} events={[]} />);

    expect(day.text()).toEqual('1');
});

test('can render day with events', () => {
    const day = shallow(<Day day={moment('2017-01-01')} events={[{ id: 'event-1', start: '2017-01-01', event: 'Learn ReactJS'}]} />);

    expect(day.text()).toContain('Learn ReactJS');
});
