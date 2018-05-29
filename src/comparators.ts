/**
 * Comparator type
 */
export type Comparator<T> = (a: T, b: T) => boolean;

/**
 * Type for objects with id property
 */
export type ObjectWithId = { id : number };

/**
 * Compares 2 entities based on their id
 *
 * @param {ObjectWithId} a
 * @param {ObjectWithId} b
 * @returns {boolean}
 */
export const idBasedComparator: Comparator<ObjectWithId> = (a, b) => a && b && a.id === b.id;

/**
 * Compares 2 entities with strict equivalence
 *
 * @param a
 * @param b
 * @returns {boolean}
 */
export const identityComparator: Comparator<any> = (a, b) => a === b;

/**
 * Compares 2 objects based on entity id.
 * Either object could be number or object with id property
 *
 * @param {ObjectWithId|number} a
 * @param {ObjectWithId|number} b
 * @returns {boolean}
 */
export const idOrNumberComparator: Comparator<ObjectWithId> = (a: ObjectWithId, b: ObjectWithId) => {
  const getId = (val: ObjectWithId | number) => typeof val === 'object' ? val.id : val;

  return a && b && getId(a) === getId(b);
};
