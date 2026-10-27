import { ManageCookiesButton } from "@/components/CookieBanner";
import PageHero from "@/components/PageHero";
import { FaqJsonLd } from "@/components/StructuredData";
import { site } from "@/config/site";
import { pageMetadata } from "@/i18n/metadata";
import { pathFor } from "@/i18n/routes";
import type { Locale } from "@/i18n/locales";
import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

const h2 = "font-display text-2xl text-navy";

function Prose({ children }: { children: ReactNode }) {
  return <div className="container max-w-3xl space-y-6 text-sm leading-relaxed text-body-color">{children}</div>;
}

export function privacyMetadata(locale: Locale): Metadata {
  return pageMetadata(locale, "privacy", {
    title: locale === "pt" ? "Privacidade" : "Privacy",
    description:
      locale === "pt"
        ? "Política de privacidade do Gabinete Jurídico Laranjeiras: responsável, dados do contacto e do WhatsApp, finalidades, bases legais, conservação e direitos."
        : "Privacy policy of Gabinete Jurídico Laranjeiras: controller, contact and WhatsApp data, purposes, legal bases, retention and rights.",
  });
}

export function PrivacyPolicy({ locale }: { locale: Locale }) {
  const pt = locale === "pt";
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={pt ? "Política de privacidade" : "Privacy policy"}
        description={
          pt
            ? "Como o escritório trata dados pessoais neste sítio e no contacto por formulário, e-mail ou WhatsApp."
            : "How the office handles personal data on this website and when you write by form, email or WhatsApp."
        }
        crumbs={[
          { label: pt ? "Início" : "Home", href: pathFor(locale, "home") },
          { label: pt ? "Privacidade" : "Privacy" },
        ]}
      />
      <section className="py-16">
        <Prose>
          {pt ? <PrivacyPt /> : <PrivacyEn />}
        </Prose>
      </section>
    </>
  );
}

