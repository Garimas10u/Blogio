const withMT=require("@material-tailwind/react/utils/withMT");

module.exports =withMT({
  content:["./index.html","./src/**/*.{vue, js, ts, tsx, jsx}"],
  theme:{
    extend:{},
  }, plugins:[],
});
