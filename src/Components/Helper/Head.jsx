const Head = (props) => {
  React.useEffect(() => {
    document.title = `${props.title} | Entregas e coletas - Porto Alegre RS`;
    document
      .querySelector("meta[name='description']")
      .setAttribute("content", props.description || "");
  }, [props]);

  return <></>;
};

export default Head;
