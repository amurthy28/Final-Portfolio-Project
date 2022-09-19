function Balance(){
  const ctx = React.useContext(UserContext); 
  return (
    <h1>Balance: <brk/>
        {JSON.stringify( ctx.users[ctx.users.length-1].balance)}
    </h1>
  )

}