function PrivacyPt() {
  return (
    <>
      <p>
        Esta política explica o tratamento de dados pessoais pelo {site.officeName}, nos termos do Regulamento (UE) 2016/679 (RGPD) e da Lei n.º 58/2019, de 8 de agosto. O texto descreve a prática deste sítio e do primeiro contacto. O mandato, quando exista, pode ser completado por informação dada na carta de compromisso.
      </p>
      <h2 className={h2}>1. Responsável pelo tratamento</h2>
      <p>
        Responsável: {site.officeName}. Advogada responsável: {site.lawyerName}, inscrita na Ordem dos Advogados com a cédula profissional n.º {site.license}.
      </p>
      <p>
        Morada profissional: {site.addressLine}. Telefone e WhatsApp: {site.phoneDisplay}. E-mail: {site.email}. Horário: {site.hours.pt}.
      </p>
      <p>
        Não está nomeado um encarregado de proteção de dados. Os pedidos de exercício de direitos devem ser enviados para o e-mail acima, com informação suficiente para identificar o pedido.
      </p>
      <h2 className={h2}>2. Que dados são tratados</h2>
      <p>Consoante a forma de contacto, podem ser tratados:</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>Identificação e contactos: nome, e-mail, telefone e o conteúdo da mensagem.</li>
        <li>Informação que a pessoa inclui sobre o assunto jurídico, incluindo documentos que envie por sua iniciativa.</li>
        <li>Dados técnicos de navegação tratados pelo alojamento (por exemplo, endereço IP e registos de segurança), pelo tempo necessário à operação e segurança do sítio.</li>
        <li>A escolha de cookies, guardada no browser (armazenamento local), quando a pessoa aceita, recusa ou define preferências.</li>
        <li>Se a pessoa carregar o mapa, dados que a Google trate ao fornecer o Google Maps, incluindo cookies da Google. O mapa não é carregado antes dessa escolha.</li>
      </ul>
      <p>
        O formulário de contacto não envia os dados para um servidor do escritório. Ao submeter, abre o WhatsApp com a mensagem preenchida. Não envie documentos sensíveis por esse formulário.
      </p>
      <h2 className={h2}>3. Finalidades e bases de licitude</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>Responder a pedidos de contacto e preparar diligências pré-contratuais: artigo 6.º, n.º 1, alínea b), do RGPD.</li>
        <li>Prestar serviços jurídicos, quando haja mandato, e cumprir deveres profissionais, fiscais ou de prevenção do branqueamento de capitais, quando aplicáveis: artigo 6.º, n.º 1, alíneas b) e c).</li>
        <li>Segurança do sítio e organização da correspondência recebida: artigo 6.º, n.º 1, alínea f). O interesse é responder com segurança e defender-se de abusos. A pessoa pode opor-se, nos termos do artigo 21.º.</li>
        <li>Carregar o Google Maps: consentimento, artigo 6.º, n.º 1, alínea a), que pode ser retirado a qualquer momento nas preferências de cookies, sem afetar o tratamento anterior.</li>
      </ul>
      <p>O sítio não faz perfis para publicidade nem usa, nesta data, ferramentas de medição de audiência. Se vierem a ser usadas, só o serão com base legal adequada e esta página será atualizada.</p>
      <h2 className={h2}>4. Destinatários</h2>
      <p>Os dados podem ser conhecidos por:</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>Profissionais e colaboradores do escritório que precisem deles para o assunto.</li>
        <li>Alojamento do sítio (Vercel), que trata dados técnicos de operação.</li>
        <li>Meta Platforms, quando a pessoa usa o WhatsApp para contactar o número do escritório. Esse envio decorre da iniciativa da pessoa e está sujeito às condições da Meta.</li>
        <li>Google, apenas se o mapa for carregado.</li>
        <li>Tribunais, autoridades, Ordem dos Advogados ou outras entidades, quando uma obrigação legal ou um dever profissional o exija.</li>
      </ul>
      <p>Não vendemos dados pessoais.</p>
      <h2 className={h2}>5. Transferências para fora do Espaço Económico Europeu</h2>
      <p>
        O alojamento, o WhatsApp e o Google Maps podem implicar tratamento por entidades fora do EEE. Quando isso acontece, a transferência deve apoiar-se num mecanismo do capítulo V do RGPD, como uma decisão de adequação ou cláusulas contratuais-tipo. A pessoa pode pedir informação adicional sobre essas garantias através do e-mail do escritório.
      </p>
      <h2 className={h2}>6. Conservação</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>Pedidos de contacto que não originam mandato: pelo tempo necessário para responder e, em regra, até 12 meses depois, salvo se um prazo legal ou a defesa de um direito impuser mais tempo.</li>
        <li>Processos de clientes: durante o mandato e, depois, pelo período exigido pelo Estatuto da Ordem dos Advogados, pela legislação fiscal e pelos prazos de prescrição aplicáveis ao assunto. O período concreto é indicado na carta de compromisso, quando exista.</li>
        <li>Registos técnicos do alojamento: pelo período operacional definido pelo prestador, limitado ao necessário para segurança.</li>
        <li>Registo da escolha de cookies: até a pessoa a alterar ou apagar os dados do browser.</li>
      </ul>
      <h2 className={h2}>7. Direitos</h2>
      <p>
        Nos termos dos artigos 15.º a 22.º do RGPD, a pessoa pode pedir acesso, retificação, apagamento, limitação e, quando aplicável, portabilidade, bem como opor-se a tratamentos baseados em interesse legítimo. Quando o tratamento se basear no consentimento, pode retirá-lo. O segredo profissional do advogado pode limitar a informação que pode ser comunicada ou apagada enquanto esse dever se mantiver.
      </p>
      <p>
        Os pedidos são respondidos no prazo de um mês, prorrogável nos termos do artigo 12.º do RGPD. Para os exercer, escreva para {site.email}.
      </p>
      <p>
        Pode apresentar reclamação à Comissão Nacional de Proteção de Dados (CNPD), Av. D. Carlos I, 134, 1.º, 1200-651 Lisboa,{" "}
        <a href="https://www.cnpd.pt/" className="text-gold-dark underline hover:text-navy">
          www.cnpd.pt
        </a>
        . A informação sobre como participar está no sítio da CNPD.
      </p>
      <h2 className={h2}>8. Cookies e mapa</h2>
      <p>
        O detalhe das categorias está na página de{" "}
        <Link href={pathFor("pt", "cookies")} className="text-gold-dark underline hover:text-navy">
          cookies
        </Link>
        . O Google Maps só é incorporado depois de aceitar essa categoria ou de carregar o mapa. A política da Google está em{" "}
        <a href="https://policies.google.com/privacy?hl=pt-PT" className="text-gold-dark underline hover:text-navy">
          policies.google.com/privacy
        </a>
        .
      </p>
      <h2 className={h2}>9. Menores</h2>
      <p>Este sítio não se dirige a crianças. Não recolhemos intencionalmente dados de menores através do formulário. Assuntos que envolvam menores são tratados no quadro do mandato e da lei aplicável.</p>
      <h2 className={h2}>10. Atualizações</h2>
      <p>Esta política pode ser atualizada quando mude o sítio ou o enquadramento legal. A versão publicada nesta página é a que está em vigor.</p>
      <p>{site.disclaimer}</p>
    </>
  );
}

