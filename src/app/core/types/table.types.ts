export type ZNBTableFieldDefinition<T> = {
  field: string;
  title: string;
  getData: (item: T) => string | number | boolean | void;
  width?: string;
  templateName: string;
};
