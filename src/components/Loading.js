const Loading = (props) => {
  const htmlLoading = props.isLoading ? <span className="loading"></span> : null;
  return <>{htmlLoading}</>;
};

export default Loading;
