import toast from "react-hot-toast";
import { Prescription } from "./types";

export const handleError = (error: unknown) => {
  let message;

  if (error instanceof Error) {
    message = error.message;
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "An error occurred.";
  }

  toast.error(message);
};

export function searchArray(
  array: Prescription[],
  searchTerm: string
): Prescription[] {
  const lowercasedSearchTerm = searchTerm.toLowerCase();

  return array.filter((obj) =>
    Object.values(obj).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(lowercasedSearchTerm)
    )
  );
}

export function getPrescriptionById(
  array: Prescription[],
  prescriptionId: number
): Prescription {

   const prescriptionArray = array.filter(prescription => prescription.prescriptionId === prescriptionId)

   return prescriptionArray[0]

}