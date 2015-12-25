//写文件
'use strict'

var fs=require('fs');

var data="'use strict'";
fs.writeFileSync('file_server.js',data);//同步
