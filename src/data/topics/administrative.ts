import type { PracticeAreaKey } from "@/data/practice-areas";
import type { TopicDetail } from "@/data/topic-details";
import { topicDetail } from "@/data/topic-factory";

const key = (slug: string) => `administrativeLaw/${slug}` as `${PracticeAreaKey}/${string}`;

export const administrativeTopics: Partial<Record<`${PracticeAreaKey}/${string}`, TopicDetail>> = {
  [key("notificacoes-decisoes")]: topicDetail(
    {
      pt: "Notificações e decisões administrativas: leitura do ato, da autoridade e do prazo, que em muitos casos corre desde a notificação.",
      en: "Administrative notices and decisions: reading the act, the authority and the time limit, which in many cases runs from the notice.",
    },
    {
      bannerTitle: "Notificações e decisões administrativas",
      introTitle: "O prazo conta-se, muitas vezes, desde a notificação",
      intro: [
        "Uma câmara municipal, um instituto, um ministério ou outra entidade comunica a decisão por notificação. O Código do Procedimento Administrativo regula a forma dessa comunicação e o momento em que o interessado se considera ciente do ato. Em muitos procedimentos, o prazo para responder, reclamar ou impugnar corre desde a notificação, e não desde o dia em que o ato foi assinado.",
        "Convém ler o ato inteiro: quem decidiu, o que foi decidido, a fundamentação e o prazo indicado para reagir. Uma notificação sem a indicação dos meios de reação pode não fazer correr o prazo da mesma forma, mas isso confirma-se no caso. Não autoriza a ignorar a carta. Perder o prazo pode tornar o ato definitivo e fechar a impugnação.",
        "Esta página não trata das notificações da AIMA em matéria de imigração. Audiências e indeferimentos de títulos de residência têm páginas próprias neste sítio. Aqui o objeto é a notificação administrativa comum, de uma câmara, de um instituto ou de outra entidade que não atue como AIMA. O escritório lê o ato, a autoridade e o prazo. Não garante que a decisão venha a ser alterada.",
      ],
      help: [
        "Identificar a autoridade, o objeto da decisão e a data em que a notificação se considera feita.",
        "Confrontar o prazo escrito na carta com a norma do procedimento, sem adotar um número genérico.",
        "Ver se a notificação indica os meios de reação e o que essa omissão pode significar para a contagem.",
        "Separar uma resposta ainda dentro do procedimento de uma impugnação já fora dele.",
      ],
      docsLead: "A notificação e o ato são o centro do ficheiro. O resto serve para datar o conhecimento.",
      docs: [
        "A notificação, com o envelope, o aviso eletrónico ou o comprovativo de disponibilização.",
        "O ato na íntegra, incluindo a fundamentação e não apenas o dispositivo.",
        "Procurações ou credenciais, se a carta foi enviada a um representante.",
        "Pedidos, respostas e provas já juntos ao procedimento.",
        "Qualquer carta anterior da mesma autoridade sobre o mesmo assunto.",
      ],
      steps: [
        { title: "Leitura", text: "Lemos a decisão, a autoridade que a assinou e o que foi ordenado." },
        { title: "Data", text: "Fixamos a data relevante da notificação, incluindo a via eletrónica quando seja o caso." },
        { title: "Prazo", text: "Comparamos o prazo indicado com a regra aplicável àquele ato." },
        { title: "Via", text: "Indicamos se ainda cabe resposta, recurso administrativo ou ação, sem antecipar o desfecho." },
      ],
      faqs: [
        {
          q: "O prazo escrito na carta é sempre o prazo legal?",
          a: "O prazo impresso é uma indicação da autoridade, não substitui a lei. O prazo que interessa é o da norma daquele ato, lida com o Código do Procedimento Administrativo quando a lei especial não o fixa. A carta pode omitir o prazo ou indicar um prazo que não coincide com a norma. A análise compara a data da notificação, a data do conhecimento e a regra do meio de reação. Deixar a carta por abrir, por o prazo parecer errado, não protege o interessado.",
        },
        {
          q: "Se a carta voltar para trás, o prazo não começou?",
          a: "Não se pode afirmar isso em abstrato. Em algumas notificações postais, a falta de levantamento ou a devolução da carta produz uma presunção de conhecimento, nos termos da norma aplicável. Noutras, a presunção não opera ou a data é outra. O mesmo cuidado vale para a caixa eletrónica: a data pode ser a da consulta ou a de uma presunção depois da disponibilização. O regime concreto é que se lê, e não uma regra única para todas as entidades.",
        },
        {
          q: "Esta página serve para uma carta da AIMA?",
          a: "Não. As notificações da AIMA em procedimentos de imigração, incluindo a audiência prévia e o indeferimento de um título de residência, estão tratadas em páginas próprias desta área de estrangeiros. O texto desta página destina-se a atos de outras entidades públicas, como municípios, institutos e serviços do Estado. Usar o enquadramento errado atrasa a leitura do prazo que realmente corre naquele procedimento.",
        },
      ],
      ctaTitle: "Recebeu uma decisão de uma entidade pública?",
      ctaLead: "A análise começa na notificação, na autoridade e na data, antes de qualquer resposta.",
      message: "Olá, gostaria de marcar uma consulta sobre notificações e decisões administrativas.",
    },
    {
      bannerTitle: "Administrative notices and decisions",
      introTitle: "The time limit often runs from the notice",
      intro: [
        "A municipality, an institute, a ministry or another body communicates the decision by a notice. The Administrative Procedure Code governs the form of that communication and the moment at which the person concerned is taken to know the act. In many procedures the time limit to reply, to seek review or to challenge the act runs from the notice, not from the day the act was signed.",
        "The whole act should be read: who decided, what was decided, the reasons and the time stated for a reaction. A notice that does not mention the means of reaction may not start the period in the same way, but that is checked on the file. It is not a reason to set the letter aside. Missing the period can make the act final and close the challenge.",
        "This page is not about notices from AIMA in immigration matters. Hearings and refusals of residence permits have their own pages on this website. The subject here is an ordinary administrative notice, from a municipality, an institute or another body that is not acting as AIMA. The office reads the act, the authority and the time limit. It does not promise that the decision will be changed.",
      ],
      help: [
        "Identify the authority, the subject of the decision and the date on which the notice counts as given.",
        "Compare the period written on the letter with the rule for that procedure, without using a generic number of days.",
        "See whether the notice states the means of reaction and what an omission may mean for the count.",
        "Separate a reply that is still inside the procedure from a challenge that is already outside it.",
      ],
      docsLead: "The notice and the act are the core of the file. The rest is there to date knowledge of the act.",
      docs: [
        "The notice, with the envelope, the electronic alert or proof that it was made available.",
        "The full act, including the reasons and not only the operative part.",
        "Powers of attorney or credentials, if the letter was sent to a representative.",
        "Applications, replies and evidence already on the procedure file.",
        "Any earlier letter from the same authority on the same subject.",
      ],
      steps: [
        { title: "Reading", text: "We read the decision, the authority that signed it and what it orders." },
        { title: "The date", text: "We fix the relevant date of the notice, including electronic service where that is the route." },
        { title: "The period", text: "We compare the stated period with the rule that applies to that act." },
        { title: "The route", text: "We indicate whether a reply, an administrative appeal or a court claim is still open, without predicting the outcome." },
      ],
      faqs: [
        {
          q: "Is the period printed on the letter always the legal period?",
          a: "The printed period is a statement by the authority. It does not replace the statute. The period that matters is the one in the rule for that act, read with the Administrative Procedure Code where the special statute does not set it. The letter may omit the period or state a period that does not match the rule. The review compares the date of the notice, the date of knowledge and the rule for the means of reaction. Leaving the letter unopened because the period looks wrong does not protect the person concerned.",
        },
        {
          q: "If the letter comes back, has the period not started?",
          a: "That cannot be said in the abstract. For some postal notices, a failure to collect the letter or its return creates a presumption of knowledge, under the applicable rule. For others, the presumption does not operate, or the relevant date is different. The same care applies to an electronic mailbox: the date may be the date of access, or a presumed date after the notice was made available. The concrete regime is what is read. There is no single rule for every public body.",
        },
        {
          q: "Does this page cover a letter from AIMA?",
          a: "No. Notices from AIMA in immigration procedures, including a prior hearing and a refusal of a residence permit, are dealt with on their own pages in the foreign-nationals section of this website. The text on this page is for acts of other public bodies, such as municipalities, institutes and departments of the State. Using the wrong frame delays the reading of the time limit that is actually running in that procedure.",
        },
      ],
      ctaTitle: "Have you received a decision from a public body?",
      ctaLead: "The review starts with the notice, the authority and the date, before any reply is sent.",
      message: "Hello, I would like to book a consultation about administrative notices and decisions.",
    },
  ),
  [key("audiencia-previa")]: topicDetail(
    {
      pt: "Audiência prévia no procedimento administrativo: direito de ser ouvido antes de uma decisão desfavorável, com as exceções da lei, fora do âmbito da AIMA.",
      en: "Prior hearing in an administrative procedure: the right to be heard before an unfavourable decision, with the statutory exceptions, outside AIMA matters.",
    },
    {
      bannerTitle: "Audiência prévia",
      introTitle: "Ser ouvido antes da decisão desfavorável",
      intro: [
        "No procedimento administrativo comum, o Código do Procedimento Administrativo reconhece ao interessado o direito de se pronunciar antes de uma decisão que lhe seja desfavorável. A audiência prévia serve para contraditar factos, juntar documentos e dizer por que razão a decisão projetada não deve ser tomada. Não é um recurso e não é ainda um processo em tribunal.",
        "O mesmo código, e por vezes a lei especial do setor, prevê exceções. Urgência, risco de comprometer a decisão, um número muito elevado de interessados e outras causas legais podem dispensar a diligência. A dispensa tem de caber na norma. A pressa da entidade não chega. A omissão indevida pode ser um vício, mas não produz sozinha a anulação do ato.",
        "A resposta não garante uma decisão favorável. A autoridade pondera o que foi dito e pode manter, alterar ou não praticar o ato. Esta página não é a audiência prévia da AIMA em matéria de imigração, que tem tratamento próprio. O escritório prepara ou revê a pronúncia no procedimento administrativo geral. A decisão final continua a ser da entidade.",
      ],
      help: [
        "Ver se a decisão projetada é desfavorável e se a audiência é devida naquele procedimento.",
        "Confirmar se a entidade invoca uma exceção e se essa exceção resulta da lei aplicável.",
        "Organizar factos, documentos e o pedido concreto dentro do prazo da notificação.",
        "Explicar que a pronúncia integra o procedimento e não substitui um recurso ou uma ação.",
      ],
      docsLead: "A pronúncia vale pelo que estiver documentado no prazo da audiência.",
      docs: [
        "A notificação que abre a audiência, com a data e o prazo.",
        "O projeto de decisão ou a descrição dos factos que a entidade tenciona dar como assentes.",
        "Documentos que contradigam esses factos ou que a entidade ainda não tenha.",
        "Procuração, se a pronúncia for apresentada por mandatário.",
        "Cópias do que já foi junto ao procedimento, para não repetir nem contradizer o ficheiro.",
      ],
      steps: [
        { title: "Enquadramento", text: "Vemos se há direito de audiência ou uma exceção legal invocável." },
        { title: "Prazo", text: "Contamos o prazo a partir da notificação que convida à pronúncia." },
        { title: "Pronúncia", text: "Redigimos os factos, a prova e o pedido, de forma que a entidade os possa apreciar." },
        { title: "Depois", text: "Lemos a decisão que se seguir. A audiência não antecipa o sentido dessa decisão." },
      ],
      faqs: [
        {
          q: "Se responder, a entidade tem de decidir a meu favor?",
          a: "Não. A audiência prévia é uma garantia de procedimento, prevista no Código do Procedimento Administrativo, e não um direito ao conteúdo da decisão. A entidade lê a pronúncia, pode pedir mais elementos e pode, ainda assim, praticar o ato desfavorável, se entender que a lei e os factos o sustentam. Também pode alterar o projeto ou arquivar. Nenhuma destas saídas se anuncia antes. O que a pronúncia faz é deixar no procedimento a versão do interessado e a prova que a acompanha.",
        },
        {
          q: "A entidade pode decidir sem me ouvir?",
          a: "Pode, quando uma exceção do Código do Procedimento Administrativo ou da lei especial o permita. As situações mais citadas são a urgência, o risco de a audiência comprometer a decisão e o número muito elevado de interessados, além de outras causas que a norma preveja. A exceção tem de ser a do caso, não uma fórmula copiada. Se a audiência foi omitida sem apoio legal, esse ponto pode ser usado numa impugnação posterior. Não significa, por si, que o tribunal ou a entidade superior venha a anular o ato.",
        },
        {
          q: "É a mesma audiência prévia da AIMA?",
          a: "Não. A audiência prévia usada pela AIMA antes de decisões em matéria de imigração, como um indeferimento de residência, está explicada nas páginas dessa área. O regime de fundo, os prazos e os efeitos não se copiam de um procedimento para o outro. Esta página trata da audiência no procedimento administrativo geral, perante câmaras, institutos, ministérios e outras entidades públicas. Confundir as duas atrasa a resposta no prazo que a notificação concreta fixou.",
        },
      ],
      ctaTitle: "Foi convidado a pronunciar-se antes de uma decisão?",
      ctaLead: "A pronúncia responde aos factos indicados e ao prazo. Não assegura o sentido da decisão.",
      message: "Olá, gostaria de marcar uma consulta sobre audiência prévia num procedimento administrativo.",
    },
    {
      bannerTitle: "Audiência prévia",
      introTitle: "Being heard before an unfavourable decision",
      intro: [
        "In an ordinary administrative procedure, the Administrative Procedure Code gives the person concerned a right to comment before a decision that would be unfavourable. The prior hearing is the place to contest facts, to file documents and to say why the intended decision should not be made. It is not an appeal and it is not yet a case in court.",
        "The same code, and sometimes the special statute for the sector, provides exceptions. Urgency, a risk of undermining the decision, a very large number of persons and other legal grounds can dispense with the step. The dispensation has to fit the rule. Haste by the body is not enough. An unlawful omission may be a defect, but it does not, alone, annul the act.",
        "A reply does not guarantee a favourable decision. The authority weighs what was said and may maintain, change or drop the intended act. This page is not the AIMA prior hearing in immigration matters, which is dealt with separately. The office prepares or reviews the comments in a general administrative procedure. The final decision remains with the body.",
      ],
      help: [
        "See whether the intended decision is unfavourable and whether a hearing is due in that procedure.",
        "Check whether the body relies on an exception and whether that exception follows from the applicable statute.",
        "Organise facts, documents and the specific request within the time limit on the notice.",
        "Explain that the comments stay inside the procedure and do not replace an appeal or a court claim.",
      ],
      docsLead: "The comments are only as useful as what is documented within the hearing period.",
      docs: [
        "The notice that opens the hearing, with the date and the time limit.",
        "The draft decision, or a description of the facts the body intends to treat as established.",
        "Documents that contradict those facts or that the body does not yet have.",
        "A power of attorney, if a representative files the comments.",
        "Copies of what is already on the file, so the comments do not repeat or contradict it.",
      ],
      steps: [
        { title: "The frame", text: "We see whether there is a right to a hearing or a legal exception that can be relied on." },
        { title: "Time", text: "We count the period from the notice that invites comments." },
        { title: "Comments", text: "We set out the facts, the evidence and the request so that the body can consider them." },
        { title: "Afterwards", text: "We read the decision that follows. The hearing does not predict the direction of that decision." },
      ],
      faqs: [
        {
          q: "If I reply, must the body decide in my favour?",
          a: "No. The prior hearing is a procedural guarantee under the Administrative Procedure Code. It is not a right to any particular content of the decision. The body reads the comments, may ask for further items and may still adopt the unfavourable act if it takes the view that the law and the facts support it. It may also change the draft or close the file. None of these outcomes is announced in advance. What the comments do is place the account of the person concerned, and the evidence that goes with it, on the procedure file.",
        },
        {
          q: "Can the body decide without hearing me?",
          a: "It can, where an exception in the Administrative Procedure Code or in a special statute allows it. The situations most often referred to are urgency, a risk that the hearing would undermine the decision, and a very large number of persons concerned, together with other grounds the rule itself sets out. The exception has to be the one for the case, not a copied formula. If the hearing was omitted without legal support, that point can be used in a later challenge. It does not, by itself, mean that a court or a higher body will annul the act.",
        },
        {
          q: "Is this the same prior hearing as the AIMA one?",
          a: "No. The prior hearing used by AIMA before decisions in immigration matters, such as a refusal of residence, is explained on the pages for that area. The underlying regime, the time limits and the effects are not copied from one procedure to another. This page deals with the hearing in a general administrative procedure, before municipalities, institutes, ministries and other public bodies. Mixing the two delays the reply inside the period fixed by the actual notice.",
        },
      ],
      ctaTitle: "Have you been invited to comment before a decision?",
      ctaLead: "The comments answer the facts that were set out, and the time limit. They do not secure the direction of the decision.",
      message: "Hello, I would like to book a consultation about a prior hearing in an administrative procedure.",
    },
  ),
  [key("impugnacao")]: topicDetail(
    {
      pt: "Impugnação de decisões administrativas: recurso hierárquico ou reclamação perante a Administração, e ação no tribunal. Prazos estritos e efeito suspensivo não automático.",
      en: "Challenge of administrative decisions: a hierarchical appeal or a complaint to the administration, and a court claim. Strict time limits, and no automatic suspensive effect.",
    },
    {
      bannerTitle: "Impugnação de decisões administrativas",
      introTitle: "Duas vias distintas, com prazos próprios",
      intro: [
        "Impugnar uma decisão administrativa pode fazer-se dentro da Administração ou perante um tribunal administrativo. Dentro da Administração cabem, em regra, a reclamação a quem praticou o ato e o recurso hierárquico ao superior, quando exista. São meios graciosos. A ação judicial é outra via: quem decide é um tribunal, não a entidade que praticou o ato. Uma não substitui a outra por defeito.",
        "Os prazos são estritos e contam-se, em regra, da notificação. A lei do setor pode afastar o prazo geral do Código do Procedimento Administrativo ou o prazo judicial. Esta página não publica um número único de dias. Perder o prazo do meio necessário pode tornar o ato definitivo. Fazer só o recurso gracioso, e deixar correr o prazo do tribunal, também pode fechar essa via.",
        "O efeito suspensivo não é automático. Apresentar reclamação, recurso hierárquico ou ação não suspende, por si, a produção de efeitos do ato. A suspensão tem de resultar da lei ou de uma providência que o tribunal defira, e nem um nem outro ocorre em todos os casos. O escritório separa as vias e as datas. Não promete a suspensão nem a anulação da decisão.",
      ],
      help: [
        "Distinguir reclamação, recurso hierárquico e ação judicial, e ver qual ainda está em prazo.",
        "Verificar se a lei do setor torna algum recurso administrativo necessário antes do tribunal.",
        "Avaliar se a apresentação do meio gracioso altera, ou não, a contagem do prazo judicial.",
        "Dizer se há fundamento para pedir uma suspensão, sem a tratar como consequência da impugnação.",
      ],
      docsLead: "Sem o ato, a notificação e a cronologia, a escolha da via é uma hipótese.",
      docs: [
        "Decisão integral e notificação, com as datas de uma e de outra.",
        "Prova do recurso ou da reclamação já apresentados, se existirem.",
        "Norma ou regulamento em que a entidade fundou o ato, se estiverem identificados.",
        "Documentos do procedimento que mostrem o que foi alegado antes da decisão.",
        "Procuração forense, quando se avance para tribunal ou para uma peça assinada por advogado.",
      ],
      steps: [
        { title: "Ato", text: "Identificamos a decisão, a autoridade e o que ela produz na prática." },
        { title: "Prazos", text: "Contamos em separado o prazo gracioso e o prazo judicial." },
        { title: "Via", text: "Indicamos o meio que a lei admite naquele momento, incluindo um recurso necessário se a norma o exigir." },
        { title: "Efeitos", text: "Explicamos se o ato continua a produzir efeitos enquanto a impugnação corre." },
      ],
      faqs: [
        {
          q: "O recurso hierárquico chega para impedir a ação?",
          a: "Não chega, como regra. O recurso hierárquico e a reclamação são apreciados pela Administração. A ação é apreciada pelo tribunal administrativo. Em muitos casos o recurso administrativo é facultativo: pode ser usado, mas não é condição da ação. Noutros, a lei do setor exige-o antes do tribunal, e saltá-lo pode impedir a via judicial. Além disso, o efeito de um recurso facultativo sobre o prazo da ação não é igual em todas as normas. As duas contagens confirmam-se no caso, em vez de se supor que uma via espera pela outra.",
        },
        {
          q: "Se impugnar, o ato fica suspenso?",
          a: "Em regra, não. O efeito suspensivo não acompanha automaticamente a reclamação, o recurso hierárquico nem a ação. Há leis especiais que atribuem esse efeito a certos recursos, e há a possibilidade de pedir uma providência cautelar no tribunal, quando os requisitos estejam preenchidos. Nenhuma das duas coisas se presume. Enquanto a suspensão não resultar da lei ou de uma decisão do tribunal, a entidade pode executar o ato. O escritório não anuncia que a execução vai parar.",
        },
        {
          q: "Um ato nulo pode ser impugnado fora do prazo?",
          a: "A lei trata de forma diferente os vícios que geram anulabilidade e os que, em casos delimitados, geram nulidade. Essa diferença pode ter consequências no prazo e em quem pode invocar o vício. Não transforma qualquer ilegalidade em nulidade, nem autoriza a esperar sem ler a notificação. A qualificação faz-se a partir do ato e da norma, não a partir da gravidade que o interessado atribui ao prejuízo. Perder um prazo útil, à espera dessa qualificação, é um risco próprio.",
        },
      ],
      ctaTitle: "Precisa de reagir a uma decisão administrativa?",
      ctaLead: "A escolha entre a Administração e o tribunal faz-se com as datas à frente, sem tratar a suspensão como automática.",
      message: "Olá, gostaria de marcar uma consulta sobre a impugnação de uma decisão administrativa.",
    },
    {
      bannerTitle: "Challenge of administrative decisions",
      introTitle: "Two different routes, each with its own time limit",
      intro: [
        "An administrative decision can be challenged inside the administration or before an administrative court. The routes inside the administration are a complaint to the author of the act and a hierarchical appeal to the superior, where one exists. These are gracious appeals. A court claim is different: a court decides it, not the body that issued the act. One does not replace the other.",
        "The time limits are strict and, as a rule, run from the notice. The sector statute may displace the general period in the Administrative Procedure Code or the court period. This page does not publish a single number of days. Missing the period for a necessary step can make the act final. Using only the gracious appeal, and letting the court period run out, can close that route too.",
        "Suspensive effect is not automatic. Filing a complaint, a hierarchical appeal or a claim does not, of itself, stop the act from taking effect. Suspension has to follow from the statute or from an interim measure that the court grants, and neither happens in every case. The office separates the routes and the dates. It does not promise that the decision will be suspended or set aside.",
      ],
      help: [
        "Distinguish a complaint, a hierarchical appeal and a court claim, and see which is still in time.",
        "Check whether the sector statute makes an administrative appeal necessary before court.",
        "Assess whether filing the gracious means of review changes the count of the court period, or does not.",
        "Say whether there is a basis to seek a suspension, without treating it as a consequence of the challenge.",
      ],
      docsLead: "Without the act, the notice and the chronology, the choice of route is only a hypothesis.",
      docs: [
        "The full decision and the notice, with the date of each.",
        "Proof of any appeal or complaint already filed.",
        "The statute or regulation the body relied on, where they are identified.",
        "Documents from the procedure showing what was argued before the decision.",
        "A forensic power of attorney, where the matter goes to court or a lawyer must sign the paper.",
      ],
      steps: [
        { title: "The act", text: "We identify the decision, the authority and what it does in practice." },
        { title: "Time limits", text: "We count the gracious period and the court period separately." },
        { title: "The route", text: "We indicate the means the law allows at that moment, including a necessary appeal where the rule requires one." },
        { title: "Effects", text: "We explain whether the act continues to take effect while the challenge is pending." },
      ],
      faqs: [
        {
          q: "Does a hierarchical appeal remove the need for a claim?",
          a: "As a rule, no. A hierarchical appeal and a complaint are decided by the administration. A claim is decided by the administrative court. In many cases the administrative appeal is optional: it may be used, but it is not a condition of the claim. In others, the sector statute requires it before court, and skipping it can block the court route. The effect of an optional appeal on the time limit for the claim is also not the same under every rule. The two counts are checked on the file, rather than assuming that one route waits for the other.",
        },
        {
          q: "If I challenge the act, is it suspended?",
          a: "As a rule, no. Suspensive effect does not automatically follow a complaint, a hierarchical appeal or a claim. Some special statutes give that effect to certain appeals, and it is sometimes possible to ask the court for an interim measure where the requirements are met. Neither is presumed. Until suspension follows from the statute or from a court order, the body may enforce the act. The office does not announce that enforcement will stop.",
        },
        {
          q: "Can a void act be challenged after the time limit?",
          a: "The law treats defects that make an act voidable differently from defects that, in defined cases, make it void. That difference can matter for the time limit and for who may rely on the defect. It does not turn every unlawfulness into voidness, and it does not allow the notice to be left unread. The classification is made from the act and the rule, not from how serious the person concerned considers the harm to be. Letting a useful period pass while waiting for that classification is a risk of its own.",
        },
      ],
      ctaTitle: "Do you need to react to an administrative decision?",
      ctaLead: "The choice between the administration and the court is made with the dates in view, without treating suspension as automatic.",
      message: "Hello, I would like to book a consultation about challenging an administrative decision.",
    },
  ),
  [key("contraordenacoes")]: topicDetail(
    {
      pt: "Contraordenações e coimas: defesa, prova e pagamento voluntário em alguns regimes, sem percentagem e sem promessa de redução ou de arquivamento.",
      en: "Administrative offences and fines: defence, evidence and voluntary payment in some regimes, with no percentage and no promise of a reduction or of the case being closed.",
    },
    {
      bannerTitle: "Contraordenações e coimas",
      introTitle: "A coima nasce de um procedimento próprio",
      intro: [
        "A contraordenação é um ilícito administrativo, distinto do crime, punido com coima e, nalguns regimes, com sanções acessórias. O regime geral das contraordenações, conhecido por RGCO, aplica-se em tudo o que a lei especial do setor não regular de outro modo. Estrada, trabalho, segurança alimentar, ambiente, urbanismo ou posturas municipais podem ter regras próprias de notificação, de defesa e de impugnação.",
        "Depois da notificação dos factos, há em regra um prazo para defesa escrita e prova. A coima é decidida pela autoridade competente. A defesa não cancela a coima nem obriga a arquivar. Nalguns regimes o pagamento voluntário pode reduzi-la, nos termos dessa lei. Não é universal. Esta página não indica percentagem nem promete a redução. Pagar pode encerrar a contestação. Esse efeito vê-se antes de pagar.",
        "A autoridade tem de ter um processo: auto, medições, fotografias ou outros elementos. O visado pode pedir o acesso que a lei permita e juntar prova no prazo. A impugnação judicial segue o regime do setor e, em muitos casos, corre nos tribunais judiciais, não nos administrativos. O escritório organiza a defesa e a prova. Não anuncia o cancelamento da coima.",
      ],
      help: [
        "Identificar o regime, a autoridade e o prazo de defesa indicado na notificação.",
        "Reunir a prova que responde aos factos descritos, e apontar a prova que falta no processo.",
        "Explicar, se existir nessa lei, o que o pagamento voluntário faz à possibilidade de defesa, sem indicar uma percentagem.",
        "Separar a defesa administrativa da impugnação judicial posterior, que tem prazo e tribunal próprios.",
      ],
      docsLead: "A defesa constrói-se sobre o auto e sobre o que a notificação imputa, não sobre um relato solto.",
      docs: [
        "Notificação, auto de notícia ou acusação, com a data de receção.",
        "Fotografias, medições, relatórios ou outros elementos que a autoridade junte.",
        "Documentos do visado que expliquem o facto, a autorização ou a diligência devida.",
        "Identificação completa e, no caso de uma sociedade, quem a pode obrigar.",
        "Comprovativo de envio, se já tiver sido apresentada defesa ou pedido de consulta do processo.",
      ],
      steps: [
        { title: "Regime", text: "Vemos se manda a lei especial, o RGCO, ou os dois em articulação." },
        { title: "Factos", text: "Comparamos o que é imputado com os documentos e com o que o visado descreve." },
        { title: "Defesa", text: "Preparamos a defesa e a prova dentro do prazo, ou revemos a peça já feita." },
        { title: "Decisão", text: "Lemos a decisão final e o prazo para a impugnar em tribunal, sem antecipar o resultado." },
      ],
      faqs: [
        {
          q: "Se pagar já, a coima baixa?",
          a: "Nalguns regimes, o pagamento voluntário dentro de um prazo pode reduzir a coima. A redução, quando existe, é a que essa lei concretiza, e não uma percentagem geral que se possa publicar aqui. Noutros regimes não há redução, ou o pagamento tem um efeito diferente. Por isso esta página não indica percentagem nem promete que o valor desça. Antes de pagar, confirma-se também se o pagamento esgota a defesa ou a impugnação. Um pagamento feito para obter um desconto que a lei não dá não devolve o dinheiro e pode fechar a contestação.",
        },
        {
          q: "A apresentação da defesa extingue o processo?",
          a: "Não. A defesa é o momento em que o visado responde aos factos, junta prova e pode pedir o arquivamento ou uma coima diferente, nos termos que a lei admita. A autoridade pode acolher essa defesa, acolhê-la em parte ou aplicar a coima. Também pode manter sanções acessórias, se o regime as prever. Nada disto se decide pela mera existência de uma resposta. Tratar a defesa como encerramento do processo seria atribuir ao escritório um resultado que pertence à autoridade.",
        },
        {
          q: "A coima impugna-se no tribunal administrativo?",
          a: "Depende do regime. Em muitas contraordenações, a impugnação judicial da decisão que aplica a coima corre nos tribunais judiciais, com regras próximas do processo penal, e não nos tribunais administrativos. Há setores com via própria. O RGCO e a lei especial é que o dizem. Tratar todas as coimas como se fossem ações administrativas no TAC escolhe o tribunal errado e pode consumir o prazo. A defesa dentro da autoridade e a impugnação no tribunal são fases diferentes, cada uma com o seu prazo.",
        },
      ],
      ctaTitle: "Foi notificado de uma contraordenação ou de uma coima?",
      ctaLead: "A defesa e a prova leem-se no prazo. O pagamento voluntário, quando a lei o prevê, não é uma redução prometida.",
      message: "Olá, gostaria de marcar uma consulta sobre uma contraordenação ou uma coima.",
    },
    {
      bannerTitle: "Administrative offences and fines",
      introTitle: "A fine comes out of its own procedure",
      intro: [
        "An administrative offence is not a crime. It is sanctioned with a fine, called a coima, and in some regimes with ancillary sanctions. The general regime on administrative offences, known as the RGCO, applies where the special statute for the sector does not regulate the point differently. Roads, employment, food safety, the environment, planning or local by-laws may have their own rules on notice, defence and challenge.",
        "After notice of the facts, there is a period for a written defence and evidence. The competent authority decides the fine. A defence does not cancel the fine or close the file. In some regimes, voluntary payment may bring a reduction set by that statute. It is not universal. This page states no percentage and promises no reduction. Paying can end the chance to contest. That effect is checked first.",
        "The authority must have a file, such as a report, measurements or photographs. The person concerned may seek the access the law allows and file evidence in time. A court challenge follows the sector regime and often runs in the judicial courts, not the administrative courts. The office organises the defence and the evidence. It does not announce that the fine will be set aside.",
      ],
      help: [
        "Identify the regime, the authority and the time limit for a defence stated on the notice.",
        "Gather the evidence that answers the facts described, and note the evidence missing from the file.",
        "Explain, where that statute provides it, what voluntary payment does to the chance of a defence, without stating a percentage.",
        "Separate the administrative defence from a later court challenge, which has its own period and its own court.",
      ],
      docsLead: "The defence is built on the notice of the facts and on what is alleged, not on a loose account.",
      docs: [
        "The notice, the report of the facts or the charge, with the date of receipt.",
        "Photographs, measurements, reports or other material the authority encloses.",
        "Documents from the person concerned that explain the fact, an authorisation or the care that was due.",
        "Full identification and, for a company, who can bind it.",
        "Proof of sending, if a defence or a request to inspect the file has already been filed.",
      ],
      steps: [
        { title: "Regime", text: "We see whether the special statute governs, the RGCO governs, or the two operate together." },
        { title: "Facts", text: "We compare what is alleged with the documents and with what the person concerned describes." },
        { title: "Defence", text: "We prepare the defence and the evidence within the period, or we review a paper already drafted." },
        { title: "Decision", text: "We read the final decision and the period to challenge it in court, without predicting the result." },
      ],
      faqs: [
        {
          q: "If I pay now, does the fine go down?",
          a: "In some regimes, voluntary payment within a period may reduce the fine. Where a reduction exists, it is the one that statute sets out, not a general rate that can be published here. In other regimes there is no reduction, or payment has a different effect. This page therefore states no percentage and does not promise that the sum will fall. Before paying, it is also checked whether payment uses up the defence or the court challenge. A payment made to obtain a discount the statute does not give does not come back, and it may close the contest.",
        },
        {
          q: "Does filing a defence bring the case to an end?",
          a: "No. The defence is the moment at which the person concerned answers the facts, files evidence and may ask for the case to be closed or for a different fine, on the terms the statute allows. The authority may accept that defence, accept it in part or impose the fine. It may also maintain ancillary sanctions, where the regime provides them. None of this is decided by the mere fact that a reply exists. Treating the defence as the end of the case would assign to the office an outcome that belongs to the authority.",
        },
        {
          q: "Is the fine challenged in the administrative court?",
          a: "It depends on the regime. For many administrative offences, a court challenge to the decision that imposes the fine runs in the judicial courts, under rules close to criminal procedure, and not in the administrative courts. Some sectors have their own route. The RGCO and the special statute are what say so. Treating every fine as an administrative claim in the circuit court chooses the wrong court and can use up the period. The defence before the authority and the challenge in court are different stages, each with its own time limit.",
        },
      ],
      ctaTitle: "Have you been notified of an administrative offence or a fine?",
      ctaLead: "The defence and the evidence are read against the time limit. Voluntary payment, where the statute provides it, is not a promised reduction.",
      message: "Hello, I would like to book a consultation about an administrative offence or a fine.",
    },
  ),
  [key("licencas")]: topicDetail(
    {
      pt: "Licenças e autorizações: urbanismo, atividade comercial e atividade profissional. A entidade competente identifica-se primeiro. O deferimento tácito não é universal.",
      en: "Licences and authorisations: planning, commercial activity and professional activity. The competent body is identified first. Tacit approval is not universal.",
    },
    {
      bannerTitle: "Licenças e autorizações",
      introTitle: "Primeiro, quem é competente para decidir",
      intro: [
        "Licenças e autorizações cobrem realidades diferentes: obras e utilização de edifícios, estabelecimento comercial, esplanada ou horário, e atividades profissionais ou reguladas. O primeiro passo é nomear a entidade competente. Pode ser a câmara municipal, um serviço do Estado, um regulador ou uma ordem profissional. Um pedido entregue a quem não decide não inicia o procedimento certo e não cria, por si, qualquer título.",
        "O Código do Procedimento Administrativo organiza a instrução, as notificações e os prazos. O deferimento tácito existe nesse código apenas quando a lei daquele pedido o admite. Não é universal. No licenciamento, muitos regimes excluem-no ou substituem-no por comunicação prévia ou por decisão expressa. O silêncio da entidade não é, por si, uma licença. Afirmar o contrário, sem ler o regime, expõe a atividade a uma ordem de cessação.",
        "O escritório identifica o regime, os elementos em falta e os trâmites previsíveis, incluindo uma recusa e o prazo para reagir a essa recusa. Não promete que a licença ou a autorização sejam concedidas. A decisão é da entidade competente, que pode indeferir quando os requisitos legais não estejam preenchidos ou quando a lei lhe atribua uma apreciação própria.",
      ],
      help: [
        "Identificar a entidade competente e o tipo de título: licença, autorização, comunicação ou registo.",
        "Ver se aquele regime admite deferimento tácito ou se exige decisão expressa.",
        "Reunir o projeto, as plantas ou os elementos profissionais que o pedido tem de conter.",
        "Ler uma recusa como uma decisão administrativa, com fundamentação e prazo de reação.",
      ],
      docsLead: "A lista muda com o município, a atividade e o título pedido. É indicativa.",
      docs: [
        "Identificação do requerente e, se for uma sociedade, do objeto e de quem a representa.",
        "Descrição da obra, do estabelecimento ou da atividade, com a localização.",
        "Plantas, projetos ou certificações que o regime daquele título exija.",
        "Títulos anteriores, como uma licença de obras ou um alvará, se o pedido for de utilização ou de alteração.",
        "Comprovativo de encargos do procedimento, quando a entidade os exija para instruir o pedido.",
      ],
      steps: [
        { title: "Competência", text: "Confirmamos quem decide e se o pedido está no balcão certo." },
        { title: "Regime", text: "Lemos se a lei pede licença, autorização, comunicação prévia ou mero registo." },
        { title: "Instrução", text: "Apontamos os elementos em falta antes de dar o pedido como completo." },
        { title: "Decisão", text: "Acompanhamos a notificação. Não se trata o silêncio como título sem norma que o diga." },
      ],
      faqs: [
        {
          q: "Se a câmara não responder, a licença está concedida?",
          a: "Não necessariamente. O deferimento tácito existe no Código do Procedimento Administrativo só quando a lei do procedimento o prevê e não o exclui. Muitos regimes de urbanismo, de atividades perigosas, de ambiente ou de profissões reguladas afastam esse efeito, ou desenham uma consequência diferente para o silêncio. Há também comunicações prévias, em que o título não é uma licença clássica. Sem a norma concreta, o decurso do tempo não autoriza a abrir o estabelecimento nem a iniciar a obra. O escritório não converte o silêncio em licença.",
        },
        {
          q: "A ordem profissional e a câmara decidem a mesma coisa?",
          a: "Não. A inscrição numa ordem, ou a autorização de uma entidade reguladora, prova a habilitação profissional quando a lei a exige. A licença municipal prova, noutros casos, que o local e a atividade cumprem regras de urbanismo, de segurança ou de comércio. Uma não substitui a outra. Há atividades que precisam das duas, e atividades que precisam de uma terceira entidade do Estado. Identificar só uma autoridade deixa o pedido incompleto. Cada título tem o seu procedimento, os seus documentos e a sua decisão.",
        },
        {
          q: "Podem garantir que a licença sai?",
          a: "Não. A concessão depende dos requisitos do regime e da apreciação da entidade competente. Um processo bem instruído evita uma rejeição por falta de elementos, mas não converte o pedido em título. A entidade pode indeferir, condicionar ou pedir correções. Uma recusa notificada é uma decisão, com prazo próprio de reação, e não um incidente menor. O acompanhamento descreve o procedimento e os riscos de cada passo. Não anuncia a emissão da licença nem da autorização.",
        },
      ],
      ctaTitle: "Tem um pedido de licença ou uma recusa para ler?",
      ctaLead: "O trabalho começa por nomear a entidade competente e o regime, incluindo o que o silêncio não produz.",
      message: "Olá, gostaria de marcar uma consulta sobre uma licença ou uma autorização.",
    },
    {
      bannerTitle: "Licences and authorisations",
      introTitle: "First, who is competent to decide",
      intro: [
        "Licences and authorisations cover works and use of buildings, commercial premises, a terrace or opening hours, and professional or regulated activities. The first step is to name the competent body. It may be the municipality, a government department, a regulator or a professional body. An application sent to a body that does not decide does not start the right procedure and creates no title.",
        "The Administrative Procedure Code organises the file, the notices and the time limits. Tacit approval exists in that code only where the statute for the application allows it. It is not universal. Many licensing regimes exclude it or replace it with a prior communication or an express decision. Silence is not, by itself, a licence. Saying otherwise, without the regime, exposes the activity to an order to stop.",
        "The office identifies the regime, the missing items and the steps that can be expected, including a refusal and the period in which to react to that refusal. It does not promise that the licence or the authorisation will be granted. The decision belongs to the competent body, which may refuse where the legal requirements are not met or where the statute gives it its own assessment.",
      ],
      help: [
        "Identify the competent body and the type of title: licence, authorisation, communication or registration.",
        "See whether that regime allows tacit approval or requires an express decision.",
        "Gather the drawings, plans or professional items the application must contain.",
        "Read a refusal as an administrative decision, with reasons and a time limit to react.",
      ],
      docsLead: "The list changes with the municipality, the activity and the title requested. It is indicative.",
      docs: [
        "Identification of the applicant and, for a company, its object and who represents it.",
        "A description of the works, the premises or the activity, with the location.",
        "Drawings, plans or certificates that the regime for that title requires.",
        "Earlier titles, such as a building licence or a permit, where the application is for use or for a change.",
        "Proof of procedural charges, where the body requires them before it will examine the application.",
      ],
      steps: [
        { title: "Competence", text: "We confirm who decides and whether the application is at the right counter." },
        { title: "Regime", text: "We read whether the statute asks for a licence, an authorisation, a prior communication or a mere registration." },
        { title: "The file", text: "We point out missing items before treating the application as complete." },
        { title: "Decision", text: "We follow the notice. Silence is not treated as a title unless a rule says so." },
      ],
      faqs: [
        {
          q: "If the municipality does not reply, is the licence granted?",
          a: "Not necessarily. Tacit approval exists in the Administrative Procedure Code only where the statute for the procedure provides it and does not exclude it. Many regimes on planning, hazardous activities, the environment or regulated professions set that effect aside, or give silence a different consequence. There are also prior communications, in which the title is not a classic licence. Without the concrete rule, the passage of time does not authorise opening the premises or starting the works. The office does not turn silence into a licence.",
        },
        {
          q: "Do a professional body and the municipality decide the same thing?",
          a: "No. Entry on the roll of a professional body, or an authorisation from a regulator, shows professional standing where the statute requires it. A municipal licence shows, in other cases, that the place and the activity meet planning, safety or trade rules. One does not stand in for the other. Some activities need both, and some need a third body of the State. Naming only one authority leaves the application incomplete. Each title has its own procedure, its own documents and its own decision.",
        },
        {
          q: "Can you guarantee that the licence will be issued?",
          a: "No. A grant depends on the requirements of the regime and on the assessment of the competent body. A complete file avoids a rejection for missing items, but it does not turn the application into a title. The body may refuse, impose conditions or ask for corrections. A notified refusal is a decision, with its own time limit to react, and not a minor incident. The work describes the procedure and the risks of each step. It does not announce that the licence or the authorisation will be issued.",
        },
      ],
      ctaTitle: "Do you have a licence application, or a refusal to read?",
      ctaLead: "The work starts by naming the competent body and the regime, including what silence does not produce.",
      message: "Hello, I would like to book a consultation about a licence or an authorisation.",
    },
  ),
  [key("recursos")]: topicDetail(
    {
      pt: "Recursos administrativos graciosos: reclamação e recurso hierárquico perante a entidade pública. Têm prazo e não são um processo em tribunal.",
      en: "Gracious administrative appeals: a complaint and a hierarchical appeal before the public body. They have a time limit and they are not court proceedings.",
    },
    {
      bannerTitle: "Recursos administrativos",
      introTitle: "O recurso gracioso decide-se na Administração",
      intro: [
        "O recurso administrativo, dito gracioso, é apresentado à própria Administração. A reclamação dirige-se a quem praticou o ato. O recurso hierárquico dirige-se ao superior hierárquico, quando a lei da organização o preveja. Quando exista poder de tutela, pode haver recurso tutelar para a entidade tutelar. Nenhum destes meios é um processo judicial. Quem aprecia é um órgão administrativo, não um juiz.",
        "Os prazos são curtos e contam-se, em regra, da notificação, nos termos do Código do Procedimento Administrativo ou da lei especial. Esta página não publica um número único de dias. Entregar fora do prazo pode tornar o recurso inútil. Se a lei exigir o recurso antes da ação, a falta dele pode impedir o tribunal. Se o recurso for só facultativo, usá-lo não substitui a contagem do prazo judicial.",
        "O recurso gracioso não suspende o ato só por ter sido apresentado. Há normas que lhe dão efeito suspensivo e normas que não o dão. A decisão pode manter, revogar ou alterar o ato, e cabe à entidade, não ao mandatário. O escritório prepara a peça e lê a resposta. Não promete a revogação nem trata o recurso como se fosse já uma ação judicial.",
      ],
      help: [
        "Ver se cabe reclamação, recurso hierárquico ou recurso tutelar, e perante que órgão.",
        "Contar o prazo a partir da notificação e da norma daquele ato, sem um número genérico.",
        "Dizer se esse recurso é facultativo ou necessário para uma ação posterior.",
        "Explicar se a apresentação suspende o ato, ou se a execução pode continuar.",
      ],
      docsLead: "A peça graciosa precisa do ato impugnado e da prova de que o prazo ainda corre.",
      docs: [
        "Ato integral, fundamentação e notificação com data.",
        "Organograma ou norma que identifiquem o superior hierárquico ou a entidade de tutela, se não forem óbvios.",
        "Alegações e documentos já apresentados no procedimento.",
        "Procuração, quando o recurso seja subscrito por advogado.",
        "Comprovativo de apresentação, se o recurso já tiver dado entrada.",
      ],
      steps: [
        { title: "Meio", text: "Escolhemos a reclamação, o recurso hierárquico ou o recurso tutelar que a lei admite." },
        { title: "Prazo", text: "Confirmamos que a apresentação ainda cabe na norma aplicável." },
        { title: "Peça", text: "Expomos os vícios e o pedido de revogação ou de alteração, sem o dar como atendido." },
        { title: "Resposta", text: "Lemos a decisão do recurso. Se for de indeferimento, voltamos a olhar para o prazo do tribunal." },
      ],
      faqs: [
        {
          q: "O recurso administrativo é o mesmo que ir a tribunal?",
          a: "Não. O recurso gracioso, seja reclamação, recurso hierárquico ou recurso tutelar, corre dentro da Administração e termina com uma decisão administrativa. A ação nos tribunais administrativos é um processo judicial, com regras próprias do código de processo desses tribunais. As peças, os prazos e quem decide são diferentes. Apresentar o recurso não cria, por si, um processo no TAC, no TCA ou no STA. Também não dispensa, quando a ação ainda interesse, de verificar o prazo judicial à parte.",
        },
        {
          q: "Tenho sempre um superior a quem recorrer?",
          a: "Não. O recurso hierárquico supõe um superior hierárquico com poder para apreciar o ato. Há órgãos de topo, entidades independentes e atos para os quais a lei não desenha esse recurso. A reclamação ao autor do ato pode continuar a existir. O recurso tutelar só cabe quando haja uma relação de tutela prevista na lei, como sucede em parte da atividade municipal. Inventar um superior, ou enviar a peça ao órgão errado, não interrompe necessariamente o prazo. A competência confirma-se antes da apresentação.",
        },
        {
          q: "Enquanto o recurso corre, a decisão fica parada?",
          a: "Só se a lei aplicável der efeito suspensivo a esse recurso, ou se outra norma o disser. No quadro geral do Código do Procedimento Administrativo, apresentar o recurso não suspende automaticamente os efeitos do ato. A entidade pode executá-lo. Há setores em que a regra é outra, e essa regra tem de ser a do caso. Pedir uma suspensão ao tribunal, quando caiba, é um passo diferente do recurso gracioso. Não se anuncia que a execução vai ficar suspensa durante a espera da resposta administrativa.",
        },
      ],
      ctaTitle: "Pondera um recurso perante a própria entidade pública?",
      ctaLead: "O recurso gracioso tem órgão, prazo e efeitos próprios. Não é a ação no tribunal.",
      message: "Olá, gostaria de marcar uma consulta sobre um recurso administrativo.",
    },
    {
      bannerTitle: "Administrative appeals",
      introTitle: "A gracious appeal is decided inside the administration",
      intro: [
        "An administrative appeal, called a gracious appeal, is filed with the administration itself. A complaint goes to the author of the act. A hierarchical appeal goes to the hierarchical superior, where the statute on organisation provides one. Where there is a power of supervision, there may be a supervisory appeal to that body. None of these is a court case. An administrative organ decides, not a judge.",
        "The time limits are short and usually run from notice of the act, under the Administrative Procedure Code or a special statute. This page does not publish a single number of days. Filing late can make the appeal useless. If the statute requires the appeal before a claim, omitting it can block the court. If the appeal is only optional, it does not replace the count of the court period.",
        "A gracious appeal does not suspend the act merely because it was filed. Some rules give it suspensive effect and some do not. The decision may maintain, repeal or change the act, and it belongs to the body, not to counsel. The office prepares the paper and reads the reply. It does not promise repeal, and it does not treat the appeal as a court claim.",
      ],
      help: [
        "See whether a complaint, a hierarchical appeal or a supervisory appeal is available, and before which organ.",
        "Count the period from the notice and from the rule for that act, without a generic number of days.",
        "Say whether that appeal is optional or necessary for a later claim.",
        "Explain whether filing suspends the act, or whether enforcement may continue.",
      ],
      docsLead: "The gracious paper needs the act under challenge and proof that the period is still running.",
      docs: [
        "The full act, the reasons and the notice with its date.",
        "An organisation chart or a rule identifying the hierarchical superior or the supervisory body, where that is not obvious.",
        "Submissions and documents already filed in the procedure.",
        "A power of attorney, where a lawyer signs the appeal.",
        "Proof of filing, if the appeal has already been lodged.",
      ],
      steps: [
        { title: "The means", text: "We choose the complaint, the hierarchical appeal or the supervisory appeal that the statute allows." },
        { title: "Time", text: "We confirm that filing is still within the applicable rule." },
        { title: "The paper", text: "We set out the defects and the request to repeal or change the act, without treating it as granted." },
        { title: "The reply", text: "We read the decision on the appeal. If it is a refusal, we look again at the court period." },
      ],
      faqs: [
        {
          q: "Is an administrative appeal the same as going to court?",
          a: "No. A gracious appeal, whether a complaint, a hierarchical appeal or a supervisory appeal, runs inside the administration and ends with an administrative decision. A claim in the administrative courts is a court case, under the procedural code of those courts. The papers, the time limits and the person who decides are different. Filing the appeal does not, of itself, create a case in the circuit court, the central administrative court or the Supreme Administrative Court. Nor does it remove the need, where a claim still matters, to check the court period separately.",
        },
        {
          q: "Is there always a superior to appeal to?",
          a: "No. A hierarchical appeal supposes a hierarchical superior with power to review the act. There are organs at the top of a structure, independent bodies and acts for which the statute does not design that appeal. A complaint to the author of the act may still exist. A supervisory appeal is available only where a statute provides a supervisory relationship, as happens for part of municipal activity. Inventing a superior, or sending the paper to the wrong organ, does not necessarily stop the period. Competence is confirmed before filing.",
        },
        {
          q: "While the appeal is pending, does the decision stop?",
          a: "Only if the applicable statute gives that appeal suspensive effect, or if another rule says so. Under the general frame of the Administrative Procedure Code, filing the appeal does not automatically suspend the effects of the act. The body may enforce it. In some sectors the rule is different, and that rule has to be the one for the case. Asking a court for a suspension, where that is available, is a step distinct from the gracious appeal. It is not announced that enforcement will stay suspended while the administrative reply is awaited.",
        },
      ],
      ctaTitle: "Are you considering an appeal to the public body itself?",
      ctaLead: "A gracious appeal has its own organ, its own period and its own effects. It is not the court claim.",
      message: "Hello, I would like to book a consultation about an administrative appeal.",
    },
  ),
  [key("tribunais-administrativos")]: topicDetail(
    {
      pt: "Tribunais administrativos: TAC, TCA e STA, ação de impugnação e providências cautelares, que não suspendem sempre o ato e não se anunciam como ganhas.",
      en: "Administrative courts: TAC, TCA and STA, a claim for judicial review and interim measures, which do not always suspend the act and are not announced as won.",
    },
    {
      bannerTitle: "Tribunais administrativos",
      introTitle: "A legalidade do ato aprecia-a um tribunal",
      intro: [
        "A impugnação judicial dos atos da Administração corre nos tribunais administrativos. Em primeira instância estão os tribunais administrativos de círculo (TAC). Em grande parte do país funcionam agregados ao tribunal tributário, como tribunal administrativo e fiscal. Os tribunais centrais administrativos (TCA) conhecem dos recursos. O Supremo Tribunal Administrativo (STA) está no topo. A competência confirma-se pela matéria, pelo território e pelas regras de recurso.",
        "A ação pede ao tribunal que aprecie a legalidade do ato e, noutros casos, de uma omissão ou de uma norma. O Código do Procedimento Administrativo importa para ver como o ato foi formado e notificado. O processo segue o código de processo dos tribunais administrativos. A anulação é o pedido de certas ações, não um resultado anunciado. Depende dos vícios, da prova, do prazo e do juiz.",
        "As providências cautelares não cabem em qualquer diferendo. A lei reserva-as a casos com requisitos próprios, entre eles o risco de um prejuízo grave e de difícil reparação. Mesmo quando são pedidas, não suspendem sempre o ato: o tribunal pode indeferir a medida. Apresentá-la não é, por si, uma suspensão. O escritório avalia se a via existe. Não promete a suspensão nem a anulação.",
      ],
      help: [
        "Ver se a matéria cabe nos tribunais administrativos e em que grau deve começar.",
        "Contar o prazo da ação a partir da notificação e dos recursos administrativos já feitos.",
        "Separar a ação principal de uma providência cautelar, com requisitos diferentes.",
        "Organizar a prova do procedimento e dos efeitos concretos do ato, sem antecipar a sentença.",
      ],
      docsLead: "A petição precisa do ato, da notificação e da prova do que se pede ao tribunal.",
      docs: [
        "Decisão, fundamentação e notificação, com as datas.",
        "Peças de reclamação ou de recurso administrativo, e a decisão que lhes foi dada, se existirem.",
        "Documentos do procedimento administrativo relevantes para o vício invocado.",
        "Prova do prejuízo e da urgência, quando se pondere uma providência cautelar.",
        "Procuração forense e identificação completa de quem propõe a ação.",
      ],
      steps: [
        { title: "Competência", text: "Confirmamos se o tribunal administrativo é o foro e qual o tribunal territorialmente competente." },
        { title: "Prazo", text: "Vemos se a ação ainda pode ser proposta, tendo em conta a notificação e os meios graciosos." },
        { title: "Pedido", text: "Definimos o que se pede na ação principal e se há base para uma cautelar." },
        { title: "Decisão", text: "Acompanhamos o processo. A suspensão e a anulação, se ocorrerem, resultam de decisão judicial." },
      ],
      faqs: [
        {
          q: "A providência cautelar suspende logo o ato?",
          a: "Não sempre, e não pelo simples facto de ser pedida. A providência cautelar é uma medida urgente, admissível quando a lei processual reconhece, no caso, requisitos como o risco de um prejuízo grave e de difícil reparação e uma viabilidade suficiente do pedido principal. O tribunal pode não os ter por preenchidos, pode recusar a medida ou pode concedê-la com um alcance menor do que o pedido. Enquanto não houver decisão a decretar a suspensão, o ato pode continuar a ser executado. Não se promete que a execução pare, nem que a medida seja deferida.",
        },
        {
          q: "Qual é a diferença entre TAC, TCA e STA?",
          a: "O TAC, tribunal administrativo de círculo, julga em regra em primeira instância. Onde funciona agregado ao tribunal tributário, a designação pública é tribunal administrativo e fiscal, sem deixar de ser o tribunal de círculo para a matéria administrativa. O TCA, tribunal central administrativo, aprecia recursos dessas decisões, dentro da sua área. O STA, Supremo Tribunal Administrativo, conhece dos recursos e das matérias que a lei lhe reserva no topo da jurisdição. A ação não se intenta no tribunal que o interessado preferir: a matéria e o território é que distribuem o processo.",
        },
        {
          q: "O tribunal vai anular a decisão?",
          a: "Não é possível dizê-lo. A anulação, quando cabe, depende de um vício legal, de a ação ser a adequada, de o prazo estar cumprido e de a prova ser a que o processo exige. O tribunal pode julgar a ação improcedente, pode anular só em parte, ou pode decidir uma questão prévia que impeça o conhecimento do mérito. Uma providência cautelar, mesmo que deferida, não é a sentença de anulação. O acompanhamento prepara o pedido e a prova. A decisão é do juiz, e não se anuncia antes do processo.",
        },
      ],
      ctaTitle: "A decisão pode ter de ser apreciada por um tribunal administrativo?",
      ctaLead: "A ação e a providência cautelar avaliam-se pelos requisitos legais. Nem a suspensão nem a anulação se prometem.",
      message: "Olá, gostaria de marcar uma consulta sobre um processo nos tribunais administrativos.",
    },
    {
      bannerTitle: "Administrative courts",
      introTitle: "A court reviews the lawfulness of the act",
      intro: [
        "A court challenge to acts of the administration runs in the administrative courts. At first instance are the circuit administrative courts (TAC). In much of the country they sit with the tax court, as a tax and administrative court. The central administrative courts (TCA) hear appeals. The Supreme Administrative Court (STA) is at the top. Jurisdiction follows subject matter, territory and the rules on appeal.",
        "The claim asks the court to review the lawfulness of the act and, in other cases, a failure to act or a regulation. The Administrative Procedure Code matters for how the act was prepared and notified. Proceedings follow the code of procedure in the administrative courts. Annulment is the subject of some claims, not an announced outcome. It depends on the defects, the evidence, the time limit and the judge.",
        "Interim measures (providências cautelares) are not available for every dispute. The statute reserves them for cases with their own requirements, among them a risk of serious harm that is hard to repair. Even when sought, they do not always suspend the act: the court may refuse the measure. Filing is not, of itself, a suspension. The office assesses whether the route exists. It does not promise suspension or annulment.",
      ],
      help: [
        "See whether the subject belongs in the administrative courts and at which level it should start.",
        "Count the period for the claim from the notice and from any administrative appeals already filed.",
        "Separate the main claim from an interim measure, which has different requirements.",
        "Organise evidence of the procedure and of the concrete effects of the act, without predicting the judgment.",
      ],
      docsLead: "The claim needs the act, the notice and evidence of what the court is asked to do.",
      docs: [
        "The decision, the reasons and the notice, with the dates.",
        "Papers from a complaint or an administrative appeal, and the decision on them, where they exist.",
        "Documents from the administrative procedure that matter for the defect relied on.",
        "Evidence of harm and of urgency, where an interim measure is being considered.",
        "A forensic power of attorney and full identification of the person bringing the claim.",
      ],
      steps: [
        { title: "Jurisdiction", text: "We confirm that the administrative court is the forum and which court has territorial jurisdiction." },
        { title: "Time", text: "We see whether the claim can still be brought, taking account of the notice and of any gracious appeals." },
        { title: "The request", text: "We define what is asked in the main claim and whether there is a basis for an interim measure." },
        { title: "The decision", text: "We follow the case. Suspension and annulment, if they happen, follow from a judicial decision." },
      ],
      faqs: [
        {
          q: "Does an interim measure suspend the act at once?",
          a: "Not always, and not merely because it is sought. An interim measure is an urgent application. It is available where the procedural statute finds, in the case, requirements such as the risk of serious harm that would be difficult to repair and a sufficient prospect for the main claim. The court may find that they are not met, may refuse the measure or may grant it with a narrower reach than was asked. Until there is a decision ordering suspension, the act may continue to be enforced. It is not promised that enforcement will stop, or that the measure will be granted.",
        },
        {
          q: "What is the difference between the TAC, the TCA and the STA?",
          a: "The TAC, the circuit administrative court, generally hears cases at first instance. Where it sits with the tax court, the public name is tax and administrative court, and it remains the circuit court for administrative matters. The TCA, the central administrative court, hears appeals from those decisions, within its area. The STA, the Supreme Administrative Court, hears the appeals and the matters that the statute reserves to it at the top of the jurisdiction. A claim is not brought in the court a person would prefer: subject matter and territory allocate the case.",
        },
        {
          q: "Will the court annul the decision?",
          a: "It is not possible to say that. Annulment, where it is available, depends on a legal defect, on the claim being the right one, on the time limit having been met and on the evidence being what the case requires. The court may dismiss the claim, may annul only in part, or may decide a preliminary issue that prevents a ruling on the merits. An interim measure, even if granted, is not the judgment of annulment. The work prepares the request and the evidence. The decision belongs to the judge, and it is not announced before the case.",
        },
      ],
      ctaTitle: "May the decision have to be reviewed by an administrative court?",
      ctaLead: "The claim and the interim measure are assessed against the legal requirements. Neither suspension nor annulment is promised.",
      message: "Hello, I would like to book a consultation about proceedings in the administrative courts.",
    },
  ),
};
