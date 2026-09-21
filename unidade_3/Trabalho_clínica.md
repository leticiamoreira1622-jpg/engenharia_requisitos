# Documento de Engenharia de Requisitos e Análise de Processos

**Instituição:** CEUB  
**Disciplina:** Engenharia de Requisitos | **Tema:** Análise, Modelagem e Priorização de Requisitos  
**Integrantes do Grupo:** João Miguel Andrade, Daniel de Medeiros, Lucas Alves e Letícia Moreira de Oliveira[cite: 2]

---

## 1. Análise do Problema

A **Clínica Vida+ Saúde** enfrenta gargalos operacionais e perda de eficiência no processo de agendamento e atendimento ao paciente[cite: 2]. 

### Principais Problemas Identificados
* **Conflitos de Horários:** Múltiplas recepcionistas agendam consultas simultaneamente utilizando planilhas locais não sincronizadas, gerando duplicidade de horários para o mesmo médico[cite: 2].
* **Cadastro Fragmentado:** Ausência de uma base centralizada faz com que os dados dos pacientes sejam coletados repetidamente a cada retorno ou consulta com nova especialidade[cite: 2].
* **Alta Taxa de Absenteísmo (No-Show):** Falta de um sistema automatizado para confirmação prévia e envio de lembretes aos pacientes[cite: 2].
* **Comunicação Manual para Cancelamentos:** O remanejamento de horários em casos de desmarcação é feito manualmente via telefone, gerando sobrecarga na recepção e ociosidade na agenda médica[cite: 2].

---

## 2. Stakeholders

| Stakeholder | Papel no Sistema | Responsabilidade / Interesses |
| :--- | :--- | :--- |
| **Paciente**[cite: 2] | Usuário Final[cite: 2] | Solicitar agendamentos, receber confirmações/lembretes, realizar consultas e acessar histórico[cite: 2]. |
| **Recepcionista**[cite: 2] | Usuário Operacional[cite: 2] | Cadastrar pacientes, agendar, confirmar e cancelar consultas, organizar a fila de atendimento[cite: 2]. |
| **Médico**[cite: 2] | Usuário Operacional[cite: 2] | Consultar a agenda diária, registrar atendimentos e relatórios/prontuários[cite: 2]. |
| **Gerente da Clínica**[cite: 2] | Aprovador / Gestor[cite: 2] | Acompanhar indicadores de desempenho, ocupação de agenda e faturamento[cite: 2]. |
| **Equipe de TI**[cite: 2] | Suporte / Manutenção[cite: 2] | Manter a disponibilidade, segurança do sistema e conformidade com a LGPD[cite: 2]. |

---

## 3. Processo AS-IS (Processo Atual)

### Descrição do Fluxo Atual
1. **Solicitação:** O paciente entra em contato via telefone, WhatsApp ou presencialmente[cite: 2].
2. **Consulta da Agenda:** A recepcionista verifica a disponibilidade de horários em uma planilha individual mantida em seu computador[cite: 2].
3. **Agendamento:** A recepcionista anota o nome e telefone do paciente na planilha do médico selecionado[cite: 2].
4. **Atendimento Presencial:** O paciente chega à clínica; a recepcionista busca o nome do paciente no arquivo físico ou na planilha para confirmar o horário[cite: 2].
5. **Consulta Médica:** O médico realiza o atendimento e registra as anotações em fichas de papel ou em um software isolado[cite: 2].

---

## 4. Problemas e Melhorias

| Processo Atual (Problema) | Causa Raiz | Melhoria Proposta |
| :--- | :--- | :--- |
| **Agendamento duplo**[cite: 2] | Planilhas descentralizadas e não sincronizadas[cite: 2]. | Implementar agenda única centralizada em banco de dados em tempo real[cite: 2]. |
| **Cadastros duplicados/incompletos**[cite: 2] | Ausência de validação e histórico único[cite: 2]. | Cadastramento unificado via CPF com validação de dados obrigatórios[cite: 2]. |
| **Faltas de pacientes (No-Show)**[cite: 2] | Confirmação manual/ausente[cite: 2]. | Envio automatizado de lembretes e solicitações de confirmação por e-mail/WhatsApp[cite: 2]. |
| **Ociosidade na agenda médica**[cite: 2] | Demora em reagendar horários vagos[cite: 2]. | Liberação automática de horários no sistema imediatamente após cancelamento[cite: 2]. |