function PrivacyEn() {
  return (
    <>
      <p>
        This policy explains how {site.officeName} handles personal data under Regulation (EU) 2016/679 (GDPR) and Portuguese Law 58/2019 of 8 August. It describes this website and a first contact. Where a mandate exists, the engagement letter may add to this information.
      </p>
      <h2 className={h2}>1. Controller</h2>
      <p>
        Controller: {site.officeName}. Responsible lawyer: {site.lawyerName}, admitted to the Portuguese Bar Association (Ordem dos Advogados), professional licence no. {site.license}.
      </p>
      <p>
        Professional address: {site.addressLine}. Phone and WhatsApp: {site.phoneDisplay}. Email: {site.email}. Hours: {site.hours.en}.
      </p>
      <p>
        No data protection officer has been appointed. Rights requests should be sent to the email above, with enough detail to identify the request.
      </p>
      <h2 className={h2}>2. Data we process</h2>
      <p>Depending on how you contact the office, we may process:</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>Identity and contact details: name, email, phone number and the content of your message.</li>
        <li>Information you choose to include about a legal matter, including documents you send on your own initiative.</li>
        <li>Technical navigation data handled by the host (for example IP address and security logs), for as long as needed to operate and secure the site.</li>
        <li>Your cookie choice, stored in the browser (local storage) when you accept, reject or set preferences.</li>
        <li>If you load the map, data Google processes to provide Google Maps, including Google cookies. The map is not loaded before that choice.</li>
      </ul>
      <p>
        The contact form does not send data to a server of the office. Submitting it opens WhatsApp with the message filled in. Do not send sensitive documents through that form.
      </p>
      <h2 className={h2}>3. Purposes and legal bases</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>Replying to contact requests and taking steps before a contract: GDPR Article 6(1)(b).</li>
        <li>Providing legal services where there is a mandate, and meeting professional, tax or anti-money-laundering duties where they apply: Article 6(1)(b) and (c).</li>
        <li>Security of the website and handling incoming correspondence: Article 6(1)(f). The interest is to reply securely and to address abuse. You may object under Article 21.</li>
        <li>Loading Google Maps: consent, Article 6(1)(a), which you may withdraw at any time in the cookie settings. Withdrawal does not affect processing that has already taken place.</li>
      </ul>
      <p>The site does not build advertising profiles and, at this date, does not use audience-measurement tools. If any are added, they will have an appropriate legal basis and this page will be updated.</p>
      <h2 className={h2}>4. Recipients</h2>
      <p>Data may be seen by:</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>Professionals and staff at the office who need them for the matter.</li>
        <li>The website host (Vercel), which processes technical operations data.</li>
        <li>Meta Platforms, when you use WhatsApp to reach the office number. That step is yours and is subject to Meta&apos;s terms.</li>
        <li>Google, only if the map is loaded.</li>
        <li>Courts, authorities, the Portuguese Bar Association or other bodies, where a legal duty or a professional rule requires it.</li>
      </ul>
      <p>We do not sell personal data.</p>
      <h2 className={h2}>5. Transfers outside the European Economic Area</h2>
      <p>
        Hosting, WhatsApp and Google Maps may involve processing by organisations outside the EEA. Where that happens, the transfer should rest on a Chapter V GDPR mechanism, such as an adequacy decision or standard contractual clauses. You may ask the office, by email, for further information about those safeguards.
      </p>
      <h2 className={h2}>6. Retention</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>Contact requests that do not become a mandate: for as long as needed to reply and, as a rule, for up to 12 months afterwards, unless a legal deadline or the defence of a right requires longer.</li>
        <li>Client files: for the mandate and afterwards for the period required by the Statute of the Bar Association, tax law and the limitation periods that apply to the matter. The engagement letter states the concrete period where there is one.</li>
        <li>Technical host logs: for the operational period set by the provider, limited to what security requires.</li>
        <li>The record of your cookie choice: until you change it or clear the browser storage.</li>
      </ul>
      <h2 className={h2}>7. Your rights</h2>
      <p>
        Under GDPR Articles 15 to 22 you may request access, rectification, erasure, restriction and, where it applies, portability, and you may object to processing based on legitimate interests. Where processing is based on consent, you may withdraw it. A lawyer&apos;s professional secrecy may limit what can be disclosed or erased while that duty applies.
      </p>
      <p>
        Requests are answered within one month, which may be extended under GDPR Article 12. To exercise them, write to {site.email}.
      </p>
      <p>
        You may lodge a complaint with the Portuguese Data Protection Authority (Comissão Nacional de Proteção de Dados, CNPD), Av. D. Carlos I, 134, 1.º, 1200-651 Lisboa,{" "}
        <a href="https://www.cnpd.pt/" className="text-gold-dark underline hover:text-navy">
          www.cnpd.pt
        </a>
        . How to complain is explained on the CNPD website.
      </p>
      <h2 className={h2}>8. Cookies and the map</h2>
      <p>
        Categories are described on the{" "}
        <Link href={pathFor("en", "cookies")} className="text-gold-dark underline hover:text-navy">
          cookies
        </Link>{" "}
        page. Google Maps is embedded only after you accept that category or choose to load the map. Google&apos;s policy is at{" "}
        <a href="https://policies.google.com/privacy?hl=en" className="text-gold-dark underline hover:text-navy">
          policies.google.com/privacy
        </a>
        .
      </p>
      <h2 className={h2}>9. Children</h2>
      <p>This website is not directed at children. We do not knowingly collect children&apos;s data through the form. Matters involving children are handled within a mandate and the applicable law.</p>
      <h2 className={h2}>10. Updates</h2>
      <p>This policy may be updated if the website or the legal framework changes. The version published on this page is the one in force.</p>
      <p>
        The information on this website does not constitute legal advice or a guarantee of outcome. Each matter depends on the specific facts and on the decision of the competent authorities.
      </p>
    </>
  );
}

