
import { ApiService } from "../services/ApiService";
import useSWR from "swr";

export function useApi(endPoint, config) {
    const { data, error } = useSWR(endPoint,
        async (url) => {
            const response = await ApiService(url, config)
            return response.data;
        });
    return { data, error };
}

/** 
 swr é um react hook;
 swr nos ajudar a guardar no cache os dados que estavam na requisição anterior, se não mudar nada ele vai pegar do cache e mostrar o que está em cache, se mudar ele vai mostrar os novos dados. Isso dá a impressão de que quando voltamos a pagina anterior os dados estão sendo carregadas mais rapidamente.
*/