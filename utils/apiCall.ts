export const apiCall = async (apiString: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${apiString}`,
    {
      next: { revalidate: 2 },
    }
  );
  const posts = await response.json();
  return posts;
};
