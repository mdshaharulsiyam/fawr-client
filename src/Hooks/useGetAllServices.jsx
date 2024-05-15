import React from 'react'
import useAxiosConfig from '../AxiosConfig/useAxiosConfig'
import { useQuery } from '@tanstack/react-query'

const useGetAllServices = (category) => {
    const axiosConfig = useAxiosConfig()
    const { isPending: serviceLoading, data: service = [], refetch: refetchservice } = useQuery({
        queryKey: ['servive',category],
        queryFn: async () => {
            const res = await axiosConfig.get(`/service?category=${category}`)
            return res.data;
        }
    })
    return { serviceLoading, service, refetchservice }
}

export default useGetAllServices