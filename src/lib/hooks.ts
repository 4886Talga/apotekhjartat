import { useState, useEffect } from "react";
import { prescriptions } from "./prescriptions";
import { Prescription } from "./types";
import { searchArray, getPrescriptionById} from "./utils";

export function useActiveId() {
  const [activeId, setActiveId] = useState<number | null>(null)

  useEffect(() => {
    const handleHashChange = () => {
      const id = +window.location.hash.slice(1);
      setActiveId(id);
    };
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return activeId;
}

export function usePrescriptionItem(prescriptionId: number | null) {
  const [prescriptionItem, setPrescriptionItem] = useState<Prescription | null>(null)

  useEffect(() => {
    if (!prescriptionId) return;
    
    const searchResult: Prescription = getPrescriptionById(
      prescriptions,
      prescriptionId
    );
    setPrescriptionItem(searchResult)
      }, [prescriptionId])
      return prescriptionItem;
}


export function useProductItems(searchText: string, setCurrentPage:(page:number)=>void) {
  const [filteredPrescriptions, setFilteredPrescriptions] =
  useState(prescriptions);
const [isLoading, setIsLoading] = useState(false);

const totalNumberOfResults = filteredPrescriptions.length


useEffect(() => {
  //if (!searchText) return;
  setIsLoading(true);
  const searchResults: Prescription[] = searchArray(
    prescriptions,
    searchText
  );
  setIsLoading(false);
  setFilteredPrescriptions(searchResults);
  setCurrentPage(1)
}, [searchText, setCurrentPage]);

return {filteredPrescriptions, isLoading, totalNumberOfResults} as const 
}