import Background from "./Background";
import Container from "./Container";
import Footer from "./Footer";
import Header, { HeaderTop } from "./Header";
/* import BookmarksButton from "./BookmarksButton"; */
import Logo from "./Logo";
import SearchForm from "./SearchForm";
import Sidebar, { SidebarTop } from "./Sidebar";
import ProductItemContent from "./ProductItemContent";
import PaginationControls from "./PaginationControls";
import ResultsCount from "./ResaultsCount";
import { Toaster } from "react-hot-toast";
import SortingCotrol from "./SortingControls";
import BookmarksButton from "./BookmarksButton";
import ProductListSearch from "./ProductListSearch";

function App() {
  return (
    <>
      <Background />
      <Header>
        <HeaderTop>
          <Logo />
          <BookmarksButton />
        </HeaderTop>
        <SearchForm />
      </Header>
      <Container>
        <Sidebar>
          <SidebarTop>
            <ResultsCount />
            <SortingCotrol />
          </SidebarTop>
          <ProductListSearch />
          <PaginationControls />
        </Sidebar>
        <ProductItemContent />
      </Container>
      <Footer />
      <Toaster position="top-right" />
    </>
  );
}

export default App;
