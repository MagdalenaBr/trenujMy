import PaymentModal from "../payments/PaymentModal";
import PaymentTable from "../payments/PaymentTabe";

export default function PaymentTableContainer({ userPayments }) {
  return (
    <div>
      <div className="flex items-center justify-center py-5">
        <hr className="mx-3 w-[17rem]" />
        <h3 className="font-semibold uppercase">Płatności</h3>
        <hr className="mx-3 w-[17rem]" />
      </div>
      {userPayments?.length !== 0 ? (
        <PaymentTable payments={userPayments} isMemberPage={true} />
      ) : (
        <div className="h-48 text-sm text-slate-300">
          <p>Brak dostępnych płatności.</p>
        </div>
      )}
      <PaymentModal />
    </div>
  );
}
