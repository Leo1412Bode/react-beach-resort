import React from "react";
import RoomsFilter from "./RoomFilter";
import RoomsList from "./RoomList";
import { whitRoomConsumer } from "./context";
import Loading from "./Loading";

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      Hello from Room Container
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </div>
  );
}

export default whitRoomConsumer(RoomContainer);
