const errors = require('./errors')

module.exports = {
    'internal_server': {
        message: '',
        desc: '',
        errors: [errors.internal_server]
    },
    'database_down': {
        message: '',
        desc: '',
        errors: [errors.internal_server]
    },
    'database_error': {
        message: ' database error',
        desc: '',
        errors: [errors.internal_server]
    }
}