
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import RecentPosts from "./components/Recentpost";
import FeaturedWorks from "./components/FeaturedWorks";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <RecentPosts/>
      <FeaturedWorks/>
      <Footer/>
    </>
  );
}

export default App;
