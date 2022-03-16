import { useNavigate } from "react-router-dom";
const Home = ()=>{
    const navigate = useNavigate()

    return <div>
        <button className='btn1' onClick ={()=>navigate('signup')}>Signup</button>
        <button className='btn1' onClick ={()=>navigate('login')}>Login</button>

    </div>
}
export default Home;