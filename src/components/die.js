export default function Die(props){
  const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }

 return (
  <div>
     <div className="die-box" style={styles} onClick={props.holdDice}>
      <h2 className="die-num">{props.number}</h2>
     </div>
  </div>
 )
}