export function cookiesMetadata(locale: Locale): Metadata {
  return pageMetadata(locale, "cookies", {
    title: "Cookies",
    description:
      locale === "pt"
        ? "Cookies e armazenamento local neste sítio: o que é necessário, quando o Google Maps é carregado e como alterar a escolha."
        : "Cookies and local storage on this website: what is necessary, when Google Maps loads, and how to change your choice.",
  });
}

export function CookiesPolicy({ locale }: { locale: Locale }) {
  const pt = locale === "pt";
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={pt ? "Política de cookies" : "Cookie policy"}
        description={
          pt
            ? "O que fica guardado no seu browser e em que momento o mapa da Google é carregado."
            : "What is stored in your browser, and when the Google map is loaded."
        }
        crumbs={[
          { label: pt ? "Início" : "Home", href: pathFor(locale, "home") },
          { label: "Cookies" },
        ]}
      />
      <section className="py-16">
        <Prose>
          {pt ? (
            <>
              <p>
                Este sítio não usa cookies de publicidade nem, nesta data, cookies de estatística. A escolha que fizer no aviso é guardada no armazenamento local do browser (não num cookie de rastreio), para não voltarmos a perguntar em cada página e para não carregar o mapa contra a sua decisão.
              </p>
              <h2 className={h2}>Necessários</h2>
              <p>
                Servem para memorizar se aceitou, recusou ou personalizou o mapa. São indispensáveis para respeitar essa escolha. Não traçam a navegação entre sítios e não são usados para publicidade. Pode apagá-los nas definições do browser; o aviso voltará a aparecer.
              </p>
              <h2 className={h2}>Mapa Google (opcional)</h2>
              <p>
                Nas páginas inicial e de contacto há um mapa do escritório. O conteúdo da Google, incluindo cookies que a Google possa instalar, só é pedido depois de aceitar esta categoria ou de carregar o botão «Carregar mapa». Antes disso vê um bloco com a morada, esse botão e uma ligação para abrir o Google Maps num separador novo. Abrir essa ligação sai deste sítio e não incorpora o mapa aqui.
              </p>
              <p>
                Mais informação na política da Google:{" "}
                <a href="https://policies.google.com/privacy?hl=pt-PT" className="text-gold-dark underline hover:text-navy">
                  policies.google.com/privacy
                </a>
                . O enquadramento do tratamento está na{" "}
                <Link href={pathFor("pt", "privacy")} className="text-gold-dark underline hover:text-navy">
                  política de privacidade
                </Link>
                .
              </p>
              <h2 className={h2}>Como alterar a escolha</h2>
              <p>Pode voltar a abrir o aviso a qualquer momento.</p>
              <ManageCookiesButton
                label="Gerir cookies"
                className="inline-flex min-h-10 items-center justify-center border border-gold px-4 text-[12px] font-semibold tracking-[0.14em] text-gold-dark uppercase hover:bg-gold hover:text-navy"
              />
              <p>Também pode bloquear cookies de terceiros no browser. Bloquear armazenamento estritamente necessário pode fazer o aviso reaparecer ou impedir que a escolha fique memorizada.</p>
            </>
          ) : (
            <>
              <p>
                This website does not use advertising cookies and, at this date, does not use analytics cookies. The choice you make in the notice is stored in the browser&apos;s local storage (not in a tracking cookie), so that we do not ask on every page and do not load the map against your decision.
              </p>
              <h2 className={h2}>Necessary</h2>
              <p>
                This records whether you accepted, rejected or customised the map. It is required in order to honour that choice. It does not track you across websites and it is not used for advertising. You can delete it in the browser settings; the notice will appear again.
              </p>
              <h2 className={h2}>Google map (optional)</h2>
              <p>
                The home and contact pages include a map of the office. Google content, including cookies Google may set, is requested only after you accept this category or press “Load map”. Until then you see a block with the address, that button, and a link that opens Google Maps in a new tab. Following that link leaves this site and does not embed the map here.
              </p>
              <p>
                Google&apos;s policy:{" "}
                <a href="https://policies.google.com/privacy?hl=en" className="text-gold-dark underline hover:text-navy">
                  policies.google.com/privacy
                </a>
                . How the office handles personal data is set out in the{" "}
                <Link href={pathFor("en", "privacy")} className="text-gold-dark underline hover:text-navy">
                  privacy policy
                </Link>
                .
              </p>
              <h2 className={h2}>How to change your choice</h2>
              <p>You can open the notice again at any time.</p>
              <ManageCookiesButton
                label="Cookie settings"
                className="inline-flex min-h-10 items-center justify-center border border-gold px-4 text-[12px] font-semibold tracking-[0.14em] text-gold-dark uppercase hover:bg-gold hover:text-navy"
              />
              <p>You can also block third-party cookies in the browser. Blocking strictly necessary storage may bring the notice back or stop the choice from being remembered.</p>
            </>
          )}
        </Prose>
      </section>
    </>
  );
}

