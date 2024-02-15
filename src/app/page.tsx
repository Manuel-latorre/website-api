import Footer from "./footer/page";
import ExampleCode from "./home/exampleCode/page";
import IntroHome from "./home/intro/page";
import Routes from "./home/routes/page";
import IntroText from "./home/textIntro/page";




export default function Home() {
  return (
    <main>
      <IntroHome/>
      <IntroText/>
      <ExampleCode/>
      <Routes/>
      <Footer/>
    </main>
  );
}
