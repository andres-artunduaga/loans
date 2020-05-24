import { camelCase, isObject, snakeCase } from 'lodash-es';

export const toCamelCase = <T = Record<string, any>, K = any>(obj: K): T => {
  return deepTransform(obj, camelCase) as T;
};

export const toSnakeCase = <T = Record<string, any>, K = any>(obj: K): T => {
  return deepTransform(obj, snakeCase) as T;
};

function deepTransform<T = Record<string, any>, K = any>(
  obj: K,
  transformMethod: (value?: string) => string,
): Record<string, any> | K | any[] {
  if (Array.isArray(obj)) {
    return obj.map(element => deepTransform(element, transformMethod));
  }
  if (isObject(obj)) {
    const transformedObj: Record<string, any> = {};
    Object.keys(obj).forEach(key => {
      transformedObj[transformMethod(key)] = deepTransform((obj as any)[key], transformMethod);
    });
    return transformedObj;
  }
  return obj;
}
