module.exports = {
    devServer:{
        proxy:{
            '/api':{
                target:'http://localhost:3000',
                changeOrigin:true,
                ws:true,
            },
            '/douban':{
                target:'https://douban.uieee.com',
                changeOrigin:true,
                pathRewrite:{
                    '^/douban': '',
                }
            }
        }
    }
}