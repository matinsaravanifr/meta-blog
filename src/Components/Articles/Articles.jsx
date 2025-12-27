import { useEffect, useState } from "react";
import Card from "../Card/Card";
import axios from "axios";
export default function Articles() {
  const[Data,setData]=useState([])
  useEffect(() => {
      const fetchData = async () => {
        try {
          
        const res = await axios.get('/api/information/api/v1/all-news/');
        setData(res.data.results)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); 
   return (
    <main className="w-[80%] m-auto mb-10">
      <section
        className="        
        grid 
        grid-cols-1    
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-3 
        xl:grid-cols-3 
        gap-10
        justify-items-center 
        "
      >
        {
          Data.map((item)=>(
            <Card
            key={item.id}
            title={item.title}
            author_title={item.author_title}
            tarikh={item.created_at}
            image={item.cover_image}
            />
          ))
        }
      </section>
    </main>
  );
}
