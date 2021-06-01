console.log('test')
module.exports = {
  '*.ts': () => [
    "eslint 'src/**' --fix",
    'npm run test:staged'
  ]
}
