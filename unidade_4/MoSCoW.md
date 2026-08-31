# CEUB
## Guia Prático - Técnica MoSCoW para Priorização de Requisitos

**Disciplina:** Engenharia de Requisitos | **Tema:** Priorização de Requisitos | **Atividade:** Projeto de Engenharia de Requisitos

---

### Objetivo
Auxiliar os grupos na priorização dos requisitos identificados durante o levantamento. Ao final, a equipe deverá classificar requisitos, justificar prioridades e definir um conjunto viável para a primeira entrega do sistema.

---

### 1. Por que priorizar requisitos?
Projetos possuem restrições de tempo, orçamento, equipe, tecnologia, prazo e escopo. Por isso, nem todos os requisitos podem ser desenvolvidos ao mesmo tempo. A priorização ajuda a decidir o que precisa ser entregue primeiro, considerando valor para o negócio, necessidade do usuário, dependências, riscos, integrações e obrigações legais.

> **Pergunta central:** O que precisa ser desenvolvido primeiro?

---

### 2. O que é a técnica MoSCoW?
MoSCoW organiza requisitos conforme sua importância para uma determinada entrega, versão ou release.

| Letra | Categoria | Significado | Pergunta-chave |
| :---: | :--- | :--- | :--- |
| **M** | Must Have | Deve ter | Sem isso, a solução cumpre seu objetivo? |
| **S** | Should Have | Deveria ter | É importante, mas pode esperar temporariamente? |
| **C** | Could Have | Poderia ter | Seria interessante se houver tempo e recursos? |
| **W** | Won't Have Now | Não terá agora | Pode ficar para uma versão futura? |

* **Importante:** *Won't Have Now* significa que o requisito não entra nesta entrega, não que foi descartado definitivamente.

---

### 3. M - Must Have
São requisitos indispensáveis. Sem eles, o produto pode não resolver o problema principal, não atender a uma regra essencial, apresentar risco crítico ou impedir o funcionamento de outros requisitos.

* **Pergunta de verificação:** *Se retirarmos este requisito, a primeira versão ainda cumpre seu objetivo principal?*
* **Exemplo:** `RF01` - O sistema deve permitir que o estudante consulte suas disciplinas matriculadas.
* **Classificação:** Must Have.
* **Justificativa:** A consulta das informações acadêmicas é uma capacidade central da solução.

---

### 4. S - Should Have
São requisitos muito importantes, mas cuja ausência temporária não impede a entrega. O sistema consegue operar inicialmente sem eles ou existe uma alternativa temporária.

* **Pergunta de verificação:** *O sistema consegue ser utilizado sem este requisito durante algum tempo?*
* **Exemplo:** `RF08` - O sistema deve enviar uma notificação ao estudante quando uma nova nota for publicada.
* **Classificação:** Should Have.
* **Justificativa:** A notificação melhora a experiência, mas o estudante ainda pode consultar suas notas no sistema.

---

### 5. C - Could Have
São requisitos desejáveis. Agregam valor ou melhoram a experiência, mas possuem menor impacto sobre o objetivo principal da primeira versão.

* **Pergunta de verificação:** *Se houver tempo e recursos adicionais, seria interessante implementar este requisito?*
* **Exemplo:** `RF12` - O sistema deve permitir que o estudante personalize a imagem do seu perfil.
* **Classificação:** Could Have.
* **Justificativa:** A personalização melhora a experiência, mas não é essencial para as atividades acadêmicas principais.

---

### 6. W - Won't Have Now
São requisitos que a equipe decidiu não implementar nesta entrega. Podem ser considerados futuramente por prazo, orçamento, complexidade, risco, dependências ou baixo valor para a versão atual.

* **Pergunta de verificação:** *Podemos deixar este requisito para uma versão futura sem comprometer a primeira entrega?*
* **Exemplo:** `RF15` - O sistema deve disponibilizar um assistente baseado em IA para recomendar disciplinas.
* **Classificação:** Won't Have Now.
* **Justificativa:** A funcionalidade exige maior investigação, dados e recursos tecnológicos.

---

### 7. Como aplicar a técnica MoSCoW
1. **Passo 1 - Valor:** Quanto valor este requisito entrega ao usuário ou ao negócio?
2. **Passo 2 - Necessidade:** O sistema consegue cumprir seu objetivo principal sem este requisito?
3. **Passo 3 - Dependências:** Existem outros requisitos que dependem deste requisito?
4. **Passo 4 - Riscos:** O que acontece se este requisito não for implementado agora?
5. **Passo 5 - Obrigações:** Existe legislação, regulamentação, contrato ou regra que torne o requisito obrigatório?
6. **Passo 6 - Viabilidade:** É possível implementar este requisito com o tempo, orçamento, equipe e tecnologia disponíveis?

---

### 8. Exemplo completo - Sistema de Agendamento de Consultas

