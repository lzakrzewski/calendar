import { eventValidation } from '../../../../src/server/middleware/validationMiddleware';

describe('Validate events', () => {
    let response = null;
    let next = null;

    beforeEach(() => {
        next = jest.fn();

        response = {
            status: (status) => {
                return {
                    json: () => status
                };
            },
        };
    });

    it('calls next when event is valid', async () => {
        const request = {
            body: {
                start: '2017-01-01',
                end: '2017-01-02',
                event: 'some event name',
            }
        };

        eventValidation(request, response, next);

        expect(next.mock.calls.length).toBe(1);
    });

    it('can not call next when event is invalid', async () => {
        const request = {
            body: {
                start: '2017-01-01',
                event: 'some event name',
            }
        };

        eventValidation(request, response, next);

        expect(next.mock.calls.length).toBe(0);
    });

    it('returns bad request response when even is invalid', async () => {
        const request = {
            body: {
                start: '2017-01-01',
                end: '2017-01-02',
            }
        };

        const result = eventValidation(request, response, next);

        expect(result).toEqual(400);
    });
});
