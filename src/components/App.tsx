import Background from "./Background";
import Container from "./Container";
import Footer from "./Footer";
import Header, { HeaderTop } from "./Header";
import Logo from "./Logo";
import SearchForm from "./SearchForm";
import { useState } from "react";
import Sidebar, { SidebarTop } from "./Sidebar";
import ProductItemContent from "./ProductItemContent";
import PaginationControls from "./PaginationControls";
import ProductList from "./ProductList";
import ResultsCount from "./ResaultsCount";
import { useProductItems } from "../lib/hooks";
import { RESULTS_PER_PAGE } from "../lib/constants";
import { PageDirection } from "../lib/types";

function App() {
  // state
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { filteredPrescriptions, isLoading, totalNumberOfResults } =
    useProductItems(searchText, setCurrentPage);

  // derived state / computed state
  const filteredPrescriptionSliced = filteredPrescriptions.slice(
    currentPage * RESULTS_PER_PAGE - RESULTS_PER_PAGE,
    currentPage * RESULTS_PER_PAGE
  );
  const totalNumberPages = totalNumberOfResults / RESULTS_PER_PAGE;

  // event handlers / actions
  const handleChangePage = (direction: PageDirection) => {
    if (direction === "next") {
      setCurrentPage((prev) => prev + 1);
    } else if (direction === "previous") {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <>
      <Background />
      <Header>
        <HeaderTop>
          <Logo />
        </HeaderTop>
        <SearchForm searchText={searchText} setSearchText={setSearchText} />
      </Header>
      <Container>
        <Sidebar>
          <SidebarTop>
            <ResultsCount totalNumberOfResults={totalNumberOfResults} />
          </SidebarTop>

          <ProductList
            filteredPrescriptions={filteredPrescriptionSliced}
            isLoading={isLoading}
          />
          <PaginationControls
            currentPage={currentPage}
            onClick={handleChangePage}
            totalNumberPages={totalNumberPages}
          />
        </Sidebar>
        <ProductItemContent />
      </Container>
      <Footer />
    </>
  );
}

export default App;
