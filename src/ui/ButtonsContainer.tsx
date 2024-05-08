import FormButton from "./FormButton";

interface Props {
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
  isEditingSession?: boolean
}

export default function ButtonsContainer({handleClick, isEditingSession}: Props) {
  return (
    <div className="flex justify-end gap-10 py-4 text-sm">
      <FormButton px="3" py="2" type="reset" handleClick={handleClick}>
        Anuluj
      </FormButton>
      <FormButton px="3" py="2" type="submit" >
        {isEditingSession ? 'Zmień' : 'Dodaj'}
      </FormButton>
    </div>
  );
}