export function legalNoticeMetadata(locale: Locale): Metadata {
  return pageMetadata(locale, "legalNotice", {
    title: locale === "pt" ? "Aviso legal" : "Legal notice",
    description:
      locale === "pt"
        ? "Identificação do Gabinete Jurídico Laranjeiras e da advogada Sónia Santos da Silva, cédula 55852L da Ordem dos Advogados."
        : "Identification of Gabinete Jurídico Laranjeiras and of lawyer Sónia Santos da Silva, Portuguese Bar licence 55852L.",
  });
}

export function LegalNotice({ locale }: { locale: Locale }) {
  const pt = locale === "pt";
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={pt ? "Aviso legal" : "Legal notice"}
        description={
          pt
            ? "Identificação do escritório e da inscrição na Ordem dos Advogados."
            : "Identification of the office and of the registration with the Portuguese Bar Association."
        }
        crumbs={[
          { label: pt ? "Início" : "Home", href: pathFor(locale, "home") },
          { label: pt ? "Aviso legal" : "Legal notice" },
        ]}
      />
      <section className="py-16">
        <Prose>{pt ? <LegalPt /> : <LegalEn />}</Prose>
      </section>
    </>
  );
}

function LegalPt() {
  return (
    <>
      <h2 className={h2}>1. Identificação</h2>
      <p>
        {site.officeName} ({site.descriptor.pt}). Advogada responsável: {site.lawyerName}, cédula profissional n.º {site.license}, inscrita na Ordem dos Advogados.
      </p>
      <p>
        Morada: {site.addressLine}. {site.landmark.pt}. Telefone e WhatsApp: {site.phoneDisplay}. E-mail: {site.email}. Horário de atendimento: {site.hours.pt}. O atendimento é com marcação.
      </p>
      <p>
        Outros profissionais do escritório estão identificados na página{" "}
        <Link href={pathFor("pt", "about")} className="text-gold-dark underline hover:text-navy">
          O escritório
        </Link>
        . Cada um está sujeito à ordem profissional que lhe corresponde. Os solicitadores estão sujeitos à Ordem dos Solicitadores e dos Agentes de Execução.
      </p>
      <h2 className={h2}>2. Regras profissionais</h2>
      <p>
        A advogada está sujeita ao Estatuto da Ordem dos Advogados e ao Regulamento de Deontologia. A informação publicada neste sítio é descritiva das áreas de trabalho. Não promete resultados, não compara o escritório com outros e não indica honorários. Os honorários e as despesas são explicados por escrito antes do início do mandato.
      </p>
      <p>
        É mantido seguro de responsabilidade civil profissional nos termos exigidos pela Ordem dos Advogados. Os dados da apólice podem ser pedidos ao escritório. Não são publicados aqui porque não são um elemento de promoção.
      </p>
      <h2 className={h2}>3. Natureza da informação</h2>
      <p>
        Os textos do sítio são informação geral. Não são consulta jurídica, não criam mandato e não substituem a análise do caso. O contacto por formulário, e-mail ou WhatsApp também não cria, por si, uma relação de cliente. O mandato começa quando for acordado.
      </p>
      <p>{site.disclaimer}</p>
      <h2 className={h2}>4. Propriedade intelectual</h2>
      <p>
        Os textos, a marca e os elementos gráficos deste sítio pertencem ao escritório ou são usados com autorização. Não podem ser copiados para fins comerciais sem autorização escrita, salvo uso privado ou citação curta com indicação da fonte.
      </p>
      <h2 className={h2}>5. Ligações externas</h2>
      <p>
        O sítio liga ao WhatsApp, ao Google Maps e ao{" "}
        <a href="https://www.livroreclamacoes.pt/Inicio/" className="text-gold-dark underline hover:text-navy">
          Livro de Reclamações
        </a>
        . Essas páginas são de terceiros e regem-se pelas regras deles. O mapa da Google só é incorporado depois de consentimento, como descrito na política de cookies.
      </p>
      <h2 className={h2}>6. Reclamações</h2>
      <p>
        Pode usar o Livro de Reclamações eletrónico. As regras de acesso à profissão e o regime disciplinar da advocacia são os da Ordem dos Advogados (
        <a href="https://portal.oa.pt/" className="text-gold-dark underline hover:text-navy">
          portal.oa.pt
        </a>
        ).
      </p>
      <h2 className={h2}>7. Lei aplicável</h2>
      <p>
        A informação deste sítio rege-se pela lei portuguesa. Isso não prejudica direitos imperativos que a lei reconheça ao consumidor ou ao titular dos dados.
      </p>
    </>
  );
}

