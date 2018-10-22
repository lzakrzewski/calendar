import { userIdFromRequest } from '../../../../src/server/application/userIdReader';

describe('Generate user id based on the payload of the request.', () => {
    it('returns user id string when request does not contain any payload.', async () => {
        const request = {};

        const userId = userIdFromRequest(request);

        expect(userId.length).toBe(32);
    });

    it('returns different user id for different "x-forwarded-for" headers', async () => {
        const request1 = {
            headers: {
                'user-agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0',
                'x-forwarded-for': '203.0.113.195'
            }
        };

        const request2 = {
            headers: {
                'user-agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0',
                'x-forwarded-for': '203.0.113.196'
            }
        };

        const userId1 = userIdFromRequest(request1);
        const userId2 = userIdFromRequest(request2);

        expect(userId1).not.toEqual(userId2);
    });

    it('returns different user id for different "user-agent" headers', async () => {
        const request1 = {
            headers: {
                'user-agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0',
                'x-forwarded-for': '203.0.113.195'
            }
        };

        const request2 = {
            headers: {
                'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0',
                'x-forwarded-for': '203.0.113.195'
            }
        };

        const userId1 = userIdFromRequest(request1);
        const userId2 = userIdFromRequest(request2);

        expect(userId1).not.toEqual(userId2);
    });
});
