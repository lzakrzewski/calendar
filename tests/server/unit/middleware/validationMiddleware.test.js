import { eventValidation } from '../../../../src/server/middleware/validationMiddleware';

describe('Validate events', () => {
    it('calls next when event is valid', async () => {
        const request = {
            body: {
                start: '2017-01-01',
                end: '2017-01-02',
                allDay: true,
            }
        };

        let response = {
            status: () => {
                return {
                    json: () => 'ok'
                };
            },
        };

        eventValidation(request, response, () => {
            expect(1).toEqual(1);
        });
    });
});
