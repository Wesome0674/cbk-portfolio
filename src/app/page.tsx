import AboutMe from "@/ui/components/AboutMe";
import Form from "@/ui/components/Form";
import Header from "@/ui/components/Header";



export default function Home() {
  return (
    <div className="relative">
      <Header />
      <AboutMe />
      <Form />
    </div>
  );
}
