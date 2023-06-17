interface Board {
  // key, value 값 Map으로 타입 정의
  columns: Map<TypeColumn, Column>;
}

type TypedColumn = 'todo' | 'inprogress' | 'done';

interface Column {
  id: TypedColumn;
  todos: Todo[];
}

interface Todo extends Models.document {
  $id: string;
  $createdAt: string;
  title: string;
  status: TypedColumn;
  //image가 있을 수도 없을수도
  image?: string;
}

interface Image {
  // image Storage Container ID
  bucketId: string;
  //  how locate the image
  fieldId: string;
}
