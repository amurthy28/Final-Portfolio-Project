function AllData(){
  const ctx = React.useContext(UserContext);
  return (
    <Card
    txtcolor="black"
    header="All Data in Store"
    body={JSON.stringify(ctx)}
  />    
);  
}
