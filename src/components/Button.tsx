interface Props {
  children: string;
  color?: string;
  onClick: () => void;
}

const Botton = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <>
      <button type="button" className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button>
      
    </>
  );
};

export default Botton;
