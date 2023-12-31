import { formatCurrency } from 'utils/helpers'

export const orderColumnsKeys = {
  'Customer name': { columnName: 'name', tableName: 'orders' },
  'Email address': { columnName: 'email', tableName: 'orders' },
  'Product name': { columnName: 'product_name', tableName: 'products' },
  'Order status': { columnName: 'order_status', tableName: 'orders' },
  'Order total': { columnName: 'total_cents', tableName: 'orders' },
  'Transaction id': { columnName: 'transaction_id', tableName: 'orders' },
  Shipper: { columnName: 'shipper_name', tableName: 'orders' },
  'Tracking number': { columnName: 'tracking_number', tableName: 'orders' },
}

export const orderColumns = [
  {
    name: 'Customer name',
    selector: (row) => row.name,
    sortable: true,
    grow: 1.8,
    wrap: true,
  },
  {
    name: 'Email address',
    selector: (row) => row.email,
    sortable: true,
    grow: 2.5,
    wrap: true,
  },
  {
    name: 'Product name',
    selector: (row) => row.product?.product_name,
    grow: 2,
    wrap: true,
    sortable: true,
  },
  {
    name: 'Color',
    selector: (row) => row.product?.inventories.reduce((acc, item) => `${item.color}${acc && ','} ${acc}`, ''),
    grow: 3,
  },
  {
    name: 'Size',
    selector: (row) => row.product?.inventories.reduce((acc, item) => `${item.size}${acc && ','} ${acc}`, ''),
    width: '10rem',
  },
  {
    name: 'Order status',
    selector: (row) => row.order_status,
    sortable: true,
    grow: 1.5,
    wrap: true,
  },
  {
    name: 'Order total',
    selector: (row) => formatCurrency(row.total_cents / 100),
    sortable: true,
    grow: 1.5,
    wrap: true,
  },
  {
    name: 'Transaction id',
    selector: (row) => row.transaction_id,
    sortable: true,
    grow: 1.5,
    wrap: true,
  },
  {
    name: 'Shipper',
    selector: (row) => row.shipper_name,
    sortable: true,
    wrap: true,
  },
  {
    name: 'Tracking number',
    selector: (row) => row.tracking_number,
    sortable: true,
    grow: 2,
    wrap: true,
  },
]

export const orderStatusOptions = [
  { value: 'All', label: 'All' },
  { value: 'Pending', label: 'Pending' },
  { value: 'Paid', label: 'Paid' },
  { value: 'Fulfulled', label: 'Fulfulled' },
  { value: 'Shipped', label: 'Shipped' },
  { value: 'Open', label: 'Open' },
]

export const shipperNameOptions = [
  { value: 'All', label: 'All' },
  { value: 'USPS', label: 'USPS' },
  { value: 'DHL', label: 'DHL' },
  { value: 'FedEx', label: 'FedEx' },
  { value: 'UPS', label: 'UPS' },
]
