

export const Icon = (props: { name: string }) => {
  return (
    <svg className="icon">
      <use xlinkHref={'#icon-' + props.name}/>
    </svg>
  );
};
