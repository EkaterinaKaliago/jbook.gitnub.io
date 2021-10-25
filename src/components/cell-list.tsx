import React, { Fragment } from "react";
import { useTypedSelector } from "../hooks/use-typed-selector";
import CellListItem from "./cell-list-item";
import AddCell from "./add-cell";

const CellList: React.FC = () => {
  const cellsStore = useTypedSelector(({cells}) => cells);
  const cellData = cellsStore ? cellsStore.order.map((id: any) => cellsStore.data[id]) : [];

  const renderedCells = cellData.map(cell => (
    <Fragment key={cell.id}>
      <CellListItem cell={cell} />
      <AddCell prevCellId={cell.id} />
    </Fragment>
  ));

  return (
    <div>
      <AddCell forceVisible={cellData.length === 0} prevCellId={null} />
      {renderedCells}
    </div>
  )
};

export default CellList;