function LegalEn() {
  return (
    <>
      <h2 className={h2}>1. Identification</h2>
      <p>
        {site.officeName} ({site.descriptor.en}). Responsible lawyer: {site.lawyerName}, professional licence no. {site.license}, admitted to the Portuguese Bar Association (Ordem dos Advogados).
      </p>
      <p>
        Address: {site.addressLine}. {site.landmark.en}. Phone and WhatsApp: {site.phoneDisplay}. Email: {site.email}. Hours: {site.hours.en}. Meetings are by appointment.
      </p>
      <p>
        Other professionals at the office are named on the{" "}
        <Link href={pathFor("en", "about")} className="text-gold-dark underline hover:text-navy">
          About
        </Link>{" "}
        page. Each is subject to their own professional body. Solicitadores are regulated by the Ordem dos Solicitadores e dos Agentes de Execução.
      </p>
      <h2 className={h2}>2. Professional rules</h2>
      <p>
        The lawyer is bound by the Statute of the Portuguese Bar Association and its code of conduct. Information on this website describes areas of work. It does not promise an outcome, compare the office with others, or state fees. Fees and expenses are explained in writing before a mandate begins.
      </p>
      <p>
        Professional indemnity insurance is maintained as required by the Bar Association. Policy details can be requested from the office. They are not published here because they are not promotional material.
      </p>
      <h2 className={h2}>3. Nature of the information</h2>
      <p>
        The texts on this website are general information. They are not legal advice, they do not create a mandate, and they are not a substitute for a review of the specific case. Contact by form, email or WhatsApp does not, by itself, create a client relationship. A mandate begins when it is agreed.
      </p>
      <p>
        The information on this website does not constitute legal advice or a guarantee of outcome. Each matter depends on the specific facts and on the decision of the competent authorities.
      </p>
      <h2 className={h2}>4. Intellectual property</h2>
      <p>
        The texts, the mark and the graphic elements of this website belong to the office or are used with permission. They may not be copied for commercial purposes without written permission, apart from private use or a short quotation with a source.
      </p>
      <h2 className={h2}>5. External links</h2>
      <p>
        The site links to WhatsApp, Google Maps and the{" "}
        <a href="https://www.livroreclamacoes.pt/Inicio/" className="text-gold-dark underline hover:text-navy">
          Portuguese complaints book (Livro de Reclamações)
        </a>
        . Those pages belong to third parties and follow their rules. The Google map is embedded only after consent, as described in the cookie policy.
      </p>
      <h2 className={h2}>6. Complaints</h2>
      <p>
        You may use the electronic complaints book. Access to the profession and the disciplinary regime for lawyers are those of the Portuguese Bar Association (
        <a href="https://portal.oa.pt/" className="text-gold-dark underline hover:text-navy">
          portal.oa.pt
        </a>
        ).
      </p>
      <h2 className={h2}>7. Governing law</h2>
      <p>
        Information on this website is governed by Portuguese law. That does not affect mandatory rights the law gives to a consumer or to a data subject.
      </p>
    </>
  );
}

