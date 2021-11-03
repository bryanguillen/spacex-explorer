/**
 * @description Wrapper for converting unix timestamp -> MM/DD/YYYY;
 * if there were more use cases, a library could be leveraged here
 */
export default function parseUnixTimestamp(unixTimestamp: number) {
  const date = new Date(unixTimestamp * 1000); // convert from s to ms
  const month = date.getMonth() + 1;

  return `${month}/${date.getDate()}/${date.getFullYear()}`;
}