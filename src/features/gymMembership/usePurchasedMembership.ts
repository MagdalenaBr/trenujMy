import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getPurchasedMemberschips } from "../../services/apiPurchaseMembership";

export function usePurchasedMembership(isPaymentPage : boolean) {
  const [searchParams] = useSearchParams();
  const selectedTimeRange = isPaymentPage ? null : !isPaymentPage && !searchParams.get('zakres') ? '7': searchParams.get('zakres')

  const { data: purchasedMemberships, isLoading } = useQuery({
    queryKey: ["purchasedMemberships", selectedTimeRange],
    queryFn: ()=>getPurchasedMemberschips(selectedTimeRange),
  });

  return { purchasedMemberships, isLoading };
}
