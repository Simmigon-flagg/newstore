import { useQuery, useMutation, useQueryClient } from 'react-query';
import { VansAPI } from '../../api/Van/Van.jsx';


export const useVans = () => {
  const queryClient = useQueryClient();

  const { isLoading, data: vans, error } = useQuery('vans', VansAPI.fetchVans);

  const createMutation = useMutation(
    (van) => VansAPI.createVan(van),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('vans');
      },
    },
  );

  const updateMutation = useMutation(
    (van) => VansAPI.updateVan(van.id, van),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('vans');
      },
    },
  );

  const deleteMutation = useMutation(
    (id) => VansAPI.deleteVan(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('vans');
      },
    },
  );

  return {
    isLoading,
    vans,
    error,
    createVan: createMutation.mutate,
    updateVan: updateMutation.mutate,
    deleteVan: deleteMutation.mutate,
  };
};

export const useVan = (id ) => {
  console.log("Use Van", id)
  return useQuery(['vans', id], () => {
    VansAPI.fetchVanById(id)
  })
};