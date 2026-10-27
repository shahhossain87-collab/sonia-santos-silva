import type { PracticeAreaKey } from "@/data/practice-areas";
import type { TopicDetail } from "@/data/topic-details";
import { topicDetail } from "@/data/topic-factory";

const key = (slug: string) => `companyLaw/${slug}` as `${PracticeAreaKey}/${string}`;

export const companyTopics: Partial<Record<`${PracticeAreaKey}/${string}`, TopicDetail>> = {
  [key("constituicao")]: topicDetail(
    {
      pt: "Constituição de sociedades em Portugal: LDA, unipessoal e SA, pacto social, NIPC, RCBE, finanças e Segurança Social. O capital depende do tipo. Constituir não atribui visto.",
      en: "Company incorporation in Portugal: LDA, single-member company and SA, articles, company number, beneficial owner, tax and social security. Capital depends on the form. Incorporation does not grant a visa.",
    },
    {
      bannerTitle: "Constituição de sociedades",
      introTitle: "O tipo, o pacto e o registo não se confundem com um visto",
      intro: [
        "Constituir uma sociedade em Portugal cria uma pessoa coletiva. A firma, a sede, o objeto e o capital ficam no pacto social. Os tipos mais usados são a sociedade por quotas, a unipessoal e a anónima. O tipo muda o capital, os títulos e a forma de decidir. O escritório revê o pacto e organiza o pedido de registo. A constituição produz efeitos com o registo comercial.",
        "O pedido inclui a admissibilidade da firma e o número de identificação de pessoa coletiva. A declaração do beneficiário efetivo faz-se no RCBE. Seguem-se o início de atividade na Autoridade Tributária e, quando há deveres de empregador ou de gerente, a Segurança Social. Sem estes atos a sociedade pode estar registada e não conseguir faturar nem cumprir deveres correntes.",
        "O capital depende do tipo. Na sociedade por quotas e na unipessoal, o capital é a soma das quotas e fixa-se no pacto, respeitando um mínimo legal baixo. Na sociedade anónima o mínimo legal é de cinquenta mil euros e só parte se realiza no ato. Constituir a sociedade não atribui, por si, visto nem autorização de permanência. Esse pedido é autónomo e a decisão cabe à autoridade.",
      ],
      help: [
        "Rever o tipo, a firma, o objeto, a sede e o capital face à atividade prevista.",
        "Confirmar que o sócio único de uma unipessoal não é, ele próprio, outra unipessoal.",
        "Distinguir entradas em dinheiro e em espécie, incluindo imóveis, que podem exigir escritura.",
        "Organizar o registo comercial, o RCBE, as finanças e a Segurança Social, à parte de qualquer visto.",
      ],
      docsLead: "A lista é indicativa. O procedimento concreto, presencial ou eletrónico, depende de quem constitui e do que entra para a sociedade.",
      docs: [
        "Identificação e número fiscal dos sócios e de quem vai gerir, com poderes de representação se alguém assina por outrem.",
        "Projeto de pacto social, com firma, sede, objeto, capital, quotas e regras de gerência.",
        "Elementos para a admissibilidade da firma ou a firma que se pretende verificar.",
        "Dados do beneficiário efetivo para a declaração no RCBE.",
        "Comprovativo das entradas em dinheiro, quando o procedimento o exigir, e descrição das entradas em espécie.",
      ],
      steps: [
        {
          title: "Tipo e pacto",
          text: "Revemos o tipo de sociedade, o capital legal e um pacto adequado à atividade, incluindo a menção unipessoal quando há um só sócio.",
        },
        {
          title: "Identificação",
          text: "Organizamos a firma, o número de pessoa coletiva e os dados dos sócios, dos gerentes e do beneficiário efetivo.",
        },
        {
          title: "Registo",
          text: "Preparamos e acompanhamos o pedido de registo comercial. A decisão de registar cabe ao conservador, não ao escritório.",
        },
        {
          title: "Deveres seguintes",
          text: "Indicamos o RCBE, o início de atividade e a Segurança Social, e separamos estes atos de qualquer pedido de visto.",
        },
      ],
      faqs: [
        {
          q: "A sociedade por quotas exige um capital elevado?",
          a: "O mínimo legal da sociedade por quotas e da unipessoal é baixo, e o capital é a soma das quotas. Na sociedade anónima o mínimo é de cinquenta mil euros, com realização parcial no ato. O montante, dentro da lei, deve servir a atividade. O escritório não escolhe um valor único para todos os projetos.",
        },
        {
          q: "Constituir a sociedade chega para obter um visto?",
          a: "A constituição pode integrar um projeto de atividade, mas o visto ou a autorização de residência tem requisitos próprios e depende de decisão da autoridade competente. O registo comercial não substitui essa decisão. O escritório separa os dois procedimentos e não apresenta a sociedade como forma de obter permanência.",
        },
        {
          q: "Quando é que a sociedade passa a existir?",
          a: "A sociedade comercial adquire personalidade jurídica com o registo definitivo da constituição. Antes disso pode haver pacto e entradas preparadas, mas ainda não existe a pessoa coletiva. Depois mantêm-se o RCBE, a Autoridade Tributária e a Segurança Social. O escritório acompanha estes registos. Cada decisão pertence à entidade competente.",
        },
      ],
      ctaTitle: "Pretende constituir uma sociedade em Portugal?",
      ctaLead: "A análise parte do tipo, da atividade e dos sócios, e separa o registo comercial de qualquer pedido de visto.",
      message: "Olá, gostaria de marcar uma consulta sobre a constituição de uma sociedade.",
    },
    {
      bannerTitle: "Company incorporation",
      introTitle: "The form, the contract and registration are separate from a visa",
      intro: [
        "Setting up a company in Portugal creates a legal person. The name, registered office, object and share capital sit in the company contract. The usual forms are the private limited company, the single-member company and the public limited company. The form changes the capital, the holdings and how decisions are taken. The office reviews the contract and organises the filing. Existence follows commercial registration.",
        "The filing covers admissibility of the name and the company identification number. The beneficial owner is declared on the Central Register of Beneficial Owners, the RCBE. The start of activity is then filed with the tax authority and, where employer or manager duties arise, with social security. Without these steps the company may be registered and still unable to invoice or to meet ordinary duties.",
        "Share capital depends on the form. In an LDA or unipessoal, capital is the sum of the quotas and is fixed in the contract, subject to a low legal minimum. In a public limited company the minimum is fifty thousand euros, of which only part is paid up at the start. Incorporation does not, by itself, grant a visa or a residence permit. That application is separate. The authority decides.",
      ],
      help: [
        "Review the form, the name, the object, the registered office and the capital against the intended activity.",
        "Check that the sole partner of a unipessoal is not itself another single-member company.",
        "Separate cash contributions from contributions in kind, including property, which may require a deed.",
        "Organise commercial registration, the RCBE, tax and social security, apart from any visa application.",
      ],
      docsLead: "The list is indicative. The concrete procedure, in person or online, depends on who incorporates and on what is contributed.",
      docs: [
        "Identification and tax numbers of the partners and of the intended managers, with authority if someone signs for another person.",
        "A draft company contract, with name, registered office, object, capital, quotas and rules on management.",
        "Details for the name check, or the name to be submitted for admissibility.",
        "Details of the beneficial owner for the RCBE declaration.",
        "Proof of cash contributions where the procedure requires it, and a description of contributions in kind.",
      ],
      steps: [
        {
          title: "Form and contract",
          text: "We review the company form, the legal capital and a contract that fits the activity, including the single-member wording where there is one partner.",
        },
        {
          title: "Identification",
          text: "We organise the name, the company number and the details of the partners, the managers and the beneficial owner.",
        },
        {
          title: "Registration",
          text: "We prepare and follow the commercial registry filing. Whether it is registered is a decision of the registrar, not of the office.",
        },
        {
          title: "Later duties",
          text: "We set out the RCBE, the start of activity and social security, and we keep those steps apart from any visa application.",
        },
      ],
      faqs: [
        {
          q: "Does a private limited company need a large capital?",
          a: "The legal minimum for an LDA and for a unipessoal is low, and capital is the sum of the quotas. For a public limited company the minimum is fifty thousand euros, with only part paid up at the start. Any higher sum should match the activity. The office does not set one figure for every project.",
        },
        {
          q: "Is incorporation enough to obtain a visa?",
          a: "Incorporation may form part of a business plan, but a visa or a residence permit has its own requirements and depends on a decision of the competent authority. Commercial registration does not replace that decision. The office keeps the two procedures apart and does not present the company as a way to secure stay.",
        },
        {
          q: "When does the company come into existence?",
          a: "A commercial company acquires legal personality when incorporation is definitively registered. Before that there may be a contract and contributions in preparation, but there is not yet a legal person. The RCBE, the tax authority and social security remain separate duties. The office follows those filings. Each decision belongs to the competent body.",
        },
      ],
      ctaTitle: "Are you planning to incorporate a company in Portugal?",
      ctaLead: "The review starts from the form, the activity and the partners, and it keeps commercial registration apart from any visa application.",
      message: "Hello, I would like to book a consultation about setting up a company.",
    },
  ),
  [key("alteracoes")]: topicDetail(
    {
      pt: "Alterações societárias: sede, objeto, capital e pacto social, com a maioria exigida e o registo comercial. A decisão de registar cabe ao conservador.",
      en: "Corporate changes: registered office, object, share capital and articles, with the required majority and commercial registration. The registrar decides whether to register.",
    },
    {
      bannerTitle: "Alterações societárias",
      introTitle: "A deliberação prepara a alteração. O registo é que a torna oponível",
      intro: [
        "Mudar a sede, o objeto, o capital ou o pacto exige deliberação dos sócios e, em regra, registo comercial. Uma alteração que fique só na ata pode valer entre os sócios e não produzir efeitos perante terceiros. O escritório lê o pacto, confirma a maioria exigida para aquela matéria e organiza o pedido. A decisão de registar cabe ao conservador.",
        "A mudança de sede pode ter de ser comunicada à Autoridade Tributária e a outros registos onde a morada conste. O novo objeto deve descrever uma atividade lícita e concreta, bastante para o registo. O aumento ou a redução do capital segue formalidades próprias, incluindo a posição dos credores e a preferência dos sócios quando a lei ou o pacto as impõem. Não são simples correções de texto.",
        "O pacto pode passar a regular a gerência, a transmissão de quotas ou as maiorias. Cada cláusula nova tem de caber na lei imperativa do Código das Sociedades Comerciais. Um modelo de outro país, ou de outra sociedade, é uma causa frequente de recusa ou de um registo que não corresponde ao que os sócios quiseram. O escritório revê o texto e acompanha o pedido. O deferimento não está assegurado.",
      ],
      help: [
        "Ler o pacto em vigor e a maioria exigida para a alteração concreta.",
        "Redigir a deliberação de sede, objeto, capital ou cláusulas, com o texto que o registo possa receber.",
        "Ver se a mudança obriga a atualizar o RCBE, a Autoridade Tributária ou a Segurança Social.",
        "Preparar e acompanhar o pedido na conservatória, incluindo a publicação ligada ao registo.",
      ],
      docsLead: "Sem o pacto atual e sem uma cópia fiel da deliberação, o pedido de alteração fica incompleto.",
      docs: [
        "Certidão permanente ou cópia atualizada do pacto e da matrícula na conservatória.",
        "Ata ou deliberação escrita, com a maioria e as assinaturas exigidas.",
        "Nova morada, novo objeto ou quadro do capital, conforme a alteração.",
        "Identificação de quem assina e comprovativo dos poderes, se não for um sócio que comparece por si.",
        "Elementos do beneficiário efetivo, se a alteração puder mudar o controlo da sociedade.",
      ],
      steps: [
        {
          title: "Pacto vigente",
          text: "Lemos a versão registada e separamos o que a lei deixa à autonomia do que é imperativo.",
        },
        {
          title: "Deliberação",
          text: "Organizamos a convocatória ou a forma escrita e o texto da alteração, com a maioria que a matéria pede.",
        },
        {
          title: "Pedido",
          text: "Preparamos o registo comercial e os avisos fiscais ou de beneficiário efetivo que a mudança implique.",
        },
        {
          title: "Resultado",
          text: "Acompanhamos o andamento. O conservador pode registar, pedir elementos ou recusar. Essa decisão é dele.",
        },
      ],
      faqs: [
        {
          q: "Qualquer maioria altera o pacto?",
          a: "As deliberações correntes e a alteração do pacto não se aprovam da mesma forma. A lei e o pacto fixam a maioria, e algumas decisões exigem o acordo do sócio afetado. Uma ata que ignore essa regra pode ser impugnada e pode não servir para o registo. O escritório confirma a maioria antes de preparar o pedido.",
        },
        {
          q: "A sede muda no dia da votação?",
          a: "A deliberação é o passo interno. Perante terceiros, e para vários registos, a sede nova releva a partir do registo comercial, e a Autoridade Tributária deve ser informada nos termos próprios. Usar a morada nova em faturas antes desses atos cria divergência entre documentos. O escritório organiza a sequência. O momento da atualização em cada entidade depende dessa entidade.",
        },
        {
          q: "O objeto pode passar a cobrir qualquer atividade?",
          a: "O objeto deve indicar a atividade que a sociedade vai exercer, de modo bastante para o registo. Uma redação sem limite, ou uma atividade incompatível com licenças do setor, pode ser recusada ou ficar incompleta. Há atividades reguladas que exigem títulos alheios ao registo comercial. O escritório revê o texto. Não assegura que a conservatória o aceite como foi proposto.",
        },
      ],
      ctaTitle: "A sociedade precisa de alterar sede, objeto, capital ou pacto?",
      ctaLead: "A análise parte da versão registada e da maioria exigida, e o registo fica dependente do conservador.",
      message: "Olá, gostaria de marcar uma consulta sobre alterações societárias.",
    },
    {
      bannerTitle: "Corporate changes",
      introTitle: "The resolution prepares the change. Registration makes it effective against others",
      intro: [
        "Changing the registered office, the object, the capital or the articles requires a resolution of the partners and, as a rule, commercial registration. A change that exists only in the minutes may bind the partners and still have no effect against third parties. The office reads the articles, checks the majority required for that matter and organises the filing. The registrar decides whether to register it.",
        "A new registered office may have to be notified to the tax authority and to other registers that hold the address. The new object should describe a lawful and concrete activity, sufficient for registration. Increases and reductions of capital follow their own formalities, including creditors and pre-emption where the law or the articles require them. They are not corrections of wording.",
        "The articles may be changed to govern management, transfers of quotas or majorities. Each new clause must fit the mandatory rules of the Portuguese Companies Code. A model taken from another country, or from another company, often leads to refusal or to a registration that does not match what the partners wanted. The office reviews the text and follows the filing. Approval is not assured.",
      ],
      help: [
        "Read the articles in force and the majority required for the particular change.",
        "Draft the resolution on the office, the object, the capital or the clauses, in wording the registry can receive.",
        "See whether the change requires an update of the RCBE, the tax authority or social security.",
        "Prepare and follow the filing at the registry, including the publication tied to registration.",
      ],
      docsLead: "Without the current articles and a faithful copy of the resolution, an amendment filing is incomplete.",
      docs: [
        "A permanent certificate or an up-to-date copy of the articles and of the registry entry.",
        "The minutes or the written resolution, with the majority and the signatures required.",
        "The new address, the new object or the capital table, according to the change.",
        "Identification of the signatory and proof of authority, if a partner does not attend in person.",
        "Beneficial-owner details, if the change may affect control of the company.",
      ],
      steps: [
        {
          title: "Current articles",
          text: "We read the registered version and separate what the law leaves to the parties from what is mandatory.",
        },
        {
          title: "Resolution",
          text: "We organise the notice or the written form, and the text of the change, with the majority that matter requires.",
        },
        {
          title: "Filing",
          text: "We prepare the commercial registration and the tax or beneficial-owner notices that the change requires.",
        },
        {
          title: "Outcome",
          text: "We follow the file. The registrar may register, ask for more papers or refuse. That decision belongs to the registrar.",
        },
      ],
      faqs: [
        {
          q: "Will any majority do to amend the articles?",
          a: "Ordinary resolutions and an amendment of the articles are not passed in the same way. The law and the articles set the majority, and some decisions also need the consent of the partner whose obligations increase. Minutes that ignore that rule may be challenged and may be useless for registration. The office checks the majority before preparing the filing.",
        },
        {
          q: "Does the registered office change on the day of the vote?",
          a: "The resolution is the internal step. Against third parties, and for several registers, the new office takes effect from commercial registration, and the tax authority must be told under its own rules. Using the new address on invoices before those steps creates a mismatch. The office organises the sequence. When each body updates its record depends on that body.",
        },
        {
          q: "Can the object be widened to any activity?",
          a: "The object should state the activity the company will carry on, in terms sufficient for registration. Unlimited wording, or an activity at odds with a sector licence, may be refused or left incomplete. Some regulated activities need titles outside the commercial registry. The office reviews the wording and does not assure acceptance as proposed.",
        },
      ],
      ctaTitle: "Does the company need to change its registered office, object, capital or articles?",
      ctaLead: "The review starts from the registered text and the majority required, and registration remains a decision of the registrar.",
      message: "Hello, I would like to book a consultation about corporate changes.",
    },
  ),
  [key("cessao-quotas")]: topicDetail(
    {
      pt: "Cessão de quotas numa LDA: forma escrita, preferência, consentimento, registo comercial e enquadramento fiscal, sem taxa anunciada.",
      en: "Quota transfers in a Portuguese LDA: written form, pre-emption, consent, commercial registration and tax treatment, with no rate stated.",
    },
    {
      bannerTitle: "Cessão de quotas",
      introTitle: "A quota transmite-se por título, com as regras do pacto e com registo",
      intro: [
        "A quota é a participação numa sociedade por quotas. Transmite-se por contrato escrito de cessão, e não por acordo verbal. O pacto pode exigir consentimento da sociedade e pode manter ou afastar a preferência dos outros sócios. Ignorar essas regras pode tornar a cessão ineficaz perante a sociedade. O escritório revê o pacto e o projeto antes da assinatura.",
        "Entre as partes, o contrato pode valer quando a forma exigida está cumprida. Perante a sociedade, a cessão tem de lhe ser comunicada ou por ela aceite. Perante terceiros, vale o registo comercial. Sem registo, um terceiro pode continuar a ter como sócio quem já transmitiu. O escritório organiza o título e acompanha o pedido, cuja decisão cabe ao conservador.",
        "A cessão pode ter efeitos fiscais para quem transmite e, nalguns casos, sobre o próprio negócio. O enquadramento depende de o transmitente ser singular ou coletivo, do preço, do custo de aquisição e de a sociedade ter património sobretudo imobiliário. Pode haver imposto do selo e, nesses casos imobiliários, imposto municipal sobre transmissões. Não há uma taxa única independente da qualificação do caso. A liquidação cabe à Autoridade Tributária.",
      ],
      help: [
        "Ler no pacto a preferência, o consentimento e qualquer limite à transmissão.",
        "Organizar a comunicação aos sócios e à sociedade antes de a cessão se dar por feita.",
        "Preparar o contrato e o pedido de registo comercial, com as assinaturas que a conservatória exige.",
        "Separar o registo da análise fiscal, sem indicar uma taxa ou um imposto fechado.",
      ],
      docsLead: "O título e o pacto têm de coincidir. Um preço combinado à parte, sem documento, não chega para o registo nem para as finanças.",
      docs: [
        "Pacto social e certidão onde constem as quotas e as cláusulas de transmissão.",
        "Identificação e números fiscais de quem transmite e de quem adquire.",
        "Projeto de cessão, com o preço ou a causa, e prova de como a preferência foi respeitada.",
        "Consentimento da sociedade, ou ata, se o pacto o exigir.",
        "Elementos sobre o ativo da sociedade, se houver imóveis, para a análise fiscal sem fixar taxa.",
      ],
      steps: [
        {
          title: "Pacto",
          text: "Vemos se há preferência, consentimento ou forma especial antes de circular um contrato para assinatura.",
        },
        {
          title: "Título",
          text: "Organizamos a cessão escrita e as comunicações aos sócios e à sociedade.",
        },
        {
          title: "Registo",
          text: "Acompanhamos o registo comercial para a cessão valer perante terceiros. O conservador aprecia o pedido.",
        },
        {
          title: "Fisco",
          text: "Identificamos o que a Autoridade Tributária pode exigir no caso, sem anunciar uma taxa.",
        },
      ],
      faqs: [
        {
          q: "Os outros sócios podem impedir a venda?",
          a: "Podem ter preferência nas transmissões onerosas, salvo se o pacto a afastar. O pacto pode também exigir consentimento da sociedade. Preferência e consentimento não coincidem: uma dá prioridade na compra e a outra condiciona a entrada. O escritório lê essas regras no caso concreto.",
        },
        {
          q: "A cessão paga sempre imposto municipal sobre imóveis?",
          a: "Esse imposto pode aplicar-se quando a sociedade tem ativo predominantemente imobiliário, nas condições do código respetivo. Uma sociedade sem esse ativo não segue o mesmo caminho. Podem acrescer outros impostos, conforme o transmitente, o preço e a existência de imposto do selo. O escritório identifica o que deve ser analisado com os elementos do negócio. Não indica taxa nem montante.",
        },
        {
          q: "Chega o contrato assinado entre as partes?",
          a: "O contrato escrito é necessário e pode não chegar. A sociedade tem de conhecer a cessão para esta lhe ser oponível, e os terceiros ficam vinculados pelo registo comercial. Se o pacto exige forma mais solene, preferência ou consentimento, esses passos integram o título. Uma assinatura isolada deixa a posição de sócio por esclarecer.",
        },
      ],
      ctaTitle: "Há uma quota para transmitir numa sociedade por quotas?",
      ctaLead: "A análise parte do pacto, do preço e dos sócios, e não fecha o imposto nem o registo de antemão.",
      message: "Olá, gostaria de marcar uma consulta sobre a cessão de quotas.",
    },
    {
      bannerTitle: "Quota transfers",
      introTitle: "A quota passes by a document, under the articles and by registration",
      intro: [
        "A quota is the holding of a partner in a Portuguese private limited company. It is transferred by a written contract of assignment, not by an oral deal. The articles may require the consent of the company and may keep or set aside the pre-emption of the other partners. Ignoring those rules can make the transfer ineffective against the company. The office reviews the articles and the draft before signature.",
        "Between the parties, the contract can bind once the required form is met. Against the company, the transfer must be notified to it or accepted by it. Against third parties, commercial registration is what counts. Without registration, a third party may still treat the seller as the partner. The office organises the document and follows the filing. The registrar decides whether the papers are sufficient.",
        "A transfer can have tax consequences for the seller. The treatment depends on whether the seller is an individual or a company, on the price, on the acquisition cost and on whether the company holds assets that are mainly immovable property. Stamp duty may apply and, in those property cases, municipal transfer tax. There is no single rate that stands apart from that analysis. The tax authority assesses the tax.",
      ],
      help: [
        "Read the articles for pre-emption, consent and any limit on transfer.",
        "Organise notice to the partners and to the company before the transfer is treated as complete.",
        "Prepare the contract and the commercial registry filing, with the signatures the registrar requires.",
        "Keep registration apart from the tax review, without stating a rate or a closed tax figure.",
      ],
      docsLead: "The document and the articles have to match. A price agreed on the side, with nothing in writing, is not enough for the registry or the tax authority.",
      docs: [
        "The articles and a certificate showing the quotas and the transfer clauses.",
        "Identification and tax numbers of the transferor and of the acquirer.",
        "A draft assignment, with the price or the cause, and proof that pre-emption was respected.",
        "The consent of the company, or the minutes, if the articles require it.",
        "Information on the company assets, if there is property, for the tax review, with no rate fixed.",
      ],
      steps: [
        {
          title: "Articles",
          text: "We check pre-emption, consent and any special form before a contract is sent for signature.",
        },
        {
          title: "Document",
          text: "We organise the written assignment and the notices to the partners and to the company.",
        },
        {
          title: "Registration",
          text: "We follow commercial registration so the transfer can bind third parties. The registrar assesses the filing.",
        },
        {
          title: "Tax",
          text: "We identify what the tax authority may require on the facts, without announcing a rate.",
        },
      ],
      faqs: [
        {
          q: "Can the other partners block a sale?",
          a: "They may have pre-emption on transfers for consideration, unless the articles say otherwise. The articles may also make the transfer subject to the consent of the company. Pre-emption and consent are not the same: one gives priority to buy, and the other may condition the entry of a third party. The office applies them to the file.",
        },
        {
          q: "Does a quota transfer always attract property transfer tax?",
          a: "That tax can apply where the company holds assets that are mainly immovable property, on the conditions the relevant code sets. A company without that profile does not follow the same path. Other taxes may also arise, depending on the seller, the price and stamp duty. The office identifies what has to be reviewed from the deal papers.",
        },
        {
          q: "Is a contract signed by seller and buyer enough?",
          a: "The written contract is necessary and may not be enough. The company must know of the transfer before it binds the company, and third parties are bound through commercial registration. If the articles require a stricter form, pre-emption or consent, those steps are part of the title. The office organises the steps and follows the registration.",
        },
      ],
      ctaTitle: "Is there a quota to transfer in a private limited company?",
      ctaLead: "The review starts from the articles, the price and the partners, and it does not close the tax or the registration in advance.",
      message: "Hello, I would like to book a consultation about a transfer of quotas.",
    },
  ),
  [key("entrada-saida-socios")]: topicDetail(
    {
      pt: "Entrada e saída de sócios: cessão, aumento de capital, exclusão, exoneração e morte. O valor de saída não é um preço prometido.",
      en: "Entry and exit of partners: transfer, capital increase, exclusion, withdrawal and death. An exit value is not a promised price.",
    },
    {
      bannerTitle: "Entrada e saída de sócios",
      introTitle: "Entrar e sair são atos com título, e não um acordo de corredor",
      intro: [
        "Um sócio entra por cessão de uma quota já existente ou pela subscrição de quotas novas num aumento de capital. Na cessão quem transmite é outro sócio, com preferência e registo próprios. No aumento a sociedade cria quotas, os sócios atuais podem ter preferência e o capital delibera-se e regista-se. O escritório identifica o caminho que o pacto e a lei permitem.",
        "A saída também não tem uma forma única. O sócio pode transmitir a quota, pode ser excluído por causa grave prevista na lei ou no pacto, ou pode exonerar-se quando a lei lhe dá esse direito. A morte não apaga a quota. Os herdeiros sucedem, salvo amortização ou aquisição previstas no pacto, pelo valor que a lei manda apurar. O escritório não promete um preço.",
        "Exclusão e exoneração não são uma compra livre. O valor da quota segue critérios legais e as regras do pacto que a lei deixe valer. Fixar um múltiplo de faturação, ou assegurar que a sociedade tem dinheiro para pagar, seria inexato. O escritório revê os factos, organiza a deliberação ou o pedido e acompanha o registo devido.",
      ],
      help: [
        "Distinguir cessão de quota existente e entrada por aumento de capital.",
        "Ver se o pacto prevê amortização, exclusão, exoneração ou regras para a morte.",
        "Organizar a deliberação, o título e o registo da nova composição social.",
        "Explicar como o valor se apura quando a lei o impõe, sem avançar um preço de compra.",
      ],
      docsLead: "A composição social registada é o ponto de partida. O que se combina fora dela não substitui o título nem a ata.",
      docs: [
        "Pacto, certidão comercial e lista atual de sócios e de quotas.",
        "Proposta de cessão ou de aumento, com o valor de entrada ou de transmissão.",
        "Atas relevantes e correspondência sobre a saída, a exclusão ou a morte.",
        "Documentos dos herdeiros, se a quota se transmite por sucessão.",
        "Contas ou balanço recentes, se for preciso discutir o valor da quota nos termos legais.",
      ],
      steps: [
        {
          title: "Caminho",
          text: "Identificamos se o caso é cessão, aumento, exclusão, exoneração ou sucessão.",
        },
        {
          title: "Regras",
          text: "Lemos o pacto e a lei sobre preferência, consentimento, causa e valor.",
        },
        {
          title: "Título",
          text: "Organizamos a deliberação e os documentos, sem fixar um preço que a lei não confirme.",
        },
        {
          title: "Registo",
          text: "Acompanhamos o registo da nova posição. A conservatória decide se os elementos chegam.",
        },
      ],
      faqs: [
        {
          q: "A sociedade é obrigada a comprar a quota pelo valor que eu indicar?",
          a: "A compra pela sociedade, a amortização ou a aquisição pelos outros sócios só cabem quando a lei e o pacto as preveem, ou quando todos acordam uma cessão. O valor, quando a lei o fixa, não é o preço que uma das partes escolhe sozinha. Pode ser preciso avaliar. O escritório não avança um preço nem assegura liquidez para pagar.",
        },
        {
          q: "Se um sócio morre, a quota passa aos herdeiros?",
          a: "Em regra a quota transmite-se por sucessão, e os herdeiros têm de provar essa qualidade. O pacto pode prever a amortização ou a aquisição pelos sócios sobreviventes, com o contravalor que a lei determina. Enquanto isso não estiver feito e registado, a composição social não deve ser dada como mudada. O escritório revê o pacto e os documentos da herança.",
        },
        {
          q: "A exclusão decide-se numa conversa entre os outros sócios?",
          a: "A exclusão é uma medida grave. Depende de causa prevista na lei ou no pacto e do procedimento correspondente, que pode incluir deliberação ou tribunal, conforme o caso. Uma conversa não substitui esse procedimento, e o sócio visado tem defesa. O escritório organiza os factos e a forma exigida. Não descreve a exclusão como um resultado já adquirido.",
        },
      ],
      ctaTitle: "Um sócio vai entrar, sair, ser excluído, ou faleceu?",
      ctaLead: "A análise distingue o título, o pacto e o valor legal, e não promete um preço de saída.",
      message: "Olá, gostaria de marcar uma consulta sobre a entrada ou a saída de sócios.",
    },
    {
      bannerTitle: "Entry and exit of partners",
      introTitle: "Joining and leaving are documented acts, not a corridor arrangement",
      intro: [
        "A partner joins by transfer of an existing quota or by subscription of new quotas in a capital increase. On a transfer, another partner is the transferor, with its own pre-emption and registration. On an increase, the company creates quotas, the current partners may have pre-emption, and the capital is resolved and registered. A message or a payment without a document makes no one a partner.",
        "Leaving has no single form either. The partner may transfer the quota, may be excluded for a serious ground set by the law or the articles, or may withdraw where the law gives that right. Death does not erase the quota. The heirs succeed unless the articles provide otherwise. Any sum follows the value the law requires. The office does not promise a price.",
        "Exclusion and withdrawal are not an open purchase. The value of the quota follows legal criteria and those rules of the articles that the law allows to stand. Setting a multiple of turnover, or assuring that the company has the money to pay, would be inaccurate. The office reviews the facts, organises the resolution or the application and follows the registration that is due.",
      ],
      help: [
        "Separate a transfer of an existing quota from entry through a capital increase.",
        "See whether the articles provide for redemption, exclusion, withdrawal or rules on death.",
        "Organise the resolution, the document and registration of the new ownership.",
        "Explain how value is worked out where the law requires it, without putting forward a purchase price.",
      ],
      docsLead: "The registered list of partners is the starting point. What is agreed outside it does not replace the document or the minutes.",
      docs: [
        "The articles, a commercial certificate and the current list of partners and quotas.",
        "A proposal for transfer or for an increase, with the amount to be paid in or the transfer figure.",
        "Relevant minutes and correspondence about the exit, the exclusion or the death.",
        "Documents showing who the heirs are, if the quota passes by succession.",
        "Recent accounts or a balance sheet, if the legal value of the quota has to be discussed.",
      ],
      steps: [
        {
          title: "Route",
          text: "We identify whether the case is a transfer, an increase, exclusion, withdrawal or succession.",
        },
        {
          title: "Rules",
          text: "We read the articles and the law on pre-emption, consent, grounds and value.",
        },
        {
          title: "Document",
          text: "We organise the resolution and the papers, without fixing a price the law does not confirm.",
        },
        {
          title: "Registration",
          text: "We follow registration of the new position. The registry decides whether the papers are enough.",
        },
      ],
      faqs: [
        {
          q: "Must the company buy my quota at the figure I name?",
          a: "A purchase by the company, a redemption or a purchase by the other partners is available only where the law and the articles provide for it, or where everyone agrees a transfer. A valuation may be required. The office explains the mechanism. It does not put forward a price or assure that there is money to pay.",
        },
        {
          q: "If a partner dies, does the quota pass to the heirs?",
          a: "As a rule the quota passes by succession, and the heirs must prove that status. The articles may provide for redemption or for acquisition by the surviving partners, at the value the law determines. Until that is done and registered, the list of partners should not be treated as changed. Death is not, by itself, an exit.",
        },
        {
          q: "Can the other partners decide an exclusion in a conversation?",
          a: "Exclusion is a serious step. It depends on a ground set by the law or the articles and on the matching procedure, which may include a resolution or a court, according to the case. A conversation does not replace that procedure, and the partner concerned has a defence. Exclusion is not a result already secured.",
        },
      ],
      ctaTitle: "Is a partner joining, leaving, facing exclusion, or has a partner died?",
      ctaLead: "The review separates the document, the articles and the legal value, and it does not promise an exit price.",
      message: "Hello, I would like to book a consultation about partners joining or leaving a company.",
    },
  ),
  [key("gerentes")]: topicDetail(
    {
      pt: "Nomeação e renúncia de gerentes numa sociedade por quotas: deliberação, aceitação, registo comercial e responsabilidade pessoal só nos casos previstos.",
      en: "Appointment and resignation of managers in a private limited company: resolution, acceptance, commercial registration, and personal liability only in the cases the law provides.",
    },
    {
      bannerTitle: "Nomeação e renúncia de gerentes",
      introTitle: "Gerir exige aceitação e registo. A responsabilidade pessoal não é automática",
      intro: [
        "Na sociedade por quotas, os gerentes são nomeados no pacto ou por deliberação posterior dos sócios. A nomeação não se impõe a quem não a aceitou: a aceitação consta da ata ou de declaração escrita. Sem aceite e sem registo, a sociedade pode apresentar como gerente quem não tem poderes oponíveis a terceiros. O escritório revê a deliberação, a aceitação e a identificação, e organiza o pedido na conservatória.",
        "A renúncia comunica-se por escrito à sociedade e deve ser registada, tal como a cessação por destituição. Se a saída deixar a sociedade sem gerente, a lei pode diferir os efeitos para os sócios nomearem substituto. Tratar a carta como bastante no próprio dia, sem confirmar essa regra, pode deixar atos por cobertura. O escritório verifica o que se aplica e acompanha o registo da cessação e da nova nomeação.",
        "O gerente administra e não é devedor automático das dívidas sociais. A responsabilidade pessoal existe nos casos que a lei prevê, por violação de deveres com culpa e, em certas situações, quando se perde metade do capital e não são promovidas as medidas legais. O escritório analisa o caso e não afirma que todo o passivo recai sobre o gerente, nem que a responsabilidade está afastada.",
      ],
      help: [
        "Preparar a deliberação de nomeação ou de destituição e recolher a aceitação.",
        "Registar a nomeação, a renúncia ou a cessação na conservatória.",
        "Ver o que sucede se a sociedade ficar sem gerente e que atos ficam por cobertura.",
        "Explicar, no caso concreto, quando a lei admite responsabilidade pessoal, sem a alargar a todas as dívidas.",
      ],
      docsLead: "A conservatória pede prova da deliberação e da aceitação, e dados de identificação de quem entra ou sai da gerência.",
      docs: [
        "Pacto e certidão onde conste a gerência atual.",
        "Ata ou deliberação escrita de nomeação, destituição ou tomada de conhecimento da renúncia.",
        "Declaração de aceitação, se não estiver na própria ata.",
        "Carta de renúncia e prova de que a sociedade a recebeu.",
        "Identificação e número fiscal do gerente, e morada para o registo.",
      ],
      steps: [
        {
          title: "Deliberação",
          text: "Confirmamos quem pode nomear ou destituir e se a maioria foi a exigida.",
        },
        {
          title: "Aceitação ou renúncia",
          text: "Reunimos a aceitação escrita ou a comunicação de renúncia, e vemos se a sociedade fica sem gerente.",
        },
        {
          title: "Registo",
          text: "Organizamos e acompanhamos o registo comercial. A inscrição depende do conservador.",
        },
        {
          title: "Deveres",
          text: "Separamos os deveres do cargo, incluindo perda grave de capital e deveres fiscais, da ideia de que toda a dívida é pessoal.",
        },
      ],
      faqs: [
        {
          q: "Um gerente que não é sócio responde da mesma forma?",
          a: "Os deveres de cuidado e de lealdade ligam-se à função, e não à qualidade de sócio. Quem gere sem quota continua sujeito a esses deveres e ao registo da nomeação. A responsabilidade pessoal, quando existe, resulta da lei e dos factos, e não de o gerente estar ou não no capital. O escritório distingue função, registo e pressupostos de responsabilidade.",
        },
        {
          q: "A renúncia produz efeitos no dia da carta?",
          a: "A comunicação escrita é o modo de renunciar, mas o efeito pode não ser imediato se a sociedade ficar sem gerente. A lei prevê, nesses casos, uma solução que permite nomear substituto. Enquanto a cessação não for registada, terceiros podem continuar a considerar gerente quem já saiu. O escritório confirma o momento relevante e prepara o registo.",
        },
        {
          q: "Nomear gerente dá direito a residir em Portugal?",
          a: "A nomeação é um ato societário, sujeito a aceitação e a registo comercial. Um visto ou uma autorização de residência segue um procedimento próprio e uma decisão da autoridade competente. O número fiscal, muitas vezes necessário ao registo de um gerente estrangeiro, também não é autorização de permanência.",
        },
      ],
      ctaTitle: "É preciso nomear, substituir ou registar a renúncia de um gerente?",
      ctaLead: "A análise confirma a deliberação, a aceitação e o registo, e não trata a responsabilidade pessoal como regra geral.",
      message: "Olá, gostaria de marcar uma consulta sobre a nomeação ou a renúncia de gerentes.",
    },
    {
      bannerTitle: "Appointment and resignation of managers",
      introTitle: "Management needs acceptance and registration. Personal liability is not automatic",
      intro: [
        "In a private limited company, managers are appointed in the contract or by a later resolution of the partners. They may be partners or third parties. The appointment does not bind a person who has not accepted it: acceptance appears in the minutes or in a written statement. Without acceptance and registration, the company may present as manager someone whose powers third parties need not recognise.",
        "Resignation is given in writing to the company and should be registered, as should removal. If the departure would leave the company with no manager, the law may postpone the effect so that the partners can appoint a replacement. Treating the letter as enough on the same day, without checking that rule, can leave acts uncovered. The registrar assesses the filing.",
        "The manager runs the company and is not an automatic debtor for company debts. Personal liability exists in the cases the law provides, for breach of duties with fault and, in some situations, where half the share capital is lost and the legal measures are not taken. The office looks at the facts and does not say that every liability falls on the manager, nor that liability is excluded.",
      ],
      help: [
        "Prepare the resolution of appointment or removal and collect acceptance.",
        "Register the appointment, the resignation or the cessation at the commercial registry.",
        "See what follows if the company is left with no manager, and which acts are left uncovered.",
        "Explain, on the facts, when the law allows personal liability, without extending it to every debt.",
      ],
      docsLead: "The registry asks for proof of the resolution and of acceptance, and for identification of the person joining or leaving management.",
      docs: [
        "The articles and a certificate showing the current managers.",
        "Minutes or a written resolution of appointment, removal or acknowledgement of the resignation.",
        "A statement of acceptance, if it is not already in the minutes.",
        "The letter of resignation and proof that the company received it.",
        "Identification and tax number of the manager, and an address for the register.",
      ],
      steps: [
        {
          title: "Resolution",
          text: "We check who may appoint or remove, and whether the majority was the one required.",
        },
        {
          title: "Acceptance or resignation",
          text: "We gather written acceptance or the notice of resignation, and we see whether the company is left with no manager.",
        },
        {
          title: "Registration",
          text: "We organise and follow the commercial registration. Entry on the register depends on the registrar.",
        },
        {
          title: "Duties",
          text: "We separate the duties of the office, including a serious loss of capital and tax duties, from the idea that every debt is personal.",
        },
      ],
      faqs: [
        {
          q: "Is a manager who is not a partner liable in the same way?",
          a: "Duties of care and loyalty attach to the function, not to being a partner. A person who manages without a quota remains subject to those duties and to registration of the appointment. Personal liability, where it exists, comes from the law and the facts, not from whether the manager holds capital. It also does not arise from every unpaid invoice.",
        },
        {
          q: "Does resignation take effect on the day of the letter?",
          a: "Written notice is how a manager resigns, but the effect may not be immediate if the company would be left with no manager. Until cessation is registered, third parties may still treat as manager a person who has already left. The office checks the relevant time and prepares the filing. It does not give one date for every case.",
        },
        {
          q: "Does appointment as manager give a right to live in Portugal?",
          a: "The appointment is a company act. A visa or a residence permit follows its own procedure and a decision of the competent authority. A tax number, often needed to register a foreign manager, is not a permission to stay. The office keeps the two matters apart and does not present management as a route to regularise stay.",
        },
      ],
      ctaTitle: "Do you need to appoint, replace or register the resignation of a manager?",
      ctaLead: "The review checks the resolution, the acceptance and the registration, and it does not treat personal liability as the general rule.",
      message: "Hello, I would like to book a consultation about the appointment or resignation of managers.",
    },
  ),
  [key("dissolucao")]: topicDetail(
    {
      pt: "Dissolução e liquidação de sociedades, distintas da insolvência. O encerramento depende de credores, finanças e registo. Não há prazo garantido.",
      en: "Dissolution and liquidation of companies, distinct from insolvency. Closure depends on creditors, tax and the registry. No time is guaranteed.",
    },
    {
      bannerTitle: "Dissolução e liquidação",
      introTitle: "Dissolver abre a liquidação. Não apaga a sociedade nem as dívidas",
      intro: [
        "Dissolver uma sociedade não a faz desaparecer no dia da deliberação. A dissolução abre a liquidação, e a personalidade mantém-se para esse fim. Os liquidatários, que podem ser os gerentes ou outras pessoas nomeadas, levantam o ativo, cobram créditos, pagam credores e só depois apuram o que houver para os sócios. O encerramento da liquidação é que se regista como termo. O escritório não fixa uma data de fecho.",
        "A dissolução voluntária assenta numa deliberação com a maioria que a lei e o pacto exigem, ou numa causa prevista, como o decurso do prazo. Há também dissolução judicial, reservada a situações graves que a lei indica. Nenhuma destas vias serve para abandonar dívidas. Se os bens não chegam para os credores, o caminho pode ser a insolvência, processo judicial próprio, e não uma liquidação com o mesmo nome.",
        "A insolvência, no Código da Insolvência e da Recuperação de Empresas, supõe que a sociedade não cumpre obrigações vencidas ou que o passivo excede de forma clara o ativo, nos termos legais. Os gerentes que conhecem essa situação têm o dever de a apresentar em juízo no prazo que a lei conta. Esse prazo não é uma duração prometida para a liquidação voluntária. O tribunal decide o processo judicial.",
      ],
      help: [
        "Confirmar se o caso é dissolução voluntária, dissolução judicial ou insolvência.",
        "Organizar a deliberação, a nomeação de liquidatário e o registo da dissolução.",
        "Orientar a liquidação quanto a credores, finanças, Segurança Social e partilha do remanescente.",
        "Acompanhar o registo de encerramento, sem indicar uma data em que a sociedade estará extinta.",
      ],
      docsLead: "Contas, dívidas e o pacto decidem se a liquidação voluntária é sequer o caminho. Um extrato verbal não chega.",
      docs: [
        "Pacto, certidão comercial e ata de dissolução, ou o projeto dessa ata.",
        "Lista de credores, contratos de trabalho e obrigações fiscais e contributivas conhecidas.",
        "Contas recentes e inventário dos bens, ainda que provisório.",
        "Identificação de quem será liquidatário e aceitação do cargo.",
        "Comprovativo de dívidas já pagas ou de acordos, se existirem, para não distribuir antes de tempo.",
      ],
      steps: [
        {
          title: "Enquadramento",
          text: "Vemos se a sociedade pode liquidar em termos voluntários ou se os factos apontam para insolvência.",
        },
        {
          title: "Deliberação",
          text: "Organizamos a dissolução, a nomeação do liquidatário e a menção de que a sociedade fica em liquidação.",
        },
        {
          title: "Liquidação",
          text: "Acompanhamos a cobrança, o pagamento dos credores e as comunicações à Autoridade Tributária e à Segurança Social.",
        },
        {
          title: "Encerramento",
          text: "Preparamos o registo do encerramento quando os atos o permitirem. A data resulta desses atos, não de um calendário.",
        },
      ],
      faqs: [
        {
          q: "Podemos fechar a empresa depressa se já não há atividade?",
          a: "A falta de atividade não dispensa a liquidação. É preciso deliberar, nomear quem liquida, tratar de credores, da Autoridade Tributária, da Segurança Social e do registo do encerramento. Qualquer passo pode exigir correções ou tempo que não depende do escritório. O escritório organiza a sequência possível com os saldos conhecidos. A data de fecho resulta desses atos.",
        },
        {
          q: "Dissolução e insolvência tratam-se no mesmo balcão?",
          a: "A dissolução e a liquidação voluntárias correm, no essencial, entre os sócios, o liquidatário, o registo comercial e a administração fiscal e contributiva. A insolvência é decretada pelo tribunal, no código próprio, e pode implicar um administrador de insolvência. O escritório verifica o quadro antes de redigir atas. No processo judicial, a palavra final é do tribunal.",
        },
        {
          q: "Os sócios recebem o que sobra no dia da dissolução?",
          a: "O que houver para os sócios apura-se no fim da liquidação, depois de os credores estarem pagos ou acautelados, segundo o pacto e a lei. A deliberação de dissolver não é uma distribuição. Adiantar valores com dívidas por liquidar pode ter de ser reposto e pode ter efeitos fiscais. O escritório não calcula um valor a receber nem o garante.",
        },
      ],
      ctaTitle: "A sociedade vai dissolver-se, liquidar-se ou já não consegue pagar?",
      ctaLead: "A análise distingue liquidação e insolvência e não marca uma data para o encerramento.",
      message: "Olá, gostaria de marcar uma consulta sobre a dissolução e a liquidação de uma sociedade.",
    },
    {
      bannerTitle: "Dissolution and liquidation",
      introTitle: "Dissolution opens the liquidation. It does not erase the company or the debts",
      intro: [
        "Dissolving a company does not make it disappear on the day of the resolution. Dissolution opens the liquidation, and legal personality continues for that purpose. The liquidators collect the assets, pay the creditors and then see what is left for the partners. The closure is registered as the end. The office does not fix a closing date.",
        "Voluntary dissolution rests on a resolution with the majority the law and the articles require, or on a ground they provide, such as expiry of the term. There is also judicial dissolution, reserved for serious situations the law sets out. If the assets do not cover the creditors, the route may be insolvency, a court process of its own, and not a liquidation under the same name.",
        "Insolvency, under the Insolvency and Company Recovery Code, supposes that the company cannot meet obligations that have fallen due, or that the liabilities clearly exceed the assets, on the legal tests. Managers who know of that situation have a duty to present it to the court within the period the law counts. That period is not a promised length for a voluntary liquidation. The court decides the judicial process.",
      ],
      help: [
        "Confirm whether the case is voluntary dissolution, judicial dissolution or insolvency.",
        "Organise the resolution, the appointment of a liquidator and registration of the dissolution.",
        "Guide the liquidation as to creditors, tax, social security and any surplus for the partners.",
        "Follow the closing registration, without stating a date on which the company will have ceased.",
      ],
      docsLead: "The accounts, the debts and the articles decide whether a voluntary liquidation is even the route. A spoken summary is not enough.",
      docs: [
        "The articles, a commercial certificate and the dissolution minutes, or a draft of those minutes.",
        "A list of creditors, employment contracts and known tax and social-security liabilities.",
        "Recent accounts and an inventory of assets, even if provisional.",
        "Identification of the intended liquidator and acceptance of the office.",
        "Proof of debts already paid or of agreements, if any, so that nothing is distributed too soon.",
      ],
      steps: [
        {
          title: "The frame",
          text: "We see whether the company can wind up voluntarily or whether the facts point to insolvency.",
        },
        {
          title: "Resolution",
          text: "We organise the dissolution, the appointment of the liquidator and the statement that the company is in liquidation.",
        },
        {
          title: "Liquidation",
          text: "We follow collection, payment of creditors and notices to the tax authority and to social security.",
        },
        {
          title: "Closure",
          text: "We prepare the closing registration when the steps allow it. The date follows those steps, not a timetable.",
        },
      ],
      faqs: [
        {
          q: "Can we close the company quickly if it no longer trades?",
          a: "Lack of activity does not remove the need for a liquidation. There must be a resolution, a liquidator, attention to creditors, the tax authority, social security and registration of the closure. Any step may need corrections or time that does not depend on the office. That is why no duration is stated. The closing date follows those steps.",
        },
        {
          q: "Are dissolution and insolvency handled at the same counter?",
          a: "Voluntary dissolution and liquidation run, in substance, among the partners, the liquidator, the commercial registry and the tax and social-security authorities. Insolvency is ordered by the court, under its own code, and may involve an insolvency administrator. The office checks the frame before drafting minutes. In a court process, the court has the last word.",
        },
        {
          q: "Do the partners receive what is left on the day of dissolution?",
          a: "Whatever is left for the partners is worked out at the end of the liquidation, after creditors are paid or provided for, under the articles and the law. The resolution to dissolve is not a distribution. The office reviews the accounts it is given and organises the resolutions. It does not calculate a sum to be received or assure it.",
        },
      ],
      ctaTitle: "Is the company to be dissolved, wound up, or already unable to pay?",
      ctaLead: "The review distinguishes liquidation from insolvency and does not set a date for closure.",
      message: "Hello, I would like to book a consultation about dissolution and liquidation of a company.",
    },
  ),
  [key("atas-deliberacoes")]: topicDetail(
    {
      pt: "Atas, deliberações escritas e documentação societária. As formalidades condicionam os registos posteriores na conservatória.",
      en: "Minutes, written resolutions and corporate records. The formalities affect later filings at the commercial registry.",
    },
    {
      bannerTitle: "Atas e deliberações",
      introTitle: "O que não fica escrito com as formalidades certas dificilmente se regista",
      intro: [
        "As decisões dos sócios provam-se por ata ou por deliberação unânime escrita, quando a lei admite essa forma. Uma troca de mensagens pode explicar o que se quis e, ainda assim, não servir para nomear um gerente, alterar o pacto ou pedir um registo. O escritório revê esses requisitos no pacto e no Código das Sociedades Comerciais antes de dar o texto como bastante.",
        "A reunião pode ser uma assembleia convocada com a antecedência e a forma que o pacto e a lei indicam, ou uma assembleia universal, se todos estiverem presentes ou representados e aceitarem reunir sem formalidades prévias. Se um sócio a recusa, há que reunir. Os procuradores precisam de poderes bastantes. O escritório organiza a convocatória ou a via escrita e não trata uma presença parcial como unanimidade.",
        "A ata deve identificar a sociedade, a data, quem participou, o que foi proposto e o que ficou deliberado, e deve ser assinada por quem a lei e o pacto designam. Mais tarde, o registo de um consentimento, de uma nomeação ou de uma dissolução apoia-se nesse texto. Uma ata incompleta atrasa o pedido ou conduz à recusa. O escritório redige e confere. A aceitação no registo depende do conservador.",
      ],
      help: [
        "Escolher entre assembleia convocada, assembleia universal e deliberação unânime por escrito.",
        "Confirmar quórum, maioria e o acordo do sócio quando a decisão lhe agrava deveres.",
        "Redigir a ata com o teor que um registo posterior possa usar.",
        "Organizar o arquivo de atas, procurações e deliberações, para não reconstruir o passado de memória.",
      ],
      docsLead: "Uma deliberação só se leva à conservatória se a forma, as presenças e as assinaturas estiverem completas.",
      docs: [
        "Pacto social, para ler convocação, maiorias e quem assina.",
        "Lista de sócios, quotas e moradas ou meios de contacto usados para convocar.",
        "Procurações, se algum sócio for representado.",
        "Minuta da proposta, para a ata refletir o que vai ser votado.",
        "Livro de atas ou atas anteriores, para manter sequência e não repetir um número.",
      ],
      steps: [
        {
          title: "Forma",
          text: "Vemos se o caso cabe em reunião universal, em assembleia convocada ou em deliberação escrita unânime.",
        },
        {
          title: "Maioria",
          text: "Confrontamos presenças e votos com o pacto e com a lei, antes de dar a deliberação como tomada.",
        },
        {
          title: "Texto",
          text: "Redigimos a ata com o teor, as assinaturas e a data que o registo posterior vai exigir.",
        },
        {
          title: "Arquivo",
          text: "Organizamos a conservação do documento. Um registo futuro depende de o texto existir e estar conforme.",
        },
      ],
      faqs: [
        {
          q: "Dois sócios podem decidir por mensagens, sem ata?",
          a: "Podem entender-se por mensagem, mas a prova societária e o registo pedem uma forma. Se todos concordarem, a lei admite em muitos casos uma deliberação unânime por escrito, assinada por cada um. Sem a assinatura de um deles, a via escrita não está preenchida. O escritório prepara o documento adequado. Não considera a mensagem, por si, uma ata.",
        },
        {
          q: "Uma ata antiga serve para um registo pedido agora?",
          a: "Serve se a deliberação ainda for a que se pretende registar, se tiver sido bem tomada e se os outros elementos do pedido estiverem atuais. Uma nomeação já substituída, um pacto depois alterado ou uma ata sem as assinaturas exigidas não deve ser reutilizada por hábito. Há prazos de registo que convém verificar, porque a lei liga efeitos à demora.",
        },
        {
          q: "Quem não é gerente pode assinar a ata?",
          a: "A ata da reunião é assinada por quem presidiu e por quem secretariou, ou pelas pessoas que o pacto e a lei indiquem, e não necessariamente pelo gerente. Confundir as duas assinaturas é uma causa de documentos recusados. O escritório indica quem assina em cada documento e revê o texto antes do envio à conservatória.",
        },
      ],
      ctaTitle: "Falta uma ata, ou há uma deliberação por registar?",
      ctaLead: "A análise confirma a forma, a maioria e as assinaturas antes de qualquer pedido à conservatória.",
      message: "Olá, gostaria de marcar uma consulta sobre atas e deliberações societárias.",
    },
    {
      bannerTitle: "Minutes and resolutions",
      introTitle: "What is not written with the right formalities is hard to register",
      intro: [
        "Decisions of the partners are proved by minutes or by a unanimous written resolution, where the law allows that form. An exchange of messages may explain what was intended and still be useless to appoint a manager, amend the articles or support a filing. The office reviews those requirements in the articles and in the Portuguese Companies Code before treating the text as sufficient.",
        "The meeting may be a general meeting called with the notice and in the form the articles and the law indicate, or a universal meeting, if everyone is present or represented and agrees to meet without prior formalities. If one partner refuses it, a meeting is required. Proxies need sufficient authority. The office organises the notice or the written route and does not treat a partial attendance as unanimity.",
        "The minutes should identify the company, the date, who took part, what was proposed and what was resolved, and they should be signed by the persons the law and the articles name. They are kept in a book or as separate minutes, in the form allowed. Later, registration of a consent, of an appointment or of a dissolution rests on that text. Acceptance on the register depends on the registrar.",
      ],
      help: [
        "Choose among a called meeting, a universal meeting and a unanimous written resolution.",
        "Check the quorum, the majority and the consent of a partner whose duties the decision increases.",
        "Draft the minutes with the content a later registration can use.",
        "Organise the file of minutes, proxies and resolutions, so the past is not rebuilt from memory.",
      ],
      docsLead: "A resolution is taken to the registry only if the form, the attendances and the signatures are complete.",
      docs: [
        "The articles, so that notice, majorities and signatories can be read from them.",
        "A list of partners, quotas and the addresses or contact details used to call the meeting.",
        "Proxies, if a partner is represented.",
        "A draft of the proposal, so the minutes reflect what will be voted.",
        "The minute book or earlier minutes, so the sequence is kept and a number is not repeated.",
      ],
      steps: [
        {
          title: "Form",
          text: "We see whether the case fits a universal meeting, a called meeting or a unanimous written resolution.",
        },
        {
          title: "Majority",
          text: "We compare attendance and votes with the articles and the law before treating the resolution as passed.",
        },
        {
          title: "Text",
          text: "We draft the minutes with the content, the signatures and the date that a later filing will need.",
        },
        {
          title: "Records",
          text: "We organise keeping the document. A future filing depends on the text existing and being in order.",
        },
      ],
      faqs: [
        {
          q: "Can two partners decide by messages, with no minutes?",
          a: "They may reach an understanding by message, but company proof and the registry ask for a form. If everyone agrees, the law often allows a unanimous written resolution, signed by each partner. That is not a chat history, which may be incomplete. The office prepares the proper document. It does not treat the message, on its own, as minutes.",
        },
        {
          q: "Will old minutes support a filing made now?",
          a: "They will if the resolution is still the one to be registered, if it was properly passed and if the other elements of the filing are current. An appointment already replaced, articles amended since, or minutes without the required signatures should not be reused out of habit. There are registration periods worth checking, because the law attaches effects to delay.",
        },
        {
          q: "Can someone who is not a manager sign the minutes?",
          a: "Minutes of the meeting are signed by the person who chaired and by the person who acted as secretary, or by the persons the articles and the law indicate, and not necessarily by the manager. The manager signs the management acts that fall to that office. Mixing the two signatures is a cause of documents being refused.",
        },
      ],
      ctaTitle: "Are minutes missing, or is there a resolution still to register?",
      ctaLead: "The review checks the form, the majority and the signatures before any filing at the registry.",
      message: "Hello, I would like to book a consultation about minutes and corporate resolutions.",
    },
  ),
  [key("conflitos-socios")]: topicDetail(
    {
      pt: "Conflitos entre sócios: informação, bloqueio, abuso do voto e dissolução judicial só nos casos graves previstos na lei. Sem promessa de resultado.",
      en: "Disputes between partners: information, deadlock, abuse of votes and judicial dissolution only in the serious cases the law provides. No outcome is promised.",
    },
    {
      bannerTitle: "Conflitos entre sócios",
      introTitle: "O desacordo aprecia-se pelo pacto, pelas atas e pela lei, não pela força do voto",
      intro: [
        "Um diferendo entre sócios começa pelo pacto, pelas atas e pela correspondência. O direito à informação permite consultar documentos e pedir esclarecimentos, com os limites da lei. Não é um direito a gerir no dia a dia. Se a informação é recusada sem fundamento, há meios para a exigir. O escritório organiza o passo seguinte sem o apresentar como ganho.",
        "O bloqueio surge com frequência quando nenhum lado reúne a maioria, sobretudo com dois sócios e quotas iguais. O pacto pode ter uma saída negociada. Se não tiver, o desacordo sobre a gestão corrente não extingue, por si, a sociedade. A impossibilidade prolongada de deliberar, ou o voto com abuso, pode ter relevância nos termos da lei. O escritório qualifica o caso. Não promete a anulação de uma deliberação.",
        "A dissolução judicial é um pedido ao tribunal, admissível apenas nas situações graves que a lei prevê, como a impossibilidade de realizar o objeto ou certos bloqueios e violações com os pressupostos legais. Impugnar uma deliberação depende de a mesma ser nula ou anulável e de o prazo próprio ainda estar aberto. O escritório organiza os factos e acompanha a ação, se a houver. A decisão pertence ao tribunal.",
      ],
      help: [
        "Ler o pacto, as atas e a correspondência antes de qualificar o conflito.",
        "Formular um pedido de informação concreto, dentro dos limites legais.",
        "Ver se há bloqueio, abuso do voto, cláusula de resolução de impasses ou via arbitral.",
        "Preparar uma impugnação ou um pedido de dissolução judicial só quando os pressupostos legais se verificam, sem antecipar o resultado.",
      ],
      docsLead: "Sem atas e sem o pacto, o conflito descreve-se de memória. O tribunal e a outra parte vão pedir os documentos.",
      docs: [
        "Pacto social e alterações registadas, incluindo cláusulas de impasse ou de arbitragem.",
        "Atas das deliberações em causa e convocatórias.",
        "Pedidos de informação e as respostas, ou a prova da falta de resposta.",
        "Contas, balanços e correspondência entre sócios sobre o diferendo.",
        "Identificação das quotas e de quem vota, para perceber maiorias e bloqueios.",
      ],
      steps: [
        {
          title: "Documentos",
          text: "Reunimos pacto, atas e correspondência e separamos o que está provado do que é versão de uma parte.",
        },
        {
          title: "Qualificação",
          text: "Vemos se o caso é de informação, de deliberação impugnável, de bloqueio ou de causa grave de dissolução.",
        },
        {
          title: "Via",
          text: "Organizamos o contacto, a negociação ou a peça, conforme o pacto e os prazos ainda abertos.",
        },
        {
          title: "Decisão",
          text: "Se houver ação, acompanhamos o processo. O resultado é do tribunal, ou das partes se acordarem.",
        },
      ],
      faqs: [
        {
          q: "O sócio com pouca quota pode exigir toda a correspondência da gerência?",
          a: "Pode pedir informação sobre a gestão e consultar documentos da sociedade, no quadro que a lei define. Esse quadro não cobre, sem mais, a correspondência pessoal nem dados cuja divulgação seja abusiva ou alheia à fiscalização do sócio. O escritório não assegura o acesso a todo o arquivo pelo facto de existir uma quota.",
        },
        {
          q: "Quotas iguais significam que a sociedade se dissolve?",
          a: "A igualdade de quotas explica o bloqueio, mas não determina a dissolução. A dissolução judicial exige os pressupostos graves que a lei indica e uma decisão do tribunal. Muitos impasses resolvem-se por cessão, por alteração do pacto ou por uma deliberação que um dos lados viabiliza. Enquanto isso, a sociedade continua e os gerentes mantêm os deveres do cargo.",
        },
        {
          q: "Uma deliberação que me prejudica pode ser desfeita?",
          a: "Pode ser impugnada se for nula ou anulável nos termos da lei, por exemplo quando faltam formalidades essenciais ou quando o voto é abusivo no sentido legal. Há prazos, que dependem do vício, e o escritório verifica se ainda estão abertos, em vez de indicar um número genérico. A procedência, se o caso chegar a tribunal, é decidida pelo tribunal.",
        },
      ],
      ctaTitle: "Há um bloqueio, uma recusa de informação ou uma deliberação contestada?",
      ctaLead: "A análise parte dos documentos e dos pressupostos legais, e não antecipa a decisão do tribunal.",
      message: "Olá, gostaria de marcar uma consulta sobre um conflito entre sócios.",
    },
    {
      bannerTitle: "Disputes between partners",
      introTitle: "Disagreement is assessed from the articles, the minutes and the law",
      intro: [
        "A dispute between partners starts from the facts and the documents: the articles, the minutes, the accounts and the correspondence. The right to information allows a partner to consult records of the company life and to ask the managers for explanations, on the terms and within the limits the law draws. The office reviews the request and the reply, and organises the next step without presenting it as a win.",
        "Deadlock often appears when neither side has a majority, especially with two partners and equal quotas. If the articles give no way out, ordinary disagreement does not, by itself, end the company. A lasting inability to pass resolutions, or an abusive vote, may matter under the law. The office qualifies the case. It does not promise that a resolution will be set aside.",
        "Judicial dissolution is an application to the court, available only in the serious situations the law provides, such as impossibility of achieving the object or certain deadlocks and breaches that meet the legal conditions. It is not the remedy for a one-off disagreement. Exclusion of a partner is equally exceptional. The office organises the facts and follows the claim, if one is brought. The decision belongs to the court.",
      ],
      help: [
        "Read the articles, the minutes and the correspondence before qualifying the dispute.",
        "Frame a concrete request for information, within the legal limits.",
        "See whether there is deadlock, abuse of votes, a deadlock clause or an arbitration route.",
        "Prepare a challenge or an application for judicial dissolution only where the legal conditions are present, without anticipating the result.",
      ],
      docsLead: "Without minutes and without the articles, the dispute is told from memory. The court and the other party will ask for the documents.",
      docs: [
        "The articles and registered amendments, including deadlock or arbitration clauses.",
        "Minutes of the resolutions in issue and the notices calling the meetings.",
        "Requests for information and the replies, or proof that no reply was given.",
        "Accounts, balance sheets and correspondence between the partners about the dispute.",
        "Identification of the quotas and of who votes, so that majorities and deadlocks can be seen.",
      ],
      steps: [
        {
          title: "Documents",
          text: "We gather the articles, the minutes and the correspondence, and we separate what is shown from the account of one side.",
        },
        {
          title: "Qualification",
          text: "We see whether the case is about information, a challengeable resolution, deadlock or a serious ground for dissolution.",
        },
        {
          title: "Route",
          text: "We organise the approach, the negotiation or the pleading, according to the articles and the periods still open.",
        },
        {
          title: "Decision",
          text: "If a claim is brought, we follow the proceedings. The outcome is for the court, or for the parties if they settle.",
        },
      ],
      faqs: [
        {
          q: "Can a partner with a small quota demand all management correspondence?",
          a: "A partner may ask for information on the management and consult company documents, within the frame the law sets. That frame does not, without more, cover personal correspondence or data whose disclosure would be abusive or unrelated to partner oversight. The office does not assure access to the whole file merely because a quota exists.",
        },
        {
          q: "Do equal quotas mean the company will be dissolved?",
          a: "Equal quotas explain the deadlock, but they do not determine dissolution. Judicial dissolution requires the serious conditions the law sets out and a decision of the court. Meanwhile the company continues and the managers keep the duties of the office. The office reviews the exits the articles already contain. It does not present dissolution as an automatic step.",
        },
        {
          q: "Can a resolution that harms me be undone?",
          a: "It may be challenged if it is void or voidable under the law, for example where essential formalities are missing or where the vote is abusive in the legal sense. The harm of being outvoted in a regular vote is not enough. If the case reaches court, the court decides whether the claim succeeds.",
        },
      ],
      ctaTitle: "Is there a deadlock, a refusal of information or a resolution under challenge?",
      ctaLead: "The review starts from the documents and the legal conditions, and it does not anticipate the decision of the court.",
      message: "Hello, I would like to book a consultation about a dispute between partners.",
    },
  ),
};
