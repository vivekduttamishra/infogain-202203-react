const path=require('path'); 

const HtmlWebPackPlugin=require('html-webpack-plugin'); 

 module.exports={ 

entry:path.join(__dirname, 'src', 'index.js'), 

output:{ 

path:path.join(__dirname, 'dist') 

} , 

 plugins:[ 

new HtmlWebPackPlugin({ 

template: path.join(__dirname,'src','index.html'), 

 }) 

], 

mode: 'production' 

} 