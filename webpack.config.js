module.exports = {
  entry:  __dirname + "/main.js",
  output: {
    path: __dirname + "/dist",
    filename: "yawrap.min.js"
  },
  module:{
        loaders:[
            {
                test:/\.css$/,
                loader:'style-loader!css-loader' 
            }
        ]
    },
}
