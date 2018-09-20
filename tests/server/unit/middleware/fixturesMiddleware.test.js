import { loadFixtures } from '../../../../src/server/middleware/fixturesMiddleware';
import * as eventRepository from '../../../../src/server/application/eventRepository';
jest.mock('../../../../src/server/application/eventRepository');

describe('Fixtures middleware', () => {
    let next = null;
    const request = { headers: { some: 'header' } };
    const response = {
        status: (status) => {
            return {
                json: () => status
            };
        },
    };

    beforeEach(() => {
        next = jest.fn();

        eventRepository.add.mockClear();
    });

    it('add fixture events when user does not have any fixture events', async () => {
        eventRepository.hasEvents.mockImplementation(async () => {
            return false;
        });

        await loadFixtures(request, response, next);

        expect(eventRepository.add.mock.calls.length).toBeGreaterThan(0);
    });

    it('does not add any fixture event when user already has events', async () => {
        eventRepository.hasEvents.mockImplementation(async () => {
            return true;
        });

        await loadFixtures(request, response, next);

        expect(eventRepository.add.mock.calls.length).toEqual(0);
    });
});
