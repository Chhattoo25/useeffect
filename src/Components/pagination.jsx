import React from 'react'

const Pagination = () => {
                     const[todos,setTodos]=useState([])
                     const[page,setPage]=useState(1)
                     const[limit,setLimit]=useState(5)
                     const[totalCount,setTotalCount]=useState(0)
                   useEffect(()=>{
                   axios.get(`http://localhost:8080/todos?_page=${page}&_limit=${limit}`).then((r)=>{
                     console.log(r)
                     setTodos(r.data);
                     setTotalCount(Number(r.headers["x-total-count"]))
                   })
                   },[page,limit]);
                   
                   
                     return (
                      <div>
                         <div className="App">
                       App
                       {
                         todos.map((todo)=>{
                          return <div key={todo.id} >{todo.id}{`:`}{todo.value}</div>
                         })
                       }
                       <select onChange={(e)=>setLimit(Number(e.target.value))} >
                         <option value={5} >5</option>
                         <option value={10}>10</option>
                         <option value={20}>20</option>
                         <option value={30}>30</option>
                       </select>
                       <input
                       type="number"
                       value={limit}
                       min={0}
                       max={totalCount}
                       onChange={({target})=>setLimit(Number(target.value))}
                       ></input>
                       <button
                       disabled={page<=1}
                       onClick={()=>{
                         if(page>1){
                           setPage(page-1)
                         }
                       }}>
                         {" "}{`<`}{" "}
                       </button>
                       <button
                       disabled={totalCount<page*limit}
                        onClick={()=>setPage(page+1)}>{">"}</button>
                       {/* <Todo></Todo> */}
                       </div>
                      </div>
                     );
}

export default Pagination