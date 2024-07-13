import axios, {AxiosResponse} from 'axios';

// const baseUrl = "https://api.timbu.cloud";

export const getAllProducts = async(
  organization_id: string,
  Appid: string,
  Apikey: string,
  page: number,
  size: number,
  reverse_sort: boolean = false
) => {
  const url = `https://timbu-get-all-products.reavdev.workers.dev/?organization_id=${organization_id}&reverse_sort=${reverse_sort}&page=${page}&size=${size}&Appid=${Appid}&Apikey=${Apikey}`;

  try{
    const response: AxiosResponse<any> = await axios.get(url)
    return response.data
  }catch(error){
    console.error("Error fetching products:", error);
    return [];
  }
}

