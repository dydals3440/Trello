import { databases } from '@/appwrite';

export const getTodosGroupedByColumn = async () => {
  // db에 있는것을 pull 해오는 작업 (appwrite)
  const data = await databases.listDocuments(
    process.env.NEXT_PUBLIC_DATABASE_ID!,
    process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID!
  );
  console.log(data);
};
