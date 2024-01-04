import { baseEmailUrl} from "@/constants/Contant";
import axios from "axios";

class Email{
    async sendEmail(payload){
        await axios
            .post(baseEmailUrl.url, payload)
            .then(() => {
                // setIsLoading(false);
                console.log("Email Sent.");
                return true
            })
            .catch(() => {
                console.error("Email not Sent.");
                return false;
            });
    }
}
export default Email