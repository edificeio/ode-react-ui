export function Colors(props: {
  color: string;
  hexa: string;
  nameVar: string;
}) {
  return (
    <div className="ctn-card">
      <div
        className="background-color"
        style={{ backgroundColor: props.hexa }}
      ></div>
      <div className="description-color">
        <p className="name-color">{props.color}</p>
        <p className="hexa-color">{props.hexa}</p>
        <p className="variable">{props.nameVar}</p>
      </div>
    </div>
  );
}
