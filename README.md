# 🚀 SpaceShield

## Visão Geral

O SpaceShield é um sistema visual de monitoramento orbital criado para simular um centro de controle espacial. O projeto apresenta uma interface voltada para acompanhamento de missões, análise de alertas, telemetria, relatórios e configurações operacionais.

A proposta do sistema é representar uma plataforma utilizada por operadores espaciais para acompanhar a missão Orbitron, monitorando informações como status da missão, saúde dos equipamentos, objetos próximos, alertas ativos e dados orbitais.

O projeto foi desenvolvido com foco em HTML semântico, CSS organizado, identidade visual coerente com o tema espacial, responsividade e acessibilidade básica.

---

# 🛰️ Missão Orbitron

A missão Orbitron representa um satélite fictício em órbita terrestre baixa.

Dentro do sistema, essa missão é usada para demonstrar:

* Monitoramento orbital.
* Acompanhamento de telemetria.
* Identificação de objetos próximos.
* Análise de riscos de colisão.
* Visualização da saúde dos sistemas.
* Organização de logs e relatórios.

---

# 🎯 Objetivo do Projeto

O objetivo principal do SpaceShield é criar uma interface visual clara, organizada e funcional para simular o acompanhamento de uma missão espacial.

O projeto busca demonstrar:

* Organização de informações críticas.
* Hierarquia visual em dashboards.
* Uso de componentes reutilizáveis.
* Navegação entre diferentes telas.
* Identidade visual consistente.
* Estrutura semântica em HTML.
* Estilização modular com CSS.

---

# 🖥️ Funcionalidades do Sistema

## Dashboard

A tela inicial funciona como o painel principal do sistema.

Ela apresenta:

* Mapa orbital da missão. (Feito exclusivamente com Js)
* Dados do satélite Orbitron.
* Telemetria em tempo real.
* Linha do tempo da missão.
* Alertas ativos.
* Radar de objetos próximos.
* Logs recentes.
* Saúde dos equipamentos.

O Dashboard foi pensado para ser a visão mais completa do sistema, permitindo que o operador encontre rapidamente os dados mais importantes da missão.

---

## Missão

A aba Missão apresenta informações gerais sobre a operação Orbitron.

Ela contém:

* Descrição da missão.
* Objetivo da operação.
* Dados orbitais.
* Informações do satélite monitorado.
* Status atual da missão.
* Etapas principais da operação.

Essa página funciona como uma visão institucional e técnica da missão.

---

## Alertas

A aba Alertas concentra os eventos que exigem atenção do operador.

Ela apresenta:

* Risco de colisão.
* Objetos em aproximação.
* Variação de temperatura.
* Histórico de eventos.
* Classificação visual por nível de criticidade.

As cores auxiliam na identificação rápida da gravidade dos eventos:

* Vermelho para risco.
* Amarelo/laranja para atenção.
* Azul para informações gerais.

---

## Relatórios

A aba Relatórios organiza dados e eventos da missão.

Ela apresenta:

* Relatórios gerados.
* Eventos analisados.
* Indicadores de desempenho.
* Histórico operacional.
* Dados consolidados da missão.

Essa tela tem como objetivo mostrar uma visão mais analítica da operação.

---

## Configurações

A aba Configurações representa a área administrativa do sistema.

Ela contém:

* Dados do operador.
* Preferências da interface.
* Configurações da missão.
* Parâmetros operacionais.
* Status geral do sistema.

---

# 🎨 Identidade Visual

A identidade visual do SpaceShield foi baseada em interfaces de centros de controle, sistemas aeroespaciais e painéis tecnológicos.

Foram utilizados:

* Fundo escuro para transmitir ambiente espacial.
* Azul neon para elementos principais e dados informativos.
* Verde para status positivo ou nominal.
* Laranja para atenção.
* Vermelho para risco crítico.
* Cards com bordas e fundos escuros para separar informações.
* Tipografia com aparência tecnológica.

A estética foi pensada para transmitir precisão, segurança e tecnologia.

---

# 🧱 Arquitetura da Interface

O projeto utiliza HTML semântico para organizar as páginas.

Foram utilizados elementos como:

* `header`
* `main`
* `nav`
* `section`
* `aside`
* `footer`

A interface é dividida em áreas principais:

* Cabeçalho com identificação do sistema.
* Menu lateral de navegação.
* Conteúdo principal da página.
* Painéis de apoio.
* Rodapé com informações operacionais.

---

# 🧩 Sistema de Componentes

O CSS foi organizado com componentes reutilizáveis em diferentes páginas.

Exemplos de componentes:

* Header principal.
* Menu lateral.
* Cards de informações.
* Painéis de alertas.
* Painel de saúde dos equipamentos.
* Tabelas de eventos.
* Botões.
* Footer.
* Cards de relatório.
* Cards de configuração.

Essa divisão ajuda a manter consistência visual entre as telas.

---

# 📱 Responsividade

O layout foi planejado para se adaptar a diferentes tamanhos de tela.

O projeto considera:

* Desktop.
* Tablet.
* Mobile.

Em telas menores, os elementos são reorganizados para facilitar a leitura e a navegação.

---

# ♿ Acessibilidade

O projeto possui cuidados básicos de acessibilidade, como:

* Textos alternativos em imagens.
* Boa hierarquia visual.
* Uso de títulos para separar seções.
* Contraste entre texto e fundo.
* Navegação clara pelo menu lateral.
* Organização semântica da estrutura HTML.

---

# 📂 Estrutura de Pastas

