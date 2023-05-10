import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import { Skeleton } from "./Skeleton";
import { Button } from "./Button";
import { ExpandablePanel } from "./ExpandablePanel";
import { AlbumListItem } from "./AlbumListItem";

export function AlbumsList({ user }) {
  // const result = useFetchAlbumsQuery(user);
  // console.log(result);
  const { data, isFetching, error } = useFetchAlbumsQuery(user);
  // results => object with isLoading, error, data etc.
  // addAlbum => function to call this mutation
  const [addAlbum, results] = useAddAlbumMutation();

  const handleAddAlbum = () => {
    addAlbum(user);
  };

  let content;
  if (isFetching) {
    content = <Skeleton className="h-10 w-full" times={3} />;
  } else if (error) {
    content = <div>Error loading albums...</div>;
  } else {
    content = data.map((album) => (
      <AlbumListItem key={album.id} album={album} />
    ));
  }

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Albums for {user.name}</h3>

        <Button loading={results.isLoading} onClick={handleAddAlbum}>
          + Add Album
        </Button>
      </div>
      <div>{content}</div>
    </div>
  );
}
