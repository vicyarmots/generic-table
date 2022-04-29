export const getValues = <T extends {}>(obj: T) => {
  return Object.keys(obj).map((objKey) => obj[objKey as keyof T]);
};

export const getKeys = <T extends {}>(obj: T) => {
  return Object.keys(obj).map((objKey) => objKey as keyof T);
};

export type PrimitiveType = string | number | boolean;

export const isPrimitive = (value: any): value is PrimitiveType => {
  return (
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean"
  );
};
