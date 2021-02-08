import Axios from 'axios'

async function loadData(params,endpoint){
    let url="http://192.168.1.5:355/api/user/"
    const resp=await Axios.post(url+endpoint,params)
    return resp
}
export default loadData