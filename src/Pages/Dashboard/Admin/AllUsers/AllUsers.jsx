import { useQueries } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
  } from '@tanstack/react-query'


const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    

    const {data : users = []}= useQuery({
        queryKey: ['users'],
        queryFn:async()=>{
            const res = await axiosSecure.get('/users')
            return res.data;
        }
    })

    return (
        <div>
            <h1>All Users : {users.length}</h1>
            {/* table */}
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      
    </tbody>
  </table>
</div>
        </div>

        
    );
};

export default AllUsers;