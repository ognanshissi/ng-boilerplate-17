import { SelectionModel } from '@angular/cdk/collections';
import {
  AfterViewInit,
  booleanAttribute,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { DataTableDataSource } from './datatable-datasource';
import {
  DataTableColumn,
  DataTableConfig,
  TableEntity,
} from '@socle/ui';

@Component({
  selector: 'core-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss'],
})
export class DataTableComponent<T extends TableEntity>
  implements AfterViewInit, OnChanges, OnInit
{
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<T>;
  @Input() columns: DataTableColumn<T>[] = [];
  @Input() data: T[] = [];
  @Input() config!: DataTableConfig;
  @Input({ transform: booleanAttribute }) loading!: boolean;
  @Input() emptyMessage = 'Aucun élément trouvé';
  @Output() rowClick: EventEmitter<T> = new EventEmitter<T>(true);
  @Output() onPageEvent: EventEmitter<PageEvent> = new EventEmitter<PageEvent>(
    true
  );
  rowSelected: SelectionModel<T> = new SelectionModel(
    false,
    [],
    true,
    (r1: T, r2: T) => {
      return (
        r1[this.config.uniqueIdentifier] === r2[this.config.uniqueIdentifier]
      );
    }
  );
  @ContentChild('actionTemplate') public actionTemplate!: TemplateRef<unknown>;
  dataSource!: DataTableDataSource<T>;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns: string[] = [];

  public tooltipMessage(text: string): string {
    if (!text) {
      return '';
    }

    if (text.length >= 27) {
      return text;
    }
    return '';
  }

  public pageEvent(event: PageEvent) {
    if (this.config.pagination.serverSide) {
      this.onPageEvent.emit(event);
    }
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['columns']) {
      this.displayedColumns = this.columns.map((col) => col.prop);

      if (this.config?.hasActions) {
        this.displayedColumns.push('action');
      }

      if (this.config?.selection) {
        this.displayedColumns.unshift('select');
      }
    }

    if (!changes['data'].firstChange) {
      this.dataSource = new DataTableDataSource<T>(
        changes['data']?.currentValue,
        this.columns
      );
      this._updateDatasource();
    }

    if (changes['loading']) {
      this.loading = changes['loading']?.currentValue;
    }
  }

  public ngAfterViewInit(): void {
    this._updateDatasource();
  }

  public ngOnInit(): void {
    this.dataSource = new DataTableDataSource<T>(this.data, this.columns);
  }

  public handleRowClick(row: T) {
    this.rowSelected.select(row);
    this.rowClick.emit(row);
  }

  private _updateDatasource() {
    if (this.config.pagination?.serverSide) {
      this.table.dataSource = [...this.data];
      this.paginator.length =
        this.config.pagination.totalElements ?? this.data.length;
    }

    this.paginator.pageIndex = this.config.pagination.pageIndex;
    this.paginator.pageSizeOptions = this.config.pagination.pageSizeOptions;
    this.paginator.pageSize = this.config.pagination.pageSize;

    this.dataSource.sort = this.sort;
    if (!this.config.pagination.serverSide) {
      this.paginator.length = this.data.length;
      this.table.dataSource = this.dataSource;
    }
    this.dataSource.paginator = this.paginator;
  }
}
