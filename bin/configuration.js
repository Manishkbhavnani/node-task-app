module.exports = {
    mongoDbUrl: 'mongodb://yudiz:yudiz123@ds157923.mlab.com:57923/yudiz-practical',
    
    globalVariables: (req, res, next) => {
        res.locals.user = req.user || null;
        next();
    },
    WEB_ORIGIN_LOCAL : 'http://localhost:8889',
    WEB_ORIGIN_LOCALHOST : 'http://localhost:8889',
    ENVIRONMENT :  'development'
};