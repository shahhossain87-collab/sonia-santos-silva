import type { PracticeAreaKey } from "@/data/practice-areas";
import type { TopicDetail } from "@/data/topic-details";
import { topicDetail } from "@/data/topic-factory";

const key = (slug: string) => `propertyInheritance/${slug}` as `${PracticeAreaKey}/${string}`;

export const propertyTopics: Partial<Record<`${PracticeAreaKey}/${string}`, TopicDetail>> = {
  [key("herancas-partilhas")]: topicDetail(
    {
      pt: "Heranças e partilhas em Portugal: a sucessão abre-se com a morte, a legítima depende da família e da data, e o inventário cabe quando não há acordo ou há menores.",
      en: "Inheritance and division of estates in Portugal: succession opens at death, the reserved portion depends on the family and the date, and inventory is used when heirs disagree or a minor is involved.",
    },
    {
      bannerTitle: "Heranças e partilhas",
      introTitle: "A sucessão abre-se com a morte, e a quota não se adivinha",
      intro: [
        "A sucessão abre-se no momento da morte. Desde aí existe uma herança, feita de bens, direitos e dívidas que não acabam com a pessoa. Os herdeiros são chamados pela lei ou por testamento, mas o património permanece indiviso até à partilha. Aceitar pura e simplesmente, aceitar a benefício de inventário ou repudiar são decisões diferentes sobre as dívidas. Nenhuma decorre de uma mensagem entre familiares.",
        "A legítima reserva uma quota ao cônjuge, aos descendentes e aos ascendentes, que não são chamados todos ao mesmo tempo. Os descendentes preferem aos ascendentes, e o cônjuge herda com a classe chamada ou sozinho, se nenhuma existir. Outros parentes só herdam quando não há legitimário, e não têm quota reservada. A quota concreta depende da família e da data da morte, pelo que aqui não há percentagem.",
        "Se o casal vivia em comunhão, os bens comuns separam-se antes da partilha. A parte que já é do cônjuge sobrevivo não é quota sucessória. Entra na herança a parte do falecido e os bens próprios. Se os herdeiros divergem, ou se há um menor, o inventário é a via habitual para listar bens e dívidas e para partilhar. Uma mensagem de família não fixa esse resultado.",
      ],
      help: [
        "Identificar quem é chamado e quem tem legítima, à luz da família e da data da morte.",
        "Separar a meação do cônjuge, quando haja comunhão, da quota que vem da sucessão.",
        "Explicar aceitação pura, benefício de inventário e repúdio, sem escolher pelo cliente à distância.",
        "Dizer se o caso cabe em acordo ou se o inventário é a via, quando haja desacordo ou menores.",
      ],
      docsLead: "Sem a data da morte, o estado da família e os bens conhecidos, a quota é uma hipótese.",
      docs: [
        "Certidão de óbito e, se existirem, certidões de nascimento e de casamento.",
        "Convenção antenupcial ou indicação do regime de bens, quando o casamento seja relevante.",
        "Testamento e informação do registo de testamentos, se houver disposição.",
        "Identificação dos herdeiros e dos parentes próximos vivos na data da morte.",
        "Documentos dos bens e das dívidas conhecidos, como registos, extratos ou contratos.",
      ],
      steps: [
        { title: "Abertura", text: "Confirmamos a data da morte e quem, nessa data, integrava a família chamada à sucessão." },
        { title: "Regime", text: "Vemos se há meação a separar antes de qualquer quota sucessória ser discutida." },
        { title: "Chamada", text: "Distinguimos legitimários, outros herdeiros e o que um testamento pode ainda dispor." },
        { title: "Via", text: "Indicamos acordo ou inventário conforme o consenso e a capacidade, sem fixar uma quota." },
      ],
      faqs: [
        {
          q: "Podem dizer-me já a minha quota?",
          a: "Não nesta página, e não a partir só do parentesco. A legítima existe para o cônjuge, os descendentes e os ascendentes, mas a medida e quem é chamado dependem de quem estava vivo, do regime de bens e da lei na data da morte. Doações em vida podem entrar no cálculo. Se houve vida ou bens no estrangeiro, a lei aplicável pode nem ser a portuguesa. O escritório lê esses elementos na consulta. Não adianta uma percentagem num primeiro contacto.",
        },
        {
          q: "A união de facto dá a mesma legítima do casamento?",
          a: "Não. O membro sobrevivo de uma união de facto não é herdeiro legitimário e não recebe a quota reservada do cônjuge. A lei pode, em condições próprias, proteger a casa de morada de família. Essa proteção depende dos factos e não é uma quota da herança. Casamento e união de facto não ocupam o mesmo lugar na sucessão. Para os distinguir são precisos os documentos da vida em comum e do património, não uma equivalência feita por aproximação.",
        },
        {
          q: "Os herdeiros pagam as dívidas do falecido?",
          a: "Depende do modo de aceitação. A aceitação pura e simples pode expor o herdeiro às dívidas da herança. A aceitação a benefício de inventário limita, nos termos da lei, a responsabilidade aos bens herdados. O repúdio tem de ser expresso e na forma exigida. Alguns atos sobre bens da herança podem valer como aceitação, pelo que usar o património não é neutro. Os menores aceitam por representação e com esse benefício. Nada disto se decide por silêncio numa conversa de família.",
        },
      ],
      ctaTitle: "Precisa de perceber uma herança já aberta?",
      ctaLead: "A análise parte da família, da data da morte e dos documentos, sem indicar uma quota nesta página.",
      message: "Olá, gostaria de marcar uma consulta sobre heranças e partilhas.",
    },
    {
      bannerTitle: "Inheritance and division of estates",
      introTitle: "Succession opens at death, and the share is not guessed",
      intro: [
        "Succession opens at the moment of death. From then there is an estate, made of assets, rights and debts that do not end with the person. Heirs are called by law or by will, but the property stays undivided until the division. Accepting outright, accepting with the benefit of inventory, or repudiating the estate are different decisions about the debts. None of them follows from a message among relatives.",
        "The reserved portion, called legítima, is kept for the spouse, descendants and ascendants, who are not all called together. Descendants come before ascendants, and the spouse inherits with the class that is called, or alone if neither exists. Other relatives inherit only if no forced heir is called, and they have no reserved portion. The share depends on the family and the date of death, so no figure is stated.",
        "If the couple lived under a community regime, common assets are separated before the division. The part already owned by the surviving spouse is not an inheritance share. What enters the estate is the part of the deceased, plus personal assets. If heirs disagree, or a minor is among them, inventory is the usual route to list assets and debts. A family message does not fix the result.",
      ],
      help: [
        "Identify who is called and who has a reserved portion, from the family and the date of death.",
        "Separate the share of the surviving spouse in the common assets, where a community exists, from the inheritance share.",
        "Explain outright acceptance, the benefit of inventory and repudiation, without choosing at a distance.",
        "Say whether the case can proceed by agreement or needs inventory, where there is discord or a minor.",
      ],
      docsLead: "Without the date of death, the state of the family and the known assets, a share is only a hypothesis.",
      docs: [
        "Death certificate and, where they exist, birth and marriage certificates.",
        "Antenuptial agreement or a note of the matrimonial regime, where the marriage matters.",
        "The will and information from the wills register, if there is a disposition.",
        "Identification of the heirs and of the close relatives alive on the date of death.",
        "Documents for the known assets and debts, such as registers, statements or contracts.",
      ],
      steps: [
        { title: "Opening", text: "We confirm the date of death and who, on that date, belonged to the family called to the estate." },
        { title: "Regime", text: "We see whether a spouse share of common assets must be separated before any inheritance share is discussed." },
        { title: "The call", text: "We distinguish forced heirs, other heirs and what a will may still dispose of." },
        { title: "The route", text: "We indicate agreement or inventory according to consent and capacity, without fixing a share." },
      ],
      faqs: [
        {
          q: "Can you state my share now?",
          a: "Not on this page, and not from kinship alone. The reserved portion exists for the spouse, descendants and ascendants, but its size and the person called depend on who was alive, on the matrimonial regime and on the law at the date of death. Lifetime gifts may enter the calculation. If life or assets were abroad, the applicable law may not be Portuguese. The office reads those elements in consultation. It does not give a percentage at a first contact.",
        },
        {
          q: "Does a de facto partnership carry the same reserved portion as marriage?",
          a: "No. The surviving member of a de facto partnership is not a forced heir and does not take the reserved portion of a spouse. The law may, on its own conditions, protect the family home. That protection depends on the facts and is not a share of the estate. Marriage and a de facto partnership do not occupy the same place in the succession. Telling them apart needs the documents of the shared life and of the assets, not an equivalence made by approximation.",
        },
        {
          q: "Do heirs pay the debts of the deceased?",
          a: "It depends on how the estate is accepted. Outright acceptance can expose the heir to the debts of the estate. Acceptance with the benefit of inventory limits liability, as the law provides, to the assets inherited. Repudiation has to be express and in the required form. Some dealings with estate assets may count as acceptance, so using the property is not neutral. Minors accept through a representative and with that benefit. None of this is decided by silence in a family conversation.",
        },
      ],
      ctaTitle: "Do you need to understand an estate that has already opened?",
      ctaLead: "The review starts from the family, the date of death and the documents, and this page states no share.",
      message: "Hello, I would like to book a consultation about inheritance and the division of an estate.",
    },
  ),
  [key("habilitacao-herdeiros")]: topicDetail(
    {
      pt: "Habilitação de herdeiros, no notário ou no registo civil: identifica quem sucede para efeitos de bancos e de imóveis, e não faz a partilha da herança.",
      en: "Declaration of heirs, before a notary or at the civil registry: it identifies who succeeds for banks and for property, and it does not divide the estate.",
    },
    {
      bannerTitle: "Habilitação de herdeiros",
      introTitle: "O documento identifica herdeiros e não reparte bens",
      intro: [
        "A habilitação de herdeiros declara quem sucede e a título de quê. Faz-se, quando não há litígio sobre as pessoas, por escritura no notário ou na conservatória do registo civil. Bancos e o registo predial pedem-na para saber quem pode dar instruções sobre contas ou registar imóveis. O documento não atribui bens concretos. Também não extingue a indivisão da herança.",
        "A habilitação assenta nas certidões e nas declarações de quem a pede. Se existir testamento, tem de entrar no ato, e convém confirmar no registo de testamentos se há disposição. Ignorar um testamento, um filho ou o cônjuge descreve mal a sucessão. O ato não é uma sentença sobre quem herda. Se essa qualidade estiver em disputa, a via declarativa pode não chegar.",
        "Depois da habilitação, contas e imóveis seguem na herança indivisa, salvo partilha já feita. O banco pode passar a tratar com os herdeiros habilitados, dentro das regras da conta. Isso não deixa um só herdeiro levantar o saldo e tê-lo por seu. O registo do prédio em comum também não escolhe quem fica com ele. Habilitação e partilha são atos distintos e um não substitui o outro.",
      ],
      help: [
        "Ver se a via é notarial ou de registo civil, ou se o conflito de pessoas a impede.",
        "Conferir certidões, testamento e registo de testamentos antes de qualquer declaração.",
        "Explicar a bancos e conservatórias o que o documento prova e o que deixa por fazer.",
        "Separar a habilitação da partilha, da movimentação de contas e do registo do imóvel.",
      ],
      docsLead: "O ato vale o que as certidões e as declarações verdadeiras permitirem, não o que a família supõe.",
      docs: [
        "Certidão de óbito.",
        "Certidões de nascimento, casamento ou óbito que mostrem o parentesco relevante.",
        "Testamento e certidão ou informação do registo de testamentos, quando existam.",
        "Identificação e moradas dos herdeiros que hajam de constar do ato.",
        "Exigências já feitas pelo banco ou pela conservatória do registo predial, se as houver.",
      ],
      steps: [
        { title: "Pessoas", text: "Reunimos quem pode ser chamado e verificamos se alguém contesta essa qualidade." },
        { title: "Prova", text: "Conferimos certidões e a existência de testamento antes de redigir declarações." },
        { title: "Ato", text: "Preparamos a habilitação no notário ou na conservatória, conforme o caso o permita." },
        { title: "Depois", text: "Explicamos o uso perante o banco e o registo, sem tratar o ato como partilha." },
      ],
      faqs: [
        {
          q: "A habilitação divide a casa ou as contas?",
          a: "Não. Identifica os herdeiros e o título por que sucedem. Bancos e conservatórias usam-na para saber com quem podem tratar. As contas e os imóveis permanecem na herança indivisa até à partilha, salvo ato posterior que os atribua. Levantar um saldo ou habitar a casa, depois da habilitação, não converte o bem em propriedade exclusiva de quem o faz. São precisos a administração da herança e, para dispor, o acordo ou a partilha, conforme o caso.",
        },
        {
          q: "Devo ir ao notário ou à conservatória?",
          a: "Quando não se discute quem são os herdeiros, a habilitação pode fazer-se por escritura notarial ou na conservatória do registo civil. A escolha depende dos documentos, do que o banco ou o registo predial já exigiram e de haver ou não testamento. Se a qualidade de herdeiro for controvertida, ou se um testamento for posto em causa, esta via declarativa pode não servir. A questão passa então a processo. A página não escolhe o balcão sem os papéis.",
        },
        {
          q: "E se aparecer um testamento ou faltar um filho?",
          a: "A habilitação fica incompleta ou errada se ignorar um testamento, um filho ou o cônjuge. Não é uma sentença que esgote um conflito sobre as pessoas. Pode ser necessário refazê-la ou discuti-la no processo adequado, conforme o que se descubra e o momento. Por isso se pede informação ao registo de testamentos e se conferem as certidões antes do ato. Um nome em falta não se corrige com uma declaração solta feita depois, à margem do título.",
        },
      ],
      ctaTitle: "Precisa de habilitar herdeiros para o banco ou para um imóvel?",
      ctaLead: "O primeiro passo é ver quem sucede e que documentos já existem, sem confundir isso com a partilha.",
      message: "Olá, gostaria de marcar uma consulta sobre habilitação de herdeiros.",
    },
    {
      bannerTitle: "Declaration of heirs",
      introTitle: "The document names the heirs and does not allot assets",
      intro: [
        "A declaration of heirs states who succeeds and on what basis. Where there is no dispute about the persons, it is made by a deed before a notary or at the civil registry. Banks and the land registry ask for it, to know who may give instructions on accounts or register property. The document does not allot particular assets. It also does not end the undivided estate.",
        "The declaration rests on certificates and on the statements of the person who applies. If a will exists, it has to enter the act, and the wills register should be checked for a disposition. Leaving out a will, a child or the spouse misdescribes the succession. The act is not a judgment on who inherits. If that status is in dispute, this declaratory route may not be enough.",
        "After the declaration, accounts and property stay in the undivided estate, unless a division was already made. The bank may then deal with the declared heirs, within the rules of the account. That does not let one heir withdraw the balance and treat it as personal. A registration in common also does not choose who keeps the property. Declaration and division differ, and neither replaces the other.",
      ],
      help: [
        "See whether the notary or the civil registry is open, or whether a dispute about persons blocks it.",
        "Check certificates, the will and the wills register before any statement is made.",
        "Explain to banks and registries what the document proves and what it leaves undone.",
        "Keep the declaration apart from division, from drawing on accounts and from registering a property.",
      ],
      docsLead: "The act is only as sound as the certificates and the truthful statements behind it, not as sound as a family assumption.",
      docs: [
        "Death certificate.",
        "Birth, marriage or death certificates showing the relevant kinship.",
        "The will and a certificate or note from the wills register, where they exist.",
        "Identification and addresses of the heirs who must appear in the act.",
        "Requests already made by a bank or by the land registry, if any have been made.",
      ],
      steps: [
        { title: "Persons", text: "We gather who may be called and check whether anyone disputes that status." },
        { title: "Evidence", text: "We check certificates and whether a will exists before any statement is drafted." },
        { title: "The act", text: "We prepare the declaration before the notary or at the registry, where the case allows it." },
        { title: "After", text: "We explain its use with the bank and the registry, without treating the act as a division." },
      ],
      faqs: [
        {
          q: "Does the declaration divide the house or the accounts?",
          a: "No. It identifies the heirs and the title by which they succeed. Banks and registries use it to know whom they may deal with. Accounts and property remain in the undivided estate until division, unless a later act allots them. Withdrawing a balance or living in the house, after the declaration, does not turn the asset into the exclusive property of the person who does so. Administration of the estate is still required and, in order to dispose, so is agreement or a division, as the case may be.",
        },
        {
          q: "Should I go to a notary or to the registry?",
          a: "Where there is no argument about who the heirs are, the declaration may be made by a notarial deed or at the civil registry. The choice depends on the documents, on what the bank or the land registry has already required, and on whether there is a will. If heirship is contested, or a will is challenged, this declaratory route may not serve. The question then belongs in proceedings. This page does not pick the counter without the papers.",
        },
        {
          q: "What if a will appears, or a child was left out?",
          a: "The declaration is incomplete or wrong if it ignores a will, a child or the spouse. It is not a judgment that closes a dispute about the persons. It may have to be done again or discussed in the proper proceedings, depending on what is found and when. That is why information is sought from the wills register and the certificates are checked before the act. A missing name is not repaired by a loose statement made afterwards, outside the title.",
        },
      ],
      ctaTitle: "Do you need a declaration of heirs for a bank or for a property?",
      ctaLead: "The first step is to see who succeeds and which documents already exist, without confusing that with the division.",
      message: "Hello, I would like to book a consultation about a declaration of heirs.",
    },
  ),
  [key("testamentos")]: topicDetail(
    {
      pt: "Testamentos público, cerrado e internacional: a liberdade de testar é limitada pela legítima, e um testamento não afasta a quota reservada.",
      en: "Public, closed and international wills: freedom to dispose by will is limited by the reserved portion, and a will does not remove compulsory shares.",
    },
    {
      bannerTitle: "Testamentos",
      introTitle: "A liberdade de testar chega até onde a legítima a deixa",
      intro: [
        "O testamento é o ato pelo qual uma pessoa dispõe dos bens para depois da morte, dentro da lei. Em Portugal, as formas comuns são o testamento público, o cerrado e o internacional. O público é ditado perante notário. O cerrado é apresentado fechado ao notário e, depois da morte, tem de ser aberto. O internacional segue a forma da Convenção de Washington de 1973, com notário e testemunhas.",
        "A liberdade de testar não é total. A legítima do cônjuge, dos descendentes ou dos ascendentes limita o que se pode deixar a outros. Um testamento que entregue tudo a uma pessoa não afasta essas quotas. O excesso sujeita-se a redução. O testamento não evita a quota reservada, e uma frase a excluir um filho não é deserdação, figura limitada a casos estreitos da lei.",
        "Não se publica aqui um modelo de testamento. Um texto particular, escrito em casa, não é, nos casos comuns, um testamento válido em Portugal. Há formas excecionais para situações de emergência, que não servem de via ordinária. Um testamento anterior pode continuar a valer até ser revogado por um ato posterior válido. O registo de testamentos ajuda, depois da morte, a saber se existe disposição antes de se habilitar herdeiros.",
      ],
      help: [
        "Explicar o que cabe na quota disponível e o que a legítima retira à liberdade de testar.",
        "Distinguir testamento público, cerrado e internacional, sem fornecer minuta.",
        "Ver testamentos anteriores e o que um ato novo revoga ou deixa de pé.",
        "Preparar a forma perante notário, com a família e os bens descritos de modo fiel.",
      ],
      docsLead: "O conteúdo discute-se com factos da família e dos bens, não com um exemplo copiado.",
      docs: [
        "Identificação e estado civil de quem pretende testar.",
        "Indicação dos parentes que seriam legitimários se a morte ocorresse hoje, como hipótese de trabalho.",
        "Lista dos bens relevantes, sem valor de venda apresentado como certo.",
        "Testamentos anteriores, para se perceber a revogação.",
        "Se houver elemento estrangeiro, prova da nacionalidade e do lugar onde a vida decorre.",
      ],
      steps: [
        { title: "Limites", text: "Vemos a família que teria legítima e o que, em termos gerais, ficaria na quota disponível." },
        { title: "Forma", text: "Escolhemos a forma adequada entre público, cerrado e internacional, sem texto modelo." },
        { title: "Atos anteriores", text: "Lemos disposições já feitas e o modo como um testamento novo as revoga." },
        { title: "Outorga", text: "Acompanhamos a outorga perante quem a lei autoriza, em regra o notário." },
      ],
      faqs: [
        {
          q: "Um testamento pode deixar tudo a um filho?",
          a: "Pode dizê-lo. Não retira aos outros legitimários a quota que a lei lhes reserva. O que exceder a quota disponível fica sujeito a redução. O testamento mantém efeito na parte que a lei admite e não funciona como modo de evitar as quotas obrigatórias. Afastar um filho exigiria um fundamento legal de deserdação ou de indignidade, figuras estreitas e não uma preferência escrita. A quota concreta continua a depender da família e da data da morte.",
        },
        {
          q: "Um papel escrito em casa chega?",
          a: "Nos casos comuns, não. O direito português usa o testamento público, o cerrado e o internacional, além de formas excecionais para emergências, que não são uma via caseira. Um texto particular não deve ser tratado como testamento. Esta página não traz modelo, cláusulas nem formulário para copiar. Quem pretende testar precisa de capacidade e da forma exigida perante quem a lei autoriza, em regra o notário. O conteúdo discute-se na consulta, à luz da família e dos bens, não num exemplo publicado.",
        },
        {
          q: "Qual é a diferença entre público, cerrado e internacional?",
          a: "O público é declarado perante o notário, que o escreve e o conserva. O cerrado é um documento apresentado fechado, aprovado no invólucro, e só se conhece depois da abertura, ocorrida após a morte. O internacional é uma forma da Convenção de Washington de 1973, feita em regra perante notário e testemunhas, pensada para circular entre países. A forma internacional não afasta a legítima quando a lei portuguesa rege a sucessão. Nenhuma das três é um texto particular guardado apenas em casa.",
        },
      ],
      ctaTitle: "Pretende fazer ou rever um testamento?",
      ctaLead: "A consulta vê a família, os bens e a forma legal. Não entrega um modelo para assinar.",
      message: "Olá, gostaria de marcar uma consulta sobre testamentos.",
    },
    {
      bannerTitle: "Wills",
      introTitle: "Freedom to make a will stops where the reserved portion stops it",
      intro: [
        "A will is the act by which a person disposes of property after death, within the law. In Portugal the ordinary forms are the public, the closed and the international will. The public will is declared before a notary. The closed will is presented sealed and, after death, must be opened. The international will follows the Washington Convention of 1973, usually with a notary and witnesses.",
        "Freedom to make a will is not complete. The reserved portion of the spouse, of descendants or of ascendants limits what may be left to others. A will that gives everything to one person does not remove those shares. The excess is open to reduction. A will does not avoid the reserved portion, and a line excluding a child is not disinheritance, which the law confines to narrow cases.",
        "This page does not set out a model will. A private text written at home is not, in ordinary cases, a valid will in Portugal. Exceptional forms exist for emergencies, and they are not an ordinary route. An earlier will may stand until a later valid act revokes it. After death, the wills register helps to show whether a disposition exists before heirs are declared.",
      ],
      help: [
        "Explain what fits in the disposable portion and what the reserved portion removes from freedom of testation.",
        "Distinguish the public, closed and international wills, without supplying a draft.",
        "Look at earlier wills and at what a new act revokes or leaves standing.",
        "Prepare the form before a notary, with the family and the assets described faithfully.",
      ],
      docsLead: "The contents are discussed from the facts of the family and of the assets, not from a copied example.",
      docs: [
        "Identification and marital status of the person who intends to make a will.",
        "A note of the relatives who would be forced heirs if death occurred now, as a working hypothesis only.",
        "A list of the relevant assets, without a sale value presented as certain.",
        "Earlier wills, so that revocation can be understood.",
        "Where there is a foreign element, proof of nationality and of the place where life is lived.",
      ],
      steps: [
        { title: "Limits", text: "We look at the family that would have a reserved portion and, in general terms, at what would remain disposable." },
        { title: "Form", text: "We choose among the public, closed and international forms, with no model text." },
        { title: "Earlier acts", text: "We read dispositions already made and the way a new will revokes them." },
        { title: "Execution", text: "We attend the execution before the person the law authorises, usually a notary." },
      ],
      faqs: [
        {
          q: "Can a will leave everything to one child?",
          a: "It may say so. It does not take from the other forced heirs the share the law reserves for them. Whatever exceeds the disposable portion is open to reduction. The will keeps effect in the part the law allows and does not work as a way to avoid compulsory shares. Setting a child aside would require a legal ground of disinheritance or of unworthiness, which are narrow figures and not a written preference. The concrete share still depends on the family and on the date of death.",
        },
        {
          q: "Is a paper written at home enough?",
          a: "In ordinary cases, no. Portuguese law uses the public will, the closed will and the international will, plus exceptional forms for emergencies, which are not a household route. A private text should not be treated as a will. This page contains no model, no clauses and no form to copy. A person who intends to make a will needs capacity and the form required before the person the law authorises, usually a notary. The contents are discussed in consultation, in light of the family and the assets, not in a published example.",
        },
        {
          q: "What is the difference between a public, a closed and an international will?",
          a: "The public will is declared before the notary, who writes it and keeps it. The closed will is a document presented sealed, approved on the cover, and its contents are known only after it is opened, which happens after death. The international will is a form under the Washington Convention of 1973, usually made before a notary and witnesses, and meant to circulate between countries. The international form does not remove the reserved portion where Portuguese law governs the succession. None of the three is a private text kept only at home.",
        },
      ],
      ctaTitle: "Do you want to make or review a will?",
      ctaLead: "The consultation looks at the family, the assets and the legal form. It does not hand over a model to sign.",
      message: "Hello, I would like to book a consultation about wills.",
    },
  ),
  [key("partilhas-acordo")]: topicDetail(
    {
      pt: "Partilha por acordo entre herdeiros capazes: escritura no notário e autorização do tribunal quando há menores, sem indicação de taxas de IMT ou de imposto do selo.",
      en: "Agreed division among heirs with capacity: a deed before a notary, and court approval where there are minors, with no IMT or stamp duty rates stated.",
    },
    {
      bannerTitle: "Partilhas por acordo",
      introTitle: "O acordo de todos, com capacidade, faz-se por escritura",
      intro: [
        "A partilha por acordo cabe quando todos os herdeiros são capazes e consentem nos bens, nas dívidas e na atribuição. O ato é uma escritura no notário. Descreve a herança, os lotes e as tornas, se alguém recebe mais e compensa os outros. Não é um impresso nem um saldo fechado por mensagem. Sem o consentimento de um herdeiro, esta via não se conclui.",
        "Se há um menor, ou uma pessoa sem capacidade para dispor, o acordo dos restantes não chega, em regra. A partilha precisa então de autorização do tribunal ou do processo de inventário, para que o interesse de quem não pode consentir seja apreciado. A assinatura dos adultos não substitui essa apreciação. O mesmo cuidado vale quando um herdeiro está ausente e não está representado com poderes bastantes para partilhar.",
        "A escritura pode ter efeitos fiscais, em imposto do selo ou em IMT, conforme os bens. As taxas não se escrevem aqui: dependem das regras da data da escritura e de cada bem. As dívidas da herança têm de entrar no acordo. Um acerto entre herdeiros não apaga, por si, o que seja devido a outra pessoa. Depois da partilha, os imóveis ainda se registam.",
      ],
      help: [
        "Verificar se todos os herdeiros são capazes e se consentem no mesmo mapa de bens e lotes.",
        "Separar os casos com menores ou incapazes, que em regra pedem tribunal ou inventário.",
        "Preparar a escritura de partilha, com tornas descritas quando o valor dos lotes o exija.",
        "Recordar registo e efeitos fiscais sem indicar taxas nem desenhar uma operação para as evitar.",
      ],
      docsLead: "A escritura descreve o que os herdeiros realmente têm e aceitam, não um esboço incompleto.",
      docs: [
        "Habilitação de herdeiros ou os documentos que a sustentam.",
        "Relação dos bens e das dívidas, com registos, cadernetas e extratos.",
        "Proposta de lotes e de tornas, se já existir um rascunho comum.",
        "Identificação e prova de capacidade de todos, e procuração bastante de quem não compareça.",
        "Documentos dos imóveis ou das contas que a escritura vá adjudicar.",
      ],
      steps: [
        { title: "Capacidade", text: "Confirmamos que cada herdeiro pode consentir, ou que o caso tem de ir a tribunal." },
        { title: "Mapa", text: "Reunimos bens, dívidas, lotes e tornas num texto que todos possam ler." },
        { title: "Escritura", text: "Preparamos a partilha para o notário quando o acordo e a capacidade existam." },
        { title: "Registo", text: "Indicamos o registo que se segue e que há efeitos fiscais, sem escrever taxas." },
      ],
      faqs: [
        {
          q: "Podemos partilhar se um herdeiro for menor?",
          a: "Em regra, não basta o acordo dos outros. O menor não consente como um adulto, e a partilha costuma exigir autorização judicial ou o inventário, para que o interesse dele seja apreciado. As assinaturas dos capazes não substituem essa apreciação. O mesmo se passa, no essencial, com quem não tem capacidade para dispor. Se todos forem capazes e concordarem, a via é a escritura. A existência de um menor muda o caminho e não se contorna com uma procuração improvisada dos restantes.",
        },
        {
          q: "A escritura evita o imposto?",
          a: "Não é esse o efeito que aqui se descreve. A partilha pode ter consequências em imposto do selo ou em IMT, conforme os bens, o vínculo e a data da escritura. As taxas não são indicadas nesta página, porque dependem das regras fiscais em vigor e da operação concreta. O escritório não monta, neste texto, uma operação para as contornar. Dívidas e registos também não desaparecem porque o imposto esteja por apurar. A análise faz-se com os bens reais, não com um número genérico.",
        },
        {
          q: "E se um herdeiro não assinar?",
          a: "Não há partilha por acordo. A via supõe o consentimento de todos os herdeiros capazes, sobre os bens, as dívidas e os lotes. A maioria não substitui quem falta. O passo seguinte pode ser o inventário, no notário ou no tribunal, conforme o caso. Recusar não é, por si, uma conduta que esta página qualifique: os motivos e a prova veem-se no processo. O escritório não promete que o ausente venha a aceitar o lote que os outros desenharam.",
        },
      ],
      ctaTitle: "Os herdeiros estão de acordo e são capazes?",
      ctaLead: "A escritura prepara-se quando o mapa é comum. Havendo menor ou recusa, a via muda, e o resultado não se antecipa.",
      message: "Olá, gostaria de marcar uma consulta sobre uma partilha por acordo.",
    },
    {
      bannerTitle: "Agreed division of estates",
      introTitle: "Agreement by every heir with capacity is made by deed",
      intro: [
        "An agreed division is available when every heir has capacity and consents to the assets, the debts and the award. The act is a deed before a notary. It describes the estate, the lots and any balancing payment, where one heir receives more and compensates the others. It is not a standard form, nor a balance closed by message. If one heir withholds consent, this route does not conclude.",
        "Where a minor, or a person without capacity, is an heir, the agreement of the others is not enough, as a rule. The division then needs court approval or inventory proceedings, so that the person who cannot consent is protected. Adult signatures do not replace that review. The same care applies if an heir is absent and has no representative with power to divide.",
        "The deed may have tax effects, in stamp duty or in IMT, according to the assets. Rates are not written here: they depend on the rules in force on the date and on each asset. Debts of the estate belong in the agreement. A settlement among heirs does not, by itself, extinguish what is owed to another person. After the division, the property still has to be registered.",
      ],
      help: [
        "Check that every heir has capacity and consents to the same map of assets and lots.",
        "Set aside cases with minors or persons without capacity, which as a rule need a court or inventory.",
        "Prepare the deed of division, with balancing payments described where the lots require them.",
        "Recall registration and tax effects without stating rates or designing a step to avoid them.",
      ],
      docsLead: "The deed describes what the heirs actually have and accept, not an incomplete sketch.",
      docs: [
        "A declaration of heirs, or the documents that support one.",
        "A list of assets and debts, with registers, tax records and statements.",
        "A proposal for lots and balancing payments, if a common draft already exists.",
        "Identification and proof of capacity for everyone, and a sufficient power of attorney for anyone who will not attend.",
        "Documents for the properties or accounts that the deed will award.",
      ],
      steps: [
        { title: "Capacity", text: "We confirm that each heir can consent, or that the case has to go to court." },
        { title: "The map", text: "We gather assets, debts, lots and balancing payments in a text everyone can read." },
        { title: "The deed", text: "We prepare the division for the notary where agreement and capacity both exist." },
        { title: "Registration", text: "We indicate the registration that follows and that tax effects exist, without writing rates." },
      ],
      faqs: [
        {
          q: "Can we divide if one heir is a minor?",
          a: "As a rule, the agreement of the others is not enough. A minor does not consent as an adult, and the division commonly needs court approval or inventory proceedings, so that the interest of the minor is considered. The signatures of those with capacity do not replace that review. The same is true, in substance, of a person who lacks capacity to dispose. If everyone has capacity and agrees, the route is the deed. A minor changes the path, and the change is not avoided by an improvised power of attorney from the others.",
        },
        {
          q: "Does the deed avoid tax?",
          a: "That is not an effect described here. A division may have consequences in stamp duty or in IMT, according to the assets, the family link and the date of the deed. Rates are not stated on this page, because they depend on the tax rules in force and on the concrete transaction. The office does not, in this text, build a transaction in order to get round them. Debts and registrations do not disappear because the tax is still to be worked out. The review is done with the real assets, not with a generic figure.",
        },
        {
          q: "What if one heir will not sign?",
          a: "There is then no agreed division. The route requires the consent of every heir with capacity, on the assets, the debts and the lots. A majority does not stand in for the person who is missing. The next step may be inventory, before a notary or in court, according to the case. A refusal is not, by itself, conduct that this page labels: the reasons and the evidence are seen in the proceedings. The office does not promise that the absent heir will accept the lot the others have drawn.",
        },
      ],
      ctaTitle: "Are the heirs in agreement, and do they have capacity?",
      ctaLead: "The deed is prepared when the map is common. A minor or a refusal changes the route, and the outcome is not forecast.",
      message: "Hello, I would like to book a consultation about an agreed division of an estate.",
    },
  ),
  [key("conflitos-herdeiros")]: topicDetail(
    {
      pt: "Conflitos entre herdeiros: inventário, colação e impugnação de testamentos, sem promessa sobre quem tem razão.",
      en: "Disputes between heirs: inventory proceedings, collation and challenges to wills, with no promise about who is right.",
    },
    {
      bannerTitle: "Conflitos entre herdeiros",
      introTitle: "O conflito descreve-se em processo, sem antecipar quem tem razão",
      intro: [
        "Quando os herdeiros não acordam, o caminho habitual é o processo de inventário. Serve para relacionar bens e dívidas, pagar credores na medida da lei e partilhar. Pode correr em cartório notarial ou em tribunal, conforme o caso e a existência de litígio. A página não escolhe o foro no abstrato. Descrever esta via não é prever a decisão de quem a conduz.",
        "A colação traz à partilha as doações em vida feitas a quem a deve, em especial descendentes e, por vezes, o cônjuge. É um acerto de valores, não a devolução automática do bem. A dispensa só vale dentro da quota disponível. Se a doação ou o testamento passam dessa quota, o excesso pode reduzir-se. Nenhuma destas contas antecipa quem tem razão no litígio.",
        "Impugnar um testamento não é o mesmo que pedir a redução por ofensa da legítima. A invalidade pode resultar da forma, da falta de capacidade ou de um vício da vontade, como erro, dolo ou coação. A redução ataca o excesso e deixa de pé o que cabe na quota disponível. Os prazos dependem do fundamento e do conhecimento dos factos. O escritório não promete a procedência destes pedidos.",
      ],
      help: [
        "Enquadrar o inventário e dizer se, no caso, corre em cartório ou em tribunal.",
        "Calcular, em traços, doações sujeitas a colação ou a redução, sem dar o litígio por ganho.",
        "Separar a invalidade do testamento da redução por excesso sobre a quota disponível.",
        "Acompanhar a administração do cabeça de casal e o pedido de contas, dentro do mandato.",
      ],
      docsLead: "O processo precisa de bens, de datas e do que cada herdeiro recebeu, não de uma versão só oral.",
      docs: [
        "Testamento e habilitação, se existirem, e certidão de óbito.",
        "Escrituras de doação e prova de entregas feitas em vida.",
        "Correspondência sobre bens em falta, contas ou ocupação de imóveis.",
        "Documentos que mostrem quem administra a herança e que atos praticou.",
        "Peças de um inventário já iniciado, quando o processo exista.",
      ],
      steps: [
        { title: "Factos", text: "Separamos o que está documentado do que é apenas uma versão de família." },
        { title: "Via", text: "Vemos se o inventário e que pedidos, de colação, redução ou invalidade, têm apoio." },
        { title: "Prova", text: "Organizamos doações, testamento e atos do cabeça de casal para o processo." },
        { title: "Decisão", text: "Acompanhamos o processo e explicamos a decisão, que não é antecipada aqui." },
      ],
      faqs: [
        {
          q: "O que é a colação?",
          a: "É o acerto pelo qual doações feitas em vida entram na conta da partilha, quando o herdeiro que as recebeu está obrigado a conferi-las. Abrange, em especial, descendentes e, em certos casos, o cônjuge. Não significa sempre devolver o objeto: muitas vezes entra o valor. A dispensa de colação só é eficaz dentro da quota disponível. Se a liberalidade for além dessa quota, o excesso pode ser reduzido. Explicar a colação não é dizer quem fica com a razão no resto do conflito.",
        },
        {
          q: "Impugnar o testamento é o mesmo que reclamar a legítima?",
          a: "Não. A impugnação por invalidade discute a forma, a capacidade ou a vontade, por exemplo erro, dolo ou coação, e pode retirar efeito ao ato. A redução por inoficiosidade ataca só o excesso sobre a quota disponível e conserva o resto. São fundamentos, provas e prazos diferentes. Um não se transforma no outro por ser mais conveniente. O escritório prepara o pedido que os factos suportam. Não promete que o tribunal ou o notário dê razão a quem o apresenta.",
        },
        {
          q: "O que faz o cabeça de casal?",
          a: "Administra a herança indivisa até à partilha. Em regra é o cônjuge sobrevivo, quando seja herdeiro, ou quem a lei ou o testamento designar. Deve relacionar bens, conservar o património e prestar contas. Não se torna proprietário exclusivo e não vende, só por esse cargo, um imóvel da herança. Os outros herdeiros podem pedir contas no inventário. A administração explica-se com documentos. Não é uma vantagem que se possa apresentar como resultado do processo.",
        },
      ],
      ctaTitle: "Há um desacordo sobre a herança?",
      ctaLead: "O escritório ordena os factos e a via processual. Não promete quem vence nem em que termos a partilha fecha.",
      message: "Olá, gostaria de marcar uma consulta sobre um conflito entre herdeiros.",
    },
    {
      bannerTitle: "Disputes between heirs",
      introTitle: "A dispute is stated in proceedings, without forecasting who is right",
      intro: [
        "When the heirs do not agree, the usual path is inventory proceedings. They list assets and debts, pay creditors as far as the law requires, and divide. They may run before a notary or in court, depending on the case and on any dispute. This page does not pick the forum in the abstract. To describe the route is not to forecast the decision.",
        "Collation brings lifetime gifts into the account of an heir who must collate, especially a descendant and sometimes the spouse. It adjusts values and does not automatically return the asset. Dispensation works only within the disposable portion. If a gift or a will exceeds that portion, the excess may be reduced. None of this forecasts who is right.",
        "Challenging a will is not the same as asking for reduction where the reserved portion is infringed. Invalidity may follow from form, capacity or a defect of consent, such as mistake, deceit or coercion. Reduction cuts the excess and leaves what fits the disposable portion. Time limits depend on the ground and on knowledge of the facts. The office does not promise success on any such claim.",
      ],
      help: [
        "Place the inventory and say whether, in the case, it runs before a notary or in court.",
        "Sketch gifts that may be collated or reduced, without treating the dispute as won.",
        "Keep invalidity of a will apart from reduction of what exceeds the disposable portion.",
        "Follow the administration by the cabeça de casal and a request for an account, within the mandate.",
      ],
      docsLead: "Proceedings need assets, dates and what each heir received, not an account that exists only in speech.",
      docs: [
        "The will and the declaration of heirs, if they exist, and the death certificate.",
        "Deeds of gift and proof of transfers made in life.",
        "Correspondence about missing assets, accounts or occupation of property.",
        "Documents showing who administers the estate and what acts were done.",
        "Papers from an inventory already begun, where proceedings exist.",
      ],
      steps: [
        { title: "Facts", text: "We separate what the documents show from what is only a family version." },
        { title: "The route", text: "We see whether inventory, and which claims of collation, reduction or invalidity, have support." },
        { title: "Evidence", text: "We arrange gifts, the will and the acts of the cabeça de casal for the proceedings." },
        { title: "The decision", text: "We follow the proceedings and explain the decision, which is not forecast here." },
      ],
      faqs: [
        {
          q: "What is collation?",
          a: "It is the adjustment by which lifetime gifts enter the account of the division, where the heir who received them is bound to bring them in. It covers, in particular, descendants and, in some cases, the spouse. It does not always mean giving the object back: often it is the value that enters. A dispensation from collation is effective only inside the disposable portion. If the gift goes beyond that portion, the excess may be reduced. Explaining collation does not say who is right in the rest of the dispute.",
        },
        {
          q: "Is a challenge to a will the same as claiming the reserved portion?",
          a: "No. A challenge for invalidity concerns form, capacity or consent, for example mistake, deceit or coercion, and it can deprive the act of effect. Reduction for an excessive gift or legacy attacks only what exceeds the disposable portion and keeps the rest. The grounds, the evidence and the time limits differ. One does not turn into the other because it would be more convenient. The office prepares the claim the facts support. It does not promise that the court or the notary will hold for the person who brings it.",
        },
        {
          q: "What does the cabeça de casal do?",
          a: "That heir administers the undivided estate until division. As a rule it is the surviving spouse, where the spouse is an heir, or the person designated by law or by the will. The task is to list assets, preserve the property and give an account. The role does not create exclusive ownership and does not, by itself, authorise a sale of estate property. The other heirs may ask for an account in the inventory. Administration is explained with documents. It is not an advantage that can be presented as the outcome of the proceedings.",
        },
      ],
      ctaTitle: "Is there a disagreement about the estate?",
      ctaLead: "The office puts the facts and the procedural route in order. It does not promise a result, or the terms on which the division will close.",
      message: "Hello, I would like to book a consultation about a dispute between heirs.",
    },
  ),
  [key("imoveis-heranca")]: topicDetail(
    {
      pt: "Imóveis numa herança: registo na conservatória, venda com todos os herdeiros ou após partilha, e ocupação que não transmite a propriedade.",
      en: "Property in an estate: registration at the land registry, a sale that usually needs every heir or a prior division, and occupation that does not transfer title.",
    },
    {
      bannerTitle: "Imóveis em herança",
      introTitle: "O imóvel da herança não muda de dono por ocupação",
      intro: [
        "Enquanto não há partilha, o imóvel integra a herança indivisa. Cada herdeiro tem uma quota abstrata, não uma assoalhada nem um andar. A aquisição por morte deve ser registada na conservatória do registo predial, em regra com a certidão de óbito e a habilitação. Esse registo mostra a herança ou os herdeiros em comum. Não adjudica o prédio a uma só pessoa.",
        "A venda do prédio inteiro exige, em regra, todos os herdeiros ou uma partilha prévia. A assinatura de um só não transmite a casa. Ceder a quota ideal é outro ato: o adquirente fica em indivisão, e os demais podem ter preferência. Não é vender a casa. O cabeça de casal administra e presta contas, mas o cargo não o faz dono nem vendedor único.",
        "Quem ocupa o imóvel não passa, por isso, a dono exclusivo. A ocupação não substitui a escritura nem um registo em nome singular. O uso pode ter de ser acertado entre herdeiros, mas o tempo na casa não é título. A caderneta predial também não prova domínio exclusivo. A casa de morada de família pode caber ao cônjuge sobrevivo, nos termos da lei, e habitá-la não substitui a partilha.",
      ],
      help: [
        "Ler o registo predial e a caderneta e dizer o que cada um prova.",
        "Preparar o registo da aquisição por morte, com a habilitação e o óbito.",
        "Ver se uma venda tem todos os herdeiros ou uma partilha prévia que a sustente.",
        "Explicar que a ocupação e a administração não substituem o título nem a partilha.",
      ],
      docsLead: "O prédio trata-se com o registo e com o título sucessório, não com a chave de quem lá vive.",
      docs: [
        "Certidão do registo predial e caderneta predial atualizadas tanto quanto existam.",
        "Certidão de óbito e habilitação de herdeiros.",
        "Testamento, se o imóvel estiver nele disposto.",
        "Contrato de arrendamento ou elementos de quem ocupa, quando isso interesse.",
        "Procurações e, se existir, minuta de compra ou de partilha ainda não outorgada.",
      ],
      steps: [
        { title: "Título", text: "Vemos como o prédio está registado e em nome de quem, antes e depois da morte." },
        { title: "Sucessão", text: "Conferimos a habilitação e se o registo da aquisição por morte já foi feito." },
        { title: "Uso e venda", text: "Distinguimos ocupação, administração, cessão de quota e venda do prédio inteiro." },
        { title: "Ato seguinte", text: "Indicamos partilha, registo ou escritura de venda, sem garantir que a venda se feche." },
      ],
      faqs: [
        {
          q: "Se vivo na casa, ela é minha?",
          a: "Não. A ocupação por um herdeiro não transmite a propriedade exclusiva nem autoriza o registo em nome singular. Até à partilha, o imóvel está na herança indivisa e a quota de cada um é abstrata. O uso exclusivo pode ter de ser compensado ou acertado entre os herdeiros, mas o tempo de permanência não substitui a escritura. Qualquer invocação de usucapião teria de ser vista à parte e não se presume entre coherdeiros. A caderneta predial, por si, também não cria esse título.",
        },
        {
          q: "Um herdeiro pode vender sozinho?",
          a: "A venda do prédio todo exige, em regra, todos os herdeiros ou uma partilha anterior que o atribua a quem vende. Uma assinatura não basta para o comprador adquirir a casa livre dos outros. Transmitir apenas a quota ideal é um ato diferente: o comprador entra na indivisão e os coherdeiros podem ter direito de preferência. Não é um atalho. O cabeça de casal também não vende sozinho só porque administra. A viabilidade vê-se nos registos e na habilitação, sem promessa de que a venda se concretize.",
        },
        {
          q: "O registo depois da morte acaba com a partilha?",
          a: "Não. O registo da aquisição por sucessão, na conservatória do registo predial, publicita que o bem passou para a herança ou para os herdeiros em comum. Não escolhe lotes nem entrega o prédio a um só nome. Essa atribuição faz-se na partilha e num registo posterior. Atualizar a caderneta predial nas finanças é uma diligência fiscal e não substitui o registo predial. Mesmo que a lei da sucessão seja estrangeira, o imóvel sito em Portugal regista-se na conservatória portuguesa.",
        },
      ],
      ctaTitle: "Há um imóvel parado numa herança?",
      ctaLead: "A consulta lê o registo, a habilitação e quem ocupa ou quer vender, sem tratar a posse como título.",
      message: "Olá, gostaria de marcar uma consulta sobre imóveis numa herança.",
    },
    {
      bannerTitle: "Property in an estate",
      introTitle: "Estate property does not change owner by occupation",
      intro: [
        "Until there is a division, the property belongs to the undivided estate. Each heir has an abstract share, not a room and not a floor. The acquisition by death should be registered at the land registry, usually with the death certificate and the declaration of heirs. That entry shows the estate or the heirs in common. It does not award the property to one person.",
        "A sale of the whole property usually needs every heir, or a prior division that vests it in the seller. One signature does not pass the house. An ideal share is a different act: the buyer stays in indivision, and co-heirs may have a right of preference. The cabeça de casal administers and accounts, but the role is not sole title and not a power to sell alone.",
        "Occupation by one heir does not transfer sole title. It replaces neither a deed nor registration in one name. Exclusive use may call for a settlement among the heirs. Time in the property is not a title. The caderneta predial is a tax record and does not prove sole ownership. The family home may be allotted to the surviving spouse, and living there does not replace the division.",
      ],
      help: [
        "Read the land register and the tax record and say what each of them proves.",
        "Prepare registration of the acquisition by death, with the declaration of heirs and the death certificate.",
        "See whether a sale has every heir, or a prior division that supports it.",
        "Explain that occupation and administration do not replace title or the division.",
      ],
      docsLead: "The property is handled with the register and the succession title, not with the key of the person who lives there.",
      docs: [
        "A land registry certificate and the caderneta predial, as up to date as they exist.",
        "Death certificate and declaration of heirs.",
        "The will, if the property is disposed of in it.",
        "A tenancy agreement or details of who occupies the property, where that matters.",
        "Powers of attorney and, if one exists, a draft purchase or division not yet executed.",
      ],
      steps: [
        { title: "Title", text: "We see how the property is registered and in whose name, before and after the death." },
        { title: "Succession", text: "We check the declaration of heirs and whether the acquisition by death has already been registered." },
        { title: "Use and sale", text: "We distinguish occupation, administration, transfer of an ideal share and sale of the whole property." },
        { title: "Next act", text: "We indicate division, registration or a sale deed, without promising that a sale will complete." },
      ],
      faqs: [
        {
          q: "If I live in the house, is it mine?",
          a: "No. Occupation by one heir does not transfer exclusive ownership and does not authorise registration in a single name. Until division, the property is in the undivided estate and the share of each heir is abstract. Exclusive use may have to be compensated or settled among the heirs, but time spent there does not replace a deed. Any claim of acquisition by long possession would have to be examined on its own and is not presumed among co-heirs. The caderneta predial, by itself, does not create that title either.",
        },
        {
          q: "Can one heir sell alone?",
          a: "A sale of the whole property usually needs every heir, or an earlier division that vests it in the seller. One signature is not enough for a buyer to take the house free of the others. Transferring only an ideal share is a different act: the buyer enters the indivision and the co-heirs may have a right of preference. It is not a shortcut. The cabeça de casal does not sell alone merely because that heir administers. Whether a sale can proceed is seen from the registers and the declaration, with no promise that the sale will take place.",
        },
        {
          q: "Does registration after death finish the division?",
          a: "No. Registration of the acquisition by succession, at the land registry, publishes that the asset passed to the estate or to the heirs in common. It does not choose lots and it does not deliver the property into one name. That award is made in the division and in a later registration. Updating the caderneta predial with the tax authority is a tax step and does not replace the land register. Even where the law of the succession is foreign, property in Portugal is registered at the Portuguese registry.",
        },
      ],
      ctaTitle: "Is a property stuck in an estate?",
      ctaLead: "The consultation reads the register, the declaration and who occupies or wants to sell, without treating possession as title.",
      message: "Hello, I would like to book a consultation about property in an estate.",
    },
  ),
  [key("planeamento-sucessorio")]: topicDetail(
    {
      pt: "Planeamento sucessório: testamento, regime de bens, doações e sucessões com elemento estrangeiro, pela residência habitual, sem esquemas fiscais nem preços.",
      en: "Succession planning: wills, matrimonial property regimes, donations and cross-border estates under habitual residence, with no tax arrangements and no prices.",
    },
    {
      bannerTitle: "Planeamento sucessório",
      introTitle: "Planear é descrever os atos que a lei admite e os limites",
      intro: [
        "O planeamento sucessório, nesta página, descreve as opções que a lei admite e os limites que se mantêm. O testamento dispõe da quota disponível, pode fazer legados e nomear testamenteiro. Não apaga a legítima. O regime de bens define, antes da morte, o que é comum e o que é próprio, e portanto o que entra na herança. Não se descreve aqui qualquer esquema fiscal.",
        "Sem convenção antenupcial, o regime supletivo atual é a comunhão de adquiridos, mas a data do casamento pode ditar outro. Mudar o regime durante o casamento é um ato formal, com regras próprias. A doação transmite bens presentes e não é, em regra, um pacto sobre a herança futura, vedado salvo exceções estreitas. Pode ser colacionada e reduzida se atingir a legítima.",
        "Havendo bens ou vida no estrangeiro, o Regulamento (UE) n.º 650/2012 rege as sucessões abertas desde 17 de agosto de 2015. O critério é a residência habitual na morte, para a lei e os tribunais, salvo escolha válida da lei da nacionalidade. Essa residência lê-se na vida da pessoa, não no passaporte nem só no domicílio fiscal. O regulamento não trata de impostos e não vale em todos os países.",
      ],
      help: [
        "Ver o que um testamento pode dispor sem apresentar isso como afastamento da legítima.",
        "Ler o regime de bens e a data do casamento, e explicar o que entra na herança.",
        "Situar uma doação perante a colação e a redução, sem desenhar uma vantagem fiscal.",
        "Identificar residência habitual, nacionalidade e países dos bens para o regulamento europeu.",
      ],
      docsLead: "O mapa útil é a família, o regime, os bens e o lugar da vida, não uma lista de produtos.",
      docs: [
        "Identificação, estado civil e regime de bens, com a convenção antenupcial se existir.",
        "Certidões de nascimento dos filhos e nota sobre ascendentes vivos.",
        "Lista de bens em Portugal e no estrangeiro, e do país onde a vida decorre.",
        "Testamentos ou doações já feitos.",
        "Prova de nacionalidade estrangeira, se estiver em causa uma escolha da lei dessa nacionalidade.",
      ],
      steps: [
        { title: "Família e regime", text: "Confirmamos quem seria legitimário e que regime de bens está em vigor." },
        { title: "Atos possíveis", text: "Distinguimos testamento, doação e alteração do regime, com o limite de cada um." },
        { title: "Fronteira", text: "Vemos residência habitual, nacionalidade e onde estão os bens, sem tratar de imposto." },
        { title: "Limite", text: "Registamos o que a lei não deixa dispor. Não se fixa aqui preço nem resultado." },
      ],
      faqs: [
        {
          q: "O testamento evita a legítima?",
          a: "Não. O testamento dispõe da quota disponível, pode ordenar legados e nomear testamenteiro, e fica sujeito à reserva do cônjuge, dos descendentes ou dos ascendentes, conforme quem exista à data da morte. Uma doação em vida também não retira o bem desse cálculo só porque mudou de titular: pode ser colacionada e reduzida. O regime de bens altera o que entra na herança, mas não apaga a quota de quem for chamado. O planeamento descreve estes limites. Não é um método para os contornar.",
        },
        {
          q: "O que conta como residência habitual?",
          a: "No Regulamento (UE) n.º 650/2012, a lei e os tribunais da residência habitual à data da morte regem, em regra, a sucessão, salvo escolha válida da lei da nacionalidade. Essa escolha pode mudar as regras, incluindo o alcance de uma quota reservada, mas tem de ser válida e atendida onde os bens estão. Não é um impresso para afastar herdeiros à margem da lei. A residência habitual lê-se no centro da vida, não no passaporte nem, só por si, no domicílio fiscal. O regulamento não fixa impostos. Um certificado sucessório europeu pode ajudar a provar a qualidade de herdeiro noutro Estado-Membro e não substitui o registo predial português.",
        },
        {
          q: "Mudar o regime de bens ou doar resolve a sucessão futura?",
          a: "São atos diferentes, e nenhum é um contrato livre sobre a morte. Alterar o regime durante o casamento exige forma e requisitos próprios. A doação transmite bens presentes. O pacto sucessório é, em regra, proibido, com exceções estreitas que não servem de modelo para afastar legitimários. As doações podem ter de voltar à conta da legítima. Efeitos fiscais existem e não são desenhados nesta página, que também não indica preços. A consulta parte dos documentos da família e dos bens.",
        },
      ],
      ctaTitle: "Quer ordenar decisões sobre o património ainda em vida?",
      ctaLead: "A consulta descreve testamento, regime e doações com os limites da lei, e vê o elemento estrangeiro quando exista.",
      message: "Olá, gostaria de marcar uma consulta sobre planeamento sucessório.",
    },
    {
      bannerTitle: "Succession planning",
      introTitle: "Planning describes the acts the law allows and the limits on them",
      intro: [
        "On this page, succession planning describes the options the law allows and the limits that remain. A will can dispose of the disposable portion, leave legacies and name an executor. It does not erase the reserved portion. The matrimonial regime decides, before death, what is common and what is personal, and so what enters the estate. No tax arrangement is described here.",
        "With no antenuptial agreement, the default today is community of acquisitions, but the marriage date may set another. A change of regime during the marriage is a formal act with its own rules. A donation passes present assets. It is not, as a rule, a pact on a future estate, aside from narrow exceptions the law allows. It may be collated and reduced if it reaches the reserved portion.",
        "Where life or assets cross a border, Regulation (EU) No. 650/2012 governs successions from 17 August 2015. Habitual residence at death is the test for the law and the courts, unless the law of nationality was validly chosen. That residence is taken from how life was lived, not from the passport and not from tax residence alone. The Regulation does not cover tax, and not every country applies it.",
      ],
      help: [
        "See what a will may dispose of, without presenting that as a removal of the reserved portion.",
        "Read the matrimonial regime and the date of marriage, and explain what enters the estate.",
        "Place a donation against collation and reduction, without designing a tax advantage.",
        "Identify habitual residence, nationality and the countries of the assets for the European regulation.",
      ],
      docsLead: "The useful map is the family, the regime, the assets and the place of life, not a list of products.",
      docs: [
        "Identification, marital status and matrimonial regime, with the antenuptial agreement if there is one.",
        "Birth certificates of children and a note of living ascendants.",
        "A list of assets in Portugal and abroad, and of the country where life is lived.",
        "Wills or donations already made.",
        "Proof of a foreign nationality, where a choice of the law of that nationality is in issue.",
      ],
      steps: [
        { title: "Family and regime", text: "We confirm who would be a forced heir and which matrimonial regime is in force." },
        { title: "Acts that exist", text: "We distinguish a will, a donation and a change of regime, with the limit of each." },
        { title: "A border", text: "We look at habitual residence, nationality and where the assets are, without dealing with tax." },
        { title: "The limit", text: "We record what the law does not allow to be disposed of. No price and no outcome are fixed here." },
      ],
      faqs: [
        {
          q: "Does a will avoid the reserved portion?",
          a: "No. A will disposes of the disposable portion, may direct legacies and may name an executor, and it remains subject to the reserve of the spouse, of descendants or of ascendants, according to who exists on the date of death. A lifetime donation does not take the asset out of that calculation merely because the name on the title changed: it may be collated and reduced. The matrimonial regime changes what enters the estate, but it does not erase the share of the person who is called. Planning describes these limits. It is not a method for getting round them.",
        },
        {
          q: "What counts as habitual residence?",
          a: "Under Regulation (EU) No. 650/2012, the law and the courts of the habitual residence at the date of death govern the succession as a rule, unless the law of nationality was validly chosen. That choice can change the rules, including how far a reserved portion exists, but it has to be valid and respected where the assets are. It is not a form for setting heirs aside outside the law. Habitual residence is read from the centre of life, not from the passport and not, by itself, from tax residence. The Regulation does not set tax. A European Certificate of Succession may help to prove heirship in another Member State and does not replace Portuguese land registration.",
        },
        {
          q: "Does changing the matrimonial regime, or making a donation, settle the future estate?",
          a: "They are different acts, and neither is a free contract about death. Changing the regime during the marriage requires form and its own conditions. A donation transfers present assets. A succession pact is, as a rule, forbidden, with narrow exceptions that are not a model for setting forced heirs aside. Donations may have to be brought back into the account of the reserved portion. Tax effects exist and are not designed on this page, which also states no prices. The consultation starts from the family documents and the assets.",
        },
      ],
      ctaTitle: "Do you want to put decisions about family assets in order during life?",
      ctaLead: "The consultation describes the will, the regime and donations with the limits of the law, and looks at a foreign element where one exists.",
      message: "Hello, I would like to book a consultation about succession planning.",
    },
  ),
};
