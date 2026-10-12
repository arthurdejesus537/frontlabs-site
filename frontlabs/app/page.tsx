import { Hero } from "@/components/sections/Hero";
import { sections } from "@/components/sections";
import { site } from "@/content/site";

export default function Home() {
  return (
    <main id="conteudo">
      <Hero data={site.hero} />
      {site.order.map((key) => {
        const Section = sections[key];
        return Section ? <Section key={key} /> : null;
      })}
    </main>
  );
}
