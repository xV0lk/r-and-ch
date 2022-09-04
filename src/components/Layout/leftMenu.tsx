type Props = {
  children?: JSX.Element;
};
export const LeftMenu: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col">
      <section>
        <h1>test</h1>
        <p>this is a test comp</p>
      </section>
      <section>
        <h3>Same here</h3>
        <p>just a test again</p>
      </section>
    </div>
  );
};
