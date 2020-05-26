import { toCamelCase as toCamelCaseFunction } from "@core/utils/object-transformers"
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export const toCamelCase = <T = Record<string, any>, K = any>() => (source: Observable<any>) =>
  source.pipe(map(obj => toCamelCaseFunction<T, K>(obj)));