import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {

    const data = useLoaderData()


  //* Another method
  // const [data, setData] = useState([])

  // //* We ca use loader in the react router dom for better optimization of the fetch request.
  // useEffect(()=>{
  //     fetch('https://api.github.com/users/asrar-ahammad')
  //     .then(response => response.json())
  //     .then(data =>{
  //         console.log(data);
  //         setData(data)
  //     })
  // },[])

  return (
    <>
      <div className="h-[70vh] w-full flex items-center justify-center gap-3">
        <img
          src={data.avatar_url}
          className="rounded-full h-[200px] w-[200px]"
        />
        <p className="text-3xl">Github followers : {data.followers}</p>
      </div>
    </>
  );
};

export default Github;

export const githubInfo = async () => {
  const response = await fetch("https://api.github.com/users/asrar-ahammad");
  return response.json();
};
