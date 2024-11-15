export function isDefault(classes: string[] | undefined): boolean {
  if (
    classes === undefined ||
    classes.some((element) => {
      return element === "";
    })
  ) {
    return true;
  }
  return false;
}
