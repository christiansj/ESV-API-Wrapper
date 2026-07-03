const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'ESV API Wrapper',
            version: '1.0.0',
            description: 'API Wrapper for fetching Biblical books and verses from esv.org.'
        },
        servers: [
            {
                url: 'http://localhost:8080'
            }
        ],
    },
    apis: ['**/*.ts']
}
export default swaggerOptions;