import { userLogin,userRegister} from "../redux/slices/authAction";
import store from "../redux/store";
import toast from "react-hot-toast";


export const handleLogin = (e, email, password) => {
  e.preventDefault();
  try {
    if (!email || !password) {
      return toast.success("Please Privde All Feilds");
    }
    store.dispatch(userLogin({ email, password }));
  } catch (error) {
    toast.error("Something went wrong");
    console.log(error);
  }
};

export const handleRegister = (e,name,email,password,phone,address,image) => {
  e.preventDefault();
  try {
    if (!name || !email || !password ||!phone || !address || !image) {
      return toast.error("Please Privde All Feilds");
    }
    if(password.length<4){
      return toast.error("Password must be at least 4 character long");
    }
    store.dispatch(userRegister({name,email,password,phone,address,image}));
  } catch (error) {
    toast.error("Something Went Wrong");
    console.log(error);
  }
};
