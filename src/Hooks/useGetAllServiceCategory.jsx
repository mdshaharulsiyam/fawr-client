import { useQuery } from '@tanstack/react-query'
import useAxiosConfig from '../AxiosConfig/useAxiosConfig';


const useGetAllServiceCategory = () => {
    const axiosConfig = useAxiosConfig()
    const { isPending: categoryLoading, data: categorise = [], refetch: refetchCategorise } = useQuery({
        queryKey: ['serviceCategory'],
        queryFn: async () => {
            const res = await axiosConfig.get(`/service/category`)
            return res.data;
        }
    })
    return { categoryLoading, categorise, refetchCategorise }
}

export default useGetAllServiceCategory