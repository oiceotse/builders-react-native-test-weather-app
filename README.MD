## Explicação arquitetura ##
A arquitetura demonstrada é baseada em FDD(feature driven development), onde divido minha aplicação em modules e features.
Na nossa aplicação de clima, tivemos apenas 1 module (Main), que corresponde as funcionalidades principais do app.
Tivemos 2 funcionalidades: Home e Welcome. A primeira é a tela principal, e a segunda é uma tela de boas vindas da aplicação.

O app está totalmente coberto pelo redux, persisto o clima na store, o app pode ser usado offline também, uma vez que tenha carregado qualquer informação de clima anteriormente;

Uma aplicação desse porte não precisaria da metade da estrutura apresentada aqui, mas fiz questão de densenvolve-la para fins de demonstração da escalabilidade que o produto pode ter, fora divisões de camadas que um app deve ter para melhor manutenibilidade;

## Funcionamento do app ##
Os clima é carregado assim que a tela principal é carregada, e também foi adicionada a funcionalidade de pull Refresh, cumprindo o requisito de atualização por ação do usuário, não quis usar o botão, para poder ter mais espaço na tela para as informações.

A welcome é mostrada apenas uma vez, uma vez que o usuario a tenha visualizado, ele tem acesso direto à home nos demais acessos ao app. 

O app usa class components e hooks para fins de demonstração.

## Considerações ##
Gostaria de ter feito algo mais bem acabado com animações e etc... mas por não ter os wireframes prontos e nem design de UI  ser meu forte, decidi fazer algo mais simples visualmente, mas com uma arquitetura bem sólida e construida.

A api Open Weather traz o nome da cidade errado. Testei a mesma geolocalização que é enviada para a api em outros serviços e em todos me trouxeram o nome da cidade correto. Por isso pode estar aparecendo o nome da cidade errado na tela, mas o lat e long estão corretos.


## Nublado ##
![](https://user-images.githubusercontent.com/30709513/115135882-472d8680-9ff2-11eb-85f6-8a2698fca25f.gif)

## Ensolarado ##
![](https://user-images.githubusercontent.com/30709513/115135819-d25a4c80-9ff1-11eb-9b7b-6c71003a6320.gif)

## Chovendo ##
![](https://user-images.githubusercontent.com/30709513/115135847-0df51680-9ff2-11eb-94e0-00fef4542912.gif)
