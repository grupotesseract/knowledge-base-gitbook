FROM node:8.9.1

WORKDIR /var/www

RUN \
echo '' && \
echo '===============================================' && \
echo 'Instalação dos pacotes do projeto' && \
echo '===============================================\n' && \
echo '' && \
\
npm install -g gitbook-cli gulp-cli && \
npm install && \
gitbook install && \
\
echo '' && \
echo '===============================================' && \
echo 'Executando Knowledge Base' && \
echo '===============================================' && \
echo ''

CMD gulp
