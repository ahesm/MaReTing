var express = require('express');
var app = express();

var walk = require('walk');
var walker = walk.walk('./app',{followLinks: false});

var path = require('path');

app.use(express.static(__dirname + '/public'));
app.use('/node_modules', express.static(__dirname+ '/node_modules'));
app.use('/app', express.static(__dirname+ '/app'));

var packageNames = [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/http',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',  
    '@angular/router',
    '@angular/router-deprecated',
    '@angular/testing',
    '@angular/upgrade',
  ];

var appfiles=[];
walker.on('file',function(root,stat,next){
    appfiles.push(root.substring(1).replace('\\','/') + '/' + stat.name);
    next();
});


walker.on('end',function(){
    for(var i in appfiles){
        if(appfiles[i].split('.').pop() == 'html' ||
        appfiles[i].split('.').pop() == 'css' ||
        appfiles[i].split('.').pop() == 'js'){
            app.get(appfiles[i], function(req,res){            
                res.sendfile( __dirname + appfiles[i]); 
            });
        }
    }
});

app.get('/',function(req,res){
    res.sendfile( __dirname + '/index.html');
});

app.get('/systemjs.config.js',function(req,res){
    res.sendfile( __dirname + '/systemjs.config.js');
});

app.get('/styles.css',function(req,res){
    res.sendfile( __dirname + '/styles.css');
});

app.get('/app/main.js',function(req,res){
    res.sendfile( __dirname + '/app/main.js');
});

app.get('/app/app.component.js', function(req,res){
    res.sendfile( __dirname + '/app/app.component.js');
});

for(var i in packageNames){
    path = '/node_modules/'+i+'/index.js';
    app.get(path,function(req,res){
        res.sendfile( __direname + path);
    });
}



app.listen(3000, function(){
    console.log('Example app listening on port 3000!');
});