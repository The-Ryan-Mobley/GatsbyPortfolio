import axios from "axios";
export default {
    getPieces: () => {
        return axios.get("/api/pieces/", {params: "huh"});
    }
}