# ScreenCast && Edição de video usando ffmpeg



#### Gravando a tela

Oseguinte  produziria um video com 1300x600 comencando do 0x0 da tela atual e salvaria no arquivo output.mp4

`ffmpeg -video_size 1300x600 -framerate 10 -f x11grab -i :0.0+0,0 output.mp4`



#### Editando a gravação

A partir do comando de cima voce consegue gravar qualquer parte da sua screen, mas nem sempre a gravação fica 100%

##### Clip/Crop:

O seguinte iria pular os primeiros 40s desse video e guardar os proximos 4s e salvar em um arquivo output2.mp4:

`ffmpeg -ss 00:00:40.0 -i output.mp4 -c copy -t 00:00:04.0 output2.mp4`



#### Caso a intenção seja produzir um GIF:

A maneira mais facil que encontrei \[link\]\(\) foi criando uma pallete  e depois aplicar,  criando a a palette, nesse caso estamos fazendo o resize pra 320px width:

`ffmpeg -y -ss s 12 -t 8 -i inpput.mp4 -vf fps=10,scale=320:-1:flags=lanczos,palettegen palette.png`

Depois de criar a palette é só aplica-lá em alguma transformaçao:

`ffmpeg -ss 12 -t 8 -i output.mp4 -i palette.png -filter_complex "fps=10,scale=320:-1:flags=lanczos[x];[x][1:v]paletteuse" output.gif`



# Referencias:

* \[FFMPEG TRUE\] \([https://trac.ffmpeg.org/wiki/Capture/Desktop\](https://trac.ffmpeg.org/wiki/Capture/Desktop\)\)
* \[how-do-i-convert-a-video-to-gif-using-ffmpeg\]\([https://superuser.com/questions/556029/how-do-i-convert-a-video-to-gif-using-ffmpeg-with-reasonable-quality/556031\#556031\](https://superuser.com/questions/556029/how-do-i-convert-a-video-to-gif-using-ffmpeg-with-reasonable-quality/556031#556031\)\)



