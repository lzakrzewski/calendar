import browser from 'browser-detect';
import md5 from 'md5';

const retrieveIp = (request) => {
    if (!request) {
        return null;
    }

    if (!request.headers) {
        return null;
    }

    if (!request.headers['x-forwarded-for']) {
        return null;
    }

    return request.headers['x-forwarded-for'] ||
        request.connection.remoteAddress ||
        request.socket.remoteAddress ||
        (request.connection.socket ? request.connection.socket.remoteAddress : null);
};

const retrieveUserAgentDataString = (request) => {
    if (!request) {
        return null;
    }

    if (!request.headers) {
        return null;
    }

    if (!request.headers['user-agent']) {
        return null;
    }

    const userAgent = browser(request.headers['user-agent']) || null;
    let message = '';

    if (userAgent) {
        if (userAgent.name) {
            message = message + userAgent.name;
        }

        if (userAgent.version) {
            message = message + userAgent.version;
        }

        if (userAgent.versionNumber) {
            message = message + userAgent.versionNumber;
        }

        if (userAgent.mobile) {
            message = message + userAgent.mobile;
        }

        if (userAgent.os) {
            message = message + userAgent.os;
        }
    }

    return message;
};

export const userIdFromRequest = (request) => {
    let message = '';

    const ip = retrieveIp(request);

    if (ip) {
        message = message + ip;
    }

    const userAgentDataString = retrieveUserAgentDataString(request);

    if (userAgentDataString) {
        message = message + userAgentDataString;
    }
    
    return md5(message);
};
