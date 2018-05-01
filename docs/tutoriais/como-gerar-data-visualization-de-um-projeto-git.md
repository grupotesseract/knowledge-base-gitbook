---
description: Artigo demonstrando o uso do gource para gerar uma data visualization de um repositório GIT
---

> *Obs:* Apesar do gource oferecer compatibilidade com outros sistemas, esse tutorial foi desenvolvido para ser realizado em um Ubuntu 17.10. 


# O Gource 

O [Gource](http://gource.io/) é uma ferramenta para criar uma data-visualization a partir de um histórico de versionamento, como o GIT ou SVN. Ele sozinho já gera um video interativo que representa o desenvolvimento de um projeto em uma estrutura de arvore.

### Instalando

Fazer download da ultima versão do gource, no momento desse tutorial (28/04/2018) é a versão 0.48, que pode ser obtida [nesse link](https://github.com/acaudwell/Gource/releases/download/gource-0.48/gource-0.48.tar.gz), Caso o download falhe acesse diretamente no site oficial [gource.io](http://gource.io) 

Descompacte com `tar -xf gource-0.48.tar.gz`, entre na pasta extraida para configurar e buildar:


``` sh
./configure
make
sudo make install
```

### Utilizando

Após isso, voce ja deve conseguir utilizar o gource em qualquer repositório GIT, basta executar o comando `gource` na raiz de um projeto GIT. Isso irá gerar um video interativo onde é possivel pausar, dar zoom etc.. 

Se sua intenção for somente visualizar o resultado, então é só isso.

### Personalizando

Por padrão o gource gera uma visualização com varias opções que podem não ser desejaveis no resultado final, algumas das principais opçoes que normalmente utilizamos:

- -s, --seconds-per-day SECONDS
- --title TITLE
- --no-vsync
- --hide DISPLAY_ELEMENT (bloom, date, dirnames, files, filenames, mouse, progress, root, tree, users, usernames)
- -o, --output-ppm-stream FILE

Exemplo:

``` sh
gource -1280x720 -s 0.65 --no-vsync --user-scale 2 --title Titulo_X --hide bloom
``` 

Para a lista completa de opcoes, cheque o [repositório do github](https://github.com/acaudwell/Gource)


### Salvando Output e convertendo para .mp4 com [ffmpeg](https://www.ffmpeg.org/) 

Na propria wiki do gource no github está bem explicado: [FFmpeg using x264 codec](https://github.com/acaudwell/Gource/wiki/Videos#ffmpeg-using-x264-codec)

> É necessario ter instalado o ffmpeg e o [x264 codec](https://en.wikipedia.org/wiki/X264)

``` sh
gource -1280x720 -s 0.45 --no-vsync --user-scale 2 --title TituloX --hide bloom -r 25 -o - | ffmpeg -y -r 25 -f image2pipe -vcodec ppm -i - -vcodec libx264 -preset ultrafast -pix_fmt yuv420p -crf 1 -threads 0 -bf 0 gource.mp4
```

Ao sair da visualização do gource, deve existir um gource.mp4 na raiz do projeto com a area visivel do video gravada :D.

### Exemplos:

Desenvolvimento do Kernel do Linux de 1991 ~ 2015
[![Linux Kernel Development](https://img.youtube.com/vi/5iFnzr73XXk/0.jpg)](https://www.youtube.com/watch?v=5iFnzr73XXk)


## Referências:

- [Gource Website](http://gource.io/)
- [Gource Github](https://github.com/acaudwell/Gource)
- [Gource Videos using FFmpeg x264 codec](https://github.com/acaudwell/Gource/wiki/Videos#ffmpeg-using-x264-code://github.com/acaudwell/Gource/wiki/Videos#ffmpeg-using-x264-codec)
- [Gource Historico De Seu Repositorio Redesenhado](https://fjorgemota.com/gource-historico-de-seu-repositorio-redesenhado/)
- [Gource && FFMPEG reduce file size](https://video.stackexchange.com/a/12522)
