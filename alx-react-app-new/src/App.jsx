import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Counter from "./components/Counter";


function App() {
  return (
    <>
      <Header />
      <MainContent />

      <UserProfile
        name="Clive"
        age={24}
        bio="I am learning React and building real-world projects."
      />

      <Counter/>

      <Footer />
    </>
  );
}

export default App;
