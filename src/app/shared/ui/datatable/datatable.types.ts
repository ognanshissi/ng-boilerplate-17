export type ColumnType =
  | 'string'
  | 'date'
  | 'currency'
  | 'number'
  | 'customDisplay';

export type CustomDisplayType = 'string' | 'date' | 'currency' | 'number';

export interface DataTableColumn<T> {
  prop: string;
  name: string;
  type: ColumnType;
  sortable?: boolean;
  handleCustomDisplay?: (item: T) => any;
}

export interface DataTableConfig {
  property: string;
  uniqueIdentifier: string;
  selection?: boolean;
  hasActions?: boolean;
  rowClickable?: boolean;
  pagination: TablePagingConfig;
}

export interface TableEntity {
  [key: string]: any;
}

export interface TablePagingConfig {
  serverSide: boolean;
  pageIndex: number;
  pageSize: number;
  totalElements?: number;
  pageSizeOptions: number[];
}
