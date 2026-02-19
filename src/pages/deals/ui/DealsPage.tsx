import { useDealsInfinite } from "@entities/deal";
import { Link } from "react-router-dom";

const DealsPage = () => {
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useDealsInfinite();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading deals</div>;

  const deals = data?.pages.flatMap((page) => page.data.deals) ?? [];

  return (
    <div>
      <div>
        <h1>Deals</h1>
        <Link to="/deals/create">
          <button>+ New Deal</button>
        </Link>
      </div>

      <ul>
        {deals.map((deal) => (
          <li key={deal.id}>
            <span>
              {deal.address_city}, {deal.address_street} — {deal.progress}
            </span>
            <Link to={`/deals/${deal.id}/edit`}>
              <button>Edit</button>
            </Link>
          </li>
        ))}
      </ul>

      {hasNextPage && (
        <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </button>
      )}
    </div>
  );
};

export default DealsPage;
