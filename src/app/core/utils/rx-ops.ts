import { toCamelCase as toCamelCaseFunction } from "@core/utils/object-transformers"
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export const toCamelCase = <T = Record<string, any>, K = any>() => (source: Observable<any>) =>
  source.pipe(map(obj => toCamelCaseFunction<T, K>(obj)));