export const siteFaqs = {
  pt: [
    {
      q: "A consulta inicial tem um custo?",
      a: "As condições da consulta são confirmadas no primeiro contacto. Este sítio não publica honorários.",
    },
    {
      q: "Podem garantir a aprovação do visto ou da nacionalidade?",
      a: "Não. Nenhuma comunicação deste escritório deve ser lida como garantia de resultado. A decisão é sempre da entidade competente.",
    },
    {
      q: "Atendem em inglês?",
      a: "Sim. O atendimento está previsto em português e inglês.",
    },
    {
      q: "Preciso de estar em Portugal para começar?",
      a: "Depende do tipo de pedido. Muitos processos começam à distância, com envio de documentos digitalizados e, depois, originais quando exigidos.",
    },
    {
      q: "Trabalham com Golden Visa?",
      a: "Este sítio apresenta as áreas de prática do escritório, incluindo imigração, nacionalidade, arrendamento, recuperação de crédito, direito das sociedades, património e sucessões, direito penal e direito administrativo. Outras vias podem ser analisadas em consulta, se se enquadrarem na prática do escritório.",
    },
    {
      q: "Como tratam os meus dados?",
      a: "Para responder ao contacto, prestar o serviço jurídico quando haja mandato e cumprir obrigações legais. O mapa da Google só carrega depois de consentimento. Veja as páginas de Privacidade e de Cookies.",
    },
  ],
  en: [
    {
      q: "Does the first meeting have a fee?",
      a: "The terms of a meeting are confirmed at the first contact. This website does not publish fees.",
    },
    {
      q: "Can you guarantee that a visa or a nationality application will be approved?",
      a: "No. Nothing from this office should be read as a guarantee of outcome. The decision always belongs to the competent authority.",
    },
    {
      q: "Do you work in English?",
      a: "Yes. Meetings are available in Portuguese and English.",
    },
    {
      q: "Do I need to be in Portugal to start?",
      a: "It depends on the type of application. Many matters start at a distance, with scanned documents first and originals later, when they are required.",
    },
    {
      q: "Do you work on Golden Visa matters?",
      a: "This website sets out the office's areas of work, including immigration, nationality, tenancy, debt recovery, company law, property and inheritance, criminal law and administrative law. Other routes can be discussed in a meeting if they fall within that practice.",
    },
    {
      q: "How do you handle my data?",
      a: "To reply to your message, to provide the legal service where there is a mandate, and to meet legal duties. The Google map loads only after consent. See the Privacy and Cookies pages.",
    },
  ],
} as const;

