import SingleItem from "./SingleItem";

import { useFetchTasks } from "./customHooks";

const Items = () => {
  const { isLoading, data, isError } = useFetchTasks();

  if (isLoading) return <p style={{ marginTop: "1rem" }}>loading...</p>;
  if (isError)
    return <p style={{ marginTop: "1rem" }}>There was an error...</p>;

  return (
    <div className="items">
      {data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
