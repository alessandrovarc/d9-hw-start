import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {StarFill} from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';





const Job = ({jobData}) => {

  const dispatch = useDispatch()
  const favouriteList = useSelector(state=>{     //serve per richiamare lo stato
    return  state.favourite.content
  })


  const handleClick = () => {

    const alreadyExist = favouriteList.find(element=> element._id === jobData._id) ? true : false;
    console.log('alreadyExist',alreadyExist)
    if(alreadyExist) {
      dispatch({
        type:'REMOVE',
        payload: jobData
      })
    } else {
      dispatch({
        type:'ADD',
        payload: jobData
      })
    }

  }
  
 

  return (
    <Row
    className="mx-0 mt-3 p-3"
    style={{ border: '1px solid #00000033', borderRadius: 4 }}
  >
   <Col xs={1}><StarFill color={favouriteList.find(item => item._id === jobData._id) ? "yellow" : "grey"} onClick={()=> handleClick()} /></Col>
    <Col xs={2}>
      <Link to={`/${jobData.company_name}`}>{jobData.company_name}</Link>
    </Col>
    <Col xs={9}>
      <a href={jobData.url} target="_blank" rel="noreferrer">
        {jobData.title}
      </a>
    </Col>
  </Row>
  )
}

export default Job
