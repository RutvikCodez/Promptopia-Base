export const apiCall = async (apiString: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${apiString}`,
    {
      next: { revalidate: 2 },
      cache: "no-store",
    }
  );
  const posts = await response.json();
  return posts;
};
