import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";



const useSignin = () => {
    const [loading, setLoading] = useState(false);
    const {setAuthUser}=useAuthContext()

    const signin =async ({username ,password })=>{
      //  console.log("use signin hook",{username ,password })
        const success =handleInputErrors({username,password});

        if (!success) {
            return;
        }
        setLoading(true);
        try {
            const res =await fetch('/api/v1/auth/signin',{
                method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ username, password}),
            });

            const data =await res.json();
           // console.log("data from the api",data)
            if (data.error) {
                throw new Error(data.error)
            }

            localStorage.setItem("chat-user",JSON.stringify(data));
            setAuthUser(data);


            
        } catch (error) {
            toast.error(error.message);

            
        }finally{
            setLoading(false);
        }


    }
    return {loading,signin}

}

export default useSignin



function handleInputErrors({  username, password}) {
 //   console.log({fullName, username, password, confirmPassword, gender})
	if ( !username || !password ) {
		toast.error("Please fill in all fields");
		return false;
	}


	if (password.length < 6) {
		toast.error("Password must be at least 6 characters");
		return false;
	}

	return true;
}