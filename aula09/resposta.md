# Pedro Lucas de Oliveira Lara

## Para o artigo: <https://appmaster.io/pt/blog/revisoes-de-codigo>

### 2.1 A importância da Revisão de código

A revisão de código é importante pois melhora a qualidade do código e do software, reduz custos e ajuda a detectar bugs.

### 2.2 Objetivos desta técnica

Os principais objetivos da revisão de código são: identificar e corrigir bugs, verifica a seguranã, legibilidade e duplicação do código.

### 2.3 Processo de Revisão

O processo de revisão de código envolve:

- Depuração: Identificar e corrigir erros no código, geralmente essa etapa acontece também durante a codifição onde as IDEs tem a capacidade de avisar erros simples como de sintaxe.
- Segurança: Testar vulnerabilidades no código, essa etapa pode incluir testes de injeção, buffer overflow e até mesmo de carga.
- Avaliar legibilidade: Checar a clareza do código, qualidade das variáveis, das funções e design patterns não aplicados.
- Identificar duplicação: Remover partes repetidas do código
- Nomeação: Melhorar a nomenclatura das variáveis e funções
- Revisar testes: Checar a qualidade e legibilidade dos testes
- Documentação: Verificar a consistência e atualização da documentação
- Sugerir melhorias e novos recursos
- Registrar mudanças e explicá-las ao autor do código. Coisa que hoje o git faz automaticamente
- Feedback: Compartilhar comentários e sugestões com o autor do código

### 2.4 Ferramentas de suporte a esta atividade

Algumas ferramentas que podem auxiliar no processo de revisão de código são:

O artigo não cita, mas faz propaganda a um sistema no code onde a revisão de código não é algo imperativo.

<hr />

## Para o artigo: <https://medium.com/codigorefinado/code-review-revis%C3%A3o-de-c%C3%B3digo-pode-ser-automatizada-ba5f25882774>

### 3.1 A importância da Revisão de código

Uma revisão de código automatizada pode evitar horas jogadas fora tentando descobrir bugs que acabaram indo para produção ou arquivos que não foram buildados antes do push. Fora isso, uma revisão de código inerente a IDE como promove o ESLint e TSLint por exemplo, pode manter padrões de escrita de código mais concisos para toda a equipe.

### 3.2 Os objetivos desta técnica

No geral, facilitar e agilizar processos onde o erro humano ou a confusão por falta de padrões pode dificultar a produção de código e artefatos derivados do código como as builds.

### 3.3 O Processo de Revisão

O processo de revisão de código começa na IDE e termina na ultima etapa de build e testes geralmente automatizada e diretamente linkada o github.

### 3.4 Ferramentas de suporte à atividade de revisão de código

- **Travis CI**: Ferramenta de continuous integration que automatiza a construção, teste e implantação de aplicativos
- **ESLint, TSLint**: Ferramentas para verificar a padronização do código javascript e typescript
- **Coveralls e Codecov**: Ferramentas para medir a cobertura de testes
- **CodeFactor, Codacy, Codebeat**: Ferramentas para análise e melhoria da qualidade do código
- **Dependabot**: Ferramenta para manter as dependências atualizadas e corrigir problemas de segurança
- **Snyk**: Ferramenta para encontrar e corrigir vulnerabilidades em pacotes de código aberto
- **Sonatype DepShield**: Identifica e cria issues para resolver problemas de segurança no código ou nas dependências
- **SecretScan**: Varre o projeto em busca de tokens e chaves deixados no código, tornando o projeto inerentemente inseguro ainda mais se for open source
