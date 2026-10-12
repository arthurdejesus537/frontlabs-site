import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { sections } from "@/components/sections";
import { site } from "@/content/site";

export default function Home() {
  return (
    <>
      <a href="#conteudo" className="skip-link">{site.ui.skip}</a>
      <AnnouncementBar data={site.announcement} />
      <Header data={site.header} />
      <main id="conteudo">
        <Hero data={site.hero} />
        {site.order.map((key) => {
          const Section = sections[key];
          return Section ? <Section key={key} /> : null;
        })}
      </main>
      <Footer data={site.footer} />
    </>
  );
}
