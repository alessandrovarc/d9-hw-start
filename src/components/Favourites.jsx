
import { useSelector } from 'react-redux';
import Job from './Job';


function Favourite() {

    const takeState = useSelector((store) => store.favourite.content)
    

    const listOfFavourite = useSelector(state=>{     //serve per richiamare lo stato
        return  state.favourite.content
      })
      console.log('favoriti', listOfFavourite)



  return (
    <>
    {takeState.map((book)=>{
        return(
            <>
            <Job key={book._id} jobData={book} />
            </>
        )
    })}
      
    </>
  );
}

export default Favourite;