import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import useStyles from './TableItem.style';
import {RecentOrderData} from '../../../../../types/models/dashboards/Ecommerce';

interface TableItemProps {
  data: RecentOrderData;
}

const TableItem: React.FC<TableItemProps> = ({data}) => {
  const classes = useStyles();
  const getPaymentStatusColor = () => {
    switch (data.status) {
      case 'Pending': {
        return '#F84E4E';
      }
      case 'Delivered': {
        return '#43C888';
      }
      default: {
        return '#E2A72E';
      }
    }
  };

  return (
    <TableRow key={data.id} className='item-hover'>
      <TableCell component='th' scope='row' className={classes.tableCell}>
        <Box className={classes.anchar}>{data.id}</Box>
      </TableCell>
      <TableCell align='left' className={classes.tableCell}>
        {data.product}
      </TableCell>
      <TableCell align='left' className={classes.tableCell}>
        {data.customer}
      </TableCell>
      <TableCell align='left' className={classes.tableCell}>
        {data.date}
      </TableCell>
      <TableCell align='left' className={classes.tableCell}>
        {data.price}
      </TableCell>
      <TableCell align='left' className={classes.tableCell}>
        <Box
          className={classes.badgeRoot}
          style={{
            color: getPaymentStatusColor(),
            backgroundColor: getPaymentStatusColor() + '44',
          }}>
          {data.status}
        </Box>
      </TableCell>
      <TableCell align='right' className={classes.tableCell}>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default TableItem;
