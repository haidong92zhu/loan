'use strict';

exports.main_handler = async (event, context) => {
    console.log("Event: ", event);
    
    // Parse the incoming request
    const method = event.httpMethod;
    const path = event.path;
    
    try {
        // Route handling
        if (method === 'POST' && path === '/loan') {
            // Handle loan application
            return {
                statusCode: 200,
                body: JSON.stringify({
                    message: 'Loan application received'
                })
            };
        }
        
        if (method === 'GET' && path.startsWith('/loan/')) {
            // Handle loan status query
            const loanId = path.split('/')[2];
            return {
                statusCode: 200,
                body: JSON.stringify({
                    loanId,
                    status: 'PROCESSING'
                })
            };
        }

        return {
            statusCode: 404,
            body: JSON.stringify({
                message: 'Route not found'
            })
        };

    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'Internal server error'
            })
        };
    }
};
