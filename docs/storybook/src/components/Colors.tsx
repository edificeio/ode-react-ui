export function Colors(props:{color: string, hexa: string, nameVar: string}) {
  return (
    <div className="ctn-card">
      <div className="background-color" style={{backgroundColor: props.hexa}}></div>
      <div className="description-color">
        <p className="name-color">{props.color}</p>
        <p className="hexa-color">{props.hexa}</p>
        <p className="variable">{props.nameVar}</p>
      </div>
    </div>
  );
}


// export function ColorsTab() {
//   let infos : {
//     color : ["Orange","blue"],
//     hexa : ["#FE3448","#FE3448"],
//     nameVar : ["Orange","Blue"],
//   }
//   return(
//     infos.map(function(info) {
//       console.log(info);
//     })
//   );
// };