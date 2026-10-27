import type { PracticeAreaKey } from "@/data/practice-areas";
import type { TopicDetail } from "@/data/topic-details";
import { topicDetail } from "@/data/topic-factory";

const key = (slug: string) => `criminalLaw/${slug}` as `${PracticeAreaKey}/${string}`;

export const criminalTopics: Partial<Record<`${PracticeAreaKey}/${string}`, TopicDetail>> = {
  [key("queixas")]: topicDetail(
    {
      pt: "Queixa e denúncia criminal em Portugal: crimes semi-públicos, prazo para a queixa, Ministério Público, PSP e GNR. A apresentação não garante acusação.",
      en: "A criminal complaint (queixa) and a report (denúncia) in Portugal: semi-public offences, the time limit, the Public Prosecutor, PSP and GNR. Filing does not guarantee a charge.",
    },
    {
      bannerTitle: "Queixas e participações criminais",
      introTitle: "Queixa e denúncia não são o mesmo ato",
      intro: [
        "A denúncia é a comunicação de factos às autoridades e qualquer pessoa a pode fazer. A queixa é a manifestação de vontade de quem tem legitimidade para a apresentar. Nos crimes semi-públicos, o procedimento depende dessa queixa. Nos crimes públicos, a investigação pode iniciar-se sem ela. O ato exigido resulta da qualificação jurídica, e esta depende dos factos, não do nome dado ao episódio.",
        "Nos crimes semi-públicos há um prazo para a queixa. O prazo ordinário é de seis meses e conta-se desde que o titular conhece o facto e quem o praticou. Perdê-lo pode impedir o procedimento. A contagem confirma-se com as datas e com as regras do caso, porque nem todo o conhecimento releva do mesmo modo. Esperar por um relato perfeito não suspende o tempo.",
        "A queixa ou a denúncia apresentam-se, em regra, no Ministério Público, na PSP ou na GNR. A entrega permite que as autoridades apreciem os factos. Não garante acusação, julgamento nem condenação. O Ministério Público pode investigar, arquivar ou acusar, conforme a prova e a lei. O escritório ajuda a ordenar o relato e os documentos. Não decide o processo.",
      ],
      help: [
        "Distinguir se os factos pedem queixa, denúncia ou as duas figuras.",
        "Verificar o prazo da queixa a partir do conhecimento do facto e da identidade.",
        "Organizar o relato e os documentos para o Ministério Público, a PSP ou a GNR.",
        "Explicar o que a apresentação abre e o que não decide, nomeadamente a acusação.",
      ],
      docsLead: "O essencial é um relato datado e a prova que já exista, sem preencher lacunas com suposições.",
      docs: [
        "Identificação de quem apresenta e, na queixa, de quem tem legitimidade.",
        "Relato dos factos, com datas e locais, limitado ao que é conhecido.",
        "Mensagens, documentos ou imagens já existentes e que possam ser juntos de forma lícita.",
        "Identificação de testemunhas e do que cada uma poderá ter presenciado.",
        "Comprovativo da apresentação, quando a autoridade o entregar.",
      ],
      steps: [
        { title: "Qualificação", text: "Vemos se os factos apontam para crime público ou semi-público e que ato é exigido." },
        { title: "Prazo", text: "Contamos o prazo da queixa com as datas de conhecimento, quando esse prazo exista." },
        { title: "Apresentação", text: "Preparamos o texto e os documentos para a autoridade competente." },
        { title: "Seguimento", text: "Acompanhamos notificações e explicamos arquivo, investigação ou acusação, sem antecipar o desfecho." },
      ],
      faqs: [
        {
          q: "Queixa e denúncia são a mesma coisa?",
          a: "Não. A denúncia comunica factos às autoridades e pode ser apresentada por qualquer pessoa. A queixa cabe a quem a lei indica, em regra a pessoa ofendida, e nos crimes semi-públicos o procedimento depende dela. Num crime público, o Ministério Público pode investigar sem essa queixa. O ato adequado resulta da qualificação jurídica, feita com os factos e com a norma aplicável, não com o título escrito no papel. Trocar o nome do requerimento não recupera um prazo já extinto nem transforma um crime semi-público em crime público.",
        },
        {
          q: "Se o prazo da queixa passar, o processo continua?",
          a: "Nos crimes semi-públicos, a falta de queixa dentro do prazo pode impedir o procedimento. O prazo ordinário é de seis meses e conta-se do conhecimento do facto e de quem o praticou. A contagem tem regras próprias e há situações em que o direito já está prejudicado quando a pessoa procura apoio. Por isso a data em que os factos e a identidade foram conhecidos importa tanto como o dia da ida à PSP ou à GNR. Confirmar o prazo no caso concreto é o primeiro passo, antes de redigir qualquer texto.",
        },
        {
          q: "Apresentar a queixa garante uma acusação?",
          a: "Não garante. A apresentação dá conhecimento do caso às autoridades e, quando a lei a exige, preenche uma condição do procedimento. O Ministério Público aprecia a notícia, pode determinar diligências, arquivar ou deduzir acusação. Nenhuma destas vias se decide no balcão da esquadra nem no gabinete do advogado. O escritório prepara a exposição e acompanha o que se seguir, incluindo notificações e pedidos de elementos. Não promete acusação, julgamento ou condenação, porque essas decisões não lhe pertencem.",
        },
      ],
      ctaTitle: "Precisa de apresentar uma queixa ou uma denúncia?",
      ctaLead: "A análise começa pelos factos, pelo tipo legal e pelo prazo, antes de qualquer texto ser entregue.",
      message: "Olá, gostaria de marcar uma consulta sobre uma queixa ou uma denúncia criminal.",
    },
    {
      bannerTitle: "Criminal reports and complaints",
      introTitle: "A complaint and a report are not the same act",
      intro: [
        "A report (denúncia) communicates facts to the authorities, and any person may make one. A complaint (queixa) is the statement of will by the person entitled to file it. For a semi-public offence, the procedure depends on that complaint. A public offence can be investigated without one. Which act is required follows from the legal classification, and the classification depends on the facts.",
        "Semi-public offences carry a time limit for the complaint. The ordinary period is six months from the day the holder knows the fact and who committed it. Missing it can prevent the procedure. The count is checked on the dates and on the rules of the case, because knowledge is not always treated in one way. Waiting for a perfect account does not suspend the time.",
        "A complaint or a report is filed, as a rule, with the Public Prosecutor, the PSP or the GNR. Filing lets the authorities examine the facts. It does not guarantee a charge, a trial or a conviction. The Public Prosecutor may investigate, close the inquiry or prosecute, according to the evidence and the law. The office helps to arrange the account and the documents.",
      ],
      help: [
        "Distinguish whether the facts call for a complaint, a report, or both.",
        "Check the time limit for a complaint from knowledge of the fact and of the identity.",
        "Arrange the account and the documents for the Public Prosecutor, the PSP or the GNR.",
        "Explain what filing opens and what it does not decide, including a charge.",
      ],
      docsLead: "What matters is a dated account and the evidence that already exists, without filling gaps by guesswork.",
      docs: [
        "Identification of the person filing and, for a complaint, of the person entitled to file it.",
        "An account of the facts, with dates and places, limited to what is known.",
        "Messages, documents or images that already exist and may lawfully be attached.",
        "Names of witnesses and what each of them may have seen or heard.",
        "Proof of filing, when the authority issues it.",
      ],
      steps: [
        { title: "Classification", text: "We see whether the facts point to a public or a semi-public offence and which act is required." },
        { title: "Time limit", text: "We count the complaint period from the dates of knowledge, where that period exists." },
        { title: "Filing", text: "We prepare the text and the documents for the competent authority." },
        { title: "What follows", text: "We follow notices and explain closure, investigation or a charge, without forecasting the outcome." },
      ],
      faqs: [
        {
          q: "Are a complaint and a report the same thing?",
          a: "No. A report communicates facts to the authorities and any person may make one. A complaint belongs to the person the law indicates, usually the person harmed, and for a semi-public offence the procedure depends on it. For a public offence, the Public Prosecutor may investigate without that complaint. The right act follows from the legal classification, made from the facts and the applicable rule, not from the heading written on the paper. Using the wrong name does not revive a period that has already expired, and it does not turn a semi-public offence into a public one.",
        },
        {
          q: "If the time limit passes, does the case continue?",
          a: "For a semi-public offence, the absence of a complaint within the legal period can prevent the procedure. The ordinary period is six months, counted from knowledge of the fact and of who committed it. The count has its own rules, and there are situations in which the right is already lost when a person seeks advice. The date on which the facts and the identity became known matters as much as the day of the visit to the PSP or the GNR. Checking the period on the actual facts is the first step, before any text is drafted.",
        },
        {
          q: "Does filing guarantee a charge?",
          a: "It does not. Filing brings the matter to the authorities and, where the law requires a complaint, it meets a condition of the procedure. The Public Prosecutor assesses the report, may order further steps, close the inquiry or bring a charge. None of those paths is decided at the police counter or in the office of the lawyer. The office prepares the statement and follows what comes next, including notices and requests for further information. It does not promise a charge, a trial or a conviction, because those decisions are not its to make.",
        },
      ],
      ctaTitle: "Do you need to file a complaint or a report?",
      ctaLead: "The review starts from the facts, the legal type and the time limit, before any text is lodged.",
      message: "Hello, I would like to book a consultation about a criminal complaint or report.",
    },
  ),
  [key("arguidos")]: topicDetail(
    {
      pt: "Defesa de arguidos em processo penal: presunção de inocência, direito a advogado e acompanhamento nas declarações e no primeiro interrogatório judicial. Sem promessa de absolvição.",
      en: "Defence of defendants (arguidos): presumption of innocence, the right to a lawyer, and assistance at statements and at the first judicial questioning. No promise of acquittal.",
    },
    {
      bannerTitle: "Arguidos e defesa criminal",
      introTitle: "Ser constituído arguido não é uma condenação",
      intro: [
        "A constituição como arguido é um estatuto processual. A pessoa passa a ter deveres, como comparecer quando for notificada, e direitos, entre eles o de ser assistida por advogado. A presunção de inocência mantém-se até decisão condenatória que já não admita recurso ordinário. Tratar o arguido como culpado antes disso não corresponde à lei nem ao modo como a defesa se prepara.",
        "As declarações e o primeiro interrogatório judicial são momentos em que a assistência importa. O que for dito fica no processo e pode ser valorado mais tarde. O advogado ajuda a perceber as perguntas, os direitos que a lei reconhece nesse ato e os documentos que convém ter presentes. Não se descrevem aqui formas de orientar o silêncio nem respostas preparadas para frustrar a investigação.",
        "A defesa ordena factos, prova e vícios que a lei permita invocar. O resultado não está prometido. O processo pode terminar em absolvição, em condenação ou noutra decisão que a lei admita. O escritório analisa o caso, acompanha os atos e explica as opções que existem naquele momento. Não assegura absolvição nem uma pena determinada.",
      ],
      help: [
        "Acompanhar a constituição de arguido e explicar deveres e direitos desse estatuto.",
        "Estar presente nas declarações e no primeiro interrogatório judicial.",
        "Rever a acusação, a prova indicada e os prazos para reagir.",
        "Preparar a defesa para julgamento, sem antecipar o sentido da decisão.",
      ],
      docsLead: "Os autos são o ponto de partida. Sem eles, a defesa trabalha sobre uma versão incompleta.",
      docs: [
        "Notificações, termo de identidade e residência e outros atos já comunicados.",
        "Auto de constituição de arguido e de interrogatório, se já existirem.",
        "Acusação, despacho de arquivamento ou outra peça que defina o objeto do processo.",
        "Documentos e nomes de pessoas que possam esclarecer os factos, dentro da lei.",
        "Identificação completa e contactos estáveis para receber notificações.",
      ],
      steps: [
        { title: "Estatuto", text: "Confirmamos se a pessoa já é arguida e que direitos pode exercer nesse momento." },
        { title: "Atos urgentes", text: "Damos prioridade a declarações, ao interrogatório e a prazos que já estejam a correr." },
        { title: "Leitura dos autos", text: "Lemos a acusação e a prova indicada antes de fixar a linha de defesa." },
        { title: "Julgamento", text: "Preparamos alegações e a prova admissível. A decisão fica com o tribunal." },
      ],
      faqs: [
        {
          q: "Ser arguido significa que a condenação é certa?",
          a: "Não. A constituição de arguido atribui um estatuto, com deveres de comparência e com direitos de defesa, entre os quais a assistência de advogado. A presunção de inocência permanece até uma condenação definitiva. A acusação, se vier a ser deduzida, é uma peça do Ministério Público e não uma sentença. Só o tribunal decide, depois de produzir a prova nos termos da lei. O escritório prepara e acompanha a defesa. Não promete absolvição, uma pena concreta ou o arquivamento do inquérito.",
        },
        {
          q: "As declarações e o interrogatório exigem advogado?",
          a: "São momentos em que a assistência importa, e em vários atos a lei exige defensor. O primeiro interrogatório judicial de arguido detido é um desses momentos. O que for dito fica escrito e pode ser usado na apreciação posterior do caso. O passo útil é ter advogado presente para esclarecer as perguntas e os direitos aplicáveis àquele ato. Esta página não indica o que dizer, o que omitir ou como conduzir um silêncio. Essas escolhas fazem-se com o advogado, à luz dos autos, e não a partir de um guião genérico.",
        },
        {
          q: "A defesa pode prometer um resultado?",
          a: "Não pode, e não o faz. A lei admite vários desfechos, do arquivamento à condenação, passando pela absolvição ou por uma decisão que altere a qualificação. Qualquer um deles depende da prova, da norma e do tribunal. O trabalho da defesa é apresentar os factos e os meios que a lei permite, dentro dos prazos, e explicar à pessoa o que cada ato significa. Comparar o caso com outro, ou fixar uma expectativa de pena, seria inexato. A decisão final não pertence ao mandatário.",
        },
      ],
      ctaTitle: "Foi constituído arguido ou foi notificado para prestar declarações?",
      ctaLead: "A defesa começa pela leitura dos atos e dos prazos, com presunção de inocência e sem resultado antecipado.",
      message: "Olá, gostaria de marcar uma consulta sobre a defesa num processo criminal.",
    },
    {
      bannerTitle: "Defence for defendants",
      introTitle: "Being named as a defendant is not a conviction",
      intro: [
        "Being made an arguido is a procedural status. The person acquires duties, such as attending when notified, and rights, including the right to be assisted by a lawyer. The presumption of innocence remains until a conviction that is no longer open to an ordinary appeal. Treating the defendant as guilty before that point does not match the law or the way a defence is prepared.",
        "Statements and the first judicial questioning are moments where assistance matters. What is said stays in the file and may be weighed later. The lawyer helps the person understand the questions, the rights the law recognises at that act, and which papers should be at hand. This page does not describe how to manage silence or how to shape answers so as to defeat an investigation.",
        "The defence orders the facts, the evidence and the defects the law allows to be raised. The outcome is not promised. The case may end in acquittal, in conviction or in another decision the law allows. The office reviews the file, attends the acts and explains the options that exist at that stage. It does not assure an acquittal or a given penalty.",
      ],
      help: [
        "Attend the naming of the defendant and explain the duties and rights of that status.",
        "Be present at statements and at the first judicial questioning.",
        "Review the charge, the evidence listed and the time limits for a response.",
        "Prepare the defence for trial, without forecasting the decision.",
      ],
      docsLead: "The case file is the starting point. Without it, the defence works from an incomplete version.",
      docs: [
        "Notices, the identity and residence order, and other acts already served.",
        "The record of the defendant being named, and of any questioning, if they already exist.",
        "The charge, a decision to close the inquiry, or another document that defines the case.",
        "Documents and names of people who may clarify the facts, within the law.",
        "Full identification and stable contact details for notices.",
      ],
      steps: [
        { title: "Status", text: "We confirm whether the person is already a defendant and which rights can be used at that point." },
        { title: "Urgent acts", text: "We give priority to statements, to questioning and to time limits that are already running." },
        { title: "Reading the file", text: "We read the charge and the evidence listed before setting the line of defence." },
        { title: "Trial", text: "We prepare submissions and admissible evidence. The decision stays with the court." },
      ],
      faqs: [
        {
          q: "Does being a defendant mean a conviction is certain?",
          a: "No. Being named as an arguido gives a status, with duties to attend and with rights of defence, including assistance by a lawyer. The presumption of innocence remains until a final conviction. A charge, if one is brought, is a document of the Public Prosecutor and not a judgment. Only the court decides, after the evidence is heard as the law provides. The office prepares and follows the defence. It does not promise an acquittal, a particular penalty or the closure of the inquiry.",
        },
        {
          q: "Do statements and questioning call for a lawyer?",
          a: "They are moments where assistance matters, and for several acts the law requires a defence lawyer. The first judicial questioning of a detained defendant is one of those moments. What is said is written down and may be used when the case is assessed later. The useful step is to have a lawyer present so that the questions and the rights that apply to that act are understood. This page does not say what to answer, what to leave out, or how to conduct silence. Those choices are made with the lawyer, on the file, and not from a generic script.",
        },
        {
          q: "Can the defence promise an outcome?",
          a: "It cannot, and it does not. The law allows several endings, from closure of the inquiry to conviction, including acquittal or a decision that changes the legal classification. Any of them depends on the evidence, on the rule and on the court. The work of the defence is to present the facts and the material the law permits, within the time limits, and to explain what each act means. Comparing the case with another, or fixing an expected penalty, would be inaccurate. The final decision does not belong to the lawyer.",
        },
      ],
      ctaTitle: "Have you been named as a defendant, or notified to give a statement?",
      ctaLead: "The defence starts by reading the acts and the time limits, with the presumption of innocence and without a forecast.",
      message: "Hello, I would like to book a consultation about a defence in a criminal case.",
    },
  ),
  [key("vitimas")]: topicDetail(
    {
      pt: "Vítimas de crime: estatuto, direito à informação, medidas de proteção e pedido de indemnização civil no processo penal. Sem promessa de indemnização.",
      en: "Victims of crime: status, the right to information, protection measures and a civil compensation claim joined to the criminal case. No promise of compensation.",
    },
    {
      bannerTitle: "Vítimas de crime",
      introTitle: "A vítima tem um lugar no processo, não apenas um relato",
      intro: [
        "Quem é atingido por um crime pode ter o estatuto de vítima. Esse estatuto compreende, entre outros aspetos, o direito a receber informação sobre a marcha do processo, nos termos e com os limites que a lei fixa. A informação não chega sozinha em todos os atos nem é ilimitada. Um advogado ajuda a pedir o que a lei permite e a ler as notificações que forem chegando.",
        "Podem ser pedidas medidas de proteção quando a situação o justificar. A medida concreta, a duração e as condições são decididas pela autoridade ou pelo tribunal competente. Servem para reduzir o risco e para permitir a participação no processo em condições de segurança. O escritório prepara o pedido. Não decreta a medida e não descreve formas de a contornar.",
        "O pedido de indemnização civil pode ser deduzido no processo penal, para que o tribunal criminal aprecie também o dano. A lei fixa o momento em que esse pedido deve entrar. Juntá-lo não garante indemnização nem um valor. O tribunal aprecia a prova do facto e do prejuízo. O escritório organiza o pedido quando há elementos. Não promete condenação cível.",
      ],
      help: [
        "Esclarecer o estatuto de vítima e o direito à informação sobre o processo.",
        "Preparar pedidos de medidas de proteção adequados à situação concreta.",
        "Organizar o pedido de indemnização civil para ser junto ao processo penal.",
        "Acompanhar notificações, inquérito e julgamento na parte que respeita à vítima.",
      ],
      docsLead: "A proteção e a indemnização pedem-se com factos e com documentos, não com uma estimativa solta.",
      docs: [
        "Identificação e um contacto seguro para receber notificações.",
        "Relato dos factos, com datas, e participação ou queixa já apresentada, se existir.",
        "Documentos clínicos, registos ou mensagens que a pessoa queira juntar e que sejam pertinentes.",
        "Prova de despesas ou de perdas, se houver pedido de indemnização.",
        "Indicação de medidas de proteção já requeridas ou já decretadas.",
      ],
      steps: [
        { title: "Estatuto", text: "Vemos se a pessoa é ofendida e que informação pode pedir sobre o processo." },
        { title: "Proteção", text: "Avaliamos se há fundamento para requerer medidas e perante que entidade." },
        { title: "Dano", text: "Reunimos a prova do prejuízo para o pedido de indemnização civil." },
        { title: "Processo", text: "Acompanhamos a junção do pedido e as fases em que a vítima pode intervir." },
      ],
      faqs: [
        {
          q: "A vítima tem direito a saber o que se passa no processo?",
          a: "Tem direito à informação nos termos da lei, o que não equivale a receber cópia de tudo nem a ser avisada de cada diligência no próprio dia. O estatuto de vítima permite pedir esclarecimentos sobre a marcha do processo, com os limites do segredo de justiça quando ele exista. Um advogado ajuda a formular o pedido e a interpretar a resposta. A falta de uma carta não significa, por si, que o inquérito tenha parado. O conteúdo e o momento da informação confirmam-se no caso, em vez de se presumir um dever ilimitado da autoridade.",
        },
        {
          q: "As medidas de proteção são automáticas?",
          a: "Não são. Podem ser pedidas quando os factos e o risco o justificarem, e a decisão cabe à autoridade ou ao tribunal, que fixa o conteúdo e a duração. Uma medida pode restringir contactos ou organizar a forma de participação no processo, sempre dentro da lei. O escritório ajuda a descrever a situação e a apresentar o pedido. Não pode garantir que a medida seja decretada, nem que baste para afastar o risco. Se existir perigo imediato, o contacto de emergência é o 112, e a consulta não substitui esse pedido de ajuda.",
        },
        {
          q: "Juntar o pedido de indemnização garante o pagamento?",
          a: "Não garante. O pedido de indemnização civil pode ser deduzido no processo penal para que o mesmo tribunal aprecie o dano, no momento que a lei determina. Perder esse momento pode fechar esta via ou empurrar a questão para outro processo. O tribunal só condena se estiverem provados o facto e o prejuízo, na medida que a lei admite. Recibos, relatórios e uma descrição sóbria dos danos ajudam a perceber o que é exigível. O escritório prepara o pedido com esses elementos e não promete um montante nem uma condenação.",
        },
      ],
      ctaTitle: "Precisa de perceber o seu lugar como vítima num processo penal?",
      ctaLead: "A análise cobre a informação, a proteção e o pedido de indemnização, sem prometer um pagamento.",
      message: "Olá, gostaria de marcar uma consulta sobre o acompanhamento de uma vítima de crime.",
    },
    {
      bannerTitle: "Victims of crime",
      introTitle: "A victim has a place in the case, not only a story",
      intro: [
        "A person harmed by an offence may have the status of a victim. That status includes the right to receive information about the course of the case, on the terms and within the limits the law sets. Information does not arrive by itself at every step, and it is not unlimited. A lawyer helps to ask for what the law allows and to read the notices that arrive.",
        "Protection measures may be requested when the situation justifies them. The concrete measure, its length and its conditions are decided by the competent authority or court. They exist to reduce risk and to allow participation in the case in conditions of safety. The office prepares the request. It does not order the measure, and it does not describe ways to get around one.",
        "A civil compensation claim (pedido de indemnização cível) may be joined to the criminal case, so the criminal court can also consider the loss. The law sets the moment by which the claim must be filed. Joining it does not guarantee compensation. The court assesses proof of the fact and of the loss. The office organises the claim where the material exists.",
      ],
      help: [
        "Explain the status of a victim and the right to information about the case.",
        "Prepare requests for protection measures that fit the concrete situation.",
        "Organise the civil compensation claim so that it can be joined to the criminal case.",
        "Follow notices, the inquiry and the trial in the part that concerns the victim.",
      ],
      docsLead: "Protection and compensation are requested with facts and documents, not with a loose estimate.",
      docs: [
        "Identification and a safe contact for receiving notices.",
        "An account of the facts, with dates, and any report or complaint already filed.",
        "Clinical papers, records or messages the person wishes to attach and that are relevant.",
        "Proof of expenses or of losses, if a compensation claim is to be made.",
        "A note of protection measures already requested or already ordered.",
      ],
      steps: [
        { title: "Status", text: "We see whether the person is the one harmed and what information can be requested about the case." },
        { title: "Protection", text: "We assess whether there is a basis to request measures, and before which body." },
        { title: "Loss", text: "We gather proof of the harm for the civil compensation claim." },
        { title: "The case", text: "We follow the joinder of the claim and the stages at which the victim may take part." },
      ],
      faqs: [
        {
          q: "Does a victim have the right to know how the case is going?",
          a: "There is a right to information on the terms the law sets, which is not the same as receiving a copy of everything or being told of each step on the same day. The status of victim allows a request for information about the course of the case, within the limits of secrecy of the inquiry where that secrecy applies. A lawyer helps to frame the request and to read the reply. The absence of a letter does not, by itself, mean that the inquiry has stopped. What is disclosed, and when, is checked on the case, rather than assumed as an unlimited duty of the authority.",
        },
        {
          q: "Are protection measures automatic?",
          a: "They are not. They may be requested when the facts and the risk justify them, and the decision belongs to the authority or the court, which sets the content and the duration. A measure may restrict contact or organise how a person takes part in the case, always within the law. The office helps to describe the situation and to file the request. It cannot guarantee that the measure will be ordered, or that the measure will be enough to remove the risk. If there is immediate danger, the emergency number is 112, and a consultation does not replace that call for help.",
        },
        {
          q: "Does joining a compensation claim guarantee payment?",
          a: "It does not. The civil compensation claim may be filed in the criminal case so that the same court can consider the loss, by the moment the law requires. Missing that moment can close this route or push the question into another case. The court awards compensation only if the fact and the loss are proved, to the extent the law allows. Receipts, reports and a sober description of the harm help to see what can be asked. The office prepares the claim with that material and does not promise a sum or a civil judgment.",
        },
      ],
      ctaTitle: "Do you need to understand your place as a victim in a criminal case?",
      ctaLead: "The review covers information, protection and the compensation claim, without promising a payment.",
      message: "Hello, I would like to book a consultation about support for a victim of crime.",
    },
  ),
  [key("detencao")]: topicDetail(
    {
      pt: "Detenção e interrogatório: direito a contactar advogado, prazo do primeiro interrogatório judicial e cautela com documentos. Sem indicação para evitar uma detenção.",
      en: "Detention and questioning: the right to contact a lawyer, the time limit for the first judicial interrogation, and care with documents. No guidance on avoiding arrest.",
    },
    {
      bannerTitle: "Detenção e interrogatório",
      introTitle: "A detenção tem de ser explicada e tem um limite de tempo",
      intro: [
        "A detenção priva uma pessoa da liberdade por um período limitado, para a apresentar à justiça. Não é uma condenação e não afasta a presunção de inocência. Quem é detido deve ser informado do motivo e dos direitos que a lei reconhece. Entre eles está o de contactar um advogado. Este texto não indica maneiras de evitar uma detenção nem o que dizer para prejudicar uma investigação.",
        "O primeiro interrogatório judicial de arguido detido tem um limite de tempo. A Constituição fixa o máximo de quarenta e oito horas para um juiz apreciar a detenção. O juiz ouve a pessoa e decide sobre a liberdade e sobre medidas de coação. O advogado deve ser chamado para esse ato. Esgotar o prazo não é um resultado que se possa combinar.",
        "Na esquadra ou no tribunal, a pessoa deve pedir um advogado e não deve assinar documentos que não compreenda. Assinar não é um gesto sem efeito: o papel pode registar declarações, uma notificação ou um termo de identidade e residência. Se algo não estiver claro, o passo seguro é pedir que seja explicado e aguardar o advogado. Não há aqui qualquer guião de respostas.",
      ],
      help: [
        "Acudir a uma detenção e ao primeiro interrogatório judicial, quando formos contactados.",
        "Explicar, no ato, os direitos de quem está detido, incluindo o contacto com advogado.",
        "Rever depois o que foi dito ou assinado, à luz dos autos.",
        "Acompanhar a medida de coação que o juiz aplique, se alguma for aplicada.",
      ],
      docsLead: "Durante a detenção, o passo seguro é pedir um advogado e não assinar o que não se compreende.",
      docs: [
        "Nome completo e um contacto do advogado, se já houver mandatário.",
        "Documento de identificação, se estiver na posse da pessoa.",
        "Notificação ou termo que tenha sido entregue para leitura antes de qualquer assinatura.",
        "Indicação da esquadra ou do tribunal e da hora da detenção, quando forem conhecidos.",
        "Contacto de uma pessoa próxima, para ser informada nos termos em que a lei o permita.",
      ],
      steps: [
        { title: "Contacto", text: "A pessoa detida deve pedir para contactar um advogado logo que a lei o permita." },
        { title: "Leitura", text: "Não se assinam autos ou termos que não tenham sido compreendidos." },
        { title: "Interrogatório", text: "No primeiro interrogatório judicial, a assistência do advogado é o ponto central." },
        { title: "Decisão", text: "O juiz decide sobre a liberdade e sobre medidas. O escritório não antecipa essa decisão." },
      ],
      faqs: [
        {
          q: "A detenção equivale a uma condenação?",
          a: "Não equivale. É uma medida provisória para apresentar a pessoa à justiça, e a presunção de inocência mantém-se. A pessoa deve ser informada do motivo da detenção e dos direitos que lhe assistem, incluindo o de contactar um advogado. O que acontecer a seguir, nomeadamente uma medida de coação ou a restituição da liberdade, é decidido pelo juiz no interrogatório, não pela duração da espera nem por um comentário na esquadra. O escritório acompanha esse ato quando é chamado. Não promete libertação nem qualquer outro desfecho.",
        },
        {
          q: "Quanto tempo pode durar a detenção antes do juiz?",
          a: "A Constituição fixa um prazo máximo de quarenta e oito horas para a detenção ser submetida a apreciação judicial. Dentro desse limite realiza-se, em regra, o primeiro interrogatório judicial de arguido detido, com assistência de defensor. O juiz ouve a pessoa e decide se a liberdade se mantém e se aplica alguma medida de coação prevista na lei. O prazo é um limite de garantia, não uma meta a esgotar e não um plano que a pessoa possa gerir. Se a detenção ocorrer, o pedido imediato é o de contactar um advogado, não o de calcular estratégias.",
        },
        {
          q: "Devo assinar o que me apresentarem?",
          a: "Só deve assinar o que compreender. Um auto pode ficar a valer como registo de declarações, de uma notificação ou de um termo de identidade e residência, e a assinatura não é um pormenor administrativo sem consequência. A pessoa detida deve pedir um advogado e pedir que lhe expliquem o documento antes de o assinar. Se o texto não for claro, o passo adequado é não o assinar às cegas e aguardar essa explicação. Esta página não diz o que responder às perguntas nem como conduzir a conversa com quem investiga.",
        },
      ],
      ctaTitle: "Houve uma detenção ou está marcado um interrogatório judicial?",
      ctaLead: "O acompanhamento centra-se no advogado, no prazo legal e na leitura do que for para assinar.",
      message: "Olá, gostaria de marcar uma consulta sobre uma detenção ou um interrogatório.",
    },
    {
      bannerTitle: "Detention and questioning",
      introTitle: "Detention has to be explained, and it has a time limit",
      intro: [
        "Detention deprives a person of liberty for a limited period, pending a decision of a court. It is not a conviction and it does not remove the presumption of innocence. A detained person should be told the reason and the rights the law recognises, including contact with a lawyer. This text does not set out ways to avoid detention or what to say to hinder an investigation.",
        "The first judicial questioning of a detained defendant is subject to a time limit. The Constitution sets a maximum of forty-eight hours for a detention to be placed before a judge. The judge hears the person and decides on liberty and on coercive measures, as the law provides. A lawyer should be called for that act. Using up the period is not an outcome to arrange.",
        "At the police station or in court, the person should ask for a lawyer and should not sign documents that the person does not understand. A signature is not an empty gesture: the paper may record statements, a notice or an identity and residence order. If something is unclear, the safe step is to ask for an explanation and to wait for the lawyer. No script of answers is offered.",
      ],
      help: [
        "Attend a detention and the first judicial questioning, when we are contacted.",
        "Explain, at the act, the rights of a detained person, including contact with a lawyer.",
        "Review afterwards what was said or signed, against the case file.",
        "Follow any coercive measure the judge applies, if one is applied.",
      ],
      docsLead: "During detention, the safe step is to ask for a lawyer and not to sign what is not understood.",
      docs: [
        "Full name and a contact for the lawyer, if there is already a representative.",
        "An identity document, if the person still has it.",
        "Any notice or order handed over to be read before a signature.",
        "The police station or court, and the time of detention, when they are known.",
        "A contact for a relative, so that the person can be informed where the law allows it.",
      ],
      steps: [
        { title: "Contact", text: "A detained person should ask to contact a lawyer as soon as the law allows it." },
        { title: "Reading", text: "Records and orders that have not been understood should not be signed." },
        { title: "Questioning", text: "At the first judicial questioning, the assistance of the lawyer is the central point." },
        { title: "The decision", text: "The judge decides on liberty and on measures. The office does not forecast that decision." },
      ],
      faqs: [
        {
          q: "Is detention the same as a conviction?",
          a: "It is not. It is a provisional measure to bring the person before a court, and the presumption of innocence remains. The person should be told the reason for the detention and the rights that apply, including the right to contact a lawyer. What happens next, including a coercive measure or release, is decided by the judge at the questioning, not by the length of the wait or by a remark at the police station. The office attends that act when it is called. It does not promise release or any other outcome.",
        },
        {
          q: "How long can detention last before a judge?",
          a: "The Constitution sets a maximum of forty-eight hours for a detention to be placed before a judge. Within that limit, the first judicial questioning of a detained defendant takes place, as a rule, with a defence lawyer. The judge hears the person and decides whether liberty continues and whether any coercive measure provided by law is applied. The period is a guarantee, not a target to be used up and not a plan the person can manage. If detention happens, the immediate request is to contact a lawyer, not to calculate a strategy.",
        },
        {
          q: "Should I sign what is put in front of me?",
          a: "Sign only what you understand. A record may stand as a note of statements, of a notice or of an identity and residence order, and the signature is not an administrative detail without consequence. A detained person should ask for a lawyer and ask for the document to be explained before signing it. If the text is not clear, the proper step is not to sign it blindly and to wait for that explanation. This page does not say what to answer, or how to conduct the conversation with the people investigating.",
        },
      ],
      ctaTitle: "Has there been a detention, or is a judicial questioning scheduled?",
      ctaLead: "The support centres on the lawyer, the legal time limit and the reading of anything presented for signature.",
      message: "Hello, I would like to book a consultation about a detention or questioning.",
    },
  ),
  [key("violencia-domestica")]: topicDetail(
    {
      pt: "Violência doméstica: em regra crime público, medidas de proteção e o número 112. A pessoa arguida tem direito a defesa. Sem promessa de resultado.",
      en: "Domestic violence: generally a public offence, protection measures and the number 112. A person accused is entitled to a defence. No promise of an outcome.",
    },
    {
      bannerTitle: "Violência doméstica",
      introTitle: "Em regra, a investigação não depende de uma queixa",
      intro: [
        "A violência doméstica é, em regra, um crime público em Portugal. O Ministério Público pode investigar sem que a vítima apresente queixa. Uma denúncia de qualquer pessoa, ou o conhecimento dos factos pelas autoridades, pode bastar para o inquérito começar. Isto não retira à vítima o direito de ser ouvida, de pedir informação e de requerer proteção. A marcha do processo não fica só nas mãos de quem sofreu.",
        "Se houver perigo imediato, o número é o 112. A PSP e a GNR também recebem participações. Podem pedir-se medidas de proteção, e o tribunal pode aplicar medidas de coação, como restrições de contacto ou de aproximação da casa, quando a lei o permita. Nenhuma medida é automática. Pedir ajuda enquanto o risco existe é o passo adequado, mesmo sem a qualificação jurídica fechada.",
        "Quem for constituído arguido tem direito a defesa e à presunção de inocência. O escritório pode assistir a vítima que procura proteção e informação, e pode assistir a pessoa arguida, em processos distintos e sem misturar os dois papéis. Não se descrevem aqui pormenores gráficos nem qualquer indicação que sirva para evitar uma investigação ou para contornar uma medida de proteção.",
      ],
      help: [
        "Orientar a vítima sobre denúncia, informação e medidas de proteção.",
        "Recordar o 112 em perigo imediato e a via da PSP, da GNR ou do Ministério Público.",
        "Preparar pedidos de proteção e, quando proceda, o pedido de indemnização civil.",
        "Assegurar defesa a quem seja constituído arguido, com a presunção de inocência.",
      ],
      docsLead: "Não é preciso um relato exaustivo para pedir ajuda. Os documentos completam-se quando a pessoa estiver em segurança.",
      docs: [
        "Identificação e um contacto em que a pessoa se sinta segura para ser notificada.",
        "Participação já feita ou documentos que a pessoa queira juntar, se já os tiver.",
        "Indicação de medidas de proteção ou de coação já pedidas ou em vigor.",
        "Datas que a pessoa consiga indicar, sem exigir um inventário completo à partida.",
        "Para a defesa, as notificações e as peças já entregues à pessoa arguida.",
      ],
      steps: [
        { title: "Segurança", text: "Em perigo imediato, o contacto é o 112. A consulta jurídica não substitui a emergência." },
        { title: "Participação", text: "Explicamos que, sendo em regra crime público, a investigação não fica dependente de queixa." },
        { title: "Proteção", text: "Ajudamos a pedir medidas. A decisão pertence à autoridade ou ao tribunal." },
        { title: "Defesa", text: "Se a pessoa for arguida, a defesa prepara-se à parte, sem promessa de resultado." },
      ],
      faqs: [
        {
          q: "Tenho de apresentar queixa para que investiguem?",
          a: "Em regra, não. A violência doméstica é tratada como crime público, pelo que o Ministério Público pode abrir ou manter o inquérito sem uma queixa da vítima. Uma denúncia de outra pessoa, ou o conhecimento direto pelas autoridades, pode ser o ponto de partida. A vítima continua a poder ser ouvida, a pedir informação e a requerer proteção. A dúvida sobre se os factos preenchem o crime não deve adiar um pedido de ajuda quando há risco. O 112 é o contacto se o perigo for imediato. O escritório explica o processo e não condiciona o apoio a uma queixa formal.",
        },
        {
          q: "Que proteção pode ser pedida?",
          a: "Podem ser pedidas medidas de proteção e, no processo penal, o tribunal pode aplicar medidas de coação, incluindo restrições de contacto e de aproximação da casa, quando os factos e a lei o permitam. A medida não é automática e a decisão não é do advogado. Enquanto vigorar, tem de ser respeitada. O escritório ajuda a descrever a situação de forma sóbria e a apresentar o pedido. Não promete que a medida seja decretada nem que, por si, resolva a situação. Se o risco for atual, o primeiro contacto é o 112, e só depois a organização dos papéis.",
        },
        {
          q: "Fui constituído arguido. Tenho direito a defesa?",
          a: "Tem. A constituição de arguido não é uma condenação, e a presunção de inocência mantém-se. A pessoa arguida tem direito a advogado nas declarações e no interrogatório judicial, que são momentos em que a assistência importa. Uma medida de coação, se existir, vigora até o tribunal a alterar, e não se indica aqui qualquer forma de a contornar. A defesa e o apoio à vítima são acompanhamentos separados. O escritório não promete arquivamento, absolvição ou a revogação de uma medida, porque essas decisões cabem ao Ministério Público ou ao tribunal.",
        },
      ],
      ctaTitle: "Precisa de ajuda relativamente a um caso de violência doméstica?",
      ctaLead: "Se houver perigo imediato, ligue primeiro para o 112. A consulta serve para a proteção ou para a defesa, sem promessa de resultado.",
      message: "Olá, gostaria de marcar uma consulta sobre um caso de violência doméstica.",
    },
    {
      bannerTitle: "Domestic violence",
      introTitle: "As a rule, the investigation does not depend on a complaint",
      intro: [
        "Domestic violence is, as a rule, a public offence in Portugal. The Public Prosecutor may investigate without a complaint from the victim. A report by any person, or knowledge of the facts by the authorities, may start the inquiry. The victim may still be heard, ask for information and request protection. The course of the case does not rest only with the person who was harmed.",
        "If there is immediate danger, the number is 112. The PSP and the GNR also receive reports. Protection measures may be requested, and the court may apply coercive measures, such as limits on contact or on approaching the home, when the law allows. No measure is automatic. Seeking help while the risk exists remains the right step, even if the legal classification is still open.",
        "A person named as a defendant is entitled to a defence and to the presumption of innocence. The office can assist a victim who seeks protection and information, and it can assist a person accused, in separate matters and without mixing the two roles. Graphic detail is not set out here, nor any indication that could serve to avoid an investigation or to get around a protection measure.",
      ],
      help: [
        "Guide a victim on a report, on information and on protection measures.",
        "Recall 112 in immediate danger, and the route through the PSP, the GNR or the Public Prosecutor.",
        "Prepare requests for protection and, where it applies, the civil compensation claim.",
        "Provide a defence to a person named as a defendant, with the presumption of innocence.",
      ],
      docsLead: "A complete account is not required before asking for help. Papers can be completed once the person is safe.",
      docs: [
        "Identification and a contact at which the person feels safe to receive notices.",
        "A report already made, or documents the person wishes to attach, if they are already to hand.",
        "A note of protection or coercive measures already requested or in force.",
        "Dates the person is able to give, without requiring a full list at the outset.",
        "For the defence, the notices and the documents already served on the defendant.",
      ],
      steps: [
        { title: "Safety", text: "In immediate danger, the contact is 112. A legal consultation does not replace the emergency call." },
        { title: "The report", text: "We explain that, as a public offence in the ordinary case, the investigation does not depend on a complaint." },
        { title: "Protection", text: "We help to request measures. The decision belongs to the authority or the court." },
        { title: "Defence", text: "If the person is a defendant, the defence is prepared separately, with no promise of an outcome." },
      ],
      faqs: [
        {
          q: "Do I have to file a complaint before anyone investigates?",
          a: "As a rule, no. Domestic violence is treated as a public offence, so the Public Prosecutor may open or continue an inquiry without a complaint from the victim. A report by another person, or direct knowledge by the authorities, can be the starting point. The victim may still be heard, may ask for information and may request protection. Doubt about whether the facts meet the offence should not delay a request for help when there is risk. The number 112 is the contact if the danger is immediate. The office explains the procedure and does not make support conditional on a formal complaint.",
        },
        {
          q: "What protection can be requested?",
          a: "Protection measures may be requested and, in the criminal case, the court may apply coercive measures, including restrictions on contact and on approaching the home, when the facts and the law allow it. The measure is not automatic and the decision is not for the lawyer to make. While it is in force, it has to be respected. The office helps to describe the situation in sober terms and to file the request. It does not promise that the measure will be ordered, or that the measure will, by itself, resolve the situation. If the risk is current, the first contact is 112, and the papers come after that.",
        },
        {
          q: "I have been named as a defendant. Am I entitled to a defence?",
          a: "Yes. Being named as a defendant is not a conviction, and the presumption of innocence remains. The defendant has the right to a lawyer at statements and at the judicial questioning, which are moments where assistance matters. A coercive measure, if one exists, stays in force until the court changes it, and this page does not indicate any way to get around it. Defence and support for a victim are separate retainers. The office does not promise closure, acquittal or the lifting of a measure, because those decisions belong to the Public Prosecutor or to the court.",
        },
      ],
      ctaTitle: "Do you need help in relation to a domestic violence matter?",
      ctaLead: "If there is immediate danger, call 112 first. A consultation is for protection or for the defence, with no promise of an outcome.",
      message: "Hello, I would like to book a consultation about a domestic violence matter.",
    },
  ),
  [key("crimes-contra-pessoas-patrimonio")]: topicDetail(
    {
      pt: "Crimes contra as pessoas e o património, como ofensas, ameaça, furto, burla e dano: a qualificação depende dos factos. Defesa ou apoio à vítima, sem descrever o ilícito.",
      en: "Offences against people and property, such as assault, threat, theft, fraud and damage: classification depends on the facts. Defence or support for a victim, with no description of how to offend.",
    },
    {
      bannerTitle: "Crimes contra pessoas e património",
      introTitle: "O nome jurídico depende dos factos",
      intro: [
        "Ofensas à integridade física, ameaça, furto, burla e dano são exemplos de crimes contra as pessoas ou contra o património. São categorias diferentes. O mesmo episódio pode aproximar-se de mais de uma figura, ou não preencher crime, conforme o que se prove. A gravidade, a relação entre as pessoas e o valor podem mudar a norma. Esta página não descreve modos de praticar estes atos nem formas de os ocultar.",
        "Para a vítima, o apoio consiste em ordenar a participação ou a queixa, quando a lei a exija, e em explicar medidas de proteção e o pedido de indemnização civil. Para quem é constituído arguido, o apoio é a defesa, com presunção de inocência e advogado nos atos em que a lei o prevê. São posições distintas. O escritório não as acumula no mesmo processo.",
        "A qualificação faz-se com o relato concreto. Saber se o crime é público ou semi-público, e se há prazo de queixa, depende dessa qualificação e não de um rótulo escolhido à partida. A acusação ou o arquivamento cabem ao Ministério Público, e a condenação cabe ao tribunal. Nenhum destes resultados é prometido, nem do lado de quem apresenta os factos nem do lado de quem se defende.",
      ],
      help: [
        "Indicar, em termos gerais, se os factos se aproximam de ofensa, ameaça, furto, burla ou dano.",
        "Dizer se o procedimento pode depender de queixa ou seguir como crime público.",
        "Apoiar a vítima na participação e no pedido de indemnização, quando se justifique.",
        "Preparar a defesa de quem seja arguido, sem descrever a prática do ilícito.",
      ],
      docsLead: "Parte-se do que aconteceu e do que já consta de um papel, não de um modelo de crime.",
      docs: [
        "Relato dos factos com datas, sem acrescentar o que não se sabe.",
        "Participação, queixa ou notificação já existente.",
        "Documentos sobre bens, valores ou lesões, se a pessoa os tiver e forem pertinentes.",
        "Identificação das pessoas envolvidas, na medida do que for conhecido.",
        "Peças do processo, quando a pessoa já tenha acesso a elas.",
      ],
      steps: [
        { title: "Factos", text: "Partimos do que aconteceu, não de um rótulo escolhido antes de ler o relato." },
        { title: "Norma", text: "Indicamos que tipo de crime os factos podem integrar e que prova isso exige." },
        { title: "Posição", text: "Definimos se o apoio é à vítima ou à defesa, em processos separados." },
        { title: "Via", text: "Explicamos queixa, denúncia, inquérito ou julgamento, conforme o ponto em que o caso está." },
      ],
      faqs: [
        {
          q: "O nome do crime fica definido pelo que a pessoa lhe chama?",
          a: "Não. Ofensa, ameaça, furto, burla e dano são qualificações legais distintas, e a escolha depende dos factos que se provem, não da palavra usada na primeira conversa. A gravidade do resultado, a relação entre as pessoas e o valor podem aproximar o caso de uma norma ou de outra, ou mostrar que não há crime. Também depende dessa qualificação saber se o procedimento é público ou se exige queixa num prazo. O escritório lê o relato e os documentos e indica o enquadramento possível. Não descreve como se pratica qualquer destes atos.",
        },
        {
          q: "Podem acompanhar a vítima e o arguido ao mesmo tempo?",
          a: "Não no mesmo processo. São posições opostas, com interesses que a lei não deixa reunir num só mandatário. À vítima presta-se apoio na participação ou na queixa, na informação, nas medidas que caibam e no pedido de indemnização civil, sem promessa de condenação ou de pagamento. Ao arguido presta-se defesa, com presunção de inocência e assistência nos atos próprios, sem promessa de absolvição. Se as duas pessoas procurarem o escritório, o conflito é explicado e só uma das posições pode ser aceite. A escolha faz-se antes de se lerem confidencialidades cruzadas.",
        },
        {
          q: "Esta página explica como se cometem estes crimes?",
          a: "Não explica, e não é esse o fim. A informação limita-se ao enquadramento de quem já foi confrontado com factos, seja como vítima, seja como arguido. Não há lista de expedientes, de alvos ou de formas de ocultar um ato. A acusação, o arquivamento e a sentença não se antecipam. Quem precise de apresentar uma participação encontra aqui o caminho da autoridade competente e da prova lícita que já exista. Quem precise de defesa encontra o direito a advogado e à presunção de inocência, não uma estratégia para impedir a investigação.",
        },
      ],
      ctaTitle: "Os factos podem corresponder a um crime contra pessoas ou património?",
      ctaLead: "A análise qualifica o relato e define se o apoio é à vítima ou à defesa, sem descrever o ilícito.",
      message: "Olá, gostaria de marcar uma consulta sobre um crime contra pessoas ou património.",
    },
    {
      bannerTitle: "Offences against people and property",
      introTitle: "The legal name depends on the facts",
      intro: [
        "Assault, threat, theft, fraud and damage are examples of offences against people or against property. They are different categories. The same event may sit near more than one of them, or may be no offence at all, depending on what is proved. Seriousness, the relationship between the people and the value can change the rule. This page does not describe ways to commit these acts or ways to conceal them.",
        "For a victim, the support is to arrange the report or the complaint, where the law requires one, and to explain protection and the civil compensation claim. For a person named as a defendant, the support is the defence, with the presumption of innocence and a lawyer at the acts where the law provides for one. The positions are distinct. The office does not combine them in the same case.",
        "Classification is made from the concrete account. Whether the offence is public or semi-public, and whether a complaint period applies, depends on that classification and not on a label chosen at the outset. A charge or a closure belongs to the Public Prosecutor, and a conviction belongs to the court. None of these outcomes is promised, either for the person reporting the facts or for the person defending.",
      ],
      help: [
        "Indicate, in general terms, whether the facts sit near assault, threat, theft, fraud or damage.",
        "Say whether the procedure may depend on a complaint or proceed as a public offence.",
        "Support a victim with the report and the compensation claim, where that is justified.",
        "Prepare the defence of a defendant, without describing the commission of an offence.",
      ],
      docsLead: "The starting point is what happened and what is already on paper, not a model of an offence.",
      docs: [
        "An account of the facts with dates, without adding what is not known.",
        "A report, a complaint or a notice that already exists.",
        "Documents on goods, sums or injury, if the person has them and they are relevant.",
        "Identification of the people involved, to the extent it is known.",
        "Documents from the case file, when the person already has access to them.",
      ],
      steps: [
        { title: "Facts", text: "We start from what happened, not from a label chosen before the account is read." },
        { title: "The rule", text: "We indicate which kind of offence the facts may amount to and what proof that requires." },
        { title: "Position", text: "We define whether the support is for a victim or for the defence, in separate cases." },
        { title: "The route", text: "We explain complaint, report, inquiry or trial, according to the point the matter has reached." },
      ],
      faqs: [
        {
          q: "Is the name of the offence fixed by what a person calls it?",
          a: "No. Assault, threat, theft, fraud and damage are distinct legal classifications, and the choice depends on the facts that are proved, not on the word used in the first conversation. The seriousness of the result, the relationship between the people and the value may bring the matter under one rule or another, or show that there is no offence. That classification also decides whether the procedure is public or whether a complaint is required within a period. The office reads the account and the documents and indicates the possible frame. It does not describe how any of these acts is committed.",
        },
        {
          q: "Can you act for the victim and the defendant at the same time?",
          a: "Not in the same case. They are opposite positions, with interests that the law does not allow one lawyer to hold together. A victim is supported with the report or the complaint, with information, with any measures that fit and with the civil compensation claim, without a promise of conviction or of payment. A defendant is given a defence, with the presumption of innocence and assistance at the proper acts, without a promise of acquittal. If both people approach the office, the conflict is explained and only one position can be accepted. The choice is made before any crossed confidential material is read.",
        },
        {
          q: "Does this page explain how these offences are committed?",
          a: "It does not, and that is not its purpose. The information is limited to the frame for a person already faced with facts, whether as a victim or as a defendant. There is no list of methods, of targets or of ways to conceal an act. A charge, a closure and a judgment are not forecast. A person who needs to file a report finds here the route to the competent authority and to lawful evidence that already exists. A person who needs a defence finds the right to a lawyer and to the presumption of innocence, not a strategy to obstruct the investigation.",
        },
      ],
      ctaTitle: "Might the facts amount to an offence against a person or against property?",
      ctaLead: "The review classifies the account and defines whether support is for a victim or for the defence, without describing the offence.",
      message: "Hello, I would like to book a consultation about an offence against a person or property.",
    },
  ),
  [key("recursos")]: topicDetail(
    {
      pt: "Recursos em processo penal: prazos curtos, preclusão, fundamentos limitados e tribunais superiores. Sem promessa de revogação da decisão.",
      en: "Criminal appeals: short deadlines, loss of the right if a deadline is missed, limited grounds and higher courts. No promise that the decision will be reversed.",
    },
    {
      bannerTitle: "Recursos em processo penal",
      introTitle: "O prazo é curto e a falta dele fecha a via",
      intro: [
        "O recurso penal impugna uma decisão perante um tribunal superior. Não é um segundo julgamento sem limites. A lei restringe os fundamentos, o tipo de decisão recorrível e, por vezes, a legitimidade. O Tribunal da Relação é, em regra, o tribunal seguinte. O Supremo Tribunal de Justiça só intervém nos casos que a lei lhe reserva. Haver um tribunal acima não torna o recurso admissível.",
        "Os prazos são curtos. A notificação da decisão é o ponto habitual de partida da contagem, mas a duração concreta depende da decisão e da norma aplicável. Deixar passar o prazo pode precludir o recurso: a parte perde a possibilidade de o apresentar. Recuperar um prazo perdido não é a regra. Ler a decisão no dia em que chega, e não na semana seguinte, faz parte da preservação dessa via.",
        "O escritório lê a decisão, verifica se o prazo ainda está aberto e se há fundamento que a lei admita. Preparar a peça é expor esses fundamentos com clareza, dentro do que pode ser discutido. Não é prometer que o tribunal superior revogue a decisão, reduza uma pena ou confirme o que a parte deseja. A manutenção, a revogação ou uma alteração parcial são resultados possíveis. Nenhum se antecipa.",
      ],
      help: [
        "Ler a decisão e a data da notificação para ver se o prazo ainda corre.",
        "Verificar se a decisão admite recurso e quais os fundamentos legais cabíveis.",
        "Redigir a motivação dentro do prazo, limitada ao que a lei permite discutir.",
        "Acompanhar a tramitação no tribunal superior, sem antecipar o acórdão.",
      ],
      docsLead: "Sem a decisão e sem a prova da data em que foi notificada, o prazo não se conta.",
      docs: [
        "Sentença, despacho ou acórdão que se pretende impugnar.",
        "Comprovativo da data em que a decisão foi notificada.",
        "Peças essenciais dos autos, incluindo a acusação e a ata, quando existam.",
        "Procuração forense e identificação de quem recorre.",
        "Indicação do tribunal que decidiu e do número do processo.",
      ],
      steps: [
        { title: "Notificação", text: "Confirmamos a data em que o prazo começou e se ainda está aberto." },
        { title: "Admissibilidade", text: "Vemos se aquela decisão pode ser recorrida e com que fundamentos." },
        { title: "Peça", text: "Redigimos o recurso no prazo, limitado ao que a lei admite discutir." },
        { title: "Tribunal superior", text: "Seguimos a tramitação. O sentido do acórdão não é prometido." },
      ],
      faqs: [
        {
          q: "Perdi o prazo. O recurso ainda pode entrar?",
          a: "Em regra, não. O decurso do prazo pode precludir o recurso, o que significa que a via se fecha para essa decisão. Os prazos penais são curtos e contam-se, no ponto de partida habitual, da notificação. Há regras de contagem que têm de ser aplicadas à data concreta, incluindo a forma como a notificação foi feita. Não se conta com uma reabertura geral para quem leu a sentença tarde. O primeiro ato é confirmar a data da notificação e a norma do prazo, no próprio dia em que a dúvida surge. O escritório não promete que um prazo findo seja recuperado.",
        },
        {
          q: "O recurso repete o julgamento?",
          a: "Não é um novo julgamento sem limites. A lei restringe o que pode ser impugnado e os fundamentos admissíveis, e distingue o que cabe dizer sobre a prova e o que cabe dizer sobre o direito. Nem toda a decisão interlocutória sobe de imediato, e nem toda a sentença abre as mesmas portas. O Tribunal da Relação aprecia o recurso nos termos da lei. O Supremo Tribunal de Justiça só intervém quando a decisão e os fundamentos são dos que lhe estão reservados. Preparar a peça é escolher fundamentos legais, não reescrever o processo inteiro.",
        },
        {
          q: "O tribunal superior vai revogar a decisão?",
          a: "Não há essa garantia. O tribunal pode manter a decisão, revogá-la ou alterá-la em parte, conforme os fundamentos e a prova que a lei lhe permita apreciar. Uma discordância com a pena ou com os factos dados como assentes não chega, por si, para tornar o recurso procedente. O escritório verifica a admissibilidade, o prazo e os fundamentos antes de apresentar a peça, e diz quando a via não existe ou quando o prazo já correu. Não promete revogação, redução da pena ou confirmação do que a parte recorrente deseja.",
        },
      ],
      ctaTitle: "Recebeu uma decisão penal e quer saber se cabe recurso?",
      ctaLead: "A análise começa pela data da notificação e pelos fundamentos que a lei admite, sem prometer revogação.",
      message: "Olá, gostaria de marcar uma consulta sobre um recurso em processo penal.",
    },
    {
      bannerTitle: "Criminal appeals",
      introTitle: "The deadline is short, and missing it closes the route",
      intro: [
        "A criminal appeal challenges a decision before a higher court. It is not a second trial without limits. The law restricts the grounds, which decisions can be appealed and who has standing. The Court of Appeal (Tribunal da Relação) is, as a rule, the next court. The Supreme Court of Justice hears only cases the law reserves to it. A higher court does not make an appeal admissible.",
        "The deadlines are short. Notification of the decision is the usual start of the count, but the length depends on the decision and on the rule. Missing the period can preclude the appeal, so the party loses the right to file it. Recovering a missed deadline is not the rule. Reading the decision on the day it arrives helps to keep that route open.",
        "The office reads the decision, checks whether the period is still open and whether there is a ground the law allows. Drafting the appeal is setting out those grounds clearly, within what may be argued. It is not a promise that the higher court will quash the decision, reduce a penalty or confirm what the party wants. Confirmation, quashing or a change in part are all possible.",
      ],
      help: [
        "Read the decision and the date of notification to see whether the period is still running.",
        "Check whether the decision can be appealed and which legal grounds are available.",
        "Draft the appeal within the deadline, limited to what the law allows to be argued.",
        "Follow the case in the higher court, without forecasting the judgment.",
      ],
      docsLead: "Without the decision and without proof of the date it was notified, the period cannot be counted.",
      docs: [
        "The judgment, order or appellate decision that is to be challenged.",
        "Proof of the date on which the decision was notified.",
        "The essential papers in the file, including the charge and the minutes, where they exist.",
        "A power of attorney and identification of the person appealing.",
        "The court that decided and the case number.",
      ],
      steps: [
        { title: "Notification", text: "We confirm the date the period started and whether it is still open." },
        { title: "Admissibility", text: "We see whether that decision can be appealed and on which grounds." },
        { title: "The appeal", text: "We draft it within the deadline, limited to what the law allows to be argued." },
        { title: "Higher court", text: "We follow the proceedings. The direction of the judgment is not promised." },
      ],
      faqs: [
        {
          q: "I missed the deadline. Can the appeal still be filed?",
          a: "As a rule, no. The passing of the period can preclude the appeal, which means the route closes for that decision. Criminal deadlines are short and are counted, at the usual starting point, from notification. There are counting rules that have to be applied to the actual date, including the way the notification was made. There is no general reopening for a person who read the judgment late. The first act is to confirm the date of notification and the rule on the period, on the same day the doubt arises. The office does not promise that a finished period will be recovered.",
        },
        {
          q: "Does an appeal repeat the trial?",
          a: "It is not a new trial without limits. The law restricts what can be challenged and the grounds that are admissible, and it distinguishes what may be said about the evidence from what may be said about the law. Not every interim decision goes up at once, and not every judgment opens the same doors. The Court of Appeal considers the appeal on the terms of the law. The Supreme Court of Justice intervenes only when the decision and the grounds are of the kind reserved to it. Drafting the paper is choosing legal grounds, not rewriting the whole case.",
        },
        {
          q: "Will the higher court quash the decision?",
          a: "There is no such guarantee. The court may confirm the decision, quash it or change it in part, according to the grounds and the evidence the law allows it to consider. Disagreement with the penalty, or with the facts held as proved, is not, by itself, enough to make the appeal succeed. The office checks admissibility, the deadline and the grounds before filing, and it says when the route does not exist or when the period has already run. It does not promise a quashing, a reduction of the penalty or confirmation of what the appellant wants.",
        },
      ],
      ctaTitle: "Have you received a criminal decision and want to know if an appeal lies?",
      ctaLead: "The review starts from the date of notification and from the grounds the law allows, without promising a reversal.",
      message: "Hello, I would like to book a consultation about an appeal in a criminal case.",
    },
  ),
};
