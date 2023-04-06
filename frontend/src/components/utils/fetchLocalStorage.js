export const getLocalStorageAll = () => {
  // TODO(mlkz): Add getters for more filters
  const listingType = localStorage.getItem('listingType');

  return {
    listing_type: listingType
  };
};
