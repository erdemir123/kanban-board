import React, { useEffect, useState } from "react";
import "./DashBoard.css";
import { IBoard } from "../../interfaces/kanban";
import { fetchBoardList } from "../../Helper/ApiLayers";

const Dashboard = () => {
  const [boards, setBoards] = useState<IBoard[]>([]);
  useEffect(() => {
    fetchData();
  }, []);
  const [targetCard, setTargetCard] = useState({
    boardId: 0,
    cardId: 0,
  });

  async function fetchData() {
    const boards: IBoard[] = await fetchBoardList();
    setBoards(boards);
  }
  return <div className="app">
  <div className="app-nav">
    <h1>Trello Kanban Board</h1>
  </div>
  <div className="app-boards-container">
    <div className="app-boards">
      {/* {boards.map((item) => (
        // <Board
        //   key={item.id}
        //   board={item}
        //   addCard={addCardHandler}
        //   removeBoard={() => removeBoard(item.id)}
        //   removeCard={removeCard}
        //   onDragEnd={onDragEnd}
        //   onDragEnter={onDragEnter}
        //   updateCard={updateCard}
        // />
      ))} */}
      <div className="app-boards-last">
        {/* <CustomInput
          displayClass="app-boards-add-board"
          editClass="app-boards-add-board-edit"
          placeholder="Enter Board Name"
          text="Add Board"
          buttonText="Add Board"
          onSubmit={addboardHandler}
        /> */}
      </div>
    </div>
  </div>
</div>
};

export default Dashboard;
