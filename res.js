'use strict';

exports.ok = function(values, res, message) {
    var data = {
        'status' : 200,
        'data' : values,
        'message' : message ? message : ''
    };

    res.json(data);
    res.end();
}