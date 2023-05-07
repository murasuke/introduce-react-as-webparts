require('ts-node').register({
  transpileOnly: true,
  project: './tsconfig.express.json', // Reactの設定と分けるため別指定
});
require('./www.ts');
