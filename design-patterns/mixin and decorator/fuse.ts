const {fusebox} = require('fuse-box');
const {pluginJSON} = require('fuse-box');
const fuse = fusebox
({
    entry: './mixin.ts',
    target: 'server',
    // tsConfig: 'src/tsconfig.json', //If you already have a tsconfig, you can tell fusebox where it is
    // hmr: true,
    // watch:true,
    watcher: {
      include: 
      [
        "*.ts"
      ],
      ignore: 
      [
        
      ]
    },
    plugins: [pluginJSON()]
});

// https: //github.com/fuse-box/fuse-box/blob/grand-refactor/docs/changelog-fuse-compiler.md

async function startBundling()
{
  const {onComplete} = await fuse.runDev();
  onComplete(({server}) => server.start());
}

startBundling();

//Promise bundling
// const devServer = fuse.runDev();
// devServer.then(runResponse=>
// {
//   runResponse.onComplete(handler=>handler.server.start({argsAfter:['after'],argsBefore:['before']}))
// })