export function faqMetadata(locale: Locale): Metadata {
  return pageMetadata(locale, "faq", {
    title: locale === "pt" ? "Perguntas frequentes" : "Frequently asked questions",
    description:
      locale === "pt"
        ? "Respostas sobre consultas, documentos, prazos e o que o escritório pode (e não pode) garantir."
        : "Answers about meetings, documents, timing and what the office can and cannot guarantee.",
  });
}

export function FaqPage({ locale }: { locale: Locale }) {
  const pt = locale === "pt";
  const faqs = siteFaqs[locale];
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title={pt ? "Perguntas frequentes" : "Frequently asked questions"}
        description={
          pt
            ? "Esclarecimentos gerais. Não substituem uma análise do seu caso."
            : "General points. They are not a review of your case."
        }
        crumbs={[
          { label: pt ? "Início" : "Home", href: pathFor(locale, "home") },
          { label: "FAQ" },
        ]}
      />
      <section className="py-16">
        <div className="container max-w-3xl divide-y divide-navy/10 bg-white px-6 shadow-one sm:px-10">
          <FaqJsonLd items={faqs} />
          {faqs.map((item) => (
            <details key={item.q} className="py-6">
              <summary className="cursor-pointer font-semibold">{item.q}</summary>
              <p className="mt-3 text-sm leading-relaxed text-body-color">{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
