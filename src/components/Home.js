import { useNavigate } from "react-router-dom";
const Home = ()=>{
    const navigate = useNavigate()
    const navigate1 = useNavigate()

    return <div>
        <button className='btn1' onClick ={()=>navigate('signup')}>Signup</button>
        <button className='btn1' onClick ={()=>navigate1('login')}>Login</button>

    </div>
}
export default Home;