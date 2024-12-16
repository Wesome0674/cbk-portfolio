import AboutMe from "@/ui/components/AboutMe";
import Header from "@/ui/components/Header";
import NavBar from "@/ui/components/navigation/NavBar";
import PassionSlider from "@/ui/components/PassionSlider";

export default function Home() {
  return (
    <div className="">
      <NavBar />
      <Header />
      <AboutMe />
    </div>
  );
}
