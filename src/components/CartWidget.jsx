
function CartWidget() {
  const contador =15;
  return (
    <div style={{display: 'flex', width: 30, justifyContent: 'space-between', alignItems: 'center'}}>
        🛒<span style={{fontWeight: 'bold', fontSize: '1.1rem'}}>{contador}</span>
    </div>
  )
}

export default CartWidget