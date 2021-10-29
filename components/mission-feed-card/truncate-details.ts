/**
 * @description Utility function used to truncate the details text, so that the
 * card only displays a certain amount of text, thus, meeting design requirements
 */
export default function truncateDetails(details: string) {
  const splitDetails = details.split(' ');
  return splitDetails.length > 15 ? splitDetails.slice(0, 15).join(' ') + '...' : splitDetails.join(' '); 
}