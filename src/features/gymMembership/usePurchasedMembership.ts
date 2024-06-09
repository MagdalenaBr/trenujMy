import { useQuery } from "@tanstack/react-query";
import { getPurchasedMemberschips } from "../../services/apiPurchaseMembership";
import { useSearchParams } from "react-router-dom";

export function usePurchasedMembership() {
  const [searchParams] = useSearchParams();
  const selectedTimeRange =  !searchParams.get('zakres') ? '7': searchParams.get('zakres')

  console.log(selectedTimeRange);
  const { data: purchasedMemberships, isLoading } = useQuery({
    queryKey: ["purchasedMemberships", selectedTimeRange],
    queryFn: ()=>getPurchasedMemberschips(selectedTimeRange),
  });

  return { purchasedMemberships, isLoading };
}
