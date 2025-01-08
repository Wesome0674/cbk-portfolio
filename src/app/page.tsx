import AboutMe from "@/ui/components/AboutMe";
import Form from "@/ui/components/Form";
import Header from "@/ui/components/Header";
/* import LenisWrapper from "@/ui/components/LenisWrapper"; */
import MyWork from "@/ui/components/projects/MyWork";
import { CtaScroll } from "@/ui/components/ctaScroll";
import MySkills from "@/ui/components/MySkills";

export default function Home() {
  return (
   /*  <LenisWrapper> */
      <div className="relative">
        <Header />
        <AboutMe />
        <MySkills />
        <MyWork />
        <Form />
         <div className="fixed bottom-4 right-4">
          <CtaScroll variant="contact" />
        </div>
      </div>
    /* </LenisWrapper> */
  );
}
