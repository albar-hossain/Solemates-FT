const axios = require('axios');

 export default async function ShowData(){

const response= await axios.get('http://localhost:3000/customer/dashboard');
     console.log(response);
const data =response.data;
return (<>

{data.map((user: any) => (
    <p>{user.id}
    {user.fullname}
    {user.username}
    {user.filename}
<img src={'http://localhost:3000/customer/getimage/'+user.filename}/>
    </p>
 
    
  ))}
</>);

}