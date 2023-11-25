import Skeleton from "react-loading-skeleton";
import "../ListingItem/ListingItem.scss";

const ListingItemSkeleton = () => {
  return (
    <div
      className="listing_item"
      style={{ paddingBottom: "25px"}}
    >
      <Skeleton height={140} borderRadius="5px 5px 0 0" style={{lineHeight: "10"}}/>
      <div className="listing_item__info">
        <Skeleton height={25} width="35%" />
        <Skeleton height={18} width="70%" />
        <Skeleton height={18} width="75%" />
        <Skeleton height={15} width="15%" />
      </div>
    </div>
  );
};

export default ListingItemSkeleton;
