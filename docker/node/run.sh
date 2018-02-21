#!/bin/bash

echo ''
echo '==============================================='
echo 'Instalação dos pacotes do projeto'
echo '==============================================='
echo ''

npm install -g gitbook-cli gulp-cli
npm install
gitbook install

echo ''
echo '==============================================='
echo "Executando no ambiente local"
echo '==============================================='
echo ''

gulp
