import './card.css';

let Card = (props) =>{
    let classes = 'card' + props.className;
   return (
      <div className={classes}>{props.children}</div>
   )

}

export default Card ;
