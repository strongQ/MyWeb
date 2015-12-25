'use strict'
var fs=require('fs');

var ws1=fs.createWriteStream('output1.txt','utf-8');
ws1.write('使用Stream写入文本数据...\n');
ws1.write('END');
ws1.end();

var ws2=fs.createWriteStream('output2.txt');
ws2.write(new Buffer('使用Stream写入二进制数据..\n','utf-8'));
ws2.write(new Buffer('End','utf-8'));
ws2.end();

//copy文件
var rs2=fs.createReadStream('output2.txt');
var ws3=fs.createWriteStream('copied.txt');
rs2.pipe(ws3);
