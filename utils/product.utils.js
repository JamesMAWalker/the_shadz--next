export const prettyUrltoDBItem = (productName) => {
  let name = productName;
  
  if (productName.includes('-')) {
    name = productName.replace('-', ' ');
  }
  
  return name;
}