---

## 5. Processo TO-BE (Processo Futuro)

### Descrição do Fluxo Futuro
1. **Atendimento e Busca:** A recepcionista (ou o paciente) acessa o sistema centralizado e busca pelo CPF. Caso não exista, o cadastro é realizado em tela única[cite: 2].
2. **Seleção de Especialidade e Horário:** O sistema exibe os serviços e médicos catalogados com os horários em tempo real, impedindo dupla marcação[cite: 2].
3. **Confirmação e Notificação:** O agendamento é concluído e o sistema dispara automaticamente uma notificação de confirmação ao paciente[cite: 2].
4. **Recepção e Check-in:** No dia da consulta, a recepção valida o horário no sistema e altera o status do paciente para "Em Espera"[cite: 2].
5. **Atendimento e Registro:** O médico visualiza a fila digital, realiza a chamada, registra o atendimento e finaliza o ciclo na plataforma unificada[cite: 2].

---

## 6. Regras de Negócio

* **RN01 - Unicidade de Cadastro:** Todo paciente deve ser identificado de forma única pelo número do CPF[cite: 2].
* **RN02 - Bloqueio de Conflito de Horário:** O sistema não deve permitir dois agendamentos no mesmo horário para o mesmo médico[cite: 2].
* **RN03 - Janela de Cancelamento:** O cancelamento de consulta sem custos deve ser feito com no mínimo 24 horas de antecedência.
* **RN04 - Tolerância de Atraso:** A tolerância máxima para atraso no atendimento é de 15 minutos após o horário agendado.
* **RN05 - Confirmação de Pagamento:** O agendamento só é confirmado mediante o registro da forma de pagamento aceita pelo estabelecimento.

---

## 7. Requisitos Funcionais (RF)

* **RF01:** O sistema deve permitir cadastrar pacientes contendo nome, CPF, data de nascimento e telefone[cite: 2].
* **RF02:** O sistema deve permitir agendar consultas selecionando médico, especialidade, data e horário disponível[cite: 2].
* **RF03:** O sistema deve permitir cancelar consultas agendadas, atualizando o status da agenda[cite: 2].
* **RF04:** O sistema deve permitir confirmar a presença do paciente no agendamento[cite: 2].
* **RF05:** O sistema deve permitir catalogar os serviços e especialidades atendidas pelos médicos.
* **RF06:** O sistema deve permitir realizar o check-in do paciente na recepção.
* **RF07:** O sistema deve permitir o registro e o armazenamento do relatório médico/atendimento[cite: 2].
* **RF08:** O sistema deve enviar confirmações e lembretes de consultas aos pacientes[cite: 2].

---

## 8. Requisitos Não Funcionais (RNF / RQ)

* **RQ01 - Segurança / Conformidade:** O sistema deve armazenar e tratar dados pessoais de acordo com as diretrizes da LGPD[cite: 2].
* **RQ02 - Validação de Pagamento:** O sistema deve registrar e validar os métodos de pagamento aceitos para início da prestação do serviço.
* **RQ03 - Desempenho:** A busca por disponibilidade de agenda deve responder em menos de 2 segundos.
* **RQ04 - Regra de Tolerância:** O sistema deve possuir regra para tratar e realocar horários de pacientes atrasados após o tempo de tolerância.
* **RQ05 - Automação:** O sistema deve automatizar a ordenação de prontuários e o reagendamento por prioridade.
* **RQ06 - Usabilidade:** A interface do sistema deve ser acessível e responsiva para uso em navegadores web e dispositivos móveis[cite: 2].

