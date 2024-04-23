export const BuildQueryParams = (data) => {
  return (
    data &&
    Object.entries(data)
      .map(([key, value]) => (Array.isArray(value) ? value.map((v) => `${key}=${v}`).join("&") : `${key}=${value}`))
      .join("&")
  );
};

export const paramObject = (url) => {
  const params = new URLSearchParams(url);

  const obj = {};
  for (const [key, value] of params) {
    if (obj[key]) {
      if (!Array.isArray(obj[key])) {
        obj[key] = [obj[key]];
      }
      obj[key].push(value);
    } else {
      obj[key] = value;
    }
  }
  return obj;
};
