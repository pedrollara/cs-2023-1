
## tarefa009.md
# DevQA: Como medir qualidade de código
## Ideias principais do texto:
* Como podemos medir as métricas de qualidade de código? Aqui a autora sugere alguns pontos que devem ser levados em consideração nessa análise e algumas ferramentas a seguir.
* Os principais benefícios da utilização de um verificador estático de código como: Erros e código de risco, análise geral do projeto com emissão de gráficos indicando pontos de interesse, problemas e onde se acumulam, facilitando a priorizaçao. 
* A autora também apresenta alguns pontos a serem analisados: Número de linhas de código, que indica, por módulo de código, sendo esses classes funções e até arquivos uma possibilidade de excesso de complexidade. Complexidade ciclomática: essa medida demonstra o quão, em função de ciclos, condicionais e caminhos, complexo um código se apresenta, essa métrica é importante na comprovação da indentificação de pontos obscuros onde a compreensão do objetivo e de possíveis problemas é dificultosa. E por fim falta de coesão de métodos, essa é contorversa mas em suma descreve como que os métodos e atributos interagem entre si, podendo estar excessivamente desacoplados o que indica a necessidade de separar a classe em questão em subclasses coesas dentro de si.
* E por último a autora sugere ferramentas como: SonarQube e Code Sheriff que detectam possível problemas analisando até mesmo pontos onde código perigoso é executado.

## O que é novidade para você em relação ao conteúdo do artigo
* Eu não conhecia ambas as ferramentas apresentadas para análise de qualidade de código.

## O que já era conhecido por você
* Os parâmetros a serem analisdos para identificar problemas no código.

## Escrever um parágrafo com suas palavras comentando o conteúdo do código.
Para mim, a área de DevQA é absurdamente obscura, pois, não há em uma modalidade específica de desenvolvedor a capacidade, método ou métricas confiáveis de medição de qualidade de código entregue. Afinal de contas o processo de identificação da qualidade além de ser altamente subjetivo só poderia ser realmente identificada através da definição única daquilo que um código de qualidade seria, e isso divide opiniões. Na minha, um "código para código" de qualidade é aquele o qual um iniciante tem a mais rápida curva de aprendizado, porém, "código para programa", a qualidade é a quantidade de comportamentos o software possui em função dos dados, agora, "código para negócio" é a velocidade com que o time pode a entregar a próxima necessidade de mercado. Se definir apenas o que qualidade de "código para código" já é uma tarefa árdua, contextualizar com os outros tipos de qualidade torna a ampla discussão algo quase impossível.
