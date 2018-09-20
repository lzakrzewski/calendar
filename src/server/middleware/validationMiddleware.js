export const eventValidation = (request, response, next) => {
    const event = request.body;

    if (!event.start || !event.event || !event.end) {
        return response.status(400).json({error: 'Bad request'});
    }

    return next();
};