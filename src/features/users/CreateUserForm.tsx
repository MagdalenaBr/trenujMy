import Input from "../../ui/Input";
import StyledButton from "../../ui/StyledButton";

export default function CreateUserForm() {
  return (
    <form className="flex flex-col gap-8">
      <Input label="Nazwa" type="text" id="name" />
      <Input label="Email" type="email" id="email" />
      <Input label="Hasło" type="password" id="password" />
      <Input label="Powtórz hasło" type="password" id="confirmPassword" />
      <div className="flex gap-10 justify-end">
        <StyledButton styleType="add">Dodaj</StyledButton>
        <StyledButton type="reset">Anuluj</StyledButton>
      </div>
    </form>
  );
}
