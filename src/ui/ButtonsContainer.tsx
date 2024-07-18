import FormButton from "./FormButton";

interface Props {
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
  isEditingSession?: boolean
  deactivate?:boolean
}



export default function ButtonsContainer({handleClick, isEditingSession, deactivate}: Props) {
  return (
    <div className="flex justify-center gap-5 py-4 text-sm">
      <FormButton px="3" py="2" type="reset" handleClick={handleClick}>
        Anuluj
      </FormButton>
      <FormButton px="3" py="2" type="submit" deactivate={deactivate}>
        {isEditingSession ? 'Zmień' : 'Dodaj'}
      </FormButton>
    </div>
  );
}
