'use strict';

var through = require('through2'),
    path = require('path'),
    entries = [];
module.exports = function () {
    return through.obj(function (file, enc, cb) {
        // var fp = file.path,
        //     config = require('../config.js'),
        //     extname = path.extname(fp),
        //     filename = path.basename(fp, extname),
        //     link = path.dirname(fp).replace(
        //         process.cwd() + '/content/pages', config.pkg.homepage
        //     ) + '/' + filename + '/',
        //     tweetables = file.data.tweetables || [];

        // tweetables = tweetables.filter(function (tweetable) {
        //     return tweetable.length >= 50 && tweetable.length <= 70;
        // });
        // var matter = require('gray-matter'),
        //     frontMatter = matter(file);
        console.log(file.data);
        // this.push(file);
        cb();
    },
    function (cb) {
        var contents = '{}',
            File = require('vinyl'),
            file = new File({
                cwd: process.cwd(),
                base: '/data/',
                path: '/data/files.json',
                contents: new Buffer(contents)
            });

        // this.push(file);
        cb();
    });
};
