process.nextTick(function(){//下一次事件循环执行
	console.log("nextTick callback!");
});
console.log("nextTick was set!");
process.on('exit',function(code){
	console.log('about to exit with code:'+code);
});
if (typeof(window)=='undefined'){
	console.log('node.js');
}else{
	console.log("browser");
}

var fs=require('fs');
fs.readFile('sample.txt','utf-8',function(err,data){
	if (err){
		console.log(err);
	}else{
		console.log(data);
	}

});