import FormButton from "./FormButton";

export default function ButtonsContainer() {
  return (
    <div className="flex justify-end gap-10 py-4 text-sm">
      <FormButton px="3" py="2" action="cancel">
        Anuluj
      </FormButton>
      <FormButton px="3" py="2">
        Zmień
      </FormButton>
    </div>
  );
}
