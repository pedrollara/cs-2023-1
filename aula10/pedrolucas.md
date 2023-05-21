# Revisão de código
## Em Geral
* Nomeação: Os nomes escolhidos estão padronizados e em conformidade com seus objetivos no código.
* Segurança: Pontos de atrito devido ao conceito de números mágicos e algoritmos não documentados serão explorados em detalhes a seguir.
* Fontes: https://en.wikipedia.org/wiki/Magic_number_(programming)

## Para todas as classes em main/java/org/excecoes/**.java
* Identificar duplicação: todas as classes em todos esses arquivos poderiam estar contidas em apenas um arquivo ou em grupos representados por arquivos onde classes de exceções seriam organizadas. Múltiplos aquivos com pouco código é descenessário e repetitivo.

## Para Cliente.java
* Temos aqui apenas um arquivo com getters, verificadores e setters, nada a ser mudado.

## Para PremioSegurio.java
* Em PremioSeguro.obtemPercentualDesconto linha 42: Sugerir melhorias: Uma cadeia de ifs dentro uns dos outros é péssimo para a legibilidade do código num contexto onde os ifs se dispoem de maneira homonênea e repetitiva para com seu propósito e código executado, neste caso recomenda-se planificar essa seção.

## Para Teste.java
* Nenhum comentário a ser feito fora o código comentado o qual não há aparente razão de não estar nem em uso tampouco documentado acerca de como seria utilizado.

## Para CpfValidator.java
* Documentação: Apesar de seguir padrões nacionais bem estipulados, não há fonte para a teoria por de trás do altoritmo utilizado para validar o cpf.
* Feedback: Para algoritmos em produção os quais sustentam não só a experiência de diversos usuarios, como a integridade dos envolvidos no desenvolvimento assim também a qualidade do programa entregue. Recomenda-se em toda e qualquer oportunidade possível e viável a utilizaçáo de outsourcing para tais processos. Bibliotecas de validação utilizadas por milhares e até mesmo milhões de usuários e muitas vezes produzidas por fontes canônicas são sempre bem vindas nesses casos. Sugestão:
https://github.com/caelum/caelum-stella

## Para CpfValidatorRefactored.java
* Exatamente as mesmas recomendações anteriores são cabíveis aqui com o adendo de que código que não está mais em uso deverá ser excluido, como o arquivo CpfValidator e código novo em pequena escala não deverá conter em seu nome excessos como "refactored", pois levará a confusões acerca do que realmente está sendo utilizado em contraste ao que é apenas lixo que caiu em desuso.

## Para DataUtils.java
* O propósito se sua principal funcionalidade validaIdade() é tão obscuro para mim que mal consigo dizer ao certo suas responsabilidades e efeitos. Recomenda-se que todo o código seja reescrito do zero com o auxilio de bibliotecas nativas que saibam, por exemplo, quantos dias tem um determinado mês do ano ao invés de ter isso escrito no próprio código. Para getIdade() e validaData() o mesmo se aplica.
* Observação: na linha 121 temos o ano de 2023 'hard coded', o que pode ser considerado uma das piores práticas de código possíveis devido ao fato de que o ano em que estamos muda com o passar de aproximadamente 365 dias, oque torna o ciclo de vida útil deste software uma fração disso. Devido a essas e outras, todo o código deverá ser repensado, documentado e escrito do zero.

## Para EstadoCivilValidator.java
* Nada a ser dito acerca da abordagem algoritmica.
* Apenas uma observação, devido as novas abordagem acerca dos recém oficializados novos conceitos de gênero na lingua portuguesa, talvez um novo algoritmo de receba sufixos de genero de maneira dinâmica poderia ser uma funcionalidade a ser pensada do futuro.

## Para NacionalidadeValidator.Java
* Nada a ser dito, apenas uma possível expansão de domínio da aplicação similar ao abordado anteriormente.

## PassaporteValidator.java
* Nada a ser dito.

## SexoValidator.java
* Ver "Para EstadoCivilValidator.java", recomendações aqui serão similares.

# Revisão de testes

## Para todos os arquivos em test/java/org/test/alunos/**.java:
* Os dados de input poderiam estar todos num único arquivo em .json ou .xml. A utilização de pastas separadas para cada teste com o nome dos envolvidos é completamente redundante e desnecessário.

## Para os arquivos test/java/org/test/gilmar<de Cliente.Java a EstadoCivil.java em ordem alfabética>
* Os testes e expectativas de resultado estão corretos.

## Para os arquivos test/java/org/test/gilmar<de IdadeTest.java a SexoTest.java em ordem alfabética>
* Estes estão vazios e deverão ser preenchidos ou ao menos avisos deverão ser colocados em forma de TODO para o vscode ou outros que sejam reconhecidos pela IDE em questão, de forma a lembrar os usuários de que tais arquivos ainda não implementam os testes que deveriam
