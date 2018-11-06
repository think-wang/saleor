import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import * as React from "react";

import CardTitle from "../../../components/CardTitle";
import i18n from "../../../i18n";

export interface CustomerCreateDetailsProps {
  data: {
    email: string;
    firstName: string;
    lastName: string;
  };
  disabled: boolean;
  errors: Partial<{
    email: string;
    firstName: string;
    lastName: string;
  }>;
  onChange: (event: React.ChangeEvent<any>) => void;
}

const decorate = withStyles(theme => ({
  root: {
    display: "grid" as "grid",
    gridColumnGap: theme.spacing.unit * 2 + "px",
    gridRowGap: theme.spacing.unit * 3 + "px",
    gridTemplateColumns: "1fr 1fr"
  }
}));
const CustomerCreateDetails = decorate<CustomerCreateDetailsProps>(
  ({ classes, data, disabled, errors, onChange }) => (
    <Card>
      <CardTitle title={i18n.t("Customer overview")} />
      <CardContent>
        <div className={classes.root}>
          <TextField
            disabled={disabled}
            error={!!errors.firstName}
            fullWidth
            name="firstName"
            label={i18n.t("First Name")}
            helperText={errors.firstName}
            type="text"
            value={data.email}
            onChange={onChange}
          />
          <TextField
            disabled={disabled}
            error={!!errors.lastName}
            fullWidth
            name="lastName"
            label={i18n.t("Last Name")}
            helperText={errors.lastName}
            type="text"
            value={data.lastName}
            onChange={onChange}
          />
          <TextField
            disabled={disabled}
            error={!!errors.email}
            fullWidth
            name="email"
            label={i18n.t("Email address")}
            helperText={errors.email}
            type="email"
            value={data.email}
            onChange={onChange}
          />
        </div>
      </CardContent>
    </Card>
  )
);
CustomerCreateDetails.displayName = "CustomerCreateDetails";
export default CustomerCreateDetails;
