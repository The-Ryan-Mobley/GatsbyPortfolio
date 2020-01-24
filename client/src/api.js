import axios from "axios";
export default {
    getPieces: () => {
        console.log("hmm");
        return axios.get("/api/pieces/", {params: "huh"});
    }
}