| ID | Requisito | MoSCoW | Justificativa |
| :--- | :--- | :---: | :--- |
| **RF01** | Cadastrar paciente | **M** | Necessário para identificar o paciente |
| **RF02** | Consultar horários disponíveis | **M** | Essencial para o agendamento |
| **RF03** | Agendar consulta | **M** | Funcionalidade principal |
| **RF04** | Cancelar consulta | **M** | Necessário para liberar horários |
| **RF05** | Enviar confirmação por e-mail | **S** | Importante, mas existe alternativa |
| **RF06** | Enviar lembrete da consulta | **S** | Pode reduzir faltas |
| **RF07** | Personalizar foto do perfil | **C** | Melhora a experiência |
| **RF08** | Recomendar médicos utilizando IA | **W** | Pode ser planejado para versão futura |

---

### 9. Requisitos de qualidade também devem ser priorizados
MoSCoW não deve ser aplicada somente aos requisitos funcionais. Segurança, desempenho, confiabilidade e outras características de qualidade podem ser *Must*, *Should*, *Could* ou *Won't*, dependendo do contexto e da criticidade.

* **Exemplo:** `RQ01` - O sistema deve bloquear a conta após cinco tentativas consecutivas de autenticação inválida.

---

### 10. Cuidado com o 'Tudo é Must'
Se todos os requisitos forem classificados como prioridade máxima, não existe priorização. Para cada *Must*, o grupo deve conseguir justificar por que ele precisa obrigatoriamente estar na primeira versão e qual seria o impacto de retirá-lo.

---

### 11. Atividade do grupo - Matriz MoSCoW
Apliquem a técnica aos requisitos levantados no projeto. Marquem apenas uma categoria por requisito e registrem a justificativa.

| ID | Requisito | M | S | C | W | Justificativa |
| :--- | :--- | :---: | :---: | :---: | :---: | :--- |
| **RF01** | Agendar consulta |X| | | | |
| **RF02** | Cancelar consulta |X| | | | |
| **RF03** | Confirmar consulta | |X| | | |
| **RF04** | Cadastrar o paciente |X| | | | |
| **RF05** | Check-in do paciente | | | |X| |
| **RF06** | Registrar atendimento | | |X| | |
| **RF07** | Catalogar o serviço do paciente | | |X| | |
| **RF08** | Armazenar relatório médico| |X| | | |
| **RQ01** | | | | | | |
| **RQ02** | | | | | | |
| **RQ03** | | | | | | |
| **RQ04** | | | | | | |
| **RQ05** | | | | | | |

---

### 12. Definindo a primeira versão
**Situação-problema:** A equipe descobriu que terá apenas metade do tempo inicialmente previsto para desenvolver a primeira versão.

#### Parte A - Selecione 5 requisitos indispensáveis.
| Ordem | ID | Requisito | Por que precisa permanecer? |
| :---: | :--- | :--- | :--- |
| **1** | | | |
| **2** | | | |
| **3** | | | |
| **4** | | | |
| **5** | | | |

#### Parte B - Selecione 3 requisitos que podem ir para uma versão futura.
| ID | Requisito | Impacto de adiar |
| :--- | :--- | :--- |
| | | |
| | | |
| | | |

---

### 13. Desafio - Definindo o MVP
Observem os requisitos classificados como *Must Have* e respondam: com esses requisitos conseguimos entregar uma primeira versão que resolva o problema principal do usuário? Se não, revisem a priorização. Se sim, vocês possuem um primeiro conjunto de requisitos candidatos à entrega inicial.

---

### 14. Checklist MoSCoW
- [ ] Todos os requisitos possuem uma prioridade?
- [ ] Cada requisito possui apenas uma classificação?
- [ ] Os *Must* são realmente indispensáveis?
- [ ] Existe justificativa para cada prioridade?
- [ ] O grupo considerou valor para o negócio e necessidades dos stakeholders?
- [ ] Foram analisadas dependências, riscos e obrigações?
- [ ] Requisitos de qualidade também foram priorizados?
- [ ] Existem requisitos classificados como *Could* ou *Won't*?
- [ ] A equipe consegue explicar o impacto de retirar cada *Must*?
- [ ] A primeira versão é viável considerando as restrições do projeto?

---

### 15. Reflexão do grupo
1. Qual requisito foi mais difícil de priorizar? Por quê?
2. Houve algum requisito inicialmente considerado *Must* que mudou de prioridade?
3. Qual requisito gerou maior divergência entre os integrantes?
4. O que aconteceria se todos os requisitos fossem classificados como *Must*?
5. Quais requisitos formariam a primeira versão do sistema?

---

### 16. Take Away
* **Must:** Sem ele, a entrega não cumpre seu objetivo.
* **Should:** É muito importante, mas pode esperar temporariamente.
* **Could:** É desejável se houver tempo e recursos.
* **Won't:** Não será desenvolvido nesta entrega.

> **Regra de ouro:** Priorizar não significa apenas decidir quais requisitos são importantes. Significa decidir o que deve ser entregue primeiro para gerar o maior valor possível dentro das restrições do projeto.

---

### 17. Material de apoio
**REINEHR, Sheila.** *Requisitos de Software*. Material utilizado na disciplina Engenharia de Requisitos. O conteúdo aborda classificação dos requisitos, requisitos funcionais, requisitos de qualidade, restrições, priorização, documentação, critérios de qualidade e verificação dos requisitos.
