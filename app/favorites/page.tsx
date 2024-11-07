import getCurrentUser from "../actions/getCurrentUser";
import getFavoriteListings from "../actions/getFavoriteListings";
import ClientOnly from "../components/client-only";
import EmptyState from "../components/empty-state";
import FavoritesClient from "./favorites-client";

const FavoritesPage = async () => {
  const currentUser = await getCurrentUser();
  const listings = await getFavoriteListings();

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unauthorized" subtitle="Please login" />
      </ClientOnly>
    );
  }

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No favorite found"
          subtitle="Look like you have no favorite listings."
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <FavoritesClient listings={listings} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default FavoritesPage;
