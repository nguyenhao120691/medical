module.exports =  {
    'bad_request': {
        code: '400',
        name: 'bad request',
        desc: 'unexpected request, missing or invalid pramater(s)'
    },
    'not_found': {
        code: '404',
        name: 'not found',
        desc: 'The server has not found anything matching the Request-URI. No indication is given of whether the condition is temporary or permanent.'
    },
    'conflict': {
        code: '409',
        name: 'conflict',
        desc: 'The request could not be completed due to a conflict with the current state of the resource. This code is only allowed in situations where it is expected that the user might be able to resolve the conflict and resubmit the request.' 
    }
}