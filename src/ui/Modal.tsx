import {
  Dispatch,
  SetStateAction,
  cloneElement,
  createContext,
  useContext,
  useState,
} from "react";
import { createPortal } from "react-dom";

type ContextType = {
  isOpen: string;
  setIsOpen: Dispatch<SetStateAction<string>>;
};
type PropsType = {
  children: React.ReactNode;
  formName?: string;
  openForm?: string;
};

const ModalContext = createContext<ContextType | null>(null);

function Modal({ children }: PropsType) {
  const [isOpen, setIsOpen] = useState("");

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ModalContext.Provider>
  );
}

function Window({ children, formName }: PropsType) {
  const context = useContext(ModalContext);
  if (context === null) return null;
  const { isOpen, setIsOpen } = context;

  if (formName !== isOpen) return null;
  return createPortal(
    <div className="fixed inset-0 z-50 h-screen w-screen bg-slate-600 bg-opacity-80 backdrop-blur-md ">
      <div className="flex h-full items-center justify-center ">
        {cloneElement(children as React.ReactElement, {
          handleCloseModal: () => setIsOpen(""),
        })}
      </div>
    </div>,
    document.body,
  );
}

function OpenButton({ children, openForm }: PropsType) {
  const context = useContext(ModalContext);
  if (context === null) return null;
  const { setIsOpen } = context;
  if (!openForm) return null;
  return cloneElement(children as React.ReactElement, {
    handleClick: () => setIsOpen(openForm),
  });
}

Modal.Window = Window;
Modal.OpenButton = OpenButton;

export default Modal;
