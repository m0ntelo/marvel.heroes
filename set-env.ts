const { writeFileSync } = require('fs')
const { resolve } = require('path')
const dotenv = require('dotenv')

dotenv.config()

const environment = {
  production: process.env['NODE_ENV'] === 'production',
  MARVEL_PUBLIC_KEY: process.env['MARVEL_PUBLIC_KEY'] || '',
  MARVEL_PRIVATE_KEY: process.env['MARVEL_PRIVATE_KEY'] || '',
  API_URL: process.env['API_URL'] || '',
}

const environmentDevPath = resolve(__dirname, './src/app/environments/environment.ts');
const environmentProdPath = resolve(__dirname, './src/app/environments/environment.prod.ts');

const environmentFileContent = `export const environment = ${JSON.stringify(environment, null, 2)};`

writeFileSync(environmentDevPath, environmentFileContent, 'utf-8')
writeFileSync(environmentProdPath, environmentFileContent, 'utf-8')

console.log(`Arquivo de ambiente gerado: ${environmentDevPath}`)
console.log(`Arquivo de ambiente gerado: ${environmentProdPath}`)