```text
GS-SpaceShield/
│
├── assets/
│   ├── images/
│   ├── Moodboard e Analise Critica Sp...
│   └── Moodboard.png
│
├── css/
│   ├── style-alertas.css
│   ├── style-config.css
│   ├── style-index.css
│   ├── style-missao.css
│   └── style-relatorios.css
│
├── pages/
│   ├── alertas.html
│   ├── config.html
│   ├── missao.html
│   └── relatorios.html
│
├── index.html
├── integrantes.txt
└── README.md
```

# 🧭 Navegação

A navegação do sistema acontece pelo menu lateral.

As páginas disponíveis são:

* Dashboard
* Missão
* Alertas
* Relatórios
* Configurações

Cada página mantém o mesmo padrão visual para preservar a consistência da experiência.

---

# 🖼️ Moodboard

O projeto possui arquivos de moodboard dentro da pasta `assets`.

Esses arquivos servem como referência visual para:

* Cores.
* Tipografia.
* Estilo dos cards.
* Aparência dos painéis.
* Inspiração visual da interface espacial.

Arquivos relacionados:

* `Moodboard.png`
* `Moodboard e Analise Critica Sp...`

---

# 👥 Integrantes

Os integrantes do grupo estão registrados no arquivo:

```text
integrantes.txt
```

---

# 📚 Projeto Acadêmico

Projeto desenvolvido para fins educacionais na disciplina de Front-End Design.

O SpaceShield aplica conceitos de:

* HTML semântico.
* CSS modular.
* Arquitetura da informação.
* Hierarquia visual.
* Componentização.
* Responsividade.
* Acessibilidade.
* Identidade visual coerente com o tema proposto.

# ⚙️ Estrutura JavaScript

O projeto utiliza um único arquivo JavaScript responsável por controlar os recursos interativos presentes em todas as páginas do sistema.

## Arquivo

```text
javascript/
└── script-index.js
```

## Responsabilidades

O arquivo JavaScript é responsável por:

* Atualização do horário de Brasília exibido no cabeçalho.
* Controle do tempo de uso da plataforma.
* Controle do uptime exibido no rodapé.
* Atualização dinâmica de indicadores da missão.
* Registro de eventos nos logs do sistema.
* Simulação de alterações na telemetria.
* Planejamento de manobras na tela de alertas.
* Compartilhamento de informações entre páginas utilizando armazenamento local do navegador.

---

# 📖 Manual de Interatividade

Durante a avaliação do projeto, os seguintes recursos podem ser testados:

## 1. Navegação entre telas

No menu lateral esquerdo:

* Clique em Dashboard.
* Clique em Missão.
* Clique em Alertas.
* Clique em Relatórios.
* Clique em Configurações.

Resultado esperado:

O sistema navega entre as diferentes páginas mantendo a identidade visual, cabeçalho, rodapé e informações da missão.

---

## 2. Horário em Tempo Real

Localização:

Cabeçalho do sistema.

Resultado esperado:

O horário de Brasília é atualizado automaticamente em tempo real.

---

## 3. Tempo de Uso

Localização:

Cabeçalho do sistema.

Resultado esperado:

O contador inicia automaticamente ao abrir o sistema e continua contando mesmo durante a navegação entre páginas.

---

## 4. Uptime do Sistema

Localização:

Rodapé do sistema.

Resultado esperado:

O tempo de atividade permanece sincronizado com o tempo de uso da plataforma.

---

## 5. Simulação de Telemetria

Localização:

Dashboard → Telemetria em Tempo Real.

Procedimento:

Aguardar aproximadamente 20 segundos após abrir o Dashboard.

Resultado esperado:

O sistema simula uma alteração de temperatura.

Após novo intervalo de tempo, o valor retorna ao estado normal.

Os eventos são registrados automaticamente nos logs.

---

## 6. Logs Recentes

Localização:

Dashboard → Logs Recentes.

Resultado esperado:

Os eventos gerados durante a utilização do sistema são adicionados automaticamente ao histórico de logs.

---

## 7. Planejamento de Manobra

Localização:

Alertas → Alerta de Risco de Colisão → Botão "Planejar Manobra".

Procedimento:

Clique no botão.

Resultado esperado:

O sistema solicita confirmação da operação.

Após a confirmação:

* O alerta é atualizado.
* Um novo registro é adicionado ao histórico de eventos.
* A ação fica registrada para consulta posterior.

---

## 8. Histórico de Eventos

Localização:

Alertas → Histórico de Eventos.

Resultado esperado:

Os eventos registrados pelo sistema são exibidos em ordem cronológica.

---

## 9. Relatórios

Localização:

Relatórios → Últimos Eventos Analisados.

Resultado esperado:

Os registros gerados durante a operação do sistema ficam disponíveis para consulta na área de relatórios.

---

## 10. Responsividade

Procedimento:

Abrir as ferramentas do navegador (F12) e ativar o modo responsivo.

Resultado esperado:

O sistema reorganiza seus componentes para diferentes larguras de tela, preservando a legibilidade e a navegação.

---

# ✅ Cenário Recomendado para Avaliação

1. Abrir o Dashboard.
2. Verificar horário e tempo de uso.
3. Navegar para Missão.
4. Navegar para Alertas.
5. Executar "Planejar Manobra".
6. Verificar atualização do histórico.
7. Navegar para Relatórios.
8. Conferir os eventos registrados.
9. Navegar para Configurações.
10. Retornar ao Dashboard e verificar a continuidade dos contadores.

