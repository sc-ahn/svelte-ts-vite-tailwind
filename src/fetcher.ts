export type Response = {
  data: any
  statusCode: number
}

export const fetcher = async <Response>(
  method: string = "GET",
  url: string,
  body?: any,
  header?: any
) => {
  const allowMethodList = ["GET", "POST", "PUT", "DELETE"];
  const headers = {
    "Content-Type": "application/json",
  };

  if (!allowMethodList.includes(method)) {
    throw new Error(`method ${method} is not allowed`);
  }

  if (header) {
    Object.assign(headers, header);
  }

  const response = await fetch(url, {
    method,
    headers,
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return {
    data: data,
    statusCode: response.status,
  }
};