---

## 9. Indicadores de Desempenho (KPIs)

| Indicador[cite: 2] | Objetivo[cite: 2] | Fórmula de Cálculo | Meta |
| :--- | :--- | :--- | :---: |
| **Taxa de Ocupação da Agenda**[cite: 2] | Maximizar o uso dos horários médicos disponíveis[cite: 2]. | $(\text{Consultas Realizadas} / \text{Horários Disponibilizados}) \times 100$ | $\ge 85\%$ |
| **Taxa de Faltas (No-Show)**[cite: 2] | Reduzir o absenteísmo não notificado[cite: 2]. | $(\text{Quantidade de Faltas} / \text{Total de Agendamentos Confirmados}) \times 100$ | $\le 5\%$ |
| **Taxa de Cancelamento**[cite: 2] | Monitorar perda de horários agendados[cite: 2]. | $(\text{Quantidade de Cancelamentos} / \text{Total de Agendamentos}) \times 100$ | $\le 10\%$ |
| **Tempo Médio de Agendamento**[cite: 2] | Agilizar o atendimento da recepção[cite: 2]. | $\sum(\text{Tempo por Agendamento}) / \text{Total de Agendamentos}$ | $\le 2$ min |

---

## 10. Priorização dos Requisitos

Abaixo consta a matriz de priorização estruturada com base nas necessidades essenciais de negócio da clínica:

| ID | Requisito | Prioridade | Justificativa |
| :--- | :--- | :---: | :--- |
| **RQ01** | Métodos de pagamento aceitos | **Alta** | O método de pagamento é necessário para o início do negócio. |
| **RF02** | Cadastrar o paciente[cite: 2] | **Alta** | O cadastro é necessário para qualquer consulta médica, o sistema deve cadastrar. |
| **RF03** | Agendar consulta[cite: 2] | **Alta** | O agendamento de consulta é necessário para o funcionamento do sistema da clínica. |
| **RF04** | Catalogar o serviço do paciente | **Alta** | O catálogo é necessário para melhor distribuição de horário da agenda do médico. |
| **RF05** | Cancelar consulta[cite: 2] | **Alta** | Em caso de cancelamento, é necessário para a reorganização da agenda da clínica. |
| **RF06** | Confirmar consulta[cite: 2] | **Alta** | A confirmação é importante num sistema de clínica, mas pode ser feita manualmente, ainda que seja mais trabalhoso. |
| **RF07** | Check-in do paciente | **Baixa** | O check-in facilita o trabalho repetitivo da recepção em caso de retorno, porém é possível refazer sempre o cadastro. |
| **RQ08** | Realocar horários de pacientes atrasados após a tolerância | **Fora do Escopo Inicial** | A realocação de horário pode ser feita após o dia de consulta e não necessariamente logo após a tolerância. |
| **RQ09** | Automatizar prontuários médicos | **Fora do Escopo Inicial** | A automatização dos prontuários é um facilitador para o funcionamento, mas não é essencial no momento inicial. |
| **RF10** | Registrar atendimento[cite: 2] | **Baixa** | O registro de atendimento no sistema não é essencial na primeira versão por poder ser feito manualmente pelos médicos. |
| **RF11** | Armazenar relatório médico | **Média** | O armazenamento sistemático dos prontuários é uma assistência, podendo ser realizado manualmente de início. |
| **RQ12** | Reagendar automaticamente por ordem de prioridade | **Baixa** | O reagendamento prioritário é importante, mas pode ser feito de forma manual no primeiro momento. |
| **RQ13** | Enviar o prontuário ao paciente | **Baixa** | O envio do prontuário é bom, mas não é essencial para o funcionamento básico da consulta. |
| **RQ14** | Avaliar atendimento do médico | **Fora do Escopo Inicial** | A avaliação do atendimento garante a qualidade, porém não é essencial para o funcionamento operacional inicial. |
