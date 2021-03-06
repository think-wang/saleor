import Table from "@material-ui/core/Table";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import TablePagination from "../../../components/TablePagination";

storiesOf("Generics / TablePagination", module)
  .add("no previous / next page", () => (
    <Table>
      <TablePagination
        colSpan={1}
        hasNextPage={false}
        hasPreviousPage={false}
        onPreviousPage={undefined}
        onNextPage={undefined}
      />
    </Table>
  ))
  .add("previous page available", () => (
    <Table>
      <TablePagination
        colSpan={1}
        hasNextPage={false}
        hasPreviousPage={true}
        onPreviousPage={undefined}
        onNextPage={undefined}
      />
    </Table>
  ))
  .add("next page available", () => (
    <Table>
      <TablePagination
        colSpan={1}
        hasNextPage={true}
        hasPreviousPage={false}
        onPreviousPage={undefined}
        onNextPage={undefined}
      />
    </Table>
  ))
  .add("both previous and next pages are available", () => (
    <Table>
      <TablePagination
        colSpan={1}
        hasNextPage={true}
        hasPreviousPage={true}
        onPreviousPage={undefined}
        onNextPage={undefined}
      />
    </Table>
  ));
