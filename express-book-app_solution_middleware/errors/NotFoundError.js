class NotFoundError extends Error {
  constructor(resourceType, id) {
    super(`My error: ${resourceType} with id ${id} was not found !`);
    this.name = "NotFoundError";
  }
}

export default NotFoundError;
