import { useEffect,useState } from 'react';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';



const AvailableMeals=()=>{
  const [meal,setMeals]=useState([]);
  const [isLoading,setIsLoading]=useState(false);
  const [httpError,setHttpError]=useState(null);
  useEffect( () => {
    const fetchMeals=async () =>{
      setIsLoading(true)
    const response=await fetch('https://foodapp-8e42b-default-rtdb.firebaseio.com/meals.json');
    if(!response.ok)
    {
      throw new Error("Something Went Wrong!");
    }
    const data=await response.json();
    
    const loadedMeals=[];
    for(const key in data)
  {
    loadedMeals.push(
      {
id:key,
description:data[key].description,
name:data[key].name,
price:data[key].price,
      }
    )
    }
    setMeals(loadedMeals);
    setIsLoading(false)
    };
  
    fetchMeals().catch(error=>{
      setIsLoading(false);
      setHttpError(error.message);
    });
  },[])
    if(isLoading)
    {
      return(
        <section>
          <p>LOADING....</p>
        </section>
      )
    }
    if(httpError){
      return(
      <p>{httpError}</p>
      )
    }
    const MealsList=meal.map(meal=>
      <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price}></MealItem>
    )
    return(
    
       <section className={classes.meals}> 
        <Card>
            <ul>
            {MealsList}
            </ul>
            </Card>
        </section>
    )
    }
export default AvailableMeals;