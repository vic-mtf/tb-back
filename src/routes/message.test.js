

module.exports = (request, response) => {

    response.json({
        messege: 'hello world', 
        ...request.query, 
        ...request.body}
        );
};