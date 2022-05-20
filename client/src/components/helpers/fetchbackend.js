import axios from "axios";

//Actions

async function getForm(data){
    try {
      const res = await axios({
           method: 'post',
           url: 'api/v1/form',
           data
       })
       return res
    } catch (error) {
         return{'error': "Resource error"}
    }
